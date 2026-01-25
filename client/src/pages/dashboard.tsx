import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, LogOut, Loader2, Trash2, Pencil, List, X } from "lucide-react";

interface Rate {
  label: string;
  price: number;
}

interface Property {
  id: string;
  name: string;
  location: string;
  rates: Rate[];
  units: number;
  facilities: string[];
  capacity: string;
  notes: string[];
  image: string;
  slideImages?: string[];
  type: "villa" | "glamping";
}

export default function Dashboard() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", token: "" });
  
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [view, setView] = useState<"list" | "form">("list");
  const [editingId, setEditingId] = useState<string | null>(null);

  const [facilities, setFacilities] = useState<string[]>([""]);
  const [notes, setNotes] = useState<string[]>([""]);
  const [rates, setRates] = useState<Rate[]>([
    { label: "Weekday", price: 0 },
    { label: "Weekend", price: 0 }
  ]);
  const [slideImages, setSlideImages] = useState<string[]>([""]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    location: "",
    type: "villa" as "villa" | "glamping",
    capacity: "",
    units: 1,
    image: "",
  });

  const repo = "elfarsaf-dev/susah-brok";
  const path = "shared/data.ts";

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === "admin") {
      setIsLoggedIn(true);
      fetchProperties();
    }
  }, []);

  const fetchProperties = async () => {
    const token = localStorage.getItem("github_token");
    if (!token) return;

    try {
      const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        headers: { Authorization: `token ${token}` }
      });
      const data = await res.json();
      const content = atob(data.content);
      
      const villaMatch = content.match(/export const villaData: Property\[\] = (\[[\s\S]*?\]);/);
      const glampingMatch = content.match(/export const glampingData: Property\[\] = (\[[\s\S]*?\]);/);
      
      let allProps: Property[] = [];
      
      const parseData = (match: any) => {
        if (!match) return [];
        try {
          const cleanStr = match[1]
            .replace(/Property\[\]/g, '')
            .replace(/,\s*\]/, ']')
            .replace(/([{,])\s*([a-zA-Z0-9_]+):/g, '$1"$2":');
          
          try {
            return JSON.parse(cleanStr);
          } catch (e) {
            return eval(`(${match[1]})`);
          }
        } catch (e) { return []; }
      };

      allProps = [...parseData(villaMatch), ...parseData(glampingMatch)];
      setProperties(allProps);
    } catch (error) {
      toast({ title: "Error", description: "Gagal mengambil data", variant: "destructive" });
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === "admin") {
      localStorage.setItem("github_token", loginForm.token);
      localStorage.setItem("user", loginForm.username);
      setIsLoggedIn(true);
      fetchProperties();
      toast({ title: "Login Berhasil" });
    } else {
      toast({ title: "Login Gagal", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const startEdit = (prop: Property) => {
    setEditingId(prop.id);
    setFormData({
      id: prop.id,
      name: prop.name,
      location: prop.location,
      type: prop.type,
      capacity: prop.capacity,
      units: prop.units,
      image: prop.image,
    });
    setRates(prop.rates && prop.rates.length > 0 ? prop.rates : [{ label: "Weekday", price: 0 }]);
    setFacilities(prop.facilities && prop.facilities.length > 0 ? prop.facilities : [""]);
    setNotes(prop.notes && prop.notes.length > 0 ? prop.notes : [""]);
    setSlideImages(prop.slideImages && prop.slideImages.length > 0 ? prop.slideImages : [""]);
    setView("form");
  };

  const formatObjectForTS = (obj: any) => {
    return JSON.stringify(obj, null, 2)
      .replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
  };

  const updateGithubContent = async (newContent: string, message: string, sha: string) => {
    const token = localStorage.getItem("github_token");
    const updateRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
      method: "PUT",
      headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        content: btoa(newContent),
        sha,
      }),
    });
    if (!updateRes.ok) throw new Error("Gagal update GitHub");
    return updateRes;
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus properti ini?")) return;
    setLoading(true);
    const token = localStorage.getItem("github_token");
    try {
      const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        headers: { Authorization: `token ${token}` }
      });
      const fileData = await getRes.json();
      let content = atob(fileData.content);
      
      // Safe identification of the property block within ANY array
      const idRegex = new RegExp(`\\{[\\s\\S]*?id:\\s*"${id}"[\\s\\S]*?\\}`, 'g');
      
      // Custom block finder with brace counting to be 100% sure
      let matches = [];
      let m;
      while ((m = idRegex.exec(content)) !== null) {
          let open = 0;
          let start = m.index;
          let end = -1;
          for(let i = start; i < content.length; i++) {
              if(content[i] === '{') open++;
              if(content[i] === '}') open--;
              if(open === 0) {
                  end = i + 1;
                  break;
              }
          }
          if (end !== -1) matches.push({start, end});
      }

      if (matches.length > 0) {
          // Remove all matches and handle comma cleanup
          let updatedContent = content;
          // Sort matches descending to remove from end without affecting indices
          matches.sort((a, b) => b.start - a.start).forEach(match => {
              updatedContent = updatedContent.slice(0, match.start) + updatedContent.slice(match.end);
          });
          
          // Cleanup trailing commas and double newlines
          updatedContent = updatedContent.replace(/,\s*,/g, ',').replace(/\[\s*,/g, '[').replace(/,\s*\]/g, ']');
          
          await updateGithubContent(updatedContent, `Delete property: ${id}`, fileData.sha);
          toast({ title: "Berhasil dihapus" });
          fetchProperties();
      } else {
          throw new Error("Properti tidak ditemukan");
      }
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("github_token");
    setLoading(true);
    
    try {
      const propertyData = {
        id: formData.id,
        name: formData.name,
        location: formData.location,
        rates: rates.filter(r => r.label.trim()),
        units: Number(formData.units),
        facilities: facilities.filter(f => f.trim()),
        capacity: formData.capacity,
        notes: notes.filter(n => n.trim()),
        image: formData.image,
        slideImages: slideImages.filter(s => s.trim()),
        type: formData.type
      };

      const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        headers: { Authorization: `token ${token}` }
      });
      const fileData = await getRes.json();
      let content = atob(fileData.content);
      
      // REPAIR: Full cleanup of corrupted fragments
      content = content.replace(/import { type Property } from "\.\/schema";[\s\S]*?export const villaData/, 'import { type Property } from "./schema";\n\nexport const villaData');
      
      const formattedData = formatObjectForTS(propertyData);
      let updatedContent = "";

      // Safe identification of the array scope
      const arrayLabel = propertyData.type === "villa" ? "villaData" : "glampingData";
      const arrayRegex = new RegExp(`(export const ${arrayLabel}: Property\\[\\] = \\[)([\\s\\S]*?)(\\];)`);
      const arrayMatch = content.match(arrayRegex);
      
      if (!arrayMatch) throw new Error(`Could not find ${arrayLabel} array`);

      const beforeArray = content.slice(0, arrayMatch.index);
      const arrayPrefix = arrayMatch[1];
      let arrayBody = arrayMatch[2];
      const arraySuffix = arrayMatch[3];
      const afterArray = content.slice(arrayMatch.index + arrayMatch[0].length);

      // Remove existing entries of this ID if any
      const idSearchRegex = new RegExp(`\\{[\\s\\S]*?id:\\s*"${propertyData.id}"[\\s\\S]*?\\}`, 'g');
      let bodyMatches = [];
      let bm;
      while ((bm = idSearchRegex.exec(arrayBody)) !== null) {
          let open = 0;
          let start = bm.index;
          let end = -1;
          for(let i = start; i < arrayBody.length; i++) {
              if(arrayBody[i] === '{') open++;
              if(arrayBody[i] === '}') open--;
              if(open === 0) {
                  end = i + 1;
                  break;
              }
          }
          if (end !== -1) bodyMatches.push({start, end});
      }

      bodyMatches.sort((a, b) => b.start - a.start).forEach(match => {
          arrayBody = arrayBody.slice(0, match.start) + arrayBody.slice(match.end);
      });

      // Cleanup array body commas
      arrayBody = arrayBody.trim().replace(/^,|,$/g, '').replace(/,\s*,/g, ',');
      
      // Add the new/edited entry at the top
      const separator = arrayBody ? ',\n' : '';
      const newArrayBody = `\n${formattedData}${separator}${arrayBody}\n`;
      
      updatedContent = beforeArray + arrayPrefix + newArrayBody + arraySuffix + afterArray;

      await updateGithubContent(updatedContent, `${editingId ? 'Edit' : 'Add'} property: ${propertyData.name}`, fileData.sha);

      toast({ title: "Berhasil", description: "Data tersimpan ke GitHub" });
      setView("list");
      setEditingId(null);
      fetchProperties();
    } catch (error: any) {
      toast({ title: "Error", variant: "destructive", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const addField = (setter: any, current: any[]) => setter([...current, ""]);
  const removeField = (setter: any, current: any[], index: number) => {
    if (current.length > 1) setter(current.filter((_, i) => i !== index));
  };
  const updateField = (setter: any, current: any[], index: number, value: string) => {
    const next = [...current];
    next[index] = value;
    setter(next);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader><CardTitle className="text-2xl text-center">Admin Dashboard</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2"><Label>Username</Label><Input value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} required /></div>
              <div className="space-y-2"><Label>GitHub Token</Label><Input type="password" value={loginForm.token} onChange={(e) => setLoginForm({ ...loginForm, token: e.target.value })} required /></div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Property Dashboard</h1>
          <div className="flex gap-2">
            <Button variant={view === "list" ? "default" : "outline"} onClick={() => setView("list")}>
              <List className="mr-2 h-4 w-4" /> Daftar
            </Button>
            <Button variant={view === "form" ? "default" : "outline"} onClick={() => { setView("form"); setEditingId(null); }}>
              <Plus className="mr-2 h-4 w-4" /> Tambah
            </Button>
            <Button variant="ghost" onClick={handleLogout}><LogOut className="h-4 w-4" /></Button>
          </div>
        </div>

        {view === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((prop) => (
              <Card key={prop.id} className="overflow-hidden">
                <img src={prop.image} alt={prop.name} className="h-40 w-full object-cover" />
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{prop.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{prop.location}</p>
                  <p className="text-xs font-bold uppercase mt-1">{prop.type}</p>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex justify-between gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => startEdit(prop)}><Pencil className="mr-2 h-3 w-3" /> Edit</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(prop.id)}><Trash2 className="h-3 w-3" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{editingId ? "Edit Properti" : "Tambah Properti Baru"}</CardTitle>
                <Button type="button" variant="ghost" size="icon" onClick={() => setView("list")}><X className="h-4 w-4" /></Button>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Tipe Properti</Label>
                  <Select value={formData.type} onValueChange={(v: "villa" | "glamping") => setFormData({...formData, type: v})}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="villa">Villa</SelectItem><SelectItem value="glamping">Glamping</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>ID Properti</Label><Input value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})} disabled={!!editingId} required /></div>
                <div className="space-y-2"><Label>Nama</Label><Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></div>
                <div className="space-y-2"><Label>Lokasi</Label><Input value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} required /></div>
                <div className="space-y-2"><Label>Kapasitas</Label><Input value={formData.capacity} onChange={(e) => setFormData({...formData, capacity: e.target.value})} required /></div>
                <div className="space-y-2"><Label>Units</Label><Input type="number" value={formData.units} onChange={(e) => setFormData({...formData, units: parseInt(e.target.value)})} required /></div>
                <div className="md:col-span-2 space-y-2"><Label>URL Gambar Utama</Label><Input value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} required /></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Harga (Rates)</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {rates.map((rate, index) => (
                  <div key={index} className="flex gap-4 items-end">
                    <div className="flex-1 space-y-2"><Label>Label</Label><Input value={rate.label} onChange={(e) => { const next = [...rates]; next[index].label = e.target.value; setRates(next); }} /></div>
                    <div className="flex-1 space-y-2"><Label>Harga</Label><Input type="number" value={rate.price} onChange={(e) => { const next = [...rates]; next[index].price = parseInt(e.target.value); setRates(next); }} /></div>
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeField(setRates, rates, index)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => setRates([...rates, { label: "", price: 0 }])}>Tambah Harga</Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle>Fasilitas</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {facilities.map((f, i) => (
                    <div key={i} className="flex gap-2">
                      <Input value={f} onChange={(e) => updateField(setFacilities, facilities, i, e.target.value)} />
                      <Button type="button" variant="ghost" size="icon" onClick={() => removeField(setFacilities, facilities, i)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={() => addField(setFacilities, facilities)}>Tambah Fasilitas</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Catatan</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {notes.map((n, i) => (
                    <div key={i} className="flex gap-2">
                      <Input value={n} onChange={(e) => updateField(setNotes, notes, i, e.target.value)} />
                      <Button type="button" variant="ghost" size="icon" onClick={() => removeField(setNotes, notes, i)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={() => addField(setNotes, notes)}>Tambah Catatan</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader><CardTitle>Galeri Foto</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {slideImages.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={s} onChange={(e) => updateField(setSlideImages, slideImages, i, e.target.value)} />
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeField(setSlideImages, slideImages, i)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => addField(setSlideImages, slideImages)}>Tambah Gambar Galeri</Button>
              </CardContent>
            </Card>

            <Button type="submit" className="w-full h-12" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mr-2" /> : editingId ? "Update Properti ke GitHub" : "Simpan Properti ke GitHub"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

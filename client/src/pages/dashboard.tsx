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
          // Simplified evaluation for internal structured data
          const cleanStr = match[1].replace(/,\s*\]/, ']').replace(/Property\[\]/g, '');
          // This is a controlled environment parsing static data
          return JSON.parse(JSON.stringify(eval(cleanStr)));
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
    setRates(prop.rates.length > 0 ? prop.rates : [{ label: "Weekday", price: 0 }]);
    setFacilities(prop.facilities.length > 0 ? prop.facilities : [""]);
    setNotes(prop.notes.length > 0 ? prop.notes : [""]);
    setSlideImages(prop.slideImages && prop.slideImages.length > 0 ? prop.slideImages : [""]);
    setView("form");
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
      const content = atob(fileData.content);
      
      const regex = new RegExp(`\\{[^\\{]*?id:\\s*"${id}"[\\s\\S]*?\\},?\\n?`, 'g');
      const updatedContent = content.replace(regex, '');

      const updateRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        method: "PUT",
        headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Delete property: ${id}`,
          content: btoa(updatedContent),
          sha: fileData.sha,
        }),
      });

      if (!updateRes.ok) throw new Error("Gagal update GitHub");
      toast({ title: "Berhasil dihapus" });
      fetchProperties();
    } catch (e) {
      toast({ title: "Error", description: "Gagal menghapus", variant: "destructive" });
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
        ...formData,
        rates,
        facilities: facilities.filter(f => f.trim()),
        notes: notes.filter(n => n.trim()),
        slideImages: slideImages.filter(s => s.trim()),
        units: Number(formData.units)
      };

      const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        headers: { Authorization: `token ${token}` }
      });
      const fileData = await getRes.json();
      const content = atob(fileData.content);
      
      let updatedContent = "";
      if (editingId) {
        // Find exactly the block for the property being edited
        // Matches the beginning of the object that contains the specific ID
        const startRegex = new RegExp(`\\{[\\s\\S]*?id:\\s*"${editingId}"`, 'g');
        const match = startRegex.exec(content);
        
        if (match) {
          let openBraces = 0;
          let endPos = -1;
          for (let i = match.index; i < content.length; i++) {
            if (content[i] === '{') openBraces++;
            if (content[i] === '}') openBraces--;
            if (openBraces === 0) {
              endPos = i + 1;
              break;
            }
          }
          
          if (endPos !== -1) {
            // Replaces ONLY that block, keeping the rest of the file intact
            updatedContent = content.slice(0, match.index) + JSON.stringify(propertyData, null, 2) + content.slice(endPos);
          } else {
            throw new Error("Could not find property block end");
          }
        } else {
          throw new Error("Could not find property block start");
        }
      } else {
        // Add mode: Insert at the beginning of the array
        const arrayLabel = propertyData.type === "villa" ? "villaData" : "glampingData";
        const arrayRegex = new RegExp(`export const ${arrayLabel}: Property\\[\\] = \\[`);
        const arrayMatch = content.match(arrayRegex);
        if (!arrayMatch) throw new Error(`Could not find ${arrayLabel} in file`);
        
        const insertPos = arrayMatch.index! + arrayMatch[0].length;
        updatedContent = content.slice(0, insertPos) + "\n" + JSON.stringify(propertyData, null, 2) + ",\n" + content.slice(insertPos);
      }

      const updateRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        method: "PUT",
        headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `${editingId ? 'Edit' : 'Add'} property: ${propertyData.name}`,
          content: btoa(updatedContent),
          sha: fileData.sha,
        }),
      });

      if (!updateRes.ok) throw new Error("Gagal update GitHub");

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

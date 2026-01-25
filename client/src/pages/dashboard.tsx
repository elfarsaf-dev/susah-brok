import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, LogOut, Loader2, Trash2, Pencil, List, X, Key, LayoutDashboard } from "lucide-react";

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
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  
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
      
      const parseData = (match: any, type: "villa" | "glamping") => {
        if (!match) return [];
        try {
          const cleanStr = match[1]
            .replace(/Property\[\]/g, '')
            .replace(/,\s*\]/, ']')
            .replace(/([{,])\s*([a-zA-Z0-9_]+):/g, '$1"$2":');
          
          let parsed = [];
          try {
            parsed = JSON.parse(cleanStr);
          } catch (e) {
            parsed = eval(`(${match[1]})`);
          }
          return parsed.map((p: any) => ({ ...p, type }));
        } catch (e) { return []; }
      };

      allProps = [...parseData(villaMatch, "villa"), ...parseData(glampingMatch, "glamping")];
      setProperties(allProps);
    } catch (error) {
      toast({ title: "Error", description: "Gagal mengambil data", variant: "destructive" });
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === "admin") {
      localStorage.setItem("github_token", loginForm.password);
      localStorage.setItem("user", loginForm.username);
      setIsLoggedIn(true);
      fetchProperties();
      toast({ title: "Login Berhasil", description: "Selamat datang kembali, Admin!" });
    } else {
      toast({ title: "Login Gagal", description: "Username atau Password salah.", variant: "destructive" });
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatObjectForTS = (obj: any) => {
    const { type, ...rest } = obj;
    return JSON.stringify(rest, null, 2)
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
    if (!updateRes.ok) throw new Error("Gagal update data");
    return updateRes;
  };

  const extractBlocks = (text: string) => {
    const blocks: { start: number; end: number; content: string }[] = [];
    let braceCount = 0;
    let start = -1;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === '{') {
        if (braceCount === 0) start = i;
        braceCount++;
      } else if (text[i] === '}') {
        braceCount--;
        if (braceCount === 0 && start !== -1) {
          blocks.push({ start, end: i + 1, content: text.slice(start, i + 1) });
          start = -1;
        }
      }
    }
    return blocks;
  };

  const handleDelete = async (prop: Property) => {
    if (!confirm(`Yakin ingin menghapus ${prop.name}?`)) return;
    setLoading(true);
    const token = localStorage.getItem("github_token");
    try {
      const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        headers: { Authorization: `token ${token}` }
      });
      const fileData = await getRes.json();
      let content = atob(fileData.content);
      
      const arrayLabel = prop.type === "villa" ? "villaData" : "glampingData";
      const arrayRegex = new RegExp(`(export const ${arrayLabel}: Property\\[\\] = \\[)([\\s\\S]*?)(\\];)`);
      const arrayMatch = content.match(arrayRegex);
      
      if (!arrayMatch) throw new Error(`Data array tidak ditemukan`);

      const beforeArray = content.slice(0, arrayMatch.index);
      const arrayPrefix = arrayMatch[1];
      let arrayBody = arrayMatch[2];
      const arraySuffix = arrayMatch[3];
      const afterArray = content.slice(arrayMatch.index + arrayMatch[0].length);

      const blocks = extractBlocks(arrayBody);
      const blockToRemove = blocks.find(b => {
        const idMatch = b.content.match(/id:\s*(["'])(.*?)\1/);
        return idMatch && idMatch[2] === prop.id;
      });

      if (blockToRemove) {
          arrayBody = arrayBody.slice(0, blockToRemove.start) + arrayBody.slice(blockToRemove.end);
          arrayBody = arrayBody.trim().replace(/^,|,$/g, '').replace(/,\s*,/g, ',');
          const updatedContent = beforeArray + arrayPrefix + (arrayBody ? `\n${arrayBody}\n` : '') + arraySuffix + afterArray;
          await updateGithubContent(updatedContent, `Hapus properti: ${prop.id}`, fileData.sha);
          toast({ title: "Berhasil dihapus" });
          fetchProperties();
      } else {
          throw new Error(`Properti tidak ditemukan`);
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
      
      const formattedData = formatObjectForTS(propertyData);
      const arrayLabel = propertyData.type === "villa" ? "villaData" : "glampingData";
      const arrayRegex = new RegExp(`(export const ${arrayLabel}: Property\\[\\] = \\[)([\\s\\S]*?)(\\];)`);
      const arrayMatch = content.match(arrayRegex);
      
      if (!arrayMatch) throw new Error(`Data array tidak ditemukan`);

      const beforeArray = content.slice(0, arrayMatch.index);
      const arrayPrefix = arrayMatch[1];
      let arrayBody = arrayMatch[2];
      const arraySuffix = arrayMatch[3];
      const afterArray = content.slice(arrayMatch.index + arrayMatch[0].length);

      const blocks = extractBlocks(arrayBody);
      const sortedBlocksToRemove = blocks
        .filter(b => {
          const idMatch = b.content.match(/id:\s*(["'])(.*?)\1/);
          return idMatch && idMatch[2] === propertyData.id;
        })
        .sort((a, b) => b.start - a.start);

      for (const b of sortedBlocksToRemove) {
        arrayBody = arrayBody.slice(0, b.start) + arrayBody.slice(b.end);
      }

      arrayBody = arrayBody.trim().replace(/^,|,$/g, '').replace(/,\s*,/g, ',');
      const separator = arrayBody ? ',\n' : '';
      const newArrayBody = `\n${formattedData}${separator}${arrayBody}\n`;
      const updatedContent = beforeArray + arrayPrefix + newArrayBody + arraySuffix + afterArray;

      await updateGithubContent(updatedContent, `${editingId ? 'Update' : 'Tambah'} properti: ${propertyData.name}`, fileData.sha);

      toast({ title: "Berhasil", description: "Data berhasil diperbarui." });
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
      <div className="flex items-center justify-center min-h-screen bg-[#f8f9fa] p-4">
        <Card className="w-full max-w-md shadow-lg border-none">
          <CardHeader className="space-y-1 pb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Key className="text-white w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Admin Panel</CardTitle>
            <p className="text-center text-sm text-muted-foreground">Silakan masuk untuk mengelola properti</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username"
                  placeholder="Masukkan username"
                  className="h-11"
                  value={loginForm.username} 
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Masukkan password"
                  className="h-11"
                  value={loginForm.password} 
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} 
                  required 
                />
              </div>
              <Button type="submit" className="w-full h-11 text-base font-semibold mt-2">
                Masuk ke Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold tracking-tight hidden sm:block">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant={view === "list" ? "default" : "ghost"} 
                size="sm"
                className="rounded-full"
                onClick={() => setView("list")}
              >
                <List className="mr-2 h-4 w-4" /> <span className="hidden xs:inline">Daftar</span>
              </Button>
              <Button 
                variant={view === "form" ? "default" : "ghost"} 
                size="sm"
                className="rounded-full"
                onClick={() => { setView("form"); setEditingId(null); }}
              >
                <Plus className="mr-2 h-4 w-4" /> <span className="hidden xs:inline">Tambah</span>
              </Button>
              <div className="w-px h-6 bg-border mx-1" />
              <Button variant="ghost" size="icon" className="rounded-full text-destructive" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === "list" ? (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Semua Properti</h2>
                <p className="text-muted-foreground">Kelola {properties.length} villa dan glamping yang terdaftar</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((prop) => (
                <Card key={`${prop.type}-${prop.id}`} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow border-none">
                  <div className="relative aspect-video">
                    <img src={prop.image} alt={prop.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                        prop.type === "villa" ? "bg-blue-500 text-white" : "bg-emerald-500 text-white"
                      }`}>
                        {prop.type}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg font-bold line-clamp-1">{prop.name}</CardTitle>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">ID: {prop.id}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">{prop.location}</p>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 flex items-center justify-between gap-3">
                    <Button variant="outline" size="sm" className="flex-1 rounded-lg" onClick={() => startEdit(prop)}>
                      <Pencil className="mr-2 h-3.5 w-3.5" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm" className="rounded-lg px-3" onClick={() => handleDelete(prop)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setView("list")}>
                <X className="h-5 w-5" />
              </Button>
              <h2 className="text-2xl font-bold">{editingId ? "Edit Properti" : "Tambah Properti Baru"}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <Card className="border-none shadow-sm overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="text-lg">Informasi Dasar</CardTitle>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Tipe Properti</Label>
                    <Select value={formData.type} onValueChange={(v: "villa" | "glamping") => setFormData({...formData, type: v})}>
                      <SelectTrigger className="h-11">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="glamping">Glamping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>ID Properti</Label>
                    <Input className="h-11" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})} disabled={!!editingId} placeholder="Contoh: villa-01" required />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label>Nama Properti</Label>
                    <Input className="h-11" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Masukkan nama villa/glamping" required />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label>Lokasi</Label>
                    <Input className="h-11" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="Alamat lengkap atau area" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Kapasitas</Label>
                    <Input className="h-11" value={formData.capacity} onChange={(e) => setFormData({...formData, capacity: e.target.value})} placeholder="Contoh: 4-6 Orang" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Jumlah Unit</Label>
                    <Input className="h-11" type="number" value={formData.units} onChange={(e) => setFormData({...formData, units: parseInt(e.target.value)})} required />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label>URL Gambar Utama</Label>
                    <Input className="h-11" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} placeholder="https://..." required />
                  </div>
                </CardContent>
              </Card>

              {/* Rates */}
              <Card className="border-none shadow-sm overflow-hidden">
                <CardHeader className="bg-muted/30 flex flex-row items-center justify-between py-4">
                  <CardTitle className="text-lg">Harga Sewa (Rates)</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {rates.map((rate, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border bg-muted/10 relative">
                      <div className="flex-1 space-y-2">
                        <Label>Label Harga</Label>
                        <Input className="h-10 bg-white" value={rate.label} onChange={(e) => { const next = [...rates]; next[index].label = e.target.value; setRates(next); }} placeholder="Weekday / Weekend" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <Label>Harga (Rp)</Label>
                        <Input className="h-10 bg-white" type="number" value={rate.price} onChange={(e) => { const next = [...rates]; next[index].price = parseInt(e.target.value); setRates(next); }} placeholder="Harga per malam" />
                      </div>
                      <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 mt-auto text-destructive" onClick={() => removeField(setRates, rates, index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" className="w-full border-dashed" onClick={() => setRates([...rates, { label: "", price: 0 }])}>
                    <Plus className="mr-2 h-4 w-4" /> Tambah Varian Harga
                  </Button>
                </CardContent>
              </Card>

              {/* Facilities & Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-sm overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-lg">Fasilitas</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {facilities.map((f, i) => (
                      <div key={i} className="flex gap-2">
                        <Input className="h-10" value={f} onChange={(e) => updateField(setFacilities, facilities, i, e.target.value)} placeholder="Contoh: Kolam Renang" />
                        <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeField(setFacilities, facilities, i)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button type="button" variant="outline" className="w-full border-dashed" onClick={() => addField(setFacilities, facilities)}>
                      <Plus className="mr-2 h-4 w-4" /> Tambah Fasilitas
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-lg">Catatan Penting</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {notes.map((n, i) => (
                      <div key={i} className="flex gap-2">
                        <Input className="h-10" value={n} onChange={(e) => updateField(setNotes, notes, i, e.target.value)} placeholder="Contoh: Check-in jam 14.00" />
                        <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeField(setNotes, notes, i)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button type="button" variant="outline" className="w-full border-dashed" onClick={() => addField(setNotes, notes)}>
                      <Plus className="mr-2 h-4 w-4" /> Tambah Catatan
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Gallery */}
              <Card className="border-none shadow-sm overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="text-lg">Galeri Foto (Slide Images)</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {slideImages.map((s, i) => (
                    <div key={i} className="flex gap-2">
                      <Input className="h-10" value={s} onChange={(e) => updateField(setSlideImages, slideImages, i, e.target.value)} placeholder="URL gambar galeri" />
                      <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeField(setSlideImages, slideImages, i)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" className="w-full border-dashed" onClick={() => addField(setSlideImages, slideImages)}>
                    <Plus className="mr-2 h-4 w-4" /> Tambah Gambar Galeri
                  </Button>
                </CardContent>
              </Card>

              <div className="sticky bottom-4 z-10 pt-4">
                <Button type="submit" className="w-full h-14 text-lg font-bold shadow-xl" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin mr-2" /> : editingId ? "Perbarui Data Properti" : "Simpan Properti Baru"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </main>
      
      {/* Footer Space for Mobile */}
      <div className="h-20 sm:hidden" />
    </div>
  );
}

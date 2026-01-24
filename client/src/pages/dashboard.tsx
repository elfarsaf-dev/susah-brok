import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, LogOut, Loader2, Trash2 } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", token: "" });
  
  const [loading, setLoading] = useState(false);
  const [facilities, setFacilities] = useState<string[]>([""]);
  const [notes, setNotes] = useState<string[]>([""]);
  const [rates, setRates] = useState<{ label: string; price: number }[]>([
    { label: "Weekday", price: 0 },
    { label: "Weekend", price: 0 }
  ]);
  const [slideImages, setSlideImages] = useState<string[]>([""]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    location: "",
    type: "villa",
    capacity: "",
    units: 1,
    image: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === "admin") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === "admin") {
      localStorage.setItem("github_token", loginForm.token);
      localStorage.setItem("user", loginForm.username);
      setIsLoggedIn(true);
      toast({ title: "Login Berhasil", description: "Selamat datang di Dashboard" });
    } else {
      toast({ title: "Login Gagal", variant: "destructive", description: "Username salah" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("github_token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setLoginForm({ username: "", token: "" });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("github_token");
    if (!token) {
      toast({ title: "Error", description: "Token GitHub tidak ditemukan", variant: "destructive" });
      return;
    }

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

      const repo = "elfarsaf-dev/susah-brok";
      const path = "shared/data.ts";
      
      const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        headers: { Authorization: `token ${token}` }
      });
      const fileData = await getRes.json();
      const content = atob(fileData.content);
      
      const arrayName = propertyData.type === "villa" ? "villaData" : "glampingData";
      const insertIndex = content.lastIndexOf("];");
      
      if (insertIndex === -1) throw new Error("Format file data tidak dikenali");

      const newDataString = JSON.stringify(propertyData, null, 2) + ",\n";
      const updatedContent = content.slice(0, insertIndex) + newDataString + content.slice(insertIndex);

      const updateRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Add property: ${propertyData.name}`,
          content: btoa(updatedContent),
          sha: fileData.sha,
        }),
      });

      if (!updateRes.ok) throw new Error("Gagal update ke GitHub");

      toast({ title: "Berhasil", description: `${propertyData.name} berhasil ditambahkan ke GitHub!` });
      
      setFormData({ id: "", name: "", location: "", type: "villa", capacity: "", units: 1, image: "" });
      setFacilities([""]);
      setNotes([""]);
      setSlideImages([""]);
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Gagal simpan data", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Dashboard Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  placeholder="Masukkan username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token">GitHub Personal Access Token</Label>
                <Input
                  id="token"
                  type="password"
                  value={loginForm.token}
                  onChange={(e) => setLoginForm({ ...loginForm, token: e.target.value })}
                  placeholder="ghp_..."
                  required
                />
              </div>
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
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader><CardTitle>Informasi Dasar</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="id">ID Properti (Unik)</Label>
                <Input id="id" value={formData.id} onChange={(e) => setFormData({ ...formData, id: e.target.value })} placeholder="id-villa-baru" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Nama Properti</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nama Villa" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Lokasi</Label>
                <Input id="location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Kalisoro, Tawangmangu" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tipe</Label>
                <Select value={formData.type} onValueChange={(v) => setFormData({ ...formData, type: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="glamping">Glamping</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Kapasitas</Label>
                <Input id="capacity" value={formData.capacity} onChange={(e) => setFormData({ ...formData, capacity: e.target.value })} placeholder="10-15 orang" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="units">Jumlah Unit</Label>
                <Input id="units" type="number" value={formData.units} onChange={(e) => setFormData({ ...formData, units: parseInt(e.target.value) })} required />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Harga (Rates)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {rates.map((rate, index) => (
                <div key={index} className="flex gap-4 items-end">
                  <div className="flex-1 space-y-2">
                    <Label>Label</Label>
                    <Input value={rate.label} onChange={(e) => {
                      const next = [...rates];
                      next[index].label = e.target.value;
                      setRates(next);
                    }} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label>Harga</Label>
                    <Input type="number" value={rate.price} onChange={(e) => {
                      const next = [...rates];
                      next[index].price = parseInt(e.target.value);
                      setRates(next);
                    }} />
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => setRates([...rates, { label: "", price: 0 }])}>Tambah Harga</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Fasilitas & Catatan</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label>Fasilitas</Label>
                {facilities.map((f, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={f} onChange={(e) => updateField(setFacilities, facilities, i, e.target.value)} />
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeField(setFacilities, facilities, i)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => addField(setFacilities, facilities)}>Tambah Fasilitas</Button>
              </div>
              <div className="space-y-4">
                <Label>Catatan</Label>
                {notes.map((n, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={n} onChange={(e) => updateField(setNotes, notes, i, e.target.value)} />
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeField(setNotes, notes, i)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => addField(setNotes, notes)}>Tambah Catatan</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Media</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="main-image">URL Gambar Utama</Label>
                <Input id="main-image" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." required />
              </div>
              <div className="space-y-4">
                <Label>Galeri Foto</Label>
                {slideImages.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={s} onChange={(e) => updateField(setSlideImages, slideImages, i, e.target.value)} />
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeField(setSlideImages, slideImages, i)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => addField(setSlideImages, slideImages)}>Tambah Gambar Galeri</Button>
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full h-12 text-lg" disabled={loading}>
            {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Mengirim...</> : <><Plus className="mr-2 h-5 w-5" /> Simpan ke GitHub</>}
          </Button>
        </form>
      </div>
    </div>
  );
}

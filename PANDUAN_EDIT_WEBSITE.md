# 📝 Panduan Edit Konten Website Villa & Glamping Tawangmangu

## 🏠 Struktur File untuk Edit Konten

### 📊 **DATA VILLA & GLAMPING**
**File: `shared/data.ts`**
- Berisi semua data villa dan glamping
- Format data sudah tertata rapi dengan:
  - Nama villa/glamping
  - Lokasi
  - Harga per malam
  - Fasilitas lengkap
  - Kapasitas tamu
  - Catatan & aturan
  - Link gambar

**Cara Edit:**
```typescript
// Contoh data villa
{
  id: "villa-nama-unik",
  name: "Villa ABC", 
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  facilities: [
    "3 Kamar tidur",
    "2 Kamar mandi",
    "Kolam renang",
    // tambah fasilitas lain...
  ],
  capacity: "20 orang",
  notes: ["Check in jam 2 siang", "No miras"],
  image: "URL_GAMBAR",
  type: "villa" // atau "glamping"
}
```

### 🎨 **TAMPILAN & STYLE**
**File: `client/src/index.css`**
- Warna tema website
- Font dan typography
- Layout spacing

**File: `client/src/components/hero-section.tsx`**
- Judul utama website
- Deskripsi hero section
- Gambar background

### 📱 **NAVIGASI & MENU**
**File: `client/src/components/navigation.tsx`**
- Menu navigasi
- Logo website
- Contact information

### 🏡 **SECTION WEBSITE**

#### **1. Hero Section**
**File: `client/src/components/hero-section.tsx`**
- Headline utama
- Sub-headline
- Call-to-action button

#### **2. About Section** 
**File: `client/src/components/about-section.tsx`**
- Deskripsi tentang bisnis
- Visi misi
- Keunggulan

#### **3. Advantages Section**
**File: `client/src/components/advantages-section.tsx`**  
- Keunggulan villa/glamping
- Feature highlights
- Unique selling points

#### **4. Contact Section**
**File: `client/src/components/contact-section.tsx`**
- Informasi kontak
- WhatsApp number
- Alamat lokasi
- Social media links

#### **5. Jeep Section**
**File: `client/src/components/jeep-section.tsx`**
- Info layanan jeep
- Paket wisata
- Harga tour

### 🖼️ **GAMBAR & MEDIA**
- Gambar villa/glamping: Hosted di GitHub (sesuai link di data)
- Untuk gambar baru: Upload ke folder `attached_assets/`
- Update link di file `shared/data.ts`

### 🎯 **PROPERTY CARD & MODAL**
**File: `client/src/components/property-card.tsx`**
- Layout card villa/glamping
- Preview informasi

**File: `client/src/components/property-modal.tsx`**
- Detail lengkap property
- Galeri gambar
- Button booking/contact

### 🔍 **SEARCH & FILTER**
**File: `client/src/components/search-bar.tsx`**
- Fitur pencarian
- Filter villa/glamping
- Sorting options

## 🚀 Cara Update Konten

### 1. **Tambah Villa/Glamping Baru**
- Edit file `shared/data.ts`
- Tambah data di array `villaData` atau `glampingData`
- Copy format yang sudah ada
- Pastikan `id` unik

### 2. **Update Harga**
- Buka `shared/data.ts` 
- Cari property yang mau diupdate
- Edit bagian `rates: []`

### 3. **Update Fasilitas**
- Edit array `facilities: []` di data property
- Tambah/hapus item sesuai kebutuhan

### 4. **Ganti Teks Website**
- Hero: Edit `hero-section.tsx`
- About: Edit `about-section.tsx` 
- Contact: Edit `contact-section.tsx`
- Navigation: Edit `navigation.tsx`

### 5. **Update Contact Info**
- WhatsApp number di `contact-section.tsx`
- Social media links
- Alamat bisnis

### 6. **Ganti Warna/Theme**
- Edit `client/src/index.css`
- Ubah CSS variables di bagian `:root`

## 📱 Testing Setelah Edit

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   Buka http://localhost:5000

2. **Build Testing:**
   ```bash
   npm run build
   ```
   Pastikan tidak ada error

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Update konten villa"
   git push
   ```

## 💡 Tips Edit

- **Backup dulu** sebelum edit besar-besaran
- **Test di local** sebelum push ke GitHub
- **Edit satu file** dalam satu waktu
- **Konsisten** dengan format data yang ada
- **Gambar harus** accessible via URL public

## 🆘 Troubleshooting

- **Website error**: Check console browser (F12)
- **Data tidak muncul**: Periksa format JSON di `data.ts`
- **Gambar tidak muncul**: Cek URL gambar masih valid
- **Build gagal**: Periksa syntax error di file yang diedit
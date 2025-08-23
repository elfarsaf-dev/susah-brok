# 🏨 Villa & Glamping Tawangmangu Website

Website booking villa dan glamping terbaik di Tawangmangu dengan fasilitas lengkap dan pemandangan menakjubkan.

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Website akan berjalan di http://localhost:5000

### Production Build
```bash
npm run build
```
Files hasil build ada di folder `dist/public`

## 📁 Struktur File Website

### 📊 **DATA KONTEN** 
```
shared/
├── data.ts          # ⭐ DATA VILLA & GLAMPING (EDIT DISINI)
└── schema.ts        # Type definitions
```

### 🎨 **KOMPONEN WEBSITE**
```
client/src/components/
├── hero-section.tsx      # Bagian utama website
├── about-section.tsx     # Tentang bisnis
├── contact-section.tsx   # Informasi kontak
├── advantages-section.tsx # Keunggulan
├── jeep-section.tsx     # Layanan jeep tour
├── navigation.tsx       # Menu navigasi
├── property-card.tsx    # Card villa/glamping
├── property-modal.tsx   # Detail properti
└── search-bar.tsx       # Pencarian & filter
```

### 🎨 **STYLING**
```
client/src/
├── index.css           # ⭐ WARNA & THEME (EDIT DISINI)
└── components/ui/      # UI components library
```

### 📱 **HALAMAN**
```
client/src/pages/
├── home.tsx           # Halaman utama
└── not-found.tsx      # Halaman 404
```

## 🔧 Deploy ke GitHub & Netlify

### 1. Upload ke GitHub
```bash
# Inisialisasi git
git init
git add .
git commit -m "Initial commit"

# Buat repository di GitHub, lalu:
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### 2. Deploy ke Netlify
- **Option 1 (Recommended):** Connect GitHub repo ke Netlify
- **Option 2:** Manual upload folder `dist/public` ke Netlify

Konfigurasi sudah siap di file `netlify.toml`!

## 📝 Cara Edit Konten Website

### ⭐ **EDIT DATA VILLA/GLAMPING**
**File: `shared/data.ts`**

```typescript
// Tambah villa baru
{
  id: "villa-baru",
  name: "Villa Impian", 
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  facilities: [
    "3 Kamar tidur",
    "2 Kamar mandi",
    "Kolam renang",
    "Free Wi-Fi"
  ],
  capacity: "20 orang",
  notes: ["Check in jam 2 siang"],
  image: "URL_GAMBAR",
  type: "villa"
}
```

### 🎨 **EDIT TAMPILAN**

#### Ganti Judul & Deskripsi Utama
**File: `client/src/components/hero-section.tsx`**
- Edit headline
- Edit deskripsi
- Ganti call-to-action

#### Update Info Kontak  
**File: `client/src/components/contact-section.tsx`**
- WhatsApp number
- Email
- Alamat
- Social media

#### Ubah Tentang Kami
**File: `client/src/components/about-section.tsx`**
- Deskripsi bisnis
- Visi misi
- Story

#### Ganti Warna Website
**File: `client/src/index.css`**
```css
:root {
  --primary: 220 70% 50%;    /* Warna utama */
  --secondary: 200 50% 60%;  /* Warna kedua */
  /* Edit sesuai selera */
}
```

## 📱 Website Features

### ✅ **Yang Sudah Ada:**
- ✅ Responsive design (mobile & desktop)
- ✅ Search & filter villa/glamping
- ✅ Detail modal properti
- ✅ Contact WhatsApp integration
- ✅ Modern UI dengan Tailwind CSS
- ✅ Fast loading dengan Vite
- ✅ SEO optimized

### 🏠 **Data Properti:**
- **15 Villa** dengan fasilitas lengkap
- **9 Glamping** dengan private pool
- Harga mulai 400rb - 3jt per malam
- Kapasitas 2-35 orang
- Lokasi Sekipan & Tawangmangu

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **UI:** Tailwind CSS + shadcn/ui
- **State:** TanStack Query + React Hook Form  
- **Routing:** Wouter
- **Build:** Vite + esbuild
- **Deploy:** Netlify

## 📞 Support

Jika ada pertanyaan tentang edit website:
1. Baca file `PANDUAN_EDIT_WEBSITE.md`
2. Baca file `deploy.md` untuk deployment
3. Check file logs jika ada error

## 🔄 Update Website

Setelah edit konten:
```bash
# Test locally
npm run dev

# Build for production  
npm run build

# Deploy
git add .
git commit -m "Update konten"
git push
```

Netlify akan otomatis deploy versi terbaru! 🚀
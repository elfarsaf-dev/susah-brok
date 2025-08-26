# 📚 PANDUAN LENGKAP WEBSITE VILLA & GLAMPING TAWANGMANGU

## 🏗️ ARSITEKTUR & STRUKTUR WEBSITE

### 📖 **OVERVIEW WEBSITE**
Website ini adalah platform booking untuk villa dan glamping di Tawangmangu, Indonesia dengan fitur:
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **UI Framework**: shadcn/ui components + Radix UI
- **State Management**: TanStack Query untuk data fetching
- **Routing**: Wouter untuk navigasi
- **Database**: PostgreSQL (Neon) + Drizzle ORM
- **Styling**: Tailwind CSS + CSS Variables untuk theming
- **Deployment**: Netlify (Frontend) + Serverless Functions

---

## 🗂️ STRUKTUR FILE & DIREKTORI

```
📁 Root/
├── 📁 client/              # Frontend React Application
│   ├── 📁 src/
│   │   ├── 📁 components/  # React Components
│   │   ├── 📁 hooks/       # Custom React Hooks
│   │   ├── 📁 lib/         # Utility Libraries
│   │   ├── 📁 pages/       # Page Components
│   │   ├── App.tsx         # Main App Component
│   │   ├── main.tsx        # Entry Point
│   │   └── index.css       # Global Styles
│   └── index.html          # HTML Template
├── 📁 server/              # Backend Express Server
│   ├── index.ts           # Server Entry Point
│   ├── routes.ts          # API Routes
│   ├── storage.ts         # Storage Interface
│   └── vite.ts            # Vite Development Server
├── 📁 shared/              # Shared Code (Frontend + Backend)
│   ├── schema.ts          # TypeScript Types & Zod Schemas
│   └── data.ts            # Static Data (Villa & Glamping)
├── 📁 attached_assets/     # Static Assets
├── 📁 netlify/functions/   # Serverless Functions
└── config files...        # Configuration Files
```

---

## 🎯 KOMPONEN UTAMA & FUNGSINYA

### 🏠 **1. HOMEPAGE (`client/src/pages/home.tsx`)**
**Fungsi Utama:**
- Menampilkan halaman utama dengan semua section
- Mengatur state untuk properti yang dipilih
- Mengelola pagination dan loading more properties
- Integrasi dengan hooks untuk data management

**Komponen yang Digunakan:**
- `Navigation` - Menu navigasi
- `HeroSection` - Banner utama
- `SearchBar` - Pencarian dan filter
- `PropertyCard` - Card villa/glamping
- `PropertyModal` - Detail popup properti
- `JeepSection` - Layanan sewa jeep
- `AdvantagesSection` - Keunggulan
- `AboutSection` - Tentang perusahaan
- `ContactSection` - Informasi kontak

---

### 🧭 **2. NAVIGATION (`client/src/components/navigation.tsx`)**
**Fungsi:**
- Menu navigasi responsif (desktop + mobile)
- Smooth scroll ke section yang dipilih
- Contact info di mobile menu
- Logo dan branding website

**Data yang Dapat Diedit:**
```typescript
// Nama website/logo
"BOS VILLA TAWANGMANGU"

// Menu items
const navItems = [
  { href: "#home", label: "Beranda" },
  { href: "#properties", label: "Properti" },
  { href: "#jeep", label: "Sewa Jeep" },
  { href: "#about", label: "Tentang" },
  { href: "#contact", label: "Kontak" }
];

// WhatsApp number
"https://wa.me/6281226374041"
```

---

### 🏡 **3. PROPERTY CARD (`client/src/components/property-card.tsx`)**
**Fungsi:**
- Menampilkan preview villa/glamping dalam bentuk card
- Show harga terendah dari rates array
- Badge untuk tipe properti (Villa/Glamping)
- Badge untuk jumlah unit tersedia
- Button untuk lihat detail

**Data yang Ditampilkan:**
- Gambar properti
- Nama dan lokasi
- Harga mulai dari
- Kapasitas
- Tipe properti
- Unit tersedia

---

### 📋 **4. PROPERTY MODAL (`client/src/components/property-modal.tsx`)**
**Fungsi Utama:**
- Modal detail lengkap properti
- Image slider dengan galeri foto multiple
- Menampilkan semua informasi properti
- Tombol booking WhatsApp & telepon
- Responsive design untuk mobile

**Fitur Khusus:**
- **Image Slider**: Setiap properti punya galeri foto khusus
- **Rate Display**: Menampilkan harga weekday/weekend
- **Facilities Grid**: List fasilitas dengan checkmark
- **Terms & Conditions**: Syarat dan ketentuan booking
- **Contact Actions**: Direct link ke WhatsApp dan telepon

**Data Image Slider:**
```typescript
// Setiap properti punya mapping gambar khusus
const imageMap: Record<string, string[]> = {
  "Villa FJ": [
    property.image,
    'https://i.ibb.co/7d7NTWt2/IMG-5950.jpg',
    // ... array gambar lainnya
  ]
}
```

---

### 🔍 **5. SEARCH BAR (`client/src/components/search-bar.tsx`)**
**Fungsi:**
- Search input untuk cari villa/glamping
- Toggle button Villa vs Glamping
- Real-time filtering berdasarkan:
  - Nama properti
  - Lokasi
  - Fasilitas

---

### 🚗 **6. JEEP SECTION (`client/src/components/jeep-section.tsx`)**
**Fungsi:**
- Menampilkan layanan sewa jeep
- Paket wisata jeep
- Harga dan durasi tour
- Contact untuk booking jeep

---

### ℹ️ **7. ABOUT SECTION (`client/src/components/about-section.tsx`)**
**Fungsi:**
- Deskripsi tentang bisnis
- Visi dan misi perusahaan
- Keunggulan kompetitif
- Brand story

---

### ⭐ **8. ADVANTAGES SECTION (`client/src/components/advantages-section.tsx`)**
**Fungsi:**
- Highlight keunggulan villa/glamping
- Feature unik yang ditawarkan
- Selling points utama
- Icon dan deskripsi benefit

---

### 📞 **9. CONTACT SECTION (`client/src/components/contact-section.tsx`)**
**Fungsi:**
- Informasi kontak lengkap
- WhatsApp, telepon, email
- Alamat lokasi
- Social media links
- Google Maps (jika ada)

---

## 📊 DATA MANAGEMENT

### 🗃️ **DATA STRUKTUR (`shared/data.ts`)**

**Villa Data Array:**
```typescript
export const villaData: Property[] = [
  {
    id: "villa-unique-id",
    name: "Nama Villa",
    location: "Lokasi",
    rates: [
      { label: "Weekday", price: 2000000 },
      { label: "Weekend", price: 2500000 }
    ],
    units: 1,
    facilities: ["Fasilitas 1", "Fasilitas 2"],
    capacity: "20-25 orang",
    notes: ["Syarat 1", "Syarat 2"],
    image: "URL_GAMBAR",
    type: "villa"
  }
];
```

**Glamping Data Array:**
```typescript
export const glampingData: Property[] = [
  // Format sama dengan villa, tapi type: "glamping"
];
```

**Trip Data Array:**
```typescript
export const tripData: Trip[] = [
  {
    id: "trip-unique-id",
    name: "Nama Paket",
    category: "short" | "long",
    destinations: ["Tempat 1", "Tempat 2"],
    duration: "2 hari 1 malam",
    price: 500000,
    facilities: ["Fasilitas tour"],
    notes: ["Catatan penting"],
    image: "URL_GAMBAR",
    description: "Deskripsi tour",
    capacity: "Max 10 orang",
    included: ["Yang termasuk"]
  }
];
```

---

### 🔧 **SCHEMA & TYPES (`shared/schema.ts`)**

**Property Schema:**
```typescript
export const propertySchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  rates: z.array(rateSchema),
  units: z.number(),
  facilities: z.array(z.string()),
  capacity: z.string(),
  notes: z.array(z.string()),
  image: z.string(),
  type: z.enum(["villa", "glamping"]),
  rating: z.number().min(1).max(5).optional()
});
```

**Rate Schema:**
```typescript
export const rateSchema = z.object({
  label: z.string(),
  price: z.number(),
});
```

**Trip Schema:**
```typescript
export const tripSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["short", "long"]),
  destinations: z.array(z.string()),
  duration: z.string(),
  price: z.number(),
  facilities: z.array(z.string()),
  notes: z.array(z.string()),
  image: z.string(),
  rating: z.number().min(1).max(5).optional().default(4.5),
  description: z.string(),
  capacity: z.string(),
  included: z.array(z.string())
});
```

---

## 🎨 STYLING & THEMING

### 🎨 **COLORS & THEME (`client/src/index.css`)**

**CSS Variables:**
```css
:root {
  --primary: hsl(142, 71%, 45%);    /* Green theme */
  --primary-50: hsl(138, 76%, 97%);
  --primary-100: hsl(141, 84%, 93%);
  --primary-500: hsl(142, 71%, 45%);
  --primary-600: hsl(142, 76%, 36%);
  --primary-700: hsl(142, 72%, 29%);
  
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(222.2, 84%, 4.9%);
  --card: hsl(0, 0%, 100%);
  --border: hsl(214.3, 31.8%, 91.4%);
}

.dark {
  /* Dark mode variables */
  --background: hsl(222.2, 84%, 4.9%);
  --foreground: hsl(210, 40%, 98%);
}
```

**Font:**
```css
--font-sans: 'Inter', system-ui, sans-serif;
```

---

## 🔄 HOOKS & STATE MANAGEMENT

### 📱 **USE PROPERTIES (`client/src/hooks/use-properties.tsx`)**
**Fungsi:**
- Mengelola state pencarian properti
- Filter berdasarkan tipe (villa/glamping)
- Pagination dengan load more
- Search functionality

**State yang Dikelola:**
```typescript
const [searchQuery, setSearchQuery] = useState("");
const [propertyType, setPropertyType] = useState<PropertyType>("villa");
const [displayedCount, setDisplayedCount] = useState(6);
```

**Return Values:**
- `properties` - Filtered properties
- `searchQuery` - Current search term
- `setSearchQuery` - Update search
- `propertyType` - Current filter (villa/glamping)
- `setPropertyType` - Change property type
- `displayedCount` - How many properties to show
- `hasMore` - Whether there are more properties to load

---

### 📱 **USE TRIPS (`client/src/hooks/use-trips.tsx`)**
**Fungsi:**
- Mengelola state untuk data trip/tour
- Filter berdasarkan kategori (short/long trip)
- Search dan pagination untuk trip data

---

### 📱 **USE MOBILE (`client/src/hooks/use-mobile.tsx`)**
**Fungsi:**
- Detect apakah user menggunakan mobile device
- Responsive behavior berdasarkan screen size
- Media query hook untuk responsive design

---

## ⚙️ CONFIGURATION FILES

### 🔧 **VITE CONFIG (`vite.config.ts`)**
```typescript
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  }
});
```

### 🎨 **TAILWIND CONFIG (`tailwind.config.ts`)**
- Konfigurasi Tailwind CSS
- Custom colors menggunakan CSS variables
- shadcn/ui integration
- Responsive breakpoints

### 📦 **PACKAGE.JSON SCRIPTS**
```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "tsx --experimental-loader tsx/esm server/index.ts"
  }
}
```

---

## 🚀 DEPLOYMENT

### 🌐 **NETLIFY CONFIG (`netlify.toml`)**
```toml
[build]
  command = "npm run build"
  publish = "dist/public"
  
[build.environment]
  NODE_VERSION = "18"

# Client-side routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# API routes untuk serverless backend
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200
```

### ⚡ **SERVERLESS FUNCTION (`netlify/functions/api.js`)**
- Serverless backend untuk production
- Express server di Netlify Functions
- API endpoints untuk data fetching

---

## 🛠️ CARA EDIT & UPDATE

### 1️⃣ **TAMBAH VILLA/GLAMPING BARU**

**Langkah:**
1. Buka `shared/data.ts`
2. Tambah object baru ke array `villaData` atau `glampingData`
3. Copy format yang sudah ada
4. Pastikan ID unik
5. Update gambar di `property-modal.tsx` untuk slider

**Template:**
```typescript
{
  id: "villa-nama-unik",
  name: "Villa Baru",
  location: "Lokasi Villa",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: ["Fasilitas 1", "Fasilitas 2"],
  capacity: "Max 20 orang",
  notes: ["Syarat 1", "Syarat 2"],
  image: "https://link-gambar.jpg",
  type: "villa"
}
```

### 2️⃣ **UPDATE HARGA PROPERTI**

**File:** `shared/data.ts`
**Lokasi:** Array `rates` di setiap properti

```typescript
rates: [
  { label: "Weekday", price: 1800000 },      // Update harga weekday
  { label: "Weekend", price: 2300000 },      // Update harga weekend
  { label: "Holiday", price: 2500000 }       // Tambah kategori baru
]
```

### 3️⃣ **UPDATE FASILITAS**

**File:** `shared/data.ts`
**Lokasi:** Array `facilities` di setiap properti

```typescript
facilities: [
  "4 Kamar tidur",
  "3 Kamar mandi dengan water heater",
  "Kolam renang private",
  "Wi-Fi gratis",
  "Kitchen set lengkap",
  "Karaoke",
  "BBQ area",
  "Rooftop view"
]
```

### 4️⃣ **UPDATE KONTEN WEBSITE**

**Hero Section:** `client/src/components/hero-section.tsx`
```typescript
// Update headline
<h1>Villa & Glamping Terbaik di Tawangmangu</h1>
// Update subtitle  
<p>Nikmati pengalaman menginap yang tak terlupakan</p>
```

**About Section:** `client/src/components/about-section.tsx`
- Deskripsi perusahaan
- Visi misi
- Sejarah bisnis

**Contact Info:** `client/src/components/contact-section.tsx`
```typescript
// Update nomor WhatsApp
const whatsappNumber = "6281226374041";
// Update alamat
const address = "Tawangmangu, Karanganyar";
```

### 5️⃣ **UPDATE GAMBAR**

**Upload Gambar Baru:**
1. Upload ke hosting service (i.ibb.co, GitHub, dll)
2. Copy URL public
3. Update di `shared/data.ts` (property.image)
4. Update gallery di `property-modal.tsx` (imageMap)

**Format Image Slider:**
```typescript
const imageMap: Record<string, string[]> = {
  "Nama Properti": [
    property.image,                    // Main image
    'https://url-gambar-2.jpg',        // Gallery image 1
    'https://url-gambar-3.jpg',        // Gallery image 2
    // ... dst
  ]
}
```

### 6️⃣ **UPDATE WARNA TEMA**

**File:** `client/src/index.css`

```css
:root {
  --primary: hsl(142, 71%, 45%);     /* Main green color */
  --primary-600: hsl(142, 76%, 36%); /* Darker green */
  --primary-50: hsl(138, 76%, 97%);  /* Light green */
}
```

**Ubah ke Tema Biru:**
```css
:root {
  --primary: hsl(210, 71%, 45%);     /* Blue theme */
  --primary-600: hsl(210, 76%, 36%);
  --primary-50: hsl(210, 76%, 97%);
}
```

### 7️⃣ **UPDATE NOMOR WHATSAPP**

**File yang Perlu Diupdate:**
1. `client/src/components/navigation.tsx` (mobile menu)
2. `client/src/components/property-modal.tsx` (booking buttons)
3. `client/src/components/contact-section.tsx` (contact info)

**Find & Replace:**
- Cari: `6281226374041`
- Ganti dengan nomor baru: `628xxxxxxxxxx`

---

## 🧪 TESTING & DEBUG

### 🔧 **LOCAL DEVELOPMENT**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:5000
```

### 🏗️ **BUILD PRODUCTION**
```bash
# Build for production
npm run build

# Test production build locally
npm run preview
```

### 🐛 **COMMON ISSUES & SOLUTIONS**

**1. Gambar Tidak Muncul**
- Cek URL gambar masih valid
- Pastikan URL accessible secara public
- Test URL di browser

**2. Property Tidak Muncul**
- Cek format JSON di `data.ts`
- Pastikan tidak ada syntax error
- Cek browser console untuk error

**3. Modal Tidak Berfungsi**
- Cek property name di imageMap
- Pastikan ID properti unik
- Test button click di browser dev tools

**4. Build Error**
- Cek TypeScript errors
- Pastikan import path benar
- Cek missing dependencies

---

## 📚 FITUR LANJUTAN

### 🔍 **SEO OPTIMIZATION**
- Meta tags di `client/index.html`
- Open Graph tags untuk social media
- Structured data untuk property listings
- Image alt text untuk accessibility

### 📱 **PROGRESSIVE WEB APP (PWA)**
- Service worker untuk offline capability
- Web app manifest
- Push notifications untuk booking updates
- Install prompt untuk mobile users

### 🎯 **ANALYTICS INTEGRATION**
- Google Analytics tracking
- Property view tracking
- Booking conversion tracking
- User behavior analysis

### 💳 **PAYMENT INTEGRATION**
- Online payment gateway
- Booking confirmation system
- Automated receipt generation
- Payment status tracking

---

## 🆘 TROUBLESHOOTING

### ❌ **Website Tidak Load**
1. Cek network connection
2. Clear browser cache
3. Check console errors (F12)
4. Verify server status

### ❌ **Data Tidak Update**
1. Hard refresh browser (Ctrl+F5)
2. Check localStorage cache
3. Verify data.ts syntax
4. Restart development server

### ❌ **Mobile Menu Tidak Berfungsi**
1. Check JavaScript errors
2. Verify button click handlers
3. Test on different devices
4. Check responsive CSS

### ❌ **Search Tidak Berfungsi**
1. Verify search logic di hooks
2. Check input value binding
3. Test filter functions
4. Check property data format

---

## 🔮 FUTURE ENHANCEMENTS

### 📊 **ADMIN DASHBOARD**
- Content management system
- Property CRUD operations
- User management
- Booking management
- Analytics dashboard

### 🔄 **API INTEGRATION**
- REST API untuk dynamic data
- Real-time availability check
- Booking system integration
- Payment gateway API

### 📧 **NOTIFICATION SYSTEM**
- Email booking confirmations
- SMS notifications
- WhatsApp Business API
- Push notifications

### 🌍 **MULTI-LANGUAGE SUPPORT**
- i18n implementation
- English/Indonesian toggle
- Localized content
- Currency conversion

---

## 📞 SUPPORT & MAINTENANCE

### 🔧 **REGULAR MAINTENANCE**
- Update dependencies monthly
- Security patches
- Performance optimization
- Content updates
- Image optimization

### 📊 **MONITORING**
- Website uptime monitoring
- Performance tracking
- Error logging
- User analytics
- Conversion tracking

### 🚀 **DEPLOYMENT PIPELINE**
- Automated builds
- Testing pipeline
- Staging environment
- Production deployment
- Rollback procedures

---

## 📝 CONCLUSION

Website ini dibangun dengan teknologi modern dan best practices untuk memberikan user experience yang optimal. Arsitektur yang modular memudahkan maintenance dan pengembangan fitur baru.

**Key Features:**
✅ Responsive design (Mobile & Desktop)
✅ Fast loading dengan Vite
✅ SEO friendly structure
✅ Modern UI dengan shadcn/ui
✅ TypeScript untuk type safety
✅ Real-time search & filter
✅ Image galleries untuk setiap properti
✅ Direct WhatsApp integration
✅ Serverless deployment ready

**Untuk bantuan lebih lanjut atau development custom features, silakan hubungi ELFAR.DEV.**
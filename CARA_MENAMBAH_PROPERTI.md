# 📋 Cara Menambah Properti Villa atau Glamping

## 🗂️ File yang Perlu Diedit

File utama yang berisi data properti: `shared/data.ts`

## 📍 Lokasi Penambahan Data

### Untuk Villa:
- Cari array `villaData` di file `shared/data.ts`
- Tambahkan properti baru di akhir array sebelum tanda `];`

### Untuk Glamping:
- Cari array `glampingData` di file `shared/data.ts`
- Tambahkan properti baru di akhir array sebelum tanda `];`

## 📝 Template Properti Villa

```typescript
{
  id: "villa-nama-unik",
  name: "Nama Villa",
  location: "Lokasi Villa",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: [
    "3 Kamar tidur",
    "2 Kamar mandi",
    "Kolam renang",
    "Wi-Fi",
    "Dapur lengkap"
  ],
  capacity: "Maksimal 20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://link-gambar-villa.jpg",
  type: "villa"
}
```

## 📝 Template Properti Glamping

```typescript
{
  id: "glamping-nama-unik",
  name: "Nama Glamping",
  location: "Lokasi Glamping",
  rates: [
    { label: "Weekday", price: 500000 },
    { label: "Weekend", price: 700000 }
  ],
  units: 3,
  facilities: [
    "1 Bed Queen Size",
    "Kamar mandi air hangat",
    "Private pool",
    "Smart TV",
    "Free breakfast"
  ],
  capacity: "2-4 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://link-gambar-glamping.jpg",
  type: "glamping"
}
```

## 📋 Penjelasan Field

| Field | Keterangan | Contoh |
|-------|------------|--------|
| `id` | ID unik properti (lowercase, gunakan dash) | `"villa-pine"` |
| `name` | Nama properti yang ditampilkan | `"Villa Pine"` |
| `location` | Lokasi properti | `"Sekipan, Tawangmangu"` |
| `rates` | Array harga dengan label dan harga | `[{ label: "Weekday", price: 1500000 }]` |
| `units` | Jumlah unit yang tersedia | `1` atau `3` |
| `facilities` | Array fasilitas yang tersedia | `["Wi-Fi", "Kolam renang"]` |
| `capacity` | Kapasitas maksimal tamu | `"15-20 orang"` |
| `notes` | Catatan syarat & ketentuan | `["Check in jam 14.00"]` |
| `image` | URL gambar utama properti | `"https://..."` |
| `type` | Tipe properti (harus "villa" atau "glamping") | `"villa"` |

## ⚠️ Hal Penting

1. **ID harus unik** - Jangan gunakan ID yang sudah ada
2. **Tanda koma** - Jangan lupa tambahkan koma `,` setelah `}` kecuali ini adalah item terakhir
3. **Format harga** - Gunakan angka tanpa titik/koma (contoh: 1500000 bukan 1.500.000)
4. **Units tersedia** - Angka ini akan tampil di card dan detail modal
5. **Type** - Harus persis "villa" atau "glamping" (huruf kecil)

## 📱 Ganti Nomor WhatsApp

Untuk mengganti nomor WhatsApp:

1. Buka file: `client/src/components/property-modal.tsx`
2. Cari baris: `https://wa.me/6281226374041`
3. Ganti `081226374041` dengan nomor baru
4. Cari juga: `tel:+6281226374041`
5. Ganti dengan nomor telepon baru

## 🔄 Setelah Menambah Properti

1. Simpan file `shared/data.ts`
2. Website akan otomatis update (hot reload)
3. Cek di browser apakah properti baru muncul
4. Test modal detail dan tombol booking

## 💡 Tips

- Gunakan nama singkat tapi deskriptif untuk `name`
- Pastikan gambar berformat JPG/PNG dan accessible via URL
- Fasilitas diurutkan dari yang paling penting
- Harga diurutkan dari weekday ke weekend
- Notes berisi aturan penting untuk tamu
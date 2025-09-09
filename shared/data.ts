import type { Property, Trip } from "./schema";

export const villaData: Property[] = [
{
  "id": "villa-fill&jill",
  "name": "Villa FJ",
  "location": "Sekipan, Tawangmangu",
  "rates": [
    { "label": "Weekday", "price": 2000000 },
    { "label": "Weekend", "price": 2500000 }
  ],
  "units": 1,
  "facilities": [
    "4 Kamar tidur",
    "3 Kamar mandi (dengan water heater)",
    "Ruang keluarga",
    "Free Wifi",
    "1 set Karaoke",
    "Dapur (magicom, peralatan masak & makan, kompor, kulkas, galon air mineral)",
    "Free mie instan",
    "Kopi, Gula, Teh",
    "Tersedia alat bakaran",
    "Rooftop dengan view bukit",
    "Kolam renang",
    "Dekat dengan kebun strawberry"
  ],
  "capacity": "20-25 orang",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Harga sewaktu-waktu bisa berubah",
    "Bukan villa bebas",
    "Jam malam 23.00 WIB",
    "Tidak boleh melanggar hukum dan norma masyarakat",
    "DP 30% dari harga"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5830.jpeg?raw=true",
  "type": "villa"
},
{
    id: "villa-dita",
    name: "Villa DT", 
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Minggu – Kamis", price: 2000000 },
      { label: "Jumat", price: 2500000 },
      { label: "Sabtu", price: 3000000 }
    ],
    units: 1,
    facilities: [
      "4 Kamar tidur",
      "3 Kamar mandi",
      "Bangunan 2 lantai",
      "Free Wi-Fi",
      "Kolam renang", 
      "Karaoke keluarga",
      "TV LED",
      "Alat bakar lengkap",
      "View perbukitan Sekipan",
      "Halaman luas",
      "Parkir luas hingga 6 mobil",
      "Kitchen set lengkap",
      "Alat makan lengkap",
      "Free 2 extra bed",
      "Free teh, kopi & mie"
    ],
    capacity: "Maksimal 25 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan", 
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5818.jpeg?raw=true",
    type: "villa"
  },
{
    id: "villa-alami",
    name: "Villa ALM",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday", price: 1500000 },
      { label: "Jumat", price: 1700000 },
      { label: "Sabtu", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "3 kamar tidur",
      "Kamar mandi air hangat",
      "Alat dapur komplit",
      "10 mie instan, kopi, teh, air galon",
      "TV LED",
      "Sound karaoke keluarga", 
      "Free Wi-Fi",
      "Alat bakaran dan arang",
      "Berlangganan Netflix",
      "Kolam renang"
    ],
    capacity: "Maksimal 20 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum", 
      "No drugs",
      "Lokasi dekat wisata Bukit Sekipan - cuma 5 langkah"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5824.jpeg?raw=true",
    type: "villa"
  },
{
    id: "villa-teduh-jiwa",
    name: "Villa TD JW",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Minggu - Kamis", price: 1500000 },
      { label: "Jumat", price: 2500000 },
      { label: "Sabtu", price: 3000000 }
    ],
    units: 1,
    facilities: [
      "3 Kamar tidur",
      "4 Kamar mandi (2 luar, 2 dalam)",
      "Ruang keluarga",
      "Wi-Fi",
      "Smart TV",
      "Karaoke",
      "Dapur lengkap (magicom, peralatan masak dan makan, kompor, kulkas, galon air mineral)",
      "Kopi, gula, teh",
      "Alat BBQ",
      "Genset",
      "Free BBQ",
      "Extra bed 1",
      "PS 3",
      "Sepeda motor",
      "Meja biliar",
      "Kolam renang"
    ],
    capacity: "25 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5821.jpeg?raw=true",
    type: "villa"
  },
{
    id: "karismaya",
    name: "KRYSM",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday", price: 2000000 },
      { label: "Weekend", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "Ruang tamu",
      "Smart TV",
      "Wi-Fi",
      "Karaoke",
      "Dapur lengkap",
      "3 Kamar Tidur",
      "3 Kamar Mandi",
      "Balkon"
    ],
    capacity: "25-30 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Cocok untuk Keluarga besar, Partai besar",
      "Pas untuk Acara-acara besar",
      "Dekat Wisata",
      "Dekat Kebun Strawberry"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5828.jpeg?raw=true",
    type: "villa"
  },
{
    id: "villa-ku",
    name: "Villa \"KU\"",
    location: "Sekipan, dekat wisata",
    rates: [
      { label: "Harga 1 jutaan", price: 1000000 }
    ],
    units: 1,
    facilities: [
      "3 Kamar tidur",
      "2 Kamar mandi (1 kamar mandi dalam)",
      "Bangunan 2 lantai",
      "Karaoke keluarga",
      "Ruang tamu",
      "Alat BBQ lengkap",
      "Kitchen set",
      "Free Wi-Fi",
      "Water heater",
      "TV LED",
      "Balkon view",
      "Parkir 3 mobil"
    ],
    capacity: "15-20 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5822.jpeg?raw=true",
    type: "villa"
  },
{
    id: "villa-andromeda",
    name: "Villa ADR",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday", price: 2000000 },
      { label: "Weekend", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "Ruang tamu",
      "Smart TV",
      "Wi-Fi",
      "Karaoke",
      "Dapur lengkap",
      "3 Kamar tidur",
      "3 Kamar mandi",
      "Balkon"
    ],
    capacity: "25-30 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Cocok untuk keluarga besar, partai besar",
      "Pas untuk acara-acara besar",
      "Dekat wisata",
      "Dekat kebun strawberry"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5819.jpeg?raw=true",
    type: "villa"
  },
{
    id: "villa-kemandoan",
    name: "Villa KMD",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Mulai 2 Jutaan / Malam", price: 2000000 }
    ],
    units: 1,
    facilities: [
      "4 Kamar tidur",
      "Ruang keluarga",
      "Ruang karaoke",
      "Private pool",
      "Balkon",
      "Rooftop",
      "Dapur peralatan komplit",
      "Rice cooker",
      "Kulkas",
      "Dispenser",
      "Alat bakaran",
      "Free mie, teh, kopi, gula"
    ],
    capacity: "30-35 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Rooftop dengan view sunset & bukit Sekipan",
      "Cocok untuk relaksasi dari hiruk pikuk kota"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5820.jpeg?raw=true",
    type: "villa"
  },
{
    id: "villa-ziezo",
    name: "Villa ZZ",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "3 Kamar - Minggu–Kamis", price: 1300000 },
      { label: "3 Kamar - Jumat", price: 1500000 },
      { label: "3 Kamar - Sabtu", price: 2000000 },
      { label: "4 Kamar - Minggu–Kamis", price: 1500000 },
      { label: "4 Kamar - Jumat", price: 1750000 },
      { label: "4 Kamar - Sabtu", price: 2250000 }
    ],
    units: 1,
    facilities: [
      "3 & 4 kamar tidur",
      "2 kamar mandi air panas",
      "1 kamar mandi air dingin",
      "Private pool",
      "Free 1 extrabed",
      "Dapur & alat masak lengkap + kulkas",
      "Peralatan shalat",
      "Free 2 ekor ayam broiler (mentah/ungkep pilih salah satu)",
      "Free kopi, gula & teh",
      "Karaoke",
      "Wifi",
      "Smart TV",
      "Alat bakaran arang",
      "Alat grill (gas portable bawa sendiri)",
      "Ruang keluarga luas",
      "View pegunungan Sekipan"
    ],
    capacity: "15-25 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Parkir muat 5 mobil (mobil besar seperti Alphard/Elf tidak bisa masuk, karena lebar jalan hanya 2 meter)"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5812.jpeg?raw=true",
    type: "villa"
  },
{
    id: "villa-royal",
    name: "Villa RYL",
    location: "Tawangmangu",
    rates: [
      { label: "Weekday", price: 2000000 },
      { label: "Weekend", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "2 ruang tamu dengan sofa",
      "3 kamar tidur",
      "4 kamar mandi (dengan water heater)",
      "Private pool",
      "Smart TV + Karaoke sound",
      "Free Wi-Fi",
      "Dapur lengkap (magicom, dispenser, kompor & kulkas)",
      "Parkiran luas",
      "Free alat BBQ",
      "Free 1 galon",
      "Free kopi, teh, gula & snack"
    ],
    capacity: "Maksimal 20 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Price from owner, no mark up"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5813.jpeg?raw=true",
    type: "villa"
  },
{
  "id": "villa-diandra-2",
  "name": "Villa DNDR 2",
  "location": "Sekipan, Tawangmangu",
  "rates": [
    { "label": "Weekday", "price": 1500000 },
    { "label": "Weekend", "price": 2000000 }
  ],
  "units": 1,
  "facilities": [
    "Villa baru, 2 lantai dengan furniture baru",
    "Private pool",
    "Balkon atas view pegunungan & hutan Sekipan",
    "Sofa bed + ruang tamu & ruang keluarga",
    "3 kamar tidur",
    "3 kamar mandi air panas",
    "Dapur & alat masak lengkap + mini bar (kulkas, dispenser, magic com, dll.)",
    "LED TV",
    "Free Wi-Fi",
    "2 Smart TV + karaoke & sound system",
    "Alat bakaran (BBQ)",
    "Kapasitas maksimal 20 orang (lebih kena charge Rp 20.000/orang)",
    "Extra bed Rp 100.000/bed",
    "Parkir muat 3 mobil"
  ],
  "capacity": "Maksimal 20 orang (lebih kena charge Rp 20.000/orang)",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5816.jpeg?raw=true",
  "type": "villa"
},
{
  "id": "villa-2a-budi-luhur",
  "name": "Villa BDL 2A",
  "location": "Sekipan, Tawangmangu",
  "rates": [
    { "label": "Senin - Kamis", "price": 1700000 },
    { "label": "Jumat", "price": 2250000 },
    { "label": "Sabtu", "price": 2750000 },
    { "label": "Minggu", "price": 1500000 }
  ],
  "units": 1,
  "facilities": [
    "3 kamar tidur",
    "2 kamar mandi air panas",
    "Dapur lengkap",
    "Kulkas",
    "Dispenser",
    "Magicom",
    "Alat makan lengkap",
    "Wi-Fi",
    "Karaoke",
    "YouTube",
    "TV kabel",
    "Halaman luas",
    "Ruang tamu",
    "Ruang keluarga"
  ],
  "capacity": "Maksimal 20 orang",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5823.jpeg?raw=true",
  "type": "villa"
},
{
  id: "villa-edelweis",
  name: "Villa EDLW",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Minggu - Kamis", price: 1300000 },
    { label: "Jumat", price: 2000000 },
    { label: "Sabtu", price: 2500000 }
  ],
  units: 1,
  facilities: [
    "3 kamar tidur",
    "2 kamar mandi air panas",
    "Private pool",
    "Free 1 extrabed",
    "Dapur lengkap + alat masak & makan",
    "Kulkas",
    "Peralatan shalat",
    "Free 2 ekor ayam broiler (mentah/ungkep, pilih salah satu)",
    "Free kopi, gula & teh",
    "Karaoke",
    "Wi-Fi",
    "Smart TV",
    "Alat bakaran",
    "Alat grill (gas portable bawa sendiri)",
    "Ruang keluarga luas",
    "View pegunungan Sekipan",
    "Dekat kebun stroberi",
    "Dekat wisata Bukit Sekipan",
    "Parkir luas"
  ],
  capacity: "15-25 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "No miras/alkohol",
    "No narkoba",
    "No pacaran/mesum",
    "No orgen tunggal"
  ],
  image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5811.jpeg?raw=true",
  type: "villa"
},
{
  id: "villa-cantika",
  name: "Villa Cantika",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: [
    "Private Pool / Kolam Renang",
    "3 Kamar Tidur Bed Besar",
    "2 Kamar Mandi Air Hangat",
    "Ruang Keluarga Besar dan Ruang Tamu Besar",
    "2 TV Android UK 43 Inc",
    "Set Karaoke Lengkap",
    "PS 3 Lengkap Game dan Netflix",
    "Kitchen Set (Peralatan Makan dan Masak Cukup Komplit)",
    "Galon, Kulkas, Dispenser, Majicom",
    "Free Kopi, Teh, Gula & Mie Istimewa",
    "Free 1 Extra Bed",
    "Parkiran Muat 4 Mobil",
    "Tersedia Jetset Apabila Mati Lampu",
    "Tersedia Sepeda Gunung Ontel 2",
    "Tersedia Bakar-Bakaran BBQ",
    "Dekat Wisata: Bukit Sekipan, Kampung Halloween, Tawangmangu Wonder Park"
  ],
  capacity: "20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.40 (2).jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39 (6).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39 (8).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39 (7).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39 (4).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.40.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.40 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-06-18 at 13.13.39.jpeg"
  ],
  type: "villa"
},
{
  id: "villa-aries",
  name: "Villa Aries",
  location: "Tawangmangu",
  rates: [
    { label: "Weekday", price: 1100000 },
    { label: "Weekend", price: 1300000 }
  ],
  units: 1,
  facilities: [
    "2 Kamar Tidur",
    "2 Kamar Mandi Dalam",
    "1 Kamar Mandi Luar",
    "Rooftop Lantai 3 & 4",
    "Karaoke + Sound",
    "Ruang Tamu",
    "Alat Bakaran Lengkap",
    "Kitchen Set Lengkap",
    "Free Wi-Fi",
    "Water Heater",
    "Smart TV",
    "Balkon View",
    "Parkir 3 Mobil",
    "Dispenser",
    "Dilengkapi Pagar Besi sehingga Aman"
  ],
  capacity: "15 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 11.00",
    "Jam malam 24:00"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (7).jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (8).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (9).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (5).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.04.13 (6).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-hasan",
  name: "Villa Hassan",
  location: "Jl. Sekipan - Tawangmangu",
  rates: [
    { label: "Weekday", price: 1300000 },
    { label: "Jum'at", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: [
    "Private Swimming Pool",
    "PS 3 2stik",
    "3 Kamar Tidur",
    "3 Kamar Mandi Air Hangat",
    "Kompor BBQ",
    "Water Heater",
    "Rooftop & Balkon",
    "Dispenser",
    "Kulkas 2 Pintu",
    "Rice Cooker",
    "Smart TV 55inc with Netflix",
    "Swan Float",
    "Kitchen Set",
    "Parkir (3 Mobil)",
    "Sepeda Olah Raga",
    "Karaoke",
    "Wi-Fi Speed 50mbps",
    "Free Kopi, Gula, Teh, Mie Instan & 1 Galon Air Mineral"
  ],
  capacity: "15-20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.14 (2).jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.14.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.15 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.15.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.13 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.14 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.13 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.13.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.15 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 15.41.12.jpeg"
  ],
  type: "villa"
},
{
  id: "villa-country-1",
  name: "Villa Country 1",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 3500000 },
    { label: "Weekend", price: 4500000 }
  ],
  units: 10,
  facilities: [
    "10 Kamar",
    "8 Kamar Mandi",
    "Ruang Tamu",
    "Free Wi-Fi",
    "Air Hangat",
    "Dapur",
    "Karaoke",
    "Teras"
  ],
  capacity: "40-50 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-12 at 10.58.11 (1).jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-12 at 10.58.08.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-12 at 10.58.09 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-12 at 10.58.10.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-12 at 10.58.09 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-12 at 10.58.10 (1).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-cokro-2",
  name: "Villa Cokro 2",
  location: "Sekipan Tawangmangu",
  rates: [
    { label: "Weekday", price: 1300000 },
    { label: "Weekend", price: 1500000 }
  ],
  units: 1,
  facilities: [
    "Kolam Renang",
    "2 Kamar Tidur",
    "2 Kamar Mandi dengan Air Hangat",
    "Alat Dapur yang Komplit",
    "Magic Com",
    "Dispenser Air Mineral",
    "Ruang Tamu dengan Sofa Empuk",
    "TV LED",
    "Sound Karaoke Keluarga",
    "Free Wi-Fi",
    "Alat BBQ",
    "Pintu Pagar Besi yang Aman",
    "Dekat Wisata: Bukit Sekipan, Wonderpark, Taman Balekambang"
  ],
  capacity: "8-15 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.30.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.30 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.30 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.29 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.30 (4).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.30 (5).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.30 (6).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.29.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-17 at 13.03.30 (1).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-kayu",
  name: "Villa Kayu",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 2000000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: [
    "4 Kamar Tidur (atas 2, bawah 2)",
    "Ruang Karaoke",
    "Kamar Mandi dengan Water Heater",
    "Genset",
    "Free 10 Extra Bed",
    "Peralatan Dapur Lengkap",
    "Free Wi-Fi",
    "Parkiran Luas",
    "Halaman Cukup Luas"
  ],
  capacity: "50 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/bagian depan vk.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.04 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.06.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.02 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.02 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.03.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.04.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.05.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.04 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.04 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.01.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.05 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.02.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-09-23 at 08.42.01 (1).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-dea-3",
  name: "Villa Dea 3",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: [
    "3 Kamar Tidur",
    "2 Kamar Mandi",
    "Private Pool",
    "Karaoke",
    "Kitchen Set",
    "Free Wi-Fi",
    "Water Heater",
    "Smart TV",
    "Parkir Luas"
  ],
  capacity: "15-20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan vdea.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.34.08.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.34.08 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.34.08 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.34.08 (3).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-dea-1-2",
  name: "Villa Dea 1 & 2",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 2,
  facilities: [
    "3 Kamar Tidur",
    "2 Kamar Mandi",
    "Private Pool",
    "Karaoke",
    "Kitchen Set",
    "Free Wi-Fi",
    "Water Heater",
    "Smart TV",
    "Parkir Luas"
  ],
  capacity: "15-20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan d12.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (5).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (7).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (4).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (6).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (8).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 15.31.08 (1).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-sekar-mawar",
  name: "Villa Sekar Mawar",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 3,
  facilities: [
    "Kolam Renang",
    "Kamar Mandi Dalam/Luar (3 Kamar)",
    "Water Heater",
    "Wi-Fi Available",
    "Karaoke",
    "Kitchen Set / Dapur",
    "BBQ Area",
    "Kopi & Teh",
    "Mineral Water",
    "Rooftop",
    "Area Parkir (4 Mobil)",
    "Free Pop Mie, Snack"
  ],
  capacity: "20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan sk.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.18.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.20 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.17.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.19 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.21 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.14.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.21.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.17 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.19.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.20.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-28 at 21.49.18 (1).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-zam",
  name: "Villa ZAM",
  location: "Kalisoro Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1200000 },
    { label: "Weekend", price: 1500000 }
  ],
  units: 1,
  facilities: [
    "2 Lantai",
    "3 Kamar Tidur",
    "2 Kamar Mandi",
    "Kitchen Room",
    "Ruang Tamu",
    "Ruang Keluarga",
    "Balkon Atas",
    "Parkir Luas",
    "Wi-Fi Available",
    "Karaoke",
    "Smart TV",
    "Air Hangat",
    "Free Kopi, Gula, Teh, Air Mineral Galon",
    "Dekat Wisata: Bukit Sekipan, Wonderpark, Balekambang, Grojogan Sewu"
  ],
  capacity: "15 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/villa sam.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.25.59 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.25.59.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.25.58 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.26.00 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.26.00.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.25.58.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.25.58 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.25.57 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-09-30 at 12.25.59 (2).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-yura",
  name: "Villa Yra",
  location: "Pancot, Tawangmangu",
  rates: [
    { label: "Weekday", price: 2000000 },
    { label: "Jum'at", price: 3000000 },
    { label: "Weekend", price: 3000000 },
    { label: "Sabtu", price: 3500000 }
  ],
  units: 4,
  facilities: [
    "Privat Pool / Kolam Renang",
    "4 Kamar (1 King Size dan 3 Queen Size) dilengkapi TV di setiap kamar",
    "3 Kamar Mandi + 1 Ruang Bilas dilengkapi dengan Water Heater",
    "Sound + Karaoke",
    "Kitchen Set (alat masak, alat makan, kulkas, magic com, water dispenser)",
    "Free Gula, Teh, Kopi",
    "Free Wi-Fi",
    "Alat BBQ Manual (bakaran arang)",
    "Parkiran",
    "Genset"
  ],
  capacity: "25 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan graha.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (9).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (12).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (5).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (6).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (8).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (4).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (7).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (11).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-02-21 at 14.36.04 (10).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-yasalam",
  name: "Villa Yasalam",
  location: "Pancot, Tawangmangu",
  rates: [
    { label: "Weekday", price: 2500000 },
    { label: "Jum'at", price: 3000000 },
    { label: "Weekend", price: 3500000 }
  ],
  units: 1,
  facilities: [
    "Ruang keluarga",
    "4 Kamar tidur (kingbed)",
    "4 Kamar mandi (2 kamar mandi dalam, 2 kamar mandi luar)",
    "Alat bakaran dan BBQ",
    "Wi-Fi Available",
    "Smart TV",
    "Set Karaoke",
    "Dapur dan meja makan dengan peralatan komplit",
    "Area Parkir sampai 7 mobil (luar, dalam villa)",
    "Kolam Renang",
    "Area Balkon",
    "Rooftop",
    "Trek kebun sayur dan sungai"
  ],
  capacity: "20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan yasalam.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (5).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (4).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (7).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (8).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (10).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (11).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (9).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-01-30 at 11.02.58 (6).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-hepa-4",
  name: "Villa He-Pa 4",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: [
    "KOLAM 🏊",
    "KAMAR 3",
    "KAMAR MANDI 2 (1 DALAM 1 LUAR)",
    "AIR HANGAT",
    "KARAOKE",
    "TV 50\" SMART TV",
    "KITCHEN SET",
    "WIFI 30 MBPS",
    "DISPENSER (FREE 1 GALON)",
    "ALAT BAKAR BAKAR",
    "PARKIR MOBIL 2-3 MOBIL"
  ],
  capacity: "15-20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan hepa.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.36.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.35.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.36 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.37 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.37.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.35 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.36 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.25.37 (2).jpeg"
  ],
  type: "villa"
},
{
  id: "villa-karismaya-3",
  name: "Villa Kharisma 3",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1500000 },
    { label: "Jum'at", price: 1600000 },
    { label: "Weekend", price: 1800000 }
  ],
  units: 3,
  facilities: [
    "Private Pool / Kolam Renang",
    "Bed Queen Size / King Size / Single Bed (4 bed)",
    "Kamar Mandi Dalam",
    "Water Heater",
    "Karaoke",
    "Gazebo",
    "Ruang Tamu dengan Sofa Empuk",
    "Mini Bar",
    "Kitchen Set / Dapur",
    "Wi-Fi Available",
    "LED TV",
    "Area Parkir (kapasitas 7 mobil)",
    "Taman/Garden",
    "Dekat Wisata (Bukit Sekipan, Wonderpark, Taman Balekambang)"
  ],
  capacity: "20 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan krismaya 3.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.44.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.46.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.47.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.41.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.42 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.42.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.45 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.45.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.46 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.43 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.43 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.46 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.41 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.43.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.44 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2022-08-19 at 14.16.44 (2).jpeg"
  ],
  type: "villa"
}
];

export const glampingData: Property[] = [
{
    id: "glamping-diyanis",
    name: "Glamping DYN",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday - Kolam renang air dingin", price: 500000 },
      { label: "Weekday - Kolam renang air hangat", price: 600000 },
      { label: "Jumat - Kolam renang air dingin", price: 600000 },
      { label: "Jumat - Kolam renang air hangat", price: 700000 },
      { label: "Weekend - Kolam renang air dingin", price: 700000 },
      { label: "Weekend - Kolam renang air hangat", price: 800000 }
    ],
    units: 11,
    facilities: [
      "Smart TV",
      "Free Wi-Fi", 
      "Kamar mandi air hangat",
      "Private pool hangat",
      "1 bed besar",
      "Dispenser",
      "Free mie instan, kopi, gula, teh",
      "Dapur mini",
      "Perlengkapan masak & makan",
      "Free breakfast untuk 2 orang",
      "Tempat parkir luas"
    ],
    capacity: "2-5 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang", 
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5817.jpeg?raw=true",
    type: "glamping"
  },
{
    id: "mongkrang-story-cottage",
    name: "Mongkrang SC",
    location: "Tawangmangu", 
    rates: [
      { label: "Weekday", price: 500000 },
      { label: "Weekend", price: 700000 }
    ],
    units: 6,
    facilities: [
      "1 Bed",
      "Sofa",
      "Karpet tebal",
      "TV Android",
      "Wi-Fi",
      "Teko listrik",
      "Kamar mandi dalam",
      "Air panas & dingin",
      "Kopi dan teh",
      "Include sarapan pagi untuk 2 orang",
      "View Gunung Lawu"
    ],
    capacity: "Maksimal 6 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras", 
      "No mesum",
      "No drugs",
      "Super cantik dengan view Gunung Lawu"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5815.jpeg?raw=true",
    type: "glamping"
  },
{
    id: "diza-glamping",
    name: "DZ Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Weekday", price: 550000 },
      { label: "Jumat", price: 700000 },
      { label: "Weekend", price: 800000 }
    ],
    units: 5,
    facilities: [
      "Private Pool Air Hangat",
      "1 Bed Type Queen Size",
      "1 Kamar Mandi Dalam",
      "Water Heater",
      "Handuk & Amenities",
      "Wi-Fi Available",
      "Smart TV",
      "Kursi Outdoors",
      "Mini Kitchen",
      "Free Breakfast 2 Pax",
      "Free Mineral Water, Gula, Teh & Kopi",
      "Area Parkir",
      "Free BBQ"
    ],
    capacity: "2-4 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Price From Owner, No Mark Up",
      "Dekat Wisata Buper Pleseran & Telaga Asmara"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5827.jpeg?raw=true",
    type: "glamping"
  },
{
    id: "zheyuri-glamping",
    name: "ZHY Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Harga start 500K", price: 500000 }
    ],
    units: 1,
    facilities: [
      "1 Bed di lantai 2, bawahnya sofa",
      "1 Kamar mandi dalam – air hangat, handuk & amenities",
      "Wi-Fi available",
      "Smart TV",
      "Gula, teh & kopi",
      "Mini freezer",
      "Sofa",
      "Mini kitchen",
      "Private pool",
      "View adem"
    ],
    capacity: "2-6 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Glamping baru di Tawangmangu dengan view cantik",
      "Dekat wisata"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5825.jpeg?raw=true",
    type: "glamping"
  },
{
    id: "azalea-glamping",
    name: "AZL Glamping",
    location: "Pleseran, Tawangmangu",
    rates: [
      { label: "Weekday", price: 500000 },
      { label: "Weekend", price: 800000 }
    ],
    units: 5,
    facilities: [
      "Bed ukuran 160x200",
      "1 Kamar mandi dengan water heater",
      "Smart TV 43\"",
      "Free Wi-Fi",
      "Mini kitchen",
      "Alat masak & makan lengkap",
      "Handuk + amenities",
      "Cermin + hair dryer",
      "Free sarapan untuk 2 orang",
      "Welcome drink (teh, gula, kopi)",
      "Dispenser (panas, biasa, dingin)",
      "Mini private pool cukup besar",
      "View bukit dan hutan pinus",
      "Dekat sungai, bisa untuk ciblon",
      "Diskon 50% tiket masuk wisata Buper Pleseran",
      "Free BBQ",
      "Free tenda"
    ],
    capacity: "2-7 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Cocok untuk keluarga kecil, dan pasangan suami istri",
      "Pas juga untuk honeymoon",
      "Dekat wisata Pleseran"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5831.jpeg?raw=true",
    type: "glamping"
  },
{
    id: "2r-glamping",
    name: "TR Glamping",
    location: "Kalisoro, Tawangmangu",
    rates: [
      { label: "Senin–Kamis", price: 550000 },
      { label: "Jumat", price: 650000 },
      { label: "Sabtu", price: 750000 }
    ],
    units: 3,
    facilities: [
      "Kasur ukuran queen size",
      "Kamar mandi dengan water heater",
      "Welcome drink",
      "Welcome snack",
      "Smart TV",
      "Free kopi, gula & teh",
      "Sharing pool"
    ],
    capacity: "2-4 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Dekat wisata Bukit Sekipan"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5832.jpeg?raw=true",
    type: "glamping"
  },
{
    id: "dava-glamping",
    name: "DV Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Minggu–Kamis", price: 400000 },
      { label: "Jumat", price: 500000 },
      { label: "Sabtu", price: 700000 }
    ],
    units: 3,
    facilities: [
      "Mini pool",
      "Kamar mandi dengan water heater & shower",
      "1 kasur (queen size)",
      "1 sofa bed",
      "Wi-Fi available",
      "Smart TV + Netflix",
      "Dapur umum (sharing)",
      "Kettle listrik",
      "Free Popmie / biskuit, air mineral, gula, teh & kopi (free refill)",
      "Area parkir luas",
      "View full alam pegunungan yang asri"
    ],
    capacity: "2-4 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Price from Owner, No Mark Up",
      "Dekat dengan Buper Pleseran & Telaga Asmara"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5837.jpeg?raw=true",
    type: "glamping"
  },
{
    id: "bumwa-glamping",
    name: "BMW Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Harga mulai 600 ribuan", price: 600000 }
    ],
    units: 3,
    facilities: [
      "Mini pool air hangat",
      "1 kasur queen size",
      "Sofa bed",
      "1 kamar mandi dalam (water heater, handuk & amenities)",
      "Wi-Fi available",
      "Smart TV",
      "Dispenser hot & cold",
      "Free breakfast 2 pax",
      "Free gula, teh & kopi",
      "Area parkir luas"
    ],
    capacity: "Maksimal 5 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Dekat wisata Bukit Sekipan & kebun stroberi (bisa petik sendiri)"
    ],
    image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5826.jpeg?raw=true",
    type: "glamping"
  },
{
  "id": "glamping-svarga",
  "name": "Glamping SVG",
  "location": "Sekipan, Tawangmangu",
  "rates": [
    { "label": "Weekday", "price": 900000 },
    { "label": "Weekend", "price": 1200000 }
  ],
  "units": 3,
  "facilities": [
    "Double Bed size 160x200",
    "Kamar mandi water heater",
    "Welcome drink",
    "View bukit pinus",
    "Smart TV",
    "Wifi",
    "Free breakfast 4 pack",
    "Private pool air hangat",
    "Parkir luas",
    "Dekat kebun strawberry",
    "Dekat warung makan",
    "Mini kitchen",
    "Extrabed tambahan 100k"
  ],
  "capacity": "8 orang",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5839.jpeg?raw=true",
  "type": "glamping"
},
{
  "id": "glamping-jingga",
  "name": "Glamping Jingga",
  "location": "Sekipan, Tawangmangu",
  "rates": [
    { "label": "Weekday", "price": 900000 },
    { "label": "Weekend", "price": 1200000 }
  ],
  "units": 3,
  "facilities": [
    "Double Bed",
    "Private Pool Air Hangat",
    "Smart TV",
    "Dispenser Air Panas Dingin",
    "Mini Kitchen",
    "Kamar Mandi Water Heater",
    "Amenities",
    "Welcoming Drink",
    "Free Breakfast 3 Porsi",
    "Wifi",
    "Prayer tools"
  ],
  "capacity": "Untuk keluarga kecil",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5838.jpeg?raw=true",
  "type": "glamping"
},
{
  "id": "glamping-alm",
  "name": "Glamping ALM",
  "location": "Sekipan, Tawangmangu",
  "rates": [
    { "label": "Weekday", "price": 500000 },
    { "label": "Jumat", "price": 600000 },
    { "label": "Weekend", "price": 700000 }
  ],
  "units": 3,
  "facilities": [
    "Private Pool",
    "1 Bed Queen Size",
    "Extra Bed (Rp 100.000 / bed)",
    "1 Kamar Mandi Dalam",
    "Water Heater, Handuk & Amenities",
    "Wi-Fi",
    "Smart TV",
    "Free Pop Mie, Mineral Water, Gula, Teh & Kopi",
    "Area Parkir",
    "Dekat Wisata Bukit Sekipan",
    "Dekat Kebun Strawberry"
  ],
  "capacity": "Keluarga kecil & pasangan suami istri (cocok untuk honeymoon)",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5836.jpeg?raw=true",
  "type": "glamping"
},
{
  "id": "bhills-a",
  "name": "B.HILLS A",
  "location": "Blumbang, Tawangmangu",
  "rates": [
    { "label": "Weekday", "price": 550000 },
    { "label": "Jumat", "price": 600000 },
    { "label": "Weekend", "price": 750000 }
  ],
  "units": 5,
  "facilities": [
    "1 Bed King Size",
    "Extra Bed (Rp 100.000 / bed)",
    "1 Kamar Mandi Dalam",
    "Water Heater, Handuk & Amenities",
    "Wi-Fi",
    "Smart TV",
    "Free Gula, Teh & Kopi",
    "Area Parkir",
    "Dekat Wisata",
    "Karaoke Set",
    "Dispenser",
    "Sofa Set",
    "View City Light Solo"
  ],
  "capacity": "Keluarga kecil & pasangan suami istri (cocok untuk honeymoon)",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5835.jpeg?raw=true",
  "type": "glamping"
},
{
  "id": "bhills-b",
  "name": "B.HILLS B",
  "location": "Blumbang, Tawangmangu",
  "rates": [
    { "label": "Weekday", "price": 550000 },
    { "label": "Jumat", "price": 600000 },
    { "label": "Weekend", "price": 750000 }
  ],
  "units": 3,
  "facilities": [
    "1 Bed King Size",
    "Extra Bed (Rp 100.000 / bed)",
    "1 Kamar Mandi Dalam",
    "Water Heater, Handuk & Amenities",
    "Wi-Fi",
    "Smart TV",
    "Free Gula, Teh & Kopi",
    "Area Parkir",
    "Dekat Wisata",
    "Dispenser",
    "Sofa",
    "View City Light Solo"
  ],
  "capacity": "Keluarga kecil & pasangan suami istri (cocok untuk honeymoon)",
  "notes": [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  "image": "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5834.jpeg?raw=true",
  "type": "glamping"
},
{
  id: "glamping-syd-2",
  name: "Glamping SYD 2",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Weekday", price: 800000 },
    { label: "Weekend", price: 1200000 }
  ],
  units: 1,
  facilities: [
    "Kapasitas 6-8 orang",
    "2 kamar dengan 3 bed",
    "Private pool air hangat",
    "Welcome snack dan welcome drink",
    "Smart TV",
    "Catle jug",
    "Free Wi-Fi"
  ],
  capacity: "6-8 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5829.jpeg?raw=true",
  type: "glamping"
},
{
  id: "glamping-lw-purva",
  name: "Glamping LWPR",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Minggu - Kamis", price: 490000 },
    { label: "Jumat", price: 690000 },
    { label: "Sabtu", price: 790000 }
  ],
  units: 1,
  facilities: [
    "Kapasitas 6 orang",
    "2 kasur nyaman (ada extra bed)",
    "Private pool luas eksklusif",
    "Kamar mandi luas & aesthetic",
    "Bathtub air hangat",
    "Shower area",
    "Area mezanin luas",
    "Smart TV (Netflix & aplikasi film lain)",
    "2 kursi & meja santai",
    "Amenitas lengkap (odol, sabun, shampo, handuk, dll.)",
    "Free sarapan 2 pax",
    "Welcome drink (kopi, teh, gula, krimer)",
    "Cooking set komplit",
    "Free galon air minum",
    "Parkir luas",
    "Penjaga ramah siap membantu"
  ],
  capacity: "6 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5833.jpeg?raw=true",
  type: "glamping"
},
{
  id: "glamping-pine",
  name: "Glamping Pine",
  location: "Sekipan, Tawangmangu",
  rates: [
    { label: "Minggu - Kamis", price: 900000 },
    { label: "Jumat", price: 900000 },
    { label: "Sabtu", price: 1300000 }
  ],
  units: 4,
  facilities: [
    "Private pool air hangat",
    "2 queen bed",
    "1 kamar mandi air hangat",
    "Ruang tamu luas",
    "Smart TV",
    "Wi-Fi",
    "Karaoke keluarga",
    "Dapur + alat dapur lengkap",
    "Dispenser + air galon",
    "Free teh, gula, kopi",
    "Kapasitas maksimal 10 orang",
    "Parkir muat 4 mobil",
    "Lokasi di bukit Sekipan (pusat wisata)",
    "Dekat Kampoeng Halloween (1 menit)",
    "Dekat Telaga Sarangan (40 menit)",
    "Dekat Lawu Park (10 menit)",
    "Dekat Wonderpark (4 menit)",
    "Dekat Rumah Atsiri (10 menit)",
    "Dekat Sakura Hills (10 menit)"
  ],
  capacity: "10 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Harga sewaktu-waktu bisa berubah",
    "No miras/alkohol",
    "No dangdutan/orgen tunggal/live music",
    "Jam malam 23.30 WIB",
    "Tidak boleh melanggar hukum & norma",
    "DP tidak bisa kembali",
    "Pindah villa = DP hangus",
    "Cancel = DP hangus",
    "Reschedule max H-4 & hanya bisa 1x"
  ],
  image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/IMG_5814.jpeg?raw=true",
  type: "glamping"
},
{
  id: "glamping-iks-2",
  name: "Glamping IKS 2",
  location: "Tawangmangu",
  rates: [
    { label: "Weekday", price: 500000 },
    { label: "Weekend", price: 700000 }
  ],
  units: 1,
  facilities: [
    "Bed dengan ukuran besar",
    "Kamar Mandi Dalam",
    "Water Heater",
    "Toiletries",
    "Smart TV",
    "Free Coffee & Teh",
    "Free Breakfast",
    "Dekat Wisata: Bukit Sekipan, Sekipan Camp, Wonderpark, Lawupark"
  ],
  capacity: "4 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-07-21 at 21.07.07 (1).jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-07-21 at 21.07.06.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-07-21 at 21.07.08.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-07-21 at 21.07.06 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2023-07-21 at 21.07.07.jpeg"
  ],
  type: "glamping"
},
{
  id: "glamping-agung",
  name: "Glamping Agung",
  location: "Tawangmangu",
  rates: [
    { label: "Weekday", price: 1000000 },
    { label: "Weekend", price: 1250000 }
  ],
  units: 1,
  facilities: [
    "Kolam renang bersama",
    "2 Kamar dengan 3 bed",
    "Kamar mandi air hangat",
    "Mini kitchen dengan peralatan yang cukup komplit",
    "Ruang Keluarga",
    "TV",
    "Wi-Fi Available",
    "Set Karaoke",
    "Alat bakaran",
    "Tenda (Matras, Sleeping bag, lampu)",
    "Balkon",
    "Halaman rumput",
    "Area balkon",
    "Dekat glamping terdapat trek hutan dan sungai"
  ],
  capacity: "6 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan gma.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.01.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.02 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.02.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.03.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.03 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.00 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.01 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-16 at 15.33.02 (1).jpeg"
  ],
  type: "glamping"
},
{
  id: "glamping-salam",
  name: "Glamping Salam",
  location: "Sekipan Tawangmangu",
  rates: [
    { label: "Weekday", price: 600000 },
    { label: "Jum'at", price: 700000 },
    { label: "Weekend", price: 800000 }
  ],
  units: 5,
  facilities: [
    "1 Kamar dengan king bed",
    "Free extrabed Uk. 90x200",
    "1 kamar mandi dengan water heater",
    "Tersedia handuk + alat mandi",
    "Sofa bed",
    "Kolam renang pribadi",
    "Smart TV",
    "Free Wifi",
    "Tersedia dapur umum (alat masak lengkap)",
    "Free 2 pack sarapan",
    "Free Gula, teh, kopi",
    "Parkir depan glamping",
    "Dekat kebun strawberry dan wisata bukit sekipan"
  ],
  capacity: "4 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/glamping salam.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-07-19 at 12.09.30 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-07-19 at 12.09.30.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-07-19 at 12.09.29 (2).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-07-19 at 12.09.29.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-07-19 at 12.09.30 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-07-19 at 12.09.28 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-07-19 at 12.09.29 (1).jpeg"
  ],
  type: "glamping"
},
{
  id: "tabriz-glamping",
  name: "Tabriiz Glamping",
  location: "Pleseran, Tawangmangu",
  rates: [
    { label: "Weekday", price: 800000 },
    { label: "Weekend", price: 1000000 }
  ],
  units: 5,
  facilities: [
    "Welcome Drink",
    "Bed 160*200",
    "Wi-Fi Available",
    "TV Android",
    "Kursi Lipat",
    "Breakfast 2 Pax",
    "Privat Pool 🏊",
    "Air Hangat",
    "Parkir Luas",
    "View Bukit dan Kebun Sayur"
  ],
  capacity: "5 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs"
  ],
  image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/depan tabris.jpeg",
  slideImages: [
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-21 at 09.28.09 (3).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-21 at 09.28.09 (4).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-21 at 09.28.09 (5).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-21 at 09.28.09.jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-21 at 09.28.09 (1).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-21 at 09.28.09 (7).jpeg",
    "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/telo/WhatsApp Image 2024-05-21 at 09.28.09 (2).jpeg"
  ],
  type: "glamping"
}
];

export const tripData: Trip[] = [
  // SHORT TRIPS
  {
    id: "short-trip-1",
    name: "Paket Alam & Kuliner",
    category: "short",
    destinations: ["Villa", "Grojokan putri", "Kebun Sayur", "Kebun Strawberry"],
    duration: "1 - 1 ½ Jam",
    price: 400000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Sudah termasuk driver & BBM",
      "Belum termasuk makan",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-1",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/alam dan kuliner.jpeg",
    rating: 4.8,
    description: "Wisata alam ke air terjun, kebun sayur organik, dan petik strawberry segar.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional", 
      "BBM",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ]
  },
  {
    id: "short-trip-2", 
    name: "Wisata Air Terjun",
    category: "short",
    destinations: ["Villa", "Kebun strawberry", "Grojokan sewu", "Pusat Oleh-oleh"],
    duration: "1-2 Jam",
    price: 400000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Sudah termasuk driver & BBM",
      "Belum termasuk makan",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-1",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/air terjun.jpeg",
    rating: 4.7,
    description: "Jelajahi Grojokan Sewu, petik strawberry, dan belanja oleh-oleh khas.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional",
      "BBM", 
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ]
  },
  {
    id: "short-trip-3",
    name: "Petualangan Umbul",
    category: "short", 
    destinations: ["Villa", "Kebun strawberry", "Umbul Udal-udalan", "Pusat Oleh-oleh"],
    duration: "1-2 Jam",
    price: 450000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Sudah termasuk driver & BBM",
      "Belum termasuk makan besar",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-1",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/umbul.jpeg",
    rating: 4.6,
    description: "Petualangan seru ke Umbul Udal-udalan dengan petik strawberry.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional",
      "BBM",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ]
  },
  {
    id: "short-trip-4",
    name: "Sirkuit Offroad",
    category: "short",
    destinations: ["Villa", "Sirkuit Sekipan", "Kebun Strawberry", "Jalur Offroad"],
    duration: "1 - 1 ½ Jam",
    price: 450000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman", 
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)",
      "Perlengkapan safety"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Sudah termasuk driver & BBM",
      "Untuk yang suka tantangan",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-1",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/sirkuit offroad).jpeg",
    rating: 4.9,
    description: "Sensasi offroad menantang di sirkuit Sekipan plus petik strawberry.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional",
      "BBM",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)",
      "Perlengkapan safety"
    ]
  },
  {
    id: "short-trip-5",
    name: "Wisata Bunga",
    category: "short",
    destinations: ["Villa", "Kampung 1.000 Bunga", "Bumi Perkemahan Pleseran"],
    duration: "1 - 1 ½ Jam", 
    price: 450000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Sudah termasuk driver & BBM",
      "Spot foto Instagram-able",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-1",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/wisata bunga.jpeg",
    rating: 4.5,
    description: "Kunjungi Kampung 1.000 Bunga yang colorful, perfect untuk foto-foto!",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional",
      "BBM",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ]
  },
  // LONG TRIPS
  {
    id: "long-trip-1",
    name: "Eksplorasi Telaga Madirda",
    category: "long",
    destinations: ["Villa", "Grojokan sewu pintu 2", "Telaga Madirda"],
    duration: "4-5 Jam",
    price: 550000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk", 
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Perjalanan cukup jauh",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-2",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/telaga madirda.jpeg",
    rating: 4.8,
    description: "Eksplorasi Telaga Madirda eksotis melalui Grojokan Sewu Pintu 2.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional",
      "Tour guide",
      "BBM",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ]
  },
  {
    id: "long-trip-2",
    name: "Adventure Gunung Lawu",
    category: "long",
    destinations: ["Villa", "Telaga Madirda", "Hutan Pinus", "Candi Sukuh", "Grojokan Jumog"],
    duration: "4-5 Jam",
    price: 650000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)", 
      "Tour guide"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Trip paling populer",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-2",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/gunung lawu.jpeg",
    rating: 4.9,
    description: "Adventure lengkap Gunung Lawu: Telaga Madirda, Hutan Pinus, Candi Sukuh.",
    capacity: "Max 4 orang", 
    included: [
      "Transportasi jeep",
      "Driver profesional",
      "Tour guide",
      "BBM"    
    ]
  },
  {
    id: "long-trip-3",
    name: "Sirkuit Explorer",
    category: "long",
    destinations: ["Villa", "Sirkuit Sekipan", "Pleseran", "Jalur Hutan", "Sirkuit", "Pusat Oleh-oleh", "Petik Strawberry"],
    duration: "4-5 Jam",
    price: 750000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang", 
      "Trip paling lengkap",
      "Untuk yang suka tantangan",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-2",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/sirkuit explorer.jpeg",
    rating: 4.8,
    description: "Trip lengkap: offroad sirkuit, jalur hutan, Pleseran, dan strawberry.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional", 
      "Tour guide",
      "BBM"
    ]
  },
  {
    id: "long-trip-4",
    name: "Paralayang Adventure",
    category: "long",
    destinations: ["Villa", "Telaga Madirda", "Hutan Pinus", "Candi Sukuh", "Paralayang", "Pusat Oleh-oleh"],
    duration: "4-5 Jam",
    price: 850000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Sudah termasuk paralayang tandem",
      "Trip premium dengan aktivitas extreme",
      "Cuaca sangat mempengaruhi",
      "Booking minimal H-3",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/paralayang.jpeg",
    rating: 4.9,
    description: "Ultimate experience: paralayang tandem plus wisata Telaga Madirda.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep", 
      "Driver profesional",
      "Tour guide",
      "BBM"
    ]
  },
  {
    id: "long-trip-5",
    name: "Jembatan Kaca Explorer",
    category: "long",
    destinations: ["Villa", "Telaga Madirda", "Offroad Susur Sungai", "Jembatan Kaca", "Pusat Oleh-oleh"],
    duration: "4-5 Jam",
    price: 850000,
    facilities: [
      "Jeep 4WD berkapasitas 4 orang",
      "Driver berpengalaman",
      "BBM sudah termasuk",
      "Tiket masuk beberapa lokasi (belum termasuk tiket wisata tertentu)",
      "Tour guide",
      "Perlengkapan safety"
    ],
    notes: [
      "Harga per jeep maksimal 4 orang",
      "Offroad susur sungai yang menantang",
      "Jembatan kaca dengan view menakjubkan",
      "Jika hujan disediakan jas hujan",
      "Cuaca buruk trip bisa dibatalkan",
      "Booking minimal H-3",
      "DP 50% dari total harga"
    ],
    image: "https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/uploads/jembatan kaca.jpeg",
    rating: 4.7,
    description: "Offroad susur sungai menuju Jembatan Kaca dengan view spektakuler.",
    capacity: "Max 4 orang",
    included: [
      "Transportasi jeep",
      "Driver profesional",
      "Tour guide", 
      "BBM",
      "Tiket masuk semua lokasi",
      "Perlengkapan safety"
    ]
  }
];

export const getAllProperties = (): Property[] => {
  return [...villaData, ...glampingData];
};

export const getPropertiesByType = (type: "villa" | "glamping"): Property[] => {
  return type === "villa" ? villaData : glampingData;
};

export const getAllTrips = (): Trip[] => {
  return tripData;
};

export const getTripsByCategory = (category: "short" | "long"): Trip[] => {
  return tripData.filter(trip => trip.category === category);
};
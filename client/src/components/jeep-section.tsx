import { Button } from "@/components/ui/button";

interface TripData {
  id: string;
  title: string;
  destinations: string[];
  duration: string;
  price: number;
}

const shortTrips: TripData[] = [
  {
    id: "short-trip-1",
    title: "TRIP 1",
    destinations: ["Villa", "Grojokan putri", "Kebun Sayur", "Kebun Strawberry"],
    duration: "1 - 1 ½ Jam",
    price: 400000
  },
  {
    id: "short-trip-2", 
    title: "TRIP 2",
    destinations: ["Villa", "Kebun strawberry", "Grojokan sewu", "Pusat Oleh-oleh"],
    duration: "1-2 Jam",
    price: 400000
  },
  {
    id: "short-trip-3",
    title: "TRIP 3", 
    destinations: ["Villa", "Kebun strawberry", "Umbul Udal-udalan", "Pusat Oleh-oleh"],
    duration: "1-2 Jam",
    price: 450000
  },
  {
    id: "short-trip-4",
    title: "TRIP 4",
    destinations: ["Villa", "Sirkuit Sekipan", "Kebun Strawberry", "Jalur Offroad"],
    duration: "1 - 1 ½ Jam", 
    price: 450000
  },
  {
    id: "short-trip-5",
    title: "TRIP 5",
    destinations: ["Villa", "Kampung 1.000 Bunga", "Bumi Perkemahan Pleseran"],
    duration: "1 - 1 ½ Jam",
    price: 450000
  }
];

const longTrips: TripData[] = [
  {
    id: "long-trip-1",
    title: "TRIP 1",
    destinations: ["Villa", "Grojokan sewu pintu 2", "Telaga Madirda"],
    duration: "4-5 Jam",
    price: 550000
  },
  {
    id: "long-trip-2",
    title: "TRIP 2", 
    destinations: ["Villa", "Telaga Madirda", "Hutan Pinus", "Candu Sukuh", "Grojokan Jumog"],
    duration: "4-5 Jam",
    price: 650000
  },
  {
    id: "long-trip-3",
    title: "TRIP 3",
    destinations: ["Villa", "Sirkuit Sekipan", "Pleseran", "Jalur Hutan", "Sirkuit", "Pusat Oleh-oleh", "Petik Strawberry"],
    duration: "4-5 Jam",
    price: 750000
  },
  {
    id: "long-trip-4", 
    title: "TRIP 4",
    destinations: ["Villa", "Telaga Madirda", "Hutan Pinus", "Candi Sukuh", "Paralayang", "Pusat Oleh-oleh"],
    duration: "4-5 Jam",
    price: 850000
  },
  {
    id: "long-trip-5",
    title: "TRIP 5",
    destinations: ["Villa", "Telaga Madirda", "Offroad Susur Sungai", "Jembatan Kaca", "Pusat Oleh-oleh"],
    duration: "4-5 Jam", 
    price: 850000
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

function TripCard({ trip, type }: { trip: TripData; type: 'short' | 'long' }) {
  const jeepImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    "https://images.unsplash.com/photo-1544553037-9cedeecac25b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300", 
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
  ];
  
  const tripIndex = parseInt(trip.id.split('-')[2]) - 1;
  const imageUrl = jeepImages[tripIndex] || jeepImages[0];
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid={`trip-card-${trip.id}`}>
      <img 
        src={imageUrl}
        alt={`Jeep trip ${trip.title}`}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold text-gray-900">▶️ {trip.title}</h4>
          <span className="text-xl font-bold text-primary-600">{formatPrice(trip.price)}</span>
        </div>
        
        <div className="mb-4">
          <ul className="space-y-1">
            {trip.destinations.map((destination, index) => (
              <li key={index} className="text-gray-600 text-sm">- {destination}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Durasi: {trip.duration}</span>
          <Button 
            size="sm"
            className="bg-primary-600 hover:bg-primary-700 text-white"
            data-testid={`button-book-${trip.id}`}
          >
            Pesan
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function JeepSection() {
  return (
    <section id="jeep" className="py-16 bg-gray-50" data-testid="jeep-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            HARGA TRIP JEEP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi keindahan Tawangmangu dengan berbagai pilihan paket wisata jeep yang menarik
          </p>
        </div>
        
        {/* SHORT TRIP Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">#SHORT TRIP</h3>
            <p className="text-gray-600">Wisata singkat untuk pengalaman yang berkesan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} type="short" />
            ))}
          </div>
        </div>
        
        {/* LONG TRIP Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">#LONG TRIP</h3>
            <p className="text-gray-600">Petualangan panjang untuk eksplorasi mendalam</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {longTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} type="long" />
            ))}
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="text-center mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Informasi & Pemesanan</h4>
          <p className="text-gray-600 mb-4">Hubungi kami untuk detail lebih lanjut dan pemesanan trip jeep</p>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            data-testid="button-contact-jeep"
          >
            Hubungi via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

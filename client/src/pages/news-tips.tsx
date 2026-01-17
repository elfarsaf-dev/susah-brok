import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const newsItems = [
  {
    id: 1,
    title: "5 Villa dengan View Gunung Lawu Terbaik di Tawangmangu",
    excerpt: "Mencari villa dengan pemandangan pegunungan yang asri? Berikut rekomendasi villa terbaik untuk liburan keluarga Anda.",
    date: "15 Jan 2026",
    author: "Admin",
    category: "Rekomendasi",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Tips Glamping Nyaman Bersama Keluarga saat Musim Hujan",
    excerpt: "Jangan biarkan hujan merusak rencana liburan Anda. Simak tips glamping agar tetap hangat dan menyenangkan.",
    date: "12 Jan 2026",
    author: "Admin",
    category: "Tips & Trik",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Destinasi Wisata Hits Terbaru 2026 di Tawangmangu",
    excerpt: "Tawangmangu terus berkembang dengan tempat-tempat baru yang instagramable. Cek daftar lengkapnya di sini.",
    date: "10 Jan 2026",
    author: "Admin",
    category: "Wisata",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80"
  }
];

export default function NewsTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-primary-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Tips</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Informasi terbaru mengenai villa, glamping, dan tips wisata seru di sekitar Tawangmangu.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary-600">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {item.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link href={`/news/${item.id}`}>
                    <a className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

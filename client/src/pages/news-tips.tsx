import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";

export default function NewsTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section - SEO friendly header */}
      <header className="bg-primary-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Berita & Tips Wisata Tawangmangu</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Informasi terbaru mengenai villa, glamping, dan panduan wisata terbaik di sekitar Gunung Lawu, Tawangmangu.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Artikel 1 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" 
                  alt="Villa dengan View Gunung Lawu" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Rekomendasi
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                  <time dateTime="2026-01-15">15 Jan 2026</time>
                  <span>Oleh: Admin</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/news/1" className="hover:text-primary-600 transition-colors">
                    5 Villa dengan View Gunung Lawu Terbaik di Tawangmangu
                  </a>
                </h2>
                <p className="text-gray-600 mb-6 flex-1">
                  Mencari villa dengan pemandangan pegunungan yang asri? Berikut rekomendasi villa terbaik untuk liburan keluarga Anda di awal tahun 2026.
                </p>
                <a href="/news/1" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-auto">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>

            {/* Artikel 2 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" 
                  alt="Tips Glamping Nyaman" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Tips & Trik
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                  <time dateTime="2026-01-12">12 Jan 2026</time>
                  <span>Oleh: Admin</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/news/2" className="hover:text-primary-600 transition-colors">
                    Tips Glamping Nyaman Bersama Keluarga saat Musim Hujan
                  </a>
                </h2>
                <p className="text-gray-600 mb-6 flex-1">
                  Jangan biarkan hujan merusak rencana liburan Anda. Simak tips memilih lokasi glamping yang aman dan perlengkapan wajib agar tetap hangat.
                </p>
                <a href="/news/2" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-auto">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>

            {/* Artikel 3 */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" 
                  alt="Destinasi Wisata Tawangmangu" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Wisata
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                  <time dateTime="2026-01-10">10 Jan 2026</time>
                  <span>Oleh: Admin</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/news/3" className="hover:text-primary-600 transition-colors">
                    Destinasi Wisata Hits Terbaru 2026 di Tawangmangu
                  </a>
                </h2>
                <p className="text-gray-600 mb-6 flex-1">
                  Tawangmangu terus menghadirkan destinasi baru yang instagramable. Berikut daftar tempat wisata terbaru yang wajib dikunjungi tahun ini.
                </p>
                <a href="/news/3" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-auto">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>

          </div>
        </div>
      </main>

      <ContactSection />
    </div>
  );
}

import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";

export default function ArticleVillaView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Article Header */}
      <header className="bg-white py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
              Rekomendasi
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            5 Villa dengan View Gunung Lawu Terbaik di Tawangmangu
          </h1>
          <div className="flex items-center text-gray-500 gap-4">
            <time dateTime="2026-01-15">15 Januari 2026</time>
            <span>•</span>
            <span>Oleh: Admin Bos Villa</span>
          </div>
        </div>
      </header>

      {/* Main Article Content - Pure HTML/Semantic Structure */}
      <main className="py-12 bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-primary">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80" 
            alt="Pemandangan Villa di Tawangmangu" 
            className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-lg"
          />
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Tawangmangu merupakan destinasi favorit di lereng Gunung Lawu yang menawarkan udara sejuk dan pemandangan alam yang memukau. Bagi Anda yang berencana berlibur, memilih akomodasi dengan pemandangan langsung ke gunung adalah sebuah keharusan untuk pengalaman yang tak terlupakan.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mengapa Memilih Villa dengan View Gunung?</h2>
          <p className="text-gray-700 mb-6">
            Bangun di pagi hari dengan udara segar dan melihat kabut tipis menyelimuti puncak Gunung Lawu memberikan ketenangan tersendiri. Selain untuk relaksasi, villa dengan view yang bagus juga menjadi spot foto yang sangat instagramable untuk dibagikan di media sosial.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Daftar Rekomendasi Villa Terbaik</h2>
          
          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold text-primary-600 mb-4">1. Villa FJ (Fill & Jill)</h3>
              <p className="text-gray-700">
                Villa ini memiliki rooftop yang sangat luas dengan pemandangan 360 derajat ke arah perbukitan Sekipan dan Gunung Lawu. Cocok untuk acara keluarga besar atau gathering kantor.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary-600 mb-4">2. Villa DT (Dita)</h3>
              <p className="text-gray-700">
                Berlokasi strategis di area Sekipan, Villa DT menawarkan desain bangunan 2 lantai yang modern dengan balkon yang langsung menghadap ke arah hutan pinus dan pegunungan.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary-600 mb-4">3. Villa ALM (Alami)</h3>
              <p className="text-gray-700">
                Sesuai namanya, villa ini menghadirkan suasana alami dengan taman yang luas. Anda bisa menikmati kopi sore sambil melihat siluet Gunung Lawu dari teras depan.
              </p>
            </section>
          </div>

          <blockquote className="border-l-4 border-primary-600 pl-6 my-12 italic text-gray-600 text-xl">
            "Liburan terbaik adalah saat kita bisa menyatu kembali dengan alam tanpa meninggalkan kenyamanan rumah."
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kesimpulan</h2>
          <p className="text-gray-700 mb-12">
            Setiap villa di Tawangmangu memiliki karakteristik uniknya masing-masing. Pastikan Anda melakukan pemesanan jauh-jauh hari, terutama saat musim libur panjang (long weekend) agar tidak kehabisan unit.
          </p>
        </article>
      </main>

      {/* Related Section or Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Siap Merencanakan Liburan Anda?</h2>
          <p className="text-gray-600 mb-8">
            Hubungi Admin kami untuk cek ketersediaan villa dan dapatkan harga promo terbaik untuk booking hari ini.
          </p>
          <a 
            href="https://wa.me/6282241819992" 
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Hubungi Admin Via WhatsApp
          </a>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

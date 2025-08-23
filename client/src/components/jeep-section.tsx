import { Button } from "@/components/ui/button";

export default function JeepSection() {
  return (
    <section id="jeep" className="py-16 bg-white" data-testid="jeep-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sewa Jeep Wisata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi keindahan Tawangmangu dengan layanan sewa jeep yang nyaman dan aman
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Jeep rental service card 1 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300" data-testid="jeep-card-regular">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Jeep wisata adventure" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Paket Wisata Reguler</h3>
            <p className="text-gray-600 mb-4">
              Nikmati perjalanan wisata dengan jeep yang nyaman ke berbagai destinasi menarik di Tawangmangu
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary-600">Mulai Rp 300.000</span>
              <Button 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                data-testid="button-book-regular"
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
          
          {/* Jeep rental service card 2 */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300" data-testid="jeep-card-premium">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Jeep wisata premium" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Paket Wisata Premium</h3>
            <p className="text-gray-600 mb-4">
              Pengalaman wisata eksklusif dengan guide profesional dan destinasi terbaik di sekitar Gunung Lawu
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary-600">Mulai Rp 500.000</span>
              <Button 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                data-testid="button-book-premium"
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

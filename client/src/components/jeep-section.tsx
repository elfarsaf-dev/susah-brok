import { Button } from "@/components/ui/button";
import TripCard from "@/components/trip-card";
import TripModal from "@/components/trip-modal";
import { useTrips } from "@/hooks/use-trips";
import { useState } from "react";
import type { Trip } from "@shared/schema";
import { useLanguage } from "@/contexts/LanguageContext";

export default function JeepSection() {
  const { t } = useLanguage();
  const {
    trips,
    searchQuery,
    setSearchQuery,
    tripCategory,
    setTripCategory,
    displayedCount,
    setDisplayedCount,
    hasMore
  } = useTrips();

  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  return (
    <section id="jeep" className="py-16 bg-gray-50" data-testid="jeep-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.jeep.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.jeep.description}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <Button
              onClick={() => setTripCategory("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                tripCategory === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              data-testid="button-filter-all"
            >
              Semua Trip
            </Button>
            <Button
              onClick={() => setTripCategory("short")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                tripCategory === "short"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              data-testid="button-filter-short"
            >
              Short Trip
            </Button>
            <Button
              onClick={() => setTripCategory("long")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                tripCategory === "long"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              data-testid="button-filter-long"
            >
              Long Trip
            </Button>
          </div>
        </div>
        
        {/* Trip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="trips-grid">
          {trips.map((trip) => (
            <TripCard 
              key={trip.id} 
              trip={trip} 
              onViewDetail={() => setSelectedTrip(trip)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button 
              onClick={handleLoadMore}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              data-testid="button-load-more-trips"
            >
              Lihat Trip Lainnya
            </Button>
          </div>
        )}
        
        {/* Contact Info */}
        <div className="text-center mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Informasi & Pemesanan Trip Jeep</h4>
          <p className="text-gray-600 mb-4">Hubungi kami untuk detail lebih lanjut dan pemesanan trip jeep yang menakjubkan</p>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            data-testid="button-contact-jeep"
            onClick={() => {
              const message = "Halo, saya tertarik dengan trip jeep wisata Tawangmangu. Bisakah saya mendapatkan informasi lebih lanjut?";
              const whatsappUrl = `https://wa.me/6281226374041?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            💬 Hubungi via WhatsApp
          </Button>
        </div>
      </div>

      {/* Trip Modal */}
      {selectedTrip && (
        <TripModal 
          trip={selectedTrip} 
          onClose={() => setSelectedTrip(null)} 
        />
      )}
    </section>
  );
}

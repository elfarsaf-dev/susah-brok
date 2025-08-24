import { useState } from "react";
import { X, Check, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Trip } from "@shared/schema";

interface TripModalProps {
  trip: Trip;
  onClose: () => void;
}

export default function TripModal({ trip, onClose }: TripModalProps) {

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan ${trip.name} (${trip.category} trip) dengan durasi ${trip.duration}. Bisakah saya mendapatkan informasi lebih lanjut tentang trip ini?`;
    const whatsappUrl = `https://wa.me/6281226374041?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    const message = `Halo, saya ingin menghubungi langsung tentang ${trip.name}. Mohon info lebih lanjut`;
    const whatsappUrl = `https://wa.me/6281226374041?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(trip.price);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] max-h-[85vh] overflow-y-auto p-0 rounded-2xl border-0 shadow-2xl" data-testid={`modal-trip-${trip.id}`}>
        <DialogTitle className="sr-only">{trip.name} - Detail Trip Jeep</DialogTitle>
        <DialogDescription className="sr-only">
          Detail lengkap untuk {trip.name} ({trip.category} trip) dengan durasi {trip.duration} dan informasi booking
        </DialogDescription>
        
        <div className="relative rounded-2xl overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg"
            data-testid="button-close-modal"
          >
            <X className="h-4 w-4 text-gray-600" />
          </Button>
          
          {/* Trip Image */}
          <div className="relative h-80" data-testid="trip-image">
            <img
              src={trip.image}
              alt={trip.name}
              className="w-full h-full object-cover"
              data-testid="img-trip-main"
            />
          </div>
          
          {/* Trip Details */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900" data-testid="text-modal-name">
                  {trip.name}
                </h2>
                <p className="text-base text-gray-600 mt-1" data-testid="text-modal-description">
                  {trip.description}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <Badge className={`${trip.category === 'short' ? 'bg-green-600' : 'bg-purple-600'} text-white px-3 py-1.5 rounded-full text-sm font-medium capitalize`}>
                  {trip.category} Trip
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium" data-testid="text-modal-duration">
                  {trip.duration}
                </Badge>
              </div>
            </div>
            
            {/* Trip Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kapasitas</h3>
                <p className="text-gray-600 flex items-center" data-testid="text-modal-capacity">
                  <Users className="mr-2 text-primary-600 h-3.5 w-3.5" />
                  {trip.capacity}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Durasi</h3>
                <p className="text-gray-600 flex items-center" data-testid="text-modal-duration-detail">
                  <Clock className="mr-2 text-primary-600 h-3.5 w-3.5" />
                  {trip.duration}
                </p>
              </div>
            </div>
            
            {/* Price */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Harga</h3>
              <div className="bg-gray-50 p-3 rounded-lg" data-testid="price-section">
                <p className="font-medium text-gray-900 text-sm">Per Jeep (Maksimal 4 orang)</p>
                <p className="text-xl font-bold text-primary-600">
                  {formattedPrice}
                </p>
              </div>
            </div>
            
            {/* Destinations */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Destinasi Wisata</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5" data-testid="destinations-grid">
                {trip.destinations.map((destination, index) => (
                  <div key={index} className="flex items-center" data-testid={`destination-item-${index}`}>
                    <MapPin className="text-primary-600 mr-2 h-3.5 w-3.5" />
                    <span className="text-gray-700 text-sm">{destination}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Facilities */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fasilitas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5" data-testid="facilities-grid">
                {trip.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center" data-testid={`facility-item-${index}`}>
                    <Check className="text-primary-600 mr-2 h-3.5 w-3.5" />
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            
            
            {/* Info Message */}
            <div className="mb-5 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-800 text-center font-medium text-sm">
                Ada pertanyaan tentang trip ini? Silakan hubungi kami untuk info lengkap😊
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
                data-testid="button-whatsapp"
              >
                <span className="mr-2">💬</span>
                Tanya Info Trip
              </Button>
              <Button 
                onClick={handleCall}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
                data-testid="button-call"
              >
                <span className="mr-2">☎️</span>
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
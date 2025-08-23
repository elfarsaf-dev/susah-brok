import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check, Info, Phone, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Trip } from "@shared/schema";

interface TripModalProps {
  trip: Trip;
  onClose: () => void;
}

export default function TripModal({ trip, onClose }: TripModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Generate image slider for trips
  const sliderImages = [
    trip.image,
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    'https://images.unsplash.com/photo-1544553037-9cedeecac25b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? sliderImages.length - 1 : prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan ${trip.name} (${trip.category} trip) dengan durasi ${trip.duration}. Bisakah saya mendapatkan informasi lebih lanjut dan booking?`;
    const whatsappUrl = `https://wa.me/6281226374041?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+6281226374041', '_self');
  };

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(trip.price);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0" data-testid={`modal-trip-${trip.id}`}>
        <DialogTitle className="sr-only">{trip.name} - Detail Trip Jeep</DialogTitle>
        <DialogDescription className="sr-only">
          Detail lengkap untuk {trip.name} ({trip.category} trip) dengan durasi {trip.duration} dan informasi booking
        </DialogDescription>
        
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            data-testid="button-close-modal"
          >
            <X className="h-4 w-4 text-gray-600" />
          </Button>
          
          {/* Image Slider */}
          <div className="relative h-96" data-testid="image-slider">
            <div className="h-full">
              {sliderImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${trip.name} ${index + 1}`}
                  className={`w-full h-full object-cover ${index === currentSlide ? '' : 'hidden'}`}
                  data-testid={`img-slide-${index}`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
              data-testid="button-next-slide"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  data-testid={`button-slide-dot-${index}`}
                />
              ))}
            </div>
          </div>
          
          {/* Trip Details */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900" data-testid="text-modal-name">
                  {trip.name}
                </h2>
                <p className="text-lg text-gray-600 mt-2" data-testid="text-modal-description">
                  {trip.description}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Badge className={`${trip.category === 'short' ? 'bg-green-600' : 'bg-purple-600'} text-white px-4 py-2 rounded-full text-sm font-medium capitalize`}>
                  {trip.category} Trip
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium" data-testid="text-modal-duration">
                  {trip.duration}
                </Badge>
              </div>
            </div>
            
            {/* Trip Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kapasitas</h3>
                <p className="text-gray-600 flex items-center" data-testid="text-modal-capacity">
                  <Users className="mr-2 text-primary-600 h-4 w-4" />
                  {trip.capacity}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Durasi</h3>
                <p className="text-gray-600 flex items-center" data-testid="text-modal-duration-detail">
                  <Clock className="mr-2 text-primary-600 h-4 w-4" />
                  {trip.duration}
                </p>
              </div>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Harga</h3>
              <div className="bg-gray-50 p-4 rounded-lg" data-testid="price-section">
                <p className="font-medium text-gray-900">Per Jeep (Maksimal 6 orang)</p>
                <p className="text-2xl font-bold text-primary-600">
                  {formattedPrice}
                </p>
              </div>
            </div>
            
            {/* Destinations */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Destinasi Wisata</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2" data-testid="destinations-grid">
                {trip.destinations.map((destination, index) => (
                  <div key={index} className="flex items-center" data-testid={`destination-item-${index}`}>
                    <MapPin className="text-primary-600 mr-2 h-4 w-4" />
                    <span className="text-gray-700">{destination}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Facilities */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fasilitas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2" data-testid="facilities-grid">
                {trip.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center" data-testid={`facility-item-${index}`}>
                    <Check className="text-primary-600 mr-2 h-4 w-4" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Included */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yang Sudah Termasuk</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2" data-testid="included-grid">
                {trip.included.map((item, index) => (
                  <div key={index} className="flex items-center" data-testid={`included-item-${index}`}>
                    <Check className="text-green-600 mr-2 h-4 w-4" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Notes */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Syarat & Ketentuan</h3>
              <ul className="space-y-1" data-testid="notes-list">
                {trip.notes.map((note, index) => (
                  <li key={index} className="flex items-start" data-testid={`note-item-${index}`}>
                    <Info className="text-primary-600 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-gray-700">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Booking Message */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-center font-medium">
                Untuk info lebih lanjut atau booking trip jeep bisa klik tombol booking di bawah😊
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                data-testid="button-whatsapp"
              >
                <span className="mr-2">💬</span>
                Booking Trip Jeep
              </Button>
              <Button 
                onClick={handleCall}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                data-testid="button-call"
              >
                <Phone className="mr-2 h-4 w-4" />
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@shared/schema";

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Generate image slider (using placeholder images since we only have 1 image per property)
  const sliderImages = [
    property.image,
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600'
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
    const message = `Halo, saya tertarik dengan ${property.name} di ${property.location}. Bisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6281226374041?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+6281226374041', '_self');
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] max-h-[85vh] overflow-y-auto p-0 rounded-2xl border-0 shadow-2xl" data-testid={`modal-property-${property.id}`}>
        <DialogTitle className="sr-only">{property.name} - Detail Properti</DialogTitle>
        <DialogDescription className="sr-only">
          Detail lengkap untuk {property.name} di {property.location} dengan fasilitas dan informasi booking
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
          
          {/* Image Slider */}
          <div className="relative h-80" data-testid="image-slider">
            <div className="h-full">
              {sliderImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${property.name} ${index + 1}`}
                  className={`w-full h-full object-cover ${index === currentSlide ? '' : 'hidden'}`}
                  data-testid={`img-slide-${index}`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg"
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg"
              data-testid="button-next-slide"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Button>
            
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white shadow-lg' : 'bg-white bg-opacity-60'
                  }`}
                  data-testid={`button-slide-dot-${index}`}
                />
              ))}
            </div>
          </div>
          
          {/* Property Details */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900" data-testid="text-modal-name">
                  {property.name}
                </h2>
                <p className="text-base text-gray-600 flex items-center mt-1" data-testid="text-modal-location">
                  <span className="mr-2">📍</span>
                  {property.location}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <Badge className="bg-primary-600 text-white px-3 py-1.5 rounded-full text-sm font-medium capitalize">
                  {property.type}
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium" data-testid="text-modal-units">
                  {property.units} unit tersedia
                </Badge>
              </div>
            </div>
            
            {/* Capacity */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kapasitas</h3>
              <p className="text-gray-600 flex items-center" data-testid="text-modal-capacity">
                <span className="mr-2">👥</span>
                {property.capacity}
              </p>
            </div>
            
            {/* Rates */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Harga</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3" data-testid="rates-grid">
                {property.rates.map((rate, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg" data-testid={`rate-item-${index}`}>
                    <p className="font-medium text-gray-900 text-sm">{rate.label}</p>
                    <p className="text-base font-bold text-primary-600">
                      {rate.price > 0 ? new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(rate.price) : 'Hubungi untuk info harga'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Facilities */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fasilitas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5" data-testid="facilities-grid">
                {property.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center" data-testid={`facility-item-${index}`}>
                    <Check className="text-primary-600 mr-2 h-3.5 w-3.5" />
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Notes */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Syarat & Ketentuan</h3>
              <ul className="space-y-1" data-testid="notes-list">
                {property.notes.map((note, index) => (
                  <li key={index} className="flex items-start" data-testid={`note-item-${index}`}>
                    <Info className="text-primary-600 mr-2 mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Info Message */}
            <div className="mb-5 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-800 text-center font-medium text-sm">
                Ada pertanyaan atau ingin tahu lebih detail? Silakan hubungi kami😊
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
                Tanya Ketersediaan
              </Button>
              <Button 
                onClick={handleCall}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
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
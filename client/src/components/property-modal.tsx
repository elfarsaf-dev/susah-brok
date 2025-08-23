import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
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
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+6281234567890', '_self');
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto" data-testid={`modal-property-${property.id}`}>
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
            
            {/* Property Details */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900" data-testid="text-modal-name">
                    {property.name}
                  </h2>
                  <p className="text-lg text-gray-600 flex items-center mt-2" data-testid="text-modal-location">
                    <span className="mr-2">📍</span>
                    {property.location}
                  </p>
                </div>
                <Badge className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium capitalize">
                  {property.type}
                </Badge>
              </div>
              
              {/* Capacity */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kapasitas</h3>
                <p className="text-gray-600 flex items-center" data-testid="text-modal-capacity">
                  <span className="mr-2">👥</span>
                  {property.capacity}
                </p>
              </div>
              
              {/* Rates */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Harga</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="rates-grid">
                  {property.rates.map((rate, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg" data-testid={`rate-item-${index}`}>
                      <p className="font-medium text-gray-900">{rate.label}</p>
                      <p className="text-lg font-bold text-primary-600">
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
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fasilitas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2" data-testid="facilities-grid">
                  {property.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center" data-testid={`facility-item-${index}`}>
                      <Check className="text-primary-600 mr-2 h-4 w-4" />
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Notes */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Syarat & Ketentuan</h3>
                <ul className="space-y-1" data-testid="notes-list">
                  {property.notes.map((note, index) => (
                    <li key={index} className="flex items-start" data-testid={`note-item-${index}`}>
                      <Info className="text-primary-600 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-gray-700">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  data-testid="button-whatsapp"
                >
                  <span className="mr-2">💬</span>
                  Pesan via WhatsApp
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

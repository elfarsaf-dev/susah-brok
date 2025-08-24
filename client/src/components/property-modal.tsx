import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check, Info } from "lucide-react";
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

  // Get property-specific image slider
  const getSliderImages = () => {
    const imageMap: Record<string, string[]> = {
      // Villa FJ
      "Villa FJ": [
        property.image,
        'https://i.ibb.co/7d7NTWt2/IMG-5950.jpg',
        'https://i.ibb.co/4gR5GmwK/IMG-5951.jpg',
        'https://i.ibb.co/cXRxVGRk/IMG-5952.jpg',
        'https://i.ibb.co/mCp3Z533/IMG-5953.jpg',
        'https://i.ibb.co/Wj6TBkd/IMG-5954.jpg'
      ],
      // Villa DT
      "Villa DT": [
        property.image,
        'https://i.ibb.co/gQmjfRq/IMG-5898.jpg',
        'https://i.ibb.co/g86mvyw/IMG-5897.jpg',
        'https://i.ibb.co/1cBZHSx/IMG-5896.jpg',
        'https://i.ibb.co/nMHg9ycr/IMG-5895.jpg',
        'https://i.ibb.co/5hJgt5ys/IMG-5889.jpg'
      ],
      // Villa ALM
      "Villa ALM": [
        property.image,
        'https://i.ibb.co/JWKpH31D/IMG-5924.jpg',
        'https://i.ibb.co/YYgMGpx/IMG-5920.jpg',
        'https://i.ibb.co/rN2GMKr/IMG-5923.jpg',
        'https://i.ibb.co/qFkFW7MB/IMG-5922.jpg',
        'https://i.ibb.co/MyD090Mx/IMG-5921.jpg'
      ],
      // Villa TD JW
      "Villa TD JW": [
        property.image,
        'https://i.ibb.co/SwKDCsrX/IMG-5914.jpg',
        'https://i.ibb.co/Y7L5CRZX/IMG-5913.jpg',
        'https://i.ibb.co/8LhNP94z/IMG-5912.jpg',
        'https://i.ibb.co/WNk1LVzm/IMG-5911.jpg',
        'https://i.ibb.co/BHpZJbmr/IMG-5910.jpg'
      ],
      // KRYSM
      "KRYSM": [
        property.image,
        'https://i.ibb.co/j1Bjv7M/IMG-5940.jpg',
        'https://i.ibb.co/7dGv7FyG/IMG-5941.jpg',
        'https://i.ibb.co/RTkz4b4N/IMG-5942.jpg',
        'https://i.ibb.co/1JJzwLF5/IMG-5943.jpg',
        'https://i.ibb.co/d4mLJZGf/IMG-5944.jpg'
      ],
      // Villa "KU"
      "Villa \"KU\"": [
        property.image,
        'https://i.ibb.co/G3vFnP3m/IMG-6001.jpg',
        'https://i.ibb.co/8gQqjnsV/IMG-6002.jpg',
        'https://i.ibb.co/hFQNx2SY/IMG-6003.jpg',
        'https://i.ibb.co/6cg2gyDF/IMG-6004.jpg',
        'https://i.ibb.co/bgxBvHFH/IMG-6005.jpg'
      ],
      // Villa ADR
      "Villa ADR": [
        property.image,
        'https://i.ibb.co/rR1M7Jjf/IMG-5901.jpg',
        'https://i.ibb.co/PzZV8yLd/IMG-5900.jpg',
        'https://i.ibb.co/8n7TNtgb/IMG-5902.jpg',
        'https://i.ibb.co/gZRPZMVn/IMG-5903.jpg',
        'https://i.ibb.co/9HWGJBms/IMG-5904.jpg'
      ],
      // Villa KMD
      "Villa KMD": [
        property.image,
        'https://i.ibb.co/fzqZNwnt/IMG-5905.jpg',
        'https://i.ibb.co/KxP9rYnR/IMG-5906.jpg',
        'https://i.ibb.co/DfBH2twz/IMG-5907.jpg',
        'https://i.ibb.co/4gXNxsJ4/IMG-5908.jpg',
        'https://i.ibb.co/svVFXwpg/IMG-5909.jpg'
      ],
      // Villa ZZ
      "Villa ZZ": [
        property.image,
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5849.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5851.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5853.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5850.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5852.jpeg?raw=true'
      ],
      // Villa RYL
      "Villa RYL": [
        property.image,
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5854.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5858.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5857.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5856.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5855.jpeg?raw=true'
      ],
      // Villa DNDR 2
      "Villa DNDR 2": [
        property.image,
        'https://i.ibb.co/HLYGM6B4/IMG-5873.jpg',
        'https://i.ibb.co/DHsCM10j/IMG-5872.jpg',
        'https://i.ibb.co/67n6Vpb8/IMG-5871.jpg',
        'https://i.ibb.co/LbJ2pBZ/IMG-5870.jpg',
        'https://i.ibb.co/rG58yvGx/IMG-5874.jpg'
      ],
      // Villa BDL 2A
      "Villa BDL 2A": [
        property.image,
        'https://i.ibb.co/Y7jdzPXg/IMG-5919.jpg',
        'https://i.ibb.co/dJctNPX3/IMG-5918.jpg',
        'https://i.ibb.co/ch42Fw6B/IMG-5917.jpg',
        'https://i.ibb.co/k6hkQqrF/IMG-5916.jpg',
        'https://i.ibb.co/nswxnHt6/IMG-5915.jpg'
      ],
      // Villa Pine
      "Villa Pine": [
        property.image,
        'https://github.com/elfarsaf-dev/Heu/blob/main/Pine/IMG_5865.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Pine/IMG_5866.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Pine/IMG_5867.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Pine/IMG_5868.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Pine/IMG_5869.jpeg?raw=true'
      ],
      // Villa EDLW
      "Villa EDLW": [
        property.image,
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5844.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5845.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5846.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5847.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5848.jpeg?raw=true'
      ],
      // Mongkrang SC
      "Mongkrang SC": [
        property.image,
        'https://i.ibb.co/PZ87HQSN/IMG-5883.jpg',
        'https://i.ibb.co/tN3GZNj/IMG-5882.jpg',
        'https://i.ibb.co/Ngd47RW5/IMG-5884.jpg',
        'https://i.ibb.co/cSWYDsDJ/IMG-5881.jpg',
        'https://i.ibb.co/TqT1KZ3n/IMG-5880.jpg'
      ],
      // DZ Glamping
      "DZ Glamping": [
        property.image,
        'https://i.ibb.co/WWyZVsyG/IMG-5929.jpg',
        'https://i.ibb.co/1S92XM3/IMG-5928.jpg',
        'https://i.ibb.co/jP1t7gxK/IMG-5927.jpg',
        'https://i.ibb.co/s9RkhmNf/IMG-5926.jpg',
        'https://i.ibb.co/DD3nRy49/IMG-5925.jpg'
      ],
      // ZHY Glamping
      "ZHY Glamping": [
        property.image,
        'https://i.ibb.co/TxDkqXGN/IMG-5930.jpg',
        'https://i.ibb.co/zVMJvMBg/IMG-5931.jpg',
        'https://i.ibb.co/9fjNzS3/IMG-5932.jpg',
        'https://i.ibb.co/3mwxyjkf/IMG-5933.jpg',
        'https://i.ibb.co/xSzdqGh6/IMG-5934.jpg'
      ],
      // BMW Glamping
      "BMW Glamping": [
        property.image,
        'https://i.ibb.co/FkkvQ44L/IMG-5935.jpg',
        'https://i.ibb.co/v6mHDR9Q/IMG-5936.jpg',
        'https://i.ibb.co/Gv568xMd/IMG-5937.jpg',
        'https://i.ibb.co/FSsbzmf/IMG-5938.jpg',
        'https://i.ibb.co/ZpjM9x0Z/IMG-5939.jpg'
      ],
      // Glamping SYD 2
      "Glamping SYD 2": [
        property.image,
        'https://i.ibb.co/mF0wkqSZ/IMG-5945.jpg',
        'https://i.ibb.co/YFXw0905/IMG-5946.jpg',
        'https://i.ibb.co/b5HdV0vb/IMG-5947.jpg',
        'https://i.ibb.co/B2CnMdYr/IMG-5948.jpg',
        'https://i.ibb.co/wF7dqgMN/IMG-5949.jpg'
      ],
      // AZL Glamping
      "AZL Glamping": [
        property.image,
        'https://i.ibb.co/Y4mYHyJv/IMG-5955.jpg',
        'https://i.ibb.co/TMD2KRmj/IMG-5956.jpg',
        'https://i.ibb.co/wF7SkVth/IMG-5957.jpg',
        'https://i.ibb.co/8DSQCXP9/IMG-5958.jpg',
        'https://i.ibb.co/VYXyQhjy/IMG-5959.jpg'
      ],
      // TR Glamping
      "TR Glamping": [
        property.image,
        'https://i.ibb.co/ycxtyPB3/IMG-5960.jpg',
        'https://i.ibb.co/yBR80RBK/IMG-5961.jpg',
        'https://i.ibb.co/fGkTzDjD/IMG-5962.jpg',
        'https://i.ibb.co/4ZSXxwwb/IMG-5963.jpg',
        'https://i.ibb.co/dw5WNTJH/IMG-5964.jpg'
      ],
      // Glamping LWPR
      "Glamping LWPR": [
        property.image,
        'https://i.ibb.co/B0HK0y4/IMG-5965.jpg',
        'https://i.ibb.co/21XyHY8J/IMG-5966.jpg',
        'https://i.ibb.co/sdD4gZy6/IMG-5967.jpg',
        'https://i.ibb.co/Y7chSvRw/IMG-5968.jpg',
        'https://i.ibb.co/4nTrDs57/IMG-5969.jpg'
      ],
      // B.HILLS B
      "B.HILLS B": [
        property.image,
        'https://i.ibb.co/Q76g8H0k/IMG-5970.jpg',
        'https://i.ibb.co/LDZPWz5h/IMG-5971.jpg',
        'https://i.ibb.co/nNNYJVcB/IMG-5972.jpg',
        'https://i.ibb.co/dJfV4BV3/IMG-5973.jpg',
        'https://i.ibb.co/bjNpNTDg/IMG-5974.jpg'
      ],
      // DV Glamping
      "DV Glamping": [
        property.image,
        'https://i.ibb.co/VcwXJMwH/IMG-5975.jpg',
        'https://i.ibb.co/bg4FbRL5/IMG-5976.jpg',
        'https://i.ibb.co/YMfMWxx/IMG-5977.jpg',
        'https://i.ibb.co/jZ5PnpSz/IMG-5978.jpg',
        'https://i.ibb.co/bMgjqw8z/IMG-5979.jpg'
      ],
      // B.HILLS A
      "B.HILLS A": [
        property.image,
        'https://i.ibb.co/mFBJyGG0/IMG-5980.jpg',
        'https://i.ibb.co/8g61hcTK/IMG-5981.jpg',
        'https://i.ibb.co/BVG7M7gf/IMG-5982.jpg',
        'https://i.ibb.co/YF441mVG/IMG-5984.jpg',
        'https://i.ibb.co/WdYDxNK/IMG-5983.jpg'
      ],
      // Glamping Jingga
      "Glamping Jingga": [
        property.image,
        'https://i.ibb.co/8DgGsbfR/IMG-5985.jpg',
        'https://i.ibb.co/d0sb20NM/IMG-5986.jpg',
        'https://i.ibb.co/6RhWfxF7/IMG-5987.jpg',
        'https://i.ibb.co/39nkBqL8/IMG-5988.jpg',
        'https://i.ibb.co/CpMynrz5/IMG-5989.jpg'
      ],
      // Glamping SVG
      "Glamping SVG": [
        property.image,
        'https://i.ibb.co/TMwctpVy/IMG-5990.jpg',
        'https://i.ibb.co/tM7g5WBq/IMG-5991.jpg',
        'https://i.ibb.co/WpHs34Rd/IMG-5992.jpg',
        'https://i.ibb.co/htv3f12/IMG-5993.jpg',
        'https://i.ibb.co/8n6ZzQYM/IMG-5994.jpg'
      ],
      // Glamping ALM
      "Glamping ALM": [
        property.image,
        'https://i.ibb.co/Q7FMk1hb/IMG-5995.jpg',
        'https://i.ibb.co/4wvHHCQf/IMG-5996.jpg',
        'https://i.ibb.co/cKpxkWj8/IMG-5997.jpg',
        'https://i.ibb.co/PG5GpFnQ/IMG-5998.jpg',
        'https://i.ibb.co/N6ksn1Sy/IMG-5999.jpg'
      ],
      // Glamping DYN
      "Glamping DYN": [
        property.image,
        'https://i.ibb.co/mrp3Tkvp/IMG-5888.jpg',
        'https://i.ibb.co/tw24BMMp/IMG-5887.jpg',
        'https://i.ibb.co/sJyZLCfj/IMG-5886.jpg',
        'https://i.ibb.co/Df84VnYQ/IMG-5885.jpg',
        'https://i.ibb.co/5hJgt5ys/IMG-5889.jpg'
      ]
    };
    
    return imageMap[property.name] || [
      property.image,
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600'
    ];
  };
  
  const sliderImages = getSliderImages();

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
    const message = `Halo, saya ingin menghubungi langsung tentang ${property.name}. Mohon info lebih lanjut`;
    const whatsappUrl = `https://wa.me/6281226374041?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
                data-testid="button-call"
              >
                <span className="mr-2">💬</span>
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
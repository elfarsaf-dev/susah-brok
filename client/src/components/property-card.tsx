import { MapPin, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@shared/schema";

interface PropertyCardProps {
  property: Property;
  onViewDetail: () => void;
}

export default function PropertyCard({ property, onViewDetail }: PropertyCardProps) {
  const minPrice = Math.min(...property.rates.map(rate => rate.price));
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(minPrice);

  const rating = property.rating ?? 4.5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer card-glow animate-slide-in-grid"
      data-testid={`card-property-${property.id}`}
      onClick={onViewDetail}
    >
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name} 
          className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          data-testid={`img-property-${property.id}`}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
          <Badge 
            className="bg-primary-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium capitalize"
            data-testid={`badge-type-${property.id}`}
          >
            {property.type}
          </Badge>
        </div>
        <div className="absolute top-2 sm:top-4 right-2 sm:left-auto right-2 sm:right-4">
          <Badge 
            className="bg-white text-gray-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium whitespace-nowrap"
            data-testid={`badge-units-${property.id}`}
          >
            {property.units} unit tersedia
          </Badge>
        </div>
      </div>
      
      <div className="p-3 sm:p-6">
        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2" data-testid={`text-name-${property.id}`}>
          {property.name}
        </h3>
        
        <p className="text-gray-600 mb-2 sm:mb-3 flex items-center text-sm" data-testid={`text-location-${property.id}`}>
          <MapPin className="mr-1 sm:mr-2 text-primary-600 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </p>
        
        <p className="text-gray-600 mb-2 sm:mb-3 flex items-center text-sm" data-testid={`text-capacity-${property.id}`}>
          <Users className="mr-1 sm:mr-2 text-primary-600 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="truncate">{property.capacity}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center mb-2 sm:mb-3" data-testid={`rating-${property.id}`}>
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  index < fullStars
                    ? 'text-yellow-400 fill-current'
                    : index === fullStars && hasHalfStar
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">{rating.toFixed(1)}</span>
        </div>
        
        <div className="mb-3 sm:mb-4">
          <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
            {property.facilities.slice(0, 2).map((facility, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-700 px-1 sm:px-2 py-1 rounded-md text-xs line-clamp-1"
                data-testid={`badge-facility-${property.id}-${index}`}
              >
                {facility.length > 15 ? facility.substring(0, 15) + '...' : facility}
              </Badge>
            ))}
            {property.facilities.length > 2 && (
              <Badge 
                variant="secondary"
                className="bg-gray-100 text-gray-700 px-1 sm:px-2 py-1 rounded-md text-xs"
                data-testid={`badge-more-facilities-${property.id}`}
              >
                +{property.facilities.length - 2}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="text-center sm:text-left">
            <span className="text-lg sm:text-2xl font-bold text-primary-600 block sm:inline" data-testid={`text-price-${property.id}`}>
              {formattedPrice.replace('Rp', 'Rp ')}
            </span>
            <span className="text-gray-600 text-xs sm:text-sm block sm:inline">/malam</span>
          </div>
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onViewDetail();
            }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm w-full sm:w-auto group-hover:bg-primary-700"
            data-testid={`button-detail-${property.id}`}
          >
            <span className="hidden sm:inline">Lihat Detail</span>
            <span className="sm:hidden">Detail</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

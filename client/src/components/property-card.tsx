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
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      data-testid={`card-property-${property.id}`}
    >
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.name} 
          className="w-full h-64 object-cover"
          data-testid={`img-property-${property.id}`}
        />
        <div className="absolute top-4 left-4">
          <Badge 
            className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize"
            data-testid={`badge-type-${property.id}`}
          >
            {property.type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
            data-testid={`badge-units-${property.id}`}
          >
            {property.units} unit tersedia
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`text-name-${property.id}`}>
          {property.name}
        </h3>
        
        <p className="text-gray-600 mb-3 flex items-center" data-testid={`text-location-${property.id}`}>
          <MapPin className="mr-2 text-primary-600 h-4 w-4" />
          {property.location}
        </p>
        
        <p className="text-gray-600 mb-3 flex items-center" data-testid={`text-capacity-${property.id}`}>
          <Users className="mr-2 text-primary-600 h-4 w-4" />
          {property.capacity}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3" data-testid={`rating-${property.id}`}>
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < fullStars
                    ? 'text-yellow-400 fill-current'
                    : index === fullStars && hasHalfStar
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">{rating.toFixed(1)}</span>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 mb-3">
            {property.facilities.slice(0, 3).map((facility, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                data-testid={`badge-facility-${property.id}-${index}`}
              >
                {facility}
              </Badge>
            ))}
            {property.facilities.length > 3 && (
              <Badge 
                variant="secondary"
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                data-testid={`badge-more-facilities-${property.id}`}
              >
                +{property.facilities.length - 3} lainnya
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary-600" data-testid={`text-price-${property.id}`}>
              {formattedPrice}
            </span>
            <span className="text-gray-600 text-sm">/malam</span>
          </div>
          <Button 
            onClick={onViewDetail}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            data-testid={`button-detail-${property.id}`}
          >
            Lihat Detail
          </Button>
        </div>
      </div>
    </div>
  );
}

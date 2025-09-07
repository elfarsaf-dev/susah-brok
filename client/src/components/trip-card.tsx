import { MapPin, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Trip } from "@shared/schema";

interface TripCardProps {
  trip: Trip;
  onViewDetail: () => void;
}

export default function TripCard({ trip, onViewDetail }: TripCardProps) {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(trip.price);

  const rating = trip.rating || 4.5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      data-testid={`card-trip-${trip.id}`}
    >
      <div className="relative">
        <img 
          src={trip.image} 
          alt={trip.name} 
          className="w-full h-32 sm:h-48 object-cover"
          data-testid={`img-trip-${trip.id}`}
        />
        <div className="absolute top-4 left-4">
          <Badge 
            className={`${trip.category === 'short' ? 'bg-green-600' : 'bg-purple-600'} text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}
            data-testid={`badge-category-${trip.id}`}
          >
            {trip.category} trip
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
            data-testid={`badge-duration-${trip.id}`}
          >
            {trip.duration}
          </Badge>
        </div>
      </div>
      
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2" data-testid={`text-name-${trip.id}`}>
          {trip.name}
        </h3>
        
        <p className="text-gray-600 mb-2 text-xs line-clamp-2 sm:line-clamp-3" data-testid={`text-description-${trip.id}`}>
          {trip.description}
        </p>
        
        <div className="mb-2 space-y-1">
          <p className="text-gray-600 flex items-center text-xs" data-testid={`text-capacity-${trip.id}`}>
            <Users className="mr-2 text-primary-600 h-4 w-4" />
            {trip.capacity}
          </p>
          
          <p className="text-gray-600 flex items-center text-xs" data-testid={`text-duration-${trip.id}`}>
            <Clock className="mr-2 text-primary-600 h-4 w-4" />
            Durasi: {trip.duration}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-2" data-testid={`rating-${trip.id}`}>
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
          <span className="text-xs text-gray-600 font-medium">{rating.toFixed(1)}</span>
        </div>
        
        {/* Destinations Preview */}
        <div className="mb-3 hidden sm:block">
          <div className="flex flex-wrap gap-1 mb-2">
            {trip.destinations.slice(0, 3).map((destination, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                data-testid={`badge-destination-${trip.id}-${index}`}
              >
                {destination}
              </Badge>
            ))}
            {trip.destinations.length > 3 && (
              <Badge 
                variant="secondary"
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                data-testid={`badge-more-destinations-${trip.id}`}
              >
                +{trip.destinations.length - 3} lainnya
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="text-lg font-bold text-primary-600" data-testid={`text-price-${trip.id}`}>
              {formattedPrice}
            </span>
            <span className="text-gray-600 text-xs">/jeep</span>
          </div>
          <Button 
            onClick={onViewDetail}
            className="bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 py-1.5 rounded-lg font-medium text-sm transition-colors duration-200 w-full sm:w-auto"
            data-testid={`button-detail-${trip.id}`}
          >
            Lihat Detail
          </Button>
        </div>
      </div>
    </div>
  );
}
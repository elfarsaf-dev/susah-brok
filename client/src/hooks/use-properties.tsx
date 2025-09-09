import { useState, useMemo } from "react";
import { getPropertiesByType } from "@shared/data";
import type { PropertyType } from "@shared/schema";

export function useProperties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType>("villa");
  const [displayedCount, setDisplayedCount] = useState(6);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const allProperties = useMemo(() => 
    getPropertiesByType(propertyType), 
    [propertyType]
  );

  const filteredProperties = useMemo(() => {
    let filtered = allProperties;
    
    // Filter by search query
    if (searchQuery.trim()) {
      const searchTerm = searchQuery.toLowerCase();
      filtered = filtered.filter(property => 
        property.name.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm) ||
        property.facilities.some(facility => 
          facility.toLowerCase().includes(searchTerm)
        )
      );
    }
    
    // Filter by categories (facilities)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(property => {
        return selectedCategories.every(category => {
          switch (category) {
            case "kolam-renang":
              return property.facilities.some(facility => 
                facility.toLowerCase().includes("kolam renang") || 
                facility.toLowerCase().includes("private pool") ||
                facility.toLowerCase().includes("pool")
              );
            case "free-bbq":
              return property.facilities.some(facility => 
                facility.toLowerCase().includes("bbq") || 
                facility.toLowerCase().includes("bakaran") ||
                facility.toLowerCase().includes("alat bakar")
              );
            case "mewah":
              return property.rates.some(rate => rate.price >= 2000000) ||
                property.facilities.some(facility => 
                  facility.toLowerCase().includes("smart tv") ||
                  facility.toLowerCase().includes("private pool") ||
                  facility.toLowerCase().includes("rooftop")
                );
            case "harga-terbaik":
              return property.rates.some(rate => rate.price < 2000000);
            case "karaoke":
              return property.facilities.some(facility => 
                facility.toLowerCase().includes("karaoke")
              );
            case "view-pegunungan":
              return property.facilities.some(facility => 
                facility.toLowerCase().includes("view") ||
                facility.toLowerCase().includes("pegunungan") ||
                facility.toLowerCase().includes("bukit")
              ) || property.notes.some(note =>
                note.toLowerCase().includes("view") ||
                note.toLowerCase().includes("pegunungan") ||
                note.toLowerCase().includes("bukit")
              );
            case "smart-tv":
              return property.facilities.some(facility => 
                facility.toLowerCase().includes("smart tv") ||
                facility.toLowerCase().includes("tv") ||
                facility.toLowerCase().includes("netflix")
              );
            case "breakfast":
              return property.facilities.some(facility => 
                facility.toLowerCase().includes("breakfast") ||
                facility.toLowerCase().includes("sarapan")
              );
            default:
              return true;
          }
        });
      });
    }
    
    return filtered;
  }, [allProperties, searchQuery, selectedCategories]);

  const properties = filteredProperties;
  const hasMore = displayedCount < properties.length;

  return {
    properties,
    searchQuery,
    setSearchQuery: (query: string) => {
      setSearchQuery(query);
      setDisplayedCount(6); // Reset displayed count when searching
    },
    propertyType,
    setPropertyType: (type: PropertyType) => {
      setPropertyType(type);
      setDisplayedCount(6); // Reset displayed count when changing type
      setSearchQuery(""); // Clear search when changing type
      setSelectedCategories([]); // Clear categories when changing type
    },
    displayedCount,
    setDisplayedCount,
    hasMore,
    selectedCategories,
    setCategoryFilter: (categories: string[]) => {
      setSelectedCategories(categories);
      setDisplayedCount(6); // Reset displayed count when filtering
    }
  };
}

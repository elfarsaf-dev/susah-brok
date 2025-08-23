import { useState, useMemo } from "react";
import { getPropertiesByType } from "@shared/data";
import type { PropertyType } from "@shared/schema";

export function useProperties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType>("villa");
  const [displayedCount, setDisplayedCount] = useState(6);

  const allProperties = useMemo(() => 
    getPropertiesByType(propertyType), 
    [propertyType]
  );

  const filteredProperties = useMemo(() => {
    if (!searchQuery.trim()) return allProperties;
    
    const searchTerm = searchQuery.toLowerCase();
    return allProperties.filter(property => 
      property.name.toLowerCase().includes(searchTerm) ||
      property.location.toLowerCase().includes(searchTerm) ||
      property.facilities.some(facility => 
        facility.toLowerCase().includes(searchTerm)
      )
    );
  }, [allProperties, searchQuery]);

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
    },
    displayedCount,
    setDisplayedCount,
    hasMore
  };
}

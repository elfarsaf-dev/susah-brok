import { useState, useMemo } from "react";
import { tripData } from "@shared/data";
import type { Trip, TripCategory } from "@shared/schema";

export function useTrips() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tripCategory, setTripCategory] = useState<TripCategory | "all">("all");
  const [displayedCount, setDisplayedCount] = useState(6);

  const filteredTrips = useMemo(() => {
    let filtered = tripData;

    // Filter by category
    if (tripCategory !== "all") {
      filtered = filtered.filter(trip => trip.category === tripCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(trip =>
        trip.name.toLowerCase().includes(query) ||
        trip.description.toLowerCase().includes(query) ||
        trip.destinations.some(dest => dest.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, tripCategory]);

  const trips = filteredTrips.slice(0, displayedCount);
  const hasMore = filteredTrips.length > displayedCount;

  return {
    trips,
    searchQuery,
    setSearchQuery,
    tripCategory,
    setTripCategory,
    displayedCount,
    setDisplayedCount,
    hasMore,
    totalTrips: filteredTrips.length
  };
}
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SearchBar from "@/components/search-bar";
import PropertyCard from "@/components/property-card";
import PropertyModal from "@/components/property-modal";
import PropertyCategories from "@/components/property-categories";
import FloatingToggle from "@/components/floating-toggle";
import JeepSection from "@/components/jeep-section";
import AdvantagesSection from "@/components/advantages-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { useProperties } from "@/hooks/use-properties";
import { useState } from "react";
import type { Property } from "@shared/schema";

export default function Home() {
  const {
    properties,
    searchQuery,
    setSearchQuery,
    propertyType,
    setPropertyType,
    displayedCount,
    setDisplayedCount,
    hasMore,
    setCategoryFilter
  } = useProperties();

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      {/* Properties Section */}
      <section id="properties" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilihan Akomodasi Terbaik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Temukan villa dan glamping impian Anda dengan fasilitas lengkap dan pemandangan menakjubkan di Tawangmangu
            </p>
          </div>
          
          {/* Property Categories */}
          <PropertyCategories onCategoryFilter={setCategoryFilter} />
          
          {/* Property Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 mt-8" data-testid="properties-grid">
            {properties.slice(0, displayedCount).map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onViewDetail={() => setSelectedProperty(property)}
              />
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button 
                onClick={handleLoadMore}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                data-testid="button-load-more"
              >
                Lihat Lebih Banyak
              </Button>
            </div>
          )}
        </div>
      </section>

      <JeepSection />
      <AdvantagesSection />
      <AboutSection />
      <ContactSection />

      <FloatingToggle 
        currentType={propertyType} 
        onToggle={() => setPropertyType(propertyType === "villa" ? "glamping" : "villa")}
      />

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}

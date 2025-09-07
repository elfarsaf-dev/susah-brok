import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PropertyCategoriesProps {
  onCategoryFilter: (categories: string[]) => void;
}

export default function PropertyCategories({ onCategoryFilter }: PropertyCategoriesProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    {
      id: "all",
      label: "Semua",
      icon: "🏠",
      description: "Semua akomodasi"
    },
    {
      id: "kolam-renang",
      label: "Kolam Renang",
      icon: "🏊‍♂️",
      description: "Private pool & kolam renang"
    },
    {
      id: "free-bbq",
      label: "Free BBQ",
      icon: "🍖",
      description: "Gratis alat BBQ & bakaran"
    },
    {
      id: "mewah",
      label: "Mewah",
      icon: "✨",
      description: "Villa premium & glamping ekslusif"
    },
    {
      id: "harga-terbaik",
      label: "Harga Terbaik",
      icon: "💰",
      description: "Under 1 juta per malam"
    },
    {
      id: "karaoke",
      label: "Karaoke",
      icon: "🎤",
      description: "Fasilitas karaoke keluarga"
    },
    {
      id: "view-pegunungan",
      label: "View Pegunungan",
      icon: "🏔️",
      description: "Pemandangan pegunungan & bukit"
    },
    {
      id: "smart-tv",
      label: "Smart TV",
      icon: "📺",
      description: "Smart TV & entertainment"
    },
    {
      id: "breakfast",
      label: "Free Breakfast",
      icon: "🍳",
      description: "Sarapan gratis disediakan"
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    let newCategories: string[];
    
    if (categoryId === "all") {
      newCategories = [];
    } else {
      if (selectedCategories.includes(categoryId)) {
        newCategories = selectedCategories.filter(cat => cat !== categoryId);
      } else {
        newCategories = [...selectedCategories.filter(cat => cat !== "all"), categoryId];
      }
    }
    
    setSelectedCategories(newCategories);
    onCategoryFilter(newCategories);
  };

  const isSelected = (categoryId: string) => {
    if (categoryId === "all") {
      return selectedCategories.length === 0;
    }
    return selectedCategories.includes(categoryId);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Kategori Berdasarkan Fasilitas
        </h3>
        
        {/* Mobile Layout - Horizontal Scroll */}
        <div 
          className="sm:hidden overflow-x-auto pb-4 scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-2 px-1" style={{ width: 'max-content' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`h-auto p-2 flex flex-col items-center gap-1 relative transition-all duration-200 hover:scale-105 min-w-[80px] flex-shrink-0 rounded-lg border ${
                  isSelected(category.id) 
                    ? "bg-primary-600 text-white border-primary-600 shadow-lg" 
                    : "bg-white text-gray-700 border-gray-200 hover:border-primary-300 hover:bg-primary-50"
                }`}
                onClick={() => handleCategoryClick(category.id)}
                data-testid={`category-${category.id}`}
              >
                {isSelected(category.id) && (
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-0.5">
                    <Check size={8} />
                  </div>
                )}
                
                <div className="text-lg">{category.icon}</div>
                <div className="text-xs font-medium text-center leading-tight">
                  {category.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={isSelected(category.id) ? "default" : "outline"}
              className={`h-auto p-4 flex flex-col items-center gap-2 relative transition-all duration-200 hover:scale-105 ${
                isSelected(category.id) 
                  ? "bg-primary-600 text-white border-primary-600 shadow-lg" 
                  : "bg-white text-gray-700 border-gray-200 hover:border-primary-300 hover:bg-primary-50"
              }`}
              onClick={() => handleCategoryClick(category.id)}
              data-testid={`category-${category.id}`}
            >
              {isSelected(category.id) && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                  <Check size={12} />
                </div>
              )}
              
              <div className="text-2xl mb-1">{category.icon}</div>
              <div className="text-sm font-medium text-center leading-tight">
                {category.label}
              </div>
              <div className="text-xs text-center opacity-75 leading-tight">
                {category.description}
              </div>
            </Button>
          ))}
        </div>
        
        {selectedCategories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-600">Filter aktif:</span>
            {selectedCategories.map((categoryId) => {
              const category = categories.find(cat => cat.id === categoryId);
              return (
                <Badge key={categoryId} variant="secondary" className="text-xs">
                  {category?.icon} {category?.label}
                </Badge>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCategoryClick("all")}
              className="text-xs text-red-600 hover:text-red-700"
              data-testid="button-clear-filters"
            >
              Hapus semua filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
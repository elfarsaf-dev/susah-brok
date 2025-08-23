import { Home, Tent } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PropertyType } from "@shared/schema";

interface FloatingToggleProps {
  currentType: PropertyType;
  onToggle: () => void;
}

export default function FloatingToggle({ currentType, onToggle }: FloatingToggleProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="floating-toggle">
      <Button
        onClick={onToggle}
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        data-testid="button-toggle-type"
      >
        {currentType === "villa" ? (
          <Home className="text-xl h-6 w-6" />
        ) : (
          <Tent className="text-xl h-6 w-6" />
        )}
        <span className="ml-2 hidden md:inline" data-testid="text-toggle-type">
          {currentType === "villa" ? "Villa" : "Glamping"}
        </span>
      </Button>
    </div>
  );
}

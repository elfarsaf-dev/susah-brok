import { Mountain } from "lucide-react";
import logoImage from "@assets/ai_repair_20250823211605583_1755958920038.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative" data-testid="hero-section">
      <div className="h-96 hero-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="mb-6">
              <div className="w-24 h-24 bg-transparent flex items-center justify-center mx-auto mb-4">
                <img 
                  src={logoImage} 
                  alt="BOS VILLA TAWANGMANGU Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="text-hero-title">
                BOS VILLA TAWANGMANGU
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
                Nikmati pengalaman menginap terbaik di villa dan glamping eksklusif dengan pemandangan Gunung Lawu yang memukau
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

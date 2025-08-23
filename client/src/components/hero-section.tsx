import { Mountain } from "lucide-react";
import logoImage from "@assets/ai_repair_20250823211605583_1755958920038.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative" data-testid="hero-section">
      <div className="h-96 hero-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="mb-6">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-transparent flex items-center justify-center mx-auto mb-12 mt-8">
                <img 
                  src={logoImage} 
                  alt="BOS VILLA TAWANGMANGU Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8))' }}
                />
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto px-6" data-testid="text-hero-description">
                Nikmati pengalaman menginap terbaik di villa dan glamping eksklusif dengan pemandangan Gunung Lawu yang memukau
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

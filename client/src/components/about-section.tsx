import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  
  const stats = [
    "50+ Properti Terpilih",
    "5000+ Tamu Puas", 
    "Rating 4.8/5"
  ];

  return (
    <section id="about" className="py-16 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.about.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center" data-testid={`stat-${index}`}>
                  <CheckCircle className="text-primary-600 mr-2 h-5 w-5" />
                  <span className="text-gray-700">{stat}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="BOS Villa Tawangmangu" 
              className="rounded-xl shadow-lg w-full"
              data-testid="img-about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

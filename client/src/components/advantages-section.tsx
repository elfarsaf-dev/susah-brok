import { Star, MapPin, Headphones } from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: Star,
      title: "Kualitas Terjamin",
      description: "Semua properti telah melalui seleksi ketat untuk memastikan kenyamanan dan kebersihan terbaik"
    },
    {
      icon: MapPin,
      title: "Lokasi Strategis", 
      description: "Dekat dengan berbagai tempat wisata menarik dan pemandangan alam yang memukau"
    },
    {
      icon: Headphones,
      title: "Pelayanan 24/7",
      description: "Tim customer service kami siap membantu Anda kapanpun dibutuhkan"
    }
  ];

  return (
    <section className="py-16 bg-primary-50" data-testid="advantages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen memberikan pengalaman terbaik untuk liburan Anda di Tawangmangu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center p-6" data-testid={`advantage-${index}`}>
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

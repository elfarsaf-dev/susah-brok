import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/ai_repair_20250823211605583_1755958920038.png";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 822-4181-9992", "+62 812-2561-1759"],
      action: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+62 822-4181-9992", "+62 812-2561-1759"],
      action: {
        text: "Chat Sekarang",
        onClick: () => window.open("https://wa.me/6282241819992", "_blank"),
        className: "bg-green-600 hover:bg-green-700"
      }
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@bosvillatawangmangu.com", "booking@bosvillatawangmangu.com"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siap membantu mewujudkan liburan impian Anda di Tawangmangu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="text-center" data-testid={`contact-method-${index}`}>
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300" data-testid={`contact-detail-${index}-${detailIndex}`}>
                    {detail}
                  </p>
                ))}
                {method.action && (
                  <Button 
                    onClick={method.action.onClick}
                    className={`mt-2 text-white px-4 py-2 rounded-lg transition-colors ${method.action.className}`}
                    data-testid={`button-contact-${index}`}
                  >
                    {method.action.text}
                  </Button>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-12" data-testid="map-container">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Lokasi Kami</h3>
            <p className="text-gray-300">
              Temukan kami di Tawangmangu, Karanganyar, Jawa Tengah
            </p>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg" data-testid="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.48!2d111.1575355!3d-7.6609892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e798bc16c335eb7%3A0x1dfae8981be2e88f!2sBos%20villa%20tawangmangu%20(info%20lengkap%20villa%20Tawangmangu)!5e0!3m2!1sen!2sid!4v1000000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BOS Villa Tawangmangu Location"
            ></iframe>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-transparent flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://cdn.ferdev.my.id/assets/elfar/IMG_5981.png" 
                alt="BOS VILLA TAWANGMANGU Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">BOS VILLA TAWANGMANGU</h3>
            <p className="text-gray-400 mb-4">Pengalaman menginap terbaik di kaki Gunung Lawu</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" data-testid="link-facebook">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" data-testid="link-instagram">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" data-testid="link-whatsapp">
                <span className="text-xl">💬</span>
              </a>
            </div>
            <p className="text-gray-500 text-center" data-testid="text-copyright">
              Made with ❤️ for travelers seeking unforgettable mountain adventures
              <br />
              <span className="text-sm">&copy; {new Date().getFullYear()} BOS VILLA TAWANGMANGU. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

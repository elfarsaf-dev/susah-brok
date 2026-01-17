import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Beranda", isExternal: false },
    { href: "/#properties", label: "Properti", isExternal: true },
    { href: "/#jeep", label: "Sewa Jeep", isExternal: true },
    { href: "/news-tips/index.html", label: "News & Tips", isExternal: true },
    { href: "/#about", label: "Tentang", isExternal: true },
    { href: "/#contact", label: "Kontak", isExternal: true },
  ];

  const handleNavClick = (href: string, isExternal: boolean) => {
    setIsMenuOpen(false);
    if (isExternal && location !== "/") {
      window.location.href = href;
      return;
    }
    
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <h1 className="text-xl font-bold text-primary-700" data-testid="text-logo">
                BOS VILLA TAWANGMANGU
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.isExternal ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, true)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link key={item.href} href={item.href}>
                    <a
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location === item.href
                          ? "text-primary-600"
                          : "text-gray-700 hover:text-primary-600"
                      }`}
                      data-testid={`link-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </a>
                  </Link>
                )
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 hover:bg-gray-100 transition-colors duration-200"
              data-testid="button-mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
      }`} data-testid="mobile-menu">
        <div className="bg-white border-t border-gray-200 shadow-lg backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              item.isExternal ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, true)}
                  className={`text-gray-700 hover:text-primary-600 hover:bg-primary-50 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-200 transform hover:translate-x-2 hover:shadow-md ${
                    isMenuOpen ? 'animate-slide-in' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-60"></span>
                    {item.label}
                  </span>
                </button>
              ) : (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-primary-600 hover:bg-primary-50 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-200 transform hover:translate-x-2 hover:shadow-md ${
                      location === item.href ? "text-primary-600 bg-primary-50" : "text-gray-700"
                    } ${isMenuOpen ? 'animate-slide-in' : ''}`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-60"></span>
                      {item.label}
                    </span>
                  </a>
                </Link>
              )
            ))}
          </div>
          
          {/* Menu footer with contact info */}
          <div className="px-4 py-3 bg-gradient-to-r from-primary-50 to-blue-50 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center font-medium">
              💬 Hubungi kami untuk info lebih lanjut
            </p>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://wa.me/6282241819992?text=Halo%2C%20saya%20tertarik%20dengan%20BOS%20VILLA%20TAWANGMANGU', '_blank');
                }}
                className="text-green-600 text-sm font-semibold hover:text-green-700 transition-colors duration-200"
              >
                WhatsApp: 0822-4181-9992
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

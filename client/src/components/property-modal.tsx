import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import type { Property } from "@shared/schema";

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAdmin, setSelectedAdmin] = useState<1 | 2>(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Admin contact information
  const adminContacts = {
    1: { phone: '6282241819992', name: 'Admin Izudin' },
    2: { phone: '6281225611759', name: 'Admin Dawud' }
  };

  // Get property-specific image slider
  const getSliderImages = () => {
    // Use slideImages if available, otherwise use the main image plus some defaults
    if (property.slideImages && property.slideImages.length > 0) {
      return [property.image, ...property.slideImages];
    }
    
    // Fallback to hardcoded images for older properties that don't have slideImages yet
    const imageMap: Record<string, string[]> = {
      // Villa FJ
      "Villa FJ": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5954.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5951.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5950.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5952.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5953.jpeg'
      ],
      // Villa DT
      "Villa DT": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5898.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5896.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5897.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5895.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5899.jpeg'
      ],
      // Villa ALM
      "Villa ALM": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5921.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5920.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5922.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5924.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5923.jpeg'
      ],
      // Villa TD JW
      "Villa TD JW": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5912.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5911.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5910.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5913.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5914.jpeg'
      ],
      // KRYSM
      "KRYSM": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5940.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5941.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5943.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5944.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5942.jpeg'
      ],
      // Villa "KU"
      "Villa \"KU\"": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_6004.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_6001.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_6003.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_6005.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_6002.jpeg'
      ],
      // Villa ADR
      "Villa ADR": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5904.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5903.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5902.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5901.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5900.jpeg'
      ],
      // Villa KMD
      "Villa KMD": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5909.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5908.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5906.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5907.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5905.jpeg'
      ],
      // Villa ZZ
      "Villa ZZ": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/ZIezo/IMG_5849.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/ZIezo/IMG_5851.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/ZIezo/IMG_5853.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/ZIezo/IMG_5850.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/ZIezo/IMG_5852.jpeg'
      ],
      // Villa RYL
      "Villa RYL": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Royal/IMG_5854.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Royal/IMG_5858.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Royal/IMG_5857.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Royal/IMG_5856.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Royal/IMG_5855.jpeg'
      ],
      // Villa DNDR 2
      "Villa DNDR 2": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5873.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5872.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5870.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5871.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5874.jpeg'
      ],
      // Villa BDL 2A
      "Villa BDL 2A": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5918.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5916.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5915.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5917.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5919.jpeg'
      ],
      // Villa Pine
      "Villa Pine": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5866.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5868.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5869.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5867.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5865.jpeg'
      ],
      // Villa EDLW
      "Villa EDLW": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Edelwis/IMG_5844.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Edelwis/IMG_5845.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Edelwis/IMG_5846.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Edelwis/IMG_5847.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Edelwis/IMG_5848.jpeg'
      ],
      // Mongkrang SC
      "Mongkrang SC": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5884.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5883.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5881.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5882.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5880.jpeg'
      ],
      // DZ Glamping
      "DZ Glamping": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5928.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5927.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5926.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5929.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5925.jpeg'
      ],
      // ZHY Glamping
      "ZHY Glamping": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5931.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5933.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5934.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5930.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5932.jpeg'
      ],
      // BMW Glamping
      "BMW Glamping": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5935.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5937.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5938.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5936.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5939.jpeg'
      ],
      // Glamping SYD 2
      "Glamping SYD 2": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5948.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5949.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5945.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5947.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5946.jpeg'
      ],
      // AZL Glamping
      "AZL Glamping": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5956.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5955.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5958.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5957.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5959.jpeg'
      ],
      // TR Glamping
      "TR Glamping": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5964.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5961.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5962.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5963.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5960.jpeg'
      ],
      // Glamping LWPR
      "Glamping LWPR": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5969.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5968.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5967.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5965.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5966.jpeg'
      ],
      // B.HILLS B
      "B.HILLS B": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5974.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5973.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5971.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5970.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5972.jpeg'
      ],
      // DV Glamping
      "DV Glamping": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5979.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5978.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5976.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5977.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5975.jpeg'
      ],
      // B.HILLS A
      "B.HILLS A": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5983.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5981.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5980.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5984.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5982.jpeg'
      ],
      // Glamping Jingga
      "Glamping Jingga": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Svg/IMG_5988.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Svg/IMG_5987.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Svg/IMG_5986.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5985.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Jingga/IMG_5989.jpeg'
      ],
      // Glamping SVG
      "Glamping SVG": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/IMG_5993.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/IMG_5992.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/IMG_5991.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Svg/IMG_5994.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Svg/IMG_5990.jpeg'
      ],
      // Glamping ALM
      "Glamping ALM": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_5999.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_5998.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Ku/IMG_5996.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Alami/IMG_5997.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/Alami/IMG_5995.jpeg'
      ],
      // Glamping DYN
      "Glamping DYN": [
        property.image,
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/uploadswe/WhatsApp Image 2025-08-23 at 19.38.57 (1).jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/uploadswe/WhatsApp Image 2025-08-23 at 19.38.58 (2).jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/uploadswe/WhatsApp Image 2025-08-23 at 19.38.57.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/uploadswe/WhatsApp Image 2025-08-23 at 19.38.58.jpeg',
        'https://cdn.jsdelivr.net/gh/elfarsaf-dev/Heu@main/uploadswe/WhatsApp Image 2025-08-23 at 19.38.58 (1).jpeg'
      ]
    };
    
    return imageMap[property.name] || [
      property.image,
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600'
    ];
  };
  
  const sliderImages = getSliderImages();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    pauseAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? sliderImages.length - 1 : prev - 1);
    pauseAutoSlide();
  };

  const pauseAutoSlide = () => {
    setIsAutoSliding(false);
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    pauseAutoSlide();
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      pauseAutoSlide();
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => prev === 0 ? sliderImages.length - 1 : prev - 1);
      pauseAutoSlide();
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (isAutoSliding && sliderImages.length > 1) {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 4000); // 8 seconds
    }

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isAutoSliding, sliderImages.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan ${property.name} di ${property.location}. Bisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${adminContacts[selectedAdmin].phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    const message = `Halo, saya ingin menghubungi langsung tentang ${property.name}. Mohon info lebih lanjut`;
    const whatsappUrl = `https://wa.me/${adminContacts[selectedAdmin].phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] max-h-[85vh] overflow-y-auto p-0 rounded-2xl border-0 shadow-2xl" data-testid={`modal-property-${property.id}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1],
            scale: { type: "spring", damping: 25, stiffness: 200 }
          }}
          className="w-full h-full"
        >
        <DialogTitle className="sr-only">{property.name} - Detail Properti</DialogTitle>
        <DialogDescription className="sr-only">
          Detail lengkap untuk {property.name} di {property.location} dengan fasilitas dan informasi booking
        </DialogDescription>
        
        <div className="relative rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg"
              data-testid="button-close-modal"
            >
              <X className="h-4 w-4 text-gray-600" />
            </Button>
          </motion.div>
          
          {/* Image Slider */}
          <motion.div 
            className="relative h-80" 
            data-testid="image-slider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div 
              className="h-full select-none relative cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: 'pan-y pinch-zoom' }}
            >
              {sliderImages.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${property.name} ${index + 1}`}
                  className={`w-full h-full object-cover absolute inset-0`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  data-testid={`img-slide-${index}`}
                  style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg hidden sm:flex"
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg hidden sm:flex"
              data-testid="button-next-slide"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Button>
            
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 bg-black bg-opacity-20 px-2 py-1 rounded-full backdrop-blur-sm">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white shadow-lg' : 'bg-white bg-opacity-60'
                  }`}
                  data-testid={`button-slide-dot-${index}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Property Details */}
          <motion.div 
            className="p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center justify-between mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900" data-testid="text-modal-name">
                  {property.name}
                </h2>
                <p className="text-base text-gray-600 flex items-center mt-1" data-testid="text-modal-location">
                  <span className="mr-2">📍</span>
                  {property.location}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <Badge className="bg-primary-600 text-white px-3 py-1.5 rounded-full text-sm font-medium capitalize">
                  {property.type}
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium" data-testid="text-modal-units">
                  {property.units} unit tersedia
                </Badge>
              </div>
            </motion.div>
            
            {/* Capacity */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kapasitas</h3>
              <p className="text-gray-600 flex items-center" data-testid="text-modal-capacity">
                <span className="mr-2">👥</span>
                {property.capacity}
              </p>
            </div>
            
            {/* Rates */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Harga</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3" data-testid="rates-grid">
                {property.rates.map((rate, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg" data-testid={`rate-item-${index}`}>
                    <p className="font-medium text-gray-900 text-sm">{rate.label}</p>
                    <p className="text-base font-bold text-primary-600">
                      {rate.price > 0 ? new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(rate.price) : 'Hubungi untuk info harga'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Facilities */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fasilitas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5" data-testid="facilities-grid">
                {property.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center" data-testid={`facility-item-${index}`}>
                    <Check className="text-primary-600 mr-2 h-3.5 w-3.5" />
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Notes */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Syarat & Ketentuan</h3>
              <ul className="space-y-1" data-testid="notes-list">
                {property.notes.map((note, index) => (
                  <li key={index} className="flex items-start" data-testid={`note-item-${index}`}>
                    <Info className="text-primary-600 mr-2 mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Info Message */}
            <div className="mb-5 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-800 text-center font-medium text-sm">
                Ada pertanyaan atau ingin tahu lebih detail? Silakan hubungi kami😊
              </p>
            </div>
            
            {/* Admin Selection */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">Pilih Admin:</h4>
              <div className="flex gap-2 justify-center">
                <Button
                  variant={selectedAdmin === 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedAdmin(1)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedAdmin === 1 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                  data-testid="button-admin-1"
                >
                  Admin 1
                </Button>
                <Button
                  variant={selectedAdmin === 2 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedAdmin(2)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedAdmin === 2 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                  data-testid="button-admin-2"
                >
                  Admin 2
                </Button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
                data-testid="button-whatsapp"
              >
                <span className="mr-2">💬</span>
                Tanya Ketersediaan
              </Button>
              <Button 
                onClick={handleCall}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
                data-testid="button-call"
              >
                <span className="mr-2">☎️</span>
                Hubungi Sekarang
              </Button>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </DialogContent>
    </Dialog>
    </AnimatePresence>
  );
}

// Translation data for the website
export type Language = 'id' | 'jv' | 'en';

export type TranslationKeys = {
  // Navigation
  nav: {
    home: string;
    about: string;
    properties: string;
    jeep: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bookNow: string;
    learnMore: string;
    trustBadge: string;
  };
  
  // Search
  search: {
    placeholder: string;
    allTypes: string;
    villa: string;
    glamping: string;
    searchButton: string;
  };
  
  // Property Details
  property: {
    facilities: string;
    rates: string;
    weekday: string;
    weekend: string;
    special: string;
    perNight: string;
    bookNow: string;
    callNow: string;
    close: string;
  };
  
  // Jeep Section
  jeep: {
    title: string;
    subtitle: string;
    description: string;
    bookTrip: string;
  };
  
  // Trip Details
  trip: {
    duration: string;
    price: string;
    includes: string;
    bookNow: string;
    callNow: string;
    close: string;
  };
  
  // About Section
  about: {
    title: string;
    description: string;
  };
  
  // Advantages
  advantages: {
    title: string;
    subtitle: string;
    location: {
      title: string;
      description: string;
    };
    facilities: {
      title: string;
      description: string;
    };
    service: {
      title: string;
      description: string;
    };
    experience: {
      title: string;
      description: string;
    };
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    getInTouch: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    tryAgain: string;
  };
};

export const translations: Record<Language, TranslationKeys> = {
  // Indonesian (Primary)
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      properties: 'Properti',
      jeep: 'Sewa Jeep',
      contact: 'Kontak',
    },
    hero: {
      title: 'BOS VILLA TAWANGMANGU',
      subtitle: 'Pengalaman Menginap Terbaik di Kaki Gunung Lawu',
      description: 'Nikmati keindahan alam Tawangmangu dengan akomodasi villa dan glamping yang nyaman. Dilengkapi fasilitas modern dan pemandangan pegunungan yang memukau.',
      bookNow: 'Pesan Sekarang',
      learnMore: 'Pelajari Lebih Lanjut',
      trustBadge: 'Dipercaya 1000+ Tamu',
    },
    search: {
      placeholder: 'Cari villa atau glamping...',
      allTypes: 'Semua Jenis',
      villa: 'Villa',
      glamping: 'Glamping',
      searchButton: 'Cari',
    },
    property: {
      facilities: 'Fasilitas',
      rates: 'Tarif',
      weekday: 'Hari Kerja',
      weekend: 'Akhir Pekan',
      special: 'Hari Khusus',
      perNight: '/malam',
      bookNow: 'Pesan Sekarang',
      callNow: 'Hubungi Sekarang',
      close: 'Tutup',
    },
    jeep: {
      title: 'Petualangan Jeep Tawangmangu',
      subtitle: 'Jelajahi Keindahan Alam dengan Jeep',
      description: 'Rasakan sensasi petualangan dengan jeep tour mengelilingi kawasan Tawangmangu. Nikmati pemandangan spektakuler dan spot foto Instagramable.',
      bookTrip: 'Pesan Trip',
    },
    trip: {
      duration: 'Durasi',
      price: 'Harga',
      includes: 'Termasuk',
      bookNow: 'Pesan Sekarang',
      callNow: 'Hubungi Sekarang',
      close: 'Tutup',
    },
    about: {
      title: 'Tentang BOS Villa Tawangmangu',
      description: 'BOS Villa Tawangmangu adalah destinasi wisata terdepan yang menawarkan pengalaman menginap tak terlupakan di kaki Gunung Lawu. Dengan berbagai pilihan akomodasi dari villa mewah hingga glamping yang nyaman, kami menghadirkan harmoni sempurna antara kemewahan modern dan keindahan alam.',
    },
    advantages: {
      title: 'Mengapa Memilih Kami?',
      subtitle: 'Pengalaman terbaik menanti Anda di Tawangmangu',
      location: {
        title: 'Lokasi Strategis',
        description: 'Terletak di kaki Gunung Lawu dengan akses mudah ke berbagai destinasi wisata populer di Tawangmangu.',
      },
      facilities: {
        title: 'Fasilitas Lengkap',
        description: 'Dilengkapi dengan fasilitas modern seperti WiFi, AC, water heater, dan area parkir yang luas.',
      },
      service: {
        title: 'Pelayanan Prima',
        description: 'Tim profesional kami siap melayani Anda 24/7 untuk memastikan pengalaman menginap yang nyaman.',
      },
      experience: {
        title: 'Pengalaman Unik',
        description: 'Nikmati sunrise di pegunungan, udara segar, dan berbagai aktivitas outdoor yang menyenangkan.',
      },
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Siap membantu Anda merencanakan liburan yang sempurna',
      phone: 'Telepon',
      email: 'Email',
      address: 'Alamat',
      getInTouch: 'Hubungi Kami',
    },
    common: {
      loading: 'Memuat...',
      error: 'Terjadi kesalahan',
      tryAgain: 'Coba Lagi',
    },
  },
  
  // Javanese
  jv: {
    nav: {
      home: 'Omah',
      about: 'Babagan',
      properties: 'Properti',
      jeep: 'Sewa Jeep',
      contact: 'Kontak',
    },
    hero: {
      title: 'BOS VILLA TAWANGMANGU',
      subtitle: 'Pengalaman Nginep Paling Apik nang Sikile Gunung Lawu',
      description: 'Nikmati ayu alam Tawangmangu karo akomodasi villa lan glamping sing nyaman. Dilengkapi fasilitas modern lan pemandangan pegunungan sing endah.',
      bookNow: 'Pesen Saiki',
      learnMore: 'Sinau Luwih Akeh',
      trustBadge: 'Dipercaya 1000+ Tamu',
    },
    search: {
      placeholder: 'Golek villa utawa glamping...',
      allTypes: 'Kabeh Jinis',
      villa: 'Villa',
      glamping: 'Glamping',
      searchButton: 'Golek',
    },
    property: {
      facilities: 'Fasilitas',
      rates: 'Rega',
      weekday: 'Dina Kerja',
      weekend: 'Pungkasan Pekan',
      special: 'Dina Khusus',
      perNight: '/wengi',
      bookNow: 'Pesen Saiki',
      callNow: 'Telpon Saiki',
      close: 'Tutup',
    },
    jeep: {
      title: 'Petualangan Jeep Tawangmangu',
      subtitle: 'Jelajahi Endahe Alam karo Jeep',
      description: 'Rasakan sensasi petualangan karo jeep tour ngubengi kawasan Tawangmangu. Nikmati pemandangan spektakuler lan spot foto Instagramable.',
      bookTrip: 'Pesen Trip',
    },
    trip: {
      duration: 'Durasi',
      price: 'Rega',
      includes: 'Kalebu',
      bookNow: 'Pesen Saiki',
      callNow: 'Telpon Saiki',
      close: 'Tutup',
    },
    about: {
      title: 'Babagan BOS Villa Tawangmangu',
      description: 'BOS Villa Tawangmangu yaiku destinasi wisata ngarep sing nawakake pengalaman nginep ora bisa dilalekake nang sikile Gunung Lawu. Karo macem-macem pilihan akomodasi saka villa mewah nganti glamping sing nyaman, kita ngadani harmoni sampurna antarane kemewahan modern lan endahe alam.',
    },
    advantages: {
      title: 'Nopo Milih Kita?',
      subtitle: 'Pengalaman paling apik ngenteni sampeyan nang Tawangmangu',
      location: {
        title: 'Lokasi Strategis',
        description: 'Ana nang sikile Gunung Lawu karo akses gampang menyang macem-macem destinasi wisata populer nang Tawangmangu.',
      },
      facilities: {
        title: 'Fasilitas Lengkap',
        description: 'Dilengkapi karo fasilitas modern kayata WiFi, AC, water heater, lan area parkir sing amba.',
      },
      service: {
        title: 'Pelayanan Prima',
        description: 'Tim profesional kita siap nglayani sampeyan 24/7 kanggo mesthekake pengalaman nginep sing nyaman.',
      },
      experience: {
        title: 'Pengalaman Unik',
        description: 'Nikmati sunrise nang pegunungan, udara seger, lan macem-macem aktivitas outdoor sing nyenengake.',
      },
    },
    contact: {
      title: 'Hubungi Kita',
      subtitle: 'Siap ngewangi sampeyan ngrancang liburan sing sampurna',
      phone: 'Telpon',
      email: 'Email',
      address: 'Alamat',
      getInTouch: 'Hubungi Kita',
    },
    common: {
      loading: 'Ngunduh...',
      error: 'Ana masalah',
      tryAgain: 'Coba Maneh',
    },
  },
  
  // English
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      properties: 'Properties',
      jeep: 'Jeep Rental',
      contact: 'Contact',
    },
    hero: {
      title: 'BOS VILLA TAWANGMANGU',
      subtitle: 'The Best Stay Experience at the Foot of Mount Lawu',
      description: 'Enjoy the natural beauty of Tawangmangu with comfortable villa and glamping accommodations. Equipped with modern facilities and stunning mountain views.',
      bookNow: 'Book Now',
      learnMore: 'Learn More',
      trustBadge: 'Trusted by 1000+ Guests',
    },
    search: {
      placeholder: 'Search villa or glamping...',
      allTypes: 'All Types',
      villa: 'Villa',
      glamping: 'Glamping',
      searchButton: 'Search',
    },
    property: {
      facilities: 'Facilities',
      rates: 'Rates',
      weekday: 'Weekday',
      weekend: 'Weekend',
      special: 'Special Day',
      perNight: '/night',
      bookNow: 'Book Now',
      callNow: 'Call Now',
      close: 'Close',
    },
    jeep: {
      title: 'Tawangmangu Jeep Adventure',
      subtitle: 'Explore Natural Beauty with Jeep',
      description: 'Experience the thrill of adventure with jeep tours around the Tawangmangu area. Enjoy spectacular views and Instagramable photo spots.',
      bookTrip: 'Book Trip',
    },
    trip: {
      duration: 'Duration',
      price: 'Price',
      includes: 'Includes',
      bookNow: 'Book Now',
      callNow: 'Call Now',
      close: 'Close',
    },
    about: {
      title: 'About BOS Villa Tawangmangu',
      description: 'BOS Villa Tawangmangu is a leading tourist destination offering an unforgettable stay experience at the foot of Mount Lawu. With various accommodation options from luxury villas to comfortable glamping, we present the perfect harmony between modern luxury and natural beauty.',
    },
    advantages: {
      title: 'Why Choose Us?',
      subtitle: 'The best experience awaits you in Tawangmangu',
      location: {
        title: 'Strategic Location',
        description: 'Located at the foot of Mount Lawu with easy access to various popular tourist destinations in Tawangmangu.',
      },
      facilities: {
        title: 'Complete Facilities',
        description: 'Equipped with modern facilities such as WiFi, AC, water heater, and spacious parking area.',
      },
      service: {
        title: 'Prime Service',
        description: 'Our professional team is ready to serve you 24/7 to ensure a comfortable stay experience.',
      },
      experience: {
        title: 'Unique Experience',
        description: 'Enjoy sunrise in the mountains, fresh air, and various fun outdoor activities.',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to help you plan the perfect vacation',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      getInTouch: 'Get In Touch',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      tryAgain: 'Try Again',
    },
  },
};

export const languageNames: Record<Language, string> = {
  id: 'Indonesia',
  jv: 'Jawa',
  en: 'English',
};
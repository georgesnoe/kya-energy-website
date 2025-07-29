type Type = {
  header: {
    logo: string;
  };
  awards: {
    image: string;
    title: string;
    description: string;
    order: number;
    year: number;
  }[];
  navigation: {
    home: string;
    about: string;
    "products-and-services": string;
    "news-and-engagement": string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  team: {
    name: string;
    image: string;
    role: string;
  }[];
  switcher: {
    locale: {
      en: string;
      fr: string;
      aria: string;
    };
    theme: {
      title: {
        light: string;
        dark: string;
      };
    };
  };
  products: {
    "kya-sop-description": string;
    "kya-soldesign-description": string;
    "kya-ecolabel-description": string;
    "kya-flexycontrol-description": string;
    "promotional-offers": string;
    "product-range": string;
    "product-subtitle": string;
    "catalog-prompt": string;
    "see-more": string;
  };
  services: {
    title: string;
    subtitle: string;
    "installation-title": string;
    "installation-description": string;
    "audit-title": string;
    "audit-description": string;
    "training-title": string;
    "training-description": string;
    "rental-title": string;
    "rental-description": string;
    "learn-more": string;
  };
  financing: {
    title: string;
    subtitle: string;
    "down-payment": string;
    "repayment-period": string;
    "maintenance-included": string;
  };
  contact: {
    contact_us: string;
  };
};

export default Type;
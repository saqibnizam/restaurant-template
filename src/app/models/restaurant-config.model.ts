export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  openingHours: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

export interface MenuConfig {
  categories: string[];
  items: MenuItem[];
}

export interface FeatureFlags {
  showGallery: boolean;
  showTestimonials: boolean;
  showHero: boolean;
  showMenu: boolean;
  showContact: boolean;
}

export interface RestaurantConfig {
  id: string;
  name: string;
  logo: string;
  theme: ThemeConfig;
  contact: ContactInfo;
  social: SocialLinks;
  hero: HeroConfig;
  menu: MenuConfig;
  features: FeatureFlags;
  about: string;
}

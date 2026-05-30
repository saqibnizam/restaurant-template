export type BusinessCategory =
  | 'Pizza Restaurant'
  | 'Burger Restaurant'
  | 'Fast Food Restaurant'
  | 'BBQ Restaurant'
  | 'Fine Dining Restaurant'
  | 'Family Restaurant'
  | 'Coffee Shop'
  | 'Juice Bar'
  | 'Ice Cream Shop'
  | 'Bakery'
  | 'Platter House'
  | 'Hotel Restaurant';

export type ThemePreset =
  | 'Luxury'
  | 'Modern Dark'
  | 'Cafe Warm'
  | 'Fresh Juice'
  | 'Elegant Hotel'
  | 'Fast Food Vibrant'
  | 'Minimal Premium';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  preset?: ThemePreset;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  googleMapsUrl?: string;
  whatsapp?: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface MenuItemVariant {
  label: string;
  price: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price?: string; // Base price if no variants
  variants?: MenuItemVariant[]; // e.g. Small, Medium, Large
  category: string;
  image: string;
  isFeatured?: boolean;
}

export interface MenuConfig {
  categories: string[];
  items: MenuItem[];
  ctaText?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  content: string;
  avatar?: string;
}

export interface SpecialOffer {
  title: string;
  description: string;
  discount: string;
  code?: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AboutConfig {
  title: string;
  content: string;
  image: string;
  features?: Feature[];
}

export type SectionType =
  | 'Hero'
  | 'About'
  | 'FeaturedProducts'
  | 'Menu'
  | 'Categories'
  | 'SpecialOffers'
  | 'Gallery'
  | 'Testimonials'
  | 'WhyChooseUs'
  | 'Contact'
  | 'GoogleMaps'
  | 'OpeningHours'
  | 'SocialMedia'
  | 'ReservationCTA'
  | 'WhatsAppCTA'
  | 'FAQ'
  | 'Footer';

export interface Section {
  type: SectionType;
  enabled: boolean;
  order: number;
}

export interface RestaurantConfig {
  id: string;
  name: string;
  businessType: BusinessCategory;
  logo: string;
  theme: ThemeConfig;
  contact: ContactInfo;
  openingHours: OpeningHour[];
  social: SocialLinks;
  hero: HeroConfig;
  about: AboutConfig;
  menu: MenuConfig;
  gallery: string[];
  testimonials: Testimonial[];
  offers: SpecialOffer[];
  whyChooseUs: Feature[];
  faq?: FaqItem[];
  sections: Section[];
}

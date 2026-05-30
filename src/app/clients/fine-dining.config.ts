import { RestaurantConfig } from '../models/restaurant-config.model';

export const FINE_DINING_CONFIG: RestaurantConfig = {
  id: 'la-prestige',
  name: 'La Prestige',
  businessType: 'Fine Dining Restaurant',
  logo: 'https://images.unsplash.com/photo-1550966842-28a2a24b6f00?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Luxury',
    primaryColor: '#B8860B',
    secondaryColor: '#1C1C1C',
    backgroundColor: '#0A0A0A',
    textColor: '#F5F5F5',
    fontFamily: "'Playfair Display', serif"
  },
  contact: {
    address: '1 Royal Way, Upper East Side, NY 10021',
    phone: '+1 (555) 999-0000',
    email: 'reservations@laprestige.com'
  },
  openingHours: [
    { day: 'Wed - Sun', hours: '6:00 PM - 12:00 AM' }
  ],
  social: {
    instagram: 'https://instagram.com/laprestige'
  },
  hero: {
    title: 'The Pinnacle of Culinary Art',
    subtitle: 'An immersive experience for the senses.',
    backgroundImage: 'https://images.unsplash.com/photo-1550966842-28a2a24b6f00?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Request Reservation'
  },
  about: {
    title: 'Excellence Defined',
    content: 'At La Prestige, we redefine dining through innovation, precision, and the highest quality ingredients sourced globally.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
  },
  menu: {
    categories: ['Tasting Menu', 'Wine Selection'],
    items: [
      {
        name: 'Chef’s Signature Course',
        description: 'A 12-course journey through modern gastronomy.',
        price: '$250.00',
        category: 'Tasting Menu',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      }
    ]
  },
  gallery: [],
  testimonials: [],
  offers: [],
  whyChooseUs: [],
  sections: [
    { type: 'Hero', enabled: true, order: 1 },
    { type: 'About', enabled: true, order: 2 },
    { type: 'Menu', enabled: true, order: 3 },
    { type: 'ReservationCTA', enabled: true, order: 4 },
    { type: 'Contact', enabled: true, order: 5 },
    { type: 'Footer', enabled: true, order: 6 }
  ]
};

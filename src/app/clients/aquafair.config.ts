import { RestaurantConfig } from '../models/restaurant-config.model';

export const AQUAFAIR_CONFIG: RestaurantConfig = {
  id: 'aquafair',
  name: 'AquaFair Seafood',
  logo: 'assets/logos/aquafair.png',
  theme: {
    primaryColor: '#005f73',
    secondaryColor: '#0a9396',
    backgroundColor: '#f8f9fa',
    textColor: '#212529',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  contact: {
    address: '123 Ocean Drive, Coastal City',
    phone: '+1 234 567 890',
    email: 'info@aquafair.com',
    openingHours: 'Mon-Sun: 11am - 10pm'
  },
  social: {
    facebook: 'https://facebook.com/aquafair',
    instagram: 'https://instagram.com/aquafair'
  },
  hero: {
    title: 'Fresh Seafood by the Ocean',
    subtitle: 'Experience the finest catch of the day in a serene atmosphere.',
    backgroundImage: 'assets/images/aquafair-hero.jpg',
    ctaText: 'View Menu'
  },
  menu: {
    categories: ['Starters', 'Main Course', 'Desserts'],
    items: [
      { name: 'Grilled Lobster', description: 'Fresh lobster with garlic butter', price: '$45', category: 'Main Course' },
      { name: 'Oyster Platter', description: 'A dozen fresh oysters', price: '$30', category: 'Starters' }
    ]
  },
  features: {
    showGallery: true,
    showTestimonials: true,
    showHero: true,
    showMenu: true,
    showContact: true
  }
};

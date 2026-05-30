import { RestaurantConfig } from '../models/restaurant-config.model';

export const AQUAFAIR_CONFIG: RestaurantConfig = {
  id: 'aquafair',
  name: 'AquaFair Seafood',
  logo: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=150&q=80',
  theme: {
    primaryColor: '#0077b6',
    secondaryColor: '#ade8f4',
    backgroundColor: '#f0f9ff',
    textColor: '#023e8a',
    fontFamily: "'Trebuchet MS', sans-serif"
  },
  contact: {
    address: '456 Ocean Boulevard, Marina Bay',
    phone: '+1 555 222 333',
    email: 'info@aquafair.com',
    openingHours: 'Mon-Sun: 11am - 10pm'
  },
  social: {
    facebook: 'https://facebook.com/aquafair',
    instagram: 'https://instagram.com/aquafair'
  },
  hero: {
    title: 'Fresh From The Ocean',
    subtitle: 'Premium seafood caught daily and served with passion.',
    backgroundImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'View Today\'s Catch'
  },
  menu: {
    categories: ['Starters', 'Main Courses', 'Desserts', 'Drinks'],
    items: [
      {
        name: 'Oyster Platter',
        description: 'Half dozen fresh oysters with mignonette sauce.',
        price: '$24',
        category: 'Starters',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Grilled Salmon',
        description: 'Atlantic salmon with roasted asparagus and lemon butter.',
        price: '$32',
        category: 'Main Courses',
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Lobster Thermidor',
        description: 'Classic creamy lobster served in its shell.',
        price: '$48',
        category: 'Main Courses',
        image: 'https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Seafood Paella',
        description: 'Traditional Spanish rice with mussels, shrimp, and squid.',
        price: '$36',
        category: 'Main Courses',
        image: 'https://images.unsplash.com/photo-1534080564607-c9875143997f?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Lemon Sorbet',
        description: 'Refreshing homemade lemon sorbet.',
        price: '$8',
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1505394033323-424ebb44feb4?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  features: {
    showGallery: true,
    showTestimonials: false,
    showHero: true,
    showMenu: true,
    showContact: true
  },
  about: 'AquaFair Seafood has been bringing the taste of the ocean to Marina Bay since 2010. We work directly with local fishermen to ensure that every dish served is of the highest quality. Our chefs combine traditional techniques with modern flavors to create a unique seafood experience.'
};

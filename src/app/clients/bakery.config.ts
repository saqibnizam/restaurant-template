import { RestaurantConfig } from '../models/restaurant-config.model';

export const BAKERY_CONFIG: RestaurantConfig = {
  id: 'sweet-loaf',
  name: 'Sweet Loaf Bakery',
  businessType: 'Bakery',
  logo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Cafe Warm',
    primaryColor: '#D2691E',
    secondaryColor: '#FAEBD7',
    backgroundColor: '#FFF8DC',
    textColor: '#5D4037',
    fontFamily: "'Work Sans', sans-serif"
  },
  contact: {
    address: '202 Flour Dr, Pastry City, OR 97201',
    phone: '+1 (555) 753-1594',
    email: 'info@sweetloaf.com',
    whatsapp: '15557531594'
  },
  openingHours: [
    { day: 'Mon - Sat', hours: '5:00 AM - 4:00 PM' },
    { day: 'Sun', hours: '6:00 AM - 1:00 PM' }
  ],
  social: {
    instagram: 'https://instagram.com/sweetloafbakery'
  },
  hero: {
    title: 'Baked Fresh Every Morning',
    subtitle: 'Warm bread and sweet treats straight from our oven to your heart.',
    backgroundImage: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Browse Bakery'
  },
  about: {
    title: 'A Legacy of Baking',
    content: 'Using heirloom recipes passed down through generations, we bring the true taste of artisan baking to your table.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: 'Artisan Breads', description: 'Natural sourdough and whole grains.', icon: 'basket' }
    ]
  },
  menu: {
    categories: ['Cakes', 'Pastries', 'Fresh Bread'],
    items: [
      {
        name: 'Velvet Dream Cake',
        description: 'Rich chocolate layers with smooth buttercream frosting.',
        price: '$35.00',
        category: 'Cakes',
        image: 'https://images.unsplash.com/photo-1578985543217-4f9432ce6107?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Classic Croissant',
        description: 'Buttery, flaky, and golden brown.',
        price: '$3.75',
        category: 'Pastries',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&h=400&q=80'
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=600&q=80'
  ],
  testimonials: [
    { name: 'Grace M.', content: 'The smell of fresh bread every morning is what I live for!', role: 'Neighbor' }
  ],
  offers: [],
  whyChooseUs: [
    { title: 'Traditional Methods', description: 'No short cuts, only excellence.', icon: 'clock-history' }
  ],
  sections: [
    { type: 'Hero', enabled: true, order: 1 },
    { type: 'About', enabled: true, order: 2 },
    { type: 'FeaturedProducts', enabled: true, order: 3 },
    { type: 'Menu', enabled: true, order: 4 },
    { type: 'Gallery', enabled: true, order: 5 },
    { type: 'Contact', enabled: true, order: 6 },
    { type: 'Footer', enabled: true, order: 7 }
  ]
};

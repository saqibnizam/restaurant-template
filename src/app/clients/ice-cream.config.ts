import { RestaurantConfig } from '../models/restaurant-config.model';

export const ICE_CREAM_CONFIG: RestaurantConfig = {
  id: 'frosty-delights',
  name: 'Frosty Delights',
  businessType: 'Ice Cream Shop',
  logo: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Fresh Juice',
    primaryColor: '#FF69B4',
    secondaryColor: '#B0E0E6',
    backgroundColor: '#FFF0F5',
    textColor: '#4B0082',
    fontFamily: "'Quicksand', sans-serif"
  },
  contact: {
    address: '333 Scoop St, Cold Town, VT 05401',
    phone: '+1 (555) 321-4567',
    email: 'hello@frostydelights.com'
  },
  openingHours: [
    { day: 'Everyday', hours: '12:00 PM - 10:00 PM' }
  ],
  social: {
    instagram: 'https://instagram.com/frostydelights'
  },
  hero: {
    title: 'Happiness in Every Scoop',
    subtitle: 'Hand-churned ice cream with unique seasonal flavors.',
    backgroundImage: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'See Flavors'
  },
  about: {
    title: 'Cold & Sweet',
    content: 'Our ice cream is made with milk from local dairy farms and the freshest fruits of the season.',
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: 'Local Dairy', description: 'Fresh from the farm.', icon: 'house-heart' }
    ]
  },
  menu: {
    categories: ['Classic Scoops', 'Gourmet Flavors', 'Sundae Specials'],
    items: [
      {
        name: 'Lavender Honey',
        description: 'Floral lavender notes with a sweet honey swirl.',
        price: '$5.50',
        category: 'Gourmet Flavors',
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&h=400&q=80',
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
    { type: 'Gallery', enabled: true, order: 4 },
    { type: 'Contact', enabled: true, order: 5 },
    { type: 'Footer', enabled: true, order: 6 }
  ]
};

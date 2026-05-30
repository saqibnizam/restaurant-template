import { RestaurantConfig } from '../models/restaurant-config.model';

export const BURGER_CONFIG: RestaurantConfig = {
  id: 'burger-bastion',
  name: 'Burger Bastion',
  businessType: 'Burger Restaurant',
  logo: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Fast Food Vibrant',
    primaryColor: '#FFBA08',
    secondaryColor: '#370617',
    backgroundColor: '#FFFFFF',
    textColor: '#370617',
    fontFamily: "'Montserrat', sans-serif"
  },
  contact: {
    address: '456 Patty Lane, Grill Town, TX 75001',
    phone: '+1 (555) 987-6543',
    email: 'info@burgerbastion.com',
    whatsapp: '15559876543'
  },
  openingHours: [
    { day: 'Mon - Sun', hours: '10:00 AM - 11:00 PM' }
  ],
  social: {
    instagram: 'https://instagram.com/burgerbastion',
    facebook: 'https://facebook.com/burgerbastion'
  },
  hero: {
    title: 'Juicy Burgers, Bold Flavors',
    subtitle: 'The ultimate burger experience you have been craving.',
    backgroundImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'View Menu'
  },
  about: {
    title: 'Grilling Since 2010',
    content: 'Our burgers are made with 100% grass-fed beef, flame-grilled to order, and served on artisanal brioche buns.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: '100% Beef', description: 'Fresh, never frozen beef.', icon: 'check-circle' }
    ]
  },
  menu: {
    categories: ['Classic Burgers', 'Specialty Burgers', 'Sides'],
    items: [
      {
        name: 'The Bastion Burger',
        description: 'Double patty, sharp cheddar, secret sauce, lettuce, and pickles.',
        price: '$13.99',
        category: 'Classic Burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Bacon BBQ Blitz',
        description: 'Single patty, crispy bacon, onion rings, and smoky BBQ sauce.',
        price: '$15.49',
        category: 'Specialty Burgers',
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1550317144-b3bbe026332b?auto=format&fit=crop&w=600&q=80'
  ],
  testimonials: [
    { name: 'Alice Smith', content: 'Hands down the best burger I have ever had. The secret sauce is magic!', role: 'Foodie' }
  ],
  offers: [],
  whyChooseUs: [
    { title: 'Flame Grilled', description: 'That smoky flavor you love.', icon: 'fire' }
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

import { RestaurantConfig } from '../models/restaurant-config.model';

export const FAMILY_CONFIG: RestaurantConfig = {
  id: 'the-gathering-spot',
  name: 'The Gathering Spot',
  businessType: 'Family Restaurant',
  logo: 'https://images.unsplash.com/photo-1547928576-a4a33237bee3?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Cafe Warm',
    primaryColor: '#2E7D32',
    secondaryColor: '#E8F5E9',
    backgroundColor: '#FFFFFF',
    textColor: '#333333',
    fontFamily: "'Inter', sans-serif"
  },
  contact: {
    address: '444 Unity Blvd, Harmony Square, PA 19101',
    phone: '+1 (555) 444-5555',
    email: 'hello@gatheringspot.com'
  },
  openingHours: [
    { day: 'Everyday', hours: '8:00 AM - 9:00 PM' }
  ],
  social: {},
  hero: {
    title: 'Where Families Come Together',
    subtitle: 'Healthy, delicious meals for all generations.',
    backgroundImage: 'https://images.unsplash.com/photo-1547928576-a4a33237bee3?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'View Table'
  },
  about: {
    title: 'A Home Away from Home',
    content: 'We created The Gathering Spot to be a place where families can enjoy wholesome food and create lasting memories.',
    image: 'https://images.unsplash.com/photo-1547928576-a4a33237bee3?auto=format&fit=crop&w=800&q=80'
  },
  menu: {
    categories: ['Breakfast', 'Lunch', 'Kids Menu'],
    items: [
      {
        name: 'Family Brunch Platter',
        description: 'Eggs, pancakes, fresh fruit, and bacon served family-style.',
        price: '$28.00',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237bee3?auto=format&fit=crop&w=400&h=400&q=80',
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
    { type: 'Contact', enabled: true, order: 4 },
    { type: 'Footer', enabled: true, order: 5 }
  ]
};

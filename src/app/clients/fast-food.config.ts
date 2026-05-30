import { RestaurantConfig } from '../models/restaurant-config.model';

export const FAST_FOOD_CONFIG: RestaurantConfig = {
  id: 'speedy-bites',
  name: 'Speedy Bites',
  businessType: 'Fast Food Restaurant',
  logo: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Fast Food Vibrant',
    primaryColor: '#FBC02D',
    secondaryColor: '#D32F2F',
    backgroundColor: '#FFFFFF',
    textColor: '#212121',
    fontFamily: "'Poppins', sans-serif"
  },
  contact: {
    address: '10 Fast St, Quick City, NV 89101',
    phone: '+1 (555) 111-2222',
    email: 'go@speedybites.com'
  },
  openingHours: [
    { day: '24/7', hours: 'Always Open' }
  ],
  social: {},
  hero: {
    title: 'Fast. Fresh. Flavorful.',
    subtitle: 'Delicious meals ready in minutes.',
    backgroundImage: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Grab & Go'
  },
  about: {
    title: 'Quality in a Hurry',
    content: 'We don’t compromise on quality just because we’re fast. Every bite is prepared fresh with the best ingredients.',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80'
  },
  menu: {
    categories: ['Value Meals', 'Sides', 'Drinks'],
    items: [
      {
        name: 'Crispy Chicken Box',
        description: '4 pieces of crispy chicken, fries, and a drink.',
        price: '$10.99',
        category: 'Value Meals',
        image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=400&h=400&q=80',
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

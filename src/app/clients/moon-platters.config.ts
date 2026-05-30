import { RestaurantConfig } from '../models/restaurant-config.model';

export const MOON_PLATTERS_CONFIG: RestaurantConfig = {
  id: 'moon-platters',
  name: 'Moon Platters',
  businessType: 'Platter House',
  logo: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Modern Dark',
    primaryColor: '#673AB7',
    secondaryColor: '#E1BEE7',
    backgroundColor: '#0D0D0D',
    textColor: '#FFFFFF',
    fontFamily: "'Montserrat', sans-serif"
  },
  contact: {
    address: '42 Lunar Street, Silver District, NY 10012',
    phone: '+1 (555) 999-0000',
    email: 'hello@moonplatters.com',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6!2d-73.9!3d40.7'
  },
  openingHours: [
    { day: 'Mon - Sun', hours: '5:00 PM - 2:00 AM' }
  ],
  social: {
    instagram: 'https://instagram.com/moonplatters',
    facebook: 'https://facebook.com/moonplatters'
  },
  hero: {
    title: 'Shared Flavors Under the Moon',
    subtitle: 'Artisanal platters designed for the night owls, the foodies, and the explorers of taste.',
    backgroundImage: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Explore Platters'
  },
  about: {
    title: 'The Platter Philosophy',
    content: 'At Moon Platters, we believe that the best meals are shared. Our curated boards bring together local cheeses, house-cured meats, and seasonal harvests from across the state. Whether you’re here for a midnight snack or a grand feast, we’ve got a platter that tells a story.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: 'Locally Sourced', description: '90% of our ingredients come from within 50 miles.', icon: 'geo-alt' },
      { title: 'Late Night Dining', description: 'Our kitchen stays open until 2 AM every night.', icon: 'moon-stars' }
    ]
  },
  menu: {
    categories: ['Signature Platters', 'Small Bites', 'Liquid Moon (Drinks)'],
    ctaText: 'Add to Board',
    items: [
      {
        name: 'The Harvest Moon Platter',
        description: 'A grand selection of three local cheeses, Prosciutto di Parma, honeycomb, roasted nuts, and seasonal fruits.',
        price: '$34.00',
        category: 'Signature Platters',
        image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Midnight Tapas Board',
        description: 'Chorizo, marinated olives, Manchego cheese, and toasted sourdough.',
        price: '$22.00',
        category: 'Signature Platters',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Eclipse Truffle Fries',
        description: 'Double-fried hand-cut potatoes with truffle oil and shaved parmesan.',
        price: '$12.00',
        category: 'Small Bites',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&h=400&q=80'
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&h=600&q=80'
  ],
  testimonials: [
    { name: 'Elena G.', content: 'The Harvest Moon platter is a work of art. Perfect for a late night date.', role: 'Food Blogger' },
    { name: 'Thomas K.', content: 'Unbeatable vibes and the best cheese selection in the city.', role: 'Night Owl' }
  ],
  offers: [
    { title: 'Date Night Special', description: 'Any Signature Platter + 2 Glasses of Wine', discount: '$50 Fixed', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80' }
  ],
  whyChooseUs: [
    { title: 'Artisanal Curation', description: 'Every platter is hand-assembled with precision and care.', icon: 'palette' },
    { title: 'Midnight Kitchen', description: 'Fresh, gourmet food served until the early hours.', icon: 'clock' }
  ],
  faq: [
    { question: 'Do you offer vegan platters?', answer: 'Yes! We have a dedicated Plant-Based Platter with cashew cheese and house-made hummus.' },
    { question: 'Do I need a reservation?', answer: 'Walk-ins are welcome, but we recommend booking for groups larger than 4 on weekends.' }
  ],
  sections: [
    { type: 'Hero', enabled: true, order: 1 },
    { type: 'About', enabled: true, order: 2 },
    { type: 'FeaturedProducts', enabled: true, order: 3 },
    { type: 'SpecialOffers', enabled: true, order: 4 },
    { type: 'Menu', enabled: true, order: 5 },
    { type: 'WhyChooseUs', enabled: true, order: 6 },
    { type: 'Gallery', enabled: true, order: 7 },
    { type: 'FAQ', enabled: true, order: 8 },
    { type: 'Testimonials', enabled: true, order: 9 },
    { type: 'GoogleMaps', enabled: true, order: 10 },
    { type: 'Contact', enabled: true, order: 11 },
    { type: 'Footer', enabled: true, order: 12 }
  ]
};

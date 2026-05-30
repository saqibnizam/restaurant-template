import { RestaurantConfig } from '../models/restaurant-config.model';

export const HOTEL_CONFIG: RestaurantConfig = {
  id: 'grand-view-dining',
  name: 'Grand View Dining',
  businessType: 'Hotel Restaurant',
  logo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Elegant Hotel',
    primaryColor: '#1A237E',
    secondaryColor: '#BDBDBD',
    backgroundColor: '#FFFFFF',
    textColor: '#212121',
    fontFamily: "'Playfair Display', serif"
  },
  contact: {
    address: 'Grand View Hotel, 17th Floor, 500 Luxury Ave, Miami, FL 33101',
    phone: '+1 (555) 000-1111',
    email: 'dining@grandviewhotel.com',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.518172911762!2d-80.191790!3d25.774265'
  },
  openingHours: [
    { day: 'Breakfast', hours: '6:30 AM - 10:30 AM' },
    { day: 'Lunch', hours: '12:00 PM - 3:00 PM' },
    { day: 'Dinner', hours: '6:00 PM - 11:00 PM' }
  ],
  social: {
    instagram: 'https://instagram.com/grandviewhotel',
    facebook: 'https://facebook.com/grandviewhotel'
  },
  hero: {
    title: 'Exquisite Dining with a View',
    subtitle: 'Elevate your culinary journey at the pinnacle of luxury, where world-class cuisine meets a breathtaking 360-degree skyline panorama.',
    backgroundImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Reserve Your Table'
  },
  about: {
    title: 'Sophistication at New Heights',
    content: 'Perched on the 17th floor of the iconic Grand View Hotel, our dining room provides a sanctuary of elegance above the vibrant pulse of Miami. Led by Executive Chef Julian Vane, our team crafts seasonal menus that celebrate the heritage of coastal Florida while embracing global culinary innovation.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: 'Chef-Led Experience', description: 'Curated tasting menus by Executive Chef Julian Vane.', icon: 'person-workspace' },
      { title: 'Skyline Views', description: 'Uninterrupted panoramic vistas of the Atlantic Ocean.', icon: 'image' }
    ]
  },
  menu: {
    categories: ['Morning Essentials', 'Executive Lunch', 'Dinner Signature'],
    ctaText: 'Reserve to Order',
    items: [
      {
        name: 'Atlantic Lobster Thermidor',
        description: 'Fresh Atlantic lobster simmered in a rich Cognac cream sauce, gratinated with aged Gruyère and tarragon.',
        price: '$58.00',
        category: 'Dinner Signature',
        image: 'https://images.unsplash.com/photo-1553243772-0a1e31ba1ee0?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Truffle-Infused Wagyu Ribeye',
        description: 'Grade A5 Wagyu beef served with black truffle pomme purée and roasted heirloom carrots.',
        price: '$85.00',
        category: 'Dinner Signature',
        image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80'
  ],
  testimonials: [
    { name: 'Robert C.', content: 'A truly magnificent dining experience. The attention to detail in both the food and the service is second to none.', role: 'Elite Traveler' },
    { name: 'Eleanor P.', content: 'Watching the sunset from the 17th floor while enjoying the Lobster Thermidor was the highlight of our stay.', role: 'Hotel Guest' }
  ],
  offers: [
    { title: 'Anniversary Special', description: 'Complimentary champagne and dessert for celebrations.', discount: 'Celebratory', image: 'https://images.unsplash.com/photo-1513585022371-707d92257cd4?auto=format&fit=crop&w=400&q=80' }
  ],
  whyChooseUs: [
    { title: 'In-Room Service', description: 'Enjoy our full restaurant menu from the comfort of your suite.', icon: 'door-open' },
    { title: 'Private Events', description: 'Exclusive dining rooms available for corporate galas and weddings.', icon: 'people' }
  ],
  faq: [
    { question: 'Is there a dress code?', answer: 'We request smart casual attire for breakfast and lunch, and formal/elegant attire for dinner service.' },
    { question: 'Do you accept non-hotel guests?', answer: 'Absolutely! While we prioritize hotel guests, our dining room is open to the public by reservation.' }
  ],
  sections: [
    { type: 'Hero', enabled: true, order: 1 },
    { type: 'About', enabled: true, order: 2 },
    { type: 'FeaturedProducts', enabled: true, order: 3 },
    { type: 'WhyChooseUs', enabled: true, order: 4 },
    { type: 'Menu', enabled: true, order: 5 },
    { type: 'Gallery', enabled: true, order: 6 },
    { type: 'Testimonials', enabled: true, order: 7 },
    { type: 'FAQ', enabled: true, order: 8 },
    { type: 'ReservationCTA', enabled: true, order: 9 },
    { type: 'GoogleMaps', enabled: true, order: 10 },
    { type: 'Contact', enabled: true, order: 11 },
    { type: 'Footer', enabled: true, order: 12 }
  ]
};

import { RestaurantConfig } from '../models/restaurant-config.model';

export const BBQNIGHTS_CONFIG: RestaurantConfig = {
  id: 'bbqnights',
  name: 'BBQ Nights',
  logo: 'assets/images/bbqnights-hero',
  theme: {
    primaryColor: '#3d0c02',
    secondaryColor: '#d4a373',
    backgroundColor: '#fefae0',
    textColor: '#283618',
    fontFamily: "'Georgia', serif"
  },
  contact: {
    address: '789 Grill Road, Smoky Valley',
    phone: '+1 555 000 111',
    email: 'grill@bbqnights.com',
    openingHours: 'Tue-Sun: 4pm - 11pm'
  },
  social: {
    facebook: 'https://facebook.com/bbqnights'
  },
  hero: {
    title: 'Smoky & Delicious BBQ',
    subtitle: 'Slow-cooked meats with our signature sauce.',
    backgroundImage: 'assets/images/bbqnights-hero',
    ctaText: 'Reserve a Table'
  },
  menu: {
    categories: ['Steaks', 'Ribs', 'Sides'],
    items: [
      { name: 'Ribeye Steak', description: 'Juicy 12oz ribeye', price: '$35', category: 'Steaks' },
      { name: 'BBQ Spare Ribs', description: 'Fall-off-the-bone ribs', price: '$28', category: 'Ribs' }
    ]
  },
  features: {
    showGallery: false,
    showTestimonials: true,
    showHero: true,
    showMenu: true,
    showContact: true
  },
  about: 'Founded in 1995, BBQ Nights has been a staple of Smoky Valley. We pride ourselves on our slow-cooking methods and secret signature sauce that has been passed down through generations. Our meats are sourced from local farmers to ensure the highest quality and freshness.'
};

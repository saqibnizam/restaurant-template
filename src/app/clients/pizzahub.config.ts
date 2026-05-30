import { RestaurantConfig } from '../models/restaurant-config.model';

export const PIZZAHUB_CONFIG: RestaurantConfig = {
  id: 'pizzahub',
  name: 'PizzaHub',
  logo: 'assets/logos/pizzahub.png',
  theme: {
    primaryColor: '#e63946',
    secondaryColor: '#f1faee',
    backgroundColor: '#ffffff',
    textColor: '#1d3557',
    fontFamily: "'Roboto', sans-serif"
  },
  contact: {
    address: '456 Pizza Lane, Crust Town',
    phone: '+1 987 654 321',
    email: 'hello@pizzahub.com',
    openingHours: 'Mon-Sun: 10am - 11pm'
  },
  social: {
    instagram: 'https://instagram.com/pizzahub',
    twitter: 'https://twitter.com/pizzahub'
  },
  hero: {
    title: 'The Best Pizza in Town',
    subtitle: 'Hand-tossed dough and fresh ingredients.',
    backgroundImage: 'assets/images/pizzahub-hero.jpg',
    ctaText: 'Order Now'
  },
  menu: {
    categories: ['Classic Pizzas', 'Gourmet Pizzas', 'Drinks'],
    items: [
      { name: 'Margherita', description: 'Tomato, mozzarella, and basil', price: '$12', category: 'Classic Pizzas' },
      { name: 'Pepperoni', description: 'Spicy pepperoni with mozzarella', price: '$15', category: 'Classic Pizzas' }
    ]
  },
  features: {
    showGallery: true,
    showTestimonials: false,
    showHero: true,
    showMenu: true,
    showContact: true
  }
};

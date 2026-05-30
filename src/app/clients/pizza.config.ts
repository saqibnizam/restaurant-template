import { RestaurantConfig } from '../models/restaurant-config.model';

export const PIZZA_CONFIG: RestaurantConfig = {
  id: 'pizza-paradise',
  name: 'Pizza Paradise',
  businessType: 'Pizza Restaurant',
  logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Fast Food Vibrant',
    primaryColor: '#E63946',
    secondaryColor: '#F1FAEE',
    backgroundColor: '#FFFFFF',
    textColor: '#1D3557',
    fontFamily: "'Poppins', sans-serif"
  },
  contact: {
    address: '123 Pizza Street, Crusty Valley, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'hello@pizzaparadise.com',
    whatsapp: '15551234567',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2151523599305!2d-73.987844124245!3d40.757978771387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1717070000000!5m2!1sen!2sus'
  },
  openingHours: [
    { day: 'Mon - Thu', hours: '11:00 AM - 10:00 PM' },
    { day: 'Fri - Sat', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 9:00 PM' }
  ],
  social: {
    facebook: 'https://facebook.com/pizzaparadise',
    instagram: 'https://instagram.com/pizzaparadise',
    twitter: 'https://twitter.com/pizzaparadise'
  },
  hero: {
    title: 'Authentic Wood-Fired Pizza',
    subtitle: 'Handcrafted with love using traditional Italian recipes and our signature 72-hour fermented dough.',
    backgroundImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'View Menu'
  },
  about: {
    title: 'A Slice of Tradition',
    content: 'Founded by the Romano family in 1995, Pizza Paradise has remained committed to the authentic Neapolitan tradition. Every pizza is stretched by hand and baked at 900°F in our custom wood-fired oven.',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: 'DOP Ingredients', description: 'Certified San Marzano tomatoes.', icon: 'patch-check' },
      { title: 'Artisanal Dough', description: '72-hour slow fermentation process.', icon: 'moisture' }
    ]
  },
  menu: {
    categories: ['Signature Pizzas', 'Handmade Sides', 'Desserts'],
    ctaText: 'Add to Order',
    items: [
      {
        name: 'Margherita D.O.C',
        description: 'San Marzano tomatoes, buffalo mozzarella, fresh basil, and extra virgin olive oil.',
        variants: [
          { label: 'Medium 12"', price: '$15.99' },
          { label: 'Large 14"', price: '$19.99' }
        ],
        category: 'Signature Pizzas',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Truffle Mushroom',
        description: 'Wild mushrooms, truffle oil, taleggio cheese, and fresh thyme on a white base.',
        variants: [
          { label: 'Medium 12"', price: '$18.99' },
          { label: 'Large 14"', price: '$22.99' }
        ],
        category: 'Signature Pizzas',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Garlic Herb Knots',
        description: 'Hand-tied dough knots baked with roasted garlic and fine Italian herbs.',
        price: '$6.99',
        category: 'Handmade Sides',
        image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&h=400&q=80'
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1593504049359-74330189a355?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&h=600&q=80'
  ],
  testimonials: [
    { name: 'Marco Rossi', content: 'As an Italian expat, this is the only place that reminds me of home. The crust is absolutely perfect.', role: 'Food Critic' },
    { name: 'Sarah Jenkins', content: 'Best pizza delivery in the city. Always arrives hot and the ingredients are noticeably fresh.', role: 'Loyal Customer' }
  ],
  offers: [
    { title: 'Weekday Feast', description: 'Get 2 Large Pizzas + 2 Sides', discount: '20% OFF', code: 'FEAST20', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' }
  ],
  whyChooseUs: [
    { title: 'Lightning Fast', description: 'Optimized delivery routes ensuring your pizza arrives within 30 minutes.', icon: 'lightning-charge' },
    { title: 'Quality First', description: 'We never compromise on our sourcing or traditional methods.', icon: 'award' }
  ],
  faq: [
    { question: 'Do you offer gluten-free crust?', answer: 'Yes! We offer a gluten-friendly cauliflower-based crust for all our 12" pizzas.' },
    { question: 'What is your delivery radius?', answer: 'We deliver within a 5-mile radius of our Valley location.' }
  ],
  sections: [
    { type: 'Hero', enabled: true, order: 1 },
    { type: 'SpecialOffers', enabled: true, order: 2 },
    { type: 'About', enabled: true, order: 3 },
    { type: 'FeaturedProducts', enabled: true, order: 4 },
    { type: 'Menu', enabled: true, order: 5 },
    { type: 'WhyChooseUs', enabled: true, order: 6 },
    { type: 'FAQ', enabled: true, order: 7 },
    { type: 'Gallery', enabled: true, order: 8 },
    { type: 'Testimonials', enabled: true, order: 9 },
    { type: 'GoogleMaps', enabled: true, order: 10 },
    { type: 'Contact', enabled: true, order: 11 },
    { type: 'Footer', enabled: true, order: 12 }
  ]
};

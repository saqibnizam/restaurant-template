import { RestaurantConfig } from '../models/restaurant-config.model';

export const JUICE_CONFIG: RestaurantConfig = {
  id: 'pure-squeeze',
  name: 'Pure Squeeze',
  businessType: 'Juice Bar',
  logo: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b2?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Fresh Juice',
    primaryColor: '#4CAF50',
    secondaryColor: '#FFC107',
    backgroundColor: '#F9FFF9',
    textColor: '#1B5E20',
    fontFamily: "'Quicksand', sans-serif"
  },
  contact: {
    address: '101 Wellness Way, Green Park, CA 90210',
    phone: '+1 (555) 357-9512',
    email: 'fresh@puresqueeze.com',
    whatsapp: '15553579512',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248359218!2d-118.41!3d34.07'
  },
  openingHours: [
    { day: 'Mon - Fri', hours: '7:00 AM - 7:00 PM' },
    { day: 'Sat - Sun', hours: '8:00 AM - 6:00 PM' }
  ],
  social: {
    instagram: 'https://instagram.com/puresqueeze',
    facebook: 'https://facebook.com/puresqueeze'
  },
  hero: {
    title: 'Pure Plants, Pure Power',
    subtitle: 'Cold-pressed, raw, and organic. Rejuvenate your body with nature’s most potent fuel.',
    backgroundImage: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Shop All Juices'
  },
  about: {
    title: 'The Cold-Pressed Difference',
    content: 'We believe that health should be accessible and delicious. Unlike traditional juicing, our cold-press method uses thousands of pounds of pressure to extract every drop of liquid from our organic produce without heat or oxidation. This preserves the vital enzymes and nutrients, giving you a shelf-stable, nutrient-dense boost that tastes exactly like the fruit it came from.',
    image: 'https://images.unsplash.com/photo-1543083477-4f79cddbb0d5?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: '100% Organic', description: 'Sourced from certified organic local farms.', icon: 'leaf' },
      { title: 'No Added Sugar', description: 'Sweetened only by nature.', icon: 'shield-check' }
    ]
  },
  menu: {
    categories: ['Cold-Pressed Juices', 'Wellness Shots', 'Acai Bowls', 'Power Smoothies'],
    ctaText: 'Add to Bag',
    items: [
      {
        name: 'The Green Giant',
        description: 'Kale, spinach, green apple, cucumber, celery, lemon, and ginger. Our most nutrient-dense green juice.',
        price: '$9.50',
        category: 'Cold-Pressed Juices',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Immunity Warrior Shot',
        description: 'Concentrated ginger, turmeric, lemon, and cayenne pepper. The ultimate cold-fighter.',
        price: '$4.50',
        category: 'Wellness Shots',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Amazonian Acai Bowl',
        description: 'Organic acai topped with gluten-free granola, banana, strawberries, and a drizzle of almond butter.',
        price: '$12.95',
        category: 'Acai Bowls',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&h=400&q=80'
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1622597467836-f3285f2131b2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=600&q=80'
  ],
  testimonials: [
    { name: 'Chloe V.', content: 'Perfect post-yoga fuel. The Green Giant gives me so much energy without the caffeine crash.', role: 'Yoga Instructor' },
    { name: 'Marcus T.', content: 'I started the 3-day cleanse and I feel like a new person. The delivery was seamless!', role: 'Loyal Customer' }
  ],
  offers: [
    { title: 'Cleanse Program', description: 'Pre-order a 3-day juice cleanse (18 juices).', discount: '15% OFF', image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80' }
  ],
  whyChooseUs: [
    { title: 'Eco-Friendly Glass', description: 'We use glass bottles to preserve taste and help the planet.', icon: 'recycle' },
    { title: 'Local Partnerships', description: 'Supporting local farmers in every bottle.', icon: 'people' }
  ],
  faq: [
    { question: 'How long do the juices last?', answer: 'Because our juices are raw and unpasteurized, they stay fresh for up to 4 days when refrigerated.' },
    { question: 'What is a cold-press?', answer: 'It is a method of juicing that uses a hydraulic press to extract juice from fruit and vegetables without heat, preserving 3-5x more nutrients.' }
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
    { type: 'WhatsAppCTA', enabled: true, order: 12 },
    { type: 'Footer', enabled: true, order: 13 }
  ]
};

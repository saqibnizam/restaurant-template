import { RestaurantConfig } from '../models/restaurant-config.model';

export const BBQ_CONFIG: RestaurantConfig = {
  id: 'smoke-house',
  name: 'Smoke House BBQ',
  businessType: 'BBQ Restaurant',
  logo: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Modern Dark',
    primaryColor: '#BF360C',
    secondaryColor: '#FFCCBC',
    backgroundColor: '#121212',
    textColor: '#F5F5F5',
    fontFamily: "'Roboto', sans-serif"
  },
  contact: {
    address: '666 Pitmaster Dr, Austin, TX 78701',
    phone: '+1 (555) 666-1234',
    email: 'pit@smokehousebbq.com',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.2232938838383!2d-97.74306!3d30.267153'
  },
  openingHours: [
    { day: 'Tue - Sun', hours: '11:00 AM - Until Sold Out' },
    { day: 'Monday', hours: 'Closed for Pit Maintenance' }
  ],
  social: {
    facebook: 'https://facebook.com/smokehousebbq',
    instagram: 'https://instagram.com/smokehouse_pit'
  },
  hero: {
    title: 'Legendary Texas BBQ',
    subtitle: 'Prime meats, aged post oak, and 16 hours of patience. We do it the hard way because it’s the only way.',
    backgroundImage: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Explore the Pit'
  },
  about: {
    title: 'The Art of the Smoke',
    content: 'Born in the heart of the Hill Country, Smoke House BBQ is a tribute to the legendary pitmasters of Central Texas. Our 1000-gallon offset smokers run 24/7, fueled exclusively by seasoned post oak to achieve that perfect mahogany bark and deep smoke ring.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: 'Prime Cuts Only', description: 'We source only USDA Prime brisket and heritage breed pork.', icon: 'award' },
      { title: 'Offset Smoking', description: 'Traditional indirect heat for unmatched flavor and tenderness.', icon: 'fire' }
    ]
  },
  menu: {
    categories: ['The Smoker', 'Pitmaster Platters', 'Scratch-Made Sides'],
    ctaText: 'Add to Tray',
    items: [
      {
        name: 'The Austin Brisket Tray',
        description: 'Half pound of fatty or lean brisket, hand-sliced to order. Served with pickles, onions, and white bread.',
        price: '$24.99',
        category: 'Pitmaster Platters',
        image: 'https://images.unsplash.com/photo-1599321955419-78a9d2016274?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Dino Beef Rib',
        description: 'A massive single beef rib, smoked until it melts off the bone. Limited daily availability.',
        price: '$32.00',
        category: 'The Smoker',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Jalapeño Cheddar Sausage',
        description: 'House-made sausage links with sharp cheddar and fresh jalapeños.',
        price: '$8.00',
        category: 'The Smoker',
        image: 'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?auto=format&fit=crop&w=400&h=400&q=80'
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&h=600&q=80'
  ],
  testimonials: [
    { name: 'Tex R.', content: 'The bark on this brisket is perfection. Hands down the best pit in Austin.', role: 'Texas BBQ Guide' },
    { name: 'Jimmy Lee', content: 'Came for the ribs, stayed for the sausage. Don’t skip the peach cobbler!', role: 'Loyal Local' }
  ],
  offers: [
    { title: 'Tailgate Pack', description: 'Feed 10 people with brisket, ribs, and 3 large sides.', discount: '$150 Total', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80' }
  ],
  whyChooseUs: [
    { title: 'Authenticity', description: 'No gas, no electricity, just wood and smoke.', icon: 'patch-check' },
    { title: 'Sold Out Daily', description: 'We smoke fresh every single day. When it’s gone, it’s gone!', icon: 'hourglass-split' }
  ],
  faq: [
    { question: 'What time should I arrive?', answer: 'We open at 11:00 AM, but the line usually starts at 10:30 AM. We recommend arriving early!' },
    { question: 'Do you take pre-orders?', answer: 'We accept pre-orders for 5lbs of meat or more with at least 48 hours notice.' }
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

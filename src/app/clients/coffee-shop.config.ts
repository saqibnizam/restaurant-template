import { RestaurantConfig } from '../models/restaurant-config.model';

export const COFFEE_CONFIG: RestaurantConfig = {
  id: 'bean-haven',
  name: 'Bean Haven',
  businessType: 'Coffee Shop',
  logo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=100&h=100&q=80',
  theme: {
    preset: 'Cafe Warm',
    primaryColor: '#6F4E37',
    secondaryColor: '#EED9C4',
    backgroundColor: '#FFFBF5',
    textColor: '#3E2723',
    fontFamily: "'Cabin', sans-serif"
  },
  contact: {
    address: '789 Roasted Blvd, Aroma Heights, WA 98101',
    phone: '+1 (555) 246-8101',
    email: 'brew@beanhaven.com',
    whatsapp: '15552468101',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.518!2d-122.332!3d47.606'
  },
  openingHours: [
    { day: 'Mon - Fri', hours: '6:00 AM - 7:00 PM' },
    { day: 'Sat - Sun', hours: '7:00 AM - 8:00 PM' }
  ],
  social: {
    instagram: 'https://instagram.com/beanhaven',
    twitter: 'https://twitter.com/beanhaven',
    facebook: 'https://facebook.com/beanhaven'
  },
  hero: {
    title: 'Your Daily Ritual, Refined',
    subtitle: 'Small-batch roasting meets artisanal brewing. Experience coffee as it was meant to be: bold, ethical, and soulful.',
    backgroundImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'View Our Brews'
  },
  about: {
    title: 'From Seed to Sip',
    content: 'At Bean Haven, we don’t just serve coffee; we celebrate the journey of the bean. We partner directly with family-owned farms in Ethiopia, Colombia, and Sumatra to ensure every cup supports sustainable agriculture and fair wages. Our Master Roaster, Clara M., oversees every batch in our micro-roastery to bring out the unique terroir of each origin.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    features: [
      { title: 'Direct Trade', description: 'Eliminating middlemen to ensure farmers get the best price.', icon: 'hand-thumbs-up' },
      { title: 'Zero Waste', description: 'Proudly operating a plastic-free and composting cafe.', icon: 'recycle' }
    ]
  },
  menu: {
    categories: ['The Espresso Bar', 'Pour-Over & Slow Bar', 'Seasonal Sips', 'Artisanal Bakery'],
    ctaText: 'Add to Tray',
    items: [
      {
        name: 'Velvet Signature Latte',
        description: 'Double shot of our Haven House Blend with micro-foamed local organic milk and a hint of Madagascar vanilla.',
        variants: [
          { label: '8oz', price: '$4.75' },
          { label: '12oz', price: '$5.50' },
          { label: '16oz', price: '$6.25' }
        ],
        category: 'The Espresso Bar',
        image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Nitro Cold Brew',
        description: 'Steeped for 18 hours and served on tap for a creamy, stout-like finish with zero bitterness.',
        price: '$6.50',
        category: 'Pour-Over & Slow Bar',
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&h=400&q=80',
        isFeatured: true
      },
      {
        name: 'Honey Lavender Flat White',
        description: 'Delicate floral notes of locally sourced lavender and wildflower honey.',
        price: '$5.95',
        category: 'Seasonal Sips',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&h=400&q=80'
      }
    ]
  },
  gallery: [
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80'
  ],
  testimonials: [
    { name: 'David Lee', content: 'The best place to work and grab a coffee. The vibe is unmatched and the Nitro Cold Brew is life-changing.', role: 'Digital Nomad' },
    { name: 'Sarah M.', content: 'Finally a coffee shop that cares as much about their farmers as they do about their latte art.', role: 'Sustainability Advocate' }
  ],
  offers: [
    { title: 'Morning Commute', description: 'Any Espresso drink + Croissant', discount: '$8.50 Special', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80' }
  ],
  whyChooseUs: [
    { title: 'High-Speed Fiber', description: 'Complimentary 1Gbps WiFi for our patrons.', icon: 'wifi' },
    { title: 'Community Events', description: 'Weekly live acoustic sessions and coffee cupping workshops.', icon: 'music-note' }
  ],
  faq: [
    { question: 'Do you roast your own beans?', answer: 'Yes! We roast every Tuesday and Thursday in our Seattle micro-roastery.' },
    { question: 'Are your beans available for purchase?', answer: 'Absolutely! We sell 12oz bags of all our single-origin and house blends in-store and online.' }
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
    { type: 'OpeningHours', enabled: true, order: 10 },
    { type: 'Contact', enabled: true, order: 11 },
    { type: 'Footer', enabled: true, order: 12 }
  ]
};

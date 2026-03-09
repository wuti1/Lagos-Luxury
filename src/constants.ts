import { Property, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Azure Penthouse',
    location: 'Eko Atlantic, Victoria Island',
    price: '$1,250,000',
    type: 'Condo',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 3500,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'A masterpiece of modern architecture in the heart of the new Lagos. Floor-to-ceiling windows offer panoramic views of the Atlantic Ocean.',
    features: ['Ocean View', 'Smart Home', 'Private Elevator', 'Infinity Pool']
  },
  {
    id: '2',
    title: 'Heritage Manor Duplex',
    location: 'Old Ikoyi, Lagos',
    price: '$2,100,000',
    type: 'Duplex',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&w=1200&q=80',
    description: 'Classic elegance meets contemporary luxury. This sprawling duplex is nestled in the most prestigious neighborhood of Lagos.',
    features: ['Gated Community', 'Chef\'s Kitchen', 'Home Cinema', 'Wine Cellar']
  },
  {
    id: '3',
    title: 'Skyline Terrace Condo',
    location: 'Banana Island, Lagos',
    price: '$950,000',
    type: 'Condo',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1600607687940-4e7a6a357d19?auto=format&fit=crop&w=1200&q=80',
    description: 'Experience the pinnacle of urban living. This terrace condo features a massive private balcony overlooking the Lagos lagoon.',
    features: ['Lagoon View', 'Gym Access', '24/7 Security', 'Underground Parking']
  },
  {
    id: '4',
    title: 'The Zenith Villa',
    location: 'Lekki Phase 1, Lagos',
    price: '$1,500,000',
    type: 'Duplex',
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    description: 'A contemporary sanctuary designed for the modern family. High ceilings and open-plan living spaces create an airy, luxurious feel.',
    features: ['Private Pool', 'Solar Powered', 'Automated Gates', 'Staff Quarters']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Olumide Adeyemi',
    role: 'Diaspora Investor, UK',
    content: 'Lagos Luxury Estates made my transition back home seamless. Their attention to detail and understanding of international standards is unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Expatriate Executive',
    content: 'Finding a premium home in Lagos can be daunting. The team here provided exceptional service and found me the perfect condo in Ikoyi.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  }
];

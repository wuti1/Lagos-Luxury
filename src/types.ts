export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Duplex' | 'Condo';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

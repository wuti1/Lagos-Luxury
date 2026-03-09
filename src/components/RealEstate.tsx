import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Search, Home, Building2, User, ChevronRight, Star, ArrowRight, Bed, Bath, Maximize, Shield, Globe, TrendingUp } from 'lucide-react';
import { Property, Testimonial } from '../types';
import { PROPERTIES, TESTIMONIALS } from '../constants';

// --- Navbar Component ---
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-luxury-black flex items-center justify-center">
            <span className="text-white font-serif text-xl font-bold">L</span>
          </div>
          <span className={`font-serif text-xl font-bold tracking-tighter ${isScrolled ? 'text-luxury-black' : 'text-white'}`}>LAGOS LUXURY</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Properties', 'About', 'Investment', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs uppercase tracking-widest font-medium transition-colors ${isScrolled ? 'text-luxury-black hover:text-gold' : 'text-white/80 hover:text-white'}`}>
              {item}
            </a>
          ))}
          <button className="luxury-button">Inquire Now</button>
        </div>

        <button className="md:hidden text-luxury-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-luxury-black' : 'text-white'} /> : <Menu className={isScrolled ? 'text-luxury-black' : 'text-white'} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-10 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Properties', 'About', 'Investment', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-serif border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="luxury-button w-full">Inquire Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" 
          alt="Lagos Skyline" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">Premium Real Estate in Lagos</span>
          <h1 className="text-6xl md:text-8xl text-white leading-[0.9] mb-8">
            Elevate Your <br />
            <span className="italic">Lagos Lifestyle</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
            Exclusive duplexes and condos in Ikoyi, Victoria Island, and Eko Atlantic. Designed for the global elite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="luxury-button !bg-gold hover:!bg-white hover:!text-luxury-black">View Collection</button>
            <button className="px-8 py-3 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white/10 transition-all">Investment Guide</button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.5em]">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

// --- Property Card Component ---
export const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-luxury-black text-white px-3 py-1 text-[10px] uppercase tracking-widest">
          {property.type}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white text-xs uppercase tracking-widest flex items-center gap-2">
            View Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl mb-1">{property.title}</h3>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <MapPin size={14} className="text-gold" /> {property.location}
            </p>
          </div>
          <span className="text-gold font-serif text-xl font-semibold">{property.price}</span>
        </div>
        <div className="flex items-center gap-6 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Bed size={16} className="text-gray-400" /> <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Bath size={16} className="text-gray-400" /> <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Maximize size={16} className="text-gray-400" /> <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Featured Properties Component ---
export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Curated Selection</span>
          <h2 className="text-5xl md:text-6xl leading-tight">Exceptional Residences <br /> Across Lagos</h2>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-luxury-black/10 text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all">All</button>
          <button className="px-6 py-2 border border-luxury-black/10 text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all">Duplexes</button>
          <button className="px-6 py-2 border border-luxury-black/10 text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all">Condos</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROPERTIES.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="luxury-button">Explore Full Portfolio</button>
      </div>
    </section>
  );
};

// --- Why Lagos Component ---
export const WhyLagos = () => {
  const points = [
    {
      icon: <Globe className="text-gold" size={32} />,
      title: "Strategic Hub",
      description: "Lagos is the economic heartbeat of Africa, offering unparalleled business opportunities for expatriates and returnees."
    },
    {
      icon: <TrendingUp className="text-gold" size={32} />,
      title: "High ROI",
      description: "Real estate in Lagos prime areas has consistently outperformed other asset classes, with appreciation rates exceeding 15% annually."
    },
    {
      icon: <Shield className="text-gold" size={32} />,
      title: "Secure Investment",
      description: "We specialize in titled properties with verified documentation, ensuring your investment is safe and transferable."
    }
  ];

  return (
    <section id="investment" className="py-32 bg-luxury-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">Investment Potential</span>
            <h2 className="text-5xl md:text-7xl mb-10 leading-tight">Why Invest in <br /> Lagos Now?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl leading-relaxed">
              For the diaspora and international investors, Lagos represents the new frontier of luxury living and wealth creation. Our properties are strategically located in high-growth corridors.
            </p>
            <div className="space-y-10">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="mt-1">{point.icon}</div>
                  <div>
                    <h4 className="text-xl mb-2">{point.title}</h4>
                    <p className="text-white/40 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" 
                alt="Lagos Lifestyle" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-gold p-10 max-w-xs hidden md:block">
              <p className="text-luxury-black font-serif text-2xl italic">"The best time to invest in Lagos was 10 years ago. The second best time is today."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Component ---
export const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Client Success</span>
          <h2 className="text-5xl md:text-6xl">Trusted by the Elite</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-luxury-cream p-12 relative">
              <div className="absolute top-8 right-8 text-gold/20">
                <Star size={60} fill="currentColor" />
              </div>
              <p className="text-xl italic font-serif mb-10 relative z-10 leading-relaxed text-luxury-black/80">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gold text-sm uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">Get in Touch</span>
          <h2 className="text-5xl md:text-7xl mb-10 leading-tight">Start Your <br /> Journey Home</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-md leading-relaxed">
            Whether you are in London, New York, or Lagos, our consultants are ready to assist you in finding your dream property.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-luxury-cream flex items-center justify-center rounded-full text-gold">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                <p className="text-xl font-serif">+234 800 LUXURY 001</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-luxury-cream flex items-center justify-center rounded-full text-gold">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                <p className="text-xl font-serif">concierge@lagosluxury.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-luxury-cream flex items-center justify-center rounded-full text-gold">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Visit Us</p>
                <p className="text-xl font-serif">15 Glover Road, Ikoyi, Lagos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 shadow-2xl border border-gray-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                <input type="text" className="luxury-input" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Email Address</label>
                <input type="email" className="luxury-input" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Phone Number</label>
              <input type="tel" className="luxury-input" placeholder="+44 700 000 0000" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Property Type Interested In</label>
              <select className="luxury-input appearance-none">
                <option>Duplex</option>
                <option>Condo / Penthouse</option>
                <option>Land / Development</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">Your Message</label>
              <textarea className="luxury-input min-h-[100px]" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button type="submit" className="luxury-button w-full py-5">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gold flex items-center justify-center">
                <span className="text-luxury-black font-serif text-xl font-bold">L</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tighter">LAGOS LUXURY</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              The premier real estate agency for high-net-worth individuals and the diaspora community seeking luxury living in Lagos, Nigeria.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(social => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest text-white/60 hover:text-gold transition-colors">{social}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Properties', 'Investment Guide', 'About Us', 'Contact', 'Privacy Policy'].map(link => (
                <li key={link}><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Receive exclusive off-market listings and market insights.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent outline-none text-sm w-full" />
              <button className="text-gold"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/20">
          <p>© 2026 Lagos Luxury Estates. All Rights Reserved.</p>
          <p>Designed for the Global Elite.</p>
        </div>
      </div>
    </footer>
  );
};

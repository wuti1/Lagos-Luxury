import { Navbar, Hero, FeaturedProperties, WhyLagos, Testimonials, Contact, Footer } from './components/RealEstate';
import { motion } from 'motion/react';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <WhyLagos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

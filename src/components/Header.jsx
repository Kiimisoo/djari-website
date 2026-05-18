import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f1729] shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-gradient-gold">D'Jari</span>
          <span className="text-white text-sm md:text-base font-light">Hair & Beauty</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#d4af37] transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('promotion')} className="text-white hover:text-[#d4af37] transition-colors">
            Promotions
          </button>
          <button onClick={() => scrollToSection('location')} className="text-white hover:text-[#d4af37] transition-colors">
            Location
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#d4af37] transition-colors">
            Contact
          </button>
          <a href="tel:+601139890040">
            <Button className="gradient-gold text-[#0f1729] font-semibold hover:opacity-90">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0f1729] border-t border-[#d4af37]/20"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#d4af37] transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('promotion')} className="text-white hover:text-[#d4af37] transition-colors text-left">
              Promotions
            </button>
            <button onClick={() => scrollToSection('location')} className="text-white hover:text-[#d4af37] transition-colors text-left">
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#d4af37] transition-colors text-left">
              Contact
            </button>
            <a href="tel:+601139890040">
              <Button className="gradient-gold text-[#0f1729] font-semibold w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://horizons-cdn.hostinger.com/993b269f-1fbb-440a-874e-8d5f7842e73b/c6c75fbaa155bdfacda8795513d6a97d.jpg"
          alt="Luxurious salon interior with elegant styling stations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/95 via-[#0f1729]/80 to-[#0f1729]/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Redefine Your Beauty with{' '}
              <span className="text-gradient-gold">Elegance</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#c0c5ce] mb-8 leading-relaxed"
          >
            Experience premium hair, facial, and spa treatments exclusively for women in Melawati. 
            Your journey to radiance begins here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-gold text-[#0f1729] font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Appointment
            </Button>
            <a href="https://wa.me/601139890040" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1729] font-semibold text-lg px-8 py-6 w-full sm:w-auto"
              >
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start text-[#c0c5ce]"
          >
            <div>
              <div className="text-3xl font-bold text-gradient-gold">20+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-gold">5000+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-gold">100%</div>
              <div className="text-sm">Women Only</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#d4af37] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

const Promotion = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="promotion" className="py-20 bg-[#0f1729] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://horizons-cdn.hostinger.com/993b269f-1fbb-440a-874e-8d5f7842e73b/479f5b5597a09c22c7383009054a478d.jpg"
          alt="Spa treatment with relaxing ambiance"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <Gift className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Exclusive Promotions
            </h2>
            <p className="text-xl text-[#c0c5ce] mb-8">
              Enjoy limited-time offers when you book online
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#d4af37]/20 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  New Client Special
                </h3>
                <p className="text-[#c0c5ce] mb-6 leading-relaxed">
                  First-time visitors receive 20% off any premium service package. 
                  Experience the D'Jari difference with our exclusive welcome offer.
                </p>
                <ul className="space-y-3 text-[#c0c5ce]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3"></span>
                    Valid for all hair and facial services
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3"></span>
                    Complimentary consultation included
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3"></span>
                    Book online to claim this offer
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://horizons-cdn.hostinger.com/993b269f-1fbb-440a-874e-8d5f7842e73b/64756d806405bdc8003c82d440e11c5f.jpg"
                  alt="Professional hair styling service"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-[#d4af37] text-[#0f1729] font-bold text-xl px-6 py-3 rounded-full shadow-lg">
                  20% OFF
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-gold text-[#0f1729] font-semibold text-lg px-10 py-6 hover:opacity-90 transition-opacity"
            >
              Claim This Offer
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
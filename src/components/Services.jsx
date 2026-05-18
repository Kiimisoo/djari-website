import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Eye, Flower2 } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling & Scalp Treatment',
    description: 'Expert cuts, coloring, and therapeutic scalp treatments to revitalize your hair from root to tip.',
  },
  {
    icon: Sparkles,
    title: 'Facial & Skin Care',
    description: 'Customized facial treatments using premium products to reveal your natural glow and radiance.',
  },
  {
    icon: Eye,
    title: 'Lash Lifting & Brow Design',
    description: 'Professional lash lifting and precision brow shaping to enhance your natural beauty.',
  },
  {
    icon: Flower2,
    title: 'Muslimah Spa Packages',
    description: 'Exclusive spa experiences in a private, comfortable environment designed for Muslim women.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#f5deb3]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1729] mb-4">
            Our Signature Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From hair to spa, each treatment is designed to bring out your best self
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-luxury hover-lift"
            >
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#0f1729]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f1729] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
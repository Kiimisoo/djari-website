import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1729] mb-4">
            Find Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us and experience the difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#f5deb3]/20 to-white rounded-2xl p-8 shadow-luxury">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#0f1729]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f1729] mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No.301A, Lorong Perak Melawati Square,<br />
                    Taman Melawati, 53100 Kuala Lumpur,<br />
                    Malaysia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#0f1729]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f1729] mb-2">Phone</h3>
                  <a href="tel:+601139890040" className="text-gray-600 hover:text-[#d4af37] transition-colors">
                    +6011-3989 0040
                  </a>
                  <br />
                  <a href="https://wa.me/601139890040" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0f1729]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f1729] mb-2">Email</h3>
                  <a href="mailto:djarihb2000@gmail.com" className="text-gray-600 hover:text-[#d4af37] transition-colors">
                    djarihb2000@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0f1729]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f1729] mb-2">Operating Hours</h3>
                  <p className="text-gray-600">
                    10:00 AM – 7:00 PM<br />
                    <span className="text-red-600 font-semibold">Closed on Wednesdays</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-luxury h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6738234567!2d101.75!3d3.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTMnMTIuMCJOIDEwMcKwNDUnMDAuMCJF!5e0!3m2!1sen!2smy!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="D'Jari Hair & Beauty Salon Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
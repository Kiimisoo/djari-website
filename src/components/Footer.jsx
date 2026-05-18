import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1729] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-gradient-gold">D'Jari</span>
              <span className="text-sm font-light">Hair & Beauty</span>
            </div>
            <p className="text-[#c0c5ce] mb-4">
              Premium beauty and wellness services exclusively for women since 2004.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/djarahairbeautysalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#d4af37]/20 hover:bg-[#d4af37] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/djarahairbeautysalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#d4af37]/20 hover:bg-[#d4af37] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#d4af37] mb-4">Contact Info</h3>
            <div className="space-y-3 text-[#c0c5ce]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  No.301A, Lorong Perak Melawati Square,<br />
                  Taman Melawati, 53100 Kuala Lumpur
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+601139890040" className="text-sm hover:text-[#d4af37] transition-colors">
                  +6011-3989 0040
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:djarihb2000@gmail.com" className="text-sm hover:text-[#d4af37] transition-colors">
                  djarihb2000@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#d4af37] mb-4">Operating Hours</h3>
            <div className="flex items-start space-x-3 text-[#c0c5ce]">
              <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="mb-2">10:00 AM – 7:00 PM</p>
                <p className="text-red-400 font-semibold">Closed on Wednesdays</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-8 text-center text-[#c0c5ce] text-sm">
          <p>&copy; {new Date().getFullYear()} D'Jari Hair & Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
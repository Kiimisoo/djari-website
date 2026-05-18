import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You! 🎉",
      description: "Your booking request has been received. Our beauty consultant will contact you shortly!",
    });

    setFormData({
      name: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#f5deb3]/10 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1729] mb-4">
            Book or Enquire Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in the form below and our beauty consultant will contact you shortly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#0f1729] font-semibold mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#0f1729] font-semibold mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+60 12-345 6789"
                  className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-[#0f1729] font-semibold mb-2 block">
                  Preferred Service *
                </Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#d4af37] focus:ring-[#d4af37] focus:outline-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="hair">Hair Styling & Scalp Treatment</option>
                  <option value="facial">Facial & Skin Care</option>
                  <option value="lash">Lash Lifting & Brow Design</option>
                  <option value="spa">Muslimah Spa Packages</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-[#0f1729] font-semibold mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your beauty goals or any special requests..."
                  rows={4}
                  className="border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-gold text-[#0f1729] font-semibold text-lg py-6 hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit & Get Promo Offer
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
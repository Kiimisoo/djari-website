import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Promotion from '@/components/Promotion';
import Location from '@/components/Location';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>D'Jari Hair & Beauty Salon | Premium Women's Salon in Melawati</title>
        <meta name="description" content="Experience premium hair styling, facials, lash lifting, and spa treatments exclusively for women at D'Jari Hair & Beauty Salon in Taman Melawati, Kuala Lumpur since 2004." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Promotion />
        <Location />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
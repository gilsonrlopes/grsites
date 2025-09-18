import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>GR Sites - Criação de Sites Profissionais para Pequenos Empresários</title>
        <meta name="description" content="Transforme seu negócio com um site profissional! A GR Sites cria sites otimizados para Google, aumentando sua visibilidade online e atraindo mais clientes. Solicite seu orçamento gratuito!" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
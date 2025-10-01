import React, { lazy, Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Helmet } from 'react-helmet';

// 1. CARREGAMENTO IMEDIATO (Critico para o LCP/Tela Inicial)
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// 2. CARREGAMENTO ASSÍNCRONO/PREGUIÇOSO (Code Splitting)
// Estes componentes só serão carregados depois da tela inicial.
const LazyBenefits = lazy(() => import('@/components/Benefits'));
const LazyServices = lazy(() => import('@/components/Services'));
const LazyWhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const LazyTestimonials = lazy(() => import('@/components/Testimonials'));
const LazyFAQ = lazy(() => import('@/components/FAQ'));
const LazyCTA = lazy(() => import('@/components/CTA'));
const LazyFooter = lazy(() => import('@/components/Footer'));

function App() {
  return (
    <>
      <Helmet>
        <title>Criação de Sites Profissionais | Atraia Clientes e Gere Negócios </title>
        <meta name="description" content="Seus clientes já buscam seu serviço no Google. Sem site, eles não encontram você e acham seu concorrente. Solicite agora seu orçamento personalizado!" />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Componentes Críticos (Carregamento Imediato) */}
        <Header />
        <Hero />

        {/* Componentes Abaixo da Dobra (Carregamento Assíncrono via Suspense) */}
        {/* O 'fallback' é o que aparece enquanto o componente está sendo baixado. */}
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-gray-500">Carregando conteúdo...</div>}>
          <LazyBenefits />
          <LazyServices />
          <LazyWhyChooseUs />
          <LazyTestimonials />
          <LazyFAQ />
          <LazyCTA />
          <LazyFooter />
        </Suspense>

        <Toaster />
      </div>
    </>
  );
}

export default App;

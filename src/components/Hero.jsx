import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleGetQuote = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Estamos trabalhando nisso! 🚀",
    });
  };

  return (
    <section id="inicio" className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-4">
        {/* Usando gap-8 lg:gap-12 para gerenciar melhor o espaçamento no mobile */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"> 
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight block"
            >
              Seu Negócio
              <span className="block text-yellow-300">Merece Ser</span>
              <span className="block">Encontrado!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed"
            >
              Transforme seu negócio em uma <strong>máquina de vendas online</strong>! 
              Criamos sites profissionais que aparecem no Google e convertem visitantes em clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a 
                href="https://wa.me/5541999372194?text=Gostaria+de+um+orçamento+para+fazer+meu+site!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-8 py-4 rounded-full font-semibold"
                >
                  Quero Meu Site Agora!
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </a>
              <Button
                onClick={() => document.getElementById('beneficios').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full"
              >
                Ver Benefícios
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                <span>Sites Otimizados</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" aria-hidden="true" />
                <span>Mais Vendas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <span>Mais Clientes</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                alt="Imagem do Google Pesquisa"
                className="rounded-2xl shadow-2xl w-full"
                src="/google.avif"
                fetchpriority="high"
                width={600} 
                height={400} 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              // ✅ CORREÇÃO DE CONTRASTE E OVERFLOW: bg-green-700 e sm:-right-4
              className="absolute -top-4 sm:-right-4 bg-green-700 text-white px-3 py-1 rounded-full font-bold shadow-lg text-sm right-0"
            >
              +300% Vendas!
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              // ✅ CORREÇÃO DE OVERFLOW: sm:-left-4
              className="absolute -bottom-4 sm:-left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold shadow-lg text-sm left-0"
            >
              #1 no Google
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

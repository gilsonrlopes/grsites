import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContact = () => {
    // Abre o WhatsApp em uma nova aba
    window.open("https://wa.me/5541999372194", "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      // Glass effect e fixação
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            {/* Logo otimizado */}
            <img 
              src="/logoheader.webp" 
              alt="Logo da GR Sites"
              className="h-auto max-h-[50px] object-contain"
            />
            
            <span className="text-2xl font-bold text-white">GR Sites</span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Depoimentos
            </button>
            <Button
              onClick={handleContact}
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-full font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button (Acessibilidade Corrigida com aria-label) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-blue-200 transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="text-white hover:text-blue-200 transition-colors text-left"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-blue-200 transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-white hover:text-blue-200 transition-colors text-left"
              >
                Depoimentos
              </button>
              
              <Button
                onClick={handleContact}
                className="bg-white text-blue-600 hover:bg-blue-50 w-fit"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contato
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

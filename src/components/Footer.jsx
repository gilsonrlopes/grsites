import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, Mail, MapPin, Facebook, Instagram, Copy } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  // Você pode definir os links das suas redes sociais aqui.
  const socialLinks = {
    facebook: 'https://www.facebook.com/grsitess',
    instagram: 'https://www.instagram.com/grcriacaodesites/',
  };

  const handleContact = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const copyEmailToClipboard = () => {
    const email = 'contato@grsites.com.br';
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: "E-mail copiado!",
        description: "Endereço de e-mail copiado para a área de transferência.",
      });
    }).catch(err => {
      console.error('Falha ao copiar o e-mail: ', err);
      toast({
        title: "Erro ao copiar!",
        description: "Não foi possível copiar o e-mail. Por favor, tente novamente.",
        variant: "destructive",
      });
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#inicio" className="flex items-center space-x-2 mb-6">
  <img src="/Logo.png" alt="Logo GR Sites" className='h-12 w-auto' />
</a>
            

            <p className="text-gray-300 mb-6 leading-relaxed">
              Criamos sites profissionais e modernos para destacar sua empresa no mundo digital, aumentar sua credibilidade e colocar você à frente da concorrência.
            </p>

            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold mb-6 block">Nossos Serviços</span>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button onClick={handleContact} className="hover:text-blue-400 transition-colors">
                  Sites Institucionais
                </button>
              </li>
              <li>
                <button onClick={handleContact} className="hover:text-blue-400 transition-colors">
                  Otimização SEO
                </button>
              </li>
              <li>
                <button onClick={handleContact} className="hover:text-blue-400 transition-colors">
                  Lojas Virtuais
                </button>
              </li>
              <li>
                <button onClick={handleContact} className="hover:text-blue-400 transition-colors">
                  Manutenção de Sites
                </button>
              </li>
              <li>
                <button onClick={handleContact} className="hover:text-blue-400 transition-colors">
                  Consultoria Digital
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold mb-6 block">Links Rápidos</span>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-blue-400 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-blue-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-blue-400 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold mb-6 block">Contato</span>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a
                  href="https://wa.me/5541999372194?text=Gostaria%20de%20um%20or%C3%A7amento%20para%20criar%20meu%20site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  (41) 99937-2194
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div className="flex items-center space-x-1">
                  <a
                    href="mailto:contato@grsites.com.br"
                    className="hover:text-blue-400 transition-colors"
                  >
                    contato@grsites.com.br
                  </a>
                  <button onClick={copyEmailToClipboard} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Colombo, PR - Brasil</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-600 rounded-lg">
              <p className="text-sm font-semibold mb-2">💬 Atendimento WhatsApp</p>
              <p className="text-sm">Segunda a Quinta: 8h às 18h</p>
              <p className="text-sm">Sexta: 8h às 17h</p>
              <p className="text-sm">Sábado: Não Trabalhamos</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 GR Sites. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Transformando pequenos negócios em grandes sucessos digitais.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
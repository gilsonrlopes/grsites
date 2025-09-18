import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Smartphone, Palette, Code, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const handleGetQuote = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const services = [
    {
      icon: Globe,
      title: "Site Institucional",
      description: "Site completo para apresentar sua empresa, produtos e serviços de forma profissional.",
      features: ["Design Personalizado", "Páginas Ilimitadas", "Formulário de Contato", "Galeria de Fotos"],
      price: "A partir de R$ 2.500",
      popular: false
    },
    {
      icon: Search,
      title: "Site + SEO Avançado",
      description: "Site otimizado para aparecer no Google e atrair mais clientes organicamente.",
      features: ["Tudo do Site Institucional", "Otimização SEO", "Google Analytics", "Palavras-chave Estratégicas"],
      price: "A partir de R$ 1.500",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Loja Virtual Completa",
      description: "E-commerce profissional para vender seus produtos online 24 horas por dia.",
      features: ["Catálogo de Produtos", "Carrinho de Compras", "Pagamento Online", "Gestão de Pedidos"],
      price: "A partir de R$ 3.000",
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano perfeito para transformar seu negócio e 
            <strong> dominar o mercado online!</strong>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg card-hover ${
                service.popular ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleGetQuote}
                className={`w-full py-3 rounded-full font-semibold ${
                  service.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <Palette className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Design Exclusivo</h4>
            <p className="text-gray-600">Cada site é único e criado especialmente para seu negócio</p>
          </div>
          
          <div className="text-center">
            <Code className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Tecnologia Avançada</h4>
            <p className="text-gray-600">Sites rápidos, seguros e otimizados para todos os dispositivos</p>
          </div>
          
          <div className="text-center">
            <Headphones className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Suporte Completo</h4>
            <p className="text-gray-600">Acompanhamento e suporte técnico durante todo o projeto</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
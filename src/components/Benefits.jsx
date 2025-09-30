import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Clock, Shield, Smartphone, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Search,
      title: "Seja Encontrado no Google",
      description: "Seu negócio aparecerá nas primeiras posições quando clientes procurarem seus produtos ou serviços.",
      // A cor do ícone foi mudada de `bg-blue-500` para `bg-indigo-600`
      color: "bg-gradient-to-tr from-indigo-600 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Aumente Suas Vendas",
      description: "Sites profissionais convertem 5x mais visitantes em clientes do que perfis em redes sociais.",
      // A cor do ícone foi mudada de `bg-green-500` para `bg-indigo-600`
      color: "bg-gradient-to-tr from-indigo-600 to-purple-500"
    },
    {
      icon: Clock,
      title: "Trabalhe 24/7",
      description: "Seu site vende enquanto você dorme! Receba pedidos e contatos a qualquer hora do dia.",
      // A cor do ícone foi mudada de `bg-purple-500` para `bg-indigo-600`
      color: "bg-gradient-to-tr from-indigo-600 to-purple-500"
    },
    {
      icon: Shield,
      title: "Credibilidade Profissional",
      description: "Clientes confiam mais em empresas com sites profissionais. Transmita seriedade e qualidade.",
      // A cor do ícone foi mudada de `bg-red-500` para `bg-indigo-600`
      color: "bg-gradient-to-tr from-indigo-600 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Funciona em Qualquer Dispositivo",
      description: "Seu site se adapta perfeitamente a celulares, tablets e computadores. Nunca perca uma venda!",
      // A cor do ícone foi mudada de `bg-yellow-500` para `bg-indigo-600`
      color: "bg-gradient-to-tr from-indigo-600 to-purple-500"
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Veja o crescimento do seu negócio em poucas semanas. Sites otimizados geram resultados imediatos.",
      // A cor do ícone foi mudada de `bg-indigo-500` para `bg-indigo-600`
      color: "bg-gradient-to-tr from-indigo-600 to-purple-500"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-custom-dark">
            Por Que Seu Negócio
            <span className="block">precisa de um Site?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como um site profissional pode <strong>revolucionar</strong> seu negócio 
            e multiplicar seus resultados!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Estatística Impressionante!
            </h3>
            <p className="text-xl mb-2">
              <strong>97% dos consumidores</strong> pesquisam online antes de comprar
            </p>
            <p className="text-lg opacity-90">
              Se você não está online, está perdendo clientes para a concorrência!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

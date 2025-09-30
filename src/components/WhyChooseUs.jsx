import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Clientes Satisfeitos",
      description: "Empresários que transformaram seus negócios"
    },
    {
      icon: Award,
      number: "98%",
      label: "Taxa de Satisfação",
      description: "Nossos clientes recomendam nossos serviços"
    },
    {
      icon: Clock,
      number: "7",
      label: "Dias Úteis",
      description: "Tempo médio para entrega do seu site"
    },
    {
      icon: Target,
      number: "300%",
      label: "Aumento Médio",
      description: "Crescimento nas vendas dos nossos clientes"
    }
  ];

  const differentials = [
    {
      title: "Especialistas em Negócios",
      description: "Entendemos as necessidades específicas de empresários e criamos soluções sob medida."
    },
    {
      title: "Foco em Resultados",
      description: "Não criamos apenas sites bonitos, criamos ferramentas que geram vendas e aumentam sua receita."
    },
    {
      title: "Preço Justo e Transparente",
      description: "Sem pegadinhas ou custos ocultos. Você sabe exatamente o que está pagando e o que vai receber."
    },
    {
      title: "Suporte Personalizado",
      description: "Atendimento direto com nossa equipe. Você não é apenas um número, é nosso parceiro de sucesso."
    }
  ];

  return (
    // ✅ CORREÇÃO 1: Adiciona 'overflow-x-hidden' na seção principal para eliminar rolagem lateral no mobile.
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
            Por Que Escolher a
            <span className="block">GR Sites?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não criamos apenas sites bonitos. Criamos <strong>máquinas de vendas</strong> que trabalham 24h para você!
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {/* ✅ CORREÇÃO A11y: Ícone decorativo */}
                <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-blue-600 mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Differentials Section - Imagem e Texto */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* ✅ CORREÇÃO 2: Adiciona loading="lazy" (Desempenho) e dimensões (CLS) */}
            <img
              alt="Equipe da GR Sites trabalhando em projetos de sites"
              className="rounded-2xl shadow-2xl w-full"
              src="/team.avif" 
              loading="lazy" 
              width={700}
              height={450}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {differential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {differential.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              💡 Nossa Missão
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Fazer empresários <strong>venderem mais online</strong>, criando sites profissionais que transformam visitantes em clientes reais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

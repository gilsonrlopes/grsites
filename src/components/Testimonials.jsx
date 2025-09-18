import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dra. Kelly Ivanics",
      business: "Especialista em Direito Europeu",
      image: "Mulher sorridente proprietária de confeitaria",
      rating: 5,
      text: "Depois que a GR Sites criou meu site, minhas vendas triplicaram! Agora recebo pedidos pelo WhatsApp direto do site todos os dias. Melhor investimento que já fiz!",
      result: "+200% vendas"
    },
    {
      name: "João Santos",
      business: "Oficina Santos Auto",
      image: "Homem mecânico sorrindo em oficina",
      rating: 5,
      text: "Minha oficina agora aparece no Google quando as pessoas procuram 'mecânico perto de mim'. O telefone não para de tocar! A equipe da GR Sites é sensacional.",
      result: "+150% clientes"
    },
    {
      name: "Ana Costa",
      business: "Salão Beleza Pura",
      image: "Mulher cabeleireira profissional sorrindo",
      rating: 5,
      text: "O site ficou lindo e profissional! Minhas clientes adoraram poder agendar online. Economizo tempo e ainda consigo mais agendamentos. Recomendo demais!",
      result: "+80% agendamentos"
    },
    {
      name: "Carlos Oliveira",
      business: "Pizzaria Sabor Italiano",
      image: "Homem pizzaiolo sorridente com uniforme",
      rating: 5,
      text: "Com o site da GR Sites, minha pizzaria virou referência na região. As pessoas encontram facilmente no Google e fazem pedidos online. Vendas dispararam!",
      result: "+250% delivery"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
            Histórias de
            <span className="block">Sucesso Reais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos clientes <strong>transformaram seus negócios</strong> 
            e multiplicaram suas vendas com nossos sites!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover relative"
            >
              <div className="absolute -top-4 -left-4 bg-blue-500 text-white p-3 rounded-full">
                <Quote className="h-6 w-6" />
              </div>

              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                {testimonial.result}
              </div>

              <div className="flex items-center mb-6 mt-4">
                <img
                  alt={testimonial.image}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonial.business}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-lg italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">
              🏆 Resultados Comprovados
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-lg">Negócios Transformados</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">250%</div>
                <div className="text-lg">Aumento Médio em Vendas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
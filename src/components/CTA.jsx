import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CTA = () => {
  // A função handleContact não é mais necessária, pois os botões agora são links diretos.
  // Você pode remover esta função se ela não for usada em outro lugar.
  const handleContact = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe!",
    });
  };

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Pronto Para
            <span className="block text-yellow-300">Transformar Seu Negócio?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Não deixe seus concorrentes saírem na frente! <br />
            <strong> Cada dia sem um site profissional é dinheiro perdido.</strong>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">
              🎯 Oferta Especial por Tempo Limitado!
            </h3>
            
            
            <p>Seu site de Uma Página mais: </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">GRÁTIS</div>
                <div className="text-lg">Consultoria SEO</div>
                <div className="text-sm opacity-80">Valor: R$ 800</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">GRÁTIS</div>
                <div className="text-lg">Google Analytics</div>
                <div className="text-sm opacity-80">Valor: R$ 500</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">GRÁTIS</div>
                <div className="text-lg">Suporte 3 Meses</div>
                <div className="text-sm opacity-80">Valor: R$ 800</div>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-lg opacity-80 line-through mb-2">De: R$ 2.100</div>
              <div className="text-4xl font-bold text-yellow-300">
                Por apenas: R$ 1.500
              </div>
              <div className="text-sm opacity-80 mt-2">
                Ou 12x de R$ 160,64
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-red-300 mb-6">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Oferta válida apenas esta semana!</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            {/* Botão "Quero Meu Site Agora!" */}
            {/* A tag <a> envolve o Button para transformá-lo em um link direto para o WhatsApp. */}
            <a 
              href="https://wa.me/5541999372194?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20fazer%20meu%20site!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl px-12 py-6 rounded-full font-bold pulse-animation"
              >
                <Phone className="mr-3 h-6 w-6" />
                Quero Meu Site Agora!
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </a>
            
            {/* Botão "Falar no WhatsApp" */}
            {/* A tag <a> envolve o Button para transformá-lo em um link direto. */}
            <a 
              href="https://wa.me/5541999372194?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20a%20criação%20do%20meu%20site."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                onClick={handleContact} // Mantido, caso queira a toast
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-6 rounded-full font-bold"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-2xl font-bold mb-2">⚡ Entrega Rápida</div>
              <div className="opacity-80">Seu site pronto em até 7 dias</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">🛡️ Garantia Total</div>
              <div className="opacity-80">30 dias para aprovação ou dinheiro de volta</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">📞 Suporte VIP</div>
              <div className="opacity-80">Atendimento personalizado sempre</div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-lg mt-8 opacity-80"
          >
            ⏰ <strong>Atenção:</strong> Temos apenas 5 vagas disponíveis este mês para garantir a qualidade do atendimento!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
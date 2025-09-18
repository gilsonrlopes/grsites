import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Por que minha empresa precisa de um site?",
    answer:
      "Um site é como a vitrine da sua empresa na internet. Ele ajuda novos clientes a encontrarem você no Google, dá mais credibilidade ao seu negócio e funciona 24 horas por dia. Mesmo que você já tenha redes sociais, o site é um lugar oficial, só seu, para apresentar seus produtos ou serviços de forma profissional."
  },
  {
    question: "O que é um site institucional?",
    answer:
      "É um site simples que apresenta sua empresa, seus produtos ou serviços, formas de contato e, às vezes, um blog. Ele serve como cartão de visitas online, ideal para negócios que querem apenas mostrar quem são e como os clientes podem falar com eles."
  },
  {
    question: "O que é uma landing page?",
    answer:
      "Uma landing page é uma página única, criada com um objetivo específico: captar clientes. Pode ter um formulário, botão de WhatsApp ou outra chamada para ação. É muito usada para divulgar promoções, eventos ou campanhas de marketing."
  },
  {
    question: "Quanto custa para criar um site?",
    answer:
      "Não existe um valor fixo. O preço depende do tipo de site que você quer (institucional, loja virtual, landing page), da quantidade de páginas e das funcionalidades. Criamos pacotes sob medida para o que você precisa. Conte para a gente o que quer e enviamos um orçamento sem compromisso."
  },
  {
    question: "Qual o prazo para a entrega do site?",
    answer:
      "Sites simples podem ficar prontos em 2 a 4 semanas. Projetos maiores, como lojas virtuais, podem levar de 2 a 4 meses. Sempre combinamos o prazo antes de começar para que você saiba exatamente quando seu site ficará no ar."
  },
  {
    question: "O que é domínio e hospedagem? Eu preciso disso?",
    answer:
      "O domínio é o nome do seu site (por exemplo, www.suaempresa.com.br). A hospedagem é o 'lugar' onde seu site fica guardado na internet. Sem eles, o site não aparece para ninguém. Mas pode ficar tranquilo, nós ajudamos a registrar e configurar tudo para você."
  },
  {
    question: "O que é um site responsivo e por que isso importa?",
    answer:
      "Um site responsivo é aquele que se adapta a qualquer tela: celular, tablet ou computador. Isso é importante porque a maioria das pessoas hoje acessa a internet pelo celular. Um site responsivo garante que seus clientes tenham uma boa experiência em qualquer dispositivo."
  },
  {
    question: "Posso atualizar o conteúdo do site depois de pronto?",
    answer:
      "Sim! Entregamos o site com um painel simples para você mesmo trocar textos, fotos e posts de blog quando quiser, sem precisar saber programar."
  },
  {
    question: "Vocês fazem o site aparecer no Google (SEO)?",
    answer:
      "Sim! Construímos o site de forma que o Google consiga ler e mostrar nas buscas. Isso aumenta as chances de novos clientes encontrarem você. Mas lembre-se: aparecer na primeira posição depende também de outros fatores, como concorrência e tempo."
  },
  {
    question: "Vocês integram o site com WhatsApp, Instagram ou outras ferramentas?",
    answer:
      "Sim! Podemos colocar botões para o cliente chamar você no WhatsApp, links para redes sociais, formulários de contato e até integrações com ferramentas de marketing para você captar leads."
  },
  {
    question: "O site será rápido e seguro?",
    answer:
      "Sim. Seguimos boas práticas para que o site carregue rápido e tenha certificado de segurança (cadeado no navegador). Isso passa mais confiança para seus clientes."
  },
  {
    question: "Vocês oferecem manutenção depois que o site fica pronto?",
    answer:
      "Sim! Temos planos de manutenção que incluem suporte técnico, atualizações de segurança e pequenos ajustes no conteúdo. Assim você não precisa se preocupar com a parte técnica."
  },
  {
    question: "Preciso ter CNPJ para fazer um site?",
    answer:
      "Não! Qualquer pessoa pode ter um site. Mas se você tem um negócio, é interessante ter CNPJ para poder emitir nota fiscal e passar mais credibilidade."
  },
  {
    question: "Posso parcelar o valor do site?",
    answer:
      "Sim! Oferecemos condições de pagamento que cabem no seu bolso. Fale com a gente e montamos o melhor plano para você."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre{" "}
            <strong>criação de sites, landing pages e presença online</strong>.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl border border-gray-100"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-800 text-lg">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 mb-9 mt-12">
              Ainda tem dúvidas? Fale com nossa equipe e receba uma consultoria gratuita!
            </p>
            <a
              href="/contato"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Falar com um especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

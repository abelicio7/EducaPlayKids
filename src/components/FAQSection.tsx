import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos pagamento via M-Pesa e E-Mola. Após a confirmação, você recebe o material imediatamente no seu WhatsApp."
    },
    {
      question: "Como recebo o material?",
      answer: "Você recebe os PDFs no WhatsApp logo após a confirmação do pagamento. É rápido e prático!"
    },
    {
      question: "Preciso pagar mensalidade?",
      answer: "Não! O pagamento é único e o acesso é vitalício. Você paga uma vez e pode usar para sempre."
    },
    {
      question: "Para que idade é indicado?",
      answer: "O material é indicado para crianças da primeira infância até o ensino fundamental. As atividades são adaptáveis para diferentes níveis."
    },
    {
      question: "Posso tirar dúvidas?",
      answer: "Sim! Nosso suporte está disponível via WhatsApp, Instagram, Facebook e e-mail. Estamos sempre prontos para ajudar."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! O material é seu para sempre. Você pode imprimir quantas vezes precisar, para todos os seus filhos."
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-4">
              <HelpCircle className="w-8 h-8 text-secondary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Dúvidas <span className="text-secondary">Frequentes</span>
            </h2>
            
            <p className="text-muted-foreground">
              Tudo o que você precisa saber sobre o EDUCA PLAY KIDS
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-soft data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

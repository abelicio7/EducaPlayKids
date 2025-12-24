import { CreditCard, MessageCircle, Printer, PartyPopper } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: CreditCard,
      step: "1",
      title: "Faça o pagamento",
      description: "Pelo M-Pesa ou E-Mola de forma rápida e segura",
      color: "bg-primary",
    },
    {
      icon: MessageCircle,
      step: "2",
      title: "Receba no WhatsApp",
      description: "Os arquivos em PDF são enviados imediatamente",
      color: "bg-secondary",
    },
    {
      icon: Printer,
      step: "3",
      title: "Imprima quando quiser",
      description: "Você pode imprimir quantas vezes desejar",
      color: "bg-mint",
    },
    {
      icon: PartyPopper,
      step: "4",
      title: "Brinque e aprenda",
      description: "Momentos de qualidade com seu filho, longe das telas",
      color: "bg-accent",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4">
            Como Funciona
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            É simples e <span className="text-secondary">rápido</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className={`absolute -top-4 -left-2 w-10 h-10 ${step.color} rounded-xl flex items-center justify-center text-white font-fredoka font-bold text-lg shadow-lg`}>
                {step.step}
              </div>
              
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color}/10 mb-4 mt-2`}>
                <step.icon className={`w-8 h-8`} style={{ color: `hsl(var(--${step.color === 'bg-primary' ? 'primary' : step.color === 'bg-secondary' ? 'secondary' : step.color === 'bg-accent' ? 'accent' : 'foreground'}))` }} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-2xl">♾️</span>
            <span className="font-semibold text-foreground">
              Acesso vitalício — imprima quantas vezes quiser!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

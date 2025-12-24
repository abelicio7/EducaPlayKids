import { Button } from "@/components/ui/button";
import { Check, Zap, Gift, Clock, Infinity } from "lucide-react";
import logoEducaplay from "@/assets/logo-educaplay.png";

const OfferSection = () => {
  const benefits = [
    { icon: Zap, text: "Acesso imediato" },
    { icon: Gift, text: "Material digital em PDF" },
    { icon: Clock, text: "Entrega via WhatsApp" },
    { icon: Infinity, text: "Acesso vitalício" },
    { icon: Check, text: "Sem mensalidades" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="oferta" className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 via-background to-primary/10">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground font-bold rounded-full text-sm mb-4 animate-bounce-gentle">
              🔥 Oferta Especial por Tempo Limitado
            </span>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-float border-2 border-primary/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <img 
                  src={logoEducaplay} 
                  alt="EDUCA PLAY KIDS" 
                  className="h-20 md:h-28 object-contain"
                />
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-muted-foreground line-through text-xl">299 MZN</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                    -50% OFF
                  </span>
                </div>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-muted-foreground">Apenas</span>
                  <span className="text-6xl md:text-7xl font-fredoka font-bold text-accent">149</span>
                  <span className="text-2xl text-muted-foreground">MZN</span>
                </div>
                
                <p className="text-lg text-muted-foreground mt-2">
                  Pagamento Único • Acesso Vitalício
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10">
                      <benefit.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full text-xl"
                onClick={scrollToTop}
              >
                Quero acesso imediato ao EDUCA PLAY KIDS
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-2xl">🔒</span>
                <span className="text-sm text-muted-foreground">
                  Compra 100% segura via M-Pesa ou E-Mola
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;

import { Brain, Hand, BookOpen, Lightbulb, Heart, Smile, Users, Clock, ShieldCheck, ThumbsUp } from "lucide-react";
import productMockup2 from "@/assets/product-mockup-2.png";
import productMockup3 from "@/assets/product-mockup-3.png";

const BenefitsSection = () => {
  const childBenefits = [
    { icon: Brain, text: "Estimula o raciocínio lógico" },
    { icon: Hand, text: "Desenvolve a coordenação motora" },
    { icon: BookOpen, text: "Incentiva a leitura e a escrita" },
    { icon: Lightbulb, text: "Melhora a criatividade" },
    { icon: Heart, text: "Promove momentos de qualidade em família" },
  ];

  const parentBenefits = [
    { icon: Clock, text: "Menos tempo no celular" },
    { icon: Users, text: "Mais interação familiar" },
    { icon: ShieldCheck, text: "Material educativo e confiável" },
    { icon: ThumbsUp, text: "Fácil de usar" },
    { icon: Smile, text: "Sem mensalidades" },
  ];

  return (
    <>
      {/* Child Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary/20 to-mint/30 rounded-3xl blur-2xl" />
                <img 
                  src={productMockup2} 
                  alt="Atividades pedagógicas para crianças" 
                  className="relative w-full max-w-md rounded-2xl shadow-float"
                />
              </div>
            </div>
            
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                Para a Criança
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Benefícios reais para o{" "}
                <span className="text-primary">desenvolvimento</span> do seu filho
              </h2>
              
              <div className="space-y-4">
                {childBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4">
                Para os Pais
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Tranquilidade para você,{" "}
                <span className="text-secondary">aprendizado</span> para seu filho
              </h2>
              
              <div className="space-y-4">
                {parentBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-card hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10">
                      <benefit.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-mint/30 via-secondary/20 to-lavender/30 rounded-3xl blur-2xl" />
                <img 
                  src={productMockup3} 
                  alt="Material educativo para crianças" 
                  className="relative w-full max-w-md rounded-2xl shadow-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;

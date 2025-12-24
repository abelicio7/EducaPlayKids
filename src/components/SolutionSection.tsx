import { Gamepad2, BookOpen, Palette, Heart } from "lucide-react";
import productMockup1 from "@/assets/product-mockup-1.png";

const SolutionSection = () => {
  const features = [
    { icon: Gamepad2, text: "Jogos educativos", color: "bg-primary/20 text-primary" },
    { icon: BookOpen, text: "Estimula leitura, escrita e matemática", color: "bg-secondary/20 text-secondary" },
    { icon: Palette, text: "Atividades lúdicas e criativas", color: "bg-mint text-navy" },
    { icon: Heart, text: "Ideal para brincar em família", color: "bg-accent/20 text-accent" },
  ];

  return (
    <section id="solucao" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4">
              A Solução
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Conheça o{" "}
              <span className="text-gradient">EDUCA PLAY KIDS</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              EDUCA PLAY KIDS é uma coleção de jogos e atividades pedagógicas em PDF, 
              pensadas para ajudar no desenvolvimento das crianças de forma{" "}
              <strong className="text-foreground">divertida, educativa e longe das telas</strong>.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-card transition-all duration-300"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src={productMockup1} 
                alt="EDUCA PLAY KIDS - Coleção de atividades pedagógicas" 
                className="relative w-full max-w-lg rounded-2xl shadow-float animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

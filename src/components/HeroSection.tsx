import { Button } from "@/components/ui/button";
import { Smartphone, Heart, BookOpen } from "lucide-react";
import logoEducaplay from "@/assets/logo-educaplay.png";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Floating icons */}
      <div className="absolute top-1/4 left-8 md:left-16 text-4xl animate-bounce-gentle opacity-60">📚</div>
      <div className="absolute top-1/3 right-8 md:right-16 text-4xl animate-bounce-gentle opacity-60" style={{ animationDelay: '0.5s' }}>✏️</div>
      <div className="absolute bottom-1/4 right-1/4 text-4xl animate-bounce-gentle opacity-60" style={{ animationDelay: '1s' }}>🎨</div>
      
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-up">
            <img 
              src={logoEducaplay} 
              alt="EDUCA PLAY KIDS" 
              className="h-24 md:h-32 mx-auto object-contain"
            />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Smartphone className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              Menos telas, mais aprendizado
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Cansado de ver seu filho{" "}
            <span className="text-accent">preso às telas</span>{" "}
            todos os dias?
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Ajude no desenvolvimento do seu filho com{" "}
            <strong className="text-foreground">jogos pedagógicos divertidos, educativos</strong>{" "}
            e longe do celular.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToOffer}
              className="group"
            >
              <Heart className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Quero ajudar meu filho a aprender brincando
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xl">📱</span>
              <span className="text-sm font-medium">Entrega via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xl">💰</span>
              <span className="text-sm font-medium">Pagamento único</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xl">♾️</span>
              <span className="text-sm font-medium">Acesso vitalício</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--muted))"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

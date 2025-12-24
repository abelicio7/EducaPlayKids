import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const FooterSection = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA */}
      <div className="py-16 md:py-20 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="container text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary-foreground font-fredoka mb-4">
            Menos telas. Mais aprendizado.
          </h2>
          
          <p className="text-xl text-secondary-foreground/90 mb-8">
            Mais momentos em família.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToOffer}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Heart className="w-5 h-5 mr-2" />
            Começar agora por apenas 149 MZN
          </Button>
        </div>
      </div>
      
      {/* Footer info */}
      <div className="py-8 bg-navy">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-fredoka text-xl text-cream mb-1">
                EDUCA PLAY KIDS
              </p>
              <p className="text-sm text-cream/60">
                Desenvolvendo crianças através do brincar
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-cream/60 text-sm">
              <span>WhatsApp</span>
              <span>•</span>
              <span>Instagram</span>
              <span>•</span>
              <span>Facebook</span>
            </div>
          </div>
          
          <div className="border-t border-cream/10 mt-6 pt-6 text-center">
            <p className="text-sm text-cream/40">
              © 2024 EDUCA PLAY KIDS. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

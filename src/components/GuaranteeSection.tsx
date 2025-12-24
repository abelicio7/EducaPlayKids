import { ShieldCheck, HeartHandshake } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-mint/20 via-card to-secondary/10 rounded-3xl p-8 md:p-10 border border-mint/30 shadow-card text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-mint/30 mb-6">
              <ShieldCheck className="w-10 h-10 text-secondary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl text-foreground mb-4">
              Compra <span className="text-secondary">sem risco</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Se por qualquer motivo você não gostar do material, o risco é todo nosso. 
              Estamos aqui para te ajudar.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-foreground">
              <HeartHandshake className="w-5 h-5 text-accent" />
              <span className="font-semibold">
                Sua satisfação é nossa prioridade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

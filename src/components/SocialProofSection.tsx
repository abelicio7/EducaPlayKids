import { GraduationCap, Sparkles, Award } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary/5 via-card to-primary/5 rounded-3xl p-8 md:p-12 border border-border/50 shadow-float">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-4">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                Por que jogos pedagógicos{" "}
                <span className="text-secondary">funcionam</span>?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Estudos mostram que crianças{" "}
                  <strong className="text-foreground">aprendem melhor quando estão se divertindo</strong>
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <Award className="w-10 h-10 text-secondary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Atividades lúdicas tornam o aprendizado{" "}
                  <strong className="text-foreground">mais natural e eficaz</strong>
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
                <GraduationCap className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brincar estimula a{" "}
                  <strong className="text-foreground">curiosidade e criatividade</strong>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-xl">📚</span>
                <span className="text-sm font-semibold text-foreground">Material de Qualidade</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                <span className="text-xl">✨</span>
                <span className="text-sm font-semibold text-foreground">Resultados Comprovados</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-xl">❤️</span>
                <span className="text-sm font-semibold text-foreground">Feito com Amor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

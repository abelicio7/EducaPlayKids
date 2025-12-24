import { Smartphone, Brain, BookOpen, Users, Frown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    { icon: Brain, text: "Falta de concentração" },
    { icon: BookOpen, text: "Dificuldade na aprendizagem" },
    { icon: Users, text: "Pouca interação com a família" },
    { icon: Smartphone, text: "Dependência excessiva de telas" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
            <Frown className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            As telas estão roubando o tempo de{" "}
            <span className="text-accent">infância</span> dos nossos filhos
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Muitas crianças passam horas no celular todos os dias. Isso prejudica a criatividade, 
            a concentração e a interação social — afetando o desenvolvimento saudável.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1 border border-accent/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                  <problem.icon className="w-7 h-7 text-accent" />
                </div>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

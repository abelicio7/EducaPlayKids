import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

const mozambicanNames = [
  { name: "João Matola", city: "Maputo" },
  { name: "Ana Bela", city: "Beira" },
  { name: "Carlos Machava", city: "Nampula" },
  { name: "Maria Esperança", city: "Quelimane" },
  { name: "Pedro Mucavel", city: "Chimoio" },
  { name: "Fátima Mondlane", city: "Tete" },
  { name: "José Nhaca", city: "Xai-Xai" },
  { name: "Rosa Tembe", city: "Matola" },
  { name: "Alberto Cossa", city: "Inhambane" },
  { name: "Lurdes Sitoe", city: "Pemba" },
  { name: "Manuel Chissano", city: "Lichinga" },
  { name: "Teresa Mabjaia", city: "Maputo" },
  { name: "Francisco Langa", city: "Gaza" },
  { name: "Celeste Mabunda", city: "Beira" },
  { name: "Domingos Bila", city: "Nampula" },
  { name: "Graça Macuácua", city: "Matola" },
  { name: "Ernesto Chirindza", city: "Maputo" },
  { name: "Helena Magaia", city: "Quelimane" },
];

const timeAgo = [
  "agora mesmo",
  "há 1 minuto",
  "há 2 minutos",
  "há 3 minutos",
  "há 5 minutos",
  "há 8 minutos",
  "há 10 minutos",
];

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState({
    name: "",
    city: "",
    time: "",
  });

  useEffect(() => {
    const showNotification = () => {
      const randomPerson = mozambicanNames[Math.floor(Math.random() * mozambicanNames.length)];
      const randomTime = timeAgo[Math.floor(Math.random() * timeAgo.length)];
      
      setCurrentPurchase({
        name: randomPerson.name,
        city: randomPerson.city,
        time: randomTime,
      });
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then show every 15-25 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left-full duration-500">
      <div className="bg-white rounded-xl shadow-2xl border border-primary/20 p-4 max-w-xs">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-muted rounded-full p-1 hover:bg-muted/80 transition-colors"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="bg-accent/20 rounded-full p-2 flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-accent" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-sm leading-tight">
              {currentPurchase.name}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              de {currentPurchase.city}
            </p>
            <p className="text-xs text-accent font-medium mt-1">
              acabou de comprar o EDUCA PLAY KIDS
            </p>
            <p className="text-[10px] text-muted-foreground mt-1">
              {currentPurchase.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;

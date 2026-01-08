import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import PurchaseNotification from "@/components/PurchaseNotification";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <PurchaseNotification />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;

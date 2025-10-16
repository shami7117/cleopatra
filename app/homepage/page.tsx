import Image from "next/image";
import Header from "@/components/LandingPage/Header";
import HeroSection from "@/components/LandingPage/HeroSection";
import Features from "@/components/LandingPage/Features";
import AboutSection from "@/components/LandingPage/AboutSection";
import TrustFeatures from "@/components/LandingPage/TrustFeatures";
import SparklBusiness from "@/components/LandingPage/SparklBusiness";
import SparklerOfMonth from "@/components/LandingPage/SparklerOfMonth";
import BookCleaningCTA from "@/components/LandingPage/BookCleaningCTA";
import GlobalFooter from "@/components/GlobalFooter";
import EarningsSection from "@/components/Earn";
import FAQSection from "@/components/Faq";
const CleopatraLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Features />
      <AboutSection />
      <TrustFeatures />
      <EarningsSection />
      <SparklBusiness />
      {/* <SparklerOfMonth /> */}
      <FAQSection />
      <GlobalFooter />
    </div>
  );
};

export default CleopatraLanding;

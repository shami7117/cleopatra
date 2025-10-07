import Image from "next/image";
import Header from "@/components/LandingPage/Header"
import HeroSection from "@/components/LandingPage/HeroSection";
import Features from "@/components/LandingPage/Features";
import AboutSection from "@/components/LandingPage/AboutSection";
import TrustFeatures from "@/components/LandingPage/TrustFeatures";
import WaitlistCTA from "@/components/LandingPage/WaitlistCTA";
import SparklBusiness from "@/components/LandingPage/SparklBusiness";
import SparklerOfMonth from "@/components/LandingPage/SparklerOfMonth";
import PricingTable from "@/components/LandingPage/PricingTable";
import BookCleaningCTA from "@/components/LandingPage/BookCleaningCTA";
import Footer from "@/components/LandingPage/Footer";
const CleopatraLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <HeroSection />
      <Features />
      <AboutSection />
      <TrustFeatures/>
      <WaitlistCTA/>
      <SparklBusiness/>
      <SparklerOfMonth/>
      <PricingTable/>
      <BookCleaningCTA/>
      <Footer/>
    </div>
  );
};

export default CleopatraLanding;
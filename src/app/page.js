import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBarLight from "@/components/ui/NavBarLight";
import NavBar from "@/components/ui/NavBarLight";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import Services from "@/components/FAQ";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <NavBarLight />
        <Hero />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
}

import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBarLight from "@/components/NavBarLight";
import NavBar from "@/components/NavBarLight";
import PrimaryFeatures from "@/components/PrimaryFeatures";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <NavBarLight />
        <Hero />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
}

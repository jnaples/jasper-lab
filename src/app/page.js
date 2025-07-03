import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBarLight from "@/components/ui/NavBarLight";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <NavBarLight />
        <Hero />
        <Services />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
}

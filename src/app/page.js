import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import NavBarLight from "@/components/NavBarLight";
import NavBar from "@/components/NavBarLight";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] p-4 lg:px-6">
      <NavBarLight />
      <Hero />
    </div>
  );
}

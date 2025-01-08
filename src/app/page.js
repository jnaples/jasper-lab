import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] p-4">
      <NavBar />
      <Hero />
    </div>
  );
}

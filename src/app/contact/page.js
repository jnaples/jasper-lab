import ContactSection from "@/components/ContactSection";
import NavBarDark from "@/components/NavBarDark";
import NavBar from "@/components/NavBarDark";

function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] p-4 lg:px-6 bg-black">
      <NavBarDark />
      <ContactSection />
    </div>
  );
}

export default ContactPage;

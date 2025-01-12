import ContactSection from "@/components/ContactSection";
import NavBar from "@/components/NavBar";

function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] p-4 lg:px-6">
      <NavBar />
      <ContactSection />
    </div>
  );
}

export default ContactPage;

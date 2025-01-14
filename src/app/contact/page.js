import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NavBarDark from "@/components/NavBarDark";

function ContactPage() {
  return (
    <div className="bg-black">
      <div className="min-h-screen">
        <NavBarDark />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;

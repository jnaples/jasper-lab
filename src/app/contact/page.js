import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NavBarLight from "@/components/ui/NavBarLight";

function ContactPage() {
  return (
    <div className="">
      <div className="min-h-screen">
        <NavBarLight />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;

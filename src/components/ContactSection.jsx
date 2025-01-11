import ContactUsForm from "./ContactUsForm";
import Container from "./Container";

function ContactSection() {
  return (
    <Container>
      <div className="max-w-96 py-20 mx-auto">
        <ContactUsForm />
      </div>
    </Container>
  );
}

export default ContactSection;

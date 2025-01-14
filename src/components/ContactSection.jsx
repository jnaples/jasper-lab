import ContactUsForm from "./ContactUsForm";
import Container from "./Container";
import Section from "./Section";

function ContactSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto grid grid-cols-1 gap-20 py-20 lg:grid-cols-2">
          <div className="text-white lg:w-2/3">
            <h1 className="mb-20 text-7xl font-thin">Let's chat</h1>
            <p className="mb-6 text-xl font-light">
              Want to learn more about our services or work with us?
            </p>
            <p className="mb-6 text-xl font-light">
              Tell us about your idea, your timeline, how you heard about us,
              and where you’re located.
            </p>
            <p className="mb-6 text-xl font-light">
              Thanks in advance and we'll respond promptly after receiving your
              message.
            </p>
          </div>
          <ContactUsForm />
        </div>
      </Container>
    </Section>
  );
}

export default ContactSection;

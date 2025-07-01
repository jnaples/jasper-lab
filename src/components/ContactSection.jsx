import ContactUsForm from "./ContactUsForm";
import Container from "./ui/Container";
import Section from "./Section";

function ContactSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto grid grid-cols-1 gap-20 py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <h1 className="text-6xl font-semibold">Let's chat</h1>
            <p className="text-xl">
              Want to learn more about our services or work with us?
            </p>
            <p className="text-xl">
              Tell us about your idea, your timeline, how you heard about us,
              and where you’re located.
            </p>
            <p className="text-xl">
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

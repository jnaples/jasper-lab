import ContactUsForm from "./ContactUsForm";
import Container from "./Container";

function ContactSection() {
  return (
    <Container>
      <div className="py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="lg:w-2/3 text-white">
          <h1 className="text-7xl font-thin mb-20">Let's chat</h1>
          <p className="mb-6 text-xl font-light">
            Want to learn more about our services or work with us?
          </p>
          <p className="mb-6 text-xl font-light">
            Tell us about your idea, your timeline, how you heard about us, and
            where you’re located.
          </p>
          <p className="mb-6 text-xl font-light">
            Thanks in advance and we'll respond promptly after receiving your
            message.
          </p>
        </div>
        <ContactUsForm />
      </div>
    </Container>
  );
}

export default ContactSection;

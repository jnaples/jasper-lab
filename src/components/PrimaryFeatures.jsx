import Container from "./Container";
import FeatureCard from "./FeatureCard";
import Section from "./Section";

function PrimaryFeatures() {
  return (
    <Section className="rounded-t-2xl bg-black py-28">
      <Container>
        <h2 className="mb-20 max-w-screen-lg break-words text-4xl font-thin text-white md:text-7xl">
          Our superpowers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="hidden md:block"></div>

          <div className="mt-8 flex flex-col gap-8 md:mt-0">
            <FeatureCard
              heading="Web design"
              description="Our design process brings your ideas to life, effectively communicates your message, and prepares your project for development."
            />
            <FeatureCard
              heading="UI/UX design"
              description="Our UI/UX design process transforms your app ideas into intuitive, engaging interfaces that enhance user experience and bring your vision to life."
            />
          </div>
          <div className="flex flex-col gap-8">
            <FeatureCard
              heading="Webflow development"
              description="Using Webflow, the top no-code platform, our team creates fully custom, production-ready websites and applications designed to impress and win customers."
            />
            <FeatureCard
              heading="Migration to Webflow"
              description="We make migrating your website to Webflow seamless, opening up endless possibilities for growth."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default PrimaryFeatures;

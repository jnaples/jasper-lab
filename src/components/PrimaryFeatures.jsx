import Container from "./Container";
import Section from "./Section";

function PrimaryFeatures() {
  return (
    <Section className="bg-black">
      <Container>
        <h2 className="mb-10 max-w-screen-lg break-words text-4xl font-thin text-white md:text-7xl">
          Our superpowers
        </h2>
      </Container>
    </Section>
  );
}

export default PrimaryFeatures;

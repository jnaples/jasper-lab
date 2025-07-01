import Container from "./ui/Container";
import Section from "./Section";
import { Accordion, FAQAccordion } from "./ui/FAQAccordion";

export default function FAQ() {
  return (
    <Section className="py-10 md:pb-0 md:pt-20">
      <Container>
        <div className="mx-auto w-full space-y-6 md:w-2/3 lg:w-1/2">
          <div className="space-y-2 px-6 font-bold">
            <h3 className="text-4xl">Questions?</h3>
            <h3 className="text-4xl">Here are answers.</h3>
          </div>
          <FAQAccordion />
        </div>
      </Container>
    </Section>
  );
}

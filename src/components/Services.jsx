import Container from "./ui/Container";
import Section from "./Section";

export default function Services() {
  return (
    <Section className="pb-10 pt-20 md:pb-0 md:pt-20">
      <Container>
        <div className="mx-auto w-full space-y-6 md:w-2/3 lg:w-1/2">
          <h3 className="text-center text-4xl font-bold md:text-6xl/[1.1]">
            It's{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-medium"
              style={{ fontStyle: "italic" }}
            >
              "where have you been all my life"
            </span>{" "}
            better
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1 h-28 w-full bg-red-500">sdfds</div>
          <div className="bg-red col-span-1 h-28 w-full"></div>
          <div className="bg-red col-span-1 h-28 w-full"></div>
          <div className="bg-red col-span-1 h-28 w-full"></div>
        </div>
      </Container>
    </Section>
  );
}

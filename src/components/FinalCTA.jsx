import Container from "./ui/Container";
import Section from "./Section";
import cube from "../../public/cube.png";
import Image from "next/image";
import Link from "next/link";
import ContactUsForm from "./ContactUsForm";

export default function FinalCTA() {
  return (
    <Section className="py-10 md:pb-0 md:pt-20" id="talk-to-us">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <div className="relative aspect-square h-20 w-20">
            <Image src={cube} fill className="object-cover" alt="logo" />
          </div>
          <h2 className="max-w-[500px] text-center text-4xl font-bold">
            Businesses we help{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-medium"
              style={{ fontStyle: "italic" }}
            >
              grow
            </span>
            , yours could be{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-medium"
              style={{ fontStyle: "italic" }}
            >
              next
            </span>{" "}
          </h2>
          <div className="mx-auto w-full md:w-2/3 lg:w-1/2">
            <ContactUsForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}

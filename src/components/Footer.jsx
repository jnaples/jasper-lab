import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Container from "./Container";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Section className="">
      <Container>
        <footer>
          <div className="mx-auto border-t border-gray-200 pb-4">
            <p className="mt-8 text-center text-sm text-gray-500">
              &copy; {currentYear} JasperLab, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </Container>
    </Section>
  );
}

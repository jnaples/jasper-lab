import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Container from "./Container";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Section className="bg-black">
      <Container>
        <footer>
          <div className="mx-auto max-w-7xl pb-4 pt-12">
            <div className="flex w-full flex-col items-center justify-center gap-x-6">
              <Link href="/" className="">
                <Image
                  alt="logo"
                  src="/logo-dark.png"
                  width={96}
                  height={24}
                  sizes="100vw"
                  className="w-24"
                />
              </Link>
              <p className="mt-8 text-center text-sm/6 font-thin text-slate-400">
                &copy; {currentYear} JasperLab, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  );
}

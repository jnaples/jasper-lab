import Container from "./ui/Container";
import Section from "./Section";
import Image from "next/image";
import meshOne from "../../public/mesh-1.webp";
import meshTwo from "../../public/mesh-2.webp";
import meshThree from "../../public/mesh-3.webp";
import meshFour from "../../public/mesh-4.webp";
import meshFive from "../../public/mesh-5.webp";
import lock from "../../public/lock.png";
import website from "../../public/website.svg";
import paint from "../../public/paint.svg";
import funnel from "../../public/funnel.svg";
import megaphone from "../../public/megaphone.svg";
import star from "../../public/star.svg";

export default function Services() {
  return (
    <Section className="pb-10 pt-20 md:pb-0 md:pt-20">
      <Container>
        <div className="mx-auto mb-10 w-full space-y-6 md:w-2/3 lg:w-1/2">
          <h3 className="text-center text-4xl font-bold md:text-6xl/[1.1]">
            Everything you need to turn{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-medium"
              style={{ fontStyle: "italic" }}
            >
              clicks
            </span>{" "}
            into{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-medium"
              style={{ fontStyle: "italic" }}
            >
              customers
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-1">
            <div className="relative mb-4 aspect-square h-[160px] w-full md:h-[200px] md:max-w-[200px]">
              <Image
                src={meshOne}
                fill
                className="rounded-3xl object-cover object-top"
                alt="Start up"
                priority
              />
              <Image
                src={website}
                width={80}
                height={80}
                alt="lock"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <p className="mb-1 text-2xl font-bold">
              Web Design/
              <br />
              Redesign
            </p>
            <p>
              Turn your website into a marketing powerhouse that drives more
              customers.
            </p>
          </div>
          <div className="col-span-1">
            <div className="relative mb-4 aspect-square h-[160px] w-full md:h-[200px] md:max-w-[200px]">
              <Image
                src={meshTwo}
                fill
                className="rounded-3xl object-cover object-top"
                alt="Start up"
                priority
              />
              <Image
                src={paint}
                width={80}
                height={80}
                alt="lock"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <p className="mb-1 text-2xl font-bold">
              UI/UX Design
              <br />
              for Apps
            </p>
            <p>Create modern, intuitive experiences users love.</p>
          </div>
          <div className="col-span-1">
            <div className="relative mb-4 aspect-square h-[160px] w-full md:h-[200px] md:max-w-[200px]">
              <Image
                src={meshThree}
                fill
                className="rounded-3xl object-cover object-top"
                alt="Start up"
                priority
              />
              <Image
                src={funnel}
                width={80}
                height={80}
                alt="lock"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <p className="mb-1 text-2xl font-bold">
              Landing Pages
              <br />& Funnels
            </p>
            <p>
              Turn visitors into customers and leads with high converting
              landing pages.
            </p>
          </div>
          <div className="col-span-1">
            <div className="relative mb-4 aspect-square h-[160px] w-full md:h-[200px] md:max-w-[200px]">
              <Image
                src={meshFour}
                fill
                className="rounded-3xl object-cover object-top"
                alt="Start up"
                priority
              />
              <Image
                src={megaphone}
                width={80}
                height={80}
                alt="lock"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <p className="mb-1 text-2xl font-bold">
              Paid Digital Ads
              <br />
              to Scale Fast
            </p>
            <p>
              Drive more customers to your business with data-backed ad
              campaigns.
            </p>
          </div>
          <div className="col-span-1">
            <div className="relative mb-4 aspect-square h-[160px] w-full md:h-[200px] md:max-w-[200px]">
              <Image
                src={meshFive}
                fill
                className="rounded-3xl object-cover object-top"
                alt="Start up"
                priority
              />
              <Image
                src={star}
                width={80}
                height={80}
                alt="lock"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <p className="mb-1 text-2xl font-bold">
              Top-notch Team
              <br /> of Experts
            </p>
            <p>
              Expert-level design and marketing quality to scale your business.
              it.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

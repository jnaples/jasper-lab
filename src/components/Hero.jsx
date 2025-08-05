"use client";

import Image from "next/image";
import BlinkingSubHeading from "@/components/BlinkingSubHeading";
import Container from "./ui/Container";
import Section from "./Section";
import fors from "../../public/fors.webp";
import theresa from "../../public/theresa.webp";
import zorus from "../../public/zorus.webp";
import flowtask from "../../public/flowtask.webp";
import krido from "../../public/krido.webp";
import nguyen from "../../public/nguyen.webp";

export default function Hero() {
  return (
    <Section>
      <Container className="flex flex-col gap-16 p-4 lg:px-8">
        <div className="flex w-full flex-col items-center gap-4">
          <BlinkingSubHeading />
          <h1 className="mx-auto mb-10 max-w-[800px] break-words text-center text-6xl/[1.1] font-bold tracking-tight md:leading-tight">
            Design that brings{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-medium"
              style={{ fontStyle: "italic" }}
            >
              customers
            </span>
            , not just{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-medium"
              style={{ fontStyle: "italic" }}
            >
              compliments
            </span>
          </h1>
        </div>
      </Container>

      <div className="flex gap-2 overflow-scroll">
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={zorus}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
              alt="Start up"
              priority
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={flowtask}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
              alt="FlowTask"
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={krido}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
              alt="KRIDO Wellness"
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={theresa}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
              alt="Your Biz Blueprint"
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={fors}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
              alt="Fors Legal"
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={nguyen}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
              alt="The Nguyen Law Firm"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

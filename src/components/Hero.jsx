"use client";

import Image from "next/image";
import BlinkingSubHeading from "@/components/BlinkingSubHeading";
import Container from "./Container";
import Section from "./Section";
import fors from "../../public/fors.webp";
import theresa from "../../public/theresa.webp";
import zorus from "../../public/zorus.webp";
import flowtask from "../../public/flowtask.webp";

export default function Hero() {
  return (
    <Section>
      <Container className="flex flex-col gap-16 p-4 lg:px-8">
        <div className="flex w-full flex-col items-center gap-4">
          <BlinkingSubHeading />
          <h1 className="mx-auto mb-10 max-w-[800px] break-words text-center text-6xl/[1.1] font-semibold tracking-tight md:leading-tight">
            Design that brings{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-normal"
              style={{ fontStyle: "italic" }}
            >
              customers
            </span>
            , not just{" "}
            <span
              className="font-[var(--font-fancy),_serif] font-normal"
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
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={flowtask}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={theresa}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
            />
          </div>
        </div>
        <div className="h-[220px] w-[350px] rounded-xl border border-slate-200 p-3 md:h-[400px] md:w-[600px]">
          <div className="relative aspect-video h-full w-full">
            <Image
              src={fors}
              fill
              className="flex-shrink-0 rounded-lg object-cover object-top"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";
import { useEffect } from "react";
import Container from "./Container";
import FeatureCard from "./FeatureCard";
import Section from "./Section";

function PrimaryFeatures() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".move-on-scroll");
      const scrollY = window.scrollY;

      elements.forEach((element) => {
        const speed = 0.1; // Adjust for slower or faster movement
        const translateY = -scrollY * speed; // Reverse the direction
        element.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
        element.style.willChange = "transform"; // Hint for GPU acceleration
      });
    };

    const checkScreenSizeAndAddEvent = () => {
      // Only add scroll event listener on screens >= 768px
      if (window.innerWidth >= 768) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Check screen size when component mounts and on window resize
    checkScreenSizeAndAddEvent();
    window.addEventListener("resize", checkScreenSizeAndAddEvent);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSizeAndAddEvent);
    };
  }, []);

  return (
    <Section className="rounded-t-2xl bg-black py-28" id="services">
      <Container>
        <h2 className="mb-20 max-w-screen-lg break-words text-4xl font-thin text-white md:text-7xl">
          Our superpowers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="hidden md:block"></div>

          <div className="flex flex-col gap-8">
            <FeatureCard
              heading="Web design"
              description="Our design process brings your ideas to life, effectively communicates your message, and prepares your project for development."
              bgImg="/1-min.png"
            />
            <FeatureCard
              heading="UI/UX design"
              description="Our UI/UX design process transforms your app ideas into intuitive, engaging interfaces that enhance user experience and bring your vision to life."
              bgImg="/2-min.png"
            />
          </div>
          <div className="move-on-scroll flex flex-col gap-8 md:mt-40 lg:mt-52">
            <FeatureCard
              heading="Webflow development"
              description="Using Webflow, the top no-code platform, our team creates fully custom, production-ready websites and applications designed to impress and win customers."
              bgImg="/3-min.png"
            />
            <FeatureCard
              heading="Migration to Webflow"
              description="We make migrating your website to Webflow seamless, opening up endless possibilities for growth."
              bgImg="/4-min.png"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default PrimaryFeatures;

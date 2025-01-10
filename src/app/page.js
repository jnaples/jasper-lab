"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [contactForm, setContactForm] = useState(false);

  useEffect(() => {
    // Check if the Typeform embed script is already loaded
    if (
      !document.querySelector(
        "script[src='//embed.typeform.com/next/embed.js']"
      )
    ) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Typeform script loaded");
        window.typeformEmbed?.refresh(); // Refresh Typeform embeds
      };
    } else {
      // If the script is already loaded, refresh the embed
      window.typeformEmbed?.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] p-4 lg:px-6">
      <NavBar setContactForm={setContactForm} />
      <Hero />
      {contactForm && <div data-tf-live="01J9VQEFKDY0DQP3W9W4JY3M73"></div>}
    </div>
  );
}

"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

function ContactUsForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_6jw53gn";
    const templateId = "template_594on48";
    const publicKey = "E5uQ7Cp_5DdC5SddA";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
      <Input
        label="Name"
        id="name"
        name="user_name"
        type="text"
        placeholder="Name"
      />
      <Input
        label="Email"
        id="email"
        name="user_email"
        type="email"
        placeholder="you@example.com"
      />
      <TextArea
        label="Message"
        id="message"
        name="message"
        placeholder="How can we help?"
        className="mb-8"
      />

      <Button text="Submit" type="submit" />
    </form>
  );
}

export default ContactUsForm;

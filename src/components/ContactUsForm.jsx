"use client";

import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { useRef, useState } from "react";

function ContactUsForm() {
  const { register, handleSubmit, formState, reset, isSubmitting } = useForm();
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false); // New state for success message

  const { errors } = formState;

  const onSubmit = () => {
    const serviceId = "service_d439akw";
    const templateId = "template_gbe4t0v";
    const publicKey = "w46ioCf7kdV94lbvM";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage(true);
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  function onError(errors) {
    console.log("Form errors", errors);
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex w-full flex-col items-end"
    >
      <FormRow error={errors?.user_name?.message} label="Name*">
        <Input
          id="user_name"
          name="user_name"
          placeholder="Name"
          error={!!errors.user_name}
          {...register("user_name", {
            required: "This field is required",
          })}
          disabled={isSubmitting}
        />
      </FormRow>
      <FormRow error={errors?.user_email?.message} label="Email*">
        <Input
          id="email"
          name="user_email"
          type="email"
          placeholder="you@example.com"
          error={!!errors.user_email}
          {...register("user_email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
          disabled={isSubmitting}
        />
      </FormRow>
      <FormRow error={errors?.message?.message} label="Message*">
        <TextArea
          id="message"
          name="message"
          placeholder="How can we help?"
          error={!!errors.message}
          {...register("message", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Message must be at least 20 characters",
            },
          })}
          disabled={isSubmitting}
        />
      </FormRow>
      <Button
        text={isSubmitting ? "Submitting" : "Submit"}
        type="submit"
        className="bg-slate-800"
        disabled={isSubmitting}
      />
      {successMessage && (
        <p className="mt-4 font-light text-green-500">
          Form submitted successfully!
        </p>
      )}
    </form>
  );
}

export default ContactUsForm;

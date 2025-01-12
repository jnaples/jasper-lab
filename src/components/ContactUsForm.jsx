"use client";

import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { useRef, useState } from "react";

function ContactUsForm() {
  const { register, handleSubmit, formState, reset, isSubmitSuccessful } =
    useForm();
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(true); // New state for success message

  const { errors } = formState;

  const onSubmit = () => {
    const serviceId = "service_6jw53gn";
    const templateId = "template_594on48";
    const publicKey = "E5uQ7Cp_5DdC5SddA";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  function onError(errors) {
    console.log("Form errors", errors);
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col items-end w-full"
    >
      <FormRow error={errors?.user_name?.message} label="Name *">
        <Input
          id="user_name"
          name="user_name"
          placeholder="Name"
          error={!!errors.user_name}
          {...register("user_name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow error={errors?.user_email?.message} label="Email *">
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
        />
      </FormRow>
      <FormRow error={errors?.message?.message} label="Message *">
        <TextArea
          label="Message *"
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
        />
      </FormRow>
      <Button text="Submit" type="submit" />
      {successMessage && (
        <p className="mt-4 text-green-600">Form submitted successfully!</p>
      )}{" "}
    </form>
  );
}

export default ContactUsForm;

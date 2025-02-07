"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Alert from "./Alert";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormFields = z.infer<typeof contactSchema>;
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(contactSchema) });

  const [status, setStatus] = useState("");

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setTimeout(() => {
          setStatus("");
        }, 2000);
        reset();
      } else {
        setStatus("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[450px] flex flex-col gap-4">
      <div className="relative">
        <label
          htmlFor="name"
          className="block text-xl font-medium text-[#14213D]"
        >
          Your Name
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[95px]">*</span>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600 border-[#14213D]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="email"
          className="block text-xl  font-medium text-[#14213D]"
        >
          Your Email
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[95px]">*</span>
        <input
          {...register("email")}
          type="text"
          id="email"
          className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:border-indigo-600 border-[#14213D]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="message"
          className="block text-xl  font-medium text-[#14213D]"
        >
          Your Message
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[118px]">*</span>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:border-indigo-600 border-[#14213D]"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <button className="btn btn-success text-lg text-[#14213D]" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {status && <Alert className="alert-success">{status}</Alert>}
    </form>
  );
};

export default ContactForm;

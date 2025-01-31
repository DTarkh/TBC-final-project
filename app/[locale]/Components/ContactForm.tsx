"use client";

import { useState } from "react";
import Alert from "./Alert";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        // Show success message
        setStatus("Your message has been sent successfully!");
        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Show error message if the request fails
        setStatus("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      // Show error message if something goes wrong with the request
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="relative">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Your Name
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[70px]">*</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Your Email
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[70px]">*</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700"
        >
          Your Message
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[85px]">*</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="body"
          name="body"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>
      <button className="btn btn-warning">Submit</button>
      {status && <Alert>{status}</Alert>}
    </form>
  );
};

export default ContactForm;

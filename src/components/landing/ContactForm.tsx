"use client";
import Image from "next/image";
import React, { useState } from "react";

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`;

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [status, setStatus] = useState<"success" | "failed" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          title: form.title,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", title: "", message: "" });
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full">
      <form
        className="flex flex-col gap-4 w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="flex-1 border border-gray-400 bg-transparent px-3 py-2 text-gray-200 placeholder:text-gray-400 tracking-wider outline-none focus:border-primary transition-colors min-w-0"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="flex-1 border border-gray-400 bg-transparent px-3 py-2 text-gray-200 placeholder:text-gray-400 tracking-wider outline-none focus:border-primary transition-colors min-w-0"
            autoComplete="email"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border border-gray-400 bg-transparent px-3 py-2 text-gray-200 placeholder:text-gray-400 tracking-wider outline-none focus:border-primary transition-colors"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="border border-gray-400 bg-transparent px-3 py-2 text-gray-200 placeholder:text-gray-400 tracking-wider outline-none resize-none focus:border-primary transition-colors"
        />
        <div className="flex gap-5 items-center">
          <button
            type="submit"
            className="w-fit border border-primary px-6 py-2 text-white tracking-wider hover:bg-primary/10 transition-colors"
          >
            Send
          </button>
          {status === "success" && (
            <Image
              src="/form-submission-successful.png"
              alt="Form submission successful"
              width={25}
              height={25}
            />
          )}
          {status === "failed" && (
            <Image
              src="/form-submission-unsuccessful.png"
              alt="Form submission unsuccessful"
              width={32}
              height={32}
            />
          )}
        </div>
      </form>

      <Image
        src="/skills-design.svg"
        alt="Skills design pattern"
        width={400}
        height={400}
        className="hidden md:block mr-8"
      />
    </div>
  );
}

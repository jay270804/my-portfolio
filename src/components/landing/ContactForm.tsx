"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FORM_PLACEHOLDER_NAME,
  FORM_PLACEHOLDER_EMAIL,
  FORM_PLACEHOLDER_TITLE,
  FORM_PLACEHOLDER_MESSAGE,
  FORM_BUTTON_SEND,
  STYLE_PRIMARY_COLOR,
  STYLE_BORDER_COLOR,
  STYLE_TEXT_COLOR,
  STYLE_BG_COLOR
} from "@/constants";

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

  const inputClass = `flex-1 border border-${STYLE_BORDER_COLOR} bg-transparent px-3 py-2 text-${STYLE_TEXT_COLOR} placeholder:text-${STYLE_TEXT_COLOR} tracking-wider outline-none focus:border-${STYLE_PRIMARY_COLOR} transition-colors min-w-0`;
  const textareaClass = `border border-${STYLE_BORDER_COLOR} bg-transparent px-3 py-2 text-${STYLE_TEXT_COLOR} placeholder:text-${STYLE_TEXT_COLOR} tracking-wider outline-none resize-none focus:border-${STYLE_PRIMARY_COLOR} transition-colors`;
  const buttonClass = `w-fit border border-${STYLE_PRIMARY_COLOR} px-6 py-2 text-white tracking-wider hover:bg-${STYLE_PRIMARY_COLOR}/10 transition-colors`;

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
            placeholder={FORM_PLACEHOLDER_NAME}
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder={FORM_PLACEHOLDER_EMAIL}
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
            autoComplete="email"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        <input
          type="text"
          name="title"
          placeholder={FORM_PLACEHOLDER_TITLE}
          value={form.title}
          onChange={handleChange}
          required
          className={inputClass}
        />
        <textarea
          name="message"
          placeholder={FORM_PLACEHOLDER_MESSAGE}
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className={textareaClass}
        />
        <div className="flex gap-5 items-center">
          <button
            type="submit"
            className={buttonClass}
          >
            {FORM_BUTTON_SEND}
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

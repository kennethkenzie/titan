"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import { submitContact } from "@/lib/api";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContact(form);
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      setStatus("err");
    }
  }

  const Field = ({ label, k, type = "text", required = false }: { label: string; k: keyof typeof form; type?: string; required?: boolean }) => (
    <label className="block group">
      <span className="block text-[10px] uppercase tracking-[0.35em] text-muted mb-3">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={form[k]}
        onChange={set(k)}
        className="w-full bg-transparent border-b border-border py-3 text-lg focus:border-primary focus:outline-none transition-colors"
      />
    </label>
  );

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-10"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <Field label="Name" k="name" required />
        <Field label="Email" k="email" type="email" required />
        <Field label="Phone" k="phone" type="tel" />
        <Field label="Company" k="company" />
      </div>

      <label className="block">
        <span className="block text-[10px] uppercase tracking-[0.35em] text-muted mb-3">
          Tell us about the project <span className="text-primary">*</span>
        </span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={set("message")}
          className="w-full bg-transparent border-b border-border py-3 text-lg focus:border-primary focus:outline-none transition-colors resize-none"
        />
      </label>

      <div className="flex items-center gap-6">
        <AnimatedButton type="submit">
          {status === "loading" ? "Sending…" : "Submit brief"}
        </AnimatedButton>
        {status === "ok" && <p className="text-sm uppercase tracking-widest text-primary">Received — we&apos;ll be in touch.</p>}
        {status === "err" && <p className="text-sm uppercase tracking-widest text-primary">Something went wrong.</p>}
      </div>
    </motion.form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setError("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError(null);
    // This form is intentionally not wired to any backend — see project README.
    setStatus("sent");
    form.reset();
  }

  return (
    <div className="mx-auto max-w-lg">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-accent/40 bg-background-elevated p-8 text-center"
          >
            <p className="text-accent">Message received.</p>
            <p className="mt-2 text-sm text-muted">
              This is a concept project — the form does not send data anywhere.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              placeholder="Name"
              className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <textarea
              name="message"
              placeholder="Tell us about the problem"
              rows={4}
              className="resize-none rounded-lg border border-border bg-background-elevated px-4 py-3 text-sm outline-none focus:border-accent"
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              className="mt-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85"
            >
              Start a conversation →
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { NodeField } from "@/components/visuals/NodeField";
import { StarField } from "@/components/visuals/StarField";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
      <StarField className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.2em] text-accent uppercase"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-md text-base text-muted md:text-lg"
          >
            {hero.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:border-accent hover:text-accent"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <NodeField className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}

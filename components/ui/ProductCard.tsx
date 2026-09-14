"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/content/site";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setOpen((o) => !o)}
      layout
      className="w-full rounded-2xl border border-border bg-background-elevated p-6 text-left transition-colors hover:border-accent/50"
    >
      <motion.div layout="position" className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] tracking-[0.15em] text-accent uppercase">
            {product.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{product.name}</h3>
          <p className="mt-3 max-w-md text-sm text-muted">{product.headline}</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="mt-1 shrink-0 text-2xl text-muted"
          aria-hidden="true"
        >
          +
        </motion.span>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 max-w-lg text-sm text-muted">{product.description}</p>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
              {product.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-mono text-lg text-foreground">{metric.value}</div>
                  <div className="mt-1 text-xs text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

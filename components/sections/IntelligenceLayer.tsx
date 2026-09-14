"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { LayerIcon } from "@/components/ui/LayerIcon";
import { intelligenceLayer } from "@/content/site";

export function IntelligenceLayer() {
  return (
    <section id="intelligence" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{intelligenceLayer.title}</h2>
            <p className="mt-6 max-w-md text-muted">{intelligenceLayer.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-2">
              {intelligenceLayer.layers.map((layer, i) => (
                <motion.div
                  key={layer}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="flex items-center gap-4 rounded-xl border border-border bg-background-elevated px-5 py-3 font-mono text-sm transition-colors hover:border-accent/40"
                  style={{ marginLeft: `${i * 8}px` }}
                >
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <motion.span
                    variants={{
                      rest: { rotate: 0, scale: 1 },
                      hover: { rotate: -10, scale: 1.2 },
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 14 }}
                    className="text-muted"
                  >
                    <LayerIcon name={layer} />
                  </motion.span>
                  <span className="tracking-widest text-foreground">{layer}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

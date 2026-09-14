"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numericMatch = value.match(/\d+/);
  const numeric = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch ? value.slice((numericMatch.index ?? 0) + numericMatch[0].length) : value;

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(numeric);
  }, [inView, motionValue, numeric]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => setDisplay(Math.round(latest)));
    return unsubscribe;
  }, [spring]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}

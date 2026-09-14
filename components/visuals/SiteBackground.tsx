"use client";

import { useEffect, useState } from "react";
import { StarField } from "@/components/visuals/StarField";

export function SiteBackground() {
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <StarField
      active={heroInView}
      className="fixed inset-0 z-0 h-screen w-screen"
    />
  );
}

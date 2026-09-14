"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number;
  driftX: number;
  driftY: number;
};

export function StarField({
  className,
  density = 0.00012,
  active = true,
}: {
  className?: string;
  density?: number;
  active?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const { width, height } = rect;
      sizeRef.current = { width, height };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const count = Math.min(Math.round(width * height * density), 220);
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.3 + 0.4,
        baseOpacity: Math.random() * 0.5 + 0.15,
        twinkleSpeed: Math.random() * 0.03 + 0.008,
        driftX: (Math.random() - 0.5) * 0.18,
        driftY: (Math.random() - 0.5) * 0.18,
      }));
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    return () => resizeObserver.disconnect();
  }, [density]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationId: number;

    function draw() {
      if (!ctx) return;
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      for (const star of starsRef.current) {
        const twinkle =
          !active || prefersReducedMotion
            ? star.baseOpacity
            : star.baseOpacity + Math.sin(frame * star.twinkleSpeed) * 0.4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 243, 243, ${Math.max(0, Math.min(1, twinkle))})`;
        ctx.fill();

        if (active && !prefersReducedMotion) {
          star.x += star.driftX;
          star.y += star.driftY;
          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        }
      }
      frame += 1;
      if (active && !prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [active]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

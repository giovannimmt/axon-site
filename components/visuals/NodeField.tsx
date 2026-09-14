"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 60, y: 40 },
  { x: 220, y: 20 },
  { x: 340, y: 90 },
  { x: 140, y: 140 },
  { x: 40, y: 220 },
  { x: 260, y: 210 },
  { x: 380, y: 260 },
  { x: 180, y: 300 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [3, 5],
  [1, 5],
  [5, 6],
  [4, 7],
  [5, 7],
];

export function NodeField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {EDGES.map(([a, b], i) => {
        const from = NODES[a];
        const to = NODES[b];
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--accent)"
            strokeOpacity={0.25}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.08, ease: "easeOut" }}
          />
        );
      })}
      {NODES.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={i % 3 === 0 ? 4 : 2.5}
          fill={i % 3 === 0 ? "var(--accent)" : "var(--muted)"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
        />
      ))}
    </svg>
  );
}

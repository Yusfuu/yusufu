"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express"],
  ["GraphQL", "Apollo", "REST", "PHP", "Laravel", "Docker"],
  ["Git", "GitHub Actions", "Jest", "SWC", "Vite", "Webpack"],
  ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Swagger"],
];

const directions = ["left", "right", "left", "right"] as const;

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ position: "relative", zIndex: 1, padding: "140px 0" }}>
      <div style={{ padding: "0 60px", maxWidth: 1200, margin: "0 auto 64px" }}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", color: "#00d4ff", textTransform: "uppercase", marginBottom: "20px" }}
        >
          02 / stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: "var(--font-display)", fontSize: "64px", lineHeight: 0.95, color: "#f0f0f0" }}
        >
          Technologies
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "14px" }}
      >
        {rows.map((row, ri) => (
          <MarqueeRow key={ri} items={row} direction={directions[ri]} index={ri} />
        ))}
      </motion.div>

      <style>{`
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .marquee-track:hover { animation-play-state: paused !important; }
      `}</style>
    </section>
  );
}

function MarqueeRow({ items, direction, index }: { items: string[]; direction: "left" | "right"; index: number }) {
  const doubled = [...items, ...items];
  const duration = 28 + index * 4;
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, #060609, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, #060609, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div
        className="marquee-track"
        style={{ display: "flex", gap: "14px", width: "max-content", animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} ${duration}s linear infinite` }}
      >
        {doubled.map((tech, i) => <TechPill key={i} label={tech} variant={i % 3} />)}
      </div>
    </div>
  );
}

function TechPill({ label, variant }: { label: string; variant: number }) {
  const styles = [
    { color: "#00d4ff", border: "rgba(0,212,255,0.25)", bg: "rgba(0,212,255,0.04)" },
    { color: "#a855f7", border: "rgba(168,85,247,0.25)", bg: "rgba(168,85,247,0.04)" },
    { color: "#9ca3af", border: "rgba(255,255,255,0.1)", bg: "rgba(255,255,255,0.02)" },
  ][variant];
  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", border: `1px solid ${styles.border}`, borderRadius: "6px", background: styles.bg, fontFamily: "var(--font-mono)", fontSize: "13px", color: styles.color, whiteSpace: "nowrap", cursor: "default", transition: "all 0.2s", userSelect: "none" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = styles.color; el.style.transform = "translateY(-2px)"; el.style.boxShadow = `0 8px 24px ${styles.color}22`; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = styles.border; el.style.transform = ""; el.style.boxShadow = ""; }}
    >
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: styles.color, opacity: 0.6, flexShrink: 0 }} />
      {label}
    </span>
  );
}

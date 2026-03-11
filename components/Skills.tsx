'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const rows = [
  ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express'],
  ['GraphQL', 'Apollo', 'REST', 'PHP', 'Laravel', 'Docker'],
  ['Git', 'GitHub Actions', 'Jest', 'SWC', 'Vite', 'Webpack'],
  ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Swagger'],
];

const directions = ['left', 'right', 'left', 'right'] as const;

const pillStyles = [
  { color: '#00d4ff', border: 'rgba(0,212,255,0.25)', bg: 'rgba(0,212,255,0.04)' },
  { color: '#a855f7', border: 'rgba(168,85,247,0.25)', bg: 'rgba(168,85,247,0.04)' },
  { color: 'var(--color-muted)', border: 'var(--color-border2)', bg: 'var(--color-surface)' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Tech stack"
      style={{ position: 'relative', zIndex: 1, padding: 'clamp(80px, 12vw, 140px) 0' }}
    >
      <div
        style={{
          padding: `0 clamp(24px, 8vw, 80px)`,
          maxWidth: '1200px',
          margin: '0 auto clamp(40px, 6vw, 64px)',
        }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--color-cyan)',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          02 / stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 8vw, 72px)',
            lineHeight: 0.95,
            color: 'var(--color-text)',
          }}
        >
          Technologies
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        {rows.map((row, ri) => (
          <MarqueeRow key={ri} items={row} direction={directions[ri]} index={ri} />
        ))}
      </motion.div>

      <style>{`
        @keyframes scrollLeft  { 0% { transform: translateX(0);    } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0);    } }
        .marquee-row:hover .marquee-inner { animation-play-state: paused !important; }
      `}</style>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
  index,
}: {
  items: string[];
  direction: 'left' | 'right';
  index: number;
}) {
  const doubled = [...items, ...items];
  const duration = 28 + index * 4;

  return (
    <div className="marquee-row" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Fade edges — use CSS var so they match the page bg in both themes */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
          background: 'linear-gradient(to right, var(--color-bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
          background: 'linear-gradient(to left, var(--color-bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}
      />
      <div
        className="marquee-inner"
        style={{
          display: 'flex',
          gap: '12px',
          width: 'max-content',
          animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((tech, i) => (
          <TechPill key={i} label={tech} variant={i % 3} />
        ))}
      </div>
    </div>
  );
}

function TechPill({ label, variant }: { label: string; variant: number }) {
  const s = pillStyles[variant];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: 'clamp(7px, 1.5vw, 10px) clamp(14px, 3vw, 22px)',
        border: `1px solid ${s.border}`,
        borderRadius: '6px',
        background: s.bg,
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(11px, 1.8vw, 13px)',
        color: s.color,
        whiteSpace: 'nowrap',
        cursor: 'default',
        userSelect: 'none',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = s.color;
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = `0 8px 24px ${s.color}22`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = s.border;
        el.style.transform = '';
        el.style.boxShadow = '';
      }}
    >
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: s.color,
          opacity: 0.6,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}

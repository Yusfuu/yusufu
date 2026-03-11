'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tags = [
  'React', 'TypeScript', 'Node.js', 'GraphQL',
  'Express', 'Laravel', 'Docker', 'Git', 'Jest', 'SWC', 'Next.js', 'Vite',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About me"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 80px)',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <motion.p
        initial={{ opacity: 0, x: -16 }}
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
        01 / about
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 8vw, 72px)',
          lineHeight: 0.95,
          marginBottom: 'clamp(24px, 4vw, 40px)',
          color: 'var(--color-text)',
        }}
      >
        Who I Am
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          color: 'var(--color-muted)',
          lineHeight: 1.85,
          marginBottom: '18px',
          fontSize: 'clamp(14px, 2vw, 15px)',
          maxWidth: '640px',
        }}
      >
        I&apos;m a self-taught Full Stack JavaScript developer with a deep passion for
        building performant, scalable web applications. Currently working at{' '}
        <span
          style={{
            color: 'var(--color-cyan)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
          }}
        >
          @digital-factory-saham
        </span>{' '}
        in Casablanca.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          color: 'var(--color-muted)',
          lineHeight: 1.85,
          marginBottom: 'clamp(24px, 4vw, 36px)',
          fontSize: 'clamp(14px, 2vw, 15px)',
          maxWidth: '640px',
        }}
      >
        Through Youcode school internships and countless projects, I&apos;ve sharpened my
        skills in React, Node.js, TypeScript, GraphQL, and Laravel — often taking the
        lead in team environments.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
      >
        {tags.map((tag) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.08, borderColor: 'rgba(0,212,255,0.5)', color: 'var(--color-cyan)' }}
            style={{
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: '4px',
              padding: '4px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(10px, 1.5vw, 11px)',
              color: 'var(--color-faint)',
              background: 'rgba(0,212,255,0.03)',
              cursor: 'default',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WorkplaceCard } from './Workplace';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id='about'
      ref={ref}
      aria-label='About me'
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 80px)',
        maxWidth: '960px',
        margin: '0 auto',
      }}>
      {/* Section label + drawing line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px',
        }}>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--color-cyan)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
          01 / about
        </motion.p>
        {/* Line that draws in */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flex: 1,
            height: '1px',
            background:
              'linear-gradient(to right, rgba(0,212,255,0.3), transparent)',
            transformOrigin: '0%',
          }}
        />
      </div>

      {/* Heading with clip reveal */}
      <div
        style={{ overflow: 'hidden', marginBottom: 'clamp(24px, 4vw, 40px)' }}>
        <motion.h2
          initial={{ y: '100%', opacity: 0 }}
          animate={inView ? { y: '0%', opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 8vw, 72px)',
            lineHeight: 0.95,
            color: 'var(--color-text)',
          }}>
          Who I Am
        </motion.h2>
      </div>

      {/* Paragraph 1 — clip + fade */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: 'var(--color-muted)',
          lineHeight: 1.85,
          marginBottom: '18px',
          fontSize: 'clamp(14px, 2vw, 15px)',
          maxWidth: '640px',
        }}>
        I&apos;m a self-taught Full Stack JavaScript developer with a deep
        passion for building performant, scalable web applications. Currently
        working at{' '}
        <WorkplaceCard
          company='digital-factory-saham'
          role='Full Stack Developer'
          location='Casablanca, Morocco'
          period='Current'
          url='https://digitalfactory.ma'
        />{' '}
        in Casablanca.
      </motion.div>

      {/* Paragraph 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: 'var(--color-muted)',
          lineHeight: 1.85,
          marginBottom: 'clamp(24px, 4vw, 36px)',
          fontSize: 'clamp(14px, 2vw, 15px)',
          maxWidth: '640px',
        }}>
        Through Youcode school internships and countless projects, I&apos;ve
        sharpened my skills in React, Node.js, TypeScript, GraphQL, and Laravel
        — often taking the lead in team environments.
      </motion.div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tags = [
  'React',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'Express',
  'Laravel',
  'Docker',
  'Git',
  'Jest',
  'SWC',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id='about'
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '140px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
      <div style={{ maxWidth: '720px' }}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#00d4ff',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
          01 / about
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '64px',
            lineHeight: 0.95,
            marginBottom: '36px',
            color: '#f0f0f0',
          }}>
          Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            color: '#9ca3af',
            lineHeight: 1.85,
            marginBottom: '20px',
            fontSize: '15px',
          }}>
          I'm a self-taught Full Stack JavaScript developer with a deep passion
          for building performant, scalable web applications. Currently working
          at{' '}
          <span
            style={{
              color: '#00d4ff',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
            }}>
            @digital-factory-saham
          </span>{' '}
          in Casablanca.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            color: '#9ca3af',
            lineHeight: 1.85,
            marginBottom: '36px',
            fontSize: '15px',
          }}>
          Through Youcode school internships and countless projects, I've
          sharpened my skills in React, Node.js, TypeScript, GraphQL, and
          Laravel — often taking the lead in team environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{
                scale: 1.08,
                borderColor: 'rgba(0,212,255,0.5)',
                color: '#00d4ff',
              }}
              style={{
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: '4px',
                padding: '4px 12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#6b7280',
                background: 'rgba(0,212,255,0.03)',
                cursor: 'default',
                transition: 'all 0.2s',
              }}>
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

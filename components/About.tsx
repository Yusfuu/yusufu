'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { WorkplaceCard } from './Workplace';
import { SectionHeader } from './SectionHeader';

function AnimatedLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.span
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'inline' }}>
      {children}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef(null);

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
      <SectionHeader heading='Who I Am' label='about' index='01' />

      {/* Prose block */}
      <div
        style={{
          fontSize: 'clamp(15px, 2.2vw, 18px)',
          lineHeight: 2,
          color: 'var(--color-muted)',
          maxWidth: '680px',
          marginBottom: 'clamp(36px, 5vw, 56px)',
        }}>
        <AnimatedLine delay={0.25}>
          I&apos;m a self-taught Full Stack developer from{' '}
          <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>
            Casablanca, Morocco
          </span>{' '}
          — building interfaces and APIs that feel fast and intentional.{' '}
        </AnimatedLine>

        <AnimatedLine delay={0.4}>
          I trained at{' '}
          <WorkplaceCard
            company='YouCode · UM6P'
            role='Web & Mobile Development Diploma'
            location='Safi, Morocco'
            period='2020 – 2022'
            url='https://youcode.ma/'
          />
          {', '}
          then grew through roles at{' '}
          <WorkplaceCard
            company='Norsys Group'
            role='Full-Stack Developer'
            location='Marrakech'
            period='Jul 2022 – Jun 2023'
            url='https://www.norsys.fr/agence/marrakech'
          />{' '}
          and{' '}
          <WorkplaceCard
            company='Bubbo SM'
            role='Full-Stack Developer'
            location='Spain · Remote'
            period='Mar 2023 – Oct 2023'
            url='https://play.google.com/store/apps/details?id=es.bubbo.app'
          />
          {'.  '}
        </AnimatedLine>

        <AnimatedLine delay={0.55}>
          Built hotel booking infrastructure at{' '}
          <WorkplaceCard
            company='Nuitee'
            role='Full-Stack Developer'
            location='Casablanca'
            period='Nov 2023 – May 2024'
            url='https://nuitee.com'
          />
          {', '}
          and currently developing insurance platforms at{' '}
          <WorkplaceCard
            company='Sanlam'
            role='Full-Stack Developer'
            location='Casablanca'
            period='Jun 2024 – Present'
            url='https://sanlam.com'
          />
          {'.  '}
        </AnimatedLine>

        <AnimatedLine delay={0.7}>
          I gravitate toward{' '}
          <span
            style={{
              color: 'var(--color-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9em',
            }}>
            React
          </span>
          {', '}
          <span
            style={{
              color: 'var(--color-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9em',
            }}>
            TypeScript
          </span>
          {', and '}
          <span
            style={{
              color: 'var(--color-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9em',
            }}>
            Node.js
          </span>{' '}
          — but I&apos;ll pick up whatever the problem needs.
        </AnimatedLine>
      </div>
    </section>
  );
}

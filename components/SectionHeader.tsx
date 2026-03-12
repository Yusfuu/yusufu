'use client';
import { EASE } from '@/lib/constants';
import { motion } from 'framer-motion';

export function SectionHeader({
  index,
  label,
  heading,
}: {
  index: string;
  label: string;
  heading: string | React.ReactNode;
}) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px',
        }}>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--color-cyan)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
          {index} / {label}
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          style={{
            flex: 1,
            height: '1px',
            background:
              'linear-gradient(to right, rgba(0,212,255,0.3), transparent)',
            transformOrigin: '0%',
          }}
        />
      </div>
      <div
        style={{ overflow: 'hidden', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
        <motion.h2
          viewport={{ once: true }}
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 8vw, 72px)',
            lineHeight: 0.95,
            color: 'var(--color-text)',
          }}>
          {heading}
        </motion.h2>
      </div>
    </>
  );
}

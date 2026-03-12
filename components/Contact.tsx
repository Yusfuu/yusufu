'use client';

import { motion } from 'framer-motion';
import { socialLinks as links } from '@/lib/constants';
import { SectionHeader } from './SectionHeader';

export default function Contact() {
  return (
    <section
      id='contact'
      aria-label='Contact'
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 80px)',
        maxWidth: '960px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.07), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <SectionHeader
        heading={
          <>
            Let&apos;s Build
            <br />
            Something.
          </>
        }
        label='contact'
        index='03'
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          color: 'var(--color-muted)',
          lineHeight: 1.85,
          fontSize: 'clamp(14px, 2vw, 16px)',
          maxWidth: '480px',
          margin: '0 auto 48px',
        }}>
        I&apos;m currently open to new opportunities and interesting projects.
        Whether you want to talk code, collaborate, or just say hi — I&apos;d
        love to hear from you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.7 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '48px',
        }}>
        <motion.a
          href='mailto:youssefhajjari01@gmail.com'
          style={{
            padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 5vw, 44px)',
            background:
              'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(168,85,247,0.1))',
            border: '1px solid rgba(0,212,255,0.35)',
            borderRadius: '6px',
            color: 'var(--color-text)',
            fontSize: 'clamp(11px, 1.8vw, 13px)',
            fontFamily: 'var(--font-mono)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            wordBreak: 'break-all',
          }}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 0 40px rgba(0,212,255,0.2)',
            borderColor: 'rgba(0,212,255,0.7)',
          }}
          whileTap={{ scale: 0.97 }}>
          youssefhajjari01@gmail.com
        </motion.a>
      </motion.div>

      <div
        style={{
          display: 'flex',
          gap: 'clamp(16px, 4vw, 32px)',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {links.map((s) => (
          <motion.a
            key={s.name}
            href={s.url}
            target='_blank'
            rel='noreferrer'
            style={{
              color: 'var(--color-ghost)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(9px, 1.5vw, 11px)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
            whileHover={{ color: 'var(--color-cyan)', y: -2 }}
            transition={{ duration: 0.2 }}>
            {s.name} ↗
          </motion.a>
        ))}
      </div>
    </section>
  );
}

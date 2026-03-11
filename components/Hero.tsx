'use client';

import { motion, Variant } from 'framer-motion';
import { useTextScramble } from '@/lib/useTextScramble';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const lineVariant = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const socials = [
  { label: 'github', url: 'https://github.com/Yusfuu' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/youssef-hajjari' },
  { label: 'medium', url: 'https://medium.com/@yusfuu' },
];

export default function Hero() {
  const { text: name } = useTextScramble('YOUSSEF HAJJARI', 400);

  return (
    <section
      id='home'
      aria-label='Introduction'
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding:
          'clamp(80px, 12vw, 120px) clamp(24px, 8vw, 80px) clamp(60px, 8vw, 80px)',
      }}>
      {/* Grid mask */}
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at 30% 50%, black 20%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Glow */}
      <motion.div
        aria-hidden='true'
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: '-10%',
          top: '20%',
          width: 'clamp(280px, 50vw, 600px)',
          height: 'clamp(280px, 50vw, 600px)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.14), rgba(168,85,247,0.07), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        style={{ maxWidth: '680px' }}>
        {/* Status badge */}
        <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
          <motion.div
            variants={lineVariant}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: '100px',
              padding: '6px 16px',
              background: 'rgba(0,212,255,0.04)',
            }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--color-cyan)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(9px, 1.5vw, 11px)',
                color: 'var(--color-cyan)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
              available for opportunities
            </span>
          </motion.div>
        </div>

        {/* Comment */}
        <div style={{ overflow: 'hidden', marginBottom: '6px' }}>
          <motion.p
            variants={lineVariant}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(11px, 1.8vw, 13px)',
              color: 'var(--color-ghost)',
            }}>
            {'// Full Stack Javascript Developer'}
          </motion.p>
        </div>

        {/* Name */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            variants={lineVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 11vw, 128px)',
              lineHeight: 0.88,
              letterSpacing: '0.02em',
              color: 'var(--color-text)',
              marginBottom: '4px',
            }}>
            {name}
          </motion.h1>
        </div>

        {/* Gradient tagline */}
        <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
          <motion.h2
            variants={lineVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 7.5vw, 88px)',
              lineHeight: 0.88,
              background:
                'linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #00d4ff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 5s linear infinite',
            }}>
            Building the Web.
          </motion.h2>
        </div>

        {/* Description */}
        <div style={{ overflow: 'hidden', marginBottom: '36px' }}>
          <motion.p
            variants={lineVariant}
            style={{
              color: 'var(--color-muted)',
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: 1.8,
              maxWidth: '500px',
            }}>
            Self-taught developer from{' '}
            <span style={{ color: 'var(--color-text)' }}>Casablanca 🇲🇦</span>.
            Building scalable applications with the modern JavaScript ecosystem
            — always with performance and DX in mind.
          </motion.p>
        </div>

        {/* CTAs */}
        <div style={{ overflow: 'hidden', marginBottom: '44px' }}>
          <motion.div
            variants={lineVariant}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <motion.a
              href='#about'
              style={{
                padding: 'clamp(10px, 2vw, 13px) clamp(20px, 4vw, 30px)',
                background:
                  'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(168,85,247,0.12))',
                border: '1px solid rgba(0,212,255,0.4)',
                borderRadius: '6px',
                color: 'var(--color-text)',
                fontSize: 'clamp(11px, 1.5vw, 13px)',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 32px rgba(0,212,255,0.25)',
                borderColor: 'rgba(0,212,255,0.7)',
              }}
              whileTap={{ scale: 0.97 }}>
              about me →
            </motion.a>
            <motion.a
              href='mailto:youssefhajjari01@gmail.com'
              style={{
                padding: 'clamp(10px, 2vw, 13px) clamp(20px, 4vw, 30px)',
                background: 'transparent',
                border: '1px solid var(--color-border2)',
                borderRadius: '6px',
                color: 'var(--color-muted)',
                fontSize: 'clamp(11px, 1.5vw, 13px)',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              whileHover={{
                scale: 1.03,
                color: 'var(--color-text)',
                borderColor: 'var(--color-border2)',
              }}
              whileTap={{ scale: 0.97 }}>
              get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Socials */}
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            variants={lineVariant}
            style={{
              display: 'flex',
              gap: 'clamp(16px, 4vw, 28px)',
              flexWrap: 'wrap',
            }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
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
                {s.label} ↗
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: 'var(--color-ghost)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}>
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            width: '1px',
            height: '40px',
            background:
              'linear-gradient(to bottom, var(--color-cyan), transparent)',
          }}
        />
      </motion.div>

      <style>{`@keyframes gradientShift { 0% { background-position: 0 50%; } 100% { background-position: 200% 50%; } }`}</style>
    </section>
  );
}

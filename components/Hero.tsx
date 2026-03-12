'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTextScramble } from '@/lib/useTextScramble';
import Image from 'next/image';
import { useRef } from 'react';
import { socialLinks as socials } from '@/lib/constants';

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

export default function Hero() {
  const { text: name } = useTextScramble('YOUSSEF HAJJARI', 400);
  const imageRef = useRef<HTMLDivElement>(null);
  const mounted = typeof window !== 'undefined';
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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

      {/* Left cyan glow */}
      <motion.div
        aria-hidden='true'
        animate={{ opacity: [0.1, 0.18, 0.1] }}
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

      {/* Two-column hero layout */}
      <div className='hero-layout'>
        <motion.div
          variants={container}
          initial='hidden'
          animate={mounted ? 'show' : 'hidden'}
          style={{ flex: '1 1 0', minWidth: 0 }}>
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
              Building scalable applications with the modern JavaScript
              ecosystem — always with performance and DX in mind.
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
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className='hero-image-wrapper'
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
          {/* Warm glow behind fox */}
          <motion.div
            aria-hidden='true'
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: '-20%',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,100,30,0.22) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Floating image with tilt */}
          <motion.div
            initial={{ y: 0 }}
            ref={imageRef}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              zIndex: 1,
              perspective: 800,
              cursor: 'none',
            }}>
            <motion.div
              aria-hidden='true'
              animate={{ rotate: 360 }}
              transition={{ duration: 500, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: '-24px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(0,212,255,0.12)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                userSelect: 'none',
              }}>
              <Image
                src='/pmdr-2025.png'
                alt='Youssef Hajjari — creative portrait'
                width={400}
                height={400}
                priority
                draggable={false}
                style={{
                  borderRadius: '50%',
                  display: 'block',
                  width: 'clamp(220px, 32vw, 400px)',
                  height: 'clamp(220px, 32vw, 400px)',
                  objectFit: 'cover',
                  border: '1px solid rgba(0,212,255,0.15)',
                  boxShadow:
                    '0 0 0 1px rgba(0,212,255,0.08), 0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255,100,30,0.1)',
                  filter: 'contrast(1.02) saturate(1.05)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />

              {/* Shine overlay */}
              <div
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

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

      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0 50%; }
          100% { background-position: 200% 50%; }
        }

        .hero-layout {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: clamp(40px, 6vw, 80px);
        }

        .hero-image-wrapper {
          width: clamp(260px, 36vw, 440px);
          height: clamp(260px, 36vw, 440px);
          flex-shrink: 0;
        }

        /* Mobile: stack vertically, image on top */
        @media (max-width: 768px) {
          .hero-layout {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 40px;
          }

          .hero-image-wrapper {
            width: clamp(160px, 55vw, 260px);
            height: clamp(160px, 55vw, 260px);
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
}

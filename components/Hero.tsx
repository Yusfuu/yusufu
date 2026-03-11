'use client';

import { motion } from 'framer-motion';
import { useTextScramble } from '@/lib/useTextScramble';
import { useEffect, useState } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const lineVariant = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Animated terminal lines
const codeLines = [
  { delay: 0.8, text: 'const dev = {', color: '#f0f0f0' },
  { delay: 1.1, text: '  name: "Youssef",', color: '#00d4ff' },
  { delay: 1.4, text: '  role: "Fullstack",', color: '#00d4ff' },
  { delay: 1.7, text: '  stack: ["JS", "TS",', color: '#a855f7' },
  { delay: 2.0, text: '    "React", "Node"],', color: '#a855f7' },
  { delay: 2.3, text: '  location: "🇲🇦",', color: '#00d4ff' },
  { delay: 2.6, text: '  open: true,', color: '#4ade80' },
  { delay: 2.9, text: '};', color: '#f0f0f0' },
  { delay: 3.3, text: '', color: '' },
  { delay: 3.5, text: 'dev.build(world);', color: '#fbbf24' },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const timers = codeLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay * 1000),
    );
    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(blink);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotateY: -8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width: '100%',
        maxWidth: '420px',
        background: 'rgba(13,13,18,0.9)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow:
          '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.06)',
        backdropFilter: 'blur(12px)',
      }}>
      {/* Title bar */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.02)',
        }}>
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: '50%',
            background: '#ff5f56',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: '50%',
            background: '#ffbd2e',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: '50%',
            background: '#27c93f',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            flex: 1,
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: '#6b7280',
            marginRight: '38px',
          }}>
          portfolio.ts
        </span>
      </div>

      {/* Code area */}
      <div style={{ padding: '20px 20px 24px', minHeight: '260px' }}>
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4px',
              minHeight: '20px',
            }}>
            <span
              style={{
                color: '#374151',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                marginRight: '16px',
                minWidth: '20px',
                textAlign: 'right',
                userSelect: 'none',
              }}>
              {i + 1}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: line.color,
              }}>
              {line.text}
              {i === visibleLines - 1 && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '14px',
                    background: '#00d4ff',
                    verticalAlign: 'middle',
                    marginLeft: '2px',
                    opacity: cursor ? 1 : 0,
                    transition: 'opacity 0.1s',
                  }}
                />
              )}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Status bar */}
      <div
        style={{
          padding: '8px 16px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex',
          justifyContent: 'space-between',
          background: 'rgba(0,212,255,0.04)',
        }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#00d4ff',
          }}>
          TypeScript
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#374151',
          }}>
          UTF-8 · LF
        </span>
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#4ade80',
          }}>
          ● ready
        </motion.span>
      </div>
    </motion.div>
  );
}

// Floating orbit badges
function OrbitBadge({
  label,
  angle,
  radius,
  delay,
}: {
  label: string;
  angle: number;
  radius: number;
  delay: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay, duration: 0.4 },
        scale: { delay, duration: 0.4, type: 'spring' },
        y: {
          delay: delay + 0.4,
          duration: 3 + Math.random(),
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      style={{
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
        padding: '5px 12px',
        background: 'rgba(6,6,9,0.9)',
        border: '1px solid rgba(0,212,255,0.2)',
        borderRadius: '20px',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: '#9ca3af',
        whiteSpace: 'nowrap',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
      }}>
      {label}
    </motion.div>
  );
}

export default function Hero() {
  const { text: name } = useTextScramble('YOUSSEF HAJJARI', 400);

  return (
    <section
      id='home'
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
        gap: '60px',
      }}>
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at 30% 50%, black 30%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Glow blob */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: '-200px',
          top: '30%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.15), rgba(168,85,247,0.08), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* LEFT — Text */}
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        style={{ flex: '1', maxWidth: '560px' }}>
        <motion.div
          variants={lineVariant}
          style={{ overflow: 'visible', marginBottom: '28px' }}>
          <div
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
                background: '#00d4ff',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#00d4ff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
              available for opportunities
            </span>
          </div>
        </motion.div>

        <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
          <motion.p
            variants={lineVariant}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: '#374151',
            }}>
            {`// Full Stack Javascript Developer`}
          </motion.p>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            variants={lineVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 10vw, 120px)',
              lineHeight: 0.88,
              letterSpacing: '0.02em',
              color: '#f0f0f0',
              marginBottom: '4px',
            }}>
            {name}
          </motion.h1>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            variants={lineVariant}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 7vw, 80px)',
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

        <div style={{ overflow: 'hidden', marginTop: '32px' }}>
          <motion.p
            variants={lineVariant}
            style={{
              color: '#9ca3af',
              fontSize: '16px',
              lineHeight: 1.75,
              maxWidth: '480px',
            }}>
            Self-taught developer from{' '}
            <span style={{ color: '#f0f0f0' }}>Casablanca</span>. Building
            scalable applications with the modern JavaScript ecosystem — always
            with performance in mind.
          </motion.p>
        </div>

        <div style={{ overflow: 'hidden', marginTop: '40px' }}>
          <motion.div
            variants={lineVariant}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <motion.a
              href='#about'
              style={{
                padding: '13px 30px',
                background:
                  'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(168,85,247,0.12))',
                border: '1px solid rgba(0,212,255,0.4)',
                borderRadius: '6px',
                color: '#f0f0f0',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
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
                padding: '13px 30px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: '#9ca3af',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
              }}
              whileHover={{
                scale: 1.03,
                color: '#f0f0f0',
                borderColor: 'rgba(255,255,255,0.25)',
              }}
              whileTap={{ scale: 0.97 }}>
              get in touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT — Terminal + orbit badges */}
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          minHeight: '420px',
        }}>
        {/* Orbit ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            border: '1px solid rgba(0,212,255,0.06)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            opacity: { delay: 1.2 },
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
              delay: 1.2,
            },
          }}
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '1px dashed rgba(168,85,247,0.08)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />

        {/* Floating orbit labels */}
        <div
          style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}>
          {[
            { label: '⚡ Next.js 15', angle: -60, radius: 190, delay: 2.0 },
            { label: '🔷 TypeScript', angle: 15, radius: 200, delay: 2.3 },
            { label: '🟢 Node.js', angle: 100, radius: 185, delay: 2.6 },
            { label: '🐳 Docker', angle: 195, radius: 195, delay: 2.9 },
            { label: '🔮 GraphQL', angle: 260, radius: 188, delay: 3.2 },
          ].map((b) => (
            <OrbitBadge key={b.label} {...b} />
          ))}
        </div>

        {/* Terminal card */}
        <TerminalWindow />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
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
            fontSize: '10px',
            color: '#374151',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '44px',
            background: 'linear-gradient(to bottom, #00d4ff, transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      `}</style>
    </section>
  );
}

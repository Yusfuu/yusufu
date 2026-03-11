'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const links = [
  { name: 'github', url: 'https://github.com/Yusfuu' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/youssef-hajjari' },
  { name: 'medium', url: 'https://medium.com/@yusfuu' },
  { name: 'twitter', url: 'https://twitter.com/Yosufuu' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id='contact'
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '140px 60px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
      {/* Glow blob */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.07), transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: '#00d4ff',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
        04 / contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(52px, 9vw, 96px)',
          lineHeight: 0.92,
          marginBottom: '28px',
          color: '#f0f0f0',
        }}>
        Let's Build
        <br />
        Something.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          color: '#9ca3af',
          lineHeight: 1.85,
          marginBottom: '52px',
          fontSize: '16px',
          maxWidth: '480px',
          margin: '0 auto 52px',
        }}>
        I'm currently open to new opportunities and interesting projects.
        Whether you want to talk code, collaborate, or just say hi — I'd love to
        hear from you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.a
          href='mailto:youssefhajjari01@gmail.com'
          style={{
            padding: '16px 44px',
            background:
              'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(168,85,247,0.1))',
            border: '1px solid rgba(0,212,255,0.35)',
            borderRadius: '6px',
            color: '#f0f0f0',
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
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

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          marginTop: '48px',
        }}>
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            style={{
              color: '#374151',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
            whileHover={{ color: '#00d4ff', y: -2 }}
            transition={{ duration: 0.2 }}>
            {link.name} ↗
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

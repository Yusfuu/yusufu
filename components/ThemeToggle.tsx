'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('yh-theme') as 'dark' | 'light') ?? 'dark';
  });

  const mounted = typeof window !== 'undefined';

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('yh-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        position: 'fixed',
        top: '20px',
        right: '24px',
        zIndex: 200,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '1px solid var(--color-border2)',
        background: 'var(--color-surface)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}>
      <AnimatePresence mode='wait'>
        {theme === 'dark' ? (
          <motion.span
            key='sun'
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ fontSize: '18px', lineHeight: 1, display: 'block' }}>
            ☀️
          </motion.span>
        ) : (
          <motion.span
            key='moon'
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ fontSize: '18px', lineHeight: 1, display: 'block' }}>
            🌙
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

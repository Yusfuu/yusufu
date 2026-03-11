'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mounted = typeof window !== 'undefined';
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const springX = useSpring(rawX, { stiffness: 500, damping: 40 });
  const springY = useSpring(rawY, { stiffness: 500, damping: 40 });
  const followerX = useSpring(rawX, { stiffness: 120, damping: 20 });
  const followerY = useSpring(rawY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [rawX, rawY]);

  // Don't render on server or mobile (no pointer events)
  if (!mounted) return null;

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: clicking ? '6px' : '8px',
          height: clicking ? '6px' : '8px',
          borderRadius: '50%',
          background: '#00d4ff',
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
          mixBlendMode: 'screen',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid rgba(0,212,255,0.3)',
          zIndex: 9998,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.7 : 1,
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
          zIndex: 9997,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}

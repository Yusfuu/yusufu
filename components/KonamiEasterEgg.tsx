'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export default function KonamiEasterEgg() {
  const [active, setActive] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const inputRef = useRef<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Drop the hint in the console
  useEffect(() => {
    console.log(
      '%c🕹️  psst...',
      'color:#00d4ff; font-family:"JetBrains Mono",monospace; font-size:14px; font-weight:bold;',
    );
    console.log(
      '%ci wonder what happens if you type  ↑ ↑ ↓ ↓ ← → ← → B A',
      'color:#a855f7; font-family:"JetBrains Mono",monospace; font-size:12px; letter-spacing:0.1em;',
    );
    console.log(
      '%c( ͡° ͜ʖ ͡°)',
      'color:#374151; font-family:monospace; font-size:18px;',
    );
  }, []);

  // Listen for Konami code
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      inputRef.current = [...inputRef.current, e.key].slice(-KONAMI.length);
      if (inputRef.current.join(',') === KONAMI.join(',')) {
        setActive(true);
        setUnlocked(true);
        setTimeout(() => setActive(false), 8000);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Matrix rain canvas
  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 18);
    const drops: number[] = Array(cols).fill(1);
    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノ01ハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]|:;?/\\=+-*^%$#@!';

    const draw = () => {
      ctx.fillStyle = 'rgba(6,6,9,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 18;
        ctx.fillStyle = '#ffffff';
        ctx.font = "bold 14px 'JetBrains Mono', monospace";
        ctx.fillText(char, x, y * 18);
        ctx.fillStyle = `hsl(${180 + Math.random() * 60}, 100%, 55%)`;
        ctx.font = "13px 'JetBrains Mono', monospace";
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, (y - 1) * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            key="matrix"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9000, pointerEvents: 'none' }}
          >
            <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.05, 1, 0.95] }}
              transition={{ duration: 2, times: [0, 0.1, 0.8, 1], delay: 0.5 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                textAlign: 'center',
                pointerEvents: 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#00d4ff',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                achievement unlocked
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(40px,8vw,96px)',
                  color: '#00d4ff',
                  letterSpacing: '0.05em',
                  textShadow:
                    '0 0 40px rgba(0,212,255,0.8), 0 0 80px rgba(0,212,255,0.4)',
                  lineHeight: 1,
                }}
              >
                YOU FOUND IT
              </p>
              <motion.p
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: '#a855f7',
                  marginTop: '16px',
                }}
              >
                ↑↑↓↓←→←→BA
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {unlocked && !active && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'fixed',
              bottom: '88px',
              right: '28px',
              zIndex: 500,
              padding: '6px 14px',
              background: 'rgba(168,85,247,0.08)',
              border: '1px solid rgba(168,85,247,0.2)',
              borderRadius: '100px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: '#a855f7',
              letterSpacing: '0.05em',
            }}
          >
            🎮 code found
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import Image from 'next/image';
import { categories, EASE, techs, type Category } from '@/lib/constants';
import { SectionHeader } from './SectionHeader';

function TechCard({
  tech,
  index,
}: {
  tech: (typeof techs)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 180,
    damping: 22,
  });
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.88 }}
      viewport={{ once: true, margin: '-80px' }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: EASE,
      }}
      style={{ perspective: '600px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          cursor: 'default',
          border: `1px solid ${hovered ? tech.color + '44' : 'var(--color-border)'}`,
          background: hovered ? 'var(--color-surface)' : 'var(--color-surface)',
          transition: 'border-color 0.25s, background 0.25s',
          padding: 'clamp(16px, 3vw, 24px) clamp(12px, 2.5vw, 20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}>
        {/* Mouse-tracked inner glow */}
        {hovered && (
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at ${glowX} ${glowY}, ${tech.color}18, transparent 65%)`,
              pointerEvents: 'none',
              borderRadius: '14px',
            }}
          />
        )}

        {/* Bottom glow */}
        <motion.div
          animate={
            hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }
          }
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '40px',
            borderRadius: '50%',
            background: tech.color,
            filter: 'blur(20px)',
            pointerEvents: 'none',
          }}
        />

        {/* Icon */}
        <motion.div
          animate={hovered ? { scale: 1.15, y: -2 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)',
          }}>
          <Image
            src={`/icons/${tech.key}.svg`}
            alt={tech.name}
            width={44}
            height={44}
            style={{ display: 'block', imageRendering: 'crisp-edges' }}
          />
        </motion.div>

        {/* Name */}
        <motion.span
          animate={
            hovered
              ? { color: tech.color, y: -1 }
              : { color: 'var(--color-muted)', y: 0 }
          }
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(9px, 1.4vw, 11px)',
            letterSpacing: '0.05em',
            textAlign: 'center',
            lineHeight: 1.2,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(10px)',
          }}>
          {tech.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered =
    activeCategory === 'All'
      ? techs
      : techs.filter((t) => t.cat === activeCategory);

  return (
    <section
      id='skills'
      ref={ref}
      aria-label='Tech stack'
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 140px) 0',
      }}>
      <div
        style={{
          padding: '0 clamp(24px, 8vw, 80px)',
          maxWidth: '960px',
          margin: '0 auto',
        }}>
        <SectionHeader heading='Technologies' label='stack' index='02' />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: 'clamp(28px, 4vw, 44px)',
          }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: '100px',
                border: `1px solid ${activeCategory === cat ? 'rgba(0,212,255,0.5)' : 'var(--color-border)'}`,
                background:
                  activeCategory === cat
                    ? 'rgba(0,212,255,0.08)'
                    : 'var(--color-surface)',
                color:
                  activeCategory === cat
                    ? 'var(--color-cyan)'
                    : 'var(--color-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
                outline: 'none',
              }}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(clamp(80px, 14vw, 110px), 1fr))',
              gap: 'clamp(8px, 1.5vw, 14px)',
            }}>
            {filtered.map((tech, i) => (
              <TechCard key={tech.key} tech={tech} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

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

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const;
type Category = (typeof categories)[number];

const techs: { name: string; key: string; color: string; cat: Category }[] = [
  // Frontend
  { name: 'JavaScript', key: 'js', color: '#f7df1e', cat: 'Frontend' },
  { name: 'TypeScript', key: 'ts', color: '#3178c6', cat: 'Frontend' },
  { name: 'React', key: 'react', color: '#61dafb', cat: 'Frontend' },
  { name: 'Next.js', key: 'nextjs', color: '#ffffff', cat: 'Frontend' },
  { name: 'Vite', key: 'vite', color: '#646cff', cat: 'Frontend' },
  // Backend
  { name: 'Node.js', key: 'nodejs', color: '#68a063', cat: 'Backend' },
  { name: 'Express', key: 'express', color: '#cccccc', cat: 'Backend' },
  { name: 'GraphQL', key: 'graphql', color: '#e10098', cat: 'Backend' },
  { name: 'PHP', key: 'php', color: '#777bb4', cat: 'Backend' },
  { name: 'Laravel', key: 'laravel', color: '#ff2d20', cat: 'Backend' },
  // Database
  { name: 'MongoDB', key: 'mongodb', color: '#47a248', cat: 'Database' },
  { name: 'PostgreSQL', key: 'postgres', color: '#336791', cat: 'Database' },
  { name: 'MySQL', key: 'mysql', color: '#4479a1', cat: 'Database' },
  { name: 'Redis', key: 'redis', color: '#dc382d', cat: 'Database' },
  { name: 'Prisma', key: 'prisma', color: '#5a67d8', cat: 'Database' },
  // Tools
  { name: 'Docker', key: 'docker', color: '#2496ed', cat: 'Tools' },
  { name: 'Git', key: 'git', color: '#f05032', cat: 'Tools' },
  { name: 'Jest', key: 'jest', color: '#c21325', cat: 'Tools' },
  { name: 'Webpack', key: 'webpack', color: '#8dd6f9', cat: 'Tools' },
  { name: 'GitHub', key: 'github', color: '#ffffff', cat: 'Tools' },
];

function TechCard({
  tech,
  index,
  inView,
}: {
  tech: (typeof techs)[number];
  index: number;
  inView: boolean;
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
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
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
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)',
          }}>
          <Image
            src={`https://skillicons.dev/icons?i=${tech.key}&theme=dark`}
            alt={tech.name}
            width={44}
            height={44}
            style={{ display: 'block', imageRendering: 'crisp-edges' }}
            unoptimized
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
        {/* Label + drawing line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
          }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: 'var(--color-cyan)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
            02 / stack
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              flex: 1,
              height: '1px',
              background:
                'linear-gradient(to right, rgba(0,212,255,0.3), transparent)',
              transformOrigin: '0%',
            }}
          />
        </div>

        {/* Heading */}
        <div
          style={{
            overflow: 'hidden',
            marginBottom: 'clamp(28px, 4vw, 44px)',
          }}>
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 8vw, 72px)',
              lineHeight: 0.95,
              color: 'var(--color-text)',
            }}>
            Technologies
          </motion.h2>
        </div>

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
              <TechCard key={tech.key} tech={tech} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

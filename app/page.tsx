import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import GrainOverlay from '@/components/GrainOverlay';
import ClientWidgets from '@/components/Clientwidgets';
import { stack } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem('yh-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
        }}
      />

      <GrainOverlay />
      <ClientWidgets />

      {/* Subtle grid overlay */}
      <div
        aria-hidden='true'
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid var(--color-border)',
          padding: 'clamp(20px, 4vw, 28px) clamp(24px, 8vw, 60px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-ghost)',
          }}>
          © 2026 Youssef Hajjari
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-ghost)',
            margin: '0 auto',
          }}>
          Built with ❤️ using{' '}
          {stack.map((tech, i) => (
            <span key={tech.name}>
              <a
                href={tech.url}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
                {tech.name}
              </a>
              {i < stack.length - 1 && ' · '}
            </span>
          ))}
        </span>
      </footer>
    </>
  );
}

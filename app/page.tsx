import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ParticleCanvas from '@/components/ParticleCanvas';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import LoadingScreen from '@/components/LoadingScreen';
import SpotifyWidget from '@/components/SpotifyWidget';
import KonamiEasterEgg from '@/components/KonamiEasterEgg';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <GrainOverlay />
      <CustomCursor />
      <ParticleCanvas />
      <KonamiEasterEgg />

      {/* Grid overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.022) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Navbar />

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
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '28px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: '#374151',
          }}>
          © 2025 Youssef Hajjari
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: '#374151',
          }}>
          Next.js 15 · Framer Motion · Matter.js
        </span>
      </footer>

      {/* Floating widgets */}
      <SpotifyWidget />
    </>
  );
}

'use client';

import dynamic from 'next/dynamic';

const SpotifyWidget = dynamic(() => import('@/components/SpotifyWidget'), {
  ssr: false,
});
const KonamiEasterEgg = dynamic(() => import('@/components/KonamiEasterEgg'), {
  ssr: false,
});
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
});

export default function ClientWidgets() {
  return (
    <>
      <KonamiEasterEgg />
      <ThemeToggle />
      <SpotifyWidget />
    </>
  );
}

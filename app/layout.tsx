import type { Metadata } from 'next';
import { Bebas_Neue, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://youssef-hajjari.vercel.app'),
  title: {
    default: 'Youssef Hajjari — Full Stack JavaScript Developer',
    template: '%s | Youssef Hajjari',
  },
  description:
    'Self-taught Full Stack JavaScript developer from Casablanca. Specializing in React, Next.js, Node.js, TypeScript and GraphQL. Open to new opportunities.',
  keywords: [
    'Youssef Hajjari',
    'Yusfuu',
    'Full Stack Developer',
    'JavaScript Developer',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'GraphQL',
    'Casablanca',
    'Morocco',
  ],
  authors: [{ name: 'Youssef Hajjari', url: 'https://youssef-hajjari.vercel.app' }],
  creator: 'Youssef Hajjari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://youssef-hajjari.vercel.app',
    siteName: 'Youssef Hajjari',
    title: 'Youssef Hajjari — Full Stack JavaScript Developer',
    description: 'Self-taught Full Stack developer from Casablanca building scalable web apps.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Youssef Hajjari' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Hajjari — Full Stack JavaScript Developer',
    description: 'Self-taught Full Stack developer from Casablanca.',
    creator: '@Yosufuu',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

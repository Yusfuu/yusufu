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
  title: 'Youssef Hajjari | Full Stack JavaScript Developer',
  description:
    'Self-taught Full Stack JavaScript developer from Casablanca. Building scalable web applications with React, Node.js, TypeScript, and GraphQL.',
  keywords: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Full Stack Developer',
    'Casablanca',
  ],
  openGraph: {
    title: 'Youssef Hajjari | Full Stack JavaScript Developer',
    description: 'Building exceptional digital experiences from Casablanca.',
    url: 'https://youssef-hajjari.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${bebasNeue.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

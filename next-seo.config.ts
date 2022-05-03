import { NextSeoProps } from 'next-seo';

export default {
  title: 'Youssef Hajjari | Javascript Developer',
  description: 'full stack javascript developer',
  canonical: 'https://youssef-hajjari.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://youssef-hajjari.vercel.app',
    site_name: 'Youssef Hajjari',
    description:
      'Full Stack Javascript Developer | React | Node | GraphQL | Next.js | Express | MongoDB',
    images: [{ url: '/yusfuu.jpeg' }],
  },
  twitter: {
    handle: '@Yosufuu',
    site: '@Yosufuu',
    cardType: 'summary_large_image',
  },
} as NextSeoProps;

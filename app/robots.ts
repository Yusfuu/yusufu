import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://youssef-hajjari.vercel.app/sitemap.xml' };
}

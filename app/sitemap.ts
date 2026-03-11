import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://youssef-hajjari.vercel.app', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}

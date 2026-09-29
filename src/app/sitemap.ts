import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const base = siteConfig.baseUrl;
const now = new Date();

/** 重要页面 URL + 相对权重 */
const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' },
  { path: '/features', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/download', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/news', priority: 0.8, changeFrequency: 'daily' },
  { path: '/faq', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/help', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${base}${p.path === '/' ? '' : p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
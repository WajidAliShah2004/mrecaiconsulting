import type { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

// Built-in Next.js sitemap (emitted as /sitemap.xml in the static export).
// next-sitemap@4 cannot read Next 16 build manifests, so the native metadata
// route is used instead. Priorities per SEO spec:
//   homepage daily/1.0 · service pages weekly/0.8 · everything else monthly/0.6
// Admin routes, /404, and retired AI/automation routes (now redirects) are
// intentionally omitted.

const SERVICE_PAGES = [
  '/services/business-consulting',
  '/services/insurance',
  '/services/tax-services',
  '/services/investment-management',
  '/services/bookkeeping-accounting',
  '/services/tax-preparation',
  '/services/tax-strategy',
  '/services/strategic-tax-planning',
  '/services/risk-architecture',
];

const OTHER_PAGES = [
  '/about',
  '/about/company',
  '/about/founder',
  '/about/partners',
  '/services',
  '/service-bundles',
  '/testimonials',
  '/blog',
  '/advice-education',
  '/contact',
  '/faq',
  '/download-services-guide',
  '/start-here',
  '/book-now',
  '/intake-forms',
  '/privacy-policy',
  '/terms-of-service',
  '/resources',
  '/resources/tax-savings-checklist',
  '/resources/insurance-gap-checklist',
  '/resources/tax-savings-snapshot',
  '/locations/new-york-ny',
  '/locations/manhattan',
  '/case-studies',
];

const BASE = 'https://mrecai.com';

// Required for output: 'export' — the sitemap is rendered once at build time.
export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  let blogSlugs: string[] = [];
  try {
    const { data, error } = await supabase.from('blogs').select('slug').eq('status', 'published');
    if (error) throw error;
    blogSlugs = (data ?? []).map((post: { slug: string }) => post.slug);
  } catch {
    // Supabase unreachable at build time — sitemap ships without blog posts.
  }

  return [
    { url: `${BASE}/`, lastModified, changeFrequency: 'daily', priority: 1.0 },
    ...SERVICE_PAGES.map((path) => ({
      url: `${BASE}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...OTHER_PAGES.map((path) => ({
      url: `${BASE}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}

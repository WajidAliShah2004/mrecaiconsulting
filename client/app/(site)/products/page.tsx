import type { Metadata } from 'next';
import ProductsPage from '@/pages/Products';

const title = "ATLAS Engine | AI-Powered Lead Automation | MRECAI";
const description = "ATLAS Engine: a fully autonomous revenue engine that hunts, qualifies, enriches, and delivers ready-to-close prospects to your sales team around the clock.";
const canonical = "/products";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'MRE Consulting & Insurance',
      images: ['/og-image.jpg'],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/twitter-image.jpg'] },
  };
}

export default function Page() {
  return <ProductsPage />;
}

import type { Metadata } from 'next';
import TaxStrategyPage from '@/pages/services/TaxStrategy';

const title = "Tax Strategy & Planning for Small Business | MRECAI";
const description = "Strategic tax planning for small businesses. Entity optimization, R&D credits, cost segregation, Section 179, and proactive tax savings strategies that work.";
const canonical = "/services/tax-strategy";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "small business tax strategy 2025, Section 179 expensing limits, R&D tax credits, cost segregation, tax planning, entity optimization, S-corp election",
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'MRECAI Consulting & Insurance',
      images: ['/og-image.jpg'],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/twitter-image.jpg'] },
  };
}

export default function Page() {
  return <TaxStrategyPage />;
}

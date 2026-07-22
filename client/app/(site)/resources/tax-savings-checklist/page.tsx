import type { Metadata } from 'next';
import TaxSavingsChecklistPage from '@/pages/resources/TaxSavingsChecklist';

const title = "2026 Tax Savings Checklist | MRE Consulting & Insurance";
const description = "Interactive tax efficiency checklist for business owners. Audit your entity structure, deductions, and credits in five minutes and find missed savings.";
const canonical = "/resources/tax-savings-checklist";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "tax savings checklist, small business tax deductions 2026, S-Corp tax benefits, cost segregation NYC",
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
  return <TaxSavingsChecklistPage />;
}

import type { Metadata } from 'next';
import TaxSavingsSnapshotPage from '@/pages/resources/TaxSavingsSnapshot';

const title = "Free Tax Savings Snapshot | MRE Consulting";
const description = "Get a personalized tax savings snapshot in 10 minutes. Discover potential deductions, credits, and strategies to reduce your tax burden — free from MRECAI.";
const canonical = "/resources/tax-savings-snapshot";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "tax savings calculator, tax deduction finder, tax planning assessment, business tax savings, tax strategy consultation",
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
  return <TaxSavingsSnapshotPage />;
}

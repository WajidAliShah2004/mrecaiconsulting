import type { Metadata } from 'next';
import InsuranceGapChecklistPage from '@/pages/resources/InsuranceGapChecklist';

const title = "Insurance Gap Checklist | Business Risk Audit | MRECAI";
const description = "Identify hidden gaps in your commercial and personal insurance. Use our free interactive risk audit to protect your business, family, and personal assets.";
const canonical = "/resources/insurance-gap-checklist";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "insurance gap checklist, commercial insurance audit, business risk management NYC, cyber liability check",
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
  return <InsuranceGapChecklistPage />;
}

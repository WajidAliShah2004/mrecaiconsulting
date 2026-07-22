import type { Metadata } from 'next';
import ContractorsPage from '@/pages/industries/Contractors';

const title = "Accounting & Strategy for Contractors | MRECAI";
const description = "Specialized financial and tech solutions for HVAC, plumbing, and general contractors. Job costing, AIA billing, and AI lead reactivation for home services.";
const canonical = "/industries/contractors";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "contractor accounting, construction tax strategy, HVAC business consulting, plumbing business growth, AIA billing NYC, contractor insurance audit",
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
  return <ContractorsPage />;
}

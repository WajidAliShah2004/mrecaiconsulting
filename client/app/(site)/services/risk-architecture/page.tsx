import type { Metadata } from 'next';
import RiskArchitecturePage from '@/pages/services/RiskArchitecture';

const title = "Risk Architecture & Insurance Services | MRECAI";
const description = "Comprehensive risk architecture and insurance services: cyber liability, professional liability, and commercial coverage through our Grober Imbey partnership.";
const canonical = "/services/risk-architecture";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "business insurance Valley Stream, cyber liability coverage for consultants, professional liability insurance, E&O insurance, risk management",
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
  return <RiskArchitecturePage />;
}

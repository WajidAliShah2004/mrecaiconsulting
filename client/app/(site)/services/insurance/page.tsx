import type { Metadata } from 'next';
import InsuranceServicesPage from '@/pages/services/InsuranceServices';

const title = "Insurance Solutions & Risk Management | MRECAI";
const description = "Expert insurance consulting for business and personal protection, backed by 50+ years of Grober Imbey legacy expertise. Cyber, liability, private client.";
const canonical = "/services/insurance";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "business insurance NYC, personal insurance, cyber liability insurance, risk management, Grober Imbey insurance, private client services, insurance gap analysis",
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
  return <InsuranceServicesPage />;
}

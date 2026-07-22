import type { Metadata } from 'next';
import StrategicTaxPlanningPage from '@/pages/services/StrategicTaxPlanning';

const title = "Strategic Tax Planning & Advisory | MRE Consulting";
const description = "Multi-year tax strategy for business owners and high-net-worth individuals: entity optimization, R&D credits, cost segregation, proactive minimization.";
const canonical = "/services/strategic-tax-planning";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "strategic tax planning, tax advisory, R&D tax credits, cost segregation study, entity optimization, S-Corp election, wealth tax strategy",
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
  return <StrategicTaxPlanningPage />;
}

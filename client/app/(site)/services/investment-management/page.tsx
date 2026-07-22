import type { Metadata } from 'next';
import InvestmentManagementPage from '@/pages/services/InvestmentManagement';

const title = "Investment & Wealth Management | MRE Consulting";
const description = "Certified investment management and holistic financial planning that syncs your portfolio with your tax strategy and long-term business and wealth goals.";
const canonical = "/services/investment-management";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "investment management, wealth management, financial planning, CFP, CFA, tax-efficient investing",
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
  return <InvestmentManagementPage />;
}

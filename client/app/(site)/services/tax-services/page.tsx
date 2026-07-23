import type { Metadata } from 'next';
import TaxServicesPage from '@/pages/services/TaxServices';

const title = "Tax Preparation & Consulting | MRECAI Consulting";
const description = "Expert tax preparation and strategic consulting for businesses and individuals. Minimize liability with proactive planning and year-round compliance support.";
const canonical = "/services/tax-services";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "tax preparation, tax consulting, small business taxes, individual tax return, IRS representation, tax strategy NYC, tax compliance",
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
  return <TaxServicesPage />;
}

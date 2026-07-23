import type { Metadata } from 'next';
import TaxPreparationPage from '@/pages/services/TaxPreparation';

const title = "Tax Preparation Services | Individual & Business | MRECAI";
const description = "Tax preparation for individuals and businesses with clear documentation, reliable filing, and year-round guidance. Accurate returns, on time, every time.";
const canonical = "/services/tax-preparation";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "tax preparation, tax filing, individual taxes, business taxes, tax returns, IRS, tax professional",
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
  return <TaxPreparationPage />;
}

import type { Metadata } from 'next';
import ServicesPage from '@/pages/Services';

const title = "Tax, Insurance & Finance Consulting Services | MRECAI";
const description = "Strategic tax planning and preparation, insurance and risk management, bookkeeping and accounting, and financial consulting — all under one roof.";
const canonical = "/services";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "tax consulting services, tax planning services, tax preparation, insurance consulting, risk management, finance consulting, bookkeeping and accounting, tax consultant NYC",
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
  return <ServicesPage />;
}

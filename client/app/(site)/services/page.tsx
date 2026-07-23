import type { Metadata } from 'next';
import ServicesPage from '@/pages/Services';

const title = "AI, Tax, Insurance & Business Consulting Services | MRECAI";
const description = "Expert AI consulting and automation, strategic tax planning, insurance and risk management, bookkeeping, and business consulting — all under one roof.";
const canonical = "/services";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "AI consulting services, business automation, tax planning services, tax preparation, insurance consulting, risk management, bookkeeping and accounting, business consulting NYC",
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

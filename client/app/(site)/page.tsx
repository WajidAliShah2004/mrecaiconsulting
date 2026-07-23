import type { Metadata } from 'next';
import HomePage from '@/pages/Home';

const title = "Tax, Insurance & Finance Consulting | MRECAI";
const description = "Full-service tax, insurance, and finance consulting firm in NYC. Strategic tax planning and preparation, insurance and risk management, and bookkeeping, accounting, and financial consulting.";
const canonical = "/";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "tax consulting, tax planning, tax preparation, insurance consulting, risk management, finance consulting, bookkeeping, accounting, tax consultant NYC",
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
  return <HomePage />;
}

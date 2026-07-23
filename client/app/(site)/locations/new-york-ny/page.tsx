import type { Metadata } from 'next';
import NewYorkNYPage from '@/pages/locations/NewYorkNY';

const title = "Business Services in New York, NY | MRECAI";
const description = "Local tax preparation, insurance, bookkeeping, and finance consulting in New York, NY. Serving Manhattan and the NYC metro area. Call (929) 702-2818.";
const canonical = "/locations/new-york-ny";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "business consulting NYC, tax preparation New York, Manhattan bookkeeping, insurance services NYC, accounting services Manhattan, New York business services",
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
  return <NewYorkNYPage />;
}

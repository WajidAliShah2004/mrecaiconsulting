import type { Metadata } from 'next';
import ManhattanPage from '@/pages/locations/Manhattan';

const title = "Business Services in Manhattan | MRE Consulting & Insurance";
const description = "Professional tax preparation, insurance, bookkeeping, and finance consulting services in Manhattan, NYC. Call (929) 702-2818 for a free consultation.";
const canonical = "/locations/manhattan";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "Manhattan business consulting, bookkeeping Manhattan, tax preparation Manhattan, insurance services Manhattan, Upper East Side business services",
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
  return <ManhattanPage />;
}

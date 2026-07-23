import type { Metadata } from 'next';
import AboutPage from '@/pages/About';

const title = "About MRECAI | Consulting, Tax & Insurance Experts";
const description = "Learn about MRECAI, an integrated firm offering tax strategy and preparation, insurance consulting, and bookkeeping, accounting, and finance consulting services.";
const canonical = "/about";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "about MRECAI, business consulting company, tax planning firm, insurance consulting, accounting services, company history",
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
  return <AboutPage />;
}

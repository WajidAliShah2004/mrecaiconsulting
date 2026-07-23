import type { Metadata } from 'next';
import AboutPage from '@/pages/About';

const title = "About MRECAI | AI Consulting & Technology Leaders";
const description = "Learn about MRE Consulting & Insurance, an AI-first business transformation firm offering AI consulting, tax strategy, insurance, and business consulting.";
const canonical = "/about";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "about MRECAI, AI consulting company, tax planning firm, insurance consulting, business transformation, company history",
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

import type { Metadata } from 'next';
import TechnologyPage from '@/pages/services/Technology';

const title = "Technology & Systems Development | MRE Consulting";
const description = "High-performance technology solutions that support business operations: custom web development, cloud integration, and scalable, secure systems architecture.";
const canonical = "/services/technology";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "technology consulting, custom web development, systems architecture, CRM implementation, cloud integration, business technology solutions NYC",
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
  return <TechnologyPage />;
}

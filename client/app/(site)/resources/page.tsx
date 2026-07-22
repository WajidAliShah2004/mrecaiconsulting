import type { Metadata } from 'next';
import ResourcesPage from '@/pages/Resources';

const title = "Resources & Downloads | Guides, Tools & More | MRECAI";
const description = "Download free white papers, industry guides, and use our ROI calculators. Expert insights on AI, automation, digital marketing, and business transformation.";
const canonical = "/resources";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "white papers, business guides, ROI calculator, automation guide, AI implementation, digital transformation resources",
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
  return <ResourcesPage />;
}

import type { Metadata } from 'next';
import ResourcesPage from '@/pages/Resources';

const title = "Resources & Downloads | Guides, Tools & More | MRECAI";
const description = "Download free white papers, industry guides, and use our ROI calculators. Expert insights on business strategy, tax planning, insurance, and financial management.";
const canonical = "/resources";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "white papers, business guides, ROI calculator, tax planning resources, insurance guides, financial management resources",
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
  return <ResourcesPage />;
}

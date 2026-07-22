import type { Metadata } from 'next';
import ExecutivesGuidePage from '@/pages/resources/ExecutivesGuide';

const title = "The Executive's Guide to AI | MRECAI";
const description = "Learn how to implement practical AI automation in your business to save time and money while keeping data secure — a complete guide for busy executives.";
const canonical = "/resources/executives-guide-to-ai";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "AI for Small Business, Business Automation Strategy, AI Risk Management, MRE Framework, AI Implementation",
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
  return <ExecutivesGuidePage />;
}

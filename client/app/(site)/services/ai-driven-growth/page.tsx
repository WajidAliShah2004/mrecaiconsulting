import type { Metadata } from 'next';
import AIDrivenGrowthPage from '@/pages/services/AIDrivenGrowth';

const title = "AI Consulting & Automation Services | MRECAI";
const description = "Transform your business with AI consulting, custom chatbots, and automation workflows. Deploy AI agents that work 24/7 to capture leads and scale operations.";
const canonical = "/services/ai-driven-growth";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "AI consulting services, AI automation, custom AI chatbots, business automation, AI agents, machine learning consulting, AI implementation NYC",
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
  return <AIDrivenGrowthPage />;
}

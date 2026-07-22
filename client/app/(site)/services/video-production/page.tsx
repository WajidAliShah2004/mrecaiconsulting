import type { Metadata } from 'next';
import VideoProductionPage from '@/pages/services/VideoProduction';

const title = "Video Production & Editing Services | MRECAI";
const description = "Professional video production and editing: promotional videos, social media content, explainer videos, and motion graphics that make your message land.";
const canonical = "/services/video-production";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "video production services, video editing, promotional videos, social media video content, explainer videos, motion graphics, corporate video production NYC",
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
  return <VideoProductionPage />;
}

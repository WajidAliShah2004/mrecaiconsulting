import type { Metadata } from 'next';
import GraphicDesignPage from '@/pages/services/GraphicDesign';

const title = "Graphic Design Services | Logo & Branding | MRECAI";
const description = "Professional graphic design: logo design, brand identity, marketing materials, social media graphics, and UI/UX design to transform your visual presence.";
const canonical = "/services/graphic-design";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "graphic design services, logo design, brand identity, marketing design, social media graphics, UI UX design, visual branding NYC",
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
  return <GraphicDesignPage />;
}

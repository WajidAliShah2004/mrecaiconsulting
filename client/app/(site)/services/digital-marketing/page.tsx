import type { Metadata } from 'next';
import DigitalMarketingPage from '@/pages/services/DigitalMarketing';

const title = "Digital Marketing Services | SEO, Social & PPC | MRECAI";
const description = "Full-service digital marketing: SEO, social media management, PPC advertising, content marketing, and brand development with data-driven, measurable ROI.";
const canonical = "/services/digital-marketing";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "digital marketing services, SEO optimization, social media marketing, PPC management, content marketing, brand development, digital advertising NYC",
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
  return <DigitalMarketingPage />;
}

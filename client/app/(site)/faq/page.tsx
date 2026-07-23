import type { Metadata } from 'next';
import FAQPage from '@/pages/FAQ';

const title = "Frequently Asked Questions | FAQ | MRECAI";
const description = "Find answers to common questions about our services, pricing, and process — tax services, insurance, accounting, and finance consulting explained.";
const canonical = "/faq";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "FAQ, frequently asked questions, business consulting questions, tax services FAQ, insurance questions, accounting FAQ",
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
  return <FAQPage />;
}

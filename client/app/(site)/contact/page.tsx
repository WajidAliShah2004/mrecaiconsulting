import type { Metadata } from 'next';
import ContactPage from '@/pages/Contact';

const title = "Contact MRECAI | AI Consulting & Software Inquiries";
const description = "Contact MRE Consulting & Insurance for AI consulting, software development, and digital marketing. Call 929-702-2818 or email Matthew@MRECAI.com today.";
const canonical = "/contact";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "contact MRECAI, AI consulting inquiry, software development quote, digital marketing consultation, technology services contact",
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
  return <ContactPage />;
}

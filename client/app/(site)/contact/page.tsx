import type { Metadata } from 'next';
import ContactPage from '@/pages/Contact';

const title = "Contact MRECAI | Consulting, Tax & Insurance Inquiries";
const description = "Contact MRECAI for tax planning, insurance, accounting, and finance consulting services. Call 929-702-2818 or email Matthew@MRECAI.com today.";
const canonical = "/contact";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "contact MRECAI, business consulting inquiry, tax planning consultation, insurance quote, accounting services contact",
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
  return <ContactPage />;
}

import type { Metadata } from 'next';
import HomePage from '@/pages/Home';

const title = "AI Consulting, Tax, Insurance & Business Services | MRECAI";
const description = "Premier AI consulting and business services firm in NYC. Custom AI automation, strategic tax planning, insurance and risk management, and business consulting.";
const canonical = "/";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "AI consulting, business automation, AI chatbots, tax planning, tax preparation, insurance consulting, risk management, bookkeeping, business consulting",
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
  return <HomePage />;
}

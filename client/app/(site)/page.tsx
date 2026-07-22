import type { Metadata } from 'next';
import HomePage from '@/pages/Home';

const title = "AI Consulting, Software Development & Marketing | MRECAI";
const description = "Premier AI consulting and software development firm in NYC. Custom AI solutions, web and mobile apps, digital marketing, plus tax and insurance support.";
const canonical = "/";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "AI consulting, software development, digital marketing, business automation, custom software development, AI chatbots, web development, app development",
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

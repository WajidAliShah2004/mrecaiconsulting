import type { Metadata } from 'next';
import StartHerePage from '@/pages/StartHere';

const title = "Start Here - Find Your Perfect Service Package | MRECAI";
const description = "Take our quick four-question quiz to discover which services best fit your business and get personalized recommendations in under two minutes. Start now.";
const canonical = "/start-here";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "business assessment, service finder, business needs quiz, personalized recommendations",
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
  return <StartHerePage />;
}

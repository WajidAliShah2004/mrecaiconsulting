import type { Metadata } from 'next';
import AboutFounderPage from '@/pages/AboutFounder';

const title = "Meet Our People | MRECAI Leadership Team";
const description = "Meet the MRECAI leadership team: Matthew R. Epstein, President & Founder; Jessie Gwilt, CMO; and Wajid Ali Shah, CTO. Expert leadership for your business.";
const canonical = "/about/founder";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "MRECAI team, Matthew R. Epstein, Jessie Gwilt, Wajid Ali Shah, business consultant, CMO, CTO, leadership team",
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
  return <AboutFounderPage />;
}

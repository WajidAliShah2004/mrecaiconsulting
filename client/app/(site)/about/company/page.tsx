import type { Metadata } from 'next';
import AboutCompanyPage from '@/pages/AboutCompany';

const title = "About Our Company | MRECAI History & Mission";
const description = "Learn about MRECAI Consulting & Insurance — our company history, mission, core values, and how we operate to serve 180+ clients across New York and beyond.";
const canonical = "/about/company";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "about our company, company history, mission statement, core values, how we operate",
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
  return <AboutCompanyPage />;
}

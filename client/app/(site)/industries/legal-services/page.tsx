import type { Metadata } from 'next';
import LegalServicesPage from '@/pages/industries/LegalServices';

const title = "Accounting & Strategy for Law Firms | MRECAI";
const description = "Specialized back-office and tax management for law firms. Trust accounting compliance, partner compensation, and AI-powered lead intake for legal practices.";
const canonical = "/industries/legal-services";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "law firm accounting, legal practice consulting, IOLTA compliance NYC, partner compensation strategy, law firm AI automation, legal professional liability",
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
  return <LegalServicesPage />;
}

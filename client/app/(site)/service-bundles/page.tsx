import type { Metadata } from 'next';
import ServiceBundlesPage from '@/pages/ServiceBundles';

const title = "Service Bundles - Packaged Solutions | MRECAI";
const description = "Choose from pre-packaged service bundles built for your business: Foundation, Tax Optimization, Risk Protection, Growth & Operations, or Comprehensive.";
const canonical = "/service-bundles";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "service packages, business bundles, tax and accounting packages, insurance bundles, business consulting packages",
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
  return <ServiceBundlesPage />;
}

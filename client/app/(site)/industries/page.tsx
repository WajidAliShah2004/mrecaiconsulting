import type { Metadata } from 'next';
import IndustriesHubPage from '@/pages/IndustriesHub';

const title = "Industry-Specific Solutions | MRE Consulting";
const description = "Tailored financial, risk, and technology solutions for contractors, medical practices, real estate, eCommerce, and more. One firm, many vertical strategies.";
const canonical = "/industries";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "industry solutions, contractor accounting, medical practice consulting, real estate tax strategy, professional services advisory",
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
  return <IndustriesHubPage />;
}

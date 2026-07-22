import type { Metadata } from 'next';
import RealEstatePage from '@/pages/industries/RealEstate';

const title = "Accounting & Tax Strategy for Real Estate | MRECAI";
const description = "Advanced tax engineering for real estate investors and developers: cost segregation, 1031 exchanges, and property-level financial management and reporting.";
const canonical = "/industries/real-estate";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "real estate accounting, investor tax strategy, cost segregation NYC, 1031 exchange consulting, property management finance, real estate asset protection",
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
  return <RealEstatePage />;
}

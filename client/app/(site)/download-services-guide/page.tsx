import type { Metadata } from 'next';
import DownloadServicesGuidePage from '@/pages/DownloadServicesGuide';

const title = "Download Services Guide | Free PDF | MRECAI";
const description = "Download our comprehensive services guide and explore our tax, insurance, and accounting solutions. Claim your free PDF copy today.";
const canonical = "/download-services-guide";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "services guide, business services PDF, tax services guide, insurance guide, free download",
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
  return <DownloadServicesGuidePage />;
}

import type { Metadata } from 'next';
import TermsOfServicePage from '@/pages/TermsOfService';

const title = "Terms of Service | MRE Consulting & Insurance";
const description = "Review the terms of service that govern your use of the MRE Consulting & Insurance website and our consulting, insurance, tax, and technology services.";
const canonical = "/terms-of-service";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
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
  return <TermsOfServicePage />;
}

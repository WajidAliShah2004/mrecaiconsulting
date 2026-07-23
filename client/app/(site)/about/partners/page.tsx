import type { Metadata } from 'next';
import AboutPartnersPage from '@/pages/AboutPartners';

const title = "Strategic Partners | MRECAI Trusted Network";
const description = "Discover MRECAI's network of strategic partners, including top insurance carriers, financial advisors, accountants, and trusted professional service providers.";
const canonical = "/about/partners";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "strategic partners, insurance carriers, financial advisors, business partners, professional service partners",
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
  return <AboutPartnersPage />;
}

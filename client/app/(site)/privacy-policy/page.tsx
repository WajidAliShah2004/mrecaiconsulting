import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/pages/PrivacyPolicy';

const title = "Privacy Policy | MRE Consulting & Insurance";
const description = "Read the MRE Consulting & Insurance privacy policy to learn how we collect, use, and protect your personal information across our services and website.";
const canonical = "/privacy-policy";

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
  return <PrivacyPolicyPage />;
}

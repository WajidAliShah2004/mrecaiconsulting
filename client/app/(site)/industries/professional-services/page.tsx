import type { Metadata } from 'next';
import ProfessionalServicesPage from '@/pages/industries/ProfessionalServices';

const title = "Accounting & Strategy for Agencies | MRE Consulting";
const description = "High-margin scalability for professional service firms. Fractional COO strategy, strategic tax planning, and automated operations for modern agencies.";
const canonical = "/industries/professional-services";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "agency accounting, consulting firm strategy, fractional COO NYC, S-Corp election for consultants, agency project management automation, professional liability review",
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
  return <ProfessionalServicesPage />;
}

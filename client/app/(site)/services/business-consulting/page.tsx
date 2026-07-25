import type { Metadata } from 'next';
import BusinessConsultingPage from '@/pages/services/BusinessConsulting';

const title = "Business Consulting & Management | MRECAI Consulting";
const description = "Comprehensive business management consulting that connects accounting, tax, insurance, and operations to turn operational chaos into systems and real growth.";
const canonical = "/services/business-consulting";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "business management consulting, strategic planning, operational efficiency, growth strategy, MRECAI",
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
  return <BusinessConsultingPage />;
}

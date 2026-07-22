import type { Metadata } from 'next';
import MedicalPracticesPage from '@/pages/industries/MedicalPractices';

const title = "Accounting & Strategy for Medical Practices | MRECAI";
const description = "Specialized financial and tech solutions for private medical practices. HIPAA-compliant AI, revenue cycle management, and practice growth strategy support.";
const canonical = "/industries/medical-practices";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "medical practice accounting, healthcare consulting, doctors tax strategy, HIPAA AI agents, private practice growth NYC, medical billing audit",
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
  return <MedicalPracticesPage />;
}

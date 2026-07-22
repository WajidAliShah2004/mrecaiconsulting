import type { Metadata } from 'next';
import ReadinessAssessmentPage from '@/pages/tools/ReadinessAssessment';

const title = "AI Readiness Assessment | MRECAI";
const description = "Assess your business readiness for AI and automation with our free assessment tool. Identify opportunities, gaps, and next steps in just a few minutes.";
const canonical = "/tools/readiness-assessment";

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
  return <ReadinessAssessmentPage />;
}

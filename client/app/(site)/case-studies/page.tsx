import type { Metadata } from 'next';
import CaseStudiesPage from '@/pages/CaseStudies';

const title = "Case Studies & Success Stories | MRE Consulting & Insurance";
const description = "Real results from real clients. See how MRE Consulting & Insurance helps businesses save money, improve efficiency, and achieve measurable, lasting growth.";
const canonical = "/case-studies";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "case studies, success stories, client results, business consulting results, tax savings case studies, ROI examples",
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
  return <CaseStudiesPage />;
}

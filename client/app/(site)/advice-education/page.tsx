import type { Metadata } from 'next';
import AdviceEducationPage from '@/pages/AdviceEducation';

const title = "Advice & Education | White Papers & Insights | MRECAI";
const description = "Download free white papers and industry insights on AI, automation, digital marketing, and business transformation, backed by McKinsey, PwC, and Gartner.";
const canonical = "/advice-education";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "white papers, business education, AI insights, automation guide, digital marketing education, industry research",
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
  return <AdviceEducationPage />;
}

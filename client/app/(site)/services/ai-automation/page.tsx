import type { Metadata } from 'next';
import AIConsultingPage from '@/pages/AIConsulting';

const title = "AI & Automation Consulting | MRE Consulting";
const description = "Transform your business with AI lead generation, automated follow-ups, and intelligent CRM systems. 24/7 sales agents and missed-call text back solutions.";
const canonical = "/ai-consulting";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "AI consulting, business automation, AI lead generation, 24/7 sales agents, missed-call text back, CRM automation, AI readiness audit",
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
  return <AIConsultingPage />;
}

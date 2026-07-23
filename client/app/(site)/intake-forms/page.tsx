import type { Metadata } from 'next';
import IntakeFormsPage from '@/pages/IntakeForms';

const title = "Insurance Intake Forms | Quick & Easy | MRECAI";
const description = "Complete your insurance intake form online. Personal umbrella, homeowners, auto, commercial, and professional liability forms available. Fast, secure, and easy.";
const canonical = "/intake-forms";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "insurance intake forms, insurance application, homeowners insurance form, auto insurance form, commercial insurance form",
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
  return <IntakeFormsPage />;
}

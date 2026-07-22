import type { Metadata } from 'next';
import ServicesPage from '@/pages/Services';

const title = "AI, Software & Digital Marketing Services | MRECAI";
const description = "Expert AI consulting, custom software development, digital marketing, design, and video production — plus tax and insurance support, all under one roof.";
const canonical = "/services";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "AI consulting services, custom software development, digital marketing agency, graphic design services, video production, business automation, web development, mobile app development",
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
  return <ServicesPage />;
}

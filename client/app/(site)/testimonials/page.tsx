import type { Metadata } from 'next';
import TestimonialsPage from '@/pages/Testimonials';

const title = "Client Testimonials | 4.9/5 Rating | MRECAI Reviews";
const description = "Read what our 180+ clients say about MRECAI. A 4.9/5 star rating with a 98% satisfaction rate — honest, real reviews from real businesses and individuals.";
const canonical = "/testimonials";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "MRECAI reviews, client testimonials, customer reviews, business consulting reviews, insurance reviews, client satisfaction",
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
  return <TestimonialsPage />;
}

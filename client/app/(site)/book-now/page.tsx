import type { Metadata } from 'next';
import BookNowPage from '@/pages/BookNow';

const title = "Book Free Consultation | Schedule with MRECAI Today";
const description = "Schedule your free consultation with MRECAI. Choose a convenient time, get expert advice, and start your journey to business success with flexible booking.";
const canonical = "/book-now";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "book consultation, schedule appointment, free consultation, business consulting appointment, insurance consultation",
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
  return <BookNowPage />;
}

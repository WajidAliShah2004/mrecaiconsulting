import type { Metadata } from 'next';
import BlogPage from '@/pages/Blog';

const title = "Blog & Insights | Expert Business Advice | MRECAI";
const description = "Expert advice and insights on tax planning, insurance, and accounting. Stay informed with the latest industry trends and best practices.";
const canonical = "/blog";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "business blog, consulting advice, insurance tips, tax planning, accounting insights, business strategy",
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
  return <BlogPage />;
}

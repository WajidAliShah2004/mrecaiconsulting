import type { Metadata } from 'next';
import EcommercePage from '@/pages/industries/Ecommerce';

const title = "Accounting & Strategy for Retail & eCommerce | MRECAI";
const description = "Data-driven infrastructure for modern retailers. Inventory-based tax strategy, multi-channel nexus management, and AI customer support built for eCommerce.";
const canonical = "/industries/ecommerce";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "eCommerce accounting, Shopify tax strategy, Amazon FBA consulting, sales tax nexus management, inventory COGS tracking, retail profit optimization",
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
  return <EcommercePage />;
}

import type { Metadata } from 'next';
import BookkeepingAccountingPage from '@/pages/services/BookkeepingAccounting';

const title = "Bookkeeping & Accounting Services | MRECAI";
const description = "Monthly bookkeeping, clean-up, reporting, and accounting support for businesses that want accurate books, cashflow visibility, and decision-ready financials.";
const canonical = "/services/bookkeeping-accounting";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: "bookkeeping services, accounting, monthly close, financial reporting, QuickBooks, catch-up bookkeeping, small business accounting",
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
  return <BookkeepingAccountingPage />;
}

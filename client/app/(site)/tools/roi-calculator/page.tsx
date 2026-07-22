import type { Metadata } from 'next';
import ROICalculatorPage from '@/pages/tools/ROICalculator';

const title = "AI & Automation ROI Calculator | MRECAI";
const description = "Calculate your potential savings from AI and automation with our free ROI calculator, featuring industry-specific benchmarks and instant, clear results.";
const canonical = "/tools/roi-calculator";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
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
  return <ROICalculatorPage />;
}

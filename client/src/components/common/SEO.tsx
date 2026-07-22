'use client';

// Title/description/canonical/og/twitter tags are now emitted at build time by
// each route's generateMetadata (Next.js Metadata API). This component remains
// solely to render the per-page JSON-LD structured data that pages pass in.
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  schema?: object;
  keywords?: string;
}

const SEO = ({ schema }: SEOProps) => {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
};

export default SEO;

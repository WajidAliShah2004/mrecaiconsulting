// Site-wide Schema.org JSON-LD, migrated from index.html.
// Phone (+1-929-702-2818) and foundingDate (2024 — the business; 2009 is the
// founder's professional experience) confirmed by the business owner.

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
  name: 'MRECAI',
  alternateName: ['MRECAI Consulting & Insurance', 'MRECAI NY', 'MRECAI NYC'],
  legalName: 'MRECAI',
  url: 'https://mrecai.com',
  logo: 'https://mrecai.com/images/logo.png',
  image: 'https://mrecai.com/images/logo.png',
  description:
    'New York-based tax, insurance, and accounting firm integrating tax strategy and preparation, insurance services, and bookkeeping and accounting.',
  slogan: 'Integrated Tax, Insurance & Accounting in NYC',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Matthew R. Epstein',
    givenName: 'Matthew',
    familyName: 'Epstein',
    jobTitle: 'President & Founder',
    sameAs: ['https://www.linkedin.com/in/matthewepstein', 'https://mrecai.com/about/founder'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 W Mill Dr',
    addressLocality: 'Great Neck',
    addressRegion: 'NY',
    postalCode: '11021',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7866',
    longitude: '-73.7290',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-929-702-2818',
    contactType: 'customer service',
    email: 'Matthew@MRECAI.com',
    availableLanguage: 'en',
    areaServed: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
  },
  memberOf: {
    '@type': 'Organization',
    name: 'Grober Imbey Agency',
    description: '50+ year insurance legacy with 5-star reputation',
  },
  disambiguatingDescription:
    'MRECAI is a Great Neck, New York-based tax, insurance, and accounting firm specializing in integrated tax strategy, insurance, and accounting. Not affiliated with MRE Consulting, Ltd (Houston-based Salesforce/Infosys partner).',
  sameAs: [
    'https://www.facebook.com/share/1CeUfmRx4F/',
    'https://www.linkedin.com/company/mre-consulting-insurance/',
    'https://instagram.com/mrecaillc',
    'https://youtube.com/@mrecaillc',
    'https://twitter.com/MRECAIllc',
  ],
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matthew R. Epstein',
  givenName: 'Matthew',
  additionalName: 'R.',
  familyName: 'Epstein',
  jobTitle: 'President & Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'MRECAI',
    url: 'https://mrecai.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 W Mill Dr',
      addressLocality: 'Great Neck',
      addressRegion: 'NY',
      postalCode: '11021',
      addressCountry: 'US',
    },
  },
  url: 'https://mrecai.com/about/founder',
  email: 'Matthew@MRECAI.com',
  telephone: '+1-929-702-2818',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Great Neck',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/matthewepstein',
    'https://mrecai.com/about/founder',
    'https://www.facebook.com/share/1CeUfmRx4F/',
  ],
  description:
    'Founder and President of MRECAI, a New York-based tax, insurance, and accounting firm specializing in integrated tax strategy, insurance, and accounting. Not affiliated with Matthew R. Epstein, Trial Attorney at U.S. Department of Labor.',
};

export const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MRECAI',
  url: 'https://mrecai.com',
};

export const jsonLdScriptProps = (schema: object) => ({
  type: 'application/ld+json',
  dangerouslySetInnerHTML: { __html: JSON.stringify(schema).replace(/</g, '\\u003c') },
});

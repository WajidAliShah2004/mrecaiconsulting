// Site-wide Schema.org JSON-LD, migrated from index.html.
// Phone (+1-929-702-2818) and foundingDate (2024 — the business; 2009 is the
// founder's professional experience) confirmed by the business owner.

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
  name: 'MRECAI',
  alternateName: ['MRE Consulting & Insurance', 'MRECAI NY', 'MRECAI NYC'],
  legalName: 'MRECAI',
  url: 'https://mrecai.com',
  logo: 'https://mrecai.com/images/logo.jpeg',
  image: 'https://mrecai.com/images/logo.jpeg',
  description:
    'New York-based professional services firm integrating business consulting, insurance services, tax strategy, AI automation, investment management, estate planning, and digital marketing.',
  slogan: 'Integrated Tax, Insurance, and AI Consulting Services in NYC',
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
    streetAddress: '205 East 95th Street',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10128',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7831',
    longitude: '-73.9712',
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
    'MRECAI is a New York City-based professional services firm specializing in integrated business consulting, insurance, tax strategy, and AI automation. Not affiliated with MRE Consulting, Ltd (Houston-based Salesforce/Infosys partner).',
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
      streetAddress: '205 East 95th Street',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10128',
      addressCountry: 'US',
    },
  },
  url: 'https://mrecai.com/about/founder',
  email: 'Matthew@MRECAI.com',
  telephone: '+1-929-702-2818',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/matthewepstein',
    'https://mrecai.com/about/founder',
    'https://www.facebook.com/share/1CeUfmRx4F/',
  ],
  description:
    'Founder and President of MRECAI, a New York-based professional services firm specializing in integrated business consulting, insurance, tax strategy, and AI automation. Not affiliated with Matthew R. Epstein, Trial Attorney at U.S. Department of Labor.',
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

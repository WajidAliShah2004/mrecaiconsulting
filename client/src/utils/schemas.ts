// Schema.org structured data for SEO and AI indexing
// Updated: January 17, 2026 - Enhanced for Answer Engine Optimization (AEO)

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
  name: 'MRECAI',
  alternateName: ['MRE Consulting & Insurance', 'MRECAI NY', 'MRECAI NYC'],
  legalName: 'MRECAI',
  url: 'https://mrecai.com',
  logo: 'https://mrecai.com/images/logo.jpeg',
  image: 'https://mrecai.com/images/logo.jpeg',
  description: 'New York-based professional services firm integrating business consulting, insurance services, tax strategy, AI automation, investment management, and estate planning. Serving NYC businesses with comprehensive financial and operational solutions.',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Matthew R. Epstein',
    givenName: 'Matthew',
    familyName: 'Epstein',
    jobTitle: 'President & Founder',
    sameAs: [
      'https://www.linkedin.com/in/matthewepstein',
      'https://mrecai.com/about/founder'
    ],
    knowsAbout: [
      'Business Consulting',
      'Insurance Services',
      'Tax Strategy',
      'AI Automation',
      'Investment Management',
      'Estate Planning'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'MRECAI',
      url: 'https://mrecai.com'
    }
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-929-702-2818',
    contactType: 'customer service',
    email: 'Matthew@MRECAI.com',
    availableLanguage: ['en'],
    areaServed: 'US',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
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
  areaServed: [
    {
      '@type': 'State',
      name: 'New York',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  knowsAbout: [
    'Business Consulting',
    'Strategic Planning',
    'Insurance Services',
    'Commercial Insurance',
    'Personal Insurance',
    'Tax Preparation',
    'Tax Strategy',
    'Tax Planning',
    'AI Automation',
    'Business Automation',
    'Artificial Intelligence',
    'Investment Management',
    'Wealth Management',
    'Estate Planning',
    'Estate Consulting',
    'Risk Management',
    'Financial Planning',
    'Bookkeeping',
    'Accounting',
    'Technology Consulting',
    'CRM Implementation',
    'Process Automation',
    'Workflow Optimization',
  ],
  sameAs: [
    'https://www.facebook.com/share/1CeUfmRx4F/',
    'https://www.linkedin.com/company/mre-consulting-insurance/',
    'https://instagram.com/mrecaillc',
    'https://youtube.com/@mrecaillc',
    'https://twitter.com/MRECAIllc',
    'https://yelp.to/HNkgPbV_w_',
    'https://tiktok.com/@mrecai18',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Professional Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Consulting',
          description: 'Strategic business consulting, planning, and operational optimization',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Insurance Services',
          description: 'Personal and commercial insurance coverage and risk management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tax Services',
          description: 'Tax preparation, planning, and strategy for individuals and businesses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Automation',
          description: 'AI implementation, process automation, and technology integration',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  // Partner organizations for entity disambiguation and authority inheritance
  partner: [
    {
      '@type': 'Organization',
      name: 'Grober Imbey Insurance Agency',
      description: '50+ year legacy insurance agency',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '100+'
      }
    },
    {
      '@type': 'Organization',
      name: 'NovaEdge Solutions',
      description: 'AI and technology implementation partner',
      url: 'https://novaedgesolutions.co/',
    },
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'Grober Imbey Agency',
    description: '50+ year insurance legacy with 5-star reputation',
    url: 'https://groberimbey.com'
  },
  // Disambiguation from other entities
  disambiguatingDescription: 'MRECAI is a Great Neck, New York-based professional services firm specializing in integrated business consulting, insurance, tax strategy, and AI automation. Not affiliated with MRE Consulting, Ltd (Houston-based Salesforce/Infosys partner).',
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'MRECAI',
  alternateName: 'MRECAI NY',
  slogan: 'Integrated Tax, Insurance, and AI Consulting Services in NYC',
  image: 'https://mrecai.com/images/logo.jpeg',
  '@id': 'https://mrecai.com',
  url: 'https://mrecai.com',
  telephone: '+1-929-702-2818',
  email: 'Matthew@MRECAI.com',
  priceRange: '$$',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  paymentAccepted: ['Cash', 'Credit Card', 'Check', 'Bank Transfer'],
  currenciesAccepted: 'USD',
  memberOf: {
    '@type': 'Organization',
    name: 'Grober Imbey Agency',
    description: '50+ year insurance legacy with 5-star reputation'
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MRECAI',
  alternateName: 'MRE Consulting & Insurance',
  url: 'https://mrecai.com',
  description: 'Professional business consulting, insurance, tax, AI automation, and financial services',
  publisher: {
    '@type': 'Organization',
    name: 'MRECAI',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mrecai.com/images/logo.jpeg',
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mrecai.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const serviceSchemas = {
  businessConsulting: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Consulting',
    name: 'Business Consulting & Management',
    provider: {
      '@type': 'Organization',
      name: 'MRECAI',
      url: 'https://mrecai.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Strategic business consulting services including planning, financial analysis, operational optimization, cash flow management, KPI tracking, and scalable systems development.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  },
  insurance: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Insurance Services',
    name: 'Insurance Services & Risk Management',
    provider: {
      '@type': 'Organization',
      name: 'MRECAI',
      url: 'https://mrecai.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Expert insurance consulting for personal and commercial coverage including auto, home, business liability, cyber insurance, professional liability, and comprehensive risk management strategies. Powered by 50+ year legacy of Grober Imbey Insurance Agency.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  },
  taxAccounting: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Tax & Accounting',
    name: 'Tax Preparation, Strategy & Accounting',
    provider: {
      '@type': 'Organization',
      name: 'MRECAI',
      url: 'https://mrecai.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Professional tax planning, preparation, bookkeeping, and accounting services for individuals and businesses. Includes tax strategy, R&D tax credits, cost segregation, entity optimization, and year-round tax planning.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  },
  aiTechnology: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI & Technology Solutions',
    name: 'AI Integration & Business Automation',
    provider: {
      '@type': 'Organization',
      name: 'MRECAI',
      url: 'https://mrecai.com',
      partner: {
        '@type': 'Organization',
        name: 'NovaEdge Solutions',
        url: 'https://novaedgesolutions.co/',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Cutting-edge AI implementation, process automation, and technology consulting services. Includes 24/7 AI sales agents, workflow automation, CRM integration, lead response systems, and custom AI solutions. Powered by NovaEdge Solutions.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  },
  automation: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Automation',
    name: 'Workflow Automation & System Integration',
    provider: {
      '@type': 'Organization',
      name: 'MRECAI',
      url: 'https://mrecai.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Workflow automation design, system integration, and custom automation development. Eliminate manual tasks, reduce errors, and scale operations efficiently.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  },
  investmentManagement: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Investment & Financial Management',
    name: 'Investment Management & Wealth Planning',
    provider: {
      '@type': 'Organization',
      name: 'MRECAI',
      url: 'https://mrecai.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Professional investment portfolio management, retirement planning, and wealth management services through certified financial professionals. Comprehensive financial planning for long-term wealth building.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  },
};

export const personSchema = {
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
      addressCountry: 'US'
    }
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
  knowsAbout: [
    'Business Consulting',
    'Insurance Services',
    'Tax Strategy',
    'AI Automation',
    'Investment Management',
    'Estate Planning',
    'Risk Management',
    'Financial Planning'
  ],
  alumniOf: 'Business Management',
  description: 'Founder and President of MRECAI, a New York-based professional services firm specializing in integrated business consulting, insurance, tax strategy, and AI automation. Not affiliated with Matthew R. Epstein, Trial Attorney at U.S. Department of Labor.',
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://mrecai.com${item.url}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Article schema for blog posts
export const articleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'MRECAI',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mrecai.com/images/logo.jpeg',
    },
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  image: article.image || 'https://mrecai.com/images/logo.jpeg',
  url: article.url,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
});

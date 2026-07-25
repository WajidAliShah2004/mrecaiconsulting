import {
  FaBriefcase,
  FaShieldAlt,
  FaChartBar,
  FaBolt,
  FaHandshake,
  FaChartLine,
  FaLock,
  FaCalculator,
  FaFileInvoiceDollar,
  FaLandmark,
  FaHardHat,
  FaStethoscope,
  FaHome,
  FaUserFriends,
  FaShoppingCart,
  FaGavel
} from 'react-icons/fa';

export const COMPANY_INFO = {
  name: 'MRECAI',
  phone: '929-702-2818',
  email: 'Matthew@MRECAI.com',
  address: '11 W Mill Dr, Great Neck, NY 11021',
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/mrecai-consulting',
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1CeUfmRx4F/?mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/company/mre-consulting-insurance/',
  instagram: 'https://instagram.com/mrecaillc',
  youtube: 'https://youtube.com/@mrecaillc?si=bCbuCrNnc-YpTgr4',
  twitter: 'https://twitter.com/MRECAIllc',
  yelp: 'https://yelp.to/HNkgPbV_w_',
  tiktok: 'https://tiktok.com/@mrecai18'
};

export const SERVICES = [
  {
    id: 'tax-accounting',
    title: 'Tax Services',
    description: 'Proactive tax planning and precise preparation that keep more of what you earn.',
    icon: FaChartBar,
    features: [
      'Tax planning & preparation',
      'Strategic tax reduction',
      'Multi-state compliance',
      'IRS representation'
    ]
  },
  {
    id: 'insurance-services',
    title: 'Insurance Consulting',
    description: 'Comprehensive insurance solutions to protect your business and personal assets.',
    icon: FaShieldAlt,
    features: [
      'Business insurance coverage',
      'Personal lines (Home, Auto, Umbrella)',
      'Risk assessment',
      'Policy optimization'
    ]
  },
  {
    id: 'bookkeeping-accounting',
    title: 'Bookkeeping & Accounting',
    description: 'Full-cycle accounting operations that professionalize your financial reporting and keep you compliant.',
    icon: FaCalculator,
    features: [
      'Daily bookkeeping & categorization',
      'Real-time financial reporting',
      'Bank & credit card reconciliation',
      'Month-end close'
    ]
  }
];

export const REASONS_TO_CHOOSE = [
  {
    icon: FaCalculator,
    title: 'Strategic Tax Expertise',
    description: 'Proactive tax planning and preparation that keeps more of what you earn',
    link: '/services/tax-strategy'
  },
  {
    icon: FaShieldAlt,
    title: 'Insurance & Risk Protection',
    description: 'Comprehensive coverage and risk architecture for business and personal assets',
    link: '/services/risk-architecture'
  },
  {
    icon: FaBriefcase,
    title: 'Accounting Experts',
    description: 'Bookkeeping and accounting that give you clarity and control',
    link: '/services/bookkeeping-accounting'
  },
  {
    icon: FaBolt,
    title: 'Responsive Service',
    description: 'Fast turnaround on engagements without compromising quality',
    link: '/services'
  },
  {
    icon: FaHandshake,
    title: 'Complete Financial Partner',
    description: 'Tax, insurance, and accounting - all under one roof',
    link: '/about'
  },
  {
    icon: FaChartLine,
    title: 'Proven Track Record',
    description: '180+ successful projects across diverse industries',
    link: '/testimonials'
  }
];

export const BLOG_CATEGORIES = [
  'Business Tips',
  'Insurance Advice',
  'Tax Planning',
  'Financial Planning',
  'General'
];

// Expanded services with comprehensive details for the redesigned Services page
export const SERVICES_EXPANDED = [
  // PRIMARY SERVICES (Tax & Insurance)
  {
    id: 'tax-services',
    title: 'Tax Services',
    description: 'Proactive tax planning and precise preparation that reduce your effective tax rate and keep you compliant and audit-ready.',
    icon: FaFileInvoiceDollar,
    link: '/services/tax-services',
    features: [
      'Strategic tax planning & reduction',
      'Federal & state tax preparation',
      'R&D tax credits & cost segregation',
      'Entity structure optimization',
      'Multi-state compliance & IRS representation'
    ],
    detailedDescription: 'From year-round strategic planning to accurate, on-time preparation, our tax services help you keep more of what you earn while staying fully compliant and audit-ready.',
    isPrimary: true
  },
  {
    id: 'insurance-consulting',
    title: 'Insurance & Risk Architecture',
    description: 'Comprehensive risk management across personal and commercial coverage, identifying gaps before they become losses.',
    icon: FaShieldAlt,
    link: '/services/risk-architecture',
    features: [
      'Strategic risk audit',
      'Commercial liability (GL, E&O, Cyber)',
      'Personal lines (Home, Auto, Umbrella)',
      'Life & coverage planning',
      'Policy gap analysis'
    ],
    detailedDescription: 'We don\'t just sell policies; we architect protection. By auditing your existing coverage against your specific risk profile, we ensure you have the right protection at the right price.',
    isPrimary: true
  },
  {
    id: 'accounting-services',
    title: 'Bookkeeping & Accounting',
    description: 'Full-cycle accounting operations to professionalize your financial reporting and ensure compliance.',
    icon: FaCalculator,
    link: '/services/bookkeeping-accounting',
    features: [
      'Daily bookkeeping and categorization',
      'Real-time financial reporting',
      'Accounts payable/receivable',
      'Bank and credit card reconciliation',
      'QuickBooks Online optimization',
      'Month-end close'
    ],
    detailedDescription: 'Our bookkeeping and accounting services focus on transforming your messy books into a powerful management tool. We don\'t just record transactions; we provide the financial clarity needed to make informed business decisions.',
    isPrimary: false
  },
];

export const INDUSTRIES = [
  {
    id: 'contractors',
    title: 'Contractors & Home Services',
    description: 'Specialized financial management and risk protection for HVAC, plumbing, electrical, and general contractors.',
    icon: FaHardHat,
    link: '/industries/contractors',
    painPoints: [
      'Cash flow gaps between project completion and payment',
      'Workers comp audits and insurance premium volatility'
    ],
    solutions: [
      'Real-time job costing and progress billing (AIA) to accelerate collections',
      'Contractor-focused insurance reviews to stabilize workers comp and liability premiums'
    ],
    features: [
      'Job costing & profitability analysis',
      'Progress billing (AIA)',
      'Workers comp & GL audit support',
      'Certificate of insurance (COI) support',
      'Cash flow & collections strategy'
    ]
  },
  {
    id: 'medical-practices',
    title: 'Medical & Healthcare',
    description: 'Compliance-first solutions for private practices and healthcare providers, bridging the gap between clinical care and fiscal health.',
    icon: FaStethoscope,
    link: '/industries/medical-practices',
    painPoints: [
      'Revenue cycle delays and insurance reimbursement complexity',
      'HIPAA compliance requirements limiting technology adoption'
    ],
    solutions: [
      'Medical billing optimization and denial management systems',
      'Malpractice and cyber liability coverage reviews tailored to healthcare'
    ],
    features: [
      'Medical billing & revenue cycle support',
      'Malpractice coverage reviews',
      'Practice growth advisory',
      'Specialized tax credits (R&D)',
      'Insurance risk audits'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate Investors',
    description: 'Advanced tax engineering and property-level accounting for investors, developers, and management firms.',
    icon: FaHome,
    link: '/industries/real-estate',
    painPoints: [
      'High tax burden on rental income and property sales',
      'Complex multi-property accounting and cash flow tracking'
    ],
    solutions: [
      'Cost segregation studies and 1031 exchange strategy to defer taxes',
      'Property-level P&L dashboards with rent collection tracking'
    ],
    features: [
      'Cost segregation coordination',
      '1031 exchange strategy',
      'Property-level P&L management',
      'Asset protection architecture',
      'Passive activity loss optimization'
    ]
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Optimization for agencies, consultants, and service-based firms focused on high-margin scalability.',
    icon: FaUserFriends,
    link: '/industries/professional-services',
    painPoints: [
      'Difficulty tracking project profitability and team utilization',
      'Scaling challenges without sacrificing service quality'
    ],
    solutions: [
      'Real-time utilization tracking and margin analysis by project',
      'Fractional COO services and standardized processes to scale operations'
    ],
    features: [
      'Fractional COO & strategy',
      'Utilization & margin tracking',
      'Project profitability systems',
      'Strategic tax planning',
      'Executive liability protection'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Retail & eCommerce',
    description: 'Data-driven infrastructure for modern retailers, managing multi-channel complexity and inventory-based tax strategy.',
    icon: FaShoppingCart,
    link: '/industries/ecommerce',
    painPoints: [
      'Multi-state sales tax compliance and nexus complexity',
      'Inventory management across multiple sales channels'
    ],
    solutions: [
      'Sales tax nexus monitoring and filing services across every state you sell in',
      'Multi-channel inventory accounting with real-time sync and margin tracking'
    ],
    features: [
      'Multi-channel inventory accounting',
      'Sales tax nexus management',
      'Product liability & cargo coverage',
      'Margin-based marketing ROI',
      'Working capital strategy'
    ]
  },
  {
    id: 'legal-services',
    title: 'Legal & Specialized Services',
    description: 'Strategic back-office and tax management for law firms and specialized professional entities.',
    icon: FaGavel,
    link: '/industries/legal-services',
    painPoints: [
      'Trust accounting compliance and IOLTA management complexity',
      'Lead intake inefficiency and missed consultation opportunities'
    ],
    solutions: [
      'Trust accounting systems with rigorous compliance monitoring',
      'Streamlined client intake processes and consultation scheduling'
    ],
    features: [
      'Trust accounting compliance',
      'Partner compensation structures',
      'Client intake process design',
      'Professional liability review',
      'Operations modernization'
    ]
  }
];

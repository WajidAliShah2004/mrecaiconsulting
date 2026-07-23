import {
  FaBriefcase,
  FaShieldAlt,
  FaChartBar,
  FaRobot,
  FaBolt,
  FaLightbulb,
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
    id: 'ai-consulting',
    title: 'AI Consulting & Automation',
    description: 'Deploy intelligent AI agents, chatbots, and automation systems that work 24/7 to scale your business.',
    icon: FaRobot,
    features: [
      'AI chatbots & virtual agents',
      'Process automation & workflows',
      'Machine learning solutions',
      'AI strategy & implementation'
    ]
  },
  {
    id: 'business-automation',
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent workflow automation and system integrations.',
    icon: FaBolt,
    features: [
      'Workflow automation design',
      'CRM & ERP integration',
      'Custom automation solutions',
      'System optimization'
    ]
  },
  {
    id: 'tax-accounting',
    title: 'Tax & Accounting Support',
    description: 'Professional tax planning and accounting services to support your business growth.',
    icon: FaChartBar,
    features: [
      'Tax planning & preparation',
      'Bookkeeping services',
      'Financial reporting',
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
      'Cyber liability protection',
      'Risk assessment',
      'Policy optimization'
    ]
  }
];

export const REASONS_TO_CHOOSE = [
  {
    icon: FaRobot,
    title: 'AI & Automation Experts',
    description: 'Cutting-edge AI solutions and automation systems that work 24/7',
    link: '/services/ai-driven-growth'
  },
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
    icon: FaBolt,
    title: 'Rapid Deployment',
    description: 'Fast turnaround on projects without compromising quality',
    link: '/services'
  },
  {
    icon: FaHandshake,
    title: 'Complete Business Partner',
    description: 'AI, consulting, tax, and insurance - all under one roof',
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
  'Technology',
  'AI & Automation',
  'Digital Marketing',
  'General'
];

// Expanded services with comprehensive details for the redesigned Services page
export const SERVICES_EXPANDED = [
  // PRIMARY SERVICES (AI & Automation)
  {
    id: 'ai-automation',
    title: 'AI Consulting & Automation',
    description: 'Deploy intelligent AI agents, chatbots, and automation systems that work 24/7 to scale your business without adding headcount.',
    icon: FaRobot,
    link: '/services/ai-driven-growth',
    features: [
      'AI chatbots & virtual agents',
      'Process automation & workflows',
      'Machine learning solutions',
      'AI strategy & implementation',
      '24/7 lead reactivation',
      'Missed-call text back systems'
    ],
    detailedDescription: 'In the modern economy, speed is the primary currency. We deploy AI systems that engage your leads instantly, ensuring you never miss an opportunity while reducing your manual workload.',
    isPrimary: true
  },
  {
    id: 'business-automation',
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent workflow automation, system integrations, and process optimization.',
    icon: FaBolt,
    link: '/services/ai-driven-growth',
    features: [
      'Workflow Automation Design',
      'CRM & ERP Integration',
      'Custom Automation Solutions',
      'System Optimization',
      'API Integrations',
      'Process Documentation'
    ],
    detailedDescription: 'Eliminate repetitive tasks and streamline your operations with intelligent automation. We design and implement systems that save time, reduce errors, and allow your team to focus on high-value work.',
    isPrimary: true
  },
  
  // SECONDARY SERVICES (Business Support)
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
  {
    id: 'tax-preparation',
    title: 'Tax Preparation & Compliance',
    description: 'Precise tax preparation for individuals and businesses, focused on accuracy and audit-readiness.',
    icon: FaFileInvoiceDollar,
    link: '/services/tax-preparation',
    features: [
      'Federal and state tax returns',
      'Multi-state filing compliance',
      'IRS audit representation',
      'Sales and use tax filings',
      'Compliance consulting'
    ],
    detailedDescription: 'We handle the heavy lifting of tax compliance, ensuring your filings are accurate and submitted on time. Our goal is to minimize your stress and maximize your peace of mind during tax season.',
    isPrimary: false
  },
  {
    id: 'tax-strategy',
    title: 'Advanced Tax Strategy',
    description: 'Proactive tax planning to significantly reduce your effective tax rate through R&D credits, cost segregation, and entity optimization.',
    icon: FaLightbulb,
    link: '/services/tax-strategy',
    features: [
      'Strategic tax planning',
      'R&D tax credit studies',
      'Cost segregation analysis',
      'Entity structure optimization',
      'Year-round tax advisory'
    ],
    detailedDescription: 'Tax strategy is different from tax preparation. We look ahead to identify significant savings opportunities before the tax year ends, helping you keep more of what you earn.',
    isPrimary: false
  },
  {
    id: 'business-management',
    title: 'Business Management Consulting',
    description: 'Systems-first consulting to turn operational chaos into a scalable, professional business.',
    icon: FaBriefcase,
    link: '/services/business-consulting',
    features: [
      'Operational systems development',
      'Cash flow management',
      'KPI and metrics tracking',
      'Profitability optimization',
      'Fractional COO services'
    ],
    detailedDescription: 'We help growing businesses professionalize their operations. Our consulting focus is on building the systems and leadership structures needed to scale from "founder-dependent" to "process-driven".',
    isPrimary: false
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
    isPrimary: false
  },

  {
    id: 'investment-management',
    title: 'Investment & Wealth Planning',
    description: 'Holistic wealth management delivered through strategic partners with CFP® and CFA credentials.',
    icon: FaChartLine,
    link: '/services/investment-management',
    features: [
      'Portfolio management',
      'Retirement planning',
      'Fiduciary wealth advisory',
      'Financial planning',
      'Risk assessment'
    ],
    detailedDescription: 'Through our strategic partnership with certified financial professionals, we provide top-tier investment management that syncs perfectly with your tax and business strategy.',
    partnerDisclosure: 'Investment and financial management services are provided through our strategic partner, a Certified Financial Planner (CFP®) and Chartered Financial Analyst (CFA).',
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
      'AI-powered missed-call text-back systems to capture emergency leads 24/7'
    ],
    features: [
      'Job costing & profitability analysis',
      'Progress billing (AIA)',
      'Workers comp & GL audit support',
      'AI lead reactivation for old quotes',
      'Sales-to-Operations process automation'
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
      'HIPAA-compliant AI appointment scheduling and patient communication'
    ],
    features: [
      'Medical billing & revenue cycle support',
      'HIPAA-compliant AI agents',
      'Practice growth automation',
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
      'Property-level P&L dashboards with automated rent collection tracking'
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
      'Fractional COO services and workflow automation to scale operations'
    ],
    features: [
      'Fractional COO & strategy',
      'Utilization & margin tracking',
      'Project management automation',
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
      'Automated sales tax nexus monitoring and filing services',
      'Multi-channel inventory accounting with real-time sync and margin tracking'
    ],
    features: [
      'Multi-channel inventory accounting',
      'Sales tax nexus management',
      'AI customer support agents',
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
      'Trust accounting systems with automated compliance monitoring',
      'AI-powered lead intake and qualification with instant consultation scheduling'
    ],
    features: [
      'Trust accounting compliance',
      'Partner compensation structures',
      'Intelligent lead intake AI',
      'Professional liability review',
      'Operations modernization'
    ]
  }
];

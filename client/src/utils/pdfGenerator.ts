import jsPDF from 'jspdf';

interface WhitePaperContent {
  title: string;
  subtitle: string;
  content: string;
  filename: string;
  color: {
    primary: [number, number, number];
    secondary: [number, number, number];
  };
}

interface Section {
  title: string;
  content: string[];
}

// Professional PDF Template Configuration
const PDF_CONFIG = {
  pageWidth: 210, // A4 width in mm
  pageHeight: 297, // A4 height in mm
  margin: {
    top: 25,
    bottom: 25,
    left: 20,
    right: 20
  },
  colors: {
    navy: [15, 23, 42] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
    lightGray: [243, 244, 246] as [number, number, number],
    darkGray: [75, 85, 99] as [number, number, number],
    textGray: [55, 65, 81] as [number, number, number]
  },
  fonts: {
    title: { size: 24, style: 'bold' as const },
    subtitle: { size: 14, style: 'normal' as const },
    heading1: { size: 16, style: 'bold' as const },
    heading2: { size: 13, style: 'bold' as const },
    body: { size: 10, style: 'normal' as const },
    small: { size: 8, style: 'normal' as const },
    footer: { size: 7, style: 'italic' as const }
  }
};

const whitePaperContents: Record<string, WhitePaperContent> = {
  'ai-automation-frontier': {
    title: 'The New Frontier of Efficiency',
    subtitle: 'How AI & Automation Are Transforming Every Industry',
    filename: 'AI-Automation-Frontier-MRECAI.pdf',
    color: {
      primary: [0, 168, 232],
      secondary: [14, 165, 233]
    },
    content: `================================================================================
THE NEW FRONTIER OF EFFICIENCY
How AI & Automation Are Transforming Every Industry
================================================================================

A Flagship Executive Report by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

The world has entered the Age of Applied Intelligence. What began as 
experimental AI models has become the foundation for how businesses create 
and capture value.

KEY GLOBAL FINDINGS:
• $15.7 trillion in global GDP potential from automation by 2030 
  (McKinsey Global AI Report 2025)
• 45% of daily business operations are automatable with existing technology 
  (PwC Automation Outlook 2025)
• 42% average efficiency gain and 37% cost reduction in firms using 
  AI-enhanced workflows (Gartner Automation Survey 2024)
• 250-400% ROI over two years for early adopters 
  (Deloitte Intelligent Automation Benchmark 2025)

================================================================================
THE OPPORTUNITY FOR BUSINESSES
================================================================================

Mid-sized and small enterprises stand to benefit most. Historically, automation 
was reserved for Fortune 500 budgets; today, cloud platforms and AI tools allow 
firms of any size to deploy enterprise-grade efficiency solutions within weeks 
at a fraction of the cost.

AUTOMATION CREATES VALUE IN THREE DIMENSIONS:
1. Operational Efficiency – Eliminating manual processes and reducing labor costs
2. Decision Intelligence – AI-driven analytics improve forecasting and planning
3. Client Experience – Personalization and speed increase conversion and retention

================================================================================
TIER 1 INDUSTRIES - HIGHEST ROI POTENTIAL
================================================================================

1. ACCOUNTING & TAX FIRMS
   • Pain Points: Manual data entry, reconciliations, deadline management
   • ROI: 35-55% cost reduction, 2-3× productivity gain
   • Payback Period: 3-6 months

2. INSURANCE AGENCIES & BROKERAGES
   • Pain Points: Manual renewals, quoting delays, scattered data
   • ROI: 30-50% cost reduction, 40% efficiency gain
   • Payback Period: 4-8 months

3. REAL ESTATE & PROPERTY MANAGEMENT
   • Pain Points: Missed leads, duplicate paperwork, tenant follow-up
   • ROI: 38% efficiency gain, faster closings
   • Payback Period: 6-9 months

4. CONSTRUCTION & CONTRACTING
   • Pain Points: Bidding delays, compliance paperwork, project overruns
   • ROI: 42% efficiency gain, 17% higher profit margins
   • Payback Period: 6-9 months

5. HEALTHCARE REVENUE CYCLE
   • Pain Points: Claim denials, eligibility verification, billing
   • ROI: 35% cost reduction, 50-70% productivity gain
   • Payback Period: 4-8 months

================================================================================
IMPLEMENTATION FRAMEWORK
================================================================================

PRICING TIERS:
• Small Business (1-25 staff): $7,500-$25,000
  - Single-department automation
  - 3-5 month payback period
  
• Mid-Market (26-250 staff): $25,000-$75,000
  - Multi-department integration
  - 5-8 month payback period
  
• Enterprise (250+ staff): $100,000-$500,000+
  - Organization-wide transformation
  - 6-12 month payback period

================================================================================
WHY MRECAI
================================================================================

MRECAI approaches automation as a comprehensive strategy — not just a 
technical upgrade. We combine expertise in consulting, accounting, insurance, 
and AI implementation to help clients:

• Identify high-impact automation opportunities through audits and ROI modeling
• Design secure, compliant process frameworks tailored to each industry
• Deploy AI tools that integrate seamlessly with existing systems
• Quantify results through financial metrics and continuous performance reviews

Our clients achieve an average cost reduction of 30-45% and productivity 
improvement of 40-60% within the first year of deployment.

================================================================================
CONTACT INFORMATION
================================================================================

MRECAI
Phone: 929-702-2818
Email: Matthew@MRECAI.com
Website: www.MRECAI.com

Schedule your FREE consultation today!

================================================================================
© 2025 MRECAI. All rights reserved.
================================================================================`
  },
  'digital-marketing-reputation': {
    title: 'Digital Marketing, Reviews & Social Presence',
    subtitle: 'Building the Modern Reputation Engine',
    filename: 'Digital-Marketing-Reputation-MRECAI.pdf',
    color: {
      primary: [34, 197, 94],
      secondary: [16, 185, 129]
    },
    content: `================================================================================
DIGITAL MARKETING, REVIEWS & SOCIAL PRESENCE
Building the Modern Reputation Engine
================================================================================

A Flagship Executive White Paper by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

Digital visibility is now the cornerstone of trust and profitability. Whether 
a business serves local homeowners or national enterprises, nearly every 
transaction begins online. In today's economy, your online presence is your 
reputation.

KEY REALITIES:
• 87% of consumers read online reviews before contacting a business
• A one-star rating difference can shift revenue by 5-9%
• Firms with consistent social posting enjoy up to 70% more inquiries
• Digital reputation influences pricing power, win-rates, and even insurance 
  underwriting

================================================================================
THE FIVE DIGITAL PILLARS OF MODERN GROWTH
================================================================================

PILLAR 1 — WEBSITE OPTIMIZATION & SEO
Your site must function as a conversion engine: fast, secure, content-rich, 
and measurable.

Benefits: Higher rankings, lower ad costs, 24/7 lead generation
Core elements: Mobile-first UX, on-page/technical SEO, sub-2.5s loads, 
clear CTAs, analytics

PILLAR 2 — REVIEW & REPUTATION MANAGEMENT
Automated requests and professional responses turn satisfied clients into 
public advocates.

Benefits: Trust signals, local SEO lift, higher close rates
Core tactics: Post-service SMS/email requests, response templates, unified 
review dashboard

PILLAR 3 — SOCIAL MEDIA PRESENCE & STORYTELLING
Consistent educational and visual content humanizes the brand and expands reach.

Benefits: Stronger referral networks, low-cost engagement, top-of-mind awareness
Best practices: 3-5 posts/week, professional imagery, value-first content, 
scheduling tools

PILLAR 4 — CONVERSION & RETARGETING SYSTEMS
Most visitors don't convert on first contact. Retargeting and nurturing bring 
them back.

Benefits: Recover lost traffic; +30-50% conversion lift
Core systems: Service-specific landing pages, CRM capture, automated email/SMS, 
retargeting ads

PILLAR 5 — ANALYTICS & CONTINUOUS IMPROVEMENT
You can't improve what you can't measure.

Benefits: Evidence-based decisions, clear ROI, predictable scaling
Core metrics: Sessions, bounce rate, rankings, review volume/recency, 
conversion ratios, CPA

================================================================================
ROI QUANTIFICATION
================================================================================

BEFORE vs AFTER DIGITAL EXCELLENCE:

Metric                  Before      After       Impact
Online Leads/Month      10-15       40-60       +200-300%
Conversion Rate         5-7%        18-25%      +200-250%
Customer Retention      60%         80-90%      +33-50%
Average Review Rating   3.8★        4.8★        +26%
Website Traffic         500/mo      2,000+/mo   +300%
Cost per Acquisition    $250        $85         -66%

Bottom line: Businesses with active digital management outperform competitors 
by 2-5× in lead efficiency and loyalty.

================================================================================
INDUSTRY OPPORTUNITIES
================================================================================

PROFESSIONAL SERVICES (Accounting, Legal, Consulting)
• Challenge: Low visibility; referral dependence
• Opportunity: SEO, thought-leadership content, review automation
• Expected Outcome: Increased inquiries, higher perceived expertise

REAL ESTATE & PROPERTY MANAGEMENT
• Challenge: Inconsistent listings; slow response
• Opportunity: Geo-targeted SEO, video tours, inquiry bots
• Expected Outcome: Faster closings, more leads, improved local ranking

INSURANCE & FINANCIAL ADVISORY
• Challenge: Outdated sites; low differentiation
• Opportunity: Local SEO for intent queries, automated review triggers
• Expected Outcome: 2-3× increase in quote submissions

CONSTRUCTION/HOME SERVICES
• Challenge: Referral-only marketing; weak visuals
• Opportunity: Before/after showcases, Google Local Ads, automated reviews
• Expected Outcome: +50% calls; higher lead quality

================================================================================
IMPLEMENTATION: THE MRECAI 6-STEP SYSTEM
================================================================================

1. AUDIT: Comprehensive baseline (SEO, reviews, social, funnels, CRM)
2. STRATEGY: Revenue-focused roadmap aligned to goals, budget, and capacity
3. INFRASTRUCTURE: Build/refine the foundations
4. LAUNCH & OPTIMIZATION: Test and tune for conversion
5. AUTOMATION & INTEGRATION: Reputation never sleeps
6. MONITORING & REPORTING: Correlate activity to finance outcomes

================================================================================
CONTACT INFORMATION
================================================================================

MRECAI
Phone: 929-702-2818
Email: Matthew@MRECAI.com
Website: www.MRECAI.com

Schedule your FREE Digital Reputation Audit today!

================================================================================
© 2025 MRECAI. All rights reserved.
================================================================================`
  },
  'future-of-business': {
    title: 'The Future of Business',
    subtitle: 'How AI and Automation Are Transforming Operations',
    filename: 'Future-of-Business-MRECAI.pdf',
    color: {
      primary: [168, 85, 247],
      secondary: [147, 51, 234]
    },
    content: `================================================================================
THE FUTURE OF BUSINESS
How AI and Automation Are Transforming Operations
================================================================================

A Comprehensive White Paper by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

We are entering the most significant business transformation era since the 
Industrial Revolution — one powered not by machinery, but by intelligence.

Artificial Intelligence (AI) and automation are redefining how businesses 
operate, scale, and compete. What once required massive teams or corporate 
budgets can now be achieved with a few well-designed AI workflows and 
automated systems — often yielding faster growth, fewer errors, and higher 
profitability.

KEY INSIGHTS:
• AI could add over $13 trillion to global GDP by 2030 (McKinsey & Company)
• PwC estimates AI could boost business productivity by up to 40%
• 70% of small and mid-sized businesses still haven't implemented any 
  meaningful automation
• 80% of early AI adopters report measurable cost savings or productivity 
  gains in under one year (IBM Global AI Report)

================================================================================
WHY AI IS THE GREAT EQUALIZER
================================================================================

For decades, advanced technology was reserved for Fortune 500 corporations.

Today, AI tools such as ChatGPT, Zapier, and OpenAI APIs have made automation 
affordable and accessible to every entrepreneur.

A two-person business can now:
• Automate client intake, scheduling, and billing
• Respond to leads 24/7 via a chatbot
• Generate contracts, emails, and financial reports instantly
• Predict future revenue or risks using AI forecasting models

That's what MRECAI brings to the table: enterprise-grade 
automation for everyday businesses — safely, securely, and strategically.

================================================================================
IMPLEMENTING CHATGPT AND ADVANCED AI MODELS
================================================================================

ChatGPT and other large language models (LLMs) are redefining the modern 
workplace. They understand context, generate natural language, and perform 
complex cognitive tasks that once required human staff.

EVERYDAY BUSINESS USE CASES:
• Client Communication: Handle FAQs, intake, and basic customer service 24/7
• Sales & Follow-Up: Write emails, proposals, and quotes tailored to each lead
• Internal Support: Draft reports, policies, and meeting summaries
• Data Interpretation: Summarize insurance policies, contracts, or financial 
  reports
• Employee Training: Create custom onboarding and help-desk assistants

MRECAI'S CHATGPT INTEGRATION FRAMEWORK:
• AI responds instantly to web or email inquiries
• It scores leads by quality and readiness
• It updates your CRM, alerts your team, and sends personalized follow-ups
• It tracks every interaction for compliance and reporting

Result: Faster conversions, higher satisfaction, and zero missed opportunities.

================================================================================
SECURITY, PRIVACY, AND COMPLIANCE
================================================================================

Our implementations adhere to:
• HIPAA for medical clients
• GLBA for financial institutions
• IRS Publication 4557 for tax data
• State data privacy laws

All systems are encrypted, cloud-based, and compliant — because your data 
security is non-negotiable.

================================================================================
THE INDUSTRY OPPORTUNITY MATRIX
================================================================================

ACCOUNTING & TAX FIRMS
Pain Points: Manual data entry, missed deadlines
AI Solutions: Automated categorization, reminders, dashboards
ROI: 3-6 months payback

INSURANCE AGENCIES
Pain Points: Renewals, quoting, data entry
AI Solutions: Chatbots, loss run automation, AI quoting
ROI: 4-8 months payback

REAL ESTATE
Pain Points: Lead follow-up, forms, property management
AI Solutions: CRM automation, contract generation, rent tracking
ROI: 6-9 months payback

CONSTRUCTION
Pain Points: Project oversight, bids, compliance
AI Solutions: Job costing, scheduling, forecasting
ROI: 6-9 months payback

HEALTHCARE
Pain Points: Documentation, billing, scheduling
AI Solutions: AI transcription, billing bots, scheduling
ROI: 9-12 months payback

LEGAL PRACTICES
Pain Points: Document overload, calendar management
AI Solutions: Contract summarization, AI intake
ROI: 6-8 months payback

E-COMMERCE & RETAIL
Pain Points: Customer service, content
AI Solutions: Chatbots, personalized marketing
ROI: 3-6 months payback

================================================================================
PREDICTING ROI AND SCALING PROFITABLY
================================================================================

Business Size              Monthly Savings    Efficiency Gain    Payback Period
Sole Proprietor            $2,000-$5,000      30-40%            1-2 months
Small Firm (5-20)          $10,000-$25,000    50-60%            3-6 months
Mid-Market (20-100)        $25,000-$100,000   60-75%            6-12 months

By implementing automation strategically, most MRECAI clients achieve ROI in 
under 6 months and continue compounding efficiency every quarter thereafter.

================================================================================
THE MRE PROMISE
================================================================================

We don't just deliver technology — we deliver transformation.

Our approach blends the financial discipline of accountants, the foresight of 
consultants, and the protection of licensed insurance professionals.

When you work with MRECAI, you're not just installing 
software — you're building an intelligent business.

================================================================================
CONTACT INFORMATION
================================================================================

MRECAI
Phone: 929-702-2818
Email: Matthew@MRECAI.com
Website: www.MRECAI.com

Schedule your FREE consultation today!

================================================================================
© 2025 MRECAI. All rights reserved.
================================================================================`
  }
};

// Helper function to parse content into structured sections
const parseContent = (content: string): Section[] => {
  const lines = content.split('\n');
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  lines.forEach((line) => {
    const trimmed = line.trim();
    
    // Skip separator lines
    if (trimmed.includes('====')) return;
    
    // Detect section headers (all caps, reasonable length)
    if (trimmed.match(/^[A-Z\s&:,\-()]+$/) && trimmed.length > 10 && trimmed.length < 100) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: trimmed,
        content: []
      };
    } else if (trimmed.length > 0 && currentSection) {
      currentSection.content.push(trimmed);
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
};

// Professional cover page
const addCoverPage = (doc: jsPDF, paper: WhitePaperContent): void => {
  const { pageWidth, pageHeight } = PDF_CONFIG;
  const centerX = pageWidth / 2;

  // Gradient background effect (simulated with rectangles)
  doc.setFillColor(...paper.color.primary);
  doc.rect(0, 0, pageWidth, pageHeight / 3, 'F');
  
  doc.setFillColor(...paper.color.secondary);
  doc.rect(0, pageHeight / 3, pageWidth, pageHeight / 3, 'F');
  
  doc.setFillColor(...PDF_CONFIG.colors.navy);
  doc.rect(0, (pageHeight / 3) * 2, pageWidth, pageHeight / 3, 'F');

  // White content box
  const boxMargin = 30;
  const boxY = 60;
  const boxHeight = 140;
  doc.setFillColor(...PDF_CONFIG.colors.white);
  doc.roundedRect(boxMargin, boxY, pageWidth - (boxMargin * 2), boxHeight, 3, 3, 'F');

  // Title
  doc.setTextColor(...PDF_CONFIG.colors.navy);
  doc.setFont('helvetica', PDF_CONFIG.fonts.title.style);
  doc.setFontSize(PDF_CONFIG.fonts.title.size);
  
  const titleLines = doc.splitTextToSize(paper.title, pageWidth - (boxMargin * 2) - 20);
  let yPos = boxY + 30;
  titleLines.forEach((line: string) => {
    doc.text(line, centerX, yPos, { align: 'center' });
    yPos += 12;
  });

  // Subtitle
  yPos += 5;
  doc.setFont('helvetica', PDF_CONFIG.fonts.subtitle.style);
  doc.setFontSize(PDF_CONFIG.fonts.subtitle.size);
  doc.setTextColor(...PDF_CONFIG.colors.darkGray);
  
  const subtitleLines = doc.splitTextToSize(paper.subtitle, pageWidth - (boxMargin * 2) - 20);
  subtitleLines.forEach((line: string) => {
    doc.text(line, centerX, yPos, { align: 'center' });
    yPos += 8;
  });

  // Decorative line
  yPos += 10;
  doc.setDrawColor(...paper.color.primary);
  doc.setLineWidth(1);
  doc.line(centerX - 30, yPos, centerX + 30, yPos);

  // Company branding
  yPos = boxY + boxHeight - 35;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...paper.color.primary);
  doc.text('MRECAI', centerX, yPos, { align: 'center' });

  yPos += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...PDF_CONFIG.colors.textGray);
  doc.text('www.MRECAI.com', centerX, yPos, { align: 'center' });

  yPos += 6;
  doc.text('929-702-2818 | Matthew@MRECAI.com', centerX, yPos, { align: 'center' });

  // Footer badge
  const badgeY = pageHeight - 40;
  doc.setFillColor(...paper.color.primary);
  doc.roundedRect(centerX - 40, badgeY, 80, 15, 2, 2, 'F');
  doc.setTextColor(...PDF_CONFIG.colors.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('EXECUTIVE WHITE PAPER', centerX, badgeY + 10, { align: 'center' });

  // Year
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...PDF_CONFIG.colors.lightGray);
  doc.text('© 2025', centerX, pageHeight - 15, { align: 'center' });
};

// Professional header for content pages
const addPageHeader = (doc: jsPDF, paper: WhitePaperContent, pageNum: number): void => {
  if (pageNum === 1) return; // Skip header on cover page

  const { pageWidth, margin } = PDF_CONFIG;
  
  // Header line
  doc.setDrawColor(...paper.color.primary);
  doc.setLineWidth(0.5);
  doc.line(margin.left, margin.top - 5, pageWidth - margin.right, margin.top - 5);
  
  // Company name
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...PDF_CONFIG.colors.darkGray);
  doc.text('MRECAI', margin.left, margin.top - 8);
  
  // Page number
  doc.text(`Page ${pageNum}`, pageWidth - margin.right, margin.top - 8, { align: 'right' });
};

// Professional footer
const addPageFooter = (doc: jsPDF): void => {
  const { pageWidth, pageHeight, margin } = PDF_CONFIG;
  
  // Footer line
  doc.setDrawColor(...PDF_CONFIG.colors.lightGray);
  doc.setLineWidth(0.3);
  doc.line(margin.left, pageHeight - margin.bottom + 5, pageWidth - margin.right, pageHeight - margin.bottom + 5);
  
  // Copyright
  doc.setFont('helvetica', PDF_CONFIG.fonts.footer.style);
  doc.setFontSize(PDF_CONFIG.fonts.footer.size);
  doc.setTextColor(...PDF_CONFIG.colors.darkGray);
  doc.text(
    '© 2025 MRECAI. All rights reserved.',
    pageWidth / 2,
    pageHeight - margin.bottom + 10,
    { align: 'center' }
  );
};

// Add content with professional formatting
const addContent = (doc: jsPDF, sections: Section[], paper: WhitePaperContent): void => {
  const { pageWidth, pageHeight, margin } = PDF_CONFIG;
  const maxWidth = pageWidth - margin.left - margin.right;
  let yPos = margin.top + 10;

  sections.forEach((section) => {
    // Check if we need a new page for section header
    if (yPos > pageHeight - margin.bottom - 30) {
      doc.addPage();
      yPos = margin.top + 10;
    }

    // Section header with background
    const headerHeight = 12;
    doc.setFillColor(...paper.color.primary);
    doc.setDrawColor(...paper.color.primary);
    doc.roundedRect(margin.left - 2, yPos - 8, maxWidth + 4, headerHeight, 1, 1, 'F');
    
    doc.setFont('helvetica', PDF_CONFIG.fonts.heading1.style);
    doc.setFontSize(PDF_CONFIG.fonts.heading1.size);
    doc.setTextColor(...PDF_CONFIG.colors.white);
    doc.text(section.title, margin.left + 3, yPos, { maxWidth: maxWidth - 6 });
    
    yPos += headerHeight + 5;

    // Section content
    doc.setFont('helvetica', PDF_CONFIG.fonts.body.style);
    doc.setFontSize(PDF_CONFIG.fonts.body.size);
    doc.setTextColor(...PDF_CONFIG.colors.textGray);

    section.content.forEach((paragraph) => {
      // Check for bullet points
      const isBullet = paragraph.startsWith('•') || paragraph.startsWith('-');
      const indent = isBullet ? 8 : 0;
      
      const lines = doc.splitTextToSize(paragraph, maxWidth - indent);
      
      lines.forEach((line: string, lineIndex: number) => {
        // Check if we need a new page
        if (yPos > pageHeight - margin.bottom - 10) {
          doc.addPage();
          yPos = margin.top + 10;
        }

        // Add bullet point styling
        if (isBullet && lineIndex === 0) {
          doc.setFillColor(...paper.color.primary);
          doc.circle(margin.left + 2, yPos - 1.5, 1, 'F');
          doc.text(line.replace(/^[•\-]\s*/, ''), margin.left + indent, yPos);
        } else {
          doc.text(line, margin.left + (isBullet && lineIndex > 0 ? indent : 0), yPos);
        }
        
        yPos += 5;
      });

      yPos += 2; // Space between paragraphs
    });

    yPos += 5; // Space between sections
  });
};

// Main export function
export const generateAndDownloadPDF = (paperId: string): void => {
  const paper = whitePaperContents[paperId];
  
  if (!paper) {
    console.error(`White paper with ID "${paperId}" not found`);
    return;
  }

  // Create new PDF document
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  // Add cover page
  addCoverPage(doc, paper);

  // Parse content into sections
  const sections = parseContent(paper.content);

  // Add content pages
  doc.addPage();
  addContent(doc, sections, paper);

  // Add headers and footers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addPageHeader(doc, paper, i);
    addPageFooter(doc);
  }

  // Save the PDF
  doc.save(paper.filename);
};

// Privacy Policy PDF Generator
export const generatePrivacyPolicyPDF = (): void => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const { pageWidth, pageHeight, margin } = PDF_CONFIG;
  const maxWidth = pageWidth - margin.left - margin.right;
  let yPos = margin.top;

  // Helper function to check page break
  const checkPageBreak = (neededSpace: number = 15): boolean => {
    if (yPos + neededSpace > pageHeight - margin.bottom) {
      doc.addPage();
      yPos = margin.top;
      return true;
    }
    return false;
  };

  // Helper function to add wrapped text
  const addText = (text: string, fontSize: number, isBold: boolean = false, indent: number = 0): void => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, maxWidth - indent);
    
    lines.forEach((line: string) => {
      checkPageBreak();
      doc.text(line, margin.left + indent, yPos);
      yPos += fontSize * 0.4;
    });
  };

  // Cover Page - Header with branding
  doc.setFillColor(26, 35, 126); // Navy blue
  doc.rect(0, 0, pageWidth, 50, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('PRIVACY POLICY', pageWidth / 2, 25, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('MRECAI', pageWidth / 2, 38, { align: 'center' });

  yPos = 60;

  // Company Information Box
  doc.setTextColor(0, 0, 0);
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(margin.left, yPos, maxWidth, 55, 2, 2, 'F');

  yPos += 10;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Effective Date:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('October 31, 2025', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Company:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('MRECAI', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Address:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('1 Willow Road Place, Great Neck, NY 11021', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Phone:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('929-702-2818', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Website:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('www.mrecai.com', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Privacy Contact:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('mathew@mrecai.com', margin.left + 45, yPos);

  yPos += 20;

  // Section 1: Scope & Acceptance
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('1. SCOPE & ACCEPTANCE', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, communicate with us, or use our consulting and insurance services (the "Services"). By interacting with the Services, you agree to this Policy to the maximum extent permitted by law.',
    10
  );
  yPos += 8;

  // Section 2: What We Collect
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('2. WHAT WE COLLECT', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  const collectItems = [
    { label: 'Identifiers & Contact:', desc: 'name, email, phone, address, professional details.' },
    { label: 'Insurance/Financial:', desc: 'underwriting inputs, applications, policy data, loss runs, claims history, billing details you provide or authorize.' },
    { label: 'Technical/Usage:', desc: 'IP address, device/OS/browser, pages viewed, timestamps, session IDs, approximate location, cookie and pixel data.' },
    { label: 'Content & Files:', desc: 'messages, recordings (with notice), forms, uploads, signatures.' },
    { label: 'Partner/Carrier Data:', desc: 'quoting status, bind/issue information, endorsements.' },
    { label: 'AI Interaction Data:', desc: 'preference signals, form responses, engagement context derived from AI-assisted workflows.' }
  ];

  collectItems.forEach(item => {
    checkPageBreak(12);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('•', margin.left, yPos);
    doc.text(item.label, margin.left + 5, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    addText(item.desc, 10, false, 10);
    yPos += 3;
  });
  yPos += 5;

  // Section 3: Sources of Information
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('3. SOURCES OF INFORMATION', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  const sources = [
    'Directly from you (forms, calls, emails).',
    'Service providers & vendors (hosting, analytics, communications).',
    'Insurance ecosystem (carriers, MGAs, TPAs, other brokers, loss-run services).',
    'Public/permissioned sources (government records, business databases, lead enrichment).'
  ];

  sources.forEach(source => {
    checkPageBreak(8);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('•', margin.left, yPos);
    addText(source, 10, false, 5);
    yPos += 2;
  });
  yPos += 5;

  // Section 4: How We Use Information
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('4. HOW WE USE INFORMATION', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  const uses = [
    'Deliver, maintain, and improve the Services; obtain quotes; process applications; coordinate with carriers; provide support; prevent fraud; ensure security; analyze usage; personalize content; train our teams and systems.',
    'Marketing & Education: send newsletters, reminders, promotions, updates, and content relevant to your interests.',
    'Compliance: legal/regulatory obligations, audits, and lawful requests.'
  ];

  uses.forEach(use => {
    checkPageBreak(10);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('•', margin.left, yPos);
    addText(use, 10, false, 5);
    yPos += 3;
  });
  yPos += 5;

  // Section 5: SMS Messaging & Consent
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('5. SMS MESSAGING & CONSENT', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'SMS messages are sent only to users who explicitly opt in. When you provide your phone number on our website, you will be presented with an optional SMS consent checkbox.',
    10
  );
  yPos += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  checkPageBreak();
  doc.text('We may send SMS messages for:', margin.left, yPos);
  yPos += 6;

  const smsItems = [
    'Appointment updates and scheduling',
    'Quote follow-ups and inquiries',
    'Customer support and assistance',
    'Information you requested'
  ];

  smsItems.forEach(item => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'normal');
    doc.text('•', margin.left, yPos);
    addText(item, 10, false, 5);
    yPos += 2;
  });
  yPos += 5;

  // Important Note Box
  checkPageBreak(20);
  doc.setFillColor(255, 243, 205);
  doc.roundedRect(margin.left, yPos - 3, maxWidth, 20, 2, 2, 'F');
  yPos += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Important Note:', margin.left + 3, yPos);
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  addText(
    'SMS consent is NOT required to use our services. Reply STOP to unsubscribe anytime. Message & data rates may apply.',
    10,
    false,
    3
  );
  yPos += 10;

  // Section 6: Sharing & Disclosure
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('6. SHARING & DISCLOSURE', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'We may share information with insurance carriers, service providers, business partners, and as required by law. We do not sell your personal information.',
    10
  );
  yPos += 8;

  // Section 7: Data Security
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('7. DATA SECURITY', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'We implement industry-standard security measures including encryption, access controls, and regular security assessments to protect your information.',
    10
  );
  yPos += 8;

  // Section 8: Your Rights
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('8. YOUR RIGHTS', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'You have the right to access, correct, delete, or restrict the use of your personal information. Contact us to exercise these rights.',
    10
  );
  yPos += 8;

  // Footer
  checkPageBreak(35);
  yPos = pageHeight - 35;
  doc.setDrawColor(200, 200, 200);
  doc.line(margin.left, yPos, pageWidth - margin.right, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('For questions or concerns about this Privacy Policy, please contact us:', margin.left, yPos);
  yPos += 7;

  doc.setFont('helvetica', 'normal');
  doc.text('Email: mathew@mrecai.com  |  Phone: 929-702-2818', margin.left, yPos);
  yPos += 10;

  doc.setFontSize(9);
  doc.setTextColor(128, 128, 128);
  doc.text(
    `© ${new Date().getFullYear()} MRECAI. All rights reserved.`,
    pageWidth / 2,
    yPos,
    { align: 'center' }
  );

  // Add page numbers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - margin.right,
      pageHeight - 10,
      { align: 'right' }
    );
  }

  // Save the PDF
  doc.save('MRE_Privacy_Policy.pdf');
};

// Terms of Service PDF Generator
export const generateTermsOfServicePDF = (): void => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const { pageWidth, pageHeight, margin } = PDF_CONFIG;
  const maxWidth = pageWidth - margin.left - margin.right;
  let yPos = margin.top;

  // Helper function to check page break
  const checkPageBreak = (neededSpace: number = 15): boolean => {
    if (yPos + neededSpace > pageHeight - margin.bottom) {
      doc.addPage();
      yPos = margin.top;
      return true;
    }
    return false;
  };

  // Helper function to add wrapped text
  const addText = (text: string, fontSize: number, isBold: boolean = false, indent: number = 0): void => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, maxWidth - indent);
    
    lines.forEach((line: string) => {
      checkPageBreak();
      doc.text(line, margin.left + indent, yPos);
      yPos += fontSize * 0.4;
    });
  };

  // Cover Page - Header with branding
  doc.setFillColor(26, 35, 126); // Navy blue
  doc.rect(0, 0, pageWidth, 50, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('TERMS OF SERVICE', pageWidth / 2, 25, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('MRECAI', pageWidth / 2, 38, { align: 'center' });

  yPos = 60;

  // Company Information Box
  doc.setTextColor(0, 0, 0);
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(margin.left, yPos, maxWidth, 40, 2, 2, 'F');

  yPos += 10;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Effective Date:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('February 20, 2026', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Company:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('MRECAI', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Jurisdiction:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('State of New York', margin.left + 45, yPos);

  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Contact:', margin.left + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text('mathew@mrecai.com', margin.left + 45, yPos);

  yPos += 20;

  // Section 1: Acceptance of Terms
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('1. ACCEPTANCE OF TERMS', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
    10
  );
  yPos += 8;

  // Section 2: Services Description
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('2. SERVICES DESCRIPTION', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'MRECAI provides financial consulting, insurance brokerage, tax planning, and AI-powered business automation services. All services are subject to availability and may be modified or discontinued at any time.',
    10
  );
  yPos += 8;

  // Section 3: SMS Messaging Terms & Conditions
  checkPageBreak(25);
  doc.setFillColor(255, 152, 0); // Orange for important section
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('3. SMS MESSAGING TERMS & CONDITIONS', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'MRECAI offers SMS text messaging services to provide appointment reminders, scheduling updates, customer support, and service-related communications. By providing your mobile phone number and opting in to receive SMS messages, you agree to the following terms:',
    10
  );
  yPos += 5;

  const smsTerms = [
    'Program Description: You will receive SMS messages related to appointment scheduling, appointment reminders, customer support responses, and service updates. Message frequency varies based on your interaction with our services.',
    'Opt-Out Instructions: You can cancel the SMS service at any time by texting STOP to our number. After you send STOP, we will send you a confirmation message that you have been unsubscribed. You will no longer receive SMS messages from us unless you opt in again.',
    'Help & Support: If you are experiencing issues with the messaging program, reply with HELP for assistance, or contact us directly at mathew@mrecai.com or 929-702-2818.',
    'Message & Data Rates: Message and data rates may apply for any messages sent to you from us and to us from you. Please contact your wireless provider for details about your text and data plan.',
    'Carrier Liability: Carriers are not liable for delayed or undelivered messages.',
    'Consent Requirements: You represent that you are the owner or authorized user of the mobile number you provide and that you voluntarily opt in to receive messages. Consent is not required to purchase or use our services.',
    'Privacy: Your mobile information will be used in accordance with our Privacy Policy (available at https://www.mrecai.com/privacy-policy). We do not sell, rent, or share your SMS opt-in data with third parties for marketing purposes.'
  ];

  smsTerms.forEach(item => {
    checkPageBreak(10);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('•', margin.left, yPos);
    addText(item, 10, false, 5);
    yPos += 2;
  });
  yPos += 5;

  // Section 4: User Responsibilities
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('3. USER RESPONSIBILITIES', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  const responsibilities = [
    'Provide accurate and complete information',
    'Maintain the confidentiality of your account credentials',
    'Comply with all applicable laws and regulations',
    'Not misuse or abuse our services',
    'Promptly update any changes to your information'
  ];

  responsibilities.forEach(item => {
    checkPageBreak(8);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('•', margin.left, yPos);
    addText(item, 10, false, 5);
    yPos += 2;
  });
  yPos += 5;

  // Section 5: Professional Services Disclaimer
  checkPageBreak(25);
  doc.setFillColor(255, 152, 0); // Orange for warning
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('5. PROFESSIONAL SERVICES DISCLAIMER', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'Our services are provided for informational and advisory purposes. We are not liable for decisions made based on our recommendations. You should consult with appropriate professionals before making financial or legal decisions.',
    10,
    true
  );
  yPos += 8;

  // Section 6: Payment Terms
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('6. PAYMENT TERMS', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  const paymentTerms = [
    'Fees are due as specified in your service agreement',
    'Late payments may incur additional charges',
    'Refunds are subject to our refund policy',
    'We reserve the right to modify pricing with notice'
  ];

  paymentTerms.forEach(item => {
    checkPageBreak(8);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('•', margin.left, yPos);
    addText(item, 10, false, 5);
    yPos += 2;
  });
  yPos += 5;

  // Section 7: Intellectual Property
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('7. INTELLECTUAL PROPERTY', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'All content, trademarks, and materials on our website are owned by MRECAI or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.',
    10
  );
  yPos += 8;

  // Section 8: Limitation of Liability
  checkPageBreak(25);
  doc.setFillColor(255, 152, 0); // Orange for warning
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('8. LIMITATION OF LIABILITY', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'To the maximum extent permitted by law, MRECAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. This includes but is not limited to carrier delays, undelivered messages, technical errors, or third-party system outages related to SMS messaging services.',
    10,
    true
  );
  yPos += 8;

  // Section 9: Termination
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('9. TERMINATION', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'We reserve the right to terminate or suspend access to our services at any time, with or without cause, with or without notice. Upon termination, your right to use the services will immediately cease.',
    10
  );
  yPos += 8;

  // Section 10: Governing Law & Dispute Resolution
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('10. GOVERNING LAW & DISPUTE RESOLUTION', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'These Terms shall be governed by the laws of the State of New York. Any disputes shall be resolved through binding arbitration in New York County, NY, administered by the American Arbitration Association (AAA).',
    10
  );
  yPos += 8;

  // Section 11: Changes to Terms
  checkPageBreak(25);
  doc.setFillColor(26, 35, 126);
  doc.roundedRect(margin.left, yPos - 5, maxWidth, 10, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('11. CHANGES TO TERMS', margin.left + 3, yPos + 2);
  yPos += 12;

  doc.setTextColor(0, 0, 0);
  addText(
    'We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the modified terms. We will notify you of significant changes via email or website notice.',
    10
  );
  yPos += 8;

  // Footer
  checkPageBreak(35);
  yPos = pageHeight - 35;
  doc.setDrawColor(200, 200, 200);
  doc.line(margin.left, yPos, pageWidth - margin.right, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('For questions about these Terms of Service, please contact us:', margin.left, yPos);
  yPos += 7;

  doc.setFont('helvetica', 'normal');
  doc.text('Email: mathew@mrecai.com  |  Phone: 929-702-2818', margin.left, yPos);
  yPos += 10;

  doc.setFontSize(9);
  doc.setTextColor(128, 128, 128);
  doc.text(
    `© ${new Date().getFullYear()} MRECAI. All rights reserved.`,
    pageWidth / 2,
    yPos,
    { align: 'center' }
  );

  // Add page numbers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - margin.right,
      pageHeight - 10,
      { align: 'right' }
    );
  }

  // Save the PDF
  doc.save('MRE_Terms_of_Service.pdf');
};

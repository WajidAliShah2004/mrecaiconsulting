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
    title: 'The Integrated Advantage',
    subtitle: 'How Unified Consulting, Tax & Insurance Strengthen Every Industry',
    filename: 'Integrated-Advantage-MRECAI.pdf',
    color: {
      primary: [0, 168, 232],
      secondary: [14, 165, 233]
    },
    content: `================================================================================
THE INTEGRATED ADVANTAGE
How Unified Consulting, Tax & Insurance Strengthen Every Industry
================================================================================

A Flagship Executive Report by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

Most growing businesses manage their books in silos: one vendor for
bookkeeping, another for taxes, a third for insurance, and no one looking
at the whole picture. The result is missed deductions, coverage gaps, and
strategy built on incomplete information.

KEY FINDINGS:
• Businesses that coordinate tax, accounting, and risk strategy routinely
  uncover five- and six-figure savings hidden between their advisors
• Most small and mid-sized firms overpay on taxes simply because planning
  happens at filing time instead of year-round
• Coverage gaps are most often discovered at claim time — when it is too late
• A single integrated advisory team eliminates the blind spots created by
  fragmented vendors

================================================================================
THE OPPORTUNITY FOR BUSINESSES
================================================================================

Mid-sized and small enterprises stand to benefit most. Historically,
coordinated financial strategy was reserved for companies large enough to
staff a full accounting department. Today, an integrated advisory partner gives
firms of any size CFO-level visibility at a fraction of the cost.

INTEGRATION CREATES VALUE IN THREE DIMENSIONS:
1. Financial Clarity – Clean books and real-time reporting drive better decisions
2. Tax Efficiency – Proactive, year-round planning reduces effective tax rates
3. Risk Protection – Coverage architecture that matches your actual exposure

================================================================================
INDUSTRIES WITH THE HIGHEST UPSIDE
================================================================================

1. CONTRACTORS & HOME SERVICES
   • Pain Points: Cash flow gaps, workers comp audits, premium volatility
   • Our Approach: Job costing, progress billing (AIA), insurance reviews
   • Outcome: Faster collections and stabilized premiums

2. MEDICAL & HEALTHCARE PRACTICES
   • Pain Points: Reimbursement delays, malpractice exposure, compliance
   • Our Approach: Revenue cycle support, coverage reviews, tax credits
   • Outcome: Healthier margins and audit-ready books

3. REAL ESTATE INVESTORS
   • Pain Points: High tax burden, multi-property accounting complexity
   • Our Approach: Cost segregation, 1031 strategy, property-level P&L
   • Outcome: Deferred taxes and clear portfolio visibility

4. PROFESSIONAL SERVICES FIRMS
   • Pain Points: Unclear project profitability, scaling challenges
   • Our Approach: Utilization tracking, fractional COO, tax planning
   • Outcome: Higher margins and scalable operations

5. RETAIL & ECOMMERCE
   • Pain Points: Multi-state sales tax nexus, inventory complexity
   • Our Approach: Nexus monitoring, inventory accounting, coverage review
   • Outcome: Compliance across every state you sell in

================================================================================
ENGAGEMENT FRAMEWORK
================================================================================

HOW ENGAGEMENTS TYPICALLY BEGIN:
• Foundation Review
  - Books, filings, and policies assessed for gaps and quick wins

• Strategy Roadmap
  - Prioritized plan across tax, accounting, insurance, and operations

• Ongoing Advisory
  - Year-round execution, reporting, and quarterly strategy reviews

================================================================================
WHY MRECAI
================================================================================

MRECAI approaches your business as one interconnected system — not a set of
disconnected vendors. We combine expertise in consulting, accounting, tax,
and insurance to help clients:

• Identify high-impact savings opportunities through audits and planning
• Design compliant financial and risk frameworks tailored to each industry
• Coordinate tax, accounting, and coverage decisions so nothing falls through
• Quantify results through financial metrics and continuous performance reviews

One partner. One strategy. Every angle covered.

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
Consistent review requests and professional responses turn satisfied clients
into public advocates.

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
Core systems: Service-specific landing pages, CRM capture, scheduled email/SMS
follow-up, retargeting ads

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
• Opportunity: SEO, thought-leadership content, structured review requests
• Expected Outcome: Increased inquiries, higher perceived expertise

REAL ESTATE & PROPERTY MANAGEMENT
• Challenge: Inconsistent listings; slow response
• Opportunity: Geo-targeted SEO, video tours, rapid inquiry response
• Expected Outcome: Faster closings, more leads, improved local ranking

INSURANCE & FINANCIAL ADVISORY
• Challenge: Outdated sites; low differentiation
• Opportunity: Local SEO for intent queries, consistent review requests
• Expected Outcome: 2-3× increase in quote submissions

CONSTRUCTION/HOME SERVICES
• Challenge: Referral-only marketing; weak visuals
• Opportunity: Before/after showcases, Google Local Ads, steady review requests
• Expected Outcome: +50% calls; higher lead quality

================================================================================
IMPLEMENTATION: THE MRECAI 6-STEP SYSTEM
================================================================================

1. AUDIT: Comprehensive baseline (SEO, reviews, social, funnels, CRM)
2. STRATEGY: Revenue-focused roadmap aligned to goals, budget, and capacity
3. INFRASTRUCTURE: Build/refine the foundations
4. LAUNCH & OPTIMIZATION: Test and tune for conversion
5. CONSISTENCY & INTEGRATION: Reputation never sleeps
6. MONITORING & REPORTING: Correlate activity to revenue outcomes

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
    subtitle: 'How Integrated Financial Strategy Transforms Operations',
    filename: 'Future-of-Business-MRECAI.pdf',
    color: {
      primary: [168, 85, 247],
      secondary: [147, 51, 234]
    },
    content: `================================================================================
THE FUTURE OF BUSINESS
How Integrated Financial Strategy Transforms Operations
================================================================================

A Comprehensive White Paper by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

The businesses that win the next decade will not be the ones with the most
vendors — they will be the ones with the clearest financial picture.

Integrated financial strategy — where consulting, accounting, tax, and
insurance decisions are made together — is redefining how businesses operate,
scale, and compete. What once required a full internal accounting department can
now be achieved through a single coordinated advisory partner, often yielding
faster growth, fewer errors, and higher profitability.

KEY INSIGHTS:
• Most business owners meet their tax preparer once a year — and it costs them;
  year-round planning consistently outperforms filing-season scrambles
• Coverage gaps are typically discovered at claim time, when the damage is done
• Businesses with clean, current books make faster and better decisions
• Firms that coordinate tax, accounting, and risk strategy keep more of what
  they earn — every single year

================================================================================
WHY INTEGRATION IS THE GREAT EQUALIZER
================================================================================

For decades, coordinated financial leadership was reserved for corporations
with in-house CFOs, controllers, and risk managers.

Today, an integrated advisory model makes that discipline affordable and
accessible to every entrepreneur.

A two-person business can now:
• Run on clean, current books with real-time financial reporting
• Plan taxes proactively instead of reacting every April
• Protect assets with coverage architected to its actual risk profile
• Make growth decisions backed by CFO-level analysis

That's what MRECAI brings to the table: enterprise-grade financial
discipline for everyday businesses — safely, securely, and strategically.

================================================================================
THE FOUR PILLARS OF AN INTEGRATED STRATEGY
================================================================================

PILLAR ONE: BUSINESS MANAGEMENT CONSULTING
Operational systems, cash flow management, KPI tracking, and fractional COO
leadership that turn founder-dependent chaos into process-driven growth.

PILLAR TWO: BOOKKEEPING & ACCOUNTING
Daily categorization, reconciliations, and month-end close that transform
messy books into a management tool you can actually run the business on.

PILLAR THREE: TAX PLANNING & ADVANCED STRATEGY
Year-round planning, R&D credits, cost segregation, and entity optimization
that meaningfully reduce your effective tax rate.

PILLAR FOUR: INSURANCE & RISK ARCHITECTURE
Commercial and personal coverage audited against your real exposure — so gaps
are found before a claim, not after.

================================================================================
SECURITY, PRIVACY, AND COMPLIANCE
================================================================================

Our engagements adhere to:
• HIPAA considerations for medical clients
• GLBA for financial institutions
• IRS Publication 4557 for tax data
• State data privacy laws

Your financial records are handled with strict confidentiality — because your
data security is non-negotiable.

================================================================================
THE INDUSTRY OPPORTUNITY MATRIX
================================================================================

CONTRACTORS & HOME SERVICES
Pain Points: Cash flow gaps, comp audits, premium volatility
Our Solutions: Job costing, progress billing, insurance reviews
Outcome: Faster collections, stabilized premiums

MEDICAL PRACTICES
Pain Points: Reimbursement delays, compliance, malpractice exposure
Our Solutions: Revenue cycle support, coverage reviews, R&D credits
Outcome: Healthier margins, audit-ready books

REAL ESTATE INVESTORS
Pain Points: High tax burden, multi-property complexity
Our Solutions: Cost segregation, 1031 strategy, property-level P&L
Outcome: Deferred taxes, portfolio clarity

PROFESSIONAL SERVICES
Pain Points: Unclear project profitability, scaling pains
Our Solutions: Utilization tracking, fractional COO, tax planning
Outcome: Higher margins, scalable operations

LEGAL PRACTICES
Pain Points: Trust accounting compliance, partner compensation
Our Solutions: IOLTA-compliant systems, compensation structures
Outcome: Compliance confidence, cleaner economics

E-COMMERCE & RETAIL
Pain Points: Multi-state sales tax, inventory complexity
Our Solutions: Nexus management, inventory accounting
Outcome: Compliance in every state you sell in

================================================================================
BUILDING ROI AND SCALING PROFITABLY
================================================================================

An integrated engagement typically progresses through three stages:

1. Foundation: Books cleaned up, filings current, coverage gaps identified
2. Optimization: Tax strategy implemented, reporting cadence established
3. Growth: Quarterly advisory, KPI reviews, and proactive planning

By coordinating strategy across every financial function, most MRECAI clients
see measurable savings within the first year and continue compounding the
benefit every year thereafter.

================================================================================
THE MRECAI PROMISE
================================================================================

We don't just deliver advice — we deliver transformation.

Our approach blends the financial discipline of accountants, the foresight of
consultants, and the protection of licensed insurance professionals.

When you work with MRECAI, you're not just hiring another
vendor — you're building a financially intelligent business.

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
  'tax-strategy-playbook': {
    title: 'The Small Business Tax Strategy Playbook',
    subtitle: 'Proven Ways to Lower Your Effective Rate',
    filename: 'Tax-Strategy-Playbook-MRECAI.pdf',
    color: {
      primary: [0, 168, 232],
      secondary: [14, 165, 233]
    },
    content: `================================================================================
THE SMALL BUSINESS TAX STRATEGY PLAYBOOK
Proven Ways to Lower Your Effective Rate
================================================================================

An Executive Report by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

Most business owners meet their tax advisor once a year — at filing time,
when it is too late to change anything. Tax strategy is different from tax
preparation: it happens before the year ends, and it is where the real
savings live.

KEY FINDINGS:
• The largest tax savings come from decisions made months before filing:
  entity structure, timing of purchases, and retirement plan design
• Many owners operate under an entity structure they outgrew years ago
• R&D credits and cost segregation are routinely missed by businesses
  that qualify for them
• A year-round planning calendar turns tax from a spring emergency into
  a managed, predictable expense

================================================================================
ENTITY STRUCTURE OPTIMIZATION
================================================================================

Your entity type determines how every dollar of profit is taxed.

THE MAIN OPTIONS:
1. Sole Proprietorship / Single-Member LLC – Simple, but all profit is
   subject to self-employment tax
2. S Corporation – Splits income into salary and distributions, often
   reducing self-employment tax meaningfully at the right profit level
3. C Corporation – A flat corporate rate and fringe-benefit advantages,
   best in specific reinvestment-heavy situations
4. Partnership / Multi-Member LLC – Flexible allocations for multi-owner
   businesses

WHEN TO RE-EVALUATE:
• Profit has grown past the level your current structure was chosen for
• You are adding partners, investors, or a second business
• You are planning a sale, succession, or major asset purchase

================================================================================
CREDITS AND ACCELERATED DEDUCTIONS
================================================================================

R&D TAX CREDITS:
Businesses that improve products, processes, or techniques may qualify —
not just laboratories. Qualifying activity is documented through wages,
supplies, and contractor costs tied to experimentation.

COST SEGREGATION:
Owners of commercial or rental property can often accelerate depreciation
by separating building components into shorter recovery periods, creating
significant early-year deductions.

SECTION 179 AND BONUS DEPRECIATION:
Equipment and vehicle purchases can frequently be deducted faster than
standard depreciation schedules allow — if the purchase is timed well.

================================================================================
RETIREMENT PLANS AS TAX STRATEGY
================================================================================

Retirement plans are among the most reliable deductions available:

• SEP IRA – Simple to set up, contributions scale with profit
• Solo 401(k) – Higher limits for owner-only businesses
• Defined Benefit Plan – The largest potential deductions for
  high-income owners with consistent profits

The right plan depends on your income level, employee count, and
cash flow — and the decision must be made before year-end.

================================================================================
THE YEAR-ROUND PLANNING CALENDAR
================================================================================

Q1 – Review prior year results; set entity and payroll strategy
Q2 – Mid-year projection; adjust estimated payments
Q3 – Evaluate credits, purchases, and retirement plan design
Q4 – Execute year-end moves before the window closes

================================================================================
WHY MRECAI
================================================================================

MRECAI combines tax strategy with accounting and risk planning, so every
recommendation reflects your complete financial picture. Our clients
routinely identify five-figure annual savings through coordinated,
proactive planning.

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
  'business-risk-blueprint': {
    title: 'The Business Risk Blueprint',
    subtitle: 'Closing Coverage Gaps Before They Become Losses',
    filename: 'Business-Risk-Blueprint-MRECAI.pdf',
    color: {
      primary: [16, 185, 129],
      secondary: [5, 150, 105]
    },
    content: `================================================================================
THE BUSINESS RISK BLUEPRINT
Closing Coverage Gaps Before They Become Losses
================================================================================

A Flagship White Paper by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

Most businesses discover their coverage gaps at the worst possible moment:
claim time. Policies bought years ago rarely keep pace with how a business
actually grows — new services, new vehicles, new employees, new contracts.

KEY FINDINGS:
• The most damaging gaps are usually exclusions and limits the owner
  never knew about, not missing policies
• Premiums often rise from poor policy structure, not true risk
• Personal and business assets are frequently intertwined in ways
  that expose both
• An annual risk audit costs nothing and routinely uncovers exposures
  that would have been uninsured losses

================================================================================
THE 10 MOST COMMON COVERAGE GAPS WE FIND
================================================================================

1. General liability limits that have not kept pace with revenue
2. Missing or inadequate umbrella coverage over business and personal lines
3. No cyber liability despite storing client or payment data
4. Errors & omissions exclusions that carve out core services
5. Underinsured commercial property and equipment values
6. Workers compensation classifications that trigger audit surprises
7. Personal vehicles used for business without proper endorsement
8. Key person risk with no life or disability coverage in place
9. Contracts requiring coverage the current policy does not provide
10. Home-based business activity excluded by homeowners policies

================================================================================
THE RISK AUDIT FRAMEWORK
================================================================================

STEP 1 – INVENTORY:
List every policy, limit, deductible, and exclusion across business and
personal lines. Most owners have never seen all of it in one place.

STEP 2 – EXPOSURE MAPPING:
Compare coverage against how the business operates today: revenue, payroll,
property, contracts, and data handled.

STEP 3 – GAP ANALYSIS:
Identify where exposures exceed limits, where exclusions bite, and where
policies overlap or duplicate.

STEP 4 – ARCHITECTURE:
Restructure coverage so business, personal, and umbrella policies work
together — often improving protection while reducing total premium.

================================================================================
CYBER LIABILITY ESSENTIALS
================================================================================

If your business stores customer information, invoices electronically, or
banks online, cyber exposure is real:

• Breach response and notification costs
• Funds transfer fraud and social engineering losses
• Business interruption from system outages
• Third-party liability for compromised client data

================================================================================
PROTECTING PERSONAL ASSETS
================================================================================

Business risk does not stop at the office door. A proper architecture
coordinates:

• Entity structure and asset titling
• Umbrella liability across home, auto, and business
• Life and disability coverage matched to family and business obligations

================================================================================
WHY MRECAI
================================================================================

MRECAI audits coverage the way an underwriter would — then negotiates the
way your advocate should. Because we also manage our clients' books and tax
strategy, we see exposures other brokers miss.

================================================================================
CONTACT INFORMATION
================================================================================

MRECAI
Phone: 929-702-2818
Email: Matthew@MRECAI.com
Website: www.MRECAI.com

Schedule your FREE risk audit today!

================================================================================
© 2025 MRECAI. All rights reserved.
================================================================================`
  },
  'financial-clarity-guide': {
    title: 'From Messy Books to Management Tool',
    subtitle: "The Owner's Guide to Financial Clarity",
    filename: 'Financial-Clarity-Guide-MRECAI.pdf',
    color: {
      primary: [168, 85, 247],
      secondary: [147, 51, 234]
    },
    content: `================================================================================
FROM MESSY BOOKS TO MANAGEMENT TOOL
The Owner's Guide to Financial Clarity
================================================================================

A Comprehensive Guide by MRECAI
www.MRECAI.com | 929-702-2818 | Matthew@MRECAI.com

================================================================================
EXECUTIVE SUMMARY
================================================================================

Bookkeeping is usually treated as a compliance chore — something done
after the fact so taxes can be filed. But clean, current books are the
single most underused management tool in small business.

KEY FINDINGS:
• Owners who review accurate monthly financials make measurably better
  pricing, hiring, and purchasing decisions
• Most "cash flow problems" are actually visibility problems
• A disciplined month-end close turns the P&L from a historical record
  into a steering wheel
• A handful of well-chosen KPIs outperforms a dashboard of vanity metrics

================================================================================
READING YOUR P&L LIKE AN OPERATOR
================================================================================

WHAT TO LOOK AT EVERY MONTH:
1. Gross margin by service or product line — not just total revenue
2. Payroll as a percentage of revenue, trended over time
3. Fixed overhead vs. variable costs — know your true break-even
4. Net profit vs. owner cash draw — profit is not the same as cash

RED FLAGS IN THE NUMBERS:
• Revenue growing while margin shrinks
• "Miscellaneous" or uncategorized expenses accumulating
• Receivables aging past your stated payment terms

================================================================================
CASH FLOW FORECASTING
================================================================================

A 13-week rolling cash forecast answers the question every owner asks:
"Can I afford this?"

THE SIMPLE VERSION:
• Start with today's bank balance
• Add expected collections by week, based on real receivable aging
• Subtract payroll, rent, taxes, and scheduled payables by week
• Watch for the low-water mark — that is your real constraint

================================================================================
KPIs WORTH TRACKING
================================================================================

BY BUSINESS TYPE:
• Service firms – Utilization, effective hourly rate, project margin
• Contractors – Job costing variance, backlog, collection days
• Retail/eCommerce – Inventory turns, contribution margin, return rate
• Practices – Revenue per provider, denial rate, days in A/R

Pick three to five. Review them monthly against targets.

================================================================================
THE MONTH-END CLOSE ROADMAP
================================================================================

STEP 1 – Reconcile every bank and credit card account
STEP 2 – Categorize all transactions; clear the uncategorized list
STEP 3 – Review receivables and payables aging
STEP 4 – Post payroll, loan, and depreciation entries
STEP 5 – Produce the P&L, balance sheet, and cash summary
STEP 6 – Review against budget and KPIs — and decide something

A disciplined close takes days, not weeks — and gets faster every month.

================================================================================
WHY MRECAI
================================================================================

MRECAI's accounting team professionalizes your books, then puts them to
work: real-time reporting, KPI tracking, and cash flow forecasts that
feed directly into your tax and growth strategy.

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
    'This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, communicate with us, or use our tax, insurance, and accounting services (the "Services"). By interacting with the Services, you agree to this Policy to the maximum extent permitted by law.',
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
    { label: 'Engagement Data:', desc: 'preference signals, form responses, and engagement context from our website and communications.' }
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
    'MRECAI provides tax planning and preparation, insurance brokerage, bookkeeping and accounting, and business management consulting services. All services are subject to availability and may be modified or discontinued at any time.',
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

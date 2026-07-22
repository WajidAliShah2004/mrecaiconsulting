'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaChartLine, FaArrowRight, FaQuoteLeft, FaIndustry, FaDollarSign, FaClock } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      industry: 'E-commerce',
      title: 'E-commerce Retailer Saves $47K Annually with Tax Strategy',
      client: 'Growing Online Retailer',
      challenge: 'Rapidly growing e-commerce business facing high tax burden and disorganized bookkeeping. Owner was spending 15+ hours/week on manual financial tasks.',
      solution: 'Implemented S-Corp election, automated bookkeeping system, and strategic tax planning including R&D credits for software development.',
      results: [
        '$47,000 in annual tax savings',
        '15 hours/week saved through automation',
        'Clean monthly financials for better decision-making',
        'Qualified for $28K in R&D tax credits',
      ],
      metrics: {
        savings: '$47,000',
        timeReduction: '78%',
        roi: '12x',
      },
      testimonial: 'MRE transformed our back office from chaos to clarity. The tax savings alone paid for their services 10x over, and the time we saved let us focus on growth.',
      services: ['Tax Strategy', 'Bookkeeping', 'AI Automation'],
    },
    {
      id: 2,
      industry: 'Professional Services',
      title: 'Law Firm Reduces Insurance Costs by 32% with Risk Architecture',
      client: 'Mid-Size Law Firm',
      challenge: 'Mid-sized law firm with overlapping insurance policies, coverage gaps, and rising premiums. Concerned about cyber liability exposure.',
      solution: 'Conducted comprehensive Risk Architecture audit, eliminated redundant coverage, added Cyber Liability and Tech E&O, negotiated with carriers through Grober Imbey partnership.',
      results: [
        '32% reduction in annual insurance premiums',
        'Eliminated 3 coverage gaps',
        'Added $2M cyber liability protection',
        'Streamlined claims process',
      ],
      metrics: {
        savings: '$18,500',
        coverageIncrease: '40%',
        timeToImplement: '3 weeks',
      },
      testimonial: 'We were overpaying for insurance while being underprotected. MRE\'s audit saved us money and gave us peace of mind.',
      services: ['Insurance Services', 'Risk Architecture'],
    },
    {
      id: 3,
      industry: 'Real Estate',
      title: 'Real Estate Investor Unlocks $125K with Cost Segregation',
      client: 'Commercial Real Estate Investor',
      challenge: 'Property investor with multiple commercial holdings not maximizing depreciation benefits. Standard 39-year depreciation schedule limiting cash flow.',
      solution: 'Performed cost segregation studies on 3 properties, accelerated depreciation, and implemented strategic tax planning for future acquisitions.',
      results: [
        '$125,000 in first-year tax deductions',
        'Improved cash flow for new acquisitions',
        'Multi-year tax roadmap created',
        'Entity structure optimized',
      ],
      metrics: {
        deductions: '$125K',
        cashFlowIncrease: '35%',
        paybackPeriod: '2 months',
      },
      testimonial: 'The cost segregation study was a game-changer. We unlocked six figures in deductions we didn\'t know existed.',
      services: ['Tax Strategy', 'Cost Segregation', 'Business Consulting'],
    },
    {
      id: 4,
      industry: 'Healthcare',
      title: 'Medical Practice Automates Patient Intake, Saves 25 Hours/Week',
      client: 'Growing Medical Practice',
      challenge: 'Growing medical practice overwhelmed with manual patient intake, insurance verification, and appointment scheduling. Staff spending excessive time on administrative tasks.',
      solution: 'Implemented AI-powered intake automation, integrated with existing EHR system, automated insurance verification, and deployed 24/7 AI scheduling assistant.',
      results: [
        '25 hours/week saved on administrative tasks',
        '40% reduction in no-shows',
        '99% patient satisfaction with new system',
        'Staff redeployed to patient care',
      ],
      metrics: {
        timeSaved: '25 hrs/week',
        noShowReduction: '40%',
        roi: '8x',
      },
      testimonial: 'Our staff can finally focus on patient care instead of paperwork. The AI system handles intake better than we ever could manually.',
      services: ['AI Automation', 'Technology Consulting', 'Process Optimization'],
    },
    {
      id: 5,
      industry: 'Construction',
      title: 'Contractor Improves Cash Flow by 60% with Financial Systems',
      client: 'NYC General Contractor',
      challenge: 'Construction company with inconsistent cash flow, delayed invoicing, and poor job costing visibility. Couldn\'t accurately bid on new projects.',
      solution: 'Implemented job costing system, automated invoicing and payment tracking, established cash flow forecasting, and created KPI dashboard.',
      results: [
        '60% improvement in cash flow',
        'Invoice processing time reduced from 5 days to 4 hours',
        'Accurate job costing for better bidding',
        'Real-time profitability visibility',
      ],
      metrics: {
        cashFlowIncrease: '60%',
        invoiceSpeed: '93% faster',
        profitMargin: '+12%',
      },
      testimonial: 'We went from guessing our profitability to knowing it in real-time. Game changer for our bidding and growth strategy.',
      services: ['Bookkeeping', 'Business Consulting', 'Financial Systems'],
    },
    {
      id: 6,
      industry: 'Technology',
      title: 'SaaS Startup Secures $380K in R&D Tax Credits',
      client: 'NYC SaaS Startup',
      challenge: 'Fast-growing software company unaware of R&D tax credit eligibility. Burning cash on development without capturing available credits.',
      solution: 'Assessed R&D activities, documented qualifying expenses, filed amended returns for prior years, and established ongoing R&D credit capture process.',
      results: [
        '$380,000 in R&D tax credits (3 years)',
        'Ongoing annual credits of $120K+',
        'Improved runway by 8 months',
        'Investor confidence increased',
      ],
      metrics: {
        credits: '$380K',
        annualRecurring: '$120K+',
        runwayExtension: '8 months',
      },
      testimonial: 'We had no idea we qualified for R&D credits. MRE found us nearly $400K that went straight to our runway.',
      services: ['Tax Strategy', 'R&D Tax Credits', 'Startup Consulting'],
    },
  ];

  return (
    <>
      <SEO
        title="Case Studies & Success Stories | MRECAI"
        description="Real results from real clients. See how MRECAI has helped businesses save money, improve efficiency, and achieve measurable growth through strategic consulting."
        canonical="/case-studies"
        keywords="case studies, success stories, client results, business consulting results, tax savings case studies, ROI examples"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Case Studies', url: '/case-studies' },
            ]),
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-primary-300 hover:text-primary-200">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-300">Case Studies</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results from <span className="text-primary-400">Real Clients</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              See how we've helped businesses save money, improve efficiency, and achieve measurable growth through strategic consulting, tax planning, and technology implementation.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {[
                { number: '$750K+', label: 'Total Client Savings' },
                { number: '180+', label: 'Clients Served' },
                { number: '98%', label: 'Success Rate' },
                { number: '10x', label: 'Average ROI' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl font-bold text-primary-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <FaIndustry className="text-2xl" />
                    <span className="text-sm font-semibold uppercase tracking-wide">{study.industry}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{study.title}</h2>
                </div>

                <div className="p-8">
                  {/* Client & Challenge */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-3">The Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-3">Our Solution</h3>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-primary-50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-navy-900 mb-4">Key Metrics</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {Object.entries(study.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl font-bold text-primary-600 mb-1">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-navy-900 mb-4">Results Achieved</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-navy-900 text-white rounded-xl p-6 mb-6">
                    <FaQuoteLeft className="text-primary-400 text-3xl mb-4" />
                    <p className="text-lg italic leading-relaxed mb-4">{study.testimonial}</p>
                    <div className="text-sm text-gray-400">— {study.client}</div>
                  </div>

                  {/* Services Used */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">Services Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free consultation to discuss your business challenges and explore how we can help you achieve measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Free Consultation
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

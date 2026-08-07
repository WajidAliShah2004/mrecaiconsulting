'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChartLine, FaCheckCircle, FaLightbulb, FaShieldAlt, FaCalculator, FaFileInvoiceDollar } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
  {
    question: 'What is tax strategy vs. tax preparation?',
    answer: 'Tax preparation is filing what happened last year. Tax strategy is planning what happens this year and beyond—entity structure, timing, deductions, and long-term savings.',
  },
  {
    question: 'How much can I save with tax strategy?',
    answer: 'It depends on your income, entity type, and operations. Many clients save $5,000–$50,000+ annually through strategic planning, entity optimization, and proactive deductions.',
  },
  {
    question: 'Do I need an LLC or S-Corp?',
    answer: 'It depends on your income, expenses, and goals. We analyze your situation and recommend the structure that minimizes taxes while fitting your operations.',
  },
  {
    question: 'Can you help with R&D tax credits?',
    answer: 'Yes. If you develop new products, processes, or techniques, you may qualify for R&D credits worth $250k–$500k+. We assess eligibility and coordinate with specialists.',
  },
  {
    question: 'What about Section 179 and bonus depreciation?',
    answer: 'These allow immediate deductions for equipment and vehicle purchases. We help you time purchases and maximize deductions based on 2025 tax law changes.',
  },
];

const TaxStrategy = () => {
  return (
    <>
      <SEO
        title="Tax Strategy & Planning | Small Business Tax Strategy 2025 | MRECAI"
        description="Strategic tax planning for small businesses. Entity optimization, R&D credits, cost segregation, Section 179, and proactive tax savings strategies."
        canonical="/services/tax-strategy"
        keywords="small business tax strategy 2025, Section 179 expensing limits, R&D tax credits, cost segregation, tax planning, entity optimization, S-corp election"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.taxAccounting,
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
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
            className="max-w-4xl"
          >
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-primary-300 hover:text-primary-200">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/services" className="text-primary-300 hover:text-primary-200">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-300">Tax Strategy</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tax Strategy Designed for Real Savings—and Real Peace of Mind
            </h1>

            {/* Answer-First Context Block - AEO Optimized */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                <strong>2025 Tax Law Changes:</strong> Section 179 limits, bonus depreciation phase-outs, and R&D credit opportunities are shifting. Strategic planning now can save thousands—or more—this year and beyond.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Free Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                Get a Quick Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Trust Stack for Service Authority */}
      <div className="bg-navy-900 border-t border-white/5">
        <TrustBar />
      </div>

      {/* What Tax Strategy Looks Like Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
              What Tax Strategy Looks Like at MRECAI
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FaCalculator,
                  title: 'Entity Structure Optimization',
                  description: 'LLC, S-Corp, or C-Corp? We analyze your income and recommend the structure that minimizes self-employment and income taxes.',
                },
                {
                  icon: FaFileInvoiceDollar,
                  title: 'R&D Tax Credits',
                  description: 'Product development, engineering innovation, or process improvements may qualify for $250k–$500k+ in credits. We assess eligibility.',
                },
                {
                  icon: FaChartLine,
                  title: 'Cost Segregation Studies',
                  description: 'Engineering-based analysis that accelerates depreciation on real estate, unlocking immediate tax savings.',
                },
                {
                  icon: FaLightbulb,
                  title: 'Section 179 & Bonus Depreciation',
                  description: 'Maximize deductions for equipment, vehicles, and technology purchases with strategic timing.',
                },
                {
                  icon: FaShieldAlt,
                  title: 'Estimated Tax Planning',
                  description: 'Avoid penalties and surprises with quarterly projections and payment strategies.',
                },
                {
                  icon: FaCheckCircle,
                  title: 'Multi-Year Tax Roadmap',
                  description: 'Long-term planning for retirement contributions, income timing, and succession strategies.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <item.icon className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive: R&D Credits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center">
              Deep Dive: R&D Tax Credits
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Many businesses qualify without realizing it
            </p>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Who Qualifies?</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Engineering and technical design work',
                  'Product design and prototyping',
                  'Manufacturing process improvements',
                  'Scientific or technical innovation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-600">
                <p className="text-lg text-gray-800 font-medium">
                  <strong>Potential Benefit:</strong> $250,000–$500,000+ in tax credits for qualifying activities. We assess eligibility and coordinate with R&D specialists.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive: Cost Segregation Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center">
              Deep Dive: Cost Segregation
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Accelerate depreciation on real estate investments
            </p>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">How It Works</h3>
              <p className="text-gray-700 mb-6">
                Engineering-based studies identify building components that can be depreciated faster than the standard 27.5 or 39-year schedule. This creates immediate tax savings.
              </p>

              <h4 className="text-xl font-bold text-navy-900 mb-3">Best For:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  'Commercial real estate owners',
                  'Rental property investors',
                  'Recent property purchases or improvements',
                  'Properties valued at $500k+',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
                <p className="text-lg text-gray-800 font-medium">
                  <strong>Outcome:</strong> Significant first-year deductions that improve cash flow and reduce tax liability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Your Tax Savings & Compliance Roadmap
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Every strategy engagement includes a written plan with:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FaCalculator className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Current Analysis</h3>
                <p className="text-gray-600">Where you are now and what's costing you</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FaLightbulb className="text-2xl text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Recommendations</h3>
                <p className="text-gray-600">Specific actions to reduce taxes</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FaChartLine className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Implementation Plan</h3>
                <p className="text-gray-600">Timeline and next steps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
              Let's Build Your Tax Strategy
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a strategy session to explore savings opportunities and create your roadmap.
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Free Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>
      {/* NEW: Process Flow (How It Works) */}
      <ProcessFlow />
    </>
  );
};

export default TaxStrategy;

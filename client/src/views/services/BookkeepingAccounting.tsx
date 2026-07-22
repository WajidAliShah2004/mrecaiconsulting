'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck, FaChartLine, FaCalculator, FaFileInvoice, FaClipboardCheck } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow, IntegratedPartnerBanner } from '../../components/common';
import { serviceSchemas, faqSchema } from '../../utils/schemas';

const faqs = [
  {
    question: 'How much does bookkeeping cost?',
    answer: 'It depends on transaction volume, complexity, and whether you need cleanup. We\'ll give you a clear scope after a quick review. Most small businesses range from $300-$800/month for ongoing bookkeeping.',
  },
  {
    question: 'Do you do catch-up and cleanup?',
    answer: 'Yes. Cleanup and stabilization is one of the most common starting points. We\'ll assess scope, stabilize the system, then keep it clean going forward.',
  },
  {
    question: 'What software do you support?',
    answer: 'In most cases, yes. We work with QuickBooks Online, QuickBooks Desktop, Xero, and other major platforms. If your current setup is holding you back, we\'ll recommend improvements.',
  },
  {
    question: 'Can you work with my CPA/tax preparer?',
    answer: 'Absolutely. We coordinate with your existing tax professional to ensure seamless year-end reporting and tax preparation. Clean books make tax season easier for everyone.',
  },
  {
    question: 'How fast is onboarding?',
    answer: 'Typically 1-2 weeks for initial setup and cleanup, then we move to monthly ongoing support. We prioritize getting you clean, accurate books as quickly as possible.',
  },
];

const BookkeepingAccounting = () => {
  return (
    <>
      <SEO
        title="Bookkeeping & Accounting Services | MRECAI"
        description="Monthly bookkeeping, clean-up, reporting, and accounting support for businesses that want accurate books, better cashflow visibility, and decision-ready financials."
        canonical="/services/bookkeeping-accounting"
        keywords="bookkeeping services, accounting, monthly close, financial reporting, QuickBooks, catch-up bookkeeping, small business accounting"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.taxAccounting,
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Background Elements */}
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
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-primary-300 hover:text-primary-200">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/services" className="text-primary-300 hover:text-primary-200">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-300">Bookkeeping & Accounting</span>
            </nav>

            {/* H1 - AEO Optimized */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bookkeeping That Gives You Clarity—Not Confusion
            </h1>

            {/* Answer-First Context Block */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                If your numbers aren't reliable, every decision costs more. We provide accurate, consistent <strong>bookkeeping and accounting support</strong> so you can see what's happening in your business and act with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
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

      {/* What We Handle Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
              What We Handle
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FaFileInvoice,
                  title: 'Monthly Reconciliation',
                  description: 'Bank accounts, credit cards, loans—all reconciled and balanced monthly.',
                },
                {
                  icon: FaChartLine,
                  title: 'Financial Reporting',
                  description: 'Monthly P&L, Balance Sheet, and Cash Flow snapshot—owner-friendly and decision-ready.',
                },
                {
                  icon: FaCalculator,
                  title: 'Chart of Accounts Cleanup',
                  description: 'Organized categories and rules so your books stay clean going forward.',
                },
                {
                  icon: FaClipboardCheck,
                  title: 'Vendor & Expense Controls',
                  description: 'Receipt capture, approvals, and expense tracking for audit-ready documentation.',
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

            {/* Outcome Statement */}
            <div className="mt-12 p-8 bg-primary-50 rounded-xl border-l-4 border-primary-600">
              <p className="text-lg text-gray-800 font-medium">
                <strong>Outcome:</strong> Clean books, fewer surprises, and better decisions. You'll always know your cash flow, profitability, and what to do next.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Process Flow (How It Works) */}
      <ProcessFlow />

      {/* Why We're Different Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Most firms stop at bookkeeping. We connect:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FaCheck className="text-2xl text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Tax Strategy</h3>
                <p className="text-gray-600">Categories match real deductions for better tax outcomes</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FaCheck className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Insurance Review</h3>
                <p className="text-gray-600">Coverage matches actual operations for better protection</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FaCheck className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Automation</h3>
                <p className="text-gray-600">Data capture is faster and audit-ready with smart workflows</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrated Partner Banner */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <IntegratedPartnerBanner context="tax" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
              Let's Clean This Up—and Keep It Clean
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free consultation to discuss your bookkeeping needs and get a clear plan forward.
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
    </>
  );
};

export default BookkeepingAccounting;

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFileAlt, FaCheckCircle, FaShieldAlt, FaUserTie } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow, IntegratedPartnerBanner } from '../../components/common';

const faqs = [
  {
    question: 'What documents do you need?',
    answer: 'We provide a customized checklist based on your situation. Typically: W-2s, 1099s, receipts for deductions, prior year returns, and any relevant financial statements. We make it easy to gather what\'s needed.',
  },
  {
    question: 'Can you file extensions?',
    answer: 'Yes. If you need more time, we can file an extension and work with you to complete your return by the extended deadline.',
  },
  {
    question: 'Do you help if I\'m missing documents?',
    answer: 'Absolutely. We can help you request missing documents from employers, banks, or the IRS. We\'ll guide you through the process.',
  },
  {
    question: 'How do you handle notices?',
    answer: 'If you receive an IRS or state notice, we review it, explain what it means, and help you respond appropriately. We handle correspondence and resolution.',
  },
  {
    question: 'Do you coordinate bookkeeping + tax?',
    answer: 'Yes—that\'s our advantage. Clean books throughout the year make tax preparation faster, more accurate, and less stressful. We can handle both.',
  },
];

const TaxPreparation = () => {
  return (
    <>
      <SEO
        title="Tax Preparation Services | Individual & Business | MRECAI"
        description="Tax preparation for individuals and businesses with clear documentation, reliable filing, and year-round guidance. Accurate returns, on time, every time."
        canonical="/services/tax-preparation"
        keywords="tax preparation, tax filing, individual taxes, business taxes, tax returns, IRS, tax professional"
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
              <span className="text-gray-300">Tax Preparation</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tax Preparation Without the Stress
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Taxes shouldn't feel like chaos. We make the process <strong>organized, accurate, and clear</strong>—so you know what's happening, why it matters, and what to do next.
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

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
              What We Do
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <FaUserTie className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Individuals & Families</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>W-2 income and 1099 reporting</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Rental property income and expenses</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Investment activity (stocks, crypto, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Itemized deductions and credits</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <FaFileAlt className="text-4xl text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Businesses</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Schedule C (sole proprietors)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Partnerships and S-corporations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Multi-state considerations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Payroll tax compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-yellow-50 rounded-xl border-l-4 border-yellow-600">
              <FaShieldAlt className="text-3xl text-yellow-600 mb-4" />
              <p className="text-lg text-gray-800 font-medium">
                <strong>Compliance Note:</strong> We prioritize filing accuracy and documentation standards. Every return is reviewed for completeness before submission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Process Flow (How It Works) */}
      <ProcessFlow />

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

          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-gray-800 text-center">
              <strong>Tax Disclaimer:</strong> Tax information and guidance is general in nature and not a guarantee of outcomes. Specific recommendations depend on your facts and circumstances.
            </p>
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
              Ready to File with Confidence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a consultation to discuss your tax situation and get started.
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

export default TaxPreparation;

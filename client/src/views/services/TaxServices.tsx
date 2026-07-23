'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFileInvoiceDollar, FaCheckCircle, FaCalculator, FaShieldAlt, FaChartLine, FaUserTie } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
  {
    question: 'How do you help minimize my tax liability?',
    answer: 'We go beyond basic filing by identifying proactive deductions, entity optimization strategies, and timing-based tax savings that align with the latest 2025 tax laws.',
  },
  {
    question: 'What types of tax returns do you handle?',
    answer: 'We prepare individual (1040), corporate (1120/1120-S), partnership (1065), and estate/trust (1041) returns, ensuring accuracy and compliance across all jurisdictions.',
  },
  {
    question: 'Can you help with past-due taxes or IRS notices?',
    answer: 'Yes. We provide IRS representation and resolution services to help you address notices, file back taxes, and navigate payment plans or settlements.',
  },
  {
    question: 'Do you offer year-round tax support?',
    answer: 'Absolutely. We believe tax planning is a year-round activity. We provide ongoing advisory to ensure you are never surprised by your tax bill at the end of the year.',
  },
  {
    question: 'How does bookkeeping integrate with your tax services?',
    answer: 'Our hybrid model ensures your books are tax-ready every month. This synergy eliminates year-end scrambling and ensures every possible deduction is captured in real-time.',
  },
];

const TaxServices = () => {
  return (
    <>
      <SEO
        title="Tax Preparation & Consulting | Business & Individual Tax | MRECAI"
        description="Expert tax preparation and strategic consulting for businesses and individuals. Minimize liability with proactive planning and year-round compliance support."
        canonical="/services/tax-services"
        keywords="tax preparation, tax consulting, small business taxes, individual tax return, IRS representation, tax strategy NYC, tax compliance"
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
              <span className="text-gray-300">Tax Preparation & Consulting</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tax Preparation & Consulting: Strategic Filing for Growth
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Maximize your financial position with <strong>proactive tax strategies</strong>. We don't just report your past; we engineer your future through precise preparation and aggressive, compliant tax optimization.
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

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Tax Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From foundational filing to complex IRS representation, we provide the expertise needed to navigate the evolving tax landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaFileInvoiceDollar,
                title: 'Business Tax Preparation',
                description: 'Federal and state returns for LLCs, S-Corps, C-Corps, and Partnerships with a focus on maximizing business credits.',
              },
              {
                icon: FaUserTie,
                title: 'Individual Tax Filing',
                description: 'Precise preparation for high-net-worth individuals, freelancers, and families with complex deduction needs.',
              },
              {
                icon: FaChartLine,
                title: 'Tax Strategy & Advisory',
                description: 'Year-round planning to minimize your liability before tax season even begins.',
              },
              {
                icon: FaShieldAlt,
                title: 'IRS Representation',
                description: 'Expert advocacy for audits, notices, and payment resolutions with federal and state agencies.',
              },
              {
                icon: FaCalculator,
                title: 'Sales & Payroll Tax',
                description: 'Complete management of recurring tax obligations to ensure uninterrupted business compliance.',
              },
              {
                icon: FaCheckCircle,
                title: 'Compliance Audits',
                description: 'Proactive review of your historical filings to identify missed savings and potential risks.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-600 transition-colors duration-300">
                  <service.icon className="text-2xl text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessFlow />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Tax Questions? We Have Answers.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">
            "Don't leave your tax savings to chance."
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all hover:scale-105 shadow-xl"
            >
              Book Free Strategy Call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all"
            >
              Get a Quick Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxServices;

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChartLine, FaCheckCircle, FaLightbulb, FaShieldAlt, FaCalculator, FaFileInvoiceDollar } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
  {
    question: 'What is the difference between tax prep and tax strategy?',
    answer: 'Tax preparation is historical reporting of what has already happened. Tax strategy is forward-looking planning—engineering your business structure and transactions to minimize future taxes.',
  },
  {
    question: 'How do R&D tax credits work for small businesses?',
    answer: 'If you develop software, products, or new processes, you may qualify for significant federal and state credits. We conduct R&D studies to capture these $250k–$500k+ benefits.',
  },
  {
    question: 'What is Cost Segregation?',
    answer: 'It is an engineering-based study of your real estate assets that allows you to accelerate depreciation, significantly reducing taxable income in the early years of ownership.',
  },
  {
    question: 'When is the best time to start tax planning?',
    answer: 'Now. Ideally, strategy begins before the fiscal year starts, but significant savings can often be found by mid-year through entity restructuring and timing-based shifts.',
  },
  {
    question: 'Do you help with S-Corp elections and entity optimization?',
    answer: 'Yes. Selecting the right entity (LLC, S-Corp, C-Corp) is the foundation of tax strategy. We analyze your income levels and goals to recommend the most tax-efficient structure.',
  },
];

const StrategicTaxPlanning = () => {
  return (
    <>
      <SEO
        title="Strategic Tax Planning & Advisory | Long-Term Wealth Optimization | MRECAI"
        description="Multi-year tax strategy for business owners and high-net-worth individuals. Entity optimization, R&D credits, cost segregation, and proactive tax minimization."
        canonical="/services/strategic-tax-planning"
        keywords="strategic tax planning, tax advisory, R&D tax credits, cost segregation study, entity optimization, S-Corp election, wealth tax strategy"
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
              <span className="text-gray-300">Strategic Tax Planning</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Strategic Tax Planning: Engineering Your Wealth
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Move from reactive filing to <strong>proactive wealth creation</strong>. Our strategic advisory service uses advanced tax engineering—including entity optimization and R&D credits—to keep more of what you earn.
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
              Advanced Tax Engineering
            </h2>
            <p className="text-lg text-gray-600">
              We deploy sophisticated tax strategies typically reserved for large corporations, scaled for the high-growth business owner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaLightbulb,
                title: 'Entity Optimization',
                description: 'Analysis of S-Corp vs LLC vs C-Corp structures to minimize self-employment tax and maximize retained earnings.',
              },
              {
                icon: FaChartLine,
                title: 'R&D Tax Credits',
                description: 'Full-service studies to capture federal and state credits for technical innovation and process development.',
              },
              {
                icon: FaCalculator,
                title: 'Cost Segregation',
                description: 'Engineering-based real estate studies to accelerate depreciation and generate immediate cash flow.',
              },
              {
                icon: FaShieldAlt,
                title: 'Asset Protection',
                description: 'Strategic planning to shield your wealth through compliant, multi-layered domestic and international structures.',
              },
              {
                icon: FaFileInvoiceDollar,
                title: 'Executive Compensation',
                description: 'Designing tax-advantaged bonus structures and retirement plans to attract talent while lowering corporate tax.',
              },
              {
                icon: FaCheckCircle,
                title: 'Multi-Year Forecasting',
                description: 'Simulating future scenarios to ensure your 2026 and 2027 tax liability is minimized through today\'s actions.',
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
              Strategic Advisory FAQs
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
            "Your tax strategy is your business competitive advantage."
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

export default StrategicTaxPlanning;

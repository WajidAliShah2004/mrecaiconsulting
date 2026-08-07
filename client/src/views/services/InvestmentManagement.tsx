'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChartLine, FaCheck, FaShieldAlt } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';
import { COMPANY_INFO } from '../../utils/constants';

const faqs = [
  {
    question: 'How do you handle investment risk?',
    answer: 'We don\'t just look at market risk; we look at your entire financial ecosystem—including tax liability and insurance gaps—to create a truly resilient portfolio.',
  },
  {
    question: 'Are you a fiduciary?',
    answer: 'Yes. Our strategic partners operate under the fiduciary standard, meaning every recommendation is legally and ethically required to be in your best interest.',
  },
  {
    question: 'Do you coordinate investments with my tax strategy?',
    answer: 'This is where we excel. Most advisors ignore the tax impact of investments. We ensure your portfolio is tax-efficient, minimizing the "tax drag" on your growth.',
  },
  {
    question: 'What types of accounts do you manage?',
    answer: 'We manage everything from individual brokerage accounts and IRAs to complex business retirement plans (401k, SEP, SIMPLE).',
  },
];

const InvestmentManagement = () => {
  return (
    <>
      <SEO
        title="Investment & Wealth Management | Strategic Planning | MRECAI"
        description="Certified investment management and holistic financial planning. We sync your portfolio with your tax strategy and long-term business goals."
        canonical="/services/investment-management"
        keywords="investment management, wealth management, financial planning, CFP, CFA, tax-efficient investing"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.investmentManagement,
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
              <span className="text-gray-300">Investment Management</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Investment Management That Syncs with Your Whole Financial Life
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Most advisors manage your portfolio in a vacuum. We provide <strong>holistic wealth management</strong> that considers your tax position, risk architecture, and business growth.
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

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Expert Investment Management Services</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through our strategic partnership with certified financial professionals holding both CFP® (Certified Financial Planner) and CFA (Chartered Financial Analyst) credentials, we provide comprehensive investment and financial management services. Our partner brings decades of expertise in portfolio management, retirement planning, and wealth preservation.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <FaShieldAlt className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-900 mb-2">Professional Partnership</h4>
                  <p className="text-gray-700">
                    Investment and financial management services are provided through our strategic partner, a Certified Financial Planner (CFP®) and Chartered Financial Analyst (CFA) with extensive experience in wealth management and financial planning.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Investment Services</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'Investment Portfolio Management',
                  description: 'Professional management of your investment portfolio aligned with your goals and risk tolerance'
                },
                {
                  title: 'Retirement Planning',
                  description: 'Comprehensive retirement planning to ensure financial security in your golden years'
                },
                {
                  title: 'Wealth Management',
                  description: 'Holistic wealth management strategies for high-net-worth individuals and families'
                },
                {
                  title: 'Financial Planning',
                  description: 'Comprehensive financial planning covering all aspects of your financial life'
                },
                {
                  title: 'Risk Assessment & Management',
                  description: 'Thorough risk analysis and strategies to protect your wealth'
                },
                {
                  title: 'Tax-Efficient Investing',
                  description: 'Investment strategies designed to minimize tax impact and maximize returns'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100"
                >
                  <div className="flex items-start space-x-3">
                    <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">{service.title}</h4>
                      <p className="text-gray-700 text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Why Choose Our Investment Services?</h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Certified Expertise:</strong> CFP® and CFA credentials ensure the highest professional standards</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Personalized Strategies:</strong> Investment plans tailored to your unique goals and situation</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Comprehensive Approach:</strong> Holistic financial planning that considers all aspects of your wealth</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Fiduciary Standard:</strong> Your interests always come first in every recommendation</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* NEW: Process Flow (How It Works) */}
      <ProcessFlow />

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Build a Smarter Financial Future</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Book a strategy call to review your current portfolio and see how we integrate wealth management with tax and risk strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-navy-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg"
              >
                Book Free Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InvestmentManagement;

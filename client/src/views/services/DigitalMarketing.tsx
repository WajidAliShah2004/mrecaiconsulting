'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaMobileAlt, FaCheck, FaSearch, FaBullhorn, FaChartLine } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';
import { COMPANY_INFO } from '../../utils/constants';

const faqs = [
  {
    question: 'How do you measure marketing ROI?',
    answer: 'We track conversions, not just clicks. By connecting your marketing data with your financial reporting, we can show you the exact Customer Acquisition Cost (CAC) and Lifetime Value (LTV).',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term investment. Typically, you\'ll see significant movement in 3-6 months. We focus on "Answer Engine Optimization" (AEO) to get you visibility in AI search results faster.',
  },
  {
    question: 'Can you handle my social media ads?',
    answer: 'Yes. We manage high-performance PPC and social ad campaigns that are designed to feed into our AI lead reactivation systems.',
  },
  {
    question: 'Do you provide regular reporting?',
    answer: 'Every month you\'ll receive a plain-English report that connects your marketing spend to your revenue growth. No vanity metrics.',
  },
];

const DigitalMarketing = () => {
  return (
    <>
      <SEO
        title="Digital Marketing Services | SEO, Social Media & PPC | MRECAI"
        description="Full-service digital marketing including SEO, social media management, PPC advertising, content marketing, and brand development. Data-driven strategies that deliver measurable ROI."
        canonical="/services/digital-marketing"
        keywords="digital marketing services, SEO optimization, social media marketing, PPC management, content marketing, brand development, digital advertising NYC"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.digitalMarketing,
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
              <span className="text-gray-300">Digital Marketing</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing That Drives Real Results
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Comprehensive digital marketing services including <strong>SEO, social media management, PPC advertising, and content marketing</strong>. We create data-driven strategies that increase visibility and drive conversions.
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Grow Your Business with Digital Marketing</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In today's digital-first world, a strong online presence is essential for business success. At MRECAI, we provide comprehensive digital marketing services designed to increase your visibility, engage your audience, and drive measurable results.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Digital Marketing Services</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: FaSearch,
                  title: 'SEO & Content Marketing',
                  description: 'Improve your search rankings and attract organic traffic with strategic SEO and quality content'
                },
                {
                  icon: FaBullhorn,
                  title: 'Social Media Management',
                  description: 'Build and engage your audience across all major social media platforms'
                },
                {
                  icon: FaChartLine,
                  title: 'PPC Advertising Campaigns',
                  description: 'Drive immediate results with targeted pay-per-click advertising on Google and social media'
                },
                {
                  icon: FaChartLine,
                  title: 'Analytics & Reporting',
                  description: 'Track performance and optimize campaigns with comprehensive analytics and insights'
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
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-2xl text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">{service.title}</h4>
                      <p className="text-gray-700 text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Why Choose MRECAI for Digital Marketing?</h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Data-Driven Strategies:</strong> Every decision backed by analytics and performance data</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Customized Campaigns:</strong> Tailored strategies designed for your specific business goals</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Transparent Reporting:</strong> Clear, regular reports showing exactly what's working</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>ROI Focused:</strong> We prioritize strategies that deliver measurable business results</span>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Feed Your Growth?</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Book a strategy call to audit your current marketing spend and see how we can optimize your ROI.
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

export default DigitalMarketing;

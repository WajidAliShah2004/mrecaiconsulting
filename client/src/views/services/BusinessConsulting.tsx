'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';
import { COMPANY_INFO } from '../../utils/constants';

const faqs = [
  {
    question: 'How can consulting help my business grow?',
    answer: 'Consulting provides an outside perspective, expert analysis, and strategic frameworks like M.R.E. (Map, Reduce, Execute) to identify bottlenecks and unlock scalability.',
  },
  {
    question: 'What is the M.R.E. framework?',
    answer: 'Map (understand your current state), Reduce (eliminate waste and noise), and Execute (implement systems and processes to drive growth).',
  },
  {
    question: 'Do you implement the solutions you recommend?',
    answer: 'Yes. We don\'t just give you a report; we partner with you to implement financial, operational, and technology systems that drive results.',
  },
  {
    question: 'What types of businesses do you work with?',
    answer: 'We specialize in small to medium-sized businesses looking to professionalize their operations, optimize their tax position, and protect what they\'ve built.',
  },
  {
    question: 'How long are consulting engagements?',
    answer: 'Engagements range from short-term strategic audits (2-4 weeks) to long-term advisory partnerships (ongoing monthly support).',
  },
];

const BusinessConsulting = () => {
  return (
    <>
      <SEO
        title="Business Consulting & Management | Strategic Growth | MRECAI"
        description="Comprehensive business management consulting. We connect accounting, tax, insurance, and technology to turn chaos into systems and growth."
        canonical="/services/business-management"
        keywords="business management consulting, strategic planning, operational efficiency, growth strategy, MRECAI"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.businessConsulting,
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
              <span className="text-gray-300">Business Management</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Management Consulting That Turns Chaos into Systems
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Most businesses grow into chaos. We provide the <strong>strategic guidance and systems</strong> to professionalize your operations, protect your profit, and build a scalable foundation.
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
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Transform Your Business with Expert Consulting</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At MRECAI, we provide comprehensive business consulting services designed to help your organization achieve sustainable growth and operational excellence. Our experienced consultants work closely with you to understand your unique challenges and develop tailored strategies that drive real results.
            </p>

            <h3 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Our Business Consulting Services</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {[
                {
                  title: 'Strategic Planning & Execution',
                  description: 'Develop comprehensive business strategies and roadmaps for long-term success'
                },
                {
                  title: 'Financial Analysis & Forecasting',
                  description: 'In-depth financial analysis to identify opportunities and optimize performance'
                },
                {
                  title: 'Operational Efficiency',
                  description: 'Streamline processes and eliminate waste to maximize productivity'
                },
                {
                  title: 'Growth Strategy Development',
                  description: 'Create actionable plans for sustainable business expansion'
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

            <h3 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Why Choose MRECAI for Business Consulting?</h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Proven Track Record:</strong> 180+ clients served with 98% satisfaction rate</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Personalized Approach:</strong> Tailored solutions designed for your specific needs</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Expert Team:</strong> Experienced consultants with diverse industry knowledge</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Results-Driven:</strong> Focus on measurable outcomes and ROI</span>
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
            <h2 className="text-4xl font-bold mb-6">Let's Turn Chaos Into Systems</h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Book a strategy call to diagnose your current roadblocks and build your growth roadmap.
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

export default BusinessConsulting;

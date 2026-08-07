'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaCheckCircle, FaLock, FaUserShield, FaBuilding, FaHandshake } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
  {
    question: 'What is risk architecture?',
    answer: 'Risk architecture is a comprehensive approach to identifying, assessing, and protecting against business and personal risks through insurance, compliance, and strategic planning.',
  },
  {
    question: 'How is this different from just buying insurance?',
    answer: 'Insurance is one tool. Risk architecture looks at your entire exposure—operations, contracts, compliance, cyber threats—and builds a protection strategy that fits your actual risk profile.',
  },
  {
    question: 'Who is Grober Imbey?',
    answer: 'Grober Imbey is our strategic insurance partner with a 50-year legacy of protecting businesses and high-net-worth individuals. Their expertise enhances our risk architecture services.',
  },
  {
    question: 'What types of coverage do you recommend?',
    answer: 'It depends on your operations. Common recommendations include General Liability, Professional Liability (E&O), Cyber Liability, Commercial Property, and specialized coverage for your industry.',
  },
  {
    question: 'Do you work with high-net-worth individuals?',
    answer: 'Yes. Through our partnership with Grober Imbey, we provide private client services including umbrella policies, estate protection, and specialized coverage.',
  },
];

const RiskArchitecture = () => {
  return (
    <>
      <SEO
        title="Risk Architecture & Insurance Services | Business Insurance Valley Stream | MRECAI"
        description="Comprehensive risk architecture and insurance services. Cyber liability, professional liability, commercial insurance, and private client services through our partnership with Grober Imbey."
        canonical="/services/risk-architecture"
        keywords="business insurance Valley Stream, cyber liability coverage for consultants, professional liability insurance, E&O insurance, risk management"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'InsuranceAgency',
              'name': 'MRECAI',
              'description': 'Risk architecture and insurance services',
              'knowsAbout': [
                'Cyber Liability Insurance',
                'Professional Liability (E&O)',
                'Commercial Insurance',
                'Private Client Services',
                'Risk Management'
              ],
              'areaServed': 'Valley Stream, NY and surrounding areas',
            },
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
              <span className="text-gray-300">Risk Architecture</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Risk Architecture: Protect What You've Built
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                <strong>Risk architecture</strong> goes beyond insurance—it's a comprehensive strategy to identify, assess, and protect against business and personal risks through coverage, compliance, and proactive planning.
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

      {/* Partnership Narrative Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <FaHandshake className="text-6xl text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Powered by a 50-Year Legacy
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Through our strategic partnership with <strong className="text-primary-600">Grober Imbey</strong>, we bring five decades of insurance expertise and trusted protection to every client.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border border-primary-100 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Grober Imbey's 50-year legacy in insurance and risk management enhances our ability to provide comprehensive protection strategies that align with your financial, operational, and compliance goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Together, we deliver <strong>integrated risk architecture</strong>—where insurance, tax strategy, and business operations work in harmony.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Spotlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
              Service Spotlights
            </h2>

            <div className="space-y-8">
              {/* Cyber Liability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaLock className="text-3xl text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      Cyber Liability & Data Breach Coverage
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Protect against ransomware, data breaches, and cyber attacks with comprehensive coverage and incident response.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-20">
                  {[
                    'Data breach notification and credit monitoring',
                    'Ransomware and cyber extortion coverage',
                    'Business interruption from cyber events',
                    'Legal defense and regulatory fines',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Professional Liability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaUserShield className="text-3xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      Professional Liability (E&O)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Protect your professional services with errors and omissions coverage tailored to your industry.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-20">
                  {[
                    'Coverage for professional mistakes and oversights',
                    'Legal defense costs',
                    'Client claims and disputes',
                    'Industry-specific policy customization',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Private Client Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaBuilding className="text-3xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      Private Client Services (High Net Worth)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Specialized coverage and risk management for high-net-worth individuals and families.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-20">
                  {[
                    'Umbrella and excess liability policies',
                    'High-value property and asset protection',
                    'Estate and legacy planning coordination',
                    'Concierge risk management services',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Review Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
              Our Coverage Review Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Risk Assessment',
                  description: 'We analyze your operations, contracts, and exposure to identify gaps and vulnerabilities.',
                },
                {
                  step: '2',
                  title: 'Coverage Analysis',
                  description: 'Review existing policies to ensure they match your actual risk profile and operations.',
                },
                {
                  step: '3',
                  title: 'Recommendations',
                  description: 'Provide clear recommendations for coverage improvements, cost optimization, and risk mitigation.',
                },
                {
                  step: '4',
                  title: 'Implementation & Ongoing Support',
                  description: 'Coordinate policy placement and provide ongoing reviews as your business evolves.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
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
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <p className="text-gray-800 text-center">
              <strong>Compliance Disclaimer:</strong> Insurance recommendations are based on general risk assessment. Specific coverage needs depend on your operations, contracts, and regulatory requirements.
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
              Let's Assess Your Risk Profile
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a risk assessment to identify gaps and build a comprehensive protection strategy.
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Risk Assessment
            </Link>
          </motion.div>
        </div>
      </section>
      {/* NEW: Process Flow (How It Works) */}
      <ProcessFlow />
    </>
  );
};

export default RiskArchitecture;

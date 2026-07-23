'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaCheckCircle, FaBuilding, FaUserShield, FaLock, FaUmbrella, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow, IntegratedPartnerBanner } from '../../components/common';

const faqs = [
  {
    question: 'How do you determine the right coverage for my business?',
    answer: 'We conduct a comprehensive Risk Architecture audit, analyzing your operations, exposure points, and contractual obligations to design a multi-layered defense strategy.',
  },
  {
    question: 'What is the MRECAI and Grober Imbey partnership?',
    answer: 'MRECAI integrates financial and tech strategy with the 50-year legacy of Grober Imbey Insurance Agency, providing clients with access to top-tier carriers and veteran industry expertise.',
  },
  {
    question: 'Do you handle cyber liability and data breach insurance?',
    answer: 'Yes. In the modern age, cyber insurance is critical. We specialize in Tech E&O and Cyber Liability to protect businesses against digital threats and data loss.',
  },
  {
    question: 'Can you review my current policies for gaps?',
    answer: 'Absolutely. Many business owners are under-insured or paying for redundant coverage. We provide a "Gap Analysis" to optimize your protection and your premium.',
  },
  {
    question: 'What are Private Client Services?',
    answer: 'These are specialized insurance programs for high-net-worth individuals and families, covering multi-state properties, luxury assets, and high-limit umbrella protection.',
  },
];

const InsuranceServices = () => {
  return (
    <>
      <SEO
        title="Insurance Solutions & Risk Management | MRECAI"
        description="Expert insurance consulting for business and personal protection. Access 50+ years of legacy expertise through Grober Imbey partnership. Cyber, liability, and private client services."
        canonical="/services/insurance"
        keywords="business insurance NYC, personal insurance, cyber liability insurance, risk management, Grober Imbey insurance, private client services, insurance gap analysis"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.insurance,
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
              <span className="text-gray-300">Insurance Solutions</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insurance Solutions: Protection Beyond the Policy
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Safeguard what you've built with <strong>intelligence-driven insurance</strong>. Through our 50-year legacy partnership with Grober Imbey, we provide veteran expertise and access to global carriers to architect your total risk defense.
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
              Strategic Risk Protection
            </h2>
            <p className="text-lg text-gray-600">
              We provide more than just coverage—we provide a comprehensive architecture to protect your business, your family, and your legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaBuilding,
                title: 'Commercial Liability',
                description: 'General liability, professional E&O, and workers compensation tailored to your specific industry risk.',
              },
              {
                icon: FaLock,
                title: 'Cyber & Data Breach',
                description: 'Critical protection against digital threats, ransomware, and data recovery costs for modern enterprises.',
              },
              {
                icon: FaUserShield,
                title: 'Private Client Services',
                description: 'High-limit protection for high-net-worth families, including luxury assets and multi-jurisdiction umbrella.',
              },
              {
                icon: FaUmbrella,
                title: 'Umbrella Protection',
                description: 'Extended liability layers to protect your total net worth from unforeseen legal exposures.',
              },
              {
                icon: FaBriefcase,
                title: 'Directors & Officers (D&O)',
                description: 'Specialized coverage protecting leadership teams and board members from management liability.',
              },
              {
                icon: FaCheckCircle,
                title: 'Risk Audit & Gap Analysis',
                description: 'We review your existing stack to find hidden exposures and eliminate redundant premiums.',
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

      {/* Integrated Partner Banner */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <IntegratedPartnerBanner context="insurance" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Common Insurance Questions
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
            "Better protection starts with a better plan."
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
          <div className="mt-8">
            <Link href="/services" className="text-primary-400 hover:text-primary-300 inline-flex items-center font-semibold">
              Explore All Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsuranceServices;

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { faqSchema } from '../../utils/schemas';

const faqs = [
  {
    question: 'What does MRECAI do?',
    answer: 'We provide tax preparation and strategy consulting, insurance solutions, and finance consulting—so clients can stay compliant, improve profitability, and reduce risk. We integrate tax, insurance, and finance consulting under one roof.',
  },
  {
    question: 'What if I don\'t live in New York?',
    answer: 'MRECAI serves families and businesses in all 50 states. While we are headquartered in New York, you do not need to be located in New York to work with us.',
  },
  {
    question: 'Do you work with individuals and businesses?',
    answer: 'Yes. We support individuals and families with tax and protection planning, and we support businesses with back-office operations, strategy, and systems. Our services are designed for small to mid-sized enterprises (SMEs), entrepreneurs, and growing businesses.',
  },
  {
    question: 'What\'s the first step to working together?',
    answer: 'A short consultation to understand your goals, current pain points, and the fastest path to improvement. We\'ll review your situation and recommend the highest-impact starting point. Book a free consultation at mrecai.com/book-now or call +1-929-702-2818.',
  },
  {
    question: 'Can you help clean up messy bookkeeping?',
    answer: 'Yes—cleanup and stabilization is one of the most common starting points. We\'ll assess scope, stabilize the system, then keep it clean going forward. We handle catch-up bookkeeping, reconciliations, and ongoing monthly support.',
  },
  {
    question: 'How do I streamline my small business back office?',
    answer: 'The process starts by mapping your current manual tasks (like invoice processing, bookkeeping catch-up, or month-end reporting). MRECAI designs streamlined systems and provides expert hands-on support. This allows your team to reclaim 10-20 hours a week by eliminating repetitive data entry and manual administrative tasks.',
  },
  {
    question: 'What is an "Operating System for Modern Business"?',
    answer: 'It is a unified framework that connects your financial data, risk management, and day-to-day operations. Most businesses suffer from "fragmented systems" where their accountant, insurance agent, and business consultant don\'t talk. MRECAI acts as the single source of truth, ensuring your entire business architecture works in perfect synchronization.',
  },
  {
    question: 'How can MRECAI help with tax reduction strategy?',
    answer: 'We go beyond basic filing. We provide proactive tax legal strategy and structural planning designed to keep more of what you earn. By integrating your bookkeeping with tax consulting, we identify credits, deductions, and structural optimizations (like S-Corp conversions or R&D credits) that traditional accountants often overlook.',
  },
  {
    question: 'Can you improve our operations without disrupting my team?',
    answer: 'Yes—our approach is phased and practical. We start with the highest-impact improvements and training. We identify where time is being lost, build a "Phase 1" system, train your team with simple SOPs, and only expand after Phase 1 is stable. Better processes should remove repetitive work so your team focuses on higher-value tasks.',
  },
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)).replace(/</g, '\\u003c') }}
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-navy-900 pr-8">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 mb-6">
              Have more questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-400 focus:ring-offset-2"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomeFAQ;


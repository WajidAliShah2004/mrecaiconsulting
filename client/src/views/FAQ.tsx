'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaSearch, FaHome, FaChevronRight } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { faqSchema, breadcrumbSchema } from '../utils/schemas';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs: FAQItem[] = [
    // General / Getting Started
    {
      category: 'General',
      question: 'What services does MRECAI offer?',
      answer: 'We offer comprehensive business solutions including Tax Services, Insurance, Bookkeeping & Accounting, Business Consulting, AI & Technology Consulting, Digital Marketing, Investment Management, and Estate Planning. We\'re your one-stop partner for all business needs.',
    },
    {
      category: 'General',
      question: 'How do I get started with MRECAI?',
      answer: 'Simply book a free consultation through our website or call us at (929) 919-3574. We\'ll discuss your needs, assess your situation, and recommend the best solutions for your business.',
    },
    {
      category: 'General',
      question: 'Do you work with individuals or just businesses?',
      answer: 'We work with both! We serve individuals, families, small businesses, and growing enterprises. Our services are tailored to meet your specific needs whether personal or professional.',
    },
    {
      category: 'General',
      question: 'What makes MRECAI different from other firms?',
      answer: 'We\'re an integrated partner offering finance, tax, insurance, technology, and growth services—all working together. Instead of managing multiple vendors, you get one team, one strategy, and one partner you can trust.',
    },

    // Bookkeeping & Accounting
    {
      category: 'Bookkeeping & Accounting',
      question: 'How much does bookkeeping cost?',
      answer: 'It depends on transaction volume, complexity, and whether you need cleanup. Most small businesses range from $300-$800/month for ongoing bookkeeping. We\'ll give you a clear scope after a quick review.',
    },
    {
      category: 'Bookkeeping & Accounting',
      question: 'Do you do catch-up and cleanup bookkeeping?',
      answer: 'Yes. Cleanup and stabilization is one of the most common starting points. We\'ll assess scope, stabilize the system, then keep it clean going forward.',
    },
    {
      category: 'Bookkeeping & Accounting',
      question: 'What accounting software do you support?',
      answer: 'We work with QuickBooks Online, QuickBooks Desktop, Xero, and other major platforms. If your current setup is holding you back, we\'ll recommend improvements.',
    },
    {
      category: 'Bookkeeping & Accounting',
      question: 'Can you work with my existing CPA or tax preparer?',
      answer: 'Absolutely. We coordinate with your existing tax professional to ensure seamless year-end reporting and tax preparation. Clean books make tax season easier for everyone.',
    },

    // Tax Services
    {
      category: 'Tax Services',
      question: 'What documents do I need for tax preparation?',
      answer: 'We provide a customized checklist based on your situation. Typically: W-2s, 1099s, receipts for deductions, prior year returns, and any relevant financial statements. We make it easy to gather what\'s needed.',
    },
    {
      category: 'Tax Services',
      question: 'Can you file tax extensions?',
      answer: 'Yes. If you need more time, we can file an extension and work with you to complete your return by the extended deadline.',
    },
    {
      category: 'Tax Services',
      question: 'What is tax strategy vs. tax preparation?',
      answer: 'Tax preparation is filing what happened last year. Tax strategy is planning what happens this year and beyond—entity structure, timing, deductions, and long-term savings.',
    },
    {
      category: 'Tax Services',
      question: 'How much can I save with tax strategy?',
      answer: 'It depends on your income, entity type, and operations. Many clients save $5,000–$50,000+ annually through strategic planning, entity optimization, and proactive deductions.',
    },
    {
      category: 'Tax Services',
      question: 'Do I need an LLC or S-Corp?',
      answer: 'It depends on your income, expenses, and goals. We analyze your situation and recommend the structure that minimizes taxes while fitting your operations.',
    },

    // Insurance
    {
      category: 'Insurance',
      question: 'What types of insurance do you offer?',
      answer: 'We offer comprehensive insurance solutions including General Liability, Professional Liability (E&O), Cyber Liability, Commercial Property, Workers Compensation, and specialized coverage for your industry through our partnership with Grober Imbey.',
    },
    {
      category: 'Insurance',
      question: 'Does my General Liability policy cover AI mistakes?',
      answer: 'Probably not. Most standard General Liability policies were written before generative AI existed and may contain exclusions for "software errors" or "algorithmic decision making." You likely need Tech E&O coverage.',
    },
    {
      category: 'Insurance',
      question: 'What is Cyber Liability insurance?',
      answer: 'Cyber Liability insurance covers costs associated with data breaches, ransomware attacks, and cyber incidents including legal fees, client notification, credit monitoring, and business interruption.',
    },
    {
      category: 'Insurance',
      question: 'Do you work with high-net-worth individuals?',
      answer: 'Yes. Through our partnership with Grober Imbey, we provide private client services including umbrella policies, high-value property protection, and estate protection strategies.',
    },

    // AI & Technology
    {
      category: 'AI & Technology',
      question: 'Is custom AI consulting too expensive for a small business?',
      answer: 'Not anymore. In 2026, the cost of technology has dropped significantly. Most tools we implement cost less than a standard software subscription. The real cost is the labor hours you\'re currently wasting on manual work.',
    },
    {
      category: 'AI & Technology',
      question: 'Will automating tasks replace my employees?',
      answer: 'AI replaces tasks, not people. It handles robotic work (copy-pasting, sorting, calculating) so your human team can focus on high-value work like client strategy, relationship building, and creative problem solving.',
    },
    {
      category: 'AI & Technology',
      question: 'How do I know my data is safe with AI tools?',
      answer: 'Security is our foundation. Unlike generic tech agencies, we view everything through an insurance and risk-management lens. We use enterprise-grade wrappers for AI tools to ensure your data is never used to train public models.',
    },
    {
      category: 'AI & Technology',
      question: 'Is AI automation right for every business?',
      answer: 'No. If lead volume is less than 10 per month, manual follow-up is often superior. We\'ll honestly assess whether automation makes sense for your specific situation.',
    },

    // Business Consulting
    {
      category: 'Business Consulting',
      question: 'What does business consulting include?',
      answer: 'Our business consulting covers strategic planning, operations optimization, financial analysis, growth strategies, process improvement, and organizational development. We help you build systems that scale.',
    },
    {
      category: 'Business Consulting',
      question: 'How long does a typical consulting engagement last?',
      answer: 'It varies by project. Some engagements are 1-2 months for specific projects, while others are ongoing partnerships. We\'ll outline a clear timeline during your consultation.',
    },

    // Pricing & Payment
    {
      category: 'Pricing & Payment',
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer free initial consultations to understand your needs and recommend the best solutions. There\'s no obligation or pressure—just practical guidance.',
    },
    {
      category: 'Pricing & Payment',
      question: 'What are your payment terms?',
      answer: 'Payment terms vary by service. Some services are monthly retainers, others are project-based, and some are hourly. We\'ll provide clear pricing and terms before starting any work.',
    },
    {
      category: 'Pricing & Payment',
      question: 'Do you require long-term contracts?',
      answer: 'Not necessarily. While some services work best with ongoing relationships, we offer flexible arrangements. We earn your business every month through results, not contracts.',
    },

    // Process & Timeline
    {
      category: 'Process & Timeline',
      question: 'How fast is onboarding?',
      answer: 'Typically 1-2 weeks for initial setup, depending on the service. For bookkeeping cleanup, it may take longer. We prioritize getting you set up correctly and efficiently.',
    },
    {
      category: 'Process & Timeline',
      question: 'What happens after I book a consultation?',
      answer: 'We\'ll schedule a call or meeting to discuss your needs, assess your situation, and provide recommendations. If we\'re a good fit, we\'ll outline next steps, pricing, and timeline. No pressure—just clarity.',
    },
    {
      category: 'Process & Timeline',
      question: 'How do you communicate with clients?',
      answer: 'We use email, phone, video calls, and project management tools based on your preference. We believe in clear, consistent communication and quick response times.',
    },

    // Location & Availability
    {
      category: 'Location & Availability',
      question: 'Where are you located?',
      answer: 'We\'re based at 11 W Mill Dr, Great Neck, NY 11021 but serve clients nationwide through virtual consultations and services.',
    },
    {
      category: 'Location & Availability',
      question: 'What if I don\'t live in New York?',
      answer: 'MRECAI serves families and businesses in all 50 states. While we are headquartered in New York, you do not need to be located in New York to work with us.',
    },
    {
      category: 'Location & Availability',
      question: 'Do you work with clients outside of New York?',
      answer: 'Yes! We serve clients across the United States. Many of our services can be delivered remotely, and we\'re licensed to provide services in multiple states.',
    },
    {
      category: 'Location & Availability',
      question: 'What are your business hours?',
      answer: 'Our standard hours are Monday-Friday, 9 AM - 6 PM EST. However, we offer flexible scheduling for consultations and can accommodate urgent needs outside regular hours.',
    },
  ];

  const categories = [
    'all',
    'General',
    'Bookkeeping & Accounting',
    'Tax Services',
    'Insurance',
    'AI & Technology',
    'Business Consulting',
    'Pricing & Payment',
    'Process & Timeline',
    'Location & Availability',
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchTerm === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions | FAQ | MRECAI"
        description="Find answers to common questions about our services, pricing, process, and more. Get the information you need about business consulting, tax services, insurance, and AI technology."
        canonical="/faq"
        keywords="FAQ, frequently asked questions, business consulting questions, tax services FAQ, insurance questions, AI consulting FAQ"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            faqSchema(faqs.map(f => ({ question: f.question, answer: f.answer }))),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'FAQ', url: '/faq' },
            ]),
          ],
        }}
      />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container-custom py-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600 transition-colors flex items-center">
                <FaHome className="mr-1" />
                Home
              </Link>
              <FaChevronRight className="mx-2 text-gray-400" />
              <span className="text-navy-900 font-semibold">FAQ</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                  backgroundSize: '50px 50px',
                }}
              ></div>
            </div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold">
                  <FaQuestionCircle className="mr-2" />
                  Get Your Questions Answered
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our services, pricing, and process
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="section-padding bg-white pt-12">
          <div className="container-custom max-w-5xl">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none text-lg transition-colors"
                />
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Questions' : category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing <span className="font-bold text-primary-600">{filteredFAQs.length}</span> question
                {filteredFAQs.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-all overflow-hidden shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-bold text-navy-900">{faq.question}</h3>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {openIndex === index ? (
                        <FaChevronUp className="text-primary-600 text-xl" />
                      ) : (
                        <FaChevronDown className="text-gray-400 text-xl" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <FaQuestionCircle className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No questions found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're here to help! Book a free consultation or give us a call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="tel:929-702-2818"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  Call: (929) 919-3574
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;


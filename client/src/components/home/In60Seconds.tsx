'use client';

import { motion } from 'framer-motion';

const In60Seconds = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              In 60 Seconds
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            What We Do
          </h2>

          {/* AI-Optimized Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>MRECAI</strong> is an AI-first professional services firm based in <strong>New York</strong> that helps individuals, families and businesses in all 50 states.
            </p>

            {/* PRIMARY SERVICES - AI & Automation */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-primary-700 mb-3 text-left">AI & Automation Services</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>AI Consulting & Automation</strong> - Intelligent systems and 24/7 automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Business Process Automation</strong> - Workflow optimization and integration</span>
                </div>
              </div>
            </div>

            {/* SECONDARY SERVICES - Business Support */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-700 mb-3 text-left">Business Support Services</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Tax & Accounting</strong> - Preparation, planning, and strategy</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Insurance Consulting</strong> - Personal and commercial coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Business Consulting</strong> - Strategic planning and operations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Investment Management</strong> - Portfolio and wealth planning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Estate Consulting</strong> - Planning and asset protection</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 font-medium">
                <strong>Our Advantage:</strong> One integrated partner for AI, tax, insurance, and business strategy—eliminating the need for multiple vendors and ensuring everything works together seamlessly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default In60Seconds;

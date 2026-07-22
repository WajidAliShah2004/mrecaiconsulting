'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

interface IntegratedPartnerBannerProps {
  context?: 'tax' | 'insurance' | 'technology' | 'business' | 'general';
}

const IntegratedPartnerBanner = ({ context = 'general' }: IntegratedPartnerBannerProps) => {
  const contextMessages = {
    tax: {
      title: 'More Than Just Tax Services',
      description: 'Your tax strategy works better when it\'s integrated with your insurance, technology, and business operations. That\'s the MRE advantage.',
      benefits: [
        'Tax strategy aligned with your insurance coverage',
        'Bookkeeping integrated with business automation',
        'One team managing your complete financial picture',
      ],
    },
    insurance: {
      title: 'Insurance That Works With Your Business',
      description: 'Your insurance needs change as your business grows. We coordinate your coverage with your tax strategy, technology, and financial planning.',
      benefits: [
        'Coverage aligned with your business structure',
        'Risk management integrated with tax planning',
        'One partner for insurance, tax, and technology',
      ],
    },
    technology: {
      title: 'Technology That Connects Everything',
      description: 'Our automation solutions integrate with your accounting, tax, and business operations—creating systems that actually work together.',
      benefits: [
        'Automation that connects to your bookkeeping',
        'Technology aligned with your business goals',
        'One team managing tech, tax, and operations',
      ],
    },
    business: {
      title: 'Business Consulting With Full Integration',
      description: 'We don\'t just give advice—we implement it across your tax, insurance, technology, and operations. Everything works together.',
      benefits: [
        'Strategy that spans tax, insurance, and tech',
        'Implementation across all business functions',
        'One partner for your complete business needs',
      ],
    },
    general: {
      title: 'The Integrated Partner Advantage',
      description: 'Unlike working with multiple vendors, we coordinate your tax, insurance, technology, and business strategy—all working together.',
      benefits: [
        'One team managing all your business services',
        'Strategies that work across tax, insurance, and tech',
        'No more coordinating between multiple vendors',
      ],
    },
  };

  const message = contextMessages[context];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-16"
    >
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-10 border-2 border-primary-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="text-2xl text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                {message.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {message.description}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {message.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-primary-200">
            <p className="text-center text-gray-700 mb-4">
              <strong className="text-navy-900">One team. One strategy. One partner you can trust.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all border-2 border-primary-200 hover:border-primary-400"
              >
                View All Services
              </Link>
              <Link
                href="/book-now"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntegratedPartnerBanner;

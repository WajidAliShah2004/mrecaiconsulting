'use client';

import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaCalculator, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface TechPillar {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  link: string;
}

const pillars: TechPillar[] = [
  {
    icon: FaFileInvoiceDollar,
    title: 'Tax Services',
    description: 'Proactive tax planning and precise preparation that reduce your effective tax rate and keep more of what you earn.',
    features: ['Strategic Tax Planning', 'Tax Preparation', 'R&D Credits & Cost Segregation', 'Multi-State Compliance'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    link: '/services/tax-services'
  },
  {
    icon: FaShieldAlt,
    title: 'Insurance & Risk Architecture',
    description: 'Comprehensive risk management across personal and commercial coverage, identifying gaps before they become losses.',
    features: ['Strategic Risk Audits', 'Commercial Liability', 'Personal Lines', 'Cyber Coverage'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    link: '/services/risk-architecture'
  },
  {
    icon: FaCalculator,
    title: 'Bookkeeping & Accounting',
    description: 'Full-cycle accounting operations that professionalize your financial reporting and keep you compliant.',
    features: ['Daily Bookkeeping', 'Financial Reporting', 'Bank Reconciliation', 'Month-End Close'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    link: '/services/bookkeeping-accounting'
  },
];

const TechnologyAdvantage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            The MRECAI Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrated tax, insurance, and finance consulting—working together under one roof
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="text-3xl text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm font-medium text-gray-700">
                      <FaCheckCircle className="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={pillar.link}
                  className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700 group-hover:gap-3 transition-all"
                >
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            <strong>The MRECAI Difference:</strong> One integrated partner for tax, insurance, and accounting
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyAdvantage;

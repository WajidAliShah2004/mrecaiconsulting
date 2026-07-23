'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalculator, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const pillars = [
  {
    icon: FaCalculator,
    title: 'Tax Strategy & Accounting',
    description: 'Proactive tax planning, precise preparation, and full-cycle bookkeeping that keep more of what you earn.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: FaShieldAlt,
    title: 'Insurance & Risk Architecture',
    description: 'Comprehensive risk management across personal and commercial coverage, identifying gaps before they become losses.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: FaChartLine,
    title: 'Investment & Wealth Planning',
    description: 'Holistic wealth management delivered through strategic partners with CFP® and CFA credentials.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: FaBriefcase,
    title: 'Business Management Consulting',
    description: 'Financial and operational guidance that turns growing businesses into scalable, professional organizations.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const FourPillars = () => {
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
            Our 4-Pillar Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax, insurance, and finance consulting solutions to protect and scale your business
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
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
            <strong>The MRECAI Difference:</strong> One integrated partner for tax, insurance, and wealth strategy
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FourPillars;

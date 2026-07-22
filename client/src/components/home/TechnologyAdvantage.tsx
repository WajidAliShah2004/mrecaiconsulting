'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBullhorn, FaChartLine, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
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
    icon: FaRobot,
    title: 'AI Consulting & Automation',
    description: 'Deploy intelligent AI systems and automation workflows that work 24/7 to scale your business without adding headcount.',
    features: ['AI Chatbots & Agents', 'Process Automation', 'Machine Learning Solutions'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    link: '/services/ai-driven-growth'
  },
  {
    icon: FaCode,
    title: 'Custom Software Development',
    description: 'Build powerful web applications, mobile apps, and custom software solutions tailored to your unique business needs.',
    features: ['Web Applications', 'Mobile Apps', 'Website Development', 'API Integration'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    link: '/services/technology'
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing & Design',
    description: 'Data-driven marketing strategies, stunning graphic design, professional video editing, and brand development that converts.',
    features: ['SEO & Digital Marketing', 'Graphic Design', 'Video Production', 'Brand Development'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    link: '/services/digital-marketing'
  },
  {
    icon: FaChartLine,
    title: 'Business Support Services',
    description: 'Strategic tax planning, comprehensive insurance, bookkeeping, and financial consulting to support your growth.',
    features: ['Tax & Accounting', 'Insurance Consulting', 'Business Consulting', 'Investment Management'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    link: '/services'
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
            Our 4-Pillar Technology Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions to transform, automate, and scale your business
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
            <strong>The MRE Difference:</strong> Full-stack technology partner with business expertise
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyAdvantage;

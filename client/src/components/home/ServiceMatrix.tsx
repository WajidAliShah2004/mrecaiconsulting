'use client';

import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaBriefcase, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const matrixItems = [
    {
        title: 'Tax Services',
        description: 'Strategic tax planning and precise preparation that reduce your effective tax rate and keep you compliant and audit-ready.',
        icon: FaFileInvoiceDollar,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100',
        features: ['Strategic Tax Planning', 'Tax Preparation', 'R&D Credits & Cost Segregation'],
        link: '/services/tax-services'
    },
    {
        title: 'Insurance & Risk',
        description: 'Comprehensive risk architecture across personal and commercial coverage, identifying gaps before they become losses.',
        icon: FaShieldAlt,
        color: 'text-pink-600',
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-100',
        features: ['Risk Audits', 'Commercial Coverage', 'Personal Lines'],
        link: '/services/risk-architecture'
    },
    {
        title: 'Finance Consulting',
        description: 'Financial and operational advisory that turns growing businesses into scalable, professional organizations.',
        icon: FaBriefcase,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-100',
        features: ['Cash Flow Strategy', 'Operational Systems', 'Fractional COO Services'],
        link: '/services/business-consulting'
    }
];

const ServiceMatrix = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                        The MRECAI <span className="gradient-text">Service Stack</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Three powerful service pillars that transform your business operations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {matrixItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl bg-white border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all group overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${item.bgColor} rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50`}></div>

                            <div className="relative z-10">
                                <div className={`w-14 h-14 ${item.bgColor} ${item.color} rounded-xl flex items-center justify-center mb-6 text-2xl`}>
                                    <item.icon />
                                </div>

                                <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {item.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-sm font-medium text-gray-700">
                                            <FaCheckCircle className={`${item.color} mr-2 flex-shrink-0`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={item.link}
                                    className={`inline-flex items-center font-bold ${item.color} group-hover:gap-3 transition-all`}
                                >
                                    Explore Component <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceMatrix;

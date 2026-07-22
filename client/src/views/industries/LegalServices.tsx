'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGavel, FaCheckCircle, FaUserShield, FaBalanceScale, FaFileSignature, FaSearchDollar, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
    {
        question: 'How do you handle IOLTA and Trust Accounting compliance?',
        answer: 'We implement specialized accounting workflows that ensure every penny of client trust funds (IOLTA) is tracked with surgical precision, keeping you 100% compliant with state bar ethics rules.',
    },
    {
        question: 'Can you help with law firm partner compensation structures?',
        answer: 'Yes. We design and manage complex partner draw systems, equity splits, and performance-based bonus structures that align with the long-term growth of the firm.',
    },
    {
        question: 'How can AI modernize my law practice?',
        answer: 'We deploy intelligent lead intake AI that pre-screens potential clients, handles initial appointment scheduling, and automates follow-ups, ensuring your attorneys spend time only on high-value billable work.',
    },
    {
        question: 'What is the "Legal Professional Liability" review?',
        answer: 'It is a specialized audit of your malpractice (Legal Malpractice/LPL), cyber risk, and management liability to ensure your firm is protected from the unique risks of the legal profession.',
    },
    {
        question: 'Do you offer fractional CFO services for law firms?',
        answer: 'Yes. We provide the financial leadership needed to manage firm overhead, optimize billable hour realization rates, and plan for strategic partner exits or firm acquisition.',
    },
];

const LegalServices = () => {
    return (
        <>
            <SEO
                title="Accounting & Strategy for Law Firms | Legal Services | MRECAI"
                description="Specialized back-office and tax management for law firms. Trust accounting compliance, partner compensation, and AI lead intake for legal practices."
                canonical="/industries/legal-services"
                keywords="law firm accounting, legal practice consulting, IOLTA compliance NYC, partner compensation strategy, law firm AI automation, legal professional liability"
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
                            <Link href="/industries" className="text-primary-300 hover:text-primary-200">Industries</Link>
                            <span className="mx-2 text-gray-400">/</span>
                            <span className="text-gray-300">Legal & Specialized Services</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Law Firms: Scale Your <span className="gradient-text">Practice</span> While Ensuring Absolute Compliance
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                Legal practices face unique risks, from IOLTA compliance to partner liability. We provide the <strong>specialized back-office</strong>—integrating finance, insurance, and AI intake—that allows your partners to focus on the law.
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

            {/* Value Matrix */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Legal Operational Intelligence
                        </h2>
                        <p className="text-lg text-gray-600">
                            Precise financial management and modern automation designed for the legal profession.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaBalanceScale,
                                title: 'Trust Accounting & IOLTA',
                                description: 'End-to-end management of client trust accounts to ensure flawless compliance with state bar ethics and reporting rules.',
                            },
                            {
                                icon: FaSearchDollar,
                                title: 'Billable Hour Realization',
                                description: 'Analyzing your firm\'s billing realization and collection rates to identify leaks and improve partner distributions.',
                            },
                            {
                                icon: FaFileSignature,
                                title: 'Intelligent Intake AI',
                                description: 'Automated lead intake and pre-screening AI to ensure your attorneys only speak with qualified, high-value potential clients.',
                            },
                            {
                                icon: FaUserShield,
                                title: 'Legal Malpractice Review',
                                description: 'Strategic architecture of your LPL, Cyber, and Umbrella coverage to protect the firm and its partners\' personal net worth.',
                            },
                            {
                                icon: FaGavel,
                                title: 'Partner Compensation',
                                description: 'Designing and managing partner draw structures, performance-based splits, and firm-wide financial strategy.',
                            },
                            {
                                icon: FaCheckCircle,
                                title: 'Law Firm Tax Strategy',
                                description: 'Maximizing deductions for partner health plans, retirement structures, and multi-state nexus optimization.',
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

            {/* Process Flow */}
            <ProcessFlow />

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Legal Practice FAQs
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
                        "Your firm commands authority. Your back-office should too."
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
                        <Link href="/industries" className="text-primary-400 hover:text-primary-300 inline-flex items-center font-semibold">
                            View All Industries <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LegalServices;

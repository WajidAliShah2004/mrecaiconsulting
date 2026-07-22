'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHardHat, FaCheckCircle, FaCalculator, FaShieldAlt, FaChartLine, FaCogs, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
    {
        question: 'How do you help contractors with job costing?',
        answer: 'We implement systems that track labor, materials, and overhead at the project level, allowing you to see real-time profitability for every contract and identify "profit leaks" before they impact your cash flow.',
    },
    {
        question: 'Can you assist with AIA billing and progress payments?',
        answer: 'Yes. We specialize in construction accounting workflows, including G702/G703 forms, ensuring your billing is professional, accurate, and submitted on time to maintain steady cash flow.',
    },
    {
        question: 'Do you provide support for Workers Comp audits?',
        answer: 'Absolutely. We manage your certificates of insurance (COIs), track subcontractor compliance, and organize your payroll data to ensure your annual audits are seamless and error-free.',
    },
    {
        question: 'How can AI help my home services business?',
        answer: 'We deploy AI agents that handle missed calls via text-back, reactivate old quotes that didn\'t close, and automate appointment scheduling, ensuring you never lose a lead while your crews are in the field.',
    },
    {
        question: 'What is the "Contractor Gap Analysis"?',
        answer: 'It is a specialized audit of your current insurance, tax, and operational stack to find where you are overpaying for coverage or missing tax deductions specific to the construction industry.',
    },
];

const Contractors = () => {
    return (
        <>
            <SEO
                title="Accounting & Strategy for Contractors | Home Services | MRECAI"
                description="Specialized financial and tech solutions for HVAC, plumbing, and general contractors. Job costing, AIA billing, and AI lead reactivation for home services."
                canonical="/industries/contractors"
                keywords="contractor accounting, construction tax strategy, HVAC business consulting, plumbing business growth, AIA billing NYC, contractor insurance audit"
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
                            <span className="text-gray-300">Contractors & Home Services</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Contractors: Build Your Business on a <span className="gradient-text">Profit-First Foundation</span>
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                In the trades, your profit is won or lost in the field. We provide the <strong>operational intelligence</strong>—from job costing to AI missed-call recovery—that ensures your hard work turns into measurable wealth.
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
                            Engineered for the Trades
                        </h2>
                        <p className="text-lg text-gray-600">
                            We bridge the gap between your bookkeeping, your insurance audits, and your sales engine.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaCalculator,
                                title: 'Mobile-First Bookkeeping',
                                description: 'Real-time expense tracking and job costing that works whether you\'re in the truck or at the office.',
                            },
                            {
                                icon: FaShieldAlt,
                                title: 'GL & Workers Comp Optimization',
                                description: 'Proactive management of payroll classes and certificates to lower audit exposure and premiums.',
                            },
                            {
                                icon: FaCogs,
                                title: 'AI Lead Recovery',
                                description: 'Automated "Missed-Call Text Back" systems to catch every emergency lead while your technicians are busy.',
                            },
                            {
                                icon: FaChartLine,
                                title: 'AIA Billing & Liens',
                                description: 'Professional management of progress billing and lien waivers to ensure you get paid faster on larger projects.',
                            },
                            {
                                icon: FaHardHat,
                                title: 'Equity & Exit Strategy',
                                description: 'Preparing your service business for high-value acquisition or generational legacy through process-driven value.',
                            },
                            {
                                icon: FaCheckCircle,
                                title: 'Proactive Tax Strategy',
                                description: 'Maximizing deductions for heavy equipment, home offices, and industry-specific business credits.',
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
                            Home Services & Contractor FAQs
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
                        "Stop leaving money on the job site."
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

export default Contractors;

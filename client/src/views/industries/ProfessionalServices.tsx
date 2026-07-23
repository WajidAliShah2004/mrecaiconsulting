'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUserFriends, FaCheckCircle, FaUserTie, FaChartLine, FaRocket, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
    {
        question: 'How do you help agencies and consultants scale?',
        answer: 'We focus on "High-Margin Scalability." This means auditing your project utilization, optimizing your partner compensation, and streamlining your back-office so you can focus on high-value client delivery.',
    },
    {
        question: 'Can you provide fractional COO or strategy services?',
        answer: 'Yes. For firms that have outgrown their current operations but aren\'t ready for a full-time hire, we provide fractional strategy to professionalize your systems, KPIs, and leadership structure.',
    },
    {
        question: 'What tax strategies are best for service-based firms?',
        answer: 'We emphasize entity optimization (S-Corp elections), R&D tax credits for proprietary methodology development, and strategic executive compensation plans to minimize corporate and personal tax.',
    },
    {
        question: 'How do you improve project profitability for agencies?',
        answer: 'We build project-level P&L tracking, standardized scoping and pricing frameworks, and utilization dashboards so you know exactly which engagements make money—and which quietly erode your margins.',
    },
    {
        question: 'How do you protect the leadership team of a professional firm?',
        answer: 'We architect a multi-layered defense including Professional Liability (E&O), Directors & Officers (D&O) insurance, and strategic asset protection for the firm\'s partners.',
    },
];

const ProfessionalServices = () => {
    return (
        <>
            <SEO
                title="Accounting & Strategy for Agencies & Consultants | MRECAI"
                description="High-margin scalability for professional service firms. Fractional COO strategy, strategic tax planning, and profitable operations for agencies."
                canonical="/industries/professional-services"
                keywords="agency accounting, consulting firm strategy, fractional COO NYC, S-Corp election for consultants, agency project profitability, professional liability review"
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
                            <span className="text-gray-300">Professional Services & Consultants</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Professional Services: Scale Your <span className="gradient-text">Expertise</span>, Not Your Overhead
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                As a service-based firm, your product is your people\'s time. We provide the <strong>high-margin strategy</strong>—from fractional COO services to project profitability systems—that ensures your firm is both scalable and profitable.
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
                            Professional Scalability
                        </h2>
                        <p className="text-lg text-gray-600">
                            Sophisticated management for the modern agency, consultancy, and boutique service firm.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaUserTie,
                                title: 'Fractional COO & Strategy',
                                description: 'Operational leadership to professionalize your systems, track KPIs, and manage profitable firm-wide growth.',
                            },
                            {
                                icon: FaChartLine,
                                title: 'Utilization & Margin Tracking',
                                description: 'Real-time analysis of project profitability to ensure your team\'s time is being spent on high-impact work.',
                            },
                            {
                                icon: FaRocket,
                                title: 'Project Profitability Systems',
                                description: 'Standardized scoping, pricing, and reporting frameworks that keep every engagement profitable from kickoff to final invoice.',
                            },
                            {
                                icon: FaShieldAlt,
                                title: 'Executive Liability',
                                description: 'Comprehensive E&O and D&O insurance to protect the firm\'s leadership from management and delivery risks.',
                            },
                            {
                                icon: FaUserFriends,
                                title: 'Partner Compensation',
                                description: 'Strategic advisory on structuring partner distributions, equity splits, and performance-based bonuses.',
                            },
                            {
                                icon: FaCheckCircle,
                                title: 'High-Impact Tax Strategy',
                                description: 'Advanced entity optimization and multi-year planning to minimize both corporate and partner-level tax.',
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
                            Professional Service FAQs
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
                        "Your firm sells expertise. Don't let your operations be an amateur hour."
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

export default ProfessionalServices;

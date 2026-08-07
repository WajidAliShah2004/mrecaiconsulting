'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStethoscope, FaCheckCircle, FaUserShield, FaChartBar, FaFileMedical, FaLaptopMedical, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
    {
        question: 'How do you handle medical billing integration?',
        answer: 'We don\'t replace your billing team; we provide the financial oversight and revenue cycle analysis that ensures your billing data correctly reflects in your practice\'s clinical profitability.',
    },
    {
        question: 'Does my practice need cyber liability coverage?',
        answer: 'Almost certainly. Practices hold Protected Health Information (PHI), making them prime targets for breaches. We review your cyber liability coverage alongside HIPAA obligations to ensure a data incident never threatens the practice.',
    },
    {
        question: 'Can you help with R&D tax credits for medical practices?',
        answer: 'Many practitioners don\'t realize that developing new procedures, techniques, or treatment protocols qualifies for significant federal and state credits. We conduct specialized R&D studies for the medical field.',
    },
    {
        question: 'How does MRECAI handle practice insurance audits?',
        answer: 'We conduct a comprehensive audit of your malpractice, cyber liability, and overhead insurance to ensure you have the maximum protection with no overlapping, redundant premiums.',
    },
    {
        question: 'Do you offer fractional CFO services for growing practices?',
        answer: 'Yes. We provide the high-level financial strategy needed to manage group practice expansion, equipment acquisition, and partner compensation structures.',
    },
];

const MedicalPractices = () => {
    return (
        <>
            <SEO
                title="Accounting & Strategy for Medical Practices | Healthcare | MRECAI"
                description="Specialized financial solutions for private medical practices. Malpractice coverage reviews, revenue cycle management, and practice growth strategy."
                canonical="/industries/medical-practices"
                keywords="medical practice accounting, healthcare consulting, doctors tax strategy, malpractice insurance review, private practice growth NYC, medical billing audit"
            />

            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
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
                            <span className="text-gray-300">Medical & Healthcare Practices</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Medical Practices: Focus on <span className="gradient-text">Patient Outcomes</span>, Not Operational Friction
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                We bridge the gap between clinical excellence and fiscal health. From <strong>malpractice and cyber coverage reviews</strong> to advanced revenue cycle management, we protect your practice so you can focus on care.
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
                            Medical Practice Excellence
                        </h2>
                        <p className="text-lg text-gray-600">
                            Comprehensive operational intelligence designed for the modern healthcare provider.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaFileMedical,
                                title: 'Revenue Cycle Oversight',
                                description: 'Financial analysis of your billing cycle to identify aging accounts, denial trends, and collection bottlenecks.',
                            },
                            {
                                icon: FaLaptopMedical,
                                title: 'HIPAA & Compliance Advisory',
                                description: 'Guidance on privacy obligations, documentation, and vendor compliance so your practice stays audit-ready without slowing patient care.',
                            },
                            {
                                icon: FaUserShield,
                                title: 'Healthcare Risk Audit',
                                description: 'Expert review of malpractice, cyber liability, and ERISA compliance to protect your medical license and assets.',
                            },
                            {
                                icon: FaChartBar,
                                title: 'Practice Growth Strategy',
                                description: 'Full-service consulting for adding practitioners, equipment acquisition financing, and multi-location expansion.',
                            },
                            {
                                icon: FaStethoscope,
                                title: 'CFO-Level Reporting',
                                description: 'Monthly dashboards tracking clinical KPIs, provider productivity, and net collections against market benchmarks.',
                            },
                            {
                                icon: FaCheckCircle,
                                title: 'Proactive MD Tax Strategy',
                                description: 'Maximizing deductions for specialized equipment, continuing education, and healthcare-specific business credits.',
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
                            Healthcare Practice FAQs
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
                        "Your clinical care is world-class. Your operations should match."
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

export default MedicalPractices;

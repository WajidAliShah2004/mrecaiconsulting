'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaCheckCircle, FaBuilding, FaChartLine, FaLandmark, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
    {
        question: 'What is a Cost Segregation study and do I need one?',
        answer: 'It is an engineering-based analysis that allows you to accelerate depreciation on certain components of your real estate, significantly reducing taxable income in the early years of ownership. If you own commercial property or residential rentals over $500k, it is likely a high-ROI Move.',
    },
    {
        question: 'How do you help with 1031 exchanges?',
        answer: 'We provide the financial coordination and tax strategy needed to successfully execute a like-kind exchange, ensuring you meet strict IRS deadlines and reinvest your capital gains tax-free.',
    },
    {
        question: 'Can you set up property-specific accounting?',
        answer: 'Yes. We build accounting systems that track P&L and cash flow at the individual property level, giving you the granular data needed to make informed "buy, hold, or sell" decisions.',
    },
    {
        question: 'How does MRECAI protect my real estate assets?',
        answer: 'We coordinate with your legal team to ensure your properties are held in the correct entity structures (LLCs/Trusts) and that your insurance stack (DP3, GL, Umbrella) is architected to protect your total net worth.',
    },
    {
        question: 'What is "Passive Activity Loss" optimization?',
        answer: 'We strategize around the Real Estate Professional Status (REPS) and other tax code exceptions to help you use real estate losses to offset other active income where legally permissible.',
    },
];

const RealEstate = () => {
    return (
        <>
            <SEO
                title="Accounting & Tax Strategy for Real Estate Investors | MRECAI"
                description="Advanced tax engineering for real estate investors and developers. Cost segregation, 1031 exchanges, and property-level financial management."
                canonical="/industries/real-estate"
                keywords="real estate accounting, investor tax strategy, cost segregation NYC, 1031 exchange consulting, property management accounting, real estate asset protection"
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
                            <span className="text-gray-300">Real Estate Investors</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Real Estate: Build Your Portfolio on <span className="gradient-text">Tax-Efficient Ground</span>
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                Real estate is the ultimate wealth-building tool, but only if managed with surgical precision. We provide the <strong>advanced tax engineering</strong>—from cost seg to asset protection—that turns equity into cash flow.
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
                            Real Estate Intelligence
                        </h2>
                        <p className="text-lg text-gray-600">
                            Sophisticated strategies for the high-volume developer and the long-term buy-and-hold investor.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaLandmark,
                                title: 'Cost Segregation Studies',
                                description: 'Engineering-based studies to accelerate depreciation, generating massive immediate tax savings and cash flow.',
                            },
                            {
                                icon: FaChartLine,
                                title: '1031 Exchange Strategy',
                                description: 'Strategic coordination of tax-deferred exchanges to help you trade up and grow your portfolio without tax leakage.',
                            },
                            {
                                icon: FaBuilding,
                                title: 'Entity Level Accounting',
                                description: 'Clean, professional bookkeeping at the property and fund level to satisfy lenders and equity partners.',
                            },
                            {
                                icon: FaShieldAlt,
                                title: 'Asset Protection Design',
                                description: 'Collaborating with legal counsel to architect a multi-state entity stack that shields your portfolio from liability.',
                            },
                            {
                                icon: FaHome,
                                title: 'Investment Analysis',
                                description: 'Advanced pro-forma modeling and due diligence support for potential acquisitions and developments.',
                            },
                            {
                                icon: FaCheckCircle,
                                title: 'REPS Status Strategy',
                                description: 'Consulting on Real Estate Professional Status to unlock the ability to offset active income with passive losses.',
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
                            Real Estate Strategy FAQs
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
                        "Your real estate wealth is built on the taxes you don't pay."
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

export default RealEstate;

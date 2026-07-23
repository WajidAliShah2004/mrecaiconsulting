'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaCheckCircle, FaBoxOpen, FaGlobeAmericas, FaChartPie, FaStore, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
    {
        question: 'How do you handle multi-channel inventory accounting?',
        answer: 'We integrate with tools like Shopify, Amazon, and Walmart to sync your COGS (Cost of Goods Sold) and inventory levels, ensuring your financial statements reflect true gross margins across every platform.',
    },
    {
        question: 'Can you assist with Sales Tax Nexus management?',
        answer: 'Yes. We monitor your economic nexus across all 50 states and manage your registrations and filings to ensure you are registered, collecting, and remitting correctly to avoid massive state penalties.',
    },
    {
        question: 'What insurance coverage does my eCommerce business need?',
        answer: 'We review your exposure across product liability, cargo and inventory-in-transit, and cyber risk, then architect coverage that protects your margins without paying for policies you don\'t need.',
    },
    {
        question: 'What is "Margin-Based Marketing ROI"?',
        answer: 'Most agencies track ROAS. We track POAS (Profit on Ad Spend) by pulling in your real-time cloud accounting data to see which ads are driving actual net profit, not just top-line revenue.',
    },
    {
        question: 'Do you help with working capital and inventory financing?',
        answer: 'Yes. We provide the historical financial data and projections needed to secure low-interest working capital to fund your inventory cycles and holiday ramps.',
    },
];

const Ecommerce = () => {
    return (
        <>
            <SEO
                title="Accounting & Strategy for Retail & eCommerce | MRECAI"
                description="Data-driven infrastructure for modern retailers. Inventory-based tax strategy, multi-channel nexus management, and product liability coverage for eCommerce."
                canonical="/industries/ecommerce"
                keywords="eCommerce accounting, Shopify tax strategy, Amazon FBA consulting, sales tax nexus management, inventory COGS tracking, retail profit optimization"
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
                            <span className="text-gray-300">Retail & eCommerce</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            eCommerce: Data-Driven <span className="gradient-text">Profit Systems</span> for Modern Retail
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                In eCommerce, scale is only valuable if your margins survive the growth. We provide the <strong>financial infrastructure</strong>—from multi-channel COGS tracking to product liability coverage—that ensures your bottom line keeps up with your Shopify dashboard.
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
                            eCommerce Operational Intelligence
                        </h2>
                        <p className="text-lg text-gray-600">
                            Connecting your inventory, your tax liability, and your risk coverage into a single engine.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaBoxOpen,
                                title: 'Inventory-Based Tax Strategy',
                                description: 'Advanced COGS management and inventory valuation methods to optimize your cash flow and tax liability.',
                            },
                            {
                                icon: FaGlobeAmericas,
                                title: 'Sales Tax Nexus Management',
                                description: 'Proactive monitoring and managed filing for every state where your sales require registration and compliance.',
                            },
                            {
                                icon: FaChartPie,
                                title: 'Net Profit Dashboards',
                                description: 'Real-time visibility into your actual net profit after ad spend, shipping, platform fees, and inventory costs.',
                            },
                            {
                                icon: FaStore,
                                title: 'Multi-Channel Integration',
                                description: 'Direct syncing between Shopify, Amazon, and your accounting platform to eliminate manual data entry errors.',
                            },
                            {
                                icon: FaShieldAlt,
                                title: 'Product Liability & Cargo Coverage',
                                description: 'Coverage architecture for product liability, inventory in transit, and cyber exposure that protects every order you ship.',
                            },
                            {
                                icon: FaCheckCircle,
                                title: 'Working Capital Strategy',
                                description: 'Advisory on selecting and securing the best inventory financing and growth capital for your specific cycle.',
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
                            Retail & eCommerce FAQs
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
                        "Your revenue is impressive. Let\'s make your profit unavoidable."
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

export default Ecommerce;

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot, FaCheckCircle, FaRocket, FaClock, FaTools, FaDatabase, FaChartLine, FaArrowRight, FaCalendarAlt, FaShieldAlt, FaBolt, FaUsers, FaPhone } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar, ProcessFlow } from '../../components/common';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { COMPANY_INFO } from '../../utils/constants';

const faqs = [
    {
        question: 'How can AI Automation transform my business operations?',
        answer: 'Speed is everything. AI Automation solves the "latency problem" by deploying 24/7 AI agents that engage leads instantly via SMS, email, and webchat—qualifying inquiries and booking appointments while you sleep.',
    },
    {
        question: 'What is a Missed-Call Text Back system?',
        answer: 'An automation that detects missed calls and instantly sends a personalized SMS: "Hi, this is [Name] from [Business]. I\'m with a client but saw you called. How can I help?" This recovers up to 60% of lost opportunities.',
    },
    {
        question: 'How does 24/7 Lead Reactivation work?',
        answer: 'We take your "dead leads"—prospects who haven\'t purchased in 6+ months—and launch AI-driven reactivation campaigns via SMS. The AI handles conversations and only alerts you when a sale is ready to close.',
    },
    {
        question: 'Will AI replace my current staff?',
        answer: 'No. AI replaces tasks, not people. By automating repetitive work and lead follow-up, your team focuses on high-value strategy and client relationships that drive growth.',
    },
    {
        question: 'Is AI too expensive for a small business?',
        answer: 'Many powerful AI tools cost less than $50/month. The real cost is wasted labor hours and lost revenue from delayed responses. Our implementations typically see ROI within 90 days.',
    },
];

const AIDrivenGrowth = () => {
    return (
        <>
            <SEO
                title="AI Consulting & Automation Services | 24/7 Intelligent Systems"
                description="Transform your business with AI consulting, custom chatbots, automation workflows, and intelligent systems. Deploy AI agents that work 24/7 to capture leads and scale operations. Free AI audit available."
                canonical="/services/ai-driven-growth"
                keywords="AI consulting services, AI automation, custom AI chatbots, business automation, AI agents, machine learning consulting, AI implementation NYC"
                schema={{
                    '@context': 'https://schema.org',
                    '@graph': [
                        serviceSchemas.aiTechnology,
                        faqSchema(faqs),
                    ],
                }}
            />

            {/* Hero Section - Redesigned */}
            <section className="relative pt-40 md:pt-44 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
                {/* Animated Background */}
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            AI & Automation Consulting: <span className="text-primary-400">Intelligence That Never Sleeps</span>
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                Scale your revenue without scaling your headcount. We deploy intelligent systems—from <strong>AI sales agents</strong> to <strong>automated CRM workflows</strong>—that eliminate latency and capture every opportunity.
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
            <div className="bg-navy-900 border-t border-white/5">
                <TrustBar />
            </div>

            {/* Problem/Solution Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-4">
                                The 5-Minute Problem
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                                Leads Not Contacted Within 5 Minutes Are 90% Less Likely to Convert
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                In the modern economy, speed is the primary currency. Our AI solutions solve this "latency problem" by responding instantly—even while you sleep.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border border-primary-100 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Through our partnership with <strong className="text-primary-600">NovaEdge Solutions</strong>, we implement enterprise-grade automation for the SMB market.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Together, we deliver <strong>intelligent systems</strong> that work 24/7 to capture leads, qualify prospects, and book appointments—all while you focus on closing deals.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service Spotlights */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
                            The "Never-Miss" Ecosystem
                        </h2>

                        <div className="space-y-8" id="features">
                            {[
                                {
                                    icon: FaClock,
                                    title: 'Missed-Call Text Back',
                                    description: 'Protect against lost opportunities with instant SMS responses to missed calls.',
                                    color: 'blue',
                                    bgColor: 'bg-blue-100',
                                    iconColor: 'text-blue-600',
                                    features: [
                                        'Instant personalized SMS when you miss a call',
                                        'Recovers up to 60% of lost opportunities',
                                        'Customizable message templates',
                                        'Seamless integration with your phone system'
                                    ]
                                },
                                {
                                    icon: FaRocket,
                                    title: '24/7 Lead Reactivation',
                                    description: 'Automatically re-engage cold leads with AI-driven SMS campaigns.',
                                    color: 'purple',
                                    bgColor: 'bg-purple-100',
                                    iconColor: 'text-purple-600',
                                    features: [
                                        'AI handles qualifying conversations automatically',
                                        'Reactivates leads that haven\'t purchased in 6+ months',
                                        'Only alerts you when a sale is ready to close',
                                        'Continuous learning from interactions'
                                    ]
                                },
                                {
                                    icon: FaDatabase,
                                    title: 'Unified CRM Architecture',
                                    description: 'Build a "God\'s Eye View" of your pipeline with complete automation.',
                                    color: 'navy',
                                    bgColor: 'bg-navy-100',
                                    iconColor: 'text-navy-600',
                                    features: [
                                        'Centralized data from all sources',
                                        'Automated intake to onboarding workflows',
                                        'Real-time reporting and analytics',
                                        'Review request automation'
                                    ]
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                                >
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className={`flex-shrink-0 w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                                            <service.icon className={`text-3xl ${service.iconColor}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy-900 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 ml-20">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-700">
                                                <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <FaChartLine className="text-6xl text-primary-600 mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                                The MRE Hybrid Model in Action
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                How we combined AI automation with tax strategy to transform a construction firm
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
                            <h3 className="text-2xl font-bold text-navy-900 mb-4">The Challenge</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A local construction firm was struggling with inconsistent cash flow and high bid-request drop-off. They had the leads, but didn't have the bandwidth to follow up instantly.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <FaTools className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-900 mb-1">Step 1: Technology Implementation</h4>
                                        <p className="text-gray-700">Deployed an AI SMS bot to handle incoming bid requests instantly, re-engaging 100% of missed calls.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                                        <FaShieldAlt className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-900 mb-1">Step 2: Tax Strategy Funding</h4>
                                        <p className="text-gray-700">Performed a Cost Segregation study on their new warehouse, freeing up $40,000 in Year 1 cash flow.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 shadow-xl text-white">
                            <h3 className="text-2xl font-bold mb-6">The Results</h3>
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">+30%</div>
                                    <div className="text-sm opacity-90">Bid Conversion Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">$40K</div>
                                    <div className="text-sm opacity-90">Tax Savings (Year 1)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">90 Days</div>
                                    <div className="text-sm opacity-90">Time to ROI</div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                <p className="font-semibold mb-2">💡 The Key Insight:</p>
                                <p>The tax study literally paid for the entire AI automation implementation. This is the power of the MRE Hybrid Model.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Common Questions About AI Implementation
                        </h2>
                        <p className="text-xl text-gray-700">Everything you need to know to get started</p>
                    </motion.div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                            >
                                <h3 className="text-lg font-bold text-navy-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-lg text-gray-700 mb-6 font-medium">
                            Still have questions? Let's talk about your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-now"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:scale-105"
                            >
                                Book Your Free AI Audit
                            </Link>
                            <a
                                href={`tel:${COMPANY_INFO.phone}`}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 border-2 border-navy-900 rounded-xl hover:bg-navy-900 hover:text-white transition-all"
                            >
                                <FaPhone className="mr-2" />
                                {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Flow */}
            <ProcessFlow />

            {/* Final CTA Section */}
            <section className="py-24 bg-navy-900 text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Experience the MRE Hybrid Advantage
                            </h2>
                            <p className="text-xl text-gray-100 mb-12 leading-relaxed">
                                Don't just automate. Architect a business that is protected by insurance, optimized for taxes, and powered by AI.
                            </p>

                            {/* Service Links */}
                            <div className="grid sm:grid-cols-3 gap-4 mb-12">
                                {[
                                    { label: 'Strategic Tax Planning', url: '/services/strategic-tax-planning', icon: FaChartLine },
                                    { label: 'Risk Architecture', url: '/services/risk-architecture', icon: FaShieldAlt },
                                    { label: 'Business Consulting', url: '/services/business-consulting', icon: FaUsers }
                                ].map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        className="flex items-center justify-center px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                                    >
                                        <link.icon className="mr-2 text-primary-400 group-hover:scale-110 transition-transform" />
                                        <span className="font-bold text-sm">{link.label}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Primary CTA */}
                            <Link
                                href="/start-here"
                                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-navy-900 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl hover:from-primary-500 hover:to-primary-600 transition-all duration-300 hover:scale-105 shadow-2xl"
                            >
                                🎯 Start Your AI Journey
                                <FaArrowRight className="ml-3" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AIDrivenGrowth;

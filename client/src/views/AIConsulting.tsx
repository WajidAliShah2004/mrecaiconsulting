'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot, FaBrain, FaCogs, FaChartLine, FaShieldAlt, FaRocket, FaArrowRight, FaCheckCircle, FaLightbulb, FaUsers } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { serviceSchemas, faqSchema } from '../utils/schemas';

const faqs = [
    {
        question: 'How do you identify AI opportunities in my business?',
        answer: 'We conduct an "AI Readiness Audit," mapping your manual friction points—like lead follow-up, document processing, and scheduling—to specific automation solutions with the highest ROI.',
    },
    {
        question: 'What is a 24/7 AI Sales Agent?',
        answer: 'It is a custom-trained LLM that lives on your website or SMS channel, qualifies leads in real-time, answers complex service questions, and books appointments directly to your calendar while you sleep.',
    },
    {
        question: 'Do I need to be a large enterprise to use AI?',
        answer: 'No. AI is the great equalizer. Small businesses can now deploy the same level of operational intelligence as Fortune 500 firms at a fraction of the cost, often seeing ROI in less than 90 days.',
    },
    {
        question: 'How do you handle data privacy with AI implementations?',
        answer: 'Data security is our top priority. We use secure, private API connections and enterprise-grade infrastructure to ensure your sensitive business and client data never enters the public training pool.',
    },
];

const AIConsulting = () => {
    return (
        <>
            <SEO
                title="AI & Automation Consulting | Intelligent Business Systems | MRECAI"
                description="Transform your business with AI lead generation, automated follow-ups, and intelligent CRM systems. 24/7 sales agents and missed-call text back solutions."
                canonical="/ai-consulting"
                keywords="AI consulting, business automation, AI lead generation, 24/7 sales agents, missed-call text back, CRM automation, AI readiness audit"
                schema={{
                    '@context': 'https://schema.org',
                    '@graph': [
                        serviceSchemas.aiTechnology,
                        faqSchema(faqs),
                    ],
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-40 md:pt-44 pb-24 bg-gradient-to-br from-navy-900 via-primary-900 to-navy-900 text-white overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-navy-900/40"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-navy-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full border border-primary-400/30 mb-6">
                                <span className="text-primary-300 font-semibold text-sm">🤖 AI-Powered Business Growth</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Intelligence That <span className="text-primary-400">Never Sleeps</span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Scale your revenue without scaling your headcount. Deploy intelligent systems that work 24/7 to capture leads, qualify prospects, and close deals.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="/book-now"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                                >
                                    Book Free Strategy Call
                                    <FaArrowRight className="ml-2" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
                                >
                                    Get a Quick Quote
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <FaCheckCircle className="text-primary-400" />
                                    <span className="text-gray-300">90-Day ROI</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCheckCircle className="text-primary-400" />
                                    <span className="text-gray-300">SOC2 Compliant</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCheckCircle className="text-primary-400" />
                                    <span className="text-gray-300">180+ Clients</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                                                <FaBrain className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">AI Sales Agent</div>
                                                <div className="text-gray-300 text-sm">24/7 Lead Qualification</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                                <FaChartLine className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">Smart Automation</div>
                                                <div className="text-gray-300 text-sm">Eliminate Manual Tasks</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                                <FaRocket className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">Rapid Deployment</div>
                                                <div className="text-gray-300 text-sm">Live in 30-60 Days</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '180+', label: 'Clients Served' },
                            { value: '90 Days', label: 'Avg. ROI Timeline' },
                            { value: '24/7', label: 'AI Availability' },
                            { value: '98%', label: 'Success Rate' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Callout */}
            <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
                            <FaUsers className="text-primary-600" />
                            <span className="text-primary-700 font-semibold text-sm">Strategic Partnership</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                            Powered by NovaEdge Solutions
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Through our partnership with <strong className="text-primary-600">NovaEdge Solutions</strong>, we deliver enterprise-grade AI automation for the SMB market—intelligent systems that capture leads, qualify prospects, and book appointments while you focus on closing deals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                                AI Solutions That Drive Results
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From lead generation to customer service, we deploy intelligent systems that work around the clock
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: FaBrain,
                                title: 'AI Sales Agents',
                                description: 'Custom-trained models that engage leads, answer questions, and book appointments via Web, SMS, and Email—24/7.',
                                gradient: 'from-blue-500 to-blue-600',
                                bgColor: 'bg-blue-50',
                                iconBg: 'bg-blue-100',
                                iconColor: 'text-blue-600'
                            },
                            {
                                icon: FaRobot,
                                title: 'Missed-Call Text Back',
                                description: 'Instantly recover lost opportunities with automated SMS sequences when you can\'t reach the phone.',
                                gradient: 'from-purple-500 to-purple-600',
                                bgColor: 'bg-purple-50',
                                iconBg: 'bg-purple-100',
                                iconColor: 'text-purple-600'
                            },
                            {
                                icon: FaLightbulb,
                                title: 'Lead Reactivation',
                                description: 'AI-powered outreach to "dead" leads that uncovers hidden revenue without manual effort.',
                                gradient: 'from-green-500 to-green-600',
                                bgColor: 'bg-green-50',
                                iconBg: 'bg-green-100',
                                iconColor: 'text-green-600'
                            },
                            {
                                icon: FaCogs,
                                title: 'CRM Automation',
                                description: 'Consolidated systems that automatically track, score, and move leads through your pipeline.',
                                gradient: 'from-orange-500 to-orange-600',
                                bgColor: 'bg-orange-50',
                                iconBg: 'bg-orange-100',
                                iconColor: 'text-orange-600'
                            },
                            {
                                icon: FaShieldAlt,
                                title: 'AI Governance',
                                description: 'Secure, compliant implementations that protect your sensitive business and client data.',
                                gradient: 'from-red-500 to-red-600',
                                bgColor: 'bg-red-50',
                                iconBg: 'bg-red-100',
                                iconColor: 'text-red-600'
                            },
                            {
                                icon: FaRocket,
                                title: 'Digital Transformation',
                                description: 'Comprehensive roadmap for modernizing every department with AI-native workflows.',
                                gradient: 'from-navy-500 to-navy-600',
                                bgColor: 'bg-navy-50',
                                iconBg: 'bg-navy-100',
                                iconColor: 'text-navy-600'
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                    <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`text-3xl ${service.iconColor}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            How We Deploy AI in Your Business
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A proven 4-step process to transform your operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Discovery',
                                description: 'AI Readiness Audit to identify high-ROI automation opportunities'
                            },
                            {
                                step: '02',
                                title: 'Design',
                                description: 'Custom AI strategy tailored to your business processes'
                            },
                            {
                                step: '03',
                                title: 'Deploy',
                                description: 'Implementation and integration with your existing systems'
                            },
                            {
                                step: '04',
                                title: 'Optimize',
                                description: 'Continuous monitoring and improvement for maximum ROI'
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 h-full">
                                    <div className="text-5xl font-bold text-primary-200 mb-4">{step.step}</div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <FaArrowRight className="text-primary-300 text-2xl" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Common Questions
                        </h2>
                        <p className="text-xl text-gray-600">Everything you need to know about AI implementation</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-navy-900 mb-3 flex items-start gap-3">
                                    <span className="text-primary-500 flex-shrink-0">Q:</span>
                                    <span>{faq.question}</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-navy-900 via-primary-900 to-navy-900 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-navy-900/40"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Scale with AI?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            The best time to automate was yesterday. The second best time is now.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-now"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                            >
                                Book Free Strategy Call
                                <FaArrowRight className="ml-2" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                            >
                                Get a Quick Quote
                            </Link>
                        </div>
                        <div className="mt-8">
                            <Link href="/services" className="text-primary-300 hover:text-primary-200 inline-flex items-center font-semibold transition-colors">
                                View All Services <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AIConsulting;

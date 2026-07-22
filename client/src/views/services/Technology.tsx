'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLaptopCode, FaCheckCircle, FaProjectDiagram, FaCloud, FaCogs, FaUsersCog, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { serviceSchemas, faqSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';

const faqs = [
    {
        question: 'How do you differentiate your technology services from a standard dev agency?',
        answer: 'Most agencies focus on aesthetics. We focus on business logic. We build systems that integrate with your financial, compliance, and operational workflows, ensuring your tech drives actual ROI.',
    },
    {
        question: 'Do you provide maintenance and support after launch?',
        answer: 'Yes. We offer managed technology services to ensure your systems remain secure, updated, and optimized as your business scales.',
    },
    {
        question: 'Can you help with CRM and ERP implementation?',
        answer: 'Absolutely. We specialize in selecting and deploying the right CRM/ERP stacks that connect your sales, finance, and operations into a single source of truth.',
    },
    {
        question: 'What is your stack for custom web development?',
        answer: 'We use modern, high-performance stacks like React, Next.js, and Node.js, combined with robust cloud infrastructure (AWS/Azure/Supabase) to ensure speed and scalability.',
    },
    {
        question: 'How does technology consulting link to AI-Driven growth?',
        answer: 'Technology is the infrastructure; AI is the intelligence. We first stabilize your tech foundation so that AI automations can run reliably and effectively across your business.',
    },
];

const Technology = () => {
    return (
        <>
            <SEO
                title="Technology & Systems Development | Custom Software & Infrastructure | MRECAI"
                description="High-performance technology solutions that support business operations—not just branding. Custom web development, cloud integration, and systems architecture."
                canonical="/services/technology"
                keywords="technology consulting, custom web development, systems architecture, CRM implementation, cloud integration, business technology solutions NYC"
                schema={{
                    '@context': 'https://schema.org',
                    '@graph': [
                        serviceSchemas.aiTechnology,
                        faqSchema(faqs),
                    ],
                }}
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
                            <Link href="/services" className="text-primary-300 hover:text-primary-200">Services</Link>
                            <span className="mx-2 text-gray-400">/</span>
                            <span className="text-gray-300">Technology Services</span>
                        </nav>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Technology That Supports the Business—Not Just the Branding
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                            <p className="text-xl text-gray-200 leading-relaxed">
                                We build <strong>high-performance digital infrastructure</strong>. From custom web applications to enterprise CRM systems, our technology solutions are designed to automate friction and accelerate operational speed.
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

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Our Technology Stack & Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We bridge the gap between strategic business objectives and technical execution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaLaptopCode,
                                title: 'Custom Web Applications',
                                description: 'Scalable, high-conversion web platforms built with React, Next.js, and modern backends.',
                            },
                            {
                                icon: FaProjectDiagram,
                                title: 'Systems Architecture',
                                description: 'Designing the data flows and integration layers that connect your office, finance, and marketing tools.',
                            },
                            {
                                icon: FaCloud,
                                title: 'Cloud Infrastructure',
                                description: 'Secure, reliable cloud deployment and management using AWS, Azure, and modern serverless technologies.',
                            },
                            {
                                icon: FaCogs,
                                title: 'CRM & ERP Implementation',
                                description: 'Customizing and deploying GoHighLevel, HubSpot, or Salesforce to act as your business Operating System.',
                            },
                            {
                                icon: FaUsersCog,
                                title: 'Operation Modernization',
                                description: 'Replacing legacy spreadsheets and manual processes with streamlined, digital-first workflows.',
                            },
                            {
                                icon: FaCheckCircle,
                                title: 'Technical Consultation',
                                description: 'Independent audits of your current tech stack to identify vulnerabilities, inefficiencies, and ROI opportunities.',
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

            {/* Process Section */}
            <ProcessFlow />

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Technology Deep Dive
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
                        "Stop fighting your tools and start leveraging them."
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
                        <Link href="/services" className="text-primary-400 hover:text-primary-300 inline-flex items-center font-semibold">
                            Explore All Services <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technology;

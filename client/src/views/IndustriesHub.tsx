'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { INDUSTRIES, COMPANY_INFO } from '../utils/constants';

// Deterministic particle layout (was Math.random() per render, which made the
// prerendered HTML differ from the client and broke hydration). Same visual
// ranges as before: scattered positions, ±10px drift, 3–5s duration, 0–2s delay.
const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    left: (i * 53 + 17) % 100,
    top: (i * 37 + 29) % 100,
    driftX: ((i * 23) % 20) - 10,
    duration: 3 + ((i * 7) % 20) / 10,
    delay: ((i * 13) % 20) / 10,
}));

const IndustriesHub = () => {
    return (
        <>
            <SEO
                title="Industry-Specific Solutions | Specialized Expertise | MRECAI"
                description="We provide tailored financial, risk, and technology solutions for Contractors, Medical Practices, Real Estate, and more. One firm, multiple vertical strategies."
                canonical="/industries"
                keywords="industry solutions, contractor accounting, medical practice consulting, real estate tax strategy, professional services advisory"
            />

            {/* Hero Section - Modern Particle Design */}
            <section className="relative pt-40 md:pt-44 pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
                {/* Animated Mesh Gradient Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-navy-900 to-navy-900"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent"></div>
                    
                    {/* Animated Grid Pattern */}
                    <motion.div 
                        className="absolute inset-0 opacity-20"
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear'
                        }}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 168, 232, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 168, 232, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />

                    {/* Floating Particles */}
                    {PARTICLES.map((p, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary-400 rounded-full"
                            style={{
                                left: `${p.left}%`,
                                top: `${p.top}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, p.driftX, 0],
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                delay: p.delay,
                                ease: 'easeInOut'
                            }}
                        />
                    ))}

                    {/* Glowing Orbs */}
                    <motion.div 
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                    <motion.div 
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full filter blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 2
                        }}
                    />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full border border-primary-400/30 mb-6">
                            <span className="text-primary-300 font-semibold text-sm">🎯 Industry-Specific Expertise</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Vertical Intelligence: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                                Expertise Built for Your Industry
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                            We don't believe in one-size-fits-all. Our hybrid financial and technology model is engineered specifically for the unique workflows and risks of high-growth industries.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                                Explore Solutions
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary-400" />
                                <span className="text-gray-300">50+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary-400" />
                                <span className="text-gray-300">6 Industries Served</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary-400" />
                                <span className="text-gray-300">180+ Clients</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Universal Coverage Section */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6"
                        >
                            <span className="text-primary-700 font-semibold text-sm">🌐 Universal Coverage</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
                        >
                            We Work With Every Industry
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            We work with clients across every industry. No matter what sector you operate in, our integrated services apply. While we highlight specific industries below, our expertise in finance, risk management, and technology serves businesses of all types and sizes.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar - Enhanced with Magnetic Effect */}
            <section className="py-12 bg-white border-b border-gray-200 relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-50 via-white to-primary-50"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    style={{ backgroundSize: '200% 100%' }}
                />
                
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '6', label: 'Specialized Industries' },
                            { value: '50+', label: 'Years Combined Experience' },
                            { value: '500+', label: 'Businesses Served' },
                            { value: '98%', label: 'Client Satisfaction' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className="text-center cursor-default"
                            >
                                <motion.div 
                                    className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                                    animate={{
                                        textShadow: [
                                            '0 0 0px rgba(0, 168, 232, 0)',
                                            '0 0 10px rgba(0, 168, 232, 0.3)',
                                            '0 0 0px rgba(0, 168, 232, 0)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: index * 0.3
                                    }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                                Industries We Serve
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Deep expertise in the sectors that drive the economy
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {INDUSTRIES.map((industry, index) => (
                            <motion.div
                                key={industry.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-primary-300 overflow-hidden"
                            >
                                {/* Gradient Top Border */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>

                                <div className="p-8 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <industry.icon className="text-3xl text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                                        {industry.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    {/* Pain Points */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                                <span className="text-red-600 text-xs">⚠</span>
                                            </div>
                                            <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider">Challenges</h4>
                                        </div>
                                        <div className="space-y-2">
                                            {industry.painPoints.slice(0, 3).map((pain, pIndex) => (
                                                <div key={pIndex} className="flex items-start text-sm text-gray-700">
                                                    <span className="text-red-400 mr-2 mt-0.5">•</span>
                                                    <span>{pain}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Solutions */}
                                    <div className="mb-6 flex-grow">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                <FaCheckCircle className="text-green-600 text-xs" />
                                            </div>
                                            <h4 className="text-sm font-bold text-green-600 uppercase tracking-wider">Solutions</h4>
                                        </div>
                                        <div className="space-y-2">
                                            {industry.solutions.slice(0, 3).map((solution, sIndex) => (
                                                <div key={sIndex} className="flex items-start text-sm text-gray-700">
                                                    <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5 text-xs" />
                                                    <span>{solution}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={industry.link}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all group-hover:shadow-lg mt-auto"
                                    >
                                        Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
                                <span className="text-primary-700 font-semibold text-sm">🏆 The MRECAI Advantage</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                                One Partner. <br />
                                <span className="text-primary-600">Total Operational Intelligence.</span>
                            </h2>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Most firms force you to act as the "integrator" between your CPA, your insurance agent, and your IT guy. We eliminate that friction with a unified approach.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: 'Integrated Finance & Tax', desc: 'Seamless compliance and strategic planning' },
                                    { title: 'Risk & Insurance Management', desc: 'Comprehensive protection strategies' },
                                    { title: 'Bookkeeping & Accounting', desc: 'Clean books and real-time financial reporting' },
                                    { title: 'Legacy Heritage', desc: '50+ years of combined experience' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-200 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <div className="font-bold text-navy-900 mb-1">{item.title}</div>
                                            <div className="text-sm text-gray-600">{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-navy-600/20 blur-3xl rounded-full"></div>
                            
                            <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 text-white shadow-2xl border border-white/10">
                                <div className="flex items-center gap-2 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-xl" />
                                    ))}
                                </div>

                                <blockquote className="text-xl md:text-2xl italic font-serif mb-8 leading-relaxed">
                                    "By understanding the specific nuances of our industry, MRECAI didn't just fix our taxes—they streamlined our entire operational engine."
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        M
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg">CEO, Multi-State Contractor</p>
                                        <p className="text-primary-300 text-sm">$450k recovered in R&D Credits</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
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
                            Ready to Transform Your Industry?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Your industry has problems. We have the data and expertise to solve them.
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
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default IndustriesHub;

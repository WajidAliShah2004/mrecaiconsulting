'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaAward, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import founderImage from '../../../images/Matthew-Founder-1.png';
import ctoImage from '../../../images/WajidCto.png';
import cmoImage from '../../../images/JessieGwilt.jpeg';

const ExecutiveLeadership = () => {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-primary-600 font-bold text-sm uppercase tracking-widest bg-primary-50 px-4 py-2 rounded-full">
                            Foundational Leadership
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                        Meet Our <span className="gradient-text">People</span>
                    </h2>
                </motion.div>

                {/* CTO Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            <span className="gradient-text">Wajid Ali Shah</span>
                        </h3>
                        <p className="text-xl text-purple-600 font-semibold mb-6">Chief Technology Officer</p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            "Great tools should empower businesses, not complicate them. We build the operational backbone that works seamlessly behind the scenes."
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            With 15 years of systems and engineering experience, Wajid Ali Shah serves as the CTO of MRECAI and CEO of NovaEdge Solutions. He oversees the firm's internal tools, secure client platforms, and reporting infrastructure—keeping the operations behind our consulting, tax, and insurance work running reliably at scale.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Throughout his career, Wajid has built and managed operational infrastructure across diverse industries, from startups to established enterprises. He specializes in turning complex back-office challenges into streamlined, dependable systems that support measurable results and operational excellence.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                'CTO of MRECAI',
                                'CEO of NovaEdge Solutions',
                                '15 years of systems engineering experience',
                                'Oversees the firm\'s internal tools and client platforms',
                                'Specializes in streamlined, dependable operations',
                                'Ensures secure, reliable infrastructure behind every engagement'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://www.upwork.com/agencies/1913615184399103598/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-purple-900 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-400/20"
                            >
                                NovaEdge Solutions
                            </a>
                        </div>
                    </motion.div>

                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-purple-900 to-purple-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <FaAward className="text-9xl" />
                            </div>

                            <div className="flex items-center space-x-6 mb-8">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl">
                                    <img 
                                        src={ctoImage.src} 
                                        alt="Wajid Ali Shah - Chief Technology Officer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold">Wajid Ali Shah</h4>
                                    <p className="text-purple-400 font-bold uppercase tracking-widest text-sm">Chief Technology Officer</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-purple-400 font-black text-2xl mb-1">CTO</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">MRECAI</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-purple-400 font-black text-2xl mb-1">CEO</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">NovaEdge Solutions</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 italic text-gray-300">
                                "Great client service depends on great systems—our job is to make the back office invisible so advisors can focus on clients."
                            </div>
                        </div>

                        {/* Decorative Orbs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>

                {/* CEO Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative lg:order-1"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <FaAward className="text-9xl" />
                            </div>

                            <div className="flex items-center space-x-6 mb-8">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-xl">
                                    <img 
                                        src={founderImage.src} 
                                        alt="Matthew R. Epstein - President & Founder"
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: '50% 15%' }}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold">Matthew R. Epstein</h4>
                                    <p className="text-primary-400 font-bold uppercase tracking-widest text-sm">President & Founder</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-primary-400 font-black text-2xl mb-1">2009</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Began Industry Journey</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-primary-400 font-black text-2xl mb-1">180+</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Clients Advised</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 italic text-gray-300">
                                "We don't just sell services; we architect the infrastructure that supports your life's work. Our goal is clarity in chaos."
                            </div>
                        </div>

                        {/* Decorative Orbs */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:order-2"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            <span className="gradient-text">Matthew R. Epstein</span>
                        </h3>
                        <p className="text-xl text-primary-600 font-semibold mb-6">President & Founder</p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            "My mission is to eliminate the 'vendor fatigue' that slows down modern businesses. We combine high-level strategy with boots-on-the-ground implementation."
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                'Founder of MRECAI',
                                'Expert in integrated risk and financial architecture',
                                'Trusted strategist in small business tax and protection planning',
                                'Advisor to 180+ clients across NY and beyond'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/about/founder"
                                className="inline-flex items-center px-8 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-400/20"
                            >
                                Founder's Story
                            </Link>
                            <a
                                href="https://linkedin.com/in/matthewepstein"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 border-2 border-navy-900 text-navy-900 font-bold rounded-xl hover:bg-navy-900 hover:text-white transition-all"
                            >
                                <FaLinkedin className="mr-2" /> LinkedIn Profile
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* CMO Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            <span className="gradient-text">Jessie Gwilt</span>
                        </h3>
                        <p className="text-xl text-pink-600 font-semibold mb-6">Chief Marketing Officer</p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            "Building brands that meaningfully enhance lives—combining big-picture strategy with authentic human connection."
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            A Los Angeles native who has proudly called New York City home for nearly a decade, Jessie holds degrees in Advertising and Political Science from Syracuse University. She has built a dynamic career in Advertising & Marketing spanning more than ten years, leading high-impact initiatives across CPG, pharma-adjacent brands, B2B organizations, and nonprofits—delivering thoughtful strategy, strong execution, and measurable results.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Throughout her career, Jessie has successfully managed a wide range of initiatives, from supporting established brands with complex stakeholder needs to helping emerging businesses define their voice and scale with intention. She is known for her versatility, steady leadership, and ability to move projects forward with clarity and purpose.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Outside of work, Jessie is a self-proclaimed "crazy dog mom" to her energetic six-year-old Havanese–Cavalier King Charles mix, who keeps life full of motion, personality, and joy.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                'CMO of MRECAI',
                                'Degrees in Advertising and Political Science from Syracuse University',
                                '10+ years leading high-impact initiatives across CPG, pharma-adjacent, B2B, and nonprofits',
                                'Known for versatility, steady leadership, and clarity in execution',
                                'Passionate about helping brands define their voice and scale with intention'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-pink-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-pink-900 to-rose-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <FaAward className="text-9xl" />
                            </div>

                            <div className="flex items-center space-x-6 mb-8">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-xl">
                                    <img 
                                        src={cmoImage.src} 
                                        alt="Jessie Gwilt - Chief Marketing Officer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold">Jessie Gwilt</h4>
                                    <p className="text-pink-400 font-bold uppercase tracking-widest text-sm">Chief Marketing Officer</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-pink-400 font-black text-2xl mb-1">10+</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Years Experience</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-pink-400 font-black text-2xl mb-1">Multi-M$</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Brands Grown</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 italic text-gray-300">
                                "Building brands that meaningfully enhance lives—combining big-picture strategy with authentic human connection."
                            </div>
                        </div>

                        {/* Decorative Orbs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveLeadership;

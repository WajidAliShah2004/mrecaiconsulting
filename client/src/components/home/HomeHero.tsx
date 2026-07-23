'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

// Pre-sampled "random" orb geometry (was Math.random() per render, which made
// the prerendered HTML differ from the client and broke hydration).
const FLOATING_SHAPES = [
    { width: 363, height: 461, left: 62.6, top: 24.5, driftX: -32, driftY: 18, duration: 13.5 },
    { width: 443, height: 321, left: 17.5, top: 96.4, driftX: 41, driftY: -27, duration: 17.2 },
    { width: 546, height: 244, left: 6.2, top: 94.6, driftX: -15, driftY: 44, duration: 11.8 },
    { width: 327, height: 387, left: 39.0, top: 18.0, driftX: 28, driftY: 35, duration: 18.6 },
    { width: 323, height: 469, left: 33.9, top: 84.0, driftX: -45, driftY: -12, duration: 15.1 },
];

const HomeHero = () => {

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-navy-900 selection:bg-primary-500 selection:text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                {/* Animated Gradient Mesh */}
                <motion.div
                    className="absolute inset-0 opacity-40"
                    animate={{
                        background: [
                            'radial-gradient(circle at 0% 0%, rgba(0, 168, 232, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(30, 58, 95, 0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 100% 0%, rgba(0, 168, 232, 0.15) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(30, 58, 95, 0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 0% 0%, rgba(0, 168, 232, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(30, 58, 95, 0.2) 0%, transparent 50%)',
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 bg-[length:50px_50px]"></div>

                {/* Floating Abstract Shapes — fixed pseudo-random values so the
                    server-rendered HTML matches the client (hydration-safe) */}
                {FLOATING_SHAPES.map((shape, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full blur-3xl opacity-20 ${i % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'
                            }`}
                        style={{
                            width: shape.width,
                            height: shape.height,
                            left: `${shape.left}%`,
                            top: `${shape.top}%`,
                        }}
                        animate={{
                            x: [0, shape.driftX],
                            y: [0, shape.driftY],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full pt-32 sm:pt-36 md:pt-40 lg:pt-40 pb-12 px-4 sm:px-6">
                {/* Text Content */}
                <motion.div
                    className="space-y-6 sm:space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                        <span className="text-primary-200 text-xs sm:text-sm font-medium tracking-wide border-r border-white/10 pr-2 sm:pr-3 mr-2 sm:mr-3">
                            MRECAI
                        </span>
                        <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                            AI & Tech Innovation
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight"
                        >
                            AI-Powered Business <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-primary-400 bg-300% animate-gradient">
                                Transformation
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed font-light"
                        >
                            Transform your business with cutting-edge AI consulting and automation solutions. Plus comprehensive tax, insurance, and business support.
                        </motion.p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/start-here"
                            className="group relative px-8 py-4 bg-white text-navy-900 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="/book-now"
                            className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all transform hover:-translate-y-1 flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <FaPlay className="text-xs pl-0.5" />
                            </div>
                            Book Consultation
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-6 sm:pt-8 border-t border-white/5 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8"
                    >
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white">180+</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Clients</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white">98%</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Success Rate</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                                4.9 <span className="text-yellow-400 text-base">★</span>
                            </p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Rating</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Visual Content (Right Side) */}
                <motion.div
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        {/* Central Element */}
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute inset-0 rounded-full border border-white/10 border-dashed"
                        />

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-12 rounded-full border border-primary-500/20"
                        />

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute top-1/4 -right-4 sm:-right-8 lg:-right-12 p-3 sm:p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-48 sm:w-56 lg:w-64 z-20"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-base sm:text-lg shadow-lg">
                                    🤖
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300">AI Solutions Deployed</p>
                                    <p className="text-lg sm:text-xl font-bold text-white">150+</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="absolute bottom-1/4 -left-4 sm:-left-8 lg:-left-12 p-3 sm:p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-48 sm:w-56 lg:w-64 z-20"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-base sm:text-lg shadow-lg">
                                    ⚡
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300">Efficiency Increase</p>
                                    <p className="text-lg sm:text-xl font-bold text-white">300%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Central Logo Representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-40 h-40 bg-gradient-to-br from-primary-600 to-navy-900 rounded-3xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(0,168,232,0.3)]">
                                <div className="w-32 h-32 bg-navy-900 rounded-2xl flex items-center justify-center border border-white/10">
                                    <span className="text-4xl font-black text-white -rotate-45">MRE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default HomeHero;

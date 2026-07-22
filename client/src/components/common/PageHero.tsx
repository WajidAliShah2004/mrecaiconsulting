'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

interface Breadcrumb {
    label: string;
    path: string;
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: Breadcrumb[];
    highlight?: string;
    backgroundImage?: string;
    className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    breadcrumbs,
    highlight,
    backgroundImage,
    className = ""
}) => {
    return (
        <section className={`relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-navy-900 ${className}`}>
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                {backgroundImage && (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/90 to-navy-900" />

                {/* Animated Shapes */}
                <motion.div
                    className="absolute -top-20 -right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl opacity-50"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl opacity-50"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-[length:30px_30px]" />
            </div>

            <div className="container-custom relative z-10 pt-32 pb-20 text-center">
                {/* Breadcrumbs */}
                {breadcrumbs && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center items-center space-x-2 mb-6 text-sm text-gray-400"
                    >
                        <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <FaChevronRight className="text-[10px] opacity-50" />
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-primary-400 font-medium">{crumb.label}</span>
                                ) : (
                                    <Link href={crumb.path} className="hover:text-primary-400 transition-colors">
                                        {crumb.label}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.nav>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto"
                >
                    {title} {highlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">{highlight}</span>}
                </motion.h1>

                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default PageHero;

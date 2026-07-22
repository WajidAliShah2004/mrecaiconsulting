'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaStar, FaMapMarkerAlt, FaLock } from 'react-icons/fa';

const TrustBar = () => {
    const trustItems = [
        {
            icon: FaMapMarkerAlt,
            alt: "Location",
            label: "New York Based",
            sublabel: "US & Remote"
        },
        {
            icon: FaStar,
            alt: "Rating",
            label: "4.9/5 Rating",
            sublabel: "180+ Clients"
        },
        {
            icon: FaShieldAlt,
            alt: "Security",
            label: "Secure & Private",
            sublabel: "SOC2 Compliant"
        },
        {
            icon: FaLock,
            alt: "Privacy",
            label: "100% Confidential",
            sublabel: "Data Protected"
        }
    ];

    return (
        <div className="w-full bg-navy-800/80 backdrop-blur-md border-y border-white/20 py-4 md:py-6">
            <div className="container-custom">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-2 md:space-x-3 group"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                                <item.icon className="text-primary-400 text-sm md:text-lg" />
                            </div>
                            <div className="text-left min-w-0 flex-1">
                                <div className="text-white font-bold text-xs md:text-sm leading-tight truncate">
                                    {item.label}
                                </div>
                                <div className="text-gray-200 text-[10px] md:text-xs truncate">
                                    {item.sublabel}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;

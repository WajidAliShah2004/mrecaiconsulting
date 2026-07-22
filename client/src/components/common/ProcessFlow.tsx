'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaLightbulb, FaTools, FaChartLine } from 'react-icons/fa';

const ProcessFlow = () => {
    const steps = [
        {
            icon: FaSearch,
            title: "Assess",
            description: "Comprehensive audit of your financial, risk, and technology systems to identify gaps."
        },
        {
            icon: FaLightbulb,
            title: "Plan",
            description: "Custom roadmap featuring quick wins and long-term strategic improvements."
        },
        {
            icon: FaTools,
            title: "Implement",
            description: "Done-for-you setup of the strategies and systems your situation requires."
        },
        {
            icon: FaChartLine,
            title: "Optimize",
            description: "Monthly cadence and quarterly strategy sessions to ensure sustainable growth."
        }
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
                        Our 4-Step <span className="text-primary-600">Growth Process</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        We've eliminated the friction of working with multiple siloed vendors. Here is exactly what happens after you book your strategy call.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
                        >
                            <div className="w-16 h-16 bg-navy-900 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:bg-primary-600 transition-colors shadow-lg">
                                <step.icon />
                            </div>
                            <div className="absolute top-8 right-8 text-6xl font-black text-navy-900 opacity-5">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;

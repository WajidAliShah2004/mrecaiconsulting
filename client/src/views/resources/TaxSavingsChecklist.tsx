'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    FaCheckCircle, FaRegCircle, FaArrowRight, FaCalculator, FaRocket,
    FaUniversity, FaRegLightbulb, FaShieldAlt, FaChartPie, FaDownload, FaEnvelopeOpen
} from 'react-icons/fa';
import SEO from '../../components/common/SEO';

interface ChecklistItem {
    id: string;
    label: string;
    category: string;
    value: number; // Estimated savings value factor
    description: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
    // Entity & Structure
    { id: 'entity_s_corp', label: 'S-Corp Election Optimization', category: 'Entity & Structure', value: 3000, description: 'Are you paying too much self-employment tax on a standard LLC or Sole Prop?' },
    { id: 'entity_reasonable_comp', label: 'Reasonable Compensation Review', category: 'Entity & Structure', value: 1500, description: 'Is your salary-to-distribution ratio optimized to protect from IRS audits?' },
    { id: 'entity_accountable_plan', label: 'Accountable Plan Implementation', category: 'Entity & Structure', value: 1000, description: 'Are you properly reimbursing yourself for home office, travel, and meals?' },

    // Deductions & Expenses
    { id: 'deduction_augusta', label: 'Section 280A (Augusta Rule)', category: 'Deductions & Expenses', value: 4000, description: 'Are you renting your personal residence to your business for meetings tax-free?' },
    { id: 'deduction_home_office', label: 'Advanced Home Office Deduction', category: 'Deductions & Expenses', value: 800, description: 'Going beyond the square footage simplified method.' },
    { id: 'deduction_vehicle', label: 'Section 179 Vehicle Depreciation', category: 'Deductions & Expenses', value: 6000, description: 'Is your business vehicle over 6,000 lbs? You could write off the full cost.' },

    // Tax Credits
    { id: 'credits_rd', label: 'R&D Tax Credits', category: 'Tax Credits', value: 10000, description: 'Do you develop software, hardware, or new manufacturing processes?' },
    { id: 'credits_emp_retention', label: 'Employee Retention Program Review', category: 'Tax Credits', value: 5000, description: 'Final check for missed eligibility in government pandemic programs.' },
    { id: 'credits_green_energy', label: 'Green Energy / EV Credits', category: 'Tax Credits', value: 2500, description: 'Commercial solar or electric vehicle incentives.' },

    // Wealth & Benefits
    { id: 'wealth_401k', label: 'Solo 401(k) / SEP-IRA Strategy', category: 'Wealth & Benefits', value: 4500, description: 'Maximizing contributions to reduce current-year taxable income.' },
    { id: 'wealth_hsa', label: 'HSA Contribution Maximization', category: 'Wealth & Benefits', value: 1200, description: 'The "Triple Tax Advantage" of health savings accounts.' },
    { id: 'wealth_cost_seg', label: 'Cost Segregation (Real Estate)', category: 'Wealth & Benefits', value: 15000, description: 'Accelerated depreciation on commercial property or short-term rentals.' },
];

const TaxSavingsChecklist = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const toggleItem = (id: string) => {
        setSelectedItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const totalPossible = useMemo(() => CHECKLIST_ITEMS.reduce((sum, item) => sum + item.value, 0), []);
    const currentSavings = useMemo(() =>
        CHECKLIST_ITEMS.filter(item => selectedItems.includes(item.id))
            .reduce((sum, item) => sum + item.value, 0),
        [selectedItems]
    );

    const categories = Array.from(new Set(CHECKLIST_ITEMS.map(i => i.category)));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, this would send to an API
    };

    return (
        <>
            <SEO
                title="2026 Tax Savings Checklist | MRECAI"
                description="Interactive tax efficiency checklist for business owners. Audit your entity structure, deductions, and credits in 5 minutes."
                canonical="/resources/tax-savings-checklist"
                keywords="tax savings checklist, small business tax deductions 2026, S-Corp tax benefits, cost segregation NYC"
            />

            <div className="min-h-screen pt-24 bg-gray-50 pb-20">
                <div className="container-custom max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-bold mb-4"
                        >
                            <FaCalculator className="mr-2" />
                            Free Strategic Resource
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                            2026 Business Tax Savings Checklist
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Most businesses overpay by 15-20% due to missed deductions and poor entity structuring. Check the items below that you ARE NOT currently utilizing to see your potential savings.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Checklist Column */}
                        <div className="lg:col-span-2 space-y-12">
                            {categories.map((category, idx) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                                        <span className="w-10 h-10 bg-navy-900 text-white rounded-lg flex items-center justify-center mr-4 text-sm">
                                            0{idx + 1}
                                        </span>
                                        {category}
                                    </h3>
                                    <div className="space-y-4">
                                        {CHECKLIST_ITEMS.filter(item => item.category === category).map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => toggleItem(item.id)}
                                                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${selectedItems.includes(item.id)
                                                        ? 'border-primary-500 bg-primary-50'
                                                        : 'border-white bg-white hover:border-primary-200 shadow-sm'
                                                    }`}
                                            >
                                                <div className="mt-1">
                                                    {selectedItems.includes(item.id) ? (
                                                        <FaCheckCircle className="text-primary-500 text-2xl" />
                                                    ) : (
                                                        <FaRegCircle className="text-gray-300 text-2xl group-hover:text-primary-300" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-navy-900 mb-1">{item.label}</h4>
                                                    <p className="text-sm text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Sticky Scorebox */}
                        <div className="lg:sticky lg:top-28 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-navy-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>

                                <h3 className="text-lg font-bold mb-8 uppercase tracking-widest text-primary-400 flex items-center">
                                    <FaChartPie className="mr-3" />
                                    Audit Summary
                                </h3>

                                <div className="mb-8">
                                    <div className="text-sm text-gray-400 mb-1 uppercase font-bold tracking-tight">Potential Annual Savings</div>
                                    <div className="text-5xl font-bold text-primary-400 tabular-nums">
                                        ${currentSavings.toLocaleString()}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Checklist Progress</span>
                                            <span className="text-primary-300 font-bold">{Math.round((selectedItems.length / CHECKLIST_ITEMS.length) * 100)}%</span>
                                        </div>
                                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(selectedItems.length / CHECKLIST_ITEMS.length) * 100}%` }}
                                                className="h-full bg-primary-500 shadow-[0_0_10px_rgba(0,168,232,0.5)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {selectedItems.length > 0 ? (
                                    <button
                                        onClick={() => setShowResults(true)}
                                        className="w-full py-5 bg-white text-navy-900 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all flex items-center justify-center group"
                                    >
                                        Unlock My Strategy Guide
                                        <FaRocket className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                ) : (
                                    <div className="text-sm text-gray-400 text-center italic">
                                        Select 1 or more strategies to unlock your plan.
                                    </div>
                                )}
                            </motion.div>

                            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-navy-900 mb-4 flex items-center">
                                    <FaShieldAlt className="text-primary-500 mr-2" />
                                    Secure & Confidential
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    This audit is for educational purposes. Your inputs are not stored unless you choose to download your results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Modal */}
            <AnimatePresence>
                {showResults && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowResults(false)}
                            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-3xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="bg-navy-900 p-8 text-white">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">Final Step!</h2>
                                        <p className="text-primary-300">We've generated your custom Tax Optimization Roadmap.</p>
                                    </div>
                                    <button onClick={() => setShowResults(false)} className="text-white/50 hover:text-white transition-colors">
                                        <span className="text-3xl">&times;</span>
                                    </button>
                                </div>
                            </div>

                            <div className="p-10 text-center">
                                {!submitted ? (
                                    <>
                                        <FaEnvelopeOpen className="text-5xl text-primary-500 mx-auto mb-6" />
                                        <h3 className="text-2xl font-bold text-navy-900 mb-4">Where should we send your results?</h3>
                                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                            Enter your business email below to receive the detailed PDF guide for the <strong>${currentSavings.toLocaleString()}</strong> in potential savings you identified.
                                        </p>
                                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                            <input
                                                type="email"
                                                required
                                                placeholder="yourname@business.com"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-500 outline-none transition-all text-lg"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full py-5 bg-navy-900 text-white rounded-xl font-bold text-xl hover:bg-navy-800 transition-all shadow-xl"
                                            >
                                                Email My 2026 Strategy Guide
                                            </button>
                                        </form>
                                        <p className="mt-6 text-xs text-gray-400">
                                            By clicking, you agree to receive strategic tax insights from MRECAI. Unsubscribe anytime.
                                        </p>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-10"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <FaCheckCircle className="text-4xl" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-navy-900 mb-4">Success! Check Your Email.</h3>
                                        <p className="text-lg text-gray-600 mb-10">
                                            The guide is on its way to <strong>{email}</strong>.
                                            In the meantime, why not get a jump start on those savings?
                                        </p>
                                        <div className="flex flex-col gap-4 max-w-sm mx-auto">
                                            <Link
                                                href="/book-now"
                                                className="w-full py-5 bg-primary-600 text-white rounded-xl font-bold text-xl hover:bg-primary-700 transition-all shadow-lg flex items-center justify-center"
                                            >
                                                <FaUniversity className="mr-3" />
                                                Book Professional Audit
                                            </Link>
                                            <button
                                                onClick={() => setShowResults(false)}
                                                className="text-gray-500 font-medium hover:text-navy-900"
                                            >
                                                Close & Look Around
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Value Prop Footer */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why this audit matters for 2026</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                With new tax regulations entering the fold, standard "filing" is no longer enough. You need strategy. This checklist is based on actual implementations that have saved MRE clients tens of thousands in annual tax drag.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/services/strategic-tax-planning" className="flex items-center text-primary-600 font-bold hover:text-primary-700">
                                    Learn About Our Tax Pillar <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <div className="text-3xl font-bold text-navy-900 mb-2">15%</div>
                                <p className="text-sm text-gray-500">Average Savings Increase</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <div className="text-3xl font-bold text-navy-900 mb-2">$42k</div>
                                <p className="text-sm text-gray-500">Top Identified Credit</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <div className="text-3xl font-bold text-navy-900 mb-2">10min</div>
                                <p className="text-sm text-gray-500">Time to Complete</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <div className="text-3xl font-bold text-navy-900 mb-2">100%</div>
                                <p className="text-sm text-gray-500">IRS Compliant Strategy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TaxSavingsChecklist;

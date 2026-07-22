'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    FaShieldAlt, FaRegCircle, FaCheckCircle, FaExclamationTriangle, FaLock,
    FaHospital, FaCar, FaUserShield, FaBuilding, FaArrowRight, FaEnvelopeOpen, FaFileAlt,
    FaTools, FaPhone
} from 'react-icons/fa';
import SEO from '../../components/common/SEO';

interface RiskItem {
    id: string;
    label: string;
    category: string;
    riskLevel: 'High' | 'Medium' | 'Low';
    description: string;
}

const RISK_ITEMS: RiskItem[] = [
    // Commercial Risks
    { id: 'risk_cyber', label: 'Cyber Liability & Data Breach', category: 'Commercial Lines', riskLevel: 'High', description: 'Do you store client data, emails, or process payments online?' },
    { id: 'risk_epli', label: 'Employment Practices Liability (EPLI)', category: 'Commercial Lines', riskLevel: 'High', description: 'Protection against claims of discrimination, wrongful termination, or harassment.' },
    { id: 'risk_errors', label: 'Errors & Omissions (Professional Liability)', category: 'Commercial Lines', riskLevel: 'High', description: 'Protects against mistakes made in professional advice or services.' },
    { id: 'risk_workers', label: 'Workers Compensation Audit', category: 'Commercial Lines', riskLevel: 'Medium', description: 'Ensure you aren\'t overpaying due to incorrect class codes.' },

    // Property & Assets
    { id: 'risk_bi', label: 'Business Interruption Coverage', category: 'Property & Assets', riskLevel: 'High', description: 'If your office is damaged, will you have income to pay bills and payroll?' },
    { id: 'risk_inland', label: 'Inland Marine (Equipment Floater)', category: 'Property & Assets', riskLevel: 'Medium', description: 'Coverage for tools, laptops, and equipment that leaves your main premises.' },
    { id: 'risk_umbrella_comm', label: 'Commercial Umbrella (Excess Liability)', category: 'Property & Assets', riskLevel: 'Medium', description: 'Extra protection for catastrophic claims that exceed your primary limits.' },

    // Personal Lines
    { id: 'risk_umbrella_pers', label: 'Personal Umbrella Policy', category: 'Personal Lines', riskLevel: 'High', description: 'Essential for business owners to protect personal assets from lawsuits.' },
    { id: 'risk_life', label: 'Buy-Sell Life Insurance', category: 'Personal Lines', riskLevel: 'High', description: 'What happens to your business shares if a partner passes away?' },
    { id: 'risk_landlord', label: 'Landlord / Rental Property Coverage', category: 'Personal Lines', riskLevel: 'Medium', description: 'Ensure your personal homeowners policy doesn\'t exclude business rental activity.' },
];

const InsuranceGapChecklist = () => {
    const [selectedRisks, setSelectedRisks] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const toggleRisk = (id: string) => {
        setSelectedRisks(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const highRisksCount = useMemo(() =>
        RISK_ITEMS.filter(item => selectedRisks.includes(item.id) && item.riskLevel === 'High').length,
        [selectedRisks]
    );

    const categories = Array.from(new Set(RISK_ITEMS.map(i => i.category)));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <SEO
                title="Insurance Gap Checklist | Business Risk Audit | MRECAI"
                description="Identify hidden gaps in your commercial and personal insurance. Use our interactive risk audit to protect your business and personal assets."
                canonical="/resources/insurance-gap-checklist"
                keywords="insurance gap checklist, commercial insurance audit, business risk management NYC, cyber liability check"
            />

            <div className="min-h-screen pt-24 bg-gray-50 pb-20">
                <div className="container-custom max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-bold mb-4"
                        >
                            <FaExclamationTriangle className="mr-2" />
                            Critical Risk Assessment
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                            The Insurance Gap Checklist
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Most business owners have at least 3 major insurance gaps that could result in total loss. Check the items below that you ARE NOT currently covered for or ARE UNSURE about.
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
                                        {category === 'Commercial Lines' ? <FaBuilding className="mr-3 text-primary-500" /> :
                                            category === 'Property & Assets' ? <FaTools className="mr-3 text-primary-500" /> :
                                                <FaUserShield className="mr-3 text-primary-500" />}
                                        {category}
                                    </h3>
                                    <div className="space-y-4">
                                        {RISK_ITEMS.filter(item => item.category === category).map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => toggleRisk(item.id)}
                                                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${selectedRisks.includes(item.id)
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-white bg-white hover:border-red-200 shadow-sm'
                                                    }`}
                                            >
                                                <div className="mt-1">
                                                    {selectedRisks.includes(item.id) ? (
                                                        <FaExclamationTriangle className="text-red-500 text-2xl" />
                                                    ) : (
                                                        <FaRegCircle className="text-gray-300 text-2xl group-hover:text-red-300" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-navy-900">{item.label}</h4>
                                                        {item.riskLevel === 'High' && (
                                                            <span className="text-[10px] uppercase font-black bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                                                                High Risk
                                                            </span>
                                                        )}
                                                    </div>
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
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>

                                <h3 className="text-lg font-bold mb-8 uppercase tracking-widest text-red-400 flex items-center">
                                    <FaShieldAlt className="mr-3" />
                                    Exposure Report
                                </h3>

                                <div className="mb-8">
                                    <div className="text-sm text-gray-400 mb-1 uppercase font-bold tracking-tight">Active Gaps Identified</div>
                                    <div className="text-5xl font-bold text-red-400 tabular-nums">
                                        {selectedRisks.length}
                                    </div>
                                </div>

                                {highRisksCount > 0 && (
                                    <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                        <p className="text-sm text-red-300">
                                            <strong>Warning:</strong> You have {highRisksCount} high-risk exposures that may leave you personally liable.
                                        </p>
                                    </div>
                                )}

                                <div className="space-y-4 mb-8">
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Audit Completion</span>
                                            <span className="text-red-300 font-bold">{Math.round((selectedRisks.length / RISK_ITEMS.length) * 100)}%</span>
                                        </div>
                                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(selectedRisks.length / RISK_ITEMS.length) * 100}%` }}
                                                className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {selectedRisks.length > 0 ? (
                                    <button
                                        onClick={() => setShowResults(true)}
                                        className="w-full py-5 bg-white text-navy-900 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all flex items-center justify-center group"
                                    >
                                        Get My Gap Analysis PDF
                                        <FaFileAlt className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                ) : (
                                    <div className="text-sm text-gray-400 text-center italic">
                                        Select 1 or more risks to generate your report.
                                    </div>
                                )}
                            </motion.div>

                            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-navy-900 mb-4 flex items-center">
                                    <FaLock className="text-red-500 mr-2" />
                                    100% Confidential
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Personalized risk data is for your eyes only. We do not store specific responses unless you request an audit.
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
                                        <h2 className="text-3xl font-bold mb-2">Priority Results</h2>
                                        <p className="text-red-400">Your exposure report is ready for delivery.</p>
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
                                        <h3 className="text-2xl font-bold text-navy-900 mb-4">Email My Exposure Report</h3>
                                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                            Enter your email to receive a detailed breakdown of the <strong>{selectedRisks.length} insurance gaps</strong> you identified.
                                        </p>
                                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                            <input
                                                type="email"
                                                required
                                                placeholder="yourname@domain.com"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-red-500 outline-none transition-all text-lg"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full py-5 bg-navy-900 text-white rounded-xl font-bold text-xl hover:bg-navy-800 transition-all shadow-xl"
                                            >
                                                Send My Risk Gap Analysis
                                            </button>
                                        </form>
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
                                        <h3 className="text-3xl font-bold text-navy-900 mb-4">Report Sent!</h3>
                                        <p className="text-lg text-gray-600 mb-10">
                                            Check <strong>{email}</strong> for your PDF report.
                                            Gaps in commercial coverage can be resolved in one phone call.
                                        </p>
                                        <div className="flex flex-col gap-4 max-w-sm mx-auto">
                                            <Link
                                                href="/book-now"
                                                className="w-full py-5 bg-primary-600 text-white rounded-xl font-bold text-xl hover:bg-primary-700 transition-all shadow-lg flex items-center justify-center"
                                            >
                                                <FaPhone className="mr-3" />
                                                Book Free Risk Audit
                                            </Link>
                                            <button
                                                onClick={() => setShowResults(false)}
                                                className="text-gray-500 font-medium hover:text-navy-900"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why a "Broker Review" isn't enough</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Standard brokers look at policies. We look at **risk architecture**. We bridge the gap between your financial operations and your insurance exposure—ensuring you aren't paying for redundant coverage while leaving critical liabilities open.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/services/risk-architecture" className="flex items-center text-primary-600 font-bold hover:text-primary-700">
                                    Explore Risk Architecture <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="bg-navy-900 p-8 rounded-[2rem] text-white">
                            <h4 className="text-2xl font-bold mb-6 flex items-center">
                                <FaShieldAlt className="mr-3 text-primary-400" />
                                The MRE Advantage
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Direct Underwriter Negotiations",
                                    "Gap-First Analysis Model",
                                    "Combined Commercial & Personal Audit",
                                    "Annual Risk Recalibration"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-primary-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InsuranceGapChecklist;

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaChevronRight, FaRobot, FaBrain, FaShieldAlt, FaRocket, FaClock, FaCheckCircle, FaExclamationTriangle, FaQuestionCircle, FaChartBar } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { breadcrumbSchema, faqSchema } from '../../utils/schemas';

const ExecutivesGuide = () => {
    const faqs = [
        {
            question: "Is AI too expensive for a small business?",
            answer: "No. Many tools cost less than $50/month. The cost of not using them is higher due to wasted labor hours. At MRECAI, we focus on implementations that provide immediate ROI."
        },
        {
            question: "Will AI replace my employees?",
            answer: "AI replaces tasks, not people. It frees your team to focus on high-value strategy rather than data entry. It's about augmentation, not replacement."
        },
        {
            question: "How do I know my data is safe?",
            answer: "By using 'Enterprise-Grade' wrappers and proper consulting protocols—something MRECAI specializes in. We ensure your data is never used to train public models."
        }
    ];

    return (
        <>
            <SEO
                title="The Executive's Guide to AI: Business Automation Strategy | MRECAI"
                description="Learn how to implement practical AI automation in your business to save time and money while keeping your data secure. A complete guide for executives by MRECAI."
                canonical="/resources/executives-guide-to-ai"
                keywords="AI for Small Business, Business Automation Strategy, AI Risk Management, MRE Framework, AI Implementation"
                schema={{
                    '@context': 'https://schema.org',
                    '@graph': [
                        breadcrumbSchema([
                            { name: 'Home', url: '/' },
                            { name: 'Resources', url: '/resources' },
                            { name: "Executive's Guide to AI", url: '/resources/executives-guide-to-ai' },
                        ]),
                        faqSchema(faqs)
                    ],
                }}
            />

            <div className="pt-20">
                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="container-custom py-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <Link href="/" className="hover:text-primary-600 transition-colors flex items-center">
                                <FaHome className="mr-1" />
                                Home
                            </Link>
                            <FaChevronRight className="mx-2 text-gray-400" />
                            <Link href="/resources" className="hover:text-primary-600 transition-colors">
                                Resources
                            </Link>
                            <FaChevronRight className="mx-2 text-gray-400" />
                            <span className="text-navy-900 font-semibold">Executive's Guide to AI</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                                backgroundSize: '50px 50px'
                            }}></div>
                        </div>
                    </div>

                    <div className="container-custom relative z-10 text-white text-center py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex justify-center mb-6 space-x-4">
                                <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold">
                                    <FaClock className="mr-2" />
                                    8 Minute Read
                                </span>
                                <span className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-semibold">
                                    Pillar Guide
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic leading-tight">
                                The Executive’s Guide to AI: <br />
                                <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                                    Automate Without Increasing Risk
                                </span>
                            </h1>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                Confused by the AI hype? Learn how to implement practical automation to save time and money while keeping your data secure.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl mx-auto">
                        {/* 1. Introduction */}
                        <article className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-3xl font-bold text-navy-900 mb-6 italic">1. Introduction: Silence the Noise, Focus on the Signal</h2>
                            <p className="mb-6">
                                If you’ve opened LinkedIn, watched the news, or attended a business networking event in the last six months, you’ve heard the same message repeated ad nauseam: "AI is changing everything."
                            </p>
                            <p className="mb-6">
                                You’ve likely heard that Artificial Intelligence will replace employees, write your emails, and predict the stock market. But for most business owners and executives, this hype creates more anxiety than clarity. You aren't looking for a sci-fi future; you are looking for a way to close your monthly books faster, reduce administrative overhead, and stop missing leads at 2 AM.
                            </p>
                            <p className="mb-6 font-semibold text-navy-900">
                                The truth about AI in 2026 is far more practical—and profitable—than the headlines suggest.
                            </p>
                            <p className="mb-8">
                                AI isn’t magic. It is simply the next evolution of efficiency. Just as the spreadsheet replaced the ledger book, AI is replacing the repetitive manual tasks that slow your business down.
                            </p>

                            <div className="bg-navy-50 border-l-4 border-primary-500 p-8 mb-8 rounded-r-xl italic">
                                <h3 className="text-xl font-bold text-navy-900 mb-2">The "Implementation Gap"</h3>
                                <p>
                                    Most businesses are approaching AI backward. They sign up for a dozen subscriptions without a plan. They look for problems to solve with toys, rather than identifying business bottlenecks first. This leads to the "Implementation Gap"—the expensive space where you pay for technology no one uses effectively.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-navy-900 mb-4 italic">Why MRECAI is Different</h3>
                            <p className="mb-6">
                                We sit at the rare intersection of cutting-edge innovation and risk management. We don’t just throw code at a problem; we are a business consultancy first. Because we provide both <Link href="/services/ai-automation" className="text-primary-600 hover:underline">AI Technology Consulting</Link> and <Link href="/services/insurance" className="text-primary-600 hover:underline">Commercial Insurance Services</Link>, we view your business holistically.
                            </p>

                            <hr className="my-12 border-gray-200" />

                            {/* 2. Beyond the Hype */}
                            <h2 className="text-3xl font-bold text-navy-900 mb-6 italic">2. Beyond the Hype: What Does "Business AI" Actually Look Like?</h2>
                            <p className="mb-8">
                                "Business AI" is about taking unsexy, error-prone tasks and handing them to a machine that never sleeps. Here is what real-world AI looks like in three core areas:
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <FaBrain className="text-3xl text-primary-500 mb-4" />
                                    <h4 className="font-bold text-navy-900 mb-2 italic">1. The Back Office</h4>
                                    <p className="text-sm">OCR reads invoices instantly, while algorithms monitor ledgers for anomalies. Freeing up your accountant for <Link href="/services/tax-strategy" className="text-primary-600 hover:underline">Tax Strategy</Link>.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <FaRocket className="text-3xl text-primary-500 mb-4" />
                                    <h4 className="font-bold text-navy-900 mb-2 italic">2. Client Acquisition</h4>
                                    <p className="text-sm">Intelligent Intake Systems engage visitors 24/7, qualify leads, and schedule meetings directly. Built with <Link href="/services/ai-driven-growth" className="text-primary-600 hover:underline">AI Automation</Link>.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <FaChartBar className="text-3xl text-primary-500 mb-4" />
                                    <h4 className="font-bold text-navy-900 mb-2 italic">3. Operations</h4>
                                    <p className="text-sm">Predictive Analytics forecast cash flow gaps and staffing needs weeks in advance, shifting management from reactive to proactive.</p>
                                </div>
                            </div>

                            <hr className="my-12 border-gray-200" />

                            {/* 3. MRE Framework */}
                            <h2 className="text-3xl font-bold text-navy-900 mb-6 italic">3. The M.R.E. Framework for Implementation</h2>
                            <p className="mb-8">
                                To avoid the "Implementation Gap," follow our proprietary branded methodology:
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">M</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-navy-900 mb-2 italic">Map the Workflow</h4>
                                        <p>You cannot automate what you cannot see. We visually map your current process step-by-step to find the "source of truth."</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">R</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-navy-900 mb-2 italic">Reduce the Friction</h4>
                                        <p>If you automate a bad process, you get bad results faster. We simplify and subtract redundant steps before applying tech.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary-400 text-white rounded-full flex items-center justify-center font-bold text-xl">E</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-navy-900 mb-2 italic">Execute & Evaluate</h4>
                                        <p>We build the "bridge" using custom Python, Zapier, or Enterprise AI agents, then monitor for accuracy and time savings.</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-12 border-gray-200" />

                            {/* 4. Risk / Elephant in room */}
                            <h2 className="text-3xl font-bold text-navy-900 mb-6 italic">4. The Elephant in the Room: Risk, Insurance & Security</h2>
                            <p className="mb-6">
                                Implementing AI without a risk management strategy is like buying a Ferrari without brakes. You will go fast, but you might crash disastrously.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <FaExclamationTriangle className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold block italic font-bold">"Shadow AI" Problem</span>
                                            <span className="text-sm">Employees pasting sensitive financial data into public AI models, exposing trade secrets.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <FaExclamationTriangle className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold block italic font-bold">Hallucinations & Liability</span>
                                            <span className="text-sm">What if your chatbot promises a discount you can't honor? Liability is a major concern.</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-navy-900 text-white p-6 rounded-xl border border-white/10 italic font-bold">
                                    <FaShieldAlt className="text-3xl text-primary-400 mb-4" />
                                    <h4 className="font-bold mb-2 italic">The MRECAI Safety Net</h4>
                                    <p className="text-sm opacity-80 mb-4 italic font-medium">We review your current <Link href="/services/insurance" className="text-primary-300 hover:text-primary-200">Insurance Consulting</Link> coverage to ensure protection against Tech E&O and Cyber Liability.</p>
                                    <Link href="/contact" className="text-primary-400 text-sm font-bold hover:underline">Get a Risk Audit →</Link>
                                </div>
                            </div>

                            <hr className="my-12 border-gray-200" />

                            {/* 5. Top 3 Wins */}
                            <h2 className="text-3xl font-bold text-navy-900 mb-6 italic">5. Top 3 Immediate Wins for 2026</h2>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100 italic">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                                    <div>
                                        <strong className="text-navy-900 block text-lg mb-1 italic font-bold">The "Zero-Inbox" Filter</strong>
                                        <p>AI filters that auto-label mail based on urgency and sentiment. Your inbox is pre-sorted into "Emergency," "Invoices," and "Read Later" before you log in.</p>
                                    </div>
                                </li>
                                <li className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100 italic">
                                    <div className="w-8 h-8 bg-primary-500 text-white rounded flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                                    <div>
                                        <strong className="text-navy-900 block text-lg mb-1 italic font-bold">Meeting Intelligence</strong>
                                        <p>AI assistants transcribe calls, extract next steps, and automatically create tasks in your project management software. ROI: 30-60 mins saved per meeting.</p>
                                    </div>
                                </li>
                                <li className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100 italic">
                                    <div className="w-8 h-8 bg-primary-400 text-white rounded flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                                    <div>
                                        <strong className="text-navy-900 block text-lg mb-1 italic font-bold">Content Repurposing at Scale</strong>
                                        <p>Turn a 3-minute voice memo into a blog post, LinkedIn article, and newsletter automatically. Dominate social channels with minimal effort.</p>
                                    </div>
                                </li>
                            </ul>

                            <hr className="my-12 border-gray-200" />

                            {/* 6. FAQ */}
                            <h2 className="text-3xl font-bold text-navy-900 mb-8 italic flex items-center">
                                <FaQuestionCircle className="mr-3 text-primary-600" />
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-6 mb-12 italic italic italic font-medium">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="border-b border-gray-100 pb-6">
                                        <h4 className="font-bold text-navy-900 mb-2 italic">Q: {faq.question}</h4>
                                        <p className="text-gray-600">A: {faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <hr className="my-12 border-gray-200" />

                            {/* 7. Conclusion */}
                            <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-12 rounded-2xl text-center italic italic italic font-bold">
                                <h2 className="text-3xl font-bold mb-6 italic">The Future Belongs to the Efficient</h2>
                                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto italic">
                                    The gap between businesses that use AI and those that don't is widening. You don't need to be a tech expert; you just need a partner who understands the code AND the compliance.
                                </p>
                                <div className="bg-primary-500/10 border border-primary-400/20 p-6 mb-8 rounded-xl max-w-xl mx-auto italic italic font-bold">
                                    <p className="text-primary-300 font-bold mb-2 uppercase tracking-wide italic">The Offer</p>
                                    <p className="font-bold text-2xl italic">Book Your Free AI Readiness Audit</p>
                                    <p className="text-gray-400 text-sm mt-2 italic font-semibold">We’ll review your workflow and identify 3 places you can save money immediately.</p>
                                </div>
                                <Link
                                    href="/book-now"
                                    className="inline-flex items-center justify-center px-10 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-500/20 italic font-bold"
                                >
                                    Book Your Free Audit →
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ExecutivesGuide;

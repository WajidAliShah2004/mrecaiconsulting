'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import PageTransition from '../components/common/PageTransition';
import CTASection from '../components/common/CTASection';
import { TrustBar } from '../components/common';

export default function Products() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-36 pb-12 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-sm font-bold mb-6 text-primary-300">
                AUTONOMOUS PIPELINE INTELLIGENCE
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                YOUR PIPELINE.<br />
                <span className="text-primary-400">FULLY HANDLED.</span>
              </h1>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-white/20">
                <p className="text-base md:text-xl text-gray-200 leading-relaxed">
                  ATLAS isn't a lead gen tool. It's a <strong className="text-white">fully autonomous revenue engine</strong> that hunts, qualifies, enriches, and delivers ready-to-close prospects — while your team sleeps.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold text-navy-900 bg-primary-400 rounded-xl hover:bg-primary-300 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Deploy ATLAS
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300"
                >
                  Watch It Work
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
                {[
                  { value: '100%', label: 'Autonomous Execution' },
                  { value: '0', label: 'Hours of Manual Work' },
                  { value: '∞', label: 'Scale Ceiling' },
                  { value: '24/7', label: 'Always Prospecting' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Logo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full"></div>
                
                {/* Logo Container */}
                <div className="relative bg-white/5 backdrop-blur-sm border-2 border-primary-500/30 rounded-2xl p-8 md:p-12 shadow-2xl">
                  <img 
                    src="/images/AtlasLogo.png" 
                    alt="ATLAS Engine Logo" 
                    className="w-full h-auto"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-navy-900 border-t border-white/5">
        <TrustBar />
      </div>

      {/* MRECAI Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-4">
                MRECAI Platform
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                Comprehensive Business Services
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                MRECAI delivers integrated solutions across finance, risk management, and business consulting to help your business thrive.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                MRECAI Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Tax Preparation & Planning',
                  'Bookkeeping & Accounting',
                  'Insurance Consulting',
                  'Business Consulting',
                  'Advanced Tax Strategy',
                  'Investment & Wealth Planning'
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    <FaCheckCircle className="text-primary-600 text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium text-lg">{service}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-center mb-6">
                  Learn more about our comprehensive service offerings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all duration-300 hover:scale-105"
                  >
                    Explore All Services
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    href="/book-now"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-navy-900 border-y border-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Most "lead gen tools" are just <span className="line-through text-gray-500">expensive spreadsheets</span> with a <span className="text-red-500">nicer logo.</span>
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              They scrape. They dump. They leave your team buried in hours of manual clean-up, chasing contacts who haven't worked at a company in two years, pitching the wrong person, and crafting outreach so generic it gets archived without a second glance. <strong className="text-white">Your pipeline deserves better. Your closers deserve better.</strong> ATLAS was engineered to fix all of it — completely on its own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-3 md:mb-4">
              BUILT TO REPLACE<br />THE GRIND.
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              Four precision-engineered modules. One relentless system. Zero manual intervention required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                num: '01',
                icon: '🎯',
                title: 'RELENTLESS LEAD DISCOVERY',
                description: 'ATLAS runs continuously — mapping markets, scanning platforms, and cross-referencing data sources around the clock. It doesn\'t just find companies; it navigates org charts, validates decision-makers, and verifies contact accuracy before a single name ever reaches your CRM.',
                tag: 'Multi-Platform Orchestration'
              },
              {
                num: '02',
                icon: '🧠',
                title: 'SCREENING THAT ACTUALLY THINKS',
                description: 'Forget passive scrapers. ATLAS actively reasons about every prospect — weighing them against your exact criteria, reading social signals, and flagging recent trigger events like funding rounds, leadership changes, or product launches.',
                tag: 'Real-Time Prospect Evaluation'
              },
              {
                num: '03',
                icon: '📄',
                title: 'PROOF OF VALUE ON FIRST CONTACT',
                description: 'Cold outreach dies because it asks before it gives. ATLAS flips the script. It autonomously audits each prospect\'s digital presence and generates a fully personalized PDF report delivered in the very first message.',
                tag: 'Autonomous Headless Audit Engine'
              },
              {
                num: '04',
                icon: '⚙️',
                title: 'ENGINEERED FOR SCALE',
                description: 'ATLAS is built on a strict microservices architecture backed by a robust state machine database — meaning it handles enterprise-level volume without degradation, drift, or downtime.',
                tag: 'Enterprise Microservices Architecture'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-primary-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl">{feature.icon}</span>
                  <span className="text-xs text-gray-400 font-mono">{feature.num} / 04</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                  {feature.description}
                </p>
                <span className="inline-block px-2 md:px-3 py-1 bg-primary-50 text-primary-700 text-xs font-mono rounded border border-primary-200">
                  {feature.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 text-primary-300">
                The ATLAS Loop
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                FROM COLD SEARCH<br />TO WARM CLOSE.
              </h2>

              <div className="space-y-4 md:space-y-6">
                {[
                  { num: '01', title: 'TARGET & DISCOVER', desc: 'ATLAS maps your ideal customer profile across the web — scanning platforms, filtering noise, and building a geo-grounded prospect universe in real time.' },
                  { num: '02', title: 'VERIFY & ENRICH', desc: 'Every prospect is cross-referenced, contact-verified, and enriched with live social signals and company events before they advance in the pipeline.' },
                  { num: '03', title: 'AUDIT & PERSONALIZE', desc: 'The headless browser environment autonomously audits the prospect\'s digital presence and generates a bespoke PDF report.' },
                  { num: '04', title: 'DELIVER & CLOSE', desc: 'A verified, enriched, insight-loaded lead lands in your CRM. Your closer takes over. ATLAS is already onto the next thousand.' }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 md:gap-4 pb-4 md:pb-6 border-b border-white/10 last:border-0"
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/20 flex-shrink-0 w-12 sm:w-14 md:w-16">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Terminal Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-950 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-700 font-mono text-xs sm:text-sm mt-8 lg:mt-0"
            >
              <div className="text-xs text-gray-500 mb-3 md:mb-4 tracking-wider">ATLAS ENGINE</div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex justify-between py-1.5 md:py-2 border-b border-gray-800">
                  <span className="text-gray-400">STATUS</span>
                  <span className="text-green-400">● LIVE RUNNING</span>
                </div>
                <div className="h-px bg-gray-800 my-2 md:my-3"></div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">TARGETS_SCANNED</span>
                  <span className="text-primary-400">14,882</span>
                </div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">VERIFIED_CONTACTS</span>
                  <span className="text-green-400">3,241</span>
                </div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">FAILED_CHECKS</span>
                  <span className="text-orange-400">847 → REROUTED</span>
                </div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">AUDITS_GENERATED</span>
                  <span className="text-primary-400">3,241</span>
                </div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">AVG_AUDIT_TIME</span>
                  <span className="text-primary-400">4.2s / prospect</span>
                </div>
                <div className="h-px bg-gray-800 my-2 md:my-3"></div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">PIPELINE_QUALITY</span>
                  <span className="text-yellow-400">▲ 97.3% VERIFIED</span>
                </div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">MANUAL_HOURS_SAVED</span>
                  <span className="text-green-400">∞</span>
                </div>
                <div className="flex justify-between py-0.5 md:py-1">
                  <span className="text-gray-400">SYSTEM_HEALTH</span>
                  <span className="text-green-400">OPTIMAL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-bold mb-4">
              Get Started with ATLAS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Ready to Deploy ATLAS?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Contact MRECAI to learn how ATLAS can transform your sales pipeline.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+13322826344"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-bold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(332) 282-6344</span>
              </a>
              
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300"
              >
                <span>Send a Message</span>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        variant="default"
        title="Stop Prospecting. Start Closing."
        description="ATLAS handles everything before the conversation. Deploy it once, and let your closers close."
        secondaryCTA={{
          text: 'Call: (332) 282-6344',
          type: 'call',
          to: 'tel:+13322826344'
        }}
      />
    </PageTransition>
  );
}

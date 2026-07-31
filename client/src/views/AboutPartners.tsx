'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaChevronRight, FaShieldAlt, FaChartLine, FaCalculator, FaLaptopCode, FaHandshake, FaAward, FaGlobe, FaUsers, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

const AboutPartners = () => {
  return (
    <>
      <SEO
        title="Strategic Partners | MRECAI Trusted Network"
        description="Discover MRECAI's network of strategic partners including top insurance carriers, financial advisors, accountants, and technology experts."
        canonical="/about/partners"
        keywords="strategic partners, insurance carriers, financial advisors, business partners, technology partners"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
              { name: 'Partners', url: '/about/partners' },
            ]),
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
              <Link href="/about" className="hover:text-primary-600 transition-colors">
                About
              </Link>
              <FaChevronRight className="mx-2 text-gray-400" />
              <span className="text-navy-900 font-semibold">Strategic Partners</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Strategic Partners</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Collaborating with industry leaders to deliver exceptional value
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strength in <span className="gradient-text">Collaboration</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At MRECAI, we believe in the power of strategic partnerships. 
                By collaborating with industry-leading organizations across insurance, accounting,
                and professional services, we're able to provide our clients with comprehensive solutions
                and unparalleled expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our carefully selected partners share our commitment to excellence, innovation, and 
                client-focused service. Together, we deliver value that goes beyond what any single 
                organization could achieve alone.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: FaHandshake, number: '6+', label: 'Strategic Partners' },
                { icon: FaAward, number: '100%', label: 'Vetted & Trusted' },
                { icon: FaGlobe, number: 'National', label: 'Coverage Network' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 text-center border border-primary-100 shadow-md"
                >
                  <stat.icon className="text-4xl text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-navy-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Advisors */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 shadow-lg">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Financial <span className="gradient-text">Advisors</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trusted financial advisory partners providing wealth management, investment planning, 
                and retirement strategies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Wealth Management Partners',
                  description: 'Comprehensive wealth management services for high-net-worth individuals and families',
                  services: ['Investment Management', 'Estate Planning', 'Tax Optimization', 'Retirement Planning']
                },
                {
                  name: 'Financial Planning Specialists',
                  description: 'Holistic financial planning services for individuals and businesses at all stages',
                  services: ['Financial Goal Setting', 'Risk Assessment', 'Portfolio Management', 'Insurance Planning']
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FaChartLine className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {partner.services.map((service, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-primary-500 mr-2 mt-0.5">•</span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Financial Partner: Ardis */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4 shadow-lg">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Investment & Financial Management <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnership with a CFP® and CFA® credentialed financial advisor
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header with Image */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src="/images/Ardis.jpeg" 
                        alt="Ardis - Financial Advisor" 
                        className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl font-bold mb-2">Strategic Financial Partner</h3>
                      <p className="text-green-100 text-lg mb-2">CFP® | CFA® Credentialed</p>
                      <p className="text-green-50">Investment & Financial Management Services</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Introduction */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Professional Credentials & Expertise
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      MRECAI is proud to partner with a highly credentialed financial professional 
                      holding both the <strong>Certified Financial Planner (CFP®)</strong> and <strong>Chartered Financial 
                      Analyst (CFA®)</strong> designations — two of the most prestigious and rigorous certifications in 
                      the financial services industry.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This strategic partnership enables MRECAI to offer comprehensive investment and financial management 
                      services to our clients, combining our expertise in business consulting, insurance, and tax strategy 
                      with sophisticated wealth management and investment planning.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Together, we provide a holistic approach to financial success — integrating business operations, 
                      risk management, tax optimization, and investment strategy into a unified wealth-building framework.
                    </p>
                  </div>

                  {/* Credentials Explained */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Understanding the Credentials
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                            <FaAward className="text-white text-xl" />
                          </div>
                          <h5 className="font-bold text-navy-900 text-lg">CFP® - Certified Financial Planner</h5>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          The CFP® certification is the gold standard for comprehensive financial planning. It requires 
                          extensive education, rigorous examination, and ongoing ethical standards.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Holistic financial planning expertise</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Retirement and estate planning</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Tax and insurance strategies</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Fiduciary duty to clients</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                            <FaChartLine className="text-white text-xl" />
                          </div>
                          <h5 className="font-bold text-navy-900 text-lg">CFA® - Chartered Financial Analyst</h5>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          The CFA® charter is globally recognized as the highest distinction in investment management 
                          and financial analysis, requiring mastery of advanced portfolio theory and ethics.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Advanced investment analysis</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Portfolio management expertise</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Risk assessment and mitigation</span>
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Global investment standards</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Services Offered */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Investment & Financial Management Services
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          title: 'Comprehensive Financial Planning',
                          description: 'Holistic planning covering retirement, education, major purchases, and life transitions'
                        },
                        {
                          title: 'Investment Portfolio Management',
                          description: 'Professional management of stocks, bonds, ETFs, and alternative investments'
                        },
                        {
                          title: 'Retirement Planning & Analysis',
                          description: '401(k) optimization, IRA strategies, pension analysis, and income planning'
                        },
                        {
                          title: 'Tax-Efficient Investment Strategies',
                          description: 'Asset location, tax-loss harvesting, and coordination with tax planning'
                        },
                        {
                          title: 'Estate & Wealth Transfer Planning',
                          description: 'Strategies to preserve and transfer wealth efficiently across generations'
                        },
                        {
                          title: 'Risk Management & Insurance Analysis',
                          description: 'Comprehensive review of life, disability, and long-term care insurance needs'
                        },
                        {
                          title: 'Education Funding Strategies',
                          description: '529 plans, education savings accounts, and college funding optimization'
                        },
                        {
                          title: 'Business Owner Financial Planning',
                          description: 'Exit planning, succession strategies, and business valuation considerations'
                        }
                      ].map((service, index) => (
                        <div key={index} className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100">
                          <h5 className="font-bold text-navy-900 mb-2 flex items-center text-sm">
                            <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                            {service.title}
                          </h5>
                          <p className="text-gray-600 text-xs leading-relaxed ml-6">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why This Partnership Matters */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Why This Partnership Matters
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: 'Integrated Wealth Strategy',
                          description: 'Seamless coordination between business consulting, tax planning, insurance, and investment management'
                        },
                        {
                          title: 'Fiduciary Standard',
                          description: 'CFP® professionals are held to the highest ethical standards, always acting in your best interest'
                        },
                        {
                          title: 'Institutional-Grade Analysis',
                          description: 'CFA® expertise brings Wall Street-level investment analysis to your personal portfolio'
                        },
                        {
                          title: 'Comprehensive Service Model',
                          description: 'One coordinated team managing all aspects of your financial life — from business operations to retirement'
                        }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mt-1">
                            <FaCheckCircle className="text-white text-sm" />
                          </div>
                          <div>
                            <h5 className="font-bold text-navy-900 mb-1">{benefit.title}</h5>
                            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How It Works */}
                  <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 border border-green-100">
                    <h4 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                      <FaHandshake className="text-green-500 mr-3" />
                      How the Partnership Works
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you work with MRECAI, you gain access to our strategic financial partner's 
                      investment and wealth management services as part of a comprehensive financial strategy.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>MRECAI handles:</strong> Business consulting, tax strategy, insurance planning, accounting services, 
                      and estate consulting.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Our CFP®/CFA® partner handles:</strong> Investment portfolio management, retirement planning, 
                      asset allocation, and wealth accumulation strategies.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      Together, we create a unified financial ecosystem where every decision is coordinated, every strategy 
                      is optimized, and your complete financial picture is managed by a team of credentialed experts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accounting Partners */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 shadow-lg">
                <FaCalculator className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Accounting <span className="gradient-text">Partners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Certified accounting professionals providing tax preparation, bookkeeping, and financial services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'CPA Firms',
                  description: 'Certified Public Accountants specializing in tax planning and compliance',
                  icon: FaCalculator
                },
                {
                  name: 'Bookkeeping Services',
                  description: 'Professional bookkeeping and payroll management for businesses',
                  icon: FaChartLine
                },
                {
                  name: 'Tax Specialists',
                  description: 'Expert tax preparation and IRS representation services',
                  icon: FaAward
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <partner.icon className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Accounting Partner: PSG Global Tax & Accounting Services LLC */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4 shadow-lg">
                <FaCalculator className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Accounting <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnership with a trusted US tax and accounting firm
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">PSG Global Tax &amp; Accounting Services LLC</h3>
                  <p className="text-green-100 text-lg mb-1">Your trusted partner for US tax, accounting, and business advisory services</p>
                  <p className="text-green-50">New York, United States</p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Who They Are */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Who PSG Global Is
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      PSG Global Tax &amp; Accounting Services LLC helps businesses, entrepreneurs, and
                      international founders navigate US accounting, taxation, and compliance with
                      confidence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      With professional experience across KPMG, EY Global, and McKinsey International,
                      their team combines global expertise with a personalized, founder-focused approach —
                      making financial management easier, reducing compliance risk, and supporting
                      long-term business growth.
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Areas of Expertise
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: 'US Tax Filing & Compliance',
                          description: 'Accurate, timely US federal and state tax filings that keep your business compliant'
                        },
                        {
                          title: 'Accounting & Bookkeeping',
                          description: 'Organized, up-to-date books and financial records maintained year-round'
                        },
                        {
                          title: 'Business Formation & Setup',
                          description: 'Guidance for startups and international founders establishing a US business'
                        },
                        {
                          title: 'Business Advisory',
                          description: 'Proactive, growth-focused advisory tailored to your goals and compliance requirements'
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                          <h5 className="font-bold text-navy-900 mb-2">{item.title}</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Founder */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      Meet the Founder
                    </h4>
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 md:p-8 border border-green-100">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                        <div className="w-28 h-28 flex-shrink-0 rounded-full overflow-hidden border-4 border-green-500/30 shadow-xl mx-auto sm:mx-0">
                          <img
                            src="/images/ParineetSehgal.jpg"
                            alt="Parineet Sehgal - Founder, PSG Global Tax & Accounting Services LLC"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center sm:text-left">
                          <p className="text-xl font-bold text-navy-900 mb-1">Parineet Sehgal</p>
                          <p className="text-green-700 font-semibold">
                            US CPA · Chartered Accountant (India) · Dip-IFRS (ACCA–UK) · QuickBooks ProAdvisor
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Parineet founded PSG Global to help founders simplify accounting, taxation, and
                        compliance while building strong financial foundations for growth. Whether clients
                        operate within the United States or manage businesses internationally, the focus is
                        on keeping financial operations organized, compliant, and scalable.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { stat: '1,000+', label: 'Returns Filed' },
                          { stat: '150+', label: 'Clients Served' },
                          { stat: '6+', label: 'Countries Served' },
                          { stat: '10+', label: 'Years Experience' }
                        ].map((item, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold gradient-text">{item.stat}</div>
                            <div className="text-sm text-gray-600">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* How Partnership Works */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-green-500 rounded-full mr-3"></span>
                      How the Partnership Works
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you work with MRECAI, our team handles the strategy behind your business,
                      tax, and risk planning. PSG Global handles the US tax, accounting, and compliance
                      execution — creating a seamless experience that feels like working with a single
                      full-service firm.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                      Together, MRECAI + PSG Global deliver:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'One coordinated team handling consulting, tax, and accounting needs',
                        'Clean, up-to-date books that inform every strategic decision',
                        'US tax filing and compliance aligned with your broader business strategy',
                        'A single point of accountability from formation through filing'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visit Website */}
                  <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 border border-green-100 text-center">
                    <h4 className="text-xl font-bold text-navy-900 mb-4">Learn More About PSG Global</h4>
                    <a
                      href="https://psgtaxaccounting.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                    >
                      Visit PSG Global Tax &amp; Accounting
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Partner: NovaEdge Solutions */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 shadow-lg">
                <FaLaptopCode className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Technology <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                NovaEdge Solutions builds and maintains the secure platforms and infrastructure behind MRECAI's client service.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FaLaptopCode className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">NovaEdge Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Led by MRECAI CTO Wajid Ali Shah, NovaEdge Solutions delivers the web, desktop, and mobile
                  systems that keep our consulting, tax, and insurance operations running reliably at scale.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Secure Client Platforms', 'Internal Tools & Automation', 'Reporting Infrastructure', 'Web & Mobile Development'].map((service, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-primary-500 mr-2 mt-0.5">•</span>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Partner: Grober Imbey Insurance Agency */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4 shadow-lg">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Insurance <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnership with a trusted independent insurance agency
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Grober Imbey Insurance Agency (GIA)</h3>
                  <p className="text-primary-100 text-lg">Over 50 Years of Excellence in Insurance Solutions</p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Who They Are */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      Who GIA Is
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Founded in the early 1970s, Grober Imbey Insurance Agency has spent more than five decades 
                      protecting families and businesses across New York, New Jersey, and the Tri-State region.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As a fully independent brokerage, GIA is not tied to any single carrier — instead, they 
                      represent dozens of top-rated national and specialty insurers, allowing them to design highly 
                      competitive, custom-built coverage strategies for even the most complex risk profiles.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Their reputation for personalized service, underwriting precision, and white-glove attention 
                      has made GIA one of the most respected insurance agencies in the region.
                    </p>
                  </div>

                  {/* What They Do */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      Areas of Expertise
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: 'Private-Client & High-Value Insurance',
                          description: 'Coverage for luxury homes, fine art, jewelry, collectibles, yachts, and exotic vehicles'
                        },
                        {
                          title: 'Personal Insurance Solutions',
                          description: 'Home, auto, condo, umbrella, and flood insurance for complex asset structures'
                        },
                        {
                          title: 'Business & Commercial Insurance',
                          description: 'General liability, workers\' comp, professional liability (E&O, D&O, cyber)'
                        },
                        {
                          title: 'Custom Underwriting Placement',
                          description: 'Partnerships with Chubb, AIG, Pure, Travelers, and The Hartford'
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                          <h5 className="font-bold text-navy-900 mb-2">{item.title}</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why GIA */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      Why GIA Is Our Ideal Partner
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: 'Advanced Underwriting for Complex Lives',
                          description: 'Expert handling of multi-state professionals, multiple properties, and sophisticated asset protection'
                        },
                        {
                          title: 'Multi-Carrier Flexibility',
                          description: 'Instant quotes across dozens of carriers for best-fit coverage at competitive rates'
                        },
                        {
                          title: 'High-Net-Worth Precision',
                          description: 'Direct relationships with private-client divisions for sophisticated estate planning structures'
                        },
                        {
                          title: 'Expert Claims & Renewal Management',
                          description: 'In-house service team managing claims, renewals, and policy audits proactively'
                        }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mt-1">
                            <FaCheckCircle className="text-white text-sm" />
                          </div>
                          <div>
                            <h5 className="font-bold text-navy-900 mb-1">{benefit.title}</h5>
                            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How Partnership Works */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                      <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                      How the Partnership Works
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you work with MRECAI, our team handles the discovery, analysis, and 
                      strategy behind your coverage. Once we've identified your needs, GIA executes the carrier 
                      placement, underwriting, and ongoing servicing — creating a seamless experience that feels 
                      like working with a single full-service firm.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-semibold mb-3">
                      Together, MRECAI + GIA deliver:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'One coordinated team handling all insurance and consulting needs',
                        'Streamlined communication between advisors, underwriters, and carriers',
                        'Annual proactive policy reviews to ensure no gaps in protection',
                        'Access to elite private-client and commercial markets'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-500 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Partnership Benefits */}
                  <div className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-8 border border-primary-100">
                    <h4 className="text-xl font-bold text-navy-900 mb-4">Why It Matters</h4>
                    <p className="text-gray-700 leading-relaxed">
                      This partnership reflects MRECAI's unwavering commitment to deliver 
                      comprehensive protection and strategic insight — not just policies. With GIA's half-century 
                      of underwriting experience and our consulting expertise, we ensure that every MRECAI client 
                      receives the right coverage, at the right price, with the right team behind it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Why Our Partnerships <span className="gradient-text">Matter</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: FaUsers,
                  title: 'Comprehensive Solutions',
                  description: 'Access to a full spectrum of services and expertise through our partner network'
                },
                {
                  icon: FaAward,
                  title: 'Best-in-Class Service',
                  description: 'Partnerships with industry leaders ensure top-tier quality and reliability'
                },
                {
                  icon: FaHandshake,
                  title: 'Seamless Integration',
                  description: 'Coordinated service delivery across all partners for a unified client experience'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Interested in Partnering With Us?</h2>
              <p className="text-xl text-gray-200 mb-8">
                We're always looking to collaborate with exceptional organizations that share our values
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Get in Touch
                </Link>
                <a
                  href="mailto:Matthew@mrecai.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  Partnership Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPartners;

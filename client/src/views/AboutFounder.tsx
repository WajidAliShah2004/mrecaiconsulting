'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaChevronRight, FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaAward, FaBriefcase, FaLightbulb, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import SEO from '../components/common/SEO';
import { personSchema, breadcrumbSchema } from '../utils/schemas';
import founderImage from '../../images/Matthew-Founder-1.png';
import ctoImage from '../../images/WajidCto.png';
import cmoImage from '../../images/JessieGwilt.jpeg';

const AboutFounder = () => {
  return (
    <>
      <SEO
        title="Meet Our People | MRECAI Leadership Team"
        description="Meet the MRECAI leadership team: Matthew R. Epstein (President & Founder), Jessie Gwilt (CMO), and Wajid Ali Shah (CTO). Expert leadership in business consulting, marketing, and technology."
        canonical="/about/founder"
        keywords="MRECAI team, Matthew R. Epstein, Jessie Gwilt, Wajid Ali Shah, business consultant, CMO, CTO, leadership team"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            personSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
              { name: 'Our People', url: '/about/founder' },
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
              <span className="text-navy-900 font-semibold">Meet Our People</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Meet <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Our People</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Leadership, vision, and commitment to excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-12 items-start">
                {/* Photo Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-2"
                >
                  <div className="relative">
                    {/* Founder photo */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src={founderImage.src} 
                        alt="Matthew R. Epstein - Founder & President of MRECAI"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '50% 15%' }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Contact Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-8 bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-6 text-white shadow-xl"
                  >
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <div className="space-y-3">
                      <a href="mailto:Matthew@mrecai.com" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                        <FaEnvelope className="text-primary-400" />
                        <span>Matthew@mrecai.com</span>
                      </a>
                      <a href="tel:929-702-2818" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                        <FaPhone className="text-primary-400" />
                        <span>929-702-2818</span>
                      </a>
                      <a href="https://www.linkedin.com/company/mre-consulting-insurance/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                        <FaLinkedin className="text-primary-400" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Bio Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-3"
                >
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">Matthew R. Epstein</h2>
                    <p className="text-2xl text-primary-600 font-semibold mb-4">President & Founder</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-8">
                      <FaQuoteLeft className="text-primary-500 text-3xl mb-4" />
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        "My vision is to create a tax, insurance, and accounting firm that truly puts clients first,
                        leveraging expertise and innovation to deliver exceptional results while maintaining
                        the personal touch that makes all the difference."
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      <strong>Matthew R. Epstein</strong> is an accomplished entrepreneur, consultant, and licensed insurance broker who blends financial expertise with strategic business insight. A graduate of the <strong>University at Buffalo</strong>, Matthew earned both his <strong>Bachelor's and Master's degrees in Accounting</strong>, graduating <strong>Summa Cum Laude</strong> and <strong>Magna Cum Laude</strong>.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Before founding MRECAI, he worked with industry leaders including <strong>Goldman Sachs</strong>, <strong>PricewaterhouseCoopers (PwC)</strong>, and <strong>Merlin Entertainments</strong>, where he managed multi-site financial operations and drove measurable business growth.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Now, as a <strong>licensed Property & Casualty and Life, Accident & Health Insurance Broker</strong>, Matthew leads MRECAI full-time — helping individuals and businesses achieve smarter financial decisions, stronger protection, and lasting success through comprehensive, personalized tax, insurance, and accounting solutions.
                    </p>

                    <h3 className="text-2xl font-bold text-navy-900 mb-4 mt-8">My Journey — From Numbers to Innovation</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      From the very beginning, I've always believed that success comes from understanding the numbers — and then daring to think beyond them. My journey started at the University at Buffalo, where I earned both my Bachelor's and Master's degrees in Accounting, graduating Summa Cum Laude and Magna Cum Laude. During my time there, I specialized in <strong>Accounting Systems and Internal Controls</strong>, developing an early passion for how technology could transform financial management and business decision-making.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      While still in school, I competed — and won — several <strong>PwC accounting competitions, technology innovation challenges, and startup pitch competitions</strong>. My entrepreneurial projects gained national recognition and were even featured in national media, reinforcing my belief that technology and accounting aren't separate worlds — they're two sides of the same coin.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      After graduation, I refined my skills in the world of large-scale business and global operations. I interned at <strong>Goldman Sachs</strong>, where I learned how large-scale financial systems truly operate, and later worked at <strong>PricewaterhouseCoopers (PwC)</strong>, where I deepened my understanding of audit, compliance, and corporate advisory. From there, I transitioned into the private sector, joining <strong>Merlin Entertainments</strong> as an Operations Manager, where I led financial operations, managed cross-functional teams, and implemented systems that drove efficiency, profitability, and growth.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      But deep down, I always knew I was an entrepreneur at heart. I wanted to build something that didn't just analyze numbers — but used them to empower people and businesses to take control of their futures.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      That's how <strong>MRECAI</strong> was born — a firm that merges financial expertise, strategic consulting, and modern technology to provide clients with complete, data-driven solutions. I officially founded MRECAI in 2024, and by 2025, I made the leap to pursue it full-time.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Today, I'm proud to lead a full-service firm that helps individuals and businesses navigate everything from tax planning and accounting to insurance, risk management, and business consulting. What started as a vision to simplify financial decision-making has grown into a mission — to help every client achieve confidence, clarity, and control over their financial world.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Professional <span className="gradient-text">Background</span>
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
              {[
                {
                  icon: FaGraduationCap,
                  title: 'Education',
                  items: [
                    'Master\'s Degree in Accounting - University at Buffalo (Magna Cum Laude)',
                    'Bachelor\'s Degree in Accounting - University at Buffalo (Summa Cum Laude)',
                    'Specialized in Accounting Systems and Internal Controls',
                    'Winner of multiple PwC accounting competitions and technology innovation challenges'
                  ],
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  icon: FaBriefcase,
                  title: 'Professional Experience',
                  items: [
                    'Goldman Sachs - Intern (Large-scale financial systems)',
                    'PricewaterhouseCoopers (PwC) - Audit, compliance, and corporate advisory',
                    'Merlin Entertainments - Operations Manager (Multi-site financial operations)',
                    'Founded MRECAI in 2024, full-time since 2025'
                  ],
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: FaAward,
                  title: 'Credentials & Certifications',
                  items: [
                    'New York Licensed Property & Casualty Insurance Broker',
                    'New York Licensed Life, Accident & Health Insurance Broker',
                    'National media recognition for entrepreneurial projects',
                    'Winner of startup pitch competitions'
                  ],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: FaLightbulb,
                  title: 'Areas of Expertise',
                  items: [
                    'Financial Expertise & Strategic Consulting',
                    'Insurance Solutions & Risk Management',
                    'Business Systems & Process Improvement',
                    'Tax Planning & Accounting Services'
                  ],
                  color: 'from-orange-500 to-red-500'
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <section.icon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy-900 mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CMO Section */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-12 items-start">
                {/* Photo Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-2"
                >
                  <div className="relative">
                    {/* CMO photo */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src={cmoImage.src} 
                        alt="Jessie Gwilt - Chief Marketing Officer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"></div>
                  </div>
                </motion.div>

                {/* Bio Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-3"
                >
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">Jessie Gwilt</h2>
                    <p className="text-2xl text-pink-600 font-semibold mb-4">Chief Marketing Officer</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-8">
                      <FaQuoteLeft className="text-pink-500 text-3xl mb-4" />
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        "Building brands that meaningfully enhance lives—combining big-picture strategy with authentic human connection."
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-navy-900 mb-4">About Jessie Gwilt</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A Los Angeles native who has proudly called New York City home for nearly a decade, <strong>Jessie Gwilt</strong> holds degrees in Advertising and Political Science from Syracuse University. She has built a dynamic career in Advertising & Marketing spanning more than ten years, leading high-impact initiatives across CPG, pharma-adjacent brands, B2B organizations, and nonprofits—delivering thoughtful strategy, strong execution, and measurable results.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Throughout her career, Jessie has successfully managed a wide range of initiatives, from supporting established brands with complex stakeholder needs to helping emerging businesses define their voice and scale with intention. She is known for her versatility, steady leadership, and ability to move projects forward with clarity and purpose.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Outside of work, Jessie is a self-proclaimed "crazy dog mom" to her energetic six-year-old Havanese–Cavalier King Charles mix, who keeps life full of motion, personality, and joy.
                    </p>

                    <div className="space-y-4 mb-8">
                      {[
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
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Philosophy */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Vision & <span className="gradient-text">Philosophy</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4">Vision for MRECAI</h3>
                  <p className="text-lg leading-relaxed opacity-95 mb-4">
                    To build the most trusted and innovative tax, insurance, and accounting firm, recognized for
                    transforming businesses and protecting families through technology, expertise, and 
                    unwavering commitment to client success.
                  </p>
                  <p className="text-lg leading-relaxed opacity-95">
                    By 2030, we aim to serve over 1,000 clients, expand our service offerings, and become
                    the go-to partner for businesses seeking expert guidance and lasting protection.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4">Personal Philosophy</h3>
                  <p className="text-lg leading-relaxed opacity-95 mb-4">
                    "Success is not just about achieving goals—it's about building relationships, creating 
                    value, and making a positive impact on the lives of those we serve."
                  </p>
                  <p className="text-lg leading-relaxed opacity-95">
                    I believe in leading with integrity, embracing innovation, and never compromising on 
                    quality. Every client interaction is an opportunity to exceed expectations and build 
                    lasting trust.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Core Leadership Principles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Client-First Mindset', description: 'Every decision is made with client success in mind' },
                    { title: 'Continuous Innovation', description: 'Always seeking better ways to serve and deliver value' },
                    { title: 'Transparent Communication', description: 'Honesty and clarity in all interactions' }
                  ].map((principle, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <h4 className="font-bold text-navy-900 mb-2">{principle.title}</h4>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTO Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-12 items-start">
                {/* Photo Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-2"
                >
                  <div className="relative">
                    {/* CTO photo */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src={ctoImage.src} 
                        alt="Wajid Ali Shah - Chief Technology Officer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Contact Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-8 bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 text-white shadow-xl"
                  >
                    <h3 className="text-xl font-bold mb-4">NovaEdge Solutions</h3>
                    <div className="space-y-3">
                      <a href="https://www.upwork.com/agencies/1913615184399103598/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-purple-300 transition-colors">
                        <SiUpwork className="text-purple-400" />
                        <span>Visit NovaEdge Solutions</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Bio Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:col-span-3"
                >
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">Wajid Ali Shah</h2>
                    <p className="text-2xl text-purple-600 font-semibold mb-4">Chief Technology Officer</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
                      <FaQuoteLeft className="text-purple-500 text-3xl mb-4" />
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        "Technology should empower businesses, not complicate them. We build reliable systems that work seamlessly behind the scenes."
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-navy-900 mb-4">About Wajid Ali Shah</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      With 15 years of software engineering experience, <strong>Wajid Ali Shah</strong> serves as the Chief Technology Officer of MRECAI and CEO of NovaEdge Solutions. His expertise spans web, desktop, and mobile application development—delivering the dependable infrastructure that keeps MRECAI's client service running smoothly.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Throughout his career, Wajid has architected comprehensive technology solutions across diverse industries, from startups to established enterprises. He specializes in transforming complex business challenges into elegant, efficient systems that drive measurable results and operational excellence.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      At MRECAI, Wajid leads the internal platforms and infrastructure that support our consulting, tax, and insurance teams—so every client benefits from fast, secure, and dependable service.
                    </p>

                    <div className="space-y-4 mb-8">
                      {[
                        'CTO of MRECAI',
                        'CEO of NovaEdge Solutions',
                        '15 years of software engineering experience',
                        'Expert in web, desktop, and mobile app development',
                        'Specializes in secure, scalable business systems',
                        'Leads MRECAI\'s internal platforms and infrastructure',
                        'Architect of enterprise-grade technology solutions'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
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
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-200 mb-8">
                I'd love to hear about your goals and discuss how we can help you achieve them
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Schedule a Meeting
                </Link>
                <a
                  href="mailto:Matthew@mrecai.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  <FaEnvelope className="mr-2" />
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutFounder;


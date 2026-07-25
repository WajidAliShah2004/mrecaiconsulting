'use client';

import SEO from '../components/common/SEO';
import { PageHero } from '../components/common';
import { serviceSchemas, breadcrumbSchema } from '../utils/schemas';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight, FaStar, FaUsers, FaPhone, FaRocket, FaCalendarAlt, FaBriefcase, FaMobileAlt } from 'react-icons/fa';
import { SERVICES_EXPANDED } from '../utils/constants';
import { useState } from 'react';

const Services = () => {
  const [, setActiveService] = useState<number | null>(null);
  // Track active service for hover effects

  return (
    <>
      <SEO
        title="Tax, Insurance & Accounting Services | MRECAI"
        description="Expert strategic tax planning and preparation, insurance and risk management, bookkeeping and accounting, and wealth planning. 180+ successful projects delivered."
        canonical="/services"
        keywords="tax consulting services, tax planning services, tax preparation, insurance consulting, risk management, bookkeeping and accounting, tax consultant NYC"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            serviceSchemas.taxAccounting,
            serviceSchemas.insurance,
            serviceSchemas.bookkeepingAccounting,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
            ]),
          ],
        }}
      />

      <div>
        {/* Hero Section - Matching Industries Page Style */}
        <section className="relative pt-40 md:pt-44 pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-navy-900 to-navy-900"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent"></div>
            
            {/* Animated Grid Pattern */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 168, 232, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 168, 232, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />

            {/* Glowing Orbs */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2
              }}
            />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Tax, Insurance & Accounting Solutions</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Keep more of what you earn and protect what you have built. Strategic tax planning, comprehensive insurance coverage, and expert bookkeeping and accounting under one roof.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid - Redesigned */}
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tax, Insurance & <span className="gradient-text">Accounting</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three integrated services under one roof — proactive tax strategy, comprehensive insurance & risk architecture, and full-cycle bookkeeping and accounting
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {SERVICES_EXPANDED.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onHoverStart={() => setActiveService(index)}
                  onHoverEnd={() => setActiveService(null)}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600"></div>

                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-8">
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-6">
                      <motion.div
                        className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="text-3xl text-primary-600" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3 flex items-center">
                        <span className="w-1 h-5 bg-primary-500 rounded-full mr-2"></span>
                        Key Features
                      </h4>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                            className="flex items-start group/item"
                          >
                            <FaCheck className="text-primary-500 mr-3 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                      <Link
                        href={service.link || '/book-now'}
                        className="flex-1 inline-flex items-center justify-center whitespace-nowrap px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg group/btn"
                      >
                        <FaArrowRight className="mr-2 flex-shrink-0" />
                        <span>Learn More</span>
                      </Link>
                      <Link
                        href="/book-now"
                        className="flex-1 inline-flex items-center justify-center whitespace-nowrap px-4 py-3 border-2 border-primary-500 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all"
                      >
                        <FaCalendarAlt className="mr-2 flex-shrink-0" />
                        Book Now
                      </Link>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>

            {/* Advanced Tax Strategy Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 max-w-6xl mx-auto"
            >
              <div className="bg-gradient-to-br from-purple-600 to-primary-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 md:p-12 text-white">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <FaRocket className="text-4xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Advanced Tax Strategy Services
                  </h3>
                  <p className="text-xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
                    Keep more of what you earn with proactive, year-round tax planning. From R&D credits and cost segregation to entity optimization, we engineer meaningful reductions in your effective tax rate.
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href="/services/tax-services"
                      className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      Explore Tax Services
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Services Grid */}
            {/* Why Choose Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <h3 className="text-3xl font-bold text-center mb-12">
                Why Choose <span className="gradient-text">MRECAI Services</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-purple-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">
                    Systems-First Approach
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We build repeatable systems and processes into every engagement, ensuring your business runs smoothly without depending on any one person.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-blue-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">
                    Integrated Expertise
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From tax and insurance to bookkeeping and accounting - we're your complete financial partner.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-green-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">
                    Results-Driven
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We focus on measurable outcomes - increased efficiency, higher conversions, and real ROI for your business.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven process ensures exceptional results every time
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We start with a free consultation to understand your needs and goals',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop a customized strategy tailored to your specific requirements',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute the plan with precision and ongoing communication',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  step: '04',
                  title: 'Support',
                  description: 'Provide continuous support and optimization for lasting success',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl font-bold text-white">{process.step}</span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>

                  {/* Connecting Arrow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 -right-4 text-primary-300">
                      <FaArrowRight className="text-2xl" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Client <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what our clients say about working with us
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: 'Marcus Johnson',
                  role: 'CEO, TechFlow Solutions',
                  text: 'MRECAI restructured our entity and tax strategy from the ground up. We saved over $40K in our first year, and their proactive planning means no more April surprises. Game-changing guidance!',
                  rating: 5
                },
                {
                  name: 'Rachel Kim',
                  role: 'Founder, Urban Wellness Studio',
                  text: 'From insurance coverage reviews to clean, real-time books, MRECAI delivered everything we needed. Their integrated approach saved us time and money. Couldn\'t be happier!',
                  rating: 5
                },
                {
                  name: 'James Martinez',
                  role: 'Director, Martinez Consulting Group',
                  text: 'The operational systems they implemented saved us 20+ hours per week. Plus their tax strategy uncovered savings we didn\'t know existed. True partners who understand business!',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-primary-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Redesigned */}
        <section className="relative section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.4) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Schedule a free consultation to discuss your business needs and discover how we can help
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/service-bundles"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  >
                    View Service Bundles
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/book-now"
                    className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  >
                    Schedule Free Consultation
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:929-702-2818"
                    className="inline-flex items-center px-8 py-4 border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white hover:text-navy-900 transition-all font-bold"
                  >
                    <FaPhone className="mr-3" />
                    Call: 929-702-2818
                  </a>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-primary-400" />
                  <span className="text-gray-300">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-primary-400" />
                  <span className="text-gray-300">No Commitment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-primary-400" />
                  <span className="text-gray-300">Expert Guidance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaPhone, FaEnvelope, FaBullseye, FaRocket, FaBriefcase, FaCheck } from 'react-icons/fa';
import { SERVICES, REASONS_TO_CHOOSE, COMPANY_INFO } from '../utils/constants';
import SEO from '../components/common/SEO';
import { organizationSchema, localBusinessSchema, websiteSchema, personSchema } from '../utils/schemas';
import { In60Seconds, HomeFAQ, Partners, ExecutiveLeadership, HomeHero, TechnologyAdvantage } from '../components/home';
import { ProcessFlow } from '../components/common';

const Home = () => {
  // Check for reduced motion preference (guarded: window is unavailable during static prerender)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <SEO
        title="Tax, Insurance & Finance Consulting | MRECAI"
        description="Premier tax, insurance, and finance consulting firm. Strategic tax planning and preparation, insurance and risk management, and bookkeeping, accounting, and financial consulting. 180+ clients, 4.9/5 rating. Book your free consultation."
        canonical="/"
        keywords="tax consulting, tax planning, tax preparation, insurance consulting, risk management, finance consulting, bookkeeping, accounting services"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema,
            localBusinessSchema,
            websiteSchema,
            personSchema,
          ],
        }}
      />

      {/* Hero Section - Modern Animated Design */}
      <HomeHero />

      {/* NEW: Partner Verification Section */}
      <Partners />

      {/* Social Proof Bar - Enhanced with Magnetic Hover */}
      <section className="py-8 bg-white border-y border-gray-200 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-50 via-white to-primary-50"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ backgroundSize: '200% 100%' }}
        />

        <div className="container-custom relative z-10" >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="text-center cursor-default"
            >
              <motion.div
                className="text-3xl font-bold text-navy-900"
                animate={{
                  textShadow: [
                    '0 0 0px rgba(0, 168, 232, 0)',
                    '0 0 10px rgba(0, 168, 232, 0.3)',
                    '0 0 0px rgba(0, 168, 232, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                180+
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">Clients Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="text-center cursor-default"
            >
              <div className="text-3xl font-bold text-navy-900 flex items-center justify-center">
                4.9
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <FaStar className="text-yellow-400 ml-1 text-2xl" />
                </motion.div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Client Rating</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="text-center cursor-default"
            >
              <motion.div
                className="text-3xl font-bold text-navy-900"
                animate={{
                  color: ['#1E3A5F', '#00A8E8', '#1E3A5F'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                98%
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="text-center cursor-default"
            >
              <div className="text-3xl font-bold text-navy-900">15+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </motion.div>
          </div>
        </div >
      </section >

      {/* NEW: In 60 Seconds - Firm Overview Block */}
      <In60Seconds />

      {/* NEW: Process Flow (How It Works) */}
      <ProcessFlow />

      {/* NEW: MRE Advantage - Consolidated Section */}
      <TechnologyAdvantage />

      {/* NEW: Executive Leadership (Matthew R. Epstein) */}
      <ExecutiveLeadership />

      {/* Reasons to Choose Us - Enhanced 3D Card Effect */}
      <section className="section-padding bg-gray-50 relative overflow-hidden" >
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
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
            backgroundImage: `radial-gradient(circle, rgba(0, 168, 232, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="container-custom relative z-10" >
          <div className="text-center mb-12 space-y-4" data-aos="fade-up">
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose <span className="gradient-text">MRECAI</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your complete tax, insurance, and finance consulting partner
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REASONS_TO_CHOOSE.map((reason, index) => (
              <Link
                key={index}
                href={reason.link}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    rotateY: 5,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-primary-200 cursor-pointer overflow-hidden h-full"
                >
                  {/* Animated Gradient Background on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(0, 168, 232, 0)',
                        '0 0 0 2px rgba(0, 168, 232, 0.1)',
                        '0 0 0 0 rgba(0, 168, 232, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />

                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <reason.icon className="text-2xl text-primary-600" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold mb-2 text-navy-900 group-hover:text-primary-600 transition-colors relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  >
                    {reason.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  >
                    {reason.description}
                  </motion.p>

                  {/* Learn More Indicator with Arrow Animation */}
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all relative z-10">
                    <span>Learn More</span>
                    <motion.span
                      className="ml-1 inline-block"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div >
      </section >

      {/* Services Overview - Enhanced Card Flip Animation */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" >
        {/* Floating Shapes Background */}
        {
          [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-primary-500/5"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5
              }}
            />
          ))
        }

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 space-y-4" data-aos="fade-up">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
                What We Offer
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Comprehensive solutions tailored to your unique needs and goals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden cursor-pointer"
              >
                {/* Animated Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Pulsing Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(0, 168, 232, 0)',
                      '0 0 0 3px rgba(0, 168, 232, 0.1)',
                      '0 0 0 0 rgba(0, 168, 232, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />

                {/* Icon with Background */}
                <div className="relative mb-4">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center shadow-sm"
                    whileHover={{
                      rotate: 360,
                      scale: 1.15,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      <service.icon className="text-2xl text-primary-600" />
                    </motion.div>
                  </motion.div>

                  {/* Decorative Glow Element */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 bg-primary-500/10 rounded-full blur-lg"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </div>

                <h3 className="text-lg font-bold mb-2 text-navy-900 group-hover:text-primary-600 transition-colors relative z-10">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 mb-4 relative z-10">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + i * 0.05 }}
                    >
                      <FaCheck className="text-primary-500 mr-2 mt-1 flex-shrink-0 text-xs" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-2 transition-all relative z-10"
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </Link>

                {/* Corner Accent with Animation */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-full opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section >

      {/* Testimonials Preview - Enhanced 3D Cards */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden" >
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
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
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-primary-400/15 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 space-y-4" data-aos="fade-up">
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our <span className="text-primary-400">Clients Say</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real results from real businesses we've helped transform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Owner, Chen Dental Group",
                text: "MRECAI restructured our entity and built a proactive tax plan that saved us over $40,000 in the first year alone. They caught deductions and credits our old accountant never even mentioned.",
                result: "$40K+ first-year tax savings"
              },
              {
                name: "Michael Rodriguez",
                role: "Founder, Rodriguez Contracting",
                text: "Their insurance audit uncovered coverage gaps that could have sunk us, then they cut our premiums by nearly 30%. Workers comp audits are finally painless. A true partner in every sense.",
                result: "30% premium reduction"
              },
              {
                name: "Jennifer Park",
                role: "Owner, Park Design Studio",
                text: "From bookkeeping cleanup to tax planning and insurance - MRECAI handles it all. We finally have clean books, real cash flow visibility, and one accountable partner for everything.",
                result: "Complete financial clarity"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative bg-navy-800/50 backdrop-blur-sm p-6 rounded-2xl border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
              >
                {/* Animated Gradient Accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-t-2xl"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                />

                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(0, 168, 232, 0)',
                      '0 0 0 2px rgba(0, 168, 232, 0.2)',
                      '0 0 0 0 rgba(0, 168, 232, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3
                  }}
                >
                  <FaQuoteLeft className="text-primary-400 text-3xl mb-4" />
                </motion.div>

                <p className="text-gray-200 mb-4 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Result Badge with Pulse */}
                <motion.div
                  className="inline-block bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm font-bold mb-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4
                  }}
                >
                  {testimonial.result}
                </motion.div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + index * 0.05 }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <FaStar className="text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-primary-500/20 pt-4 relative z-10">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-primary-300">{testimonial.role}</p>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read More Success Stories
            </Link>
          </motion.div>
        </div>
      </section >

      {/* NEW: Homepage FAQ with Schema */}
      < HomeFAQ />

      {/* CTA Section - Redesigned */}
      <section className="relative section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden" >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20" >
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div >

        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" ></div >
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Content Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                {/* Heading */}
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Ready to <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Simplify</span> Your Business?
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Get your free consultation and discover how we can help you save on taxes, reduce risk, and scale faster
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link
                    href="/start-here"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl overflow-hidden shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 min-w-[240px]"
                  >
                    <span className="relative z-10 flex items-center">
                      🎯 Get Started
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>

                  <Link
                    href="/book-now"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-navy-900 bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 min-w-[240px]"
                  >
                    <span className="relative z-10 flex items-center">
                      Book Free Call
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                </motion.div>

                {/* Contact Option */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="pt-6"
                >
                  <p className="text-gray-300 mb-3">Or call us directly:</p>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <FaPhone className="mr-3" />
                    {COMPANY_INFO.phone}
                  </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FaCheck className="text-primary-400" />
                    <span className="text-sm">Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FaCheck className="text-primary-400" />
                    <span className="text-sm">No Obligation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FaCheck className="text-primary-400" />
                    <span className="text-sm">Same-Day Response</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section >
    </>
  );
};

export default Home;

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPalette, FaCheck, FaRocket, FaLightbulb, FaPencilRuler, FaImage, FaFileAlt, FaMobileAlt, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar } from '../../components/common';
import { serviceSchemas, faqSchema } from '../../utils/schemas';

const faqs = [
  {
    question: 'What graphic design services do you offer?',
    answer: 'We provide comprehensive graphic design services including logo design, brand identity, marketing materials, social media graphics, infographics, presentation design, and UI/UX design for websites and apps.',
  },
  {
    question: 'How long does a typical design project take?',
    answer: 'Timeline varies by project complexity. Logo design typically takes 1-2 weeks, while comprehensive brand identity projects may take 3-4 weeks. We provide detailed timelines during consultation.',
  },
  {
    question: 'Do you provide source files?',
    answer: 'Yes! You receive all final design files in multiple formats (AI, PSD, PDF, PNG, JPG) along with brand guidelines for consistent usage across all platforms.',
  },
  {
    question: 'Can you match our existing brand style?',
    answer: 'Absolutely. We can work within your existing brand guidelines or help refresh and modernize your visual identity while maintaining brand recognition.',
  },
  {
    question: 'Do you offer unlimited revisions?',
    answer: 'Our packages include a set number of revision rounds (typically 2-3) to ensure we nail your vision. Additional revisions can be added if needed.',
  },
];

const GraphicDesign = () => {
  return (
    <>
      <SEO
        title="Graphic Design Services | Logo, Branding & Marketing Design | MRECAI"
        description="Professional graphic design services including logo design, brand identity, marketing materials, social media graphics, and UI/UX design. Transform your visual presence with stunning designs."
        canonical="/services/graphic-design"
        keywords="graphic design services, logo design, brand identity, marketing design, social media graphics, UI UX design, visual branding NYC"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Graphic Design Services',
              provider: {
                '@type': 'Organization',
                name: 'MRECAI',
              },
              description: 'Professional graphic design services for businesses',
            },
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-44 pb-20 bg-gradient-to-br from-pink-900 via-purple-900 to-navy-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Design Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"
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

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-pink-300 hover:text-pink-200">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/services" className="text-pink-300 hover:text-pink-200">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-300">Graphic Design</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Graphic Design That <span className="text-pink-400">Captivates & Converts</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional graphic design services that elevate your brand. From <strong>logo design and brand identity</strong> to <strong>marketing materials and social media graphics</strong>, we create visuals that make your business stand out.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaCalendarAlt className="mr-2" />
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-navy-900 border-t border-white/5">
        <TrustBar />
      </div>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Our Design <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive graphic design solutions for every aspect of your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaPalette,
                title: 'Logo & Brand Identity',
                description: 'Custom logo design and complete brand identity systems including color palettes, typography, and brand guidelines.',
                color: 'from-pink-500 to-pink-600',
                features: ['Custom logo design', 'Brand style guide', 'Color palette', 'Typography system']
              },
              {
                icon: FaFileAlt,
                title: 'Marketing Materials',
                description: 'Professional print and digital marketing collateral including brochures, flyers, business cards, and presentations.',
                color: 'from-purple-500 to-purple-600',
                features: ['Brochures & flyers', 'Business cards', 'Presentations', 'Print materials']
              },
              {
                icon: FaImage,
                title: 'Social Media Graphics',
                description: 'Eye-catching social media posts, cover images, stories, and ad creatives optimized for each platform.',
                color: 'from-blue-500 to-blue-600',
                features: ['Post templates', 'Story graphics', 'Ad creatives', 'Profile images']
              },
              {
                icon: FaMobileAlt,
                title: 'UI/UX Design',
                description: 'User interface and experience design for websites, mobile apps, and digital products that users love.',
                color: 'from-green-500 to-green-600',
                features: ['Website UI design', 'App interfaces', 'User flows', 'Wireframes']
              },
              {
                icon: FaPencilRuler,
                title: 'Infographics & Data Viz',
                description: 'Transform complex data into beautiful, easy-to-understand visual stories and infographics.',
                color: 'from-orange-500 to-orange-600',
                features: ['Custom infographics', 'Data visualization', 'Charts & graphs', 'Visual reports']
              },
              {
                icon: FaLightbulb,
                title: 'Brand Refresh',
                description: 'Modernize your existing brand with a strategic refresh that maintains recognition while updating your look.',
                color: 'from-yellow-500 to-yellow-600',
                features: ['Brand audit', 'Visual refresh', 'Style updates', 'Rollout strategy']
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-3xl text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Our Design <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven workflow that delivers exceptional results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your brand, goals, target audience, and design preferences',
                color: 'from-pink-500 to-pink-600'
              },
              {
                step: '02',
                title: 'Concept',
                description: 'Our designers create initial concepts based on your brief and feedback',
                color: 'from-purple-500 to-purple-600'
              },
              {
                step: '03',
                title: 'Refinement',
                description: 'We refine the chosen direction with your input until it\'s perfect',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'You receive final files in all formats plus brand guidelines',
                color: 'from-green-500 to-green-600'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl font-bold text-white">{process.step}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 shadow-md"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-pink-900 via-purple-900 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Visual Brand?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let's create stunning designs that make your business unforgettable
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <FaCalendarAlt className="mr-2" />
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
              >
                Get a Quote
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GraphicDesign;

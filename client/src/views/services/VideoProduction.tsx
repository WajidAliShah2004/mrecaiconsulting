'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaVideo, FaCheck, FaFilm, FaPlay, FaEdit, FaCamera, FaMagic, FaChartLine, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { TrustBar } from '../../components/common';
import { faqSchema } from '../../utils/schemas';

const faqs = [
  {
    question: 'What types of videos do you produce?',
    answer: 'We create promotional videos, explainer videos, social media content, product demos, testimonial videos, event coverage, corporate videos, and animated motion graphics.',
  },
  {
    question: 'How long does video production take?',
    answer: 'Timeline varies by project scope. Simple social media videos can be completed in 3-5 days, while comprehensive promotional videos typically take 2-3 weeks from concept to final delivery.',
  },
  {
    question: 'Do you provide scriptwriting services?',
    answer: 'Yes! Our team includes experienced scriptwriters who can craft compelling narratives that resonate with your target audience and achieve your marketing goals.',
  },
  {
    question: 'Can you edit existing footage?',
    answer: 'Absolutely. We offer professional video editing services for your existing footage, including color correction, audio enhancement, motion graphics, and post-production effects.',
  },
  {
    question: 'What formats do you deliver videos in?',
    answer: 'We deliver videos optimized for your specific needs - whether it\'s for social media (Instagram, TikTok, YouTube), websites, presentations, or broadcast. All major formats supported.',
  },
];

const VideoProduction = () => {
  return (
    <>
      <SEO
        title="Video Production & Editing Services | Professional Video Content | MRECAI"
        description="Professional video production and editing services including promotional videos, social media content, explainer videos, and motion graphics. Transform your message with compelling video content."
        canonical="/services/video-production"
        keywords="video production services, video editing, promotional videos, social media video content, explainer videos, motion graphics, corporate video production NYC"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Video Production & Editing Services',
              provider: {
                '@type': 'Organization',
                name: 'MRECAI',
              },
              description: 'Professional video production and editing services for businesses',
            },
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-44 pb-20 bg-gradient-to-br from-red-900 via-orange-900 to-navy-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Video Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-red-500/20 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/20 rounded-full filter blur-3xl"
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
              <Link href="/" className="text-red-300 hover:text-red-200">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/services" className="text-red-300 hover:text-red-200">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-300">Video Production</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Video Production That <span className="text-red-400">Tells Your Story</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional video production and editing services that bring your brand to life. From <strong>promotional videos and social media content</strong> to <strong>explainer videos and motion graphics</strong>, we create compelling visual stories that engage and convert.
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
              Our Video <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive video production and editing solutions for every platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaVideo,
                title: 'Promotional Videos',
                description: 'High-impact promotional videos that showcase your products, services, and brand story to drive conversions.',
                color: 'from-red-500 to-red-600',
                features: ['Brand storytelling', 'Product showcases', 'Service highlights', 'Call-to-action focus']
              },
              {
                icon: FaPlay,
                title: 'Social Media Content',
                description: 'Engaging short-form videos optimized for Instagram, TikTok, YouTube Shorts, and other social platforms.',
                color: 'from-pink-500 to-pink-600',
                features: ['Platform optimization', 'Trending formats', 'Vertical videos', 'Quick turnaround']
              },
              {
                icon: FaFilm,
                title: 'Explainer Videos',
                description: 'Clear, concise explainer videos that simplify complex concepts and educate your audience effectively.',
                color: 'from-blue-500 to-blue-600',
                features: ['Animated explainers', 'Whiteboard videos', 'Screen recordings', 'Voiceover narration']
              },
              {
                icon: FaEdit,
                title: 'Video Editing',
                description: 'Professional editing services including color grading, audio enhancement, transitions, and effects.',
                color: 'from-purple-500 to-purple-600',
                features: ['Color correction', 'Audio mixing', 'Motion graphics', 'Post-production']
              },
              {
                icon: FaMagic,
                title: 'Motion Graphics',
                description: 'Eye-catching animated graphics, text animations, and visual effects that enhance your video content.',
                color: 'from-yellow-500 to-orange-500',
                features: ['Logo animations', 'Text effects', 'Transitions', 'Visual effects']
              },
              {
                icon: FaCamera,
                title: 'Event Coverage',
                description: 'Professional coverage of your corporate events, conferences, product launches, and special occasions.',
                color: 'from-green-500 to-green-600',
                features: ['Multi-camera setup', 'Live streaming', 'Highlight reels', 'Full event coverage']
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

      {/* Why Video Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Why Video <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Video is the most engaging content format across all platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                stat: '80%',
                label: 'of consumers prefer video over text',
                icon: FaChartLine,
                color: 'from-red-500 to-red-600'
              },
              {
                stat: '84%',
                label: 'say video convinced them to buy',
                icon: FaPlay,
                color: 'from-orange-500 to-orange-600'
              },
              {
                stat: '95%',
                label: 'message retention with video vs 10% with text',
                icon: FaVideo,
                color: 'from-yellow-500 to-yellow-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="text-2xl text-white" />
                </motion.div>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.stat}
                </div>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Our Production <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to final delivery, we handle every aspect of video production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Concept',
                description: 'Define goals, audience, and creative direction',
                color: 'from-red-500 to-red-600'
              },
              {
                step: '02',
                title: 'Script',
                description: 'Craft compelling narrative and storyboard',
                color: 'from-orange-500 to-orange-600'
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional filming or animation creation',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                step: '04',
                title: 'Editing',
                description: 'Post-production, effects, and refinement',
                color: 'from-green-500 to-green-600'
              },
              {
                step: '05',
                title: 'Delivery',
                description: 'Final video optimized for your platforms',
                color: 'from-blue-500 to-blue-600'
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
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </motion.div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Questions</span>
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
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-md"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-red-900 via-orange-900 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.4) 1px, transparent 0)`,
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
              Ready to Create Compelling Video Content?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let's bring your story to life with professional video production
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

export default VideoProduction;

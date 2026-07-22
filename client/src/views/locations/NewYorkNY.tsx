'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { localBusinessSchema, breadcrumbSchema } from '../../utils/schemas';
import { TrustBar, ProcessFlow } from '../../components/common';

const NewYorkNY = () => {
  const services = [
    {
      title: 'Tax Preparation in New York, NY',
      description: 'Expert tax preparation for NYC residents and businesses. Individual returns, business taxes, and multi-state filings.',
      link: '/services/tax-preparation',
    },
    {
      title: 'Bookkeeping Services in Manhattan',
      description: 'Monthly bookkeeping, financial reporting, and accounting support for Manhattan businesses.',
      link: '/services/bookkeeping-accounting',
    },
    {
      title: 'Business Consulting in NYC',
      description: 'Strategic business consulting for New York City entrepreneurs and growing companies.',
      link: '/services/business-consulting',
    },
    {
      title: 'Insurance Services in New York',
      description: 'Commercial and personal insurance solutions for NYC businesses and families.',
      link: '/services/insurance',
    },
    {
      title: 'AI Automation in Manhattan',
      description: 'AI implementation and business automation for Manhattan-based companies.',
      link: '/services/ai-automation',
    },
    {
      title: 'Tax Strategy for NYC Businesses',
      description: 'Proactive tax planning and strategy for New York City business owners.',
      link: '/services/tax-strategy',
    },
  ];

  return (
    <>
      <SEO
        title="MRECAI | New York, NY | Manhattan Business Services"
        description="Local business consulting, tax preparation, insurance, and AI automation services in New York, NY. Serving Manhattan, Upper East Side, and NYC metro area. Call (929) 702-2818."
        canonical="/locations/new-york-ny"
        keywords="business consulting NYC, tax preparation New York, Manhattan bookkeeping, insurance services NYC, AI automation Manhattan, New York business services"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            localBusinessSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Locations', url: '/locations/new-york-ny' },
              { name: 'New York, NY', url: '/locations/new-york-ny' },
            ]),
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-primary-300 hover:text-primary-200">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-300">New York, NY</span>
            </nav>

            <div className="flex items-center space-x-3 mb-6">
              <FaMapMarkerAlt className="text-primary-400 text-3xl" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Business Services in <span className="text-primary-400">New York, NY</span>
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                <strong>Local expertise for NYC businesses and families.</strong> MRECAI provides comprehensive business consulting, tax preparation, insurance, and AI automation services to clients throughout Manhattan, the Upper East Side, and the greater New York City metro area.
              </p>
            </div>

            {/* Location Info */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <FaMapMarkerAlt className="text-primary-400 text-2xl mb-2" />
                <div className="text-sm text-gray-300">Our Office</div>
                <div className="font-semibold">11 W Mill Dr</div>
                <div className="text-sm">Great Neck, NY 11021</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <FaPhone className="text-primary-400 text-2xl mb-2" />
                <div className="text-sm text-gray-300">Call Us</div>
                <a href="tel:929-702-2818" className="font-semibold hover:text-primary-300 transition-colors">
                  (929) 702-2818
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <FaEnvelope className="text-primary-400 text-2xl mb-2" />
                <div className="text-sm text-gray-300">Email Us</div>
                <a href="mailto:Matthew@MRECAI.com" className="font-semibold hover:text-primary-300 transition-colors text-sm">
                  Matthew@MRECAI.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                Get Directions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services in NYC */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Services in <span className="text-primary-600">New York City</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions for Manhattan businesses, Upper East Side residents, and NYC metro area clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.link} className="block h-full">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200 h-full">
                    <div className="flex items-start space-x-3 mb-3">
                      <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-primary-600 font-semibold">
                      Learn More <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Why Choose a <span className="text-primary-600">Local NYC Partner</span>?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FaBuilding,
                  title: 'NYC Tax Expertise',
                  description: 'Deep understanding of New York State and NYC tax regulations, including city-specific deductions and credits.',
                },
                {
                  icon: FaMapMarkerAlt,
                  title: 'Local Market Knowledge',
                  description: 'Familiar with Manhattan business landscape, Upper East Side demographics, and NYC industry trends.',
                },
                {
                  icon: FaCheckCircle,
                  title: 'In-Person Meetings Available',
                  description: 'Convenient Great Neck office location with flexible meeting options for NYC clients.',
                },
                {
                  icon: FaPhone,
                  title: 'Same-Day Response',
                  description: 'Quick response times for urgent matters affecting your NYC business or personal finances.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <item.icon className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <ProcessFlow />

      {/* Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Serving the <span className="text-primary-600">NYC Metro Area</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              While our office is located in Great Neck, we proudly serve clients throughout:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {[
                'Manhattan',
                'Upper East Side',
                'Upper West Side',
                'Midtown',
                'Downtown Manhattan',
                'Brooklyn',
                'Queens',
                'Bronx',
                'Staten Island',
                'Long Island',
                'Westchester County',
                'New Jersey (select areas)',
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-8 italic">
              We also serve clients nationwide through virtual consultations and remote services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with a Local NYC Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free consultation at our Great Neck office or schedule a virtual meeting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:929-702-2818"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                <FaPhone className="mr-2" />
                Call: (929) 702-2818
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NewYorkNY;


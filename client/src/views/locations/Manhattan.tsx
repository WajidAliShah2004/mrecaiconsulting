'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaBuilding, FaCheckCircle, FaArrowRight, FaSubway } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { localBusinessSchema, breadcrumbSchema } from '../../utils/schemas';
import { TrustBar } from '../../components/common';

const Manhattan = () => {
  return (
    <>
      <SEO
        title="Business Services in Manhattan | MRECAI"
        description="Professional business consulting, bookkeeping, tax preparation, and insurance services in Manhattan, NYC. Great Neck office. Call (929) 702-2818 for a free consultation."
        canonical="/locations/manhattan"
        keywords="Manhattan business consulting, bookkeeping Manhattan, tax preparation Manhattan, insurance services Manhattan, Upper East Side business services"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            localBusinessSchema,
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Locations', url: '/locations/new-york-ny' },
              { name: 'Manhattan', url: '/locations/manhattan' },
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
              <Link href="/locations/new-york-ny" className="text-primary-300 hover:text-primary-200">New York, NY</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-300">Manhattan</span>
            </nav>

            <div className="flex items-center space-x-3 mb-6">
              <FaBuilding className="text-primary-400 text-3xl" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-primary-400">Manhattan</span> Business Services
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                <strong>Your Manhattan business partner for consulting, tax, accounting, and insurance.</strong> Located in Great Neck, we serve businesses and professionals throughout Manhattan with comprehensive consulting services.
              </p>
            </div>

            {/* Quick Access */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <FaMapMarkerAlt className="text-primary-400 text-2xl mb-2" />
                <div className="text-sm text-gray-300">Great Neck Office</div>
                <div className="font-semibold">11 W Mill Dr</div>
                <div className="text-sm">Great Neck, NY 11021</div>
                <div className="flex items-center space-x-2 mt-2 text-sm text-primary-300">
                  <FaSubway />
                  <span>Near Great Neck Station (LIRR)</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <FaPhone className="text-primary-400 text-2xl mb-2" />
                <div className="text-sm text-gray-300">Schedule a Meeting</div>
                <a href="tel:929-702-2818" className="font-semibold text-lg hover:text-primary-300 transition-colors">
                  (929) 702-2818
                </a>
                <div className="text-sm text-gray-300 mt-2">
                  In-person or virtual consultations available
                </div>
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
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Manhattan-Specific Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Services for <span className="text-primary-600">Manhattan Businesses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for Manhattan's unique business environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Bookkeeping for Manhattan Businesses',
                description: 'Monthly bookkeeping, financial reporting, and cash flow management for Manhattan-based companies.',
                link: '/services/bookkeeping-accounting',
              },
              {
                title: 'NYC Tax Preparation',
                description: 'Expert tax preparation including NYC-specific deductions, credits, and multi-state considerations.',
                link: '/services/tax-preparation',
              },
              {
                title: 'Manhattan Business Insurance',
                description: 'Commercial insurance solutions tailored to Manhattan business risks and requirements.',
                link: '/services/insurance',
              },
              {
                title: 'Risk & Insurance Reviews',
                description: 'Coverage audits across GL, E&O, and cyber liability to protect Manhattan businesses from costly gaps.',
                link: '/services/risk-architecture',
              },
              {
                title: 'Strategic Tax Planning',
                description: 'Proactive tax strategy for Manhattan business owners and high-income professionals.',
                link: '/services/tax-strategy',
              },
              {
                title: 'Business Consulting',
                description: 'Strategic guidance for Manhattan startups, growing businesses, and established firms.',
                link: '/services/business-consulting',
              },
            ].map((service, index) => (
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
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors mb-3">
                      {service.title}
                    </h3>
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

      {/* Manhattan Neighborhoods */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
              Serving All <span className="text-primary-600">Manhattan Neighborhoods</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                'Upper East Side',
                'Upper West Side',
                'Midtown East',
                'Midtown West',
                'Chelsea',
                'Greenwich Village',
                'SoHo',
                'Tribeca',
                'Financial District',
                'Battery Park City',
                'Murray Hill',
                'Gramercy',
                'East Village',
                'West Village',
                'Hell\'s Kitchen',
                'Harlem',
              ].map((neighborhood, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700 bg-white p-3 rounded-lg">
                  <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                  <span className="text-sm">{neighborhood}</span>
                </div>
              ))}
            </div>
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
              Let's Discuss Your Manhattan Business Needs
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation at our Great Neck office or meet virtually.
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
                (929) 702-2818
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Manhattan;


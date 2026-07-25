'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaStar, FaShieldAlt, FaChartLine, FaCog } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import CTAButton from '../components/common/CTAButton';

interface ServiceBundle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  services: string[];
  benefits: string[];
  idealFor: string[];
  pricing: string;
  popular?: boolean;
  route: string;
}

const bundles: ServiceBundle[] = [
  {
    id: 'foundation',
    name: 'Foundation Package',
    tagline: 'Get Your Business Organized',
    description: 'Perfect for businesses that need to clean up their books, organize their finances, and establish a solid foundation for growth.',
    icon: FaCog,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    services: [
      'Finance Consulting',
      'Tax Preparation',
      'Financial Reporting & Insights',
      'Systems & Process Setup',
    ],
    benefits: [
      'Clean, accurate financial records',
      'Tax compliance and preparation',
      'Real-time financial reporting',
      'Organized systems and processes',
    ],
    idealFor: [
      'New businesses (0-2 years)',
      'Businesses with messy books',
      'Companies transitioning from DIY accounting',
      'Startups needing structure',
    ],
    pricing: 'Starting at $500/month',
    route: '/services/business-consulting',
  },
  {
    id: 'tax-optimization',
    name: 'Tax Optimization Package',
    tagline: 'Minimize Your Tax Burden',
    description: 'Comprehensive tax strategy and planning to legally reduce your tax liability and maximize savings through proactive planning.',
    icon: FaChartLine,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    services: [
      'Strategic Tax Planning',
      'Tax Strategy & Consulting',
      'Tax Preparation',
      'Entity Structure Optimization',
    ],
    benefits: [
      'Significant tax savings (avg. $15K-$50K/year)',
      'Proactive tax planning year-round',
      'Entity structure optimization',
      'R&D credits and deductions',
    ],
    idealFor: [
      'High-income earners ($200K+)',
      'Growing businesses',
      'Real estate investors',
      'Business owners with complex taxes',
    ],
    pricing: 'Starting at $750/month',
    popular: true,
    route: '/services/tax-services',
  },
  {
    id: 'risk-protection',
    name: 'Risk Protection Package',
    tagline: 'Protect Your Business & Assets',
    description: 'Comprehensive insurance and risk management to protect your business from liability, cyber threats, and unexpected events.',
    icon: FaShieldAlt,
    color: 'red',
    gradient: 'from-red-500 to-red-600',
    services: [
      'Risk Architecture',
      'Business Insurance',
      'Cyber Liability Coverage',
      'Compliance Guidance',
    ],
    benefits: [
      'Complete risk assessment',
      'Proper insurance coverage',
      'Protection from lawsuits',
      'Peace of mind',
    ],
    idealFor: [
      'Service-based businesses',
      'Companies with employees',
      'Businesses handling sensitive data',
      'High-liability industries',
    ],
    pricing: 'Custom pricing based on coverage',
    route: '/services/risk-architecture',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Business Package',
    tagline: 'Complete Financial Management',
    description: 'Our most complete offering - integrated tax, insurance, and finance consulting solutions working together seamlessly.',
    icon: FaStar,
    color: 'gold',
    gradient: 'from-yellow-500 to-orange-500',
    services: [
      'All Foundation Services',
      'All Tax Optimization Services',
      'All Risk Protection Services',
    ],
    benefits: [
      'One integrated team',
      'Coordinated strategy across all areas',
      'Maximum efficiency and savings',
      'Priority support',
    ],
    idealFor: [
      'Established businesses ($1M+ revenue)',
      'Companies wanting full-service support',
      'Businesses tired of managing multiple vendors',
      'Entrepreneurs who value their time',
    ],
    pricing: 'Custom pricing - Contact us',
    popular: true,
    route: '/services',
  },
];

const ServiceBundles = () => {
  return (
    <>
      <SEO
        title="Service Bundles - Packaged Solutions | MRECAI"
        description="Choose from our pre-packaged service bundles designed for different business needs. Foundation, Tax Optimization, Risk Protection, or Comprehensive packages."
        canonical="/service-bundles"
        keywords="service packages, business bundles, tax and accounting packages, insurance bundles"
      />

      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Service Bundles
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Pre-packaged solutions designed for different business needs. Choose the bundle that fits your stage and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton type="startHere" size="lg" />
                <CTAButton type="book" size="lg" variant="outline" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bundles Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bundles.map((bundle, index) => (
                <motion.div
                  key={bundle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                    bundle.popular ? 'ring-4 ring-primary-500' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {bundle.popular && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className={`bg-gradient-to-r ${bundle.gradient} p-8 text-white`}>
                    <bundle.icon className="text-5xl mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{bundle.name}</h3>
                    <p className="text-lg opacity-90">{bundle.tagline}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{bundle.description}</p>

                    {/* Pricing */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <p className="text-2xl font-bold text-navy-900">{bundle.pricing}</p>
                    </div>

                    {/* Services Included */}
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3">Services Included:</h4>
                      <ul className="space-y-2">
                        {bundle.services.map((service, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {bundle.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <FaCheckCircle className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3">Ideal For:</h4>
                      <ul className="space-y-2">
                        {bundle.idealFor.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href={bundle.route}
                      className={`block w-full text-center bg-gradient-to-r ${bundle.gradient} text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all transform hover:scale-105`}
                    >
                      Learn More <FaArrowRight className="inline ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Not Sure Which Bundle is Right for You?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Take our quick 4-question quiz to get a personalized recommendation, or book a free consultation to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton type="startHere" size="lg" />
                <CTAButton type="book" size="lg" variant="secondary" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Bundles Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                Why Choose a Service Bundle?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Cost Savings',
                    description: 'Bundled services cost 15-25% less than purchasing individually.',
                  },
                  {
                    title: 'Integrated Strategy',
                    description: 'All services work together seamlessly with one coordinated plan.',
                  },
                  {
                    title: 'Simplified Management',
                    description: 'One team, one point of contact, one invoice. No vendor juggling.',
                  },
                  {
                    title: 'Priority Support',
                    description: 'Bundle clients get priority scheduling and dedicated support.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Can I customize a bundle?',
                  a: 'Absolutely! Our bundles are starting points. We can add or remove services to fit your exact needs.',
                },
                {
                  q: 'What if I need to upgrade or downgrade?',
                  a: 'You can change bundles anytime. We\'ll prorate the difference and adjust your services accordingly.',
                },
                {
                  q: 'Do I have to commit long-term?',
                  a: 'No long-term contracts required. Most clients stay because they love the results, not because they\'re locked in.',
                },
                {
                  q: 'How do I get started?',
                  a: 'Book a free consultation or take our "Start Here" quiz. We\'ll recommend the best bundle and get you set up within days.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Choose your bundle and let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-primary-600 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Book Free Consultation
                  <FaArrowRight className="ml-3" />
                </Link>
                <Link
                  href="/start-here"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all"
                >
                  Take the Quiz
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceBundles;

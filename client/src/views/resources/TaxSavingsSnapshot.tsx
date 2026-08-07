'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaCalculator, FaCheckCircle, FaDownload, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import { breadcrumbSchema } from '../../utils/schemas';

const TaxSavingsSnapshot = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    annualRevenue: '',
    currentEntity: '',
    employees: '',
    concerns: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (concern: string) => {
    setFormData(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead-magnets/tax-savings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      // In production, this would trigger email with personalized report
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Free Tax Savings Snapshot | Identify Your Opportunities | MRECAI"
        description="Get a personalized tax savings snapshot in 10 minutes. Discover potential deductions, credits, and strategies to reduce your tax burden. Free assessment from MRECAI."
        canonical="/resources/tax-savings-snapshot"
        keywords="tax savings calculator, tax deduction finder, tax planning assessment, business tax savings, tax strategy consultation"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources' },
              { name: 'Tax Savings Snapshot', url: '/resources/tax-savings-snapshot' },
            ]),
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-semibold mb-6">
              <FaCalculator />
              <span>FREE Tax Savings Assessment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your <span className="text-primary-400">Hidden Tax Savings</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Get a personalized Tax Savings Snapshot in just 10 minutes. We'll identify potential deductions, credits, and strategies you might be missing.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: FaCalculator, text: '10-Minute Assessment' },
                { icon: FaCheckCircle, text: 'Personalized Report' },
                { icon: FaDownload, text: 'Instant Results' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <item.icon className="text-3xl text-primary-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-2">Start Your Free Assessment</h2>
              <p className="text-gray-600 mb-8">Answer a few quick questions to get your personalized tax savings snapshot.</p>

              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <FaCheckCircle className="text-6xl text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Assessment Complete!</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    We're preparing your personalized Tax Savings Snapshot. You'll receive it via email within 24 hours.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Want to discuss your results? Book a free consultation with our tax strategy team.
                  </p>
                  <Link
                    href="/book-now"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all"
                  >
                    Book Free Consultation
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Business Info */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select business type</option>
                      <option value="sole-proprietor">Sole Proprietor</option>
                      <option value="llc">LLC</option>
                      <option value="s-corp">S-Corporation</option>
                      <option value="c-corp">C-Corporation</option>
                      <option value="partnership">Partnership</option>
                      <option value="individual">Individual (W-2 Employee)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Annual Revenue *
                    </label>
                    <select
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select revenue range</option>
                      <option value="0-100k">$0 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m+">$1,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="0">Just me</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-10">6-10 employees</option>
                      <option value="11-25">11-25 employees</option>
                      <option value="26+">26+ employees</option>
                    </select>
                  </div>

                  {/* Tax Concerns */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      What are your biggest tax concerns? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'High tax burden',
                        'Quarterly estimated taxes',
                        'Entity structure optimization',
                        'Deduction maximization',
                        'Multi-state tax issues',
                        'Audit risk',
                        'Tax planning for growth',
                        'Retirement contributions',
                      ].map((concern) => (
                        <label key={concern} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.concerns.includes(concern)}
                            onChange={() => handleCheckboxChange(concern)}
                            className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-gray-700">{concern}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <FaCalculator />
                        <span>Get My Tax Savings Snapshot</span>
                      </>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <div className="text-red-600 bg-red-50 p-4 rounded-lg border border-red-200">
                      Something went wrong. Please try again or contact us directly at (929) 919-3574.
                    </div>
                  )}

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to receive communications from MRECAI. 
                    View our <Link href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            What's Included in Your Snapshot
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Estimated tax savings opportunities',
              'Entity structure recommendations',
              'Deduction checklist for your situation',
              'R&D tax credit eligibility assessment',
              'Quarterly tax planning guidance',
              'Next steps and action items',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxSavingsSnapshot;

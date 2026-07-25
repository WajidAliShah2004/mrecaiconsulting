'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaDownload, FaCheckCircle, FaFileAlt, FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';
import SEO from '../components/common/SEO';

const DownloadServicesGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloading(true);

    // Simulate form submission (in production, send to your backend/CRM)
    setTimeout(() => {
      setSubmitted(true);
      setDownloading(false);
      
      // Open the services overview in a new tab for printing/saving as PDF
      window.open('/downloads/services-overview.html', '_blank');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Download Services Guide | Free PDF | MRECAI"
        description="Download our comprehensive services guide to learn about our tax, insurance, and accounting solutions. Free PDF download."
        canonical="/download-services-guide"
        keywords="services guide, business services PDF, tax services guide, insurance guide, free download"
      />

      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="inline-block mb-6"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <FaFileAlt className="text-4xl text-white" />
                    </div>
                  </motion.div>

                  <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                    Download Our Services Guide
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Get instant access to our comprehensive services overview. Learn how we can help your business with tax, insurance, technology, and growth strategies.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      icon: FaCheckCircle,
                      title: 'Comprehensive Overview',
                      description: 'All 13 services explained in detail',
                    },
                    {
                      icon: FaCheckCircle,
                      title: 'Pricing Insights',
                      description: 'Understand our service packages',
                    },
                    {
                      icon: FaCheckCircle,
                      title: 'Free Consultation',
                      description: 'Includes booking information',
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                      <benefit.icon className="text-3xl text-primary-500 mx-auto mb-3" />
                      <h3 className="font-bold text-navy-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Download Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 mb-2">
                      Enter Your Details to Download
                    </h2>
                    <p className="text-gray-600">
                      We'll email you a copy and you'll get instant access
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          <FaUser className="inline mr-2 text-primary-500" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          <FaEnvelope className="inline mr-2 text-primary-500" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          <FaPhone className="inline mr-2 text-primary-500" />
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                      <p>
                        By downloading, you agree to receive occasional emails from MRECAI. 
                        We respect your privacy and you can unsubscribe anytime.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={downloading}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                    >
                      {downloading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <FaDownload className="mr-3" />
                          Download Services Guide
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                      🔒 Your information is secure and will never be shared with third parties
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl mx-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <FaCheckCircle className="text-5xl text-white" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-navy-900 mb-4">
                    Success! Your Download is Ready
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Your services guide should open in a new tab. If it doesn't, click the button below.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="/downloads/services-overview.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      <FaDownload className="mr-3" />
                      Open Services Guide
                    </a>

                    <p className="text-sm text-gray-500 mt-4">
                      We've also sent a copy to <strong>{formData.email}</strong>
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-navy-900 mb-4">
                      What's Next?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-navy-900 mb-2">📅 Book a Consultation</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Ready to discuss your needs? Schedule a free 30-minute consultation.
                        </p>
                        <a
                          href="/book-now"
                          className="text-primary-600 font-semibold hover:text-primary-700 text-sm"
                        >
                          Book Now →
                        </a>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-navy-900 mb-2">📞 Call Us</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Have questions? Give us a call and we'll help you right away.
                        </p>
                        <a
                          href="tel:929-702-2818"
                          className="text-primary-600 font-semibold hover:text-primary-700 text-sm"
                        >
                          (929) 919-3574 →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadServicesGuide;


'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFileContract, FaBalanceScale, FaHandshake, FaGavel, FaCheckCircle, FaChevronDown, FaChevronUp, FaExclamationTriangle, FaDownload, FaMobileAlt } from 'react-icons/fa';
import { generateTermsOfServicePDF } from '../utils/pdfGenerator';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleDownload = () => {
    generateTermsOfServicePDF();
  };

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "Services Description",
      content: "MRECAI provides tax planning and preparation, insurance brokerage, and bookkeeping and accounting services. All services are subject to availability and may be modified or discontinued at any time."
    },
    {
      title: "SMS Messaging Terms & Conditions",
      content: "MRECAI offers SMS text messaging services to provide appointment reminders, scheduling updates, customer support, and service-related communications. By providing your mobile phone number and opting in to receive SMS messages, you agree to the following terms:",
      items: [
        "Program Description: You will receive SMS messages related to appointment scheduling, appointment reminders, customer support responses, and service updates. Message frequency varies based on your interaction with our services.",
        "Opt-Out Instructions: You can cancel the SMS service at any time by texting STOP to our number. After you send STOP, we will send you a confirmation message that you have been unsubscribed. You will no longer receive SMS messages from us unless you opt in again.",
        "Help & Support: If you are experiencing issues with the messaging program, reply with HELP for assistance, or contact us directly at mathew@mrecai.com or 929-919-3574.",
        "Message & Data Rates: Message and data rates may apply for any messages sent to you from us and to us from you. Please contact your wireless provider for details about your text and data plan.",
        "Carrier Liability: Carriers are not liable for delayed or undelivered messages.",
        "Consent Requirements: You represent that you are the owner or authorized user of the mobile number you provide and that you voluntarily opt in to receive messages. Consent is not required to purchase or use our services.",
        "Privacy: Your mobile information will be used in accordance with our Privacy Policy (available at /privacy-policy). We do not sell, rent, or share your SMS opt-in data with third parties for marketing purposes."
      ],
      warning: true
    },
    {
      title: "User Responsibilities",
      items: [
        "Provide accurate and complete information",
        "Maintain the confidentiality of your account credentials",
        "Comply with all applicable laws and regulations",
        "Not misuse or abuse our services",
        "Promptly update any changes to your information"
      ]
    },
    {
      title: "Professional Services Disclaimer",
      content: "Our services are provided for informational and advisory purposes. We are not liable for decisions made based on our recommendations. You should consult with appropriate professionals before making financial or legal decisions.",
      warning: true
    },
    {
      title: "Payment Terms",
      items: [
        "Fees are due as specified in your service agreement",
        "Late payments may incur additional charges",
        "Refunds are subject to our refund policy",
        "We reserve the right to modify pricing with notice"
      ]
    },
    {
      title: "Intellectual Property",
      content: "All content, trademarks, and materials on our website are owned by MRECAI or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission."
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, MRECAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. This includes but is not limited to carrier delays, undelivered messages, technical errors, or third-party system outages related to SMS messaging services.",
      warning: true
    },
    {
      title: "Termination",
      content: "We reserve the right to terminate or suspend access to our services at any time, with or without cause, with or without notice. Upon termination, your right to use the services will immediately cease."
    },
    {
      title: "Governing Law & Dispute Resolution",
      content: "These Terms shall be governed by the laws of the State of New York. Any disputes shall be resolved through binding arbitration in New York County, NY, administered by the American Arbitration Association (AAA)."
    },
    {
      title: "Changes to Terms",
      content: "We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the modified terms. We will notify you of significant changes via email or website notice."
    }
  ];

  return (
    <div className="pt-40 md:pt-44">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 via-primary-900 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-navy-900/40"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-navy-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full border border-primary-400/30 mb-6">
              <span className="text-primary-300 font-semibold text-sm flex items-center gap-2">
                <FaFileContract />
                Legal Agreement
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Service</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using our services
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-400" />
                <span className="text-gray-300">Fair & Balanced</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-400" />
                <span className="text-gray-300">Legally Binding</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-400" />
                <span className="text-gray-300">Updated Regularly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaBalanceScale className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2 text-lg">Fair Terms</h3>
              <p className="text-sm text-gray-600">Clear and balanced agreement for all parties</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaHandshake className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2 text-lg">Mutual Respect</h3>
              <p className="text-sm text-gray-600">Built on trust and professional standards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaGavel className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2 text-lg">Legal Protection</h3>
              <p className="text-sm text-gray-600">Protecting both your rights and ours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Agreement Details</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-semibold text-navy-900">Effective Date:</p>
                <p>February 20, 2026</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Company:</p>
                <p>MRECAI</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Jurisdiction:</p>
                <p>State of New York</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Contact:</p>
                <p>mathew@mrecai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Terms & Conditions</h2>
            <p className="text-gray-600">Click each section to read the full details</p>
          </div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-xl shadow-md border overflow-hidden ${
                  section.warning ? 'border-orange-300' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      section.warning ? 'bg-orange-100' : 'bg-primary-100'
                    }`}>
                      {section.warning ? (
                        <FaExclamationTriangle className="text-orange-600 text-sm" />
                      ) : (
                        <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">{section.title}</h3>
                  </div>
                  {expandedSection === index ? (
                    <FaChevronUp className="text-primary-600 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {expandedSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="pl-12 space-y-4">
                      {section.content && (
                        <p className={`leading-relaxed ${
                          section.warning ? 'text-gray-800 font-medium' : 'text-gray-700'
                        }`}>
                          {section.content}
                        </p>
                      )}
                      
                      {section.items && (
                        <ul className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.warning && (
                        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-4 mt-4">
                          <p className="text-sm text-gray-700">
                            <strong>Important:</strong> Please read this section carefully as it contains important limitations and disclaimers.
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Download PDF */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need the complete legal document?</p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              <FaDownload />
              Download Full Terms of Service
            </button>
          </div>

          {/* Agreement Notice */}
          <div className="mt-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-8 text-white text-center">
            <FaFileContract className="text-4xl text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">By Using Our Services</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              You acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you have any questions, please contact us before proceeding.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg"
            >
              Contact Us with Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

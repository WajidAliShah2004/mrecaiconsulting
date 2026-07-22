'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserShield, FaFileContract, FaCheckCircle, FaChevronDown, FaChevronUp, FaDownload } from 'react-icons/fa';
import { generatePrivacyPolicyPDF } from '../utils/pdfGenerator';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleDownload = () => {
    generatePrivacyPolicyPDF();
  };

  const sections = [
    {
      title: "Scope & Acceptance",
      content: "This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, communicate with us, or use our consulting and insurance services (the \"Services\"). By interacting with the Services, you agree to this Policy to the maximum extent permitted by law."
    },
    {
      title: "What We Collect",
      items: [
        { label: "Identifiers & Contact", desc: "name, email, phone, address, professional details." },
        { label: "Insurance/Financial", desc: "underwriting inputs, applications, policy data, loss runs, claims history, billing details you provide or authorize." },
        { label: "Technical/Usage", desc: "IP address, device/OS/browser, pages viewed, timestamps, session IDs, approximate location, cookie and pixel data." },
        { label: "Content & Files", desc: "messages, recordings (with notice), forms, uploads, signatures." },
        { label: "Partner/Carrier Data", desc: "quoting status, bind/issue information, endorsements." },
        { label: "AI Interaction Data", desc: "preference signals, form responses, engagement context derived from AI-assisted workflows." }
      ]
    },
    {
      title: "Sources of Information",
      items: [
        "Directly from you (forms, calls, emails).",
        "Service providers & vendors (hosting, analytics, communications).",
        "Insurance ecosystem (carriers, MGAs, TPAs, other brokers, loss-run services).",
        "Public/permissioned sources (government records, business databases, lead enrichment)."
      ]
    },
    {
      title: "How We Use Information",
      items: [
        "Deliver, maintain, and improve the Services; obtain quotes; process applications; coordinate with carriers; provide support; prevent fraud; ensure security; analyze usage; personalize content; train our teams and systems.",
        "Marketing & Education: send newsletters, reminders, promotions, updates, and content relevant to your interests.",
        "Compliance: legal/regulatory obligations, audits, and lawful requests."
      ]
    },
    {
      title: "SMS Messaging & Consent",
      content: "SMS messages are sent only to users who explicitly opt in. When you provide your phone number on our website, you will be presented with an optional SMS consent checkbox.",
      highlight: true,
      items: [
        "Appointment updates and scheduling",
        "Quote follow-ups and inquiries",
        "Customer support and assistance",
        "Information you requested"
      ],
      note: "SMS consent is NOT required to use our services. Reply STOP to unsubscribe anytime. Message & data rates may apply."
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
                <FaShieldAlt />
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Policy</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              How we collect, use, and protect your information
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-400" />
                <span className="text-gray-300">Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-400" />
                <span className="text-gray-300">Fully Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary-400" />
                <span className="text-gray-300">GDPR Compliant</span>
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
                <FaLock className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2 text-lg">Secure</h3>
              <p className="text-sm text-gray-600">Your data is protected with industry-standard security</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaUserShield className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2 text-lg">Transparent</h3>
              <p className="text-sm text-gray-600">Clear information about how we use your data</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaFileContract className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2 text-lg">Compliant</h3>
              <p className="text-sm text-gray-600">Adhering to all privacy regulations and laws</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-semibold text-navy-900">Effective Date:</p>
                <p>October 31, 2025</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Company:</p>
                <p>MRECAI</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Address:</p>
                <p>1 Willow Road Place, Great Neck, NY 11021</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Phone:</p>
                <p>929-702-2818</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Website:</p>
                <p>www.mrecai.com</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Privacy Contact:</p>
                <p>mathew@mrecai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
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
                        <p className="text-gray-700 leading-relaxed">{section.content}</p>
                      )}

                      {section.items && (
                        <ul className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">
                                {typeof item === 'string' ? item : (
                                  <><strong>{item.label}:</strong> {item.desc}</>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.note && (
                        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
                          <p className="text-sm text-gray-700"><strong>Note:</strong> {section.note}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Full Legal Text Link */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need the complete legal document?</p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              <FaDownload />
              Download Full Privacy Policy
            </button>
          </div>

          {/* Contact Us Section */}
          <div className="mt-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-8 text-white text-center">
            <FaShieldAlt className="text-4xl text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're committed to protecting your information and being transparent about our practices. If you have any questions or concerns about this Privacy Policy, we're here to help.
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

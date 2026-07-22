'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaClipboardList, FaBullseye, FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import { COMPANY_INFO } from '../utils/constants';
import SEO from '../components/common/SEO';
import { breadcrumbSchema } from '../utils/schemas';

// Declare Calendly global
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: Element }) => void;
    };
  }
}

const BookNow = () => {
  const [smsTransactional, setSmsTransactional] = useState(false);
  const [smsMarketing, setSmsMarketing] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Check if Calendly script already exists
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (existingScript) {
      setCalendlyLoaded(true);
      return;
    }

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    script.onerror = () => {
      console.error('Failed to load Calendly script');
      setCalendlyLoaded(true); // Set to true anyway to show the widget div
    };
    document.body.appendChild(script);

    // Timeout fallback
    const timeout = setTimeout(() => {
      setCalendlyLoaded(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  // Re-initialize Calendly when widget becomes visible
  useEffect(() => {
    if (showCalendly && calendlyLoaded && window.Calendly) {
      console.log('Initializing Calendly widget');
      // Give the DOM time to render
      setTimeout(() => {
        const widgetElement = document.querySelector('.calendly-inline-widget');
        if (widgetElement && window.Calendly) {
          console.log('Calendly widget element found, initializing...');
          window.Calendly.initInlineWidget({
            url: COMPANY_INFO.calendlyUrl,
            parentElement: widgetElement,
          });
        }
      }, 100);
    }
  }, [showCalendly, calendlyLoaded]);

  const handleProceedToBooking = () => {
    console.log('Proceeding to booking, Calendly URL:', COMPANY_INFO.calendlyUrl);
    setShowCalendly(true);
    // Scroll to calendly widget after it renders
    setTimeout(() => {
      const widget = document.getElementById('calendly-widget');
      console.log('Calendly widget element:', widget);
      widget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  return (
    <>
      <SEO
        title="Book Free Consultation | Schedule with MRECAI Today"
        description="Schedule your free consultation with MRECAI. Choose a convenient time, get expert advice, and start your journey to business success. Flexible scheduling available."
        canonical="/book-now"
        keywords="book consultation, schedule appointment, free consultation, business consulting appointment, insurance consultation"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Book Now', url: '/book-now' },
            ]),
          ],
        }}
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold">
                  <FaCalendarAlt className="mr-2" />
                  Free Consultation
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Book Your <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Consultation</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Schedule a free consultation with our experts. Choose a time that works best for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Why Book a <span className="gradient-text">Consultation?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: FaCheckCircle,
                  title: 'Free & No Obligation',
                  description: 'Get expert advice with no strings attached. We\'re here to help, not pressure.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: FaClock,
                  title: 'Flexible Scheduling',
                  description: 'Choose a time that works for you. We offer appointments throughout the week.',
                  color: 'from-primary-500 to-primary-600'
                },
                {
                  icon: FaBullseye,
                  title: 'Personalized Solutions',
                  description: 'Receive tailored recommendations based on your unique needs and goals.',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <benefit.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendly Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom max-w-5xl">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Choose Your <span className="gradient-text">Time Slot</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Select a convenient time for your consultation. We'll discuss your needs and how we can help you achieve your goals.
                </p>
              </div>

              {!showCalendly ? (
                /* Pre-Booking Consent Form - Fully Responsive */
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100 max-w-3xl mx-auto relative z-10">
                  {/* Header - Responsive */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
                      <FaCalendarAlt className="text-2xl sm:text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2 leading-tight">
                      Almost There!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 px-2">
                      Just one quick step before scheduling your consultation
                    </p>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {/* Phone Number Notice - Fully Responsive */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-4 sm:p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 opacity-50"></div>
                      <div className="relative">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                            <FaPhone className="text-base sm:text-xl text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-navy-900 text-base sm:text-lg mb-2 leading-tight">
                              Phone Number Required
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                              On the next screen, you'll provide a phone number for appointment coordination only (confirmations, reminders, and scheduling changes).
                            </p>
                            <div className="bg-white/80 backdrop-blur-sm border border-blue-300 rounded-lg p-2.5 sm:p-3">
                              <p className="text-xs sm:text-sm font-semibold text-primary-700 flex items-start sm:items-center gap-2">
                                <FaCheckCircle className="text-primary-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                                <span className="leading-tight">Your phone number does NOT automatically sign you up for SMS</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SMS Consent Section - Fully Responsive */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 sm:gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                          <span className="text-xl sm:text-2xl">📱</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-navy-900 text-base sm:text-lg leading-tight">
                            Optional SMS Updates
                          </h4>
                          <p className="text-xs text-gray-500 leading-tight mt-0.5">
                            Choose which types of SMS messages you'd like to receive (if any)
                          </p>
                        </div>
                      </div>
                      
                      {/* Transactional Messages Checkbox */}
                      <label className="flex items-start gap-3 sm:gap-4 cursor-pointer group p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-transparent hover:border-primary-200 mb-3">
                        <input
                          type="checkbox"
                          checked={smsTransactional}
                          onChange={(e) => setSmsTransactional(e.target.checked)}
                          className="mt-0.5 sm:mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary-600 border-gray-300 rounded-md focus:ring-primary-500 focus:ring-2 cursor-pointer flex-shrink-0"
                          aria-label="Opt in to receive transactional SMS text messages"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-navy-900 mb-1">
                            ✅ Transactional Messages (Recommended)
                          </p>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2">
                            I agree to receive SMS text messages from <strong className="whitespace-nowrap">MRECAI</strong> related to:
                          </p>
                          <ul className="list-disc ml-4 sm:ml-5 text-xs sm:text-sm text-gray-700 space-y-0.5 mb-2">
                            <li>Appointment confirmations and reminders</li>
                            <li>Scheduling updates and changes</li>
                            <li>Customer support responses</li>
                            <li>Service-related notifications</li>
                          </ul>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs text-gray-600">
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                              <FaClock className="text-gray-500 flex-shrink-0" />
                              <span className="text-[10px] sm:text-xs">Frequency varies</span>
                            </span>
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap text-[10px] sm:text-xs">
                              💰 Rates may apply
                            </span>
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap text-[10px] sm:text-xs">
                              Reply <strong>STOP</strong> to opt out
                            </span>
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap text-[10px] sm:text-xs">
                              Reply <strong>HELP</strong> for support
                            </span>
                          </div>
                        </div>
                      </label>

                      {/* Marketing Messages Checkbox */}
                      <label className="flex items-start gap-3 sm:gap-4 cursor-pointer group p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-transparent hover:border-primary-200">
                        <input
                          type="checkbox"
                          checked={smsMarketing}
                          onChange={(e) => setSmsMarketing(e.target.checked)}
                          className="mt-0.5 sm:mt-1 h-5 w-5 sm:h-6 sm:w-6 text-primary-600 border-gray-300 rounded-md focus:ring-primary-500 focus:ring-2 cursor-pointer flex-shrink-0"
                          aria-label="Opt in to receive marketing SMS text messages"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-navy-900 mb-1">
                            📢 Marketing Messages (Optional)
                          </p>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2">
                            I agree to receive SMS text messages from <strong className="whitespace-nowrap">MRECAI</strong> related to:
                          </p>
                          <ul className="list-disc ml-4 sm:ml-5 text-xs sm:text-sm text-gray-700 space-y-0.5 mb-2">
                            <li>Promotional offers and discounts</li>
                            <li>New service announcements</li>
                            <li>Marketing campaigns</li>
                            <li>Special events and updates</li>
                          </ul>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs text-gray-600">
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                              <FaClock className="text-gray-500 flex-shrink-0" />
                              <span className="text-[10px] sm:text-xs">Frequency varies</span>
                            </span>
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap text-[10px] sm:text-xs">
                              💰 Rates may apply
                            </span>
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap text-[10px] sm:text-xs">
                              Reply <strong>STOP</strong> to opt out
                            </span>
                            <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap text-[10px] sm:text-xs">
                              Reply <strong>HELP</strong> for support
                            </span>
                          </div>
                        </div>
                      </label>
                      
                      {/* Consent Not Required Notice - Responsive */}
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t-2 border-dashed border-gray-200">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3 sm:p-4">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <FaCheckCircle className="text-green-600 text-base sm:text-xl flex-shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs sm:text-sm font-bold text-green-800 mb-1 leading-tight">
                                Consent is NOT required to book
                              </p>
                              <p className="text-[10px] sm:text-xs text-green-700 leading-relaxed">
                                You can schedule your appointment whether or not you check these boxes. SMS messages will only be sent if you opt in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Privacy Policy Link - Responsive */}
                      <div className="mt-3 sm:mt-4 text-center">
                        <a 
                          href="/privacy-policy" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                        >
                          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors flex-shrink-0">
                            📄
                          </span>
                          <span className="underline">View Our Privacy Policy & Terms of Service</span>
                        </a>
                      </div>
                    </div>

                    {/* Proceed Button - Fully Responsive */}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log('Button clicked!');
                          handleProceedToBooking();
                        }}
                        className="group relative w-full py-3 sm:py-3.5 px-4 sm:px-6 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 overflow-hidden touch-manipulation"
                        style={{ pointerEvents: 'auto', WebkitTapHighlightColor: 'transparent' }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        
                        {/* Button content - Responsive */}
                        <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-2.5">
                          <FaCalendarAlt className="text-base sm:text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                          <span className="text-sm sm:text-base leading-tight">Continue to Schedule</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                      
                      {/* Status Message - Fully Responsive */}
                      <div className="mt-3 sm:mt-4 text-center">
                        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 flex-wrap">
                          {(smsTransactional || smsMarketing) ? (
                            <>
                              <span className="flex h-2 w-2 flex-shrink-0">
                                <span className="animate-ping absolute h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                              </span>
                              <span className="font-medium text-green-700 whitespace-nowrap">
                                SMS enabled ✓ 
                                {smsTransactional && smsMarketing && ' (Both)'}
                                {smsTransactional && !smsMarketing && ' (Transactional)'}
                                {!smsTransactional && smsMarketing && ' (Marketing)'}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></span>
                              <span className="text-center">No SMS (you can still book)</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Calendly Widget - Only shown after consent acknowledgment */
                <>
                  {/* Consent Confirmation Banner */}
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="font-bold text-navy-900 mb-2 flex items-center">
                      <FaCheckCircle className="mr-2 text-green-600" />
                      Ready to Schedule
                    </h3>
                    <p className="text-sm text-gray-700">
                      {(smsTransactional || smsMarketing) ? (
                        <>
                          ✅ You have opted in to receive SMS messages:
                          <ul className="list-disc ml-5 mt-1">
                            {smsTransactional && <li>Transactional messages (appointments, reminders, support)</li>}
                            {smsMarketing && <li>Marketing messages (promotions, offers, updates)</li>}
                          </ul>
                        </>
                      ) : (
                        '📱 You have chosen not to receive SMS messages. You can still book your appointment below.'
                      )}
                    </p>
                    <button
                      onClick={() => setShowCalendly(false)}
                      className="mt-3 text-sm text-primary-600 hover:text-primary-700 underline font-medium"
                    >
                      ← Change SMS preferences
                    </button>
                  </div>

                  {/* Calendly Inline Widget */}
                  <div id="calendly-widget" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    {!calendlyLoaded && (
                      <div className="flex items-center justify-center py-20">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                          <p className="text-gray-600">Loading booking calendar...</p>
                        </div>
                      </div>
                    )}
                    <div
                      className="calendly-inline-widget"
                      data-url={COMPANY_INFO.calendlyUrl}
                      style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                  </div>
                </>
              )}

              {/* Alternative Contact */}
              <div className="mt-8 text-center bg-gradient-to-r from-primary-50 to-white rounded-xl p-8 border border-primary-100">
                <p className="text-gray-700 mb-4 text-lg">
                  Prefer to talk now? Give us a call!
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  <FaPhone className="mr-3" />
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
              What to <span className="gradient-text">Expect</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Initial Call</h3>
                <p className="text-gray-600">
                  We'll discuss your needs and goals in a friendly, no-pressure conversation.
                </p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClipboardList className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Assessment</h3>
                <p className="text-gray-600">
                  Our experts will analyze your situation and identify opportunities.
                </p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBullseye className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Custom Plan</h3>
                <p className="text-gray-600">
                  Receive a tailored strategy designed specifically for your success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookNow;

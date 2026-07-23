'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { COMPANY_INFO } from '../../utils/constants';
import logoImage from '../../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [learningDropdownOpen, setLearningDropdownOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Intake Forms', path: '/intake-forms', shortName: 'Forms' },
    { name: 'Contact', path: '/contact' },
  ];

  const learningLinks = [
    { name: 'Advice & Education', path: '/advice-education' },
    { name: 'Resources Hub', path: '/resources' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy', shortName: 'Privacy' },
    { name: 'Terms of Service', path: '/terms-of-service', shortName: 'Terms' },
  ];

  const aboutLinks = [
    { name: 'Overview', path: '/about' },
    { name: 'About the Company', path: '/about/company' },
    { name: 'Meet Our People', path: '/about/founder' },
    { name: 'Strategic Partners', path: '/about/partners' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const servicesLinks = [
    { name: 'All Services', path: '/services' },
    { name: 'Tax Services', path: '/services/tax-services' },
    { name: 'Insurance & Risk', path: '/services/risk-architecture' },
    { name: 'Bookkeeping & Accounting', path: '/services/bookkeeping-accounting' },
    { name: 'Business Consulting', path: '/services/business-consulting' },
  ];

  const isAboutActive = pathname.startsWith('/about') || pathname === '/testimonials';
  const isServicesActive = pathname.startsWith('/services');
  const isLearningActive = pathname === '/advice-education' || pathname.startsWith('/resources');
  const isLegalActive = pathname === '/privacy-policy' || pathname === '/terms-of-service';

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Top Contact Bar - desktop-only utility strip; collapses on scroll.
          Hidden below lg, where the nav's quick-dial button and the mobile
          menu already surface the phone number. */}
      <div
        className={`hidden lg:block fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden transition-[height,opacity] duration-300 ${isScrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'
          }`}
      >
        <div className="max-w-[1600px] mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-full justify-between items-center text-[11px] gap-3">
            <div className="flex items-center gap-6 min-w-0">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-1.5 text-white hover:text-primary-300 transition-colors duration-300 flex-shrink-0"
              >
                <FaPhone className="text-[10px] flex-shrink-0 text-primary-300" />
                <span className="font-medium whitespace-nowrap">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-1.5 text-white hover:text-primary-300 transition-colors duration-300 min-w-0"
              >
                <FaEnvelope className="text-[10px] flex-shrink-0 text-primary-300" />
                <span className="truncate font-medium">{COMPANY_INFO.email}</span>
              </a>
            </div>
            <div className="hidden xl:flex items-center gap-2 text-primary-300 flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold whitespace-nowrap">24/7 Service Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed inset-x-0 z-40 bg-white/95 backdrop-blur-md shadow-lg transition-[top] duration-300 border-b border-gray-100 ${isScrolled ? 'top-0' : 'top-0 lg:top-8'
          }`}
      >
        <div className={`max-w-[1600px] mx-auto px-4 ${isOpen ? 'pb-4' : ''}`}>
          <div
            className={`flex items-center justify-between gap-2 sm:gap-3 transition-[height] duration-300 ${isScrolled ? 'h-11 sm:h-12' : 'h-12 sm:h-14'
              }`}
          >
            {/* Logo - Left Side */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center group" aria-label="MRECAI home">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={logoImage.src}
                    alt="MRECAI"
                    className={`relative w-auto max-w-none object-contain transition-[height] duration-300 ${isScrolled ? 'h-7 sm:h-8 lg:h-9' : 'h-8 sm:h-9 lg:h-10'
                      }`}
                    width={logoImage.width}
                    height={logoImage.height}
                    loading="eager"
                    fetchPriority="high"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden xl:flex flex-1 min-w-0 items-center justify-center">
              <div className="flex items-center gap-0.5 2xl:gap-1">
                {/* Home Link */}
                <Link
                  href="/"
                  className="relative group flex-shrink-0"
                >
                  <motion.div
                    className={`px-2 2xl:px-3 py-2 font-bold text-xs 2xl:text-sm transition-all duration-300 rounded-lg relative ${pathname === '/'
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                      }`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Home
                  </motion.div>
                </Link>

                {/* About Dropdown */}
                <div
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <motion.button
                    className={`px-2 2xl:px-3 py-2 font-bold text-xs 2xl:text-sm transition-all duration-300 rounded-lg flex items-center gap-1 relative ${isAboutActive
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                      }`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>About</span>
                    <motion.div
                      animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-[9px]" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {aboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-3 rounded-xl font-semibold transition-all mb-1 ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Dropdown */}
                <div
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <motion.button
                    className={`px-2 2xl:px-3 py-2 font-bold text-xs 2xl:text-sm transition-all duration-300 rounded-lg flex items-center gap-1 relative ${isServicesActive
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                      }`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Services</span>
                    <motion.div
                      animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-[9px]" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {servicesLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-3 rounded-xl font-semibold transition-all mb-1 ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Learning Center Dropdown */}
                <div
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setLearningDropdownOpen(true)}
                  onMouseLeave={() => setLearningDropdownOpen(false)}
                >
                  <motion.button
                    className={`px-2 2xl:px-3 py-2 font-bold text-xs 2xl:text-sm transition-all duration-300 rounded-lg flex items-center gap-1 relative ${isLearningActive
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                      }`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="hidden 2xl:inline">Learning Center</span>
                    <span className="2xl:hidden">Learn</span>
                    <motion.div
                      animate={{ rotate: learningDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-[9px]" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {learningDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {learningLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-3 rounded-xl font-semibold transition-all mb-1 ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remaining Navigation Links */}
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="relative group flex-shrink-0"
                  >
                    <motion.div
                      className={`px-2 2xl:px-3 py-2 font-bold text-xs 2xl:text-sm transition-all duration-300 rounded-lg relative whitespace-nowrap ${pathname === link.path
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                        }`}
                      whileHover={{ y: -2, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="hidden 2xl:inline">{link.name}</span>
                      <span className="2xl:hidden">{link.shortName || link.name}</span>
                    </motion.div>
                  </Link>
                ))}

                {/* Legal Dropdown */}
                <div
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setLegalDropdownOpen(true)}
                  onMouseLeave={() => setLegalDropdownOpen(false)}
                >
                  <motion.button
                    className={`px-2 2xl:px-3 py-2 font-bold text-xs 2xl:text-sm transition-all duration-300 rounded-lg flex items-center gap-1 relative ${isLegalActive
                      ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                      }`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Legal</span>
                    <motion.div
                      animate={{ rotate: legalDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-[9px]" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {legalDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {legalLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-3 rounded-xl font-semibold transition-all mb-1 ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-md'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </nav>

            {/* Right Side: CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Quick-dial - replaces the contact strip below lg */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="lg:hidden inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl text-primary-600 bg-primary-50 hover:bg-primary-100 border border-primary-200 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 flex-shrink-0"
                aria-label={`Call ${COMPANY_INFO.phone}`}
              >
                <FaPhone className="text-sm" />
              </a>

              {/* CTA Button */}
              <div className="hidden xl:block">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href="/book-now"
                    className={`relative px-3 2xl:px-4 py-2 text-white font-bold text-[10px] 2xl:text-xs rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-1 whitespace-nowrap overflow-hidden group ${pathname === '/book-now'
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700'
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">
                      <span className="hidden 2xl:inline">{pathname === '/book-now' ? 'You\'re Here!' : 'Book Consultation'}</span>
                      <span className="2xl:hidden">{pathname === '/book-now' ? 'Here!' : 'Book Now'}</span>
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="xl:hidden inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl transition-colors duration-300 text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl border-2 border-primary-400/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 flex-shrink-0"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {isOpen ? <FaTimes className="text-base sm:text-lg" /> : <FaBars className="text-base sm:text-lg" />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation - Redesigned */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                className="xl:hidden mt-2 bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200"
              >
                <div className="flex flex-col p-4 sm:p-5 space-y-2 max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain">
                  {/* Home Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05, type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href="/"
                      className={`block px-4 py-3 rounded-xl font-bold transition-all relative ${pathname === '/'
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                        }`}
                    >
                      Home
                    </Link>
                  </motion.div>

                  {/* Mobile About Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                  >
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all ${isAboutActive
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                        }`}
                    >
                      <span>About</span>
                      <motion.div
                        animate={{ rotate: mobileAboutOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <FaChevronDown className="text-sm" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 space-y-1.5"
                        >
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-400 to-primary-500 shadow-md'
                                : 'text-gray-600 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Mobile Services Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all ${isServicesActive
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                        }`}
                    >
                      <span>Services</span>
                      <motion.div
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <FaChevronDown className="text-sm" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 space-y-1.5"
                        >
                          {servicesLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-400 to-primary-500 shadow-md'
                                : 'text-gray-600 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Mobile Learning Center Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <button
                      onClick={() => setMobileLearningOpen(!mobileLearningOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all ${isLearningActive
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                        }`}
                    >
                      <span>Learning Center</span>
                      <motion.div
                        animate={{ rotate: mobileLearningOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <FaChevronDown className="text-sm" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileLearningOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 space-y-1.5"
                        >
                          {learningLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-400 to-primary-500 shadow-md'
                                : 'text-gray-600 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Remaining Navigation Links */}
                  {navLinks.slice(1).map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 4) * 0.05, type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.path}
                        className={`block px-4 py-3 rounded-xl font-bold transition-all relative ${pathname === link.path
                          ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Legal Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + 3) * 0.05, type: "spring", stiffness: 300 }}
                  >
                    <button
                      onClick={() => setMobileLegalOpen(!mobileLegalOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all ${isLegalActive
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                        }`}
                    >
                      <span>Legal</span>
                      <motion.div
                        animate={{ rotate: mobileLegalOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <FaChevronDown className="text-sm" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileLegalOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-4 space-y-1.5"
                        >
                          {legalLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${pathname === link.path
                                ? 'text-white bg-gradient-to-r from-primary-400 to-primary-500 shadow-md'
                                : 'text-gray-600 hover:text-primary-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50'
                                }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <div className="border-t-2 border-gray-200 my-3"></div>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center space-x-3 px-4 py-3 text-primary-600 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 rounded-xl font-bold transition-all shadow-sm hover:shadow-lg"
                  >
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <FaPhone />
                    </div>
                    <span>{COMPANY_INFO.phone}</span>
                  </a>

                  {/* CTA Button - Separate from navigation, always prominent */}
                  <Link
                    href="/book-now"
                    className={`flex items-center justify-center w-full text-center px-5 sm:px-6 py-3.5 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-2xl transition-all mt-3 relative overflow-hidden group h-auto leading-normal ${pathname === '/book-now'
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700'
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">{pathname === '/book-now' ? 'You\'re on the Booking Page!' : 'Book Consultation'}</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

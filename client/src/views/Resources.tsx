'use client';

import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaCalculator, FaCheckCircle, FaRocket, FaBriefcase, FaLightbulb, FaSpinner, FaArrowRight, FaChartBar, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase, WhitePaper } from '../lib/supabase';
import { generateAndDownloadPDF } from '../utils/pdfGenerator';

const Resources = () => {
  const [whitepapers, setWhitepapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState<string | null>(null);

  // Icon mapping
  const iconMap: any = {
    'tax-strategy-playbook': FaLightbulb,
    'business-risk-blueprint': FaShieldAlt,
    'financial-clarity-guide': FaChartBar
  };

  // Color mapping
  const colorMap: any = {
    'tax-strategy-playbook': 'from-primary-500 to-primary-600',
    'business-risk-blueprint': 'from-green-500 to-emerald-600',
    'financial-clarity-guide': 'from-purple-500 to-pink-600'
  };

  useEffect(() => {
    fetchWhitePapers();
  }, []);

  const fetchWhitePapers = async () => {
    try {
      const { data, error } = await supabase
        .from('white_papers')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;

      const mappedData = (data || []).map((paper: WhitePaper) => ({
        id: paper.id,
        slug: paper.slug,
        title: paper.title,
        description: paper.description,
        icon: iconMap[paper.slug] || FaFileAlt,
        pages: paper.page_count ? `${paper.page_count}+` : '40+',
        topics: paper.tags || [],
        color: colorMap[paper.slug] || 'from-primary-500 to-primary-600',
        pdf_url: paper.pdf_url,
        pdf_filename: paper.pdf_filename
      }));

      setWhitepapers(mappedData);
    } catch (error) {
      console.warn('White papers are temporarily unavailable (database unreachable).');
      setWhitepapers(fallbackWhitepapers);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (paperId: string, pdfUrl: string | undefined, filename: string) => {
    setDownloading(paperId);
    try {
      // Check if PDF URL exists
      if (!pdfUrl) {
        throw new Error('PDF URL not found in database. Please contact support.');
      }

      console.log('Downloading PDF from:', pdfUrl);

      // Increment download count (non-blocking)
      try {
        await supabase.rpc('increment_download_count', { paper_id: paperId });
      } catch (countError) {
        console.warn('Could not increment download count:', countError);
      }

      // Download from Supabase Storage
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Download failed with status: ${response.status}. Please check if the file exists in Supabase Storage.`);
      }

      const blob = await response.blob();

      // Verify it's a PDF
      if (blob.type !== 'application/pdf' && !blob.type.includes('pdf')) {
        console.warn('Downloaded file may not be a PDF. Type:', blob.type);
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      console.log('PDF downloaded successfully:', filename);
    } catch (error: any) {
      // Technical detail stays in the console for debugging; visitors get a generic message.
      console.warn('Download failed:', error?.message ?? error);
      alert('Sorry, this download is temporarily unavailable. Please try again later or contact us at Matthew@MRECAI.com.');
    } finally {
      setDownloading(null);
    }
  };

  const fallbackWhitepapers = [
    {
      id: 'tax-strategy-playbook',
      title: 'The Small Business Tax Strategy Playbook: Proven Ways to Lower Your Effective Rate',
      description: 'Comprehensive guide to entity optimization, R&D credits, cost segregation, and retirement plan strategies that keep more of what you earn.',
      icon: FaLightbulb,
      pages: '50+',
      topics: ['Entity Optimization', 'Tax Credits', 'Cost Segregation', 'Case Studies'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 'business-risk-blueprint',
      title: 'The Business Risk Blueprint: Closing Coverage Gaps Before They Become Losses',
      description: 'Complete guide to auditing your insurance coverage, protecting business and personal assets, and building a risk architecture that scales.',
      icon: FaShieldAlt,
      pages: '45+',
      topics: ['Coverage Gap Analysis', 'Liability Protection', 'Cyber Risk', 'Policy Optimization'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'financial-clarity-guide',
      title: 'From Messy Books to Management Tool: The Owner\'s Guide to Financial Clarity',
      description: 'Strategic guide to professionalizing your bookkeeping, reading your financial statements, and using KPIs to drive better decisions.',
      icon: FaChartBar,
      pages: '40+',
      topics: ['Financial Reporting', 'Cash Flow', 'KPI Tracking', 'Month-End Close'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const tools = [
    {
      id: 'tax-savings-snapshot',
      title: 'Free Tax Savings Snapshot',
      description: 'Get a personalized tax savings snapshot in 10 minutes. Discover deductions, credits, and strategies to reduce your tax burden.',
      icon: FaCalculator,
      link: '/resources/tax-savings-snapshot',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'service-match-quiz',
      title: 'Service Match Quiz',
      description: 'Answer 4 quick questions to discover which consulting, tax, and insurance services fit your business best.',
      icon: FaBriefcase,
      link: '/start-here',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'tax-savings-checklist',
      title: '2026 Tax Savings Checklist',
      description: 'Find out if your business is overpaying in taxes. Use our interactive audit to find missed deductions and credits.',
      icon: FaChartBar,
      link: '/resources/tax-savings-checklist',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'insurance-gap-checklist',
      title: 'Commercial Insurance Gap Audit',
      description: 'Identify hidden risks in your coverage. Our interactive tool helps you find where you are exposed to loss.',
      icon: FaShieldAlt,
      link: '/resources/insurance-gap-checklist',
      color: 'from-red-500 to-orange-600'
    }
  ];

  const guides = [
    {
      title: 'Industry-Specific Guides',
      items: [
        'Contractor Cash Flow & Job Costing Guide',
        'Medical Practice Financial Health Guide',
        'Real Estate Investor Tax Strategy Guide',
        'Professional Services Profitability Guide',
        'Retail & eCommerce Sales Tax Guide'
      ]
    },
    {
      title: 'Planning Checklists',
      items: [
        'Year-End Tax Planning Checklist (90-Day)',
        'New Entity Setup Checklist',
        'Insurance Coverage Review Checklist',
        'Month-End Close Checklist'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Resources & Downloads | White Papers, Guides & Tools | MRECAI"
        description="Download free white papers, industry guides, and use our interactive checklists. Expert insights on tax strategy, insurance, accounting, and business growth."
        canonical="/resources"
        keywords="white papers, business guides, tax savings checklist, insurance gap audit, tax planning resources, small business consulting resources"
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          <div className="container-custom relative z-10 text-white text-center py-16">
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
                  <FaFileAlt className="mr-2" />
                  Free Resources & Downloads
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Resources & <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Downloads</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Expert insights, white papers, and tools to help you transform your business
              </p>
            </motion.div>
          </div>
        </section>

        {/* White Papers Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Featured Pillar Page */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <Link
                href="/resources/tax-savings-snapshot"
                className="group relative overflow-hidden bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-2xl border border-primary-500/30 p-8 md:p-12 block hover:shadow-2xl hover:shadow-primary-500/10 transition-all"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                  <FaRocket className="text-8xl text-primary-500" />
                </div>

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-4 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
                      Featured Resource
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 italic italic font-bold">
                      The 2026 Tax Savings Snapshot: <br />
                      <span className="text-primary-400">Stop Overpaying the IRS</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed italic italic font-medium">
                      Most business owners leave money on the table every year. Take our 10-minute assessment to uncover the deductions, credits, and strategies you may be missing.
                    </p>
                    <div className="inline-flex items-center text-primary-400 font-bold text-lg group-hover:translate-x-2 transition-transform italic italic italic font-bold">
                      Get Your Free Snapshot <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                  <div className="hidden md:flex justify-end">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl max-w-sm italic italic font-medium">
                      <h4 className="text-white font-bold mb-3 italic font-bold">What's Inside:</h4>
                      <ul className="space-y-2 text-gray-400 text-sm italic italic">
                        <li className="flex items-center italic italic"><FaCheckCircle className="text-primary-500 mr-2 flex-shrink-0" /> Personalized savings opportunities</li>
                        <li className="flex items-center italic italic"><FaCheckCircle className="text-primary-500 mr-2 flex-shrink-0" /> Entity Structure & Deduction Review</li>
                        <li className="flex items-center italic italic"><FaCheckCircle className="text-primary-500 mr-2 flex-shrink-0" /> 3 Immediate Tax Wins for 2026</li>
                        <li className="flex items-center italic italic"><FaCheckCircle className="text-primary-500 mr-2 flex-shrink-0" /> Year-Round Planning Benchmarks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 italic italic font-bold">
                Flagship <span className="gradient-text">White Papers</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto italic italic font-medium">
                Comprehensive research and insights to help you run a more profitable, better-protected business
              </p>
            </motion.div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <FaSpinner className="text-5xl text-primary-500 animate-spin mb-4" />
                <p className="text-gray-600">Loading white papers...</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {whitepapers.map((paper, index) => (
                  <motion.div
                    key={paper.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Header with Icon */}
                    <div className={`bg-gradient-to-r ${paper.color} p-8 text-white`}>
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                        <paper.icon className="text-3xl text-white" />
                      </div>
                      <div className="text-sm font-semibold mb-2 opacity-90">{paper.pages} Pages</div>
                      <h3 className="text-2xl font-bold leading-tight">{paper.title}</h3>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">{paper.description}</p>

                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wide">Key Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {(paper.topics || []).map((topic: string, i: number) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Download Button */}
                      <button
                        onClick={() => paper.pdf_url ? handleDownload(paper.id, paper.pdf_url, paper.pdf_filename || `${paper.slug}.pdf`) : generateAndDownloadPDF(paper.slug || paper.id)}
                        disabled={downloading === paper.id}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${paper.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all group-hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {downloading === paper.id ? (
                          <>
                            <FaSpinner className="mr-2 animate-spin" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <FaDownload className="mr-2" />
                            Download PDF
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Interactive Tools Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Interactive <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Free calculators and assessments to help you make informed decisions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={tool.link}
                    className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full"
                  >
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <tool.icon className="text-3xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{tool.description}</p>
                      <div className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Launch Tool →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides & Checklists Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Guides & <span className="gradient-text">Checklists</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Practical resources to guide your implementation journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">{guide.title}</h3>
                  <ul className="space-y-3">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Request Access →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Need Personalized Guidance?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Schedule a free consultation to discuss how these strategies can be applied to your specific business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 rounded-xl hover:bg-white hover:text-navy-900 transition-all font-bold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;

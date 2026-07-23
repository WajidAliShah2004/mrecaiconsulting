'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/common/SEO';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    icon: string;
  }[];
}

interface Result {
  title: string;
  description: string;
  services: string[];
  cta: string;
  route: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your biggest business challenge right now?",
    options: [
      { text: 'Managing finances and cash flow', value: 'finance', icon: '💰' },
      { text: 'Reducing tax burden', value: 'tax', icon: '📊' },
      { text: 'Protecting my business from risks', value: 'insurance', icon: '🛡️' },
      { text: 'Growing and scaling operations', value: 'growth', icon: '🚀' },
    ],
  },
  {
    id: 2,
    question: 'How would you describe your current situation?',
    options: [
      { text: 'Just starting out, need foundation', value: 'startup', icon: '🌱' },
      { text: 'Established but disorganized', value: 'chaos', icon: '🌪️' },
      { text: 'Stable and ready to grow', value: 'growth', icon: '📈' },
      { text: 'Scaling fast, need systems', value: 'scaling', icon: '⚡' },
    ],
  },
  {
    id: 3,
    question: 'What keeps you up at night?',
    options: [
      { text: 'Tax compliance and audits', value: 'tax', icon: '😰' },
      { text: 'Not enough leads or sales', value: 'marketing', icon: '📉' },
      { text: 'Operational inefficiencies', value: 'operations', icon: '⚙️' },
      { text: 'Risk and liability concerns', value: 'risk', icon: '⚠️' },
    ],
  },
  {
    id: 4,
    question: 'How tech-savvy is your business?',
    options: [
      { text: 'Still using spreadsheets for everything', value: 'basic', icon: '📝' },
      { text: 'Have some tools but not integrated', value: 'intermediate', icon: '🔧' },
      { text: 'Pretty automated, want to optimize', value: 'advanced', icon: '🤖' },
      { text: 'Ready for AI and automation', value: 'cutting-edge', icon: '🚀' },
    ],
  },
];

const StartHere = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const calculatedResult = calculateResult(newAnswers);
      setResult(calculatedResult);
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = (userAnswers: Record<number, string>): Result => {
    const answerValues = Object.values(userAnswers);
    
    // Count answer patterns
    const counts = {
      finance: answerValues.filter(a => a === 'finance').length,
      tax: answerValues.filter(a => a === 'tax').length,
      insurance: answerValues.filter(a => ['insurance', 'risk'].includes(a)).length,
      growth: answerValues.filter(a => ['growth', 'marketing'].includes(a)).length,
      tech: answerValues.filter(a => ['advanced', 'cutting-edge'].includes(a)).length,
      chaos: answerValues.filter(a => ['chaos', 'operations'].includes(a)).length,
    };

    // Determine primary need
    if (counts.chaos >= 2 || answerValues.includes('chaos')) {
      return {
        title: 'Foundation & Cleanup Package',
        description: 'You need to stabilize operations before you can grow. We\'ll clean up your books, organize your systems, and create a solid foundation.',
        services: ['Bookkeeping & Accounting', 'Business Consulting', 'Tax Preparation'],
        cta: 'Start with Foundation Services',
        route: '/services/bookkeeping-accounting',
      };
    }

    if (counts.tax >= 2) {
      return {
        title: 'Tax Optimization Package',
        description: 'Tax strategy is your priority. We\'ll minimize your tax burden through proactive planning and strategic entity structuring.',
        services: ['Tax Strategy & Planning', 'Strategic Tax Planning', 'Tax Preparation'],
        cta: 'Explore Tax Services',
        route: '/services/tax-strategy',
      };
    }

    if (counts.insurance >= 2) {
      return {
        title: 'Risk Protection Package',
        description: 'Protecting your business is critical. We\'ll assess your risks, close coverage gaps, and ensure you\'re properly insured.',
        services: ['Risk Architecture', 'Insurance Services', 'Business Consulting'],
        cta: 'Protect Your Business',
        route: '/services/risk-architecture',
      };
    }

    if (counts.tech >= 2 || counts.growth >= 2) {
      return {
        title: 'Growth & Automation Package',
        description: 'You\'re ready to scale. We\'ll implement AI automation, streamline your operations, and build systems that support rapid growth.',
        services: ['AI & Automation', 'Business Process Automation', 'Business Consulting'],
        cta: 'Accelerate Your Growth',
        route: '/services/ai-driven-growth',
      };
    }

    // Default: Comprehensive package
    return {
      title: 'Comprehensive Business Package',
      description: 'You need integrated support across multiple areas. Our full-service approach ensures everything works together seamlessly.',
      services: ['Business Consulting', 'Tax Services', 'Insurance Services', 'AI Automation'],
      cta: 'See All Services',
      route: '/services',
    };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <SEO
        title="Start Here - Find Your Perfect Service Package | MRECAI"
        description="Take our quick 4-question quiz to discover which services are right for your business. Get personalized recommendations in under 2 minutes."
        canonical="/start-here"
        keywords="business assessment, service finder, business needs quiz, personalized recommendations"
      />

      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto">
            {!showResult ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                    Find Your Perfect Service Package
                  </h1>
                  <p className="text-xl text-gray-600">
                    Answer 4 quick questions to get personalized recommendations
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleAnswer(option.value)}
                          className="w-full text-left p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all group"
                        >
                          <div className="flex items-center">
                            <span className="text-4xl mr-4">{option.icon}</span>
                            <span className="text-lg font-semibold text-navy-900 group-hover:text-primary-600">
                              {option.text}
                            </span>
                            <FaArrowRight className="ml-auto text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Back Button */}
                    {currentQuestion > 0 && (
                      <button
                        onClick={handleBack}
                        className="mt-8 flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <FaArrowLeft className="mr-2" />
                        Previous Question
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Result Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <FaCheckCircle className="text-4xl text-white" />
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
                    {result?.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-8 text-center">
                    {result?.description}
                  </p>

                  {/* Recommended Services */}
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-navy-900 mb-4">
                      Recommended Services:
                    </h3>
                    <ul className="space-y-3">
                      {result?.services.map((service, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center text-navy-900"
                        >
                          <FaCheckCircle className="text-primary-600 mr-3 flex-shrink-0" />
                          <span className="font-semibold">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-4">
                    <button
                      onClick={() => router.push(result?.route || '/services')}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center text-lg"
                    >
                      {result?.cta}
                      <FaArrowRight className="ml-3" />
                    </button>

                    <button
                      onClick={() => router.push('/book-now')}
                      className="w-full bg-white border-2 border-primary-500 text-primary-600 font-bold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all flex items-center justify-center text-lg"
                    >
                      Book Free Consultation
                    </button>

                    <button
                      onClick={() => {
                        setCurrentQuestion(0);
                        setAnswers({});
                        setShowResult(false);
                        setResult(null);
                      }}
                      className="w-full text-gray-600 hover:text-primary-600 transition-colors py-2"
                    >
                      ← Start Over
                    </button>
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

export default StartHere;

'use client';

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';

export type CTASectionVariant = 'default' | 'consultation' | 'download' | 'contact' | 'services';

interface CTASectionProps {
  variant?: CTASectionVariant;
  title?: string;
  description?: string;
  primaryCTA?: {
    text?: string;
    to?: string;
    type?: 'book' | 'call' | 'email' | 'learn' | 'download';
  };
  secondaryCTA?: {
    text?: string;
    to?: string;
    type?: 'book' | 'call' | 'email' | 'learn' | 'download';
  };
  showTrustSignals?: boolean;
  background?: 'gradient' | 'white' | 'gray';
  className?: string;
}

const CTASection = ({
  variant = 'default',
  title,
  description,
  primaryCTA,
  secondaryCTA,
  showTrustSignals = true,
  background = 'gradient',
  className = '',
}: CTASectionProps) => {
  // Default content based on variant
  const variantContent = {
    default: {
      title: 'Ready to Get Started?',
      description: 'Book a free consultation to discuss your needs. No pressure, no obligation—just practical guidance.',
      primaryCTA: { text: 'Get Started', type: 'book' as const },
      secondaryCTA: { text: 'Book Consultation', type: 'call' as const },
    },
    consultation: {
      title: 'Let\'s Talk About Your Business',
      description: 'Schedule a free 30-minute consultation. We\'ll discuss your challenges and show you exactly how we can help.',
      primaryCTA: { text: 'Get Started', type: 'book' as const },
      secondaryCTA: { text: 'Book Consultation', type: 'call' as const },
    },
    download: {
      title: 'Want to Learn More?',
      description: 'Download our comprehensive services guide to see how we can help your business thrive.',
      primaryCTA: { text: 'Download Free Guide', type: 'download' as const },
      secondaryCTA: { text: 'Get Started', type: 'book' as const },
    },
    contact: {
      title: 'Have Questions?',
      description: 'We\'re here to help. Reach out by phone, email, or schedule a time to talk.',
      primaryCTA: { text: 'Get Started', type: 'book' as const },
      secondaryCTA: { text: 'Email Us', type: 'email' as const },
    },
    services: {
      title: 'Explore Our Services',
      description: 'See how our integrated approach to tax, insurance, technology, and business consulting can help you succeed.',
      primaryCTA: { text: 'View All Services', type: 'learn' as const },
      secondaryCTA: { text: 'Get Started', type: 'book' as const },
    },
  };

  const content = variantContent[variant];
  const finalTitle = title || content.title;
  const finalDescription = description || content.description;
  const finalPrimaryCTA = primaryCTA || content.primaryCTA;
  const finalSecondaryCTA = secondaryCTA || content.secondaryCTA;

  // Background classes
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-navy-900 to-navy-800 text-white',
    white: 'bg-white text-navy-900',
    gray: 'bg-gray-50 text-navy-900',
  };

  const trustSignals = [
    { icon: FaCheckCircle, text: 'Free Consultation' },
    { icon: FaShieldAlt, text: 'No Obligation' },
    { icon: FaClock, text: 'Fast Response' },
  ];

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {finalTitle}
          </h2>
          <p className={`text-xl mb-8 ${background === 'gradient' ? 'text-gray-300' : 'text-gray-600'}`}>
            {finalDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CTAButton
              type={finalPrimaryCTA.type}
              to={'to' in finalPrimaryCTA ? finalPrimaryCTA.to : undefined}
              variant={background === 'gradient' ? 'secondary' : 'primary'}
              size="lg"
            >
              {finalPrimaryCTA.text}
            </CTAButton>
            {finalSecondaryCTA && (
              <CTAButton
                type={finalSecondaryCTA.type}
                to={'to' in finalSecondaryCTA ? finalSecondaryCTA.to : undefined}
                variant={background === 'gradient' ? 'outline' : 'outline'}
                size="lg"
              >
                {finalSecondaryCTA.text}
              </CTAButton>
            )}
          </div>

          {/* Trust Signals */}
          {showTrustSignals && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <signal.icon className={background === 'gradient' ? 'text-primary-400' : 'text-primary-600'} />
                  <span className={`text-sm font-semibold ${background === 'gradient' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {signal.text}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Reassurance Microcopy */}
          <p className={`text-sm mt-6 ${background === 'gradient' ? 'text-gray-400' : 'text-gray-500'}`}>
            🔒 Your information is secure. We respect your privacy and will never share your details.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

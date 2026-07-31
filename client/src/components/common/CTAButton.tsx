'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaCalendarAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export type CTAVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type CTASize = 'sm' | 'md' | 'lg' | 'xl';
export type CTAType = 'book' | 'call' | 'email' | 'learn' | 'download' | 'startHere' | 'custom';

interface CTAButtonProps {
  type?: CTAType;
  variant?: CTAVariant;
  size?: CTASize;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: IconType;
  children?: React.ReactNode;
  fullWidth?: boolean;
  animate?: boolean;
  reassurance?: string;
  className?: string;
}

const CTAButton = ({
  type = 'book',
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon,
  children,
  fullWidth = false,
  animate = true,
  reassurance,
  className = '',
}: CTAButtonProps) => {
  // Default content based on type
  const defaultContent = {
    book: { text: 'Get Started', icon: FaCalendarAlt, to: '/book-now' },
    call: { text: 'Book Consultation', icon: FaPhone, href: 'tel:929-919-3574' },
    email: { text: 'Email Us', icon: FaEnvelope, href: 'mailto:info@mrecai.com' },
    learn: { text: 'Learn More', icon: FaArrowRight, to: '/services' },
    download: { text: 'Download Guide', icon: FaArrowRight, to: '/download-services-guide' },
    startHere: { text: 'Start Here', icon: FaArrowRight, to: '/start-here' },
    custom: { text: children || 'Click Here', icon: icon || FaArrowRight, to: to || '#' },
  };

  const content = type === 'custom' ? defaultContent.custom : defaultContent[type];
  const Icon = icon || content.icon;
  const buttonText = children || content.text;
  const destination = to || ('to' in content ? content.to : undefined) || href || ('href' in content ? content.href : undefined);

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl hover:scale-105',
    secondary: 'bg-white text-navy-900 hover:bg-gray-100 shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy-900',
    ghost: 'text-primary-600 hover:bg-primary-50',
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-xl
    transition-all duration-300
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const buttonContent = (
    <>
      {Icon && <Icon className="mr-2" />}
      {buttonText}
    </>
  );

  const ButtonWrapper = animate ? motion.div : 'div';
  const animationProps = animate
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      }
    : {};

  const button = destination?.startsWith('http') || destination?.startsWith('tel:') || destination?.startsWith('mailto:') ? (
    <a href={destination} className={baseClasses} onClick={onClick}>
      {buttonContent}
    </a>
  ) : destination ? (
    <Link href={destination} className={baseClasses} onClick={onClick}>
      {buttonContent}
    </Link>
  ) : (
    <button className={baseClasses} onClick={onClick}>
      {buttonContent}
    </button>
  );

  return (
    <div className={fullWidth ? 'w-full' : 'inline-block'}>
      <ButtonWrapper {...animationProps}>{button}</ButtonWrapper>
      {reassurance && (
        <p className="text-sm text-gray-500 mt-2 text-center">
          {reassurance}
        </p>
      )}
    </div>
  );
};

export default CTAButton;


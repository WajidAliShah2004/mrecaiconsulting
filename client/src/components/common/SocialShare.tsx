'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaLink, FaCheck } from 'react-icons/fa';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

const SocialShare = ({ url, title, description = '', className = '' }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const fullUrl = url.startsWith('http') ? url : `https://mrecai.com${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string, link: string) => {
    window.open(link, '_blank', 'width=600,height=400');
    
    // Track share event (optional - add analytics here)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: platform,
        content_type: 'article',
        item_id: url,
      });
    }
  };

  const socialButtons = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      color: 'hover:bg-[#0077B5] hover:text-white',
      bgColor: 'bg-[#0077B5]/10',
      textColor: 'text-[#0077B5]',
      link: shareLinks.linkedin,
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      color: 'hover:bg-[#1DA1F2] hover:text-white',
      bgColor: 'bg-[#1DA1F2]/10',
      textColor: 'text-[#1DA1F2]',
      link: shareLinks.twitter,
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      color: 'hover:bg-[#1877F2] hover:text-white',
      bgColor: 'bg-[#1877F2]/10',
      textColor: 'text-[#1877F2]',
      link: shareLinks.facebook,
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      color: 'hover:bg-gray-600 hover:text-white',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600',
      link: shareLinks.email,
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm font-semibold text-gray-600 mr-2">Share:</span>
      
      {/* Social Buttons */}
      {socialButtons.map((social) => (
        <motion.button
          key={social.name}
          onClick={() => handleShare(social.name, social.link)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full ${social.bgColor} ${social.textColor} ${social.color} flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}
          aria-label={`Share on ${social.name}`}
          title={`Share on ${social.name}`}
        >
          <social.icon className="text-lg" />
        </motion.button>
      ))}

      {/* Copy Link Button */}
      <motion.button
        onClick={handleCopyLink}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-10 h-10 rounded-full ${
          copied
            ? 'bg-green-100 text-green-600'
            : 'bg-gray-100 text-gray-600 hover:bg-primary-500 hover:text-white'
        } flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}
        aria-label="Copy link"
        title={copied ? 'Link copied!' : 'Copy link'}
      >
        {copied ? <FaCheck className="text-lg" /> : <FaLink className="text-lg" />}
      </motion.button>
    </div>
  );
};

export default SocialShare;

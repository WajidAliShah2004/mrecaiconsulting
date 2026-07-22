// Google Analytics 4 (GA4) Tracking Utilities
// This file provides utilities for tracking events and conversions in GA4

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// GA4 Measurement ID - Replace with your actual GA4 ID
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with actual GA4 ID

/**
 * Initialize Google Analytics 4
 * Call this once when the app loads
 */
export const initGA4 = () => {
  if (typeof window === 'undefined') return;

  // Create gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  // Initialize with timestamp
  window.gtag('js', new Date());

  // Configure GA4
  window.gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure',
  });
};

/**
 * Track page views
 * Call this on route changes
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: title || document.title,
  });
};

/**
 * Track custom events
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, eventParams);
};

// ============================================
// CONVERSION TRACKING FUNCTIONS
// ============================================

/**
 * Track when user books a consultation
 */
export const trackBookConsultation = (method: 'form' | 'phone' | 'calendly') => {
  trackEvent('book_consultation', {
    event_category: 'conversion',
    event_label: method,
    value: 1,
  });

  // Also track as a conversion
  trackEvent('conversion', {
    send_to: `${GA4_MEASUREMENT_ID}/book_consultation`,
  });
};

/**
 * Track when user submits contact form
 */
export const trackContactFormSubmit = (formType: string) => {
  trackEvent('contact_form_submit', {
    event_category: 'conversion',
    event_label: formType,
    value: 1,
  });

  trackEvent('conversion', {
    send_to: `${GA4_MEASUREMENT_ID}/contact_form`,
  });
};

/**
 * Track when user downloads a resource
 */
export const trackDownload = (resourceName: string) => {
  trackEvent('download', {
    event_category: 'engagement',
    event_label: resourceName,
    value: 1,
  });

  trackEvent('conversion', {
    send_to: `${GA4_MEASUREMENT_ID}/download`,
  });
};

/**
 * Track when user completes the Start Here quiz
 */
export const trackQuizComplete = (result: string) => {
  trackEvent('quiz_complete', {
    event_category: 'engagement',
    event_label: result,
    value: 1,
  });

  trackEvent('conversion', {
    send_to: `${GA4_MEASUREMENT_ID}/quiz_complete`,
  });
};

/**
 * Track when user clicks phone number
 */
export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', {
    event_category: 'conversion',
    event_label: location,
    value: 1,
  });

  trackEvent('conversion', {
    send_to: `${GA4_MEASUREMENT_ID}/phone_click`,
  });
};

/**
 * Track when user clicks email
 */
export const trackEmailClick = (location: string) => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1,
  });
};

/**
 * Track when user views a service page
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent('view_service', {
    event_category: 'engagement',
    event_label: serviceName,
    value: 1,
  });
};

/**
 * Track when user views a service bundle
 */
export const trackBundleView = (bundleName: string) => {
  trackEvent('view_bundle', {
    event_category: 'engagement',
    event_label: bundleName,
    value: 1,
  });
};

/**
 * Track when user clicks CTA button
 */
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: `${ctaText} - ${location}`,
    value: 1,
  });
};

/**
 * Track when user starts the quiz
 */
export const trackQuizStart = () => {
  trackEvent('quiz_start', {
    event_category: 'engagement',
    value: 1,
  });
};

/**
 * Track when user answers a quiz question
 */
export const trackQuizAnswer = (questionNumber: number, answer: string) => {
  trackEvent('quiz_answer', {
    event_category: 'engagement',
    event_label: `Q${questionNumber}: ${answer}`,
    value: 1,
  });
};

/**
 * Track when user views blog post
 */
export const trackBlogView = (postTitle: string) => {
  trackEvent('view_blog_post', {
    event_category: 'engagement',
    event_label: postTitle,
    value: 1,
  });
};

/**
 * Track when user shares content
 */
export const trackShare = (platform: string, content: string) => {
  trackEvent('share', {
    event_category: 'engagement',
    event_label: `${platform} - ${content}`,
    value: 1,
  });
};

/**
 * Track when user scrolls to specific depth
 */
export const trackScroll = (depth: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth,
  });
};

/**
 * Track when user spends significant time on page
 */
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  trackEvent('time_on_page', {
    event_category: 'engagement',
    event_label: pageName,
    value: seconds,
  });
};

// ============================================
// ECOMMERCE TRACKING (for future use)
// ============================================

/**
 * Track when user views a service bundle (ecommerce)
 */
export const trackViewItem = (item: {
  id: string;
  name: string;
  category: string;
  price: number;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'view_item', {
    currency: 'USD',
    value: item.price,
    items: [
      {
        item_id: item.id,
        item_name: item.name,
        item_category: item.category,
        price: item.price,
      },
    ],
  });
};

/**
 * Track when user begins checkout (books consultation)
 */
export const trackBeginCheckout = (item: {
  id: string;
  name: string;
  category: string;
  price: number;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'begin_checkout', {
    currency: 'USD',
    value: item.price,
    items: [
      {
        item_id: item.id,
        item_name: item.name,
        item_category: item.category,
        price: item.price,
      },
    ],
  });
};

/**
 * Track when user completes purchase (signs contract)
 */
export const trackPurchase = (transaction: {
  transaction_id: string;
  value: number;
  items: Array<{
    id: string;
    name: string;
    category: string;
    price: number;
  }>;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'purchase', {
    transaction_id: transaction.transaction_id,
    currency: 'USD',
    value: transaction.value,
    items: transaction.items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
    })),
  });
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Check if GA4 is loaded and ready
 */
export const isGA4Ready = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Set user properties (for logged-in users)
 */
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('set', 'user_properties', properties);
};

/**
 * Set user ID (for logged-in users)
 */
export const setUserId = (userId: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA4_MEASUREMENT_ID, {
    user_id: userId,
  });
};

export default {
  initGA4,
  trackPageView,
  trackEvent,
  trackBookConsultation,
  trackContactFormSubmit,
  trackDownload,
  trackQuizComplete,
  trackPhoneClick,
  trackEmailClick,
  trackServiceView,
  trackBundleView,
  trackCTAClick,
  trackQuizStart,
  trackQuizAnswer,
  trackBlogView,
  trackShare,
  trackScroll,
  trackTimeOnPage,
  trackViewItem,
  trackBeginCheckout,
  trackPurchase,
  isGA4Ready,
  setUserProperties,
  setUserId,
};

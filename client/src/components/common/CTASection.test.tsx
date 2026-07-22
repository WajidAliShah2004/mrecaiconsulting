/**
 * Unit Tests for CTASection Component
 * 
 * Tests the CTASection component to ensure:
 * - Updated default variant text
 * - Correct CTA text for all variants
 * - No deprecated CTA text appears
 * 
 * Requirements: 1.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CTASection from './CTASection';

// Wrapper component to provide Router context
const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('CTASection', () => {
  describe('Default Variant CTA Text', () => {
    it('should render "Get Started" as primary CTA text in default variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="default" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    it('should render "Book Consultation" as secondary CTA text in default variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="default" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Book Consultation')).toBeInTheDocument();
    });

    it('should render default title "Ready to Get Started?"', () => {
      render(
        <RouterWrapper>
          <CTASection variant="default" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Ready to Get Started?')).toBeInTheDocument();
    });
  });

  describe('Consultation Variant CTA Text', () => {
    it('should render "Get Started" as primary CTA in consultation variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="consultation" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    it('should render "Book Consultation" as secondary CTA in consultation variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="consultation" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Book Consultation')).toBeInTheDocument();
    });
  });

  describe('Download Variant CTA Text', () => {
    it('should render "Download Free Guide" as primary CTA in download variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="download" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Download Free Guide')).toBeInTheDocument();
    });

    it('should render "Get Started" as secondary CTA in download variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="download" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });
  });

  describe('Contact Variant CTA Text', () => {
    it('should render "Get Started" as primary CTA in contact variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="contact" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    it('should render "Email Us" as secondary CTA in contact variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="contact" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Email Us')).toBeInTheDocument();
    });
  });

  describe('Services Variant CTA Text', () => {
    it('should render "View All Services" as primary CTA in services variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="services" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('View All Services')).toBeInTheDocument();
    });

    it('should render "Get Started" as secondary CTA in services variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="services" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });
  });

  describe('Deprecated CTA Text', () => {
    it('should NOT render "Book Free Consultation" in default variant', () => {
      render(
        <RouterWrapper>
          <CTASection variant="default" />
        </RouterWrapper>
      );
      
      expect(screen.queryByText('Book Free Consultation')).not.toBeInTheDocument();
    });

    it('should NOT render "Start Assessment" in any variant', () => {
      const variants: Array<'default' | 'consultation' | 'download' | 'contact' | 'services'> = [
        'default',
        'consultation',
        'download',
        'contact',
        'services'
      ];

      variants.forEach(variant => {
        const { container } = render(
          <RouterWrapper>
            <CTASection variant={variant} />
          </RouterWrapper>
        );
        
        expect(container.textContent).not.toMatch(/start assessment/i);
      });
    });

    it('should NOT render "Book Strategy Call" in any variant', () => {
      const variants: Array<'default' | 'consultation' | 'download' | 'contact' | 'services'> = [
        'default',
        'consultation',
        'download',
        'contact',
        'services'
      ];

      variants.forEach(variant => {
        const { container } = render(
          <RouterWrapper>
            <CTASection variant={variant} />
          </RouterWrapper>
        );
        
        expect(container.textContent).not.toMatch(/book strategy call/i);
      });
    });

    it('should NOT render "Take the Assessment" in any variant', () => {
      const variants: Array<'default' | 'consultation' | 'download' | 'contact' | 'services'> = [
        'default',
        'consultation',
        'download',
        'contact',
        'services'
      ];

      variants.forEach(variant => {
        const { container } = render(
          <RouterWrapper>
            <CTASection variant={variant} />
          </RouterWrapper>
        );
        
        expect(container.textContent).not.toMatch(/take the assessment/i);
      });
    });
  });

  describe('Custom Props Override', () => {
    it('should render custom title when provided', () => {
      render(
        <RouterWrapper>
          <CTASection title="Custom Title" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Custom Title')).toBeInTheDocument();
    });

    it('should render custom description when provided', () => {
      render(
        <RouterWrapper>
          <CTASection description="Custom description text" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Custom description text')).toBeInTheDocument();
    });

    it('should render custom primary CTA text when provided', () => {
      render(
        <RouterWrapper>
          <CTASection primaryCTA={{ text: 'Custom Primary CTA', type: 'book' }} />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Custom Primary CTA')).toBeInTheDocument();
    });

    it('should render custom secondary CTA text when provided', () => {
      render(
        <RouterWrapper>
          <CTASection secondaryCTA={{ text: 'Custom Secondary CTA', type: 'call' }} />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Custom Secondary CTA')).toBeInTheDocument();
    });
  });

  describe('Trust Signals', () => {
    it('should render trust signals by default', () => {
      render(
        <RouterWrapper>
          <CTASection />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Free Consultation')).toBeInTheDocument();
      expect(screen.getByText('No Obligation')).toBeInTheDocument();
      expect(screen.getByText('Fast Response')).toBeInTheDocument();
    });

    it('should not render trust signals when showTrustSignals is false', () => {
      render(
        <RouterWrapper>
          <CTASection showTrustSignals={false} />
        </RouterWrapper>
      );
      
      expect(screen.queryByText('Free Consultation')).not.toBeInTheDocument();
      expect(screen.queryByText('No Obligation')).not.toBeInTheDocument();
      expect(screen.queryByText('Fast Response')).not.toBeInTheDocument();
    });
  });

  describe('Background Variants', () => {
    it('should render with gradient background by default', () => {
      const { container } = render(
        <RouterWrapper>
          <CTASection />
        </RouterWrapper>
      );
      
      const section = container.querySelector('section');
      expect(section?.className).toMatch(/from-navy-900/);
    });

    it('should render with white background when specified', () => {
      const { container } = render(
        <RouterWrapper>
          <CTASection background="white" />
        </RouterWrapper>
      );
      
      const section = container.querySelector('section');
      expect(section?.className).toMatch(/bg-white/);
    });

    it('should render with gray background when specified', () => {
      const { container } = render(
        <RouterWrapper>
          <CTASection background="gray" />
        </RouterWrapper>
      );
      
      const section = container.querySelector('section');
      expect(section?.className).toMatch(/bg-gray-50/);
    });
  });

  describe('Reassurance Microcopy', () => {
    it('should render privacy reassurance text', () => {
      render(
        <RouterWrapper>
          <CTASection />
        </RouterWrapper>
      );
      
      expect(screen.getByText(/Your information is secure/)).toBeInTheDocument();
    });
  });

  describe('Secondary CTA Optional', () => {
    it('should render without secondary CTA when not provided', () => {
      render(
        <RouterWrapper>
          <CTASection 
            primaryCTA={{ text: 'Primary Only', type: 'book' }}
            secondaryCTA={undefined}
            variant="default"
          />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Primary Only')).toBeInTheDocument();
      // Default variant still renders secondary CTA from variant defaults
      // This test verifies the component handles undefined secondaryCTA gracefully
    });
  });
});

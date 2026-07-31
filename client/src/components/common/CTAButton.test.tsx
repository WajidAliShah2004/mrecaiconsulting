/**
 * Unit Tests for CTAButton Component
 * 
 * Tests the CTAButton component to ensure:
 * - Correct default text for each type
 * - Updated CTA text (no deprecated text)
 * - Proper rendering with custom children
 * 
 * Requirements: 1.1, 1.2
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CTAButton from './CTAButton';

// Wrapper component to provide Router context
const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('CTAButton', () => {
  describe('Default Text for Each Type', () => {
    it('should render "Get Started" as default text for book type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="book" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    it('should render "Book Consultation" as default text for call type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="call" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Book Consultation')).toBeInTheDocument();
    });

    it('should render "Email Us" as default text for email type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="email" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Email Us')).toBeInTheDocument();
    });

    it('should render "Learn More" as default text for learn type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="learn" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Learn More')).toBeInTheDocument();
    });

    it('should render "Download Guide" as default text for download type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="download" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Download Guide')).toBeInTheDocument();
    });

    it('should render "Start Here" as default text for startHere type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="startHere" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Start Here')).toBeInTheDocument();
    });
  });

  describe('Deprecated CTA Text', () => {
    it('should NOT render "Book Free Consultation" for book type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="book" />
        </RouterWrapper>
      );
      
      expect(screen.queryByText('Book Free Consultation')).not.toBeInTheDocument();
    });

    it('should NOT render "Start Assessment" anywhere', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="book" />
        </RouterWrapper>
      );
      
      expect(container.textContent).not.toMatch(/start assessment/i);
    });

    it('should NOT render "Book Strategy Call" anywhere', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="call" />
        </RouterWrapper>
      );
      
      expect(container.textContent).not.toMatch(/book strategy call/i);
    });

    it('should NOT render "Take the Assessment" anywhere', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="custom">Custom Text</CTAButton>
        </RouterWrapper>
      );
      
      expect(container.textContent).not.toMatch(/take the assessment/i);
    });
  });

  describe('Custom Children Override', () => {
    it('should render custom children text when provided', () => {
      render(
        <RouterWrapper>
          <CTAButton type="book">Custom Button Text</CTAButton>
        </RouterWrapper>
      );
      
      expect(screen.getByText('Custom Button Text')).toBeInTheDocument();
    });

    it('should override default text with custom children for any type', () => {
      render(
        <RouterWrapper>
          <CTAButton type="call">Contact Now</CTAButton>
        </RouterWrapper>
      );
      
      expect(screen.getByText('Contact Now')).toBeInTheDocument();
      expect(screen.queryByText('Book Consultation')).not.toBeInTheDocument();
    });
  });

  describe('Variants and Sizes', () => {
    it('should render with primary variant', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="book" variant="primary" />
        </RouterWrapper>
      );
      
      const button = container.querySelector('a');
      expect(button?.className).toMatch(/from-primary-500/);
    });

    it('should render with secondary variant', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="book" variant="secondary" />
        </RouterWrapper>
      );
      
      const button = container.querySelector('a');
      expect(button?.className).toMatch(/bg-white/);
    });

    it('should render with correct size classes', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="book" size="xl" />
        </RouterWrapper>
      );
      
      const button = container.querySelector('a');
      expect(button?.className).toMatch(/px-10/);
      expect(button?.className).toMatch(/py-5/);
    });
  });

  describe('Links and Destinations', () => {
    it('should render as Link component for internal routes', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="book" to="/custom-route" />
        </RouterWrapper>
      );
      
      const link = container.querySelector('a');
      expect(link).toHaveAttribute('href', '/custom-route');
    });

    it('should render as anchor tag for external URLs', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="custom" to="https://example.com">External Link</CTAButton>
        </RouterWrapper>
      );
      
      const link = container.querySelector('a');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('should render as anchor tag for tel: links', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="call" />
        </RouterWrapper>
      );
      
      const link = container.querySelector('a');
      expect(link).toHaveAttribute('href', 'tel:929-919-3574');
    });

    it('should render as anchor tag for mailto: links', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="email" />
        </RouterWrapper>
      );
      
      const link = container.querySelector('a');
      expect(link).toHaveAttribute('href', 'mailto:info@mrecai.com');
    });
  });

  describe('Reassurance Text', () => {
    it('should render reassurance text when provided', () => {
      render(
        <RouterWrapper>
          <CTAButton type="book" reassurance="No credit card required" />
        </RouterWrapper>
      );
      
      expect(screen.getByText('No credit card required')).toBeInTheDocument();
    });

    it('should not render reassurance text when not provided', () => {
      const { container } = render(
        <RouterWrapper>
          <CTAButton type="book" />
        </RouterWrapper>
      );
      
      const reassuranceElements = container.querySelectorAll('.text-sm.text-gray-500');
      expect(reassuranceElements.length).toBe(0);
    });
  });
});

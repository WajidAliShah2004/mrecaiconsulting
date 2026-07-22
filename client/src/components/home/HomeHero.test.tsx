/**
 * Unit Tests for HomeHero Component
 * 
 * Tests the HomeHero component to ensure:
 * - "Get Started" button renders correctly
 * - "Book Consultation" button renders correctly
 * - Deprecated CTA text does not appear
 * 
 * Requirements: 1.1, 1.2
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeHero from './HomeHero';

// Wrapper component to provide Router context
const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('HomeHero', () => {
  describe('Primary CTA Button', () => {
    it('should render "Get Started" as primary CTA text', () => {
      render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    it('should link primary CTA to /start-here', () => {
      render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      const getStartedLink = screen.getByText('Get Started').closest('a');
      expect(getStartedLink).toHaveAttribute('href', '/start-here');
    });
  });

  describe('Secondary CTA Button', () => {
    it('should render "Book Consultation" as secondary CTA text', () => {
      render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(screen.getByText('Book Consultation')).toBeInTheDocument();
    });

    it('should link secondary CTA to /book-now', () => {
      render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      const bookConsultationLink = screen.getByText('Book Consultation').closest('a');
      expect(bookConsultationLink).toHaveAttribute('href', '/book-now');
    });
  });

  describe('Deprecated CTA Text', () => {
    it('should NOT render "Start Assessment" anywhere', () => {
      const { container } = render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(container.textContent).not.toMatch(/start assessment/i);
    });

    it('should NOT render "Book Strategy Call" anywhere', () => {
      const { container } = render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(container.textContent).not.toMatch(/book strategy call/i);
    });

    it('should NOT render "Book Free Consultation" anywhere', () => {
      const { container } = render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(container.textContent).not.toMatch(/book free consultation/i);
    });
  });

  describe('Hero Content', () => {
    it('should render the main headline', () => {
      render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(screen.getByText(/AI-Powered Business/i)).toBeInTheDocument();
      expect(screen.getByText(/Transformation/i)).toBeInTheDocument();
    });

    it('should render the company badge', () => {
      render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(screen.getByText('MRECAI')).toBeInTheDocument();
    });

    it('should render trust indicators', () => {
      render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      expect(screen.getByText('180+')).toBeInTheDocument();
      expect(screen.getByText('98%')).toBeInTheDocument();
      expect(screen.getByText('4.9')).toBeInTheDocument();
    });
  });

  describe('CTA Button Styling', () => {
    it('should render primary CTA with prominent styling', () => {
      const { container } = render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      const getStartedLink = screen.getByText('Get Started').closest('a');
      expect(getStartedLink?.className).toMatch(/bg-white/);
      expect(getStartedLink?.className).toMatch(/text-navy-900/);
    });

    it('should render secondary CTA with outline styling', () => {
      const { container } = render(
        <RouterWrapper>
          <HomeHero />
        </RouterWrapper>
      );
      
      const bookConsultationLink = screen.getByText('Book Consultation').closest('a');
      expect(bookConsultationLink?.className).toMatch(/border/);
      expect(bookConsultationLink?.className).toMatch(/text-white/);
    });
  });
});

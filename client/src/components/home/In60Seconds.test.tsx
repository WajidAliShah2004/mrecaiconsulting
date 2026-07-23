/**
 * Unit Tests for In60Seconds Component
 *
 * Tests the In60Seconds component to ensure:
 * - "families and businesses in all 50 states" appears in the text
 * - Only currently offered services are listed
 * - Services are in the correct order
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import In60Seconds from './In60Seconds';

describe('In60Seconds', () => {
  describe('Geographic Reach Text', () => {
    it('should display "families and businesses in all 50 states" in the description', () => {
      const { container } = render(<In60Seconds />);

      expect(container.textContent).toMatch(/families and businesses in all 50 states/i);
    });

    it('should mention New York as the headquarters location', () => {
      render(<In60Seconds />);

      expect(screen.getByText(/New York/i)).toBeInTheDocument();
    });

    it('should describe MRE as a full-service tax, insurance, and finance consulting firm', () => {
      const { container } = render(<In60Seconds />);

      expect(container.textContent).toMatch(/full-service tax, insurance, and finance consulting firm/i);
    });
  });

  describe('Removed Services - No Longer Offered', () => {
    it('should not list software development or creative services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      expect(text).not.toMatch(/Custom Software Development/i);
      expect(text).not.toMatch(/Website Development/i);
      expect(text).not.toMatch(/Digital Marketing/i);
      expect(text).not.toMatch(/Graphic Design/i);
      expect(text).not.toMatch(/Video Production/i);
    });
  });

  describe('Service Order and Structure', () => {
    it('should display tax services before business consulting', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      const taxPosition = text.indexOf('Strategic Tax Planning');
      const consultingPosition = text.indexOf('Business Management Consulting');

      expect(taxPosition).toBeGreaterThan(-1);
      expect(consultingPosition).toBeGreaterThan(-1);
      expect(taxPosition).toBeLessThan(consultingPosition);
    });

    it('should have Tax & Insurance Services section before Finance & Advisory Services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      const taxInsurancePosition = text.indexOf('Tax & Insurance Services');
      const financePosition = text.indexOf('Finance & Advisory Services');

      expect(taxInsurancePosition).toBeGreaterThan(-1);
      expect(financePosition).toBeGreaterThan(-1);
      expect(taxInsurancePosition).toBeLessThan(financePosition);
    });
  });

  describe('Tax & Insurance Services', () => {
    it('should display all Tax & Insurance Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText(/Strategic Tax Planning/i)).toBeInTheDocument();
      expect(screen.getByText(/Tax Preparation & Accounting/i)).toBeInTheDocument();
      expect(screen.getByText(/Insurance & Risk Architecture/i)).toBeInTheDocument();
    });

    it('should display section heading for Tax & Insurance Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText('Tax & Insurance Services')).toBeInTheDocument();
    });

    it('should not mention AI or automation services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      expect(text).not.toMatch(/\bAI\b/);
      expect(text).not.toMatch(/automation/i);
      expect(text).not.toMatch(/artificial intelligence/i);
    });
  });

  describe('Finance & Advisory Services', () => {
    it('should display all Finance & Advisory Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText(/Bookkeeping Services/i)).toBeInTheDocument();
      expect(screen.getByText(/Investment & Wealth Planning/i)).toBeInTheDocument();
      expect(screen.getByText(/Business Management Consulting/i)).toBeInTheDocument();
      expect(screen.getByText(/Estate Consulting/i)).toBeInTheDocument();
    });

    it('should display section heading for Finance & Advisory Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText('Finance & Advisory Services')).toBeInTheDocument();
    });
  });

  describe('Component Structure', () => {
    it('should render the "In 60 Seconds" badge', () => {
      render(<In60Seconds />);

      expect(screen.getByText('In 60 Seconds')).toBeInTheDocument();
    });

    it('should render the "What We Do" heading', () => {
      render(<In60Seconds />);

      expect(screen.getByText('What We Do')).toBeInTheDocument();
    });

    it('should render the advantage callout box', () => {
      const { container } = render(<In60Seconds />);

      expect(container.textContent).toMatch(/Our Advantage:/i);
      expect(container.textContent).toMatch(/One integrated partner/i);
    });

    it('should render checkmark icons for all services', () => {
      const { container } = render(<In60Seconds />);

      // Count SVG checkmark icons (should be 7 total: 2 AI + 5 business)
      const checkmarks = container.querySelectorAll('svg path[d*="M5 13l4 4L19 7"]');
      expect(checkmarks.length).toBeGreaterThanOrEqual(7);
    });
  });

  describe('Content Validation', () => {
    it('should not have bold styling on "businesses" in the main paragraph', () => {
      const { container } = render(<In60Seconds />);

      // The word "businesses" should appear in the text but not be wrapped in <strong> tags
      // when it appears in "families and businesses"
      const mainParagraph = container.querySelector('p.text-xl');
      expect(mainParagraph?.innerHTML).toMatch(/families and businesses/);

      // Check that "families and businesses" phrase doesn't have businesses in strong tags
      const text = mainParagraph?.innerHTML || '';
      const familiesAndBusinessesMatch = text.match(/families and <strong>businesses<\/strong> in all 50 states/);
      expect(familiesAndBusinessesMatch).toBeNull();
    });

    it('should display MRECAI brand name', () => {
      render(<In60Seconds />);

      expect(screen.getByText(/MRECAI/i)).toBeInTheDocument();
    });
  });
});

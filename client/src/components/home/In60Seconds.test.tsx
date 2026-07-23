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

    it('should describe MRE as AI-first professional services firm', () => {
      const { container } = render(<In60Seconds />);

      expect(container.textContent).toMatch(/AI-first professional services firm/i);
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
    it('should display services in the correct order within AI & Automation Services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      const aiPosition = text.indexOf('AI Consulting & Automation');
      const automationPosition = text.indexOf('Business Process Automation');

      expect(aiPosition).toBeGreaterThan(-1);
      expect(automationPosition).toBeGreaterThan(-1);
      expect(aiPosition).toBeLessThan(automationPosition);
    });

    it('should have AI & Automation Services section before Business Support Services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      const aiPosition = text.indexOf('AI & Automation Services');
      const businessPosition = text.indexOf('Business Support Services');

      expect(aiPosition).toBeGreaterThan(-1);
      expect(businessPosition).toBeGreaterThan(-1);
      expect(aiPosition).toBeLessThan(businessPosition);
    });
  });

  describe('AI & Automation Services', () => {
    it('should display all AI & Automation Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText(/AI Consulting & Automation/i)).toBeInTheDocument();
      expect(screen.getByText(/Business Process Automation/i)).toBeInTheDocument();
    });

    it('should display section heading for AI & Automation Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText('AI & Automation Services')).toBeInTheDocument();
    });
  });

  describe('Business Support Services', () => {
    it('should display all Business Support Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText(/Tax & Accounting/i)).toBeInTheDocument();
      expect(screen.getByText(/Insurance Consulting/i)).toBeInTheDocument();
      expect(screen.getByText(/Business Consulting/i)).toBeInTheDocument();
      expect(screen.getByText(/Investment Management/i)).toBeInTheDocument();
      expect(screen.getByText(/Estate Consulting/i)).toBeInTheDocument();
    });

    it('should display section heading for Business Support Services', () => {
      render(<In60Seconds />);

      expect(screen.getByText('Business Support Services')).toBeInTheDocument();
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

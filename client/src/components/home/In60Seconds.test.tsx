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

    it('should describe MRECAI as a full-service tax, insurance, and accounting firm', () => {
      const { container } = render(<In60Seconds />);

      expect(container.textContent).toMatch(/full-service tax, insurance, and accounting firm/i);
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

    it('should not mention AI or automation services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      expect(text).not.toMatch(/\bAI\b/);
      expect(text).not.toMatch(/automation/i);
      expect(text).not.toMatch(/artificial intelligence/i);
    });
  });

  describe('Our Services', () => {
    it('should display the "Our Services" section heading', () => {
      render(<In60Seconds />);

      expect(screen.getByText('Our Services')).toBeInTheDocument();
    });

    it('should display the three core services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      expect(text).toMatch(/Tax Services/i);
      expect(text).toMatch(/Insurance & Risk Architecture/i);
      expect(text).toMatch(/Bookkeeping & Accounting/i);
    });

    it('should display tax services before bookkeeping & accounting', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';

      const taxPosition = text.indexOf('Tax Services');
      const bookkeepingPosition = text.indexOf('Bookkeeping & Accounting');

      expect(taxPosition).toBeGreaterThan(-1);
      expect(bookkeepingPosition).toBeGreaterThan(-1);
      expect(taxPosition).toBeLessThan(bookkeepingPosition);
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
  });

  describe('Content Validation', () => {
    it('should display MRECAI brand name', () => {
      render(<In60Seconds />);

      expect(screen.getByText(/MRECAI/i)).toBeInTheDocument();
    });
  });
});

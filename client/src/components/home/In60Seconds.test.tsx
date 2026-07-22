/**
 * Unit Tests for In60Seconds Component
 * 
 * Tests the In60Seconds component to ensure:
 * - "families and businesses in all 50 states" appears in the text
 * - "Website Development" is in the services list
 * - Services are in the correct order
 * 
 * Requirements: 2.1, 3.1
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

    it('should describe MRE as technology-first business', () => {
      const { container } = render(<In60Seconds />);
      
      expect(container.textContent).toMatch(/technology-first business/i);
    });
  });

  describe('Website Development Service', () => {
    it('should display "Website Development" in the services list', () => {
      render(<In60Seconds />);
      
      expect(screen.getByText(/Website Development/i)).toBeInTheDocument();
    });

    it('should display Website Development description', () => {
      const { container } = render(<In60Seconds />);
      
      expect(container.textContent).toMatch(/Professional websites and web applications/i);
    });

    it('should display Website Development in Technology & Creative Services section', () => {
      render(<In60Seconds />);
      
      // Check that both the section heading and the service exist
      expect(screen.getByText('Technology & Creative Services')).toBeInTheDocument();
      expect(screen.getByText(/Website Development/i)).toBeInTheDocument();
    });
  });

  describe('Service Order and Structure', () => {
    it('should display services in the correct order within Technology & Creative Services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';
      
      // Get positions of each service in the text
      const aiPosition = text.indexOf('AI Consulting & Automation');
      const softwarePosition = text.indexOf('Custom Software Development');
      const websitePosition = text.indexOf('Website Development');
      const marketingPosition = text.indexOf('Digital Marketing & SEO');
      const graphicPosition = text.indexOf('Graphic Design & Branding');
      const videoPosition = text.indexOf('Video Production & Editing');
      const automationPosition = text.indexOf('Business Process Automation');
      
      // Verify order: AI -> Software -> Website -> Marketing -> Graphic -> Video -> Automation
      expect(aiPosition).toBeLessThan(softwarePosition);
      expect(softwarePosition).toBeLessThan(websitePosition);
      expect(websitePosition).toBeLessThan(marketingPosition);
      expect(marketingPosition).toBeLessThan(graphicPosition);
      expect(graphicPosition).toBeLessThan(videoPosition);
      expect(videoPosition).toBeLessThan(automationPosition);
    });

    it('should display Website Development after Custom Software Development', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';
      
      const softwarePosition = text.indexOf('Custom Software Development');
      const websitePosition = text.indexOf('Website Development');
      
      expect(softwarePosition).toBeGreaterThan(-1);
      expect(websitePosition).toBeGreaterThan(-1);
      expect(websitePosition).toBeGreaterThan(softwarePosition);
    });

    it('should have Technology & Creative Services section before Business Support Services', () => {
      const { container } = render(<In60Seconds />);
      const text = container.textContent || '';
      
      const techPosition = text.indexOf('Technology & Creative Services');
      const businessPosition = text.indexOf('Business Support Services');
      
      expect(techPosition).toBeGreaterThan(-1);
      expect(businessPosition).toBeGreaterThan(-1);
      expect(techPosition).toBeLessThan(businessPosition);
    });
  });

  describe('Technology & Creative Services', () => {
    it('should display all Technology & Creative Services', () => {
      render(<In60Seconds />);
      
      expect(screen.getByText(/AI Consulting & Automation/i)).toBeInTheDocument();
      expect(screen.getByText(/Custom Software Development/i)).toBeInTheDocument();
      expect(screen.getByText(/Website Development/i)).toBeInTheDocument();
      expect(screen.getByText(/Digital Marketing & SEO/i)).toBeInTheDocument();
      expect(screen.getByText(/Graphic Design & Branding/i)).toBeInTheDocument();
      expect(screen.getByText(/Video Production & Editing/i)).toBeInTheDocument();
      expect(screen.getByText(/Business Process Automation/i)).toBeInTheDocument();
    });

    it('should display section heading for Technology & Creative Services', () => {
      render(<In60Seconds />);
      
      expect(screen.getByText('Technology & Creative Services')).toBeInTheDocument();
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
      expect(container.textContent).toMatch(/Complete technology transformation partner/i);
    });

    it('should render checkmark icons for all services', () => {
      const { container } = render(<In60Seconds />);
      
      // Count SVG checkmark icons (should be 12 total: 7 tech + 5 business)
      const checkmarks = container.querySelectorAll('svg path[d*="M5 13l4 4L19 7"]');
      expect(checkmarks.length).toBeGreaterThanOrEqual(12);
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

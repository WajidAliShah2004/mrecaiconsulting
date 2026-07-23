import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TechnologyAdvantage from './TechnologyAdvantage';

// Helper to render component with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('TechnologyAdvantage', () => {
  describe('Component Rendering', () => {
    it('should render without crashing', () => {
      renderWithRouter(<TechnologyAdvantage />);
      expect(screen.getByText(/Our 4-Pillar Business Advantage/i)).toBeInTheDocument();
    });

    it('should render the section header', () => {
      renderWithRouter(<TechnologyAdvantage />);
      expect(screen.getByText(/Our 4-Pillar Business Advantage/i)).toBeInTheDocument();
      expect(screen.getByText(/Comprehensive AI-powered solutions/i)).toBeInTheDocument();
    });

    it('should render the bottom CTA text', () => {
      renderWithRouter(<TechnologyAdvantage />);
      expect(screen.getByText(/The MRE Difference:/i)).toBeInTheDocument();
      expect(screen.getByText(/One integrated partner for AI, tax, insurance, and business strategy/i)).toBeInTheDocument();
    });
  });

  describe('Pillar Rendering - All 4 Pillars', () => {
    it('should render all 4 pillars', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Verify all 4 pillar titles are present
      expect(screen.getByText('AI Consulting & Automation')).toBeInTheDocument();
      expect(screen.getByText('Tax Strategy & Accounting')).toBeInTheDocument();
      expect(screen.getByText('Insurance & Risk Architecture')).toBeInTheDocument();
      expect(screen.getByText('Business Support Services')).toBeInTheDocument();
    });

    it('should render exactly 4 pillar cards', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);

      // Count the number of pillar cards by looking for the grid container
      const pillarCards = container.querySelectorAll('.group');
      expect(pillarCards).toHaveLength(4);
    });

    it('should render all pillar descriptions', () => {
      renderWithRouter(<TechnologyAdvantage />);

      expect(screen.getByText(/Deploy intelligent AI systems and automation workflows/i)).toBeInTheDocument();
      expect(screen.getByText(/Proactive tax planning, precise preparation/i)).toBeInTheDocument();
      expect(screen.getByText(/Comprehensive risk management across personal and commercial coverage/i)).toBeInTheDocument();
      expect(screen.getByText(/Business consulting, investment management, and financial planning/i)).toBeInTheDocument();
    });
  });

  describe('Pillar Features - Correct Features', () => {
    it('should render AI Consulting & Automation features', () => {
      renderWithRouter(<TechnologyAdvantage />);

      expect(screen.getByText('AI Chatbots & Agents')).toBeInTheDocument();
      expect(screen.getByText('Process Automation')).toBeInTheDocument();
      expect(screen.getByText('Machine Learning Solutions')).toBeInTheDocument();
    });

    it('should render Tax Strategy & Accounting features', () => {
      renderWithRouter(<TechnologyAdvantage />);

      expect(screen.getByText('Strategic Tax Planning')).toBeInTheDocument();
      expect(screen.getByText('Tax Preparation')).toBeInTheDocument();
      expect(screen.getByText('Bookkeeping & Accounting')).toBeInTheDocument();
      expect(screen.getByText('Financial Reporting')).toBeInTheDocument();
    });

    it('should render Insurance & Risk Architecture features', () => {
      renderWithRouter(<TechnologyAdvantage />);

      expect(screen.getByText('Strategic Risk Audits')).toBeInTheDocument();
      expect(screen.getByText('Commercial Liability')).toBeInTheDocument();
      expect(screen.getByText('Personal Lines')).toBeInTheDocument();
      expect(screen.getByText('Cyber Coverage')).toBeInTheDocument();
    });

    it('should render Business Support Services features', () => {
      renderWithRouter(<TechnologyAdvantage />);

      expect(screen.getByText('Business Consulting')).toBeInTheDocument();
      expect(screen.getByText('Investment Management')).toBeInTheDocument();
      expect(screen.getByText('Fractional COO Services')).toBeInTheDocument();
      expect(screen.getByText('Financial Planning')).toBeInTheDocument();
    });
  });

  describe('Removed Services - No Longer Offered', () => {
    it('should not mention software development or creative services', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);
      const text = container.textContent || '';

      expect(text).not.toMatch(/Software Development/i);
      expect(text).not.toMatch(/Digital Marketing/i);
      expect(text).not.toMatch(/Graphic Design/i);
      expect(text).not.toMatch(/Video Production/i);
    });
  });

  describe('Pillar Links', () => {
    it('should render "Learn More" links for all pillars', () => {
      renderWithRouter(<TechnologyAdvantage />);

      const learnMoreLinks = screen.getAllByText('Learn More');
      expect(learnMoreLinks).toHaveLength(4);
    });

    it('should have correct link destinations', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);

      const links = container.querySelectorAll('a');
      const linkHrefs = Array.from(links).map(link => link.getAttribute('href'));

      expect(linkHrefs).toContain('/services/ai-driven-growth');
      expect(linkHrefs).toContain('/services/tax-strategy');
      expect(linkHrefs).toContain('/services/risk-architecture');
      expect(linkHrefs).toContain('/services');
    });
  });

  describe('No Duplicate Content - Requirement 6.4', () => {
    it('should not contain ServiceMatrix-specific content', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);
      const text = container.textContent || '';

      // ServiceMatrix had different section titles and structure
      // Verify old ServiceMatrix content doesn't appear
      expect(text).not.toMatch(/Tech Stack/i);
      expect(text).not.toMatch(/Our Technology Stack/i);
    });

    it('should not contain duplicate FourPillars content', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);

      // Verify we don't have duplicate pillar sections
      const pillarCards = container.querySelectorAll('.group');
      expect(pillarCards).toHaveLength(4); // Exactly 4, not 8
    });

    it('should have unique feature lists for each pillar', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Verify each pillar has distinct features (no overlap)
      const aiFeatures = ['AI Chatbots & Agents', 'Process Automation', 'Machine Learning Solutions'];
      const taxFeatures = ['Strategic Tax Planning', 'Tax Preparation', 'Bookkeeping & Accounting', 'Financial Reporting'];
      const insuranceFeatures = ['Strategic Risk Audits', 'Commercial Liability', 'Personal Lines', 'Cyber Coverage'];
      const businessFeatures = ['Business Consulting', 'Investment Management', 'Fractional COO Services', 'Financial Planning'];

      // All features should be present
      [...aiFeatures, ...taxFeatures, ...insuranceFeatures, ...businessFeatures].forEach(feature => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });

      // Verify no feature appears twice
      const allFeatures = [...aiFeatures, ...taxFeatures, ...insuranceFeatures, ...businessFeatures];
      allFeatures.forEach(feature => {
        const elements = screen.getAllByText(feature);
        expect(elements).toHaveLength(1); // Each feature should appear exactly once
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      renderWithRouter(<TechnologyAdvantage />);

      const mainHeading = screen.getByText(/Our 4-Pillar Business Advantage/i);
      expect(mainHeading.tagName).toBe('H2');

      const pillarHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(pillarHeadings).toHaveLength(4);
    });

    it('should have accessible links', () => {
      renderWithRouter(<TechnologyAdvantage />);

      const links = screen.getAllByRole('link', { name: /Learn More/i });
      expect(links).toHaveLength(4);

      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Structure and Layout', () => {
    it('should use grid layout for pillars', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);

      const gridContainer = container.querySelector('.grid');
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass('lg:grid-cols-4');
    });

    it('should have proper spacing classes', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);

      const section = container.querySelector('section');
      expect(section).toHaveClass('py-20');
      expect(section).toHaveClass('bg-white');
    });
  });
});

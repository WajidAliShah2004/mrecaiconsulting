import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi } from 'vitest';
import TechnologyAdvantage from '../components/home/TechnologyAdvantage';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Helper to render with router and helmet provider
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>
  );
};

describe('Home Page - Task 11 Integration Tests', () => {
  describe('11.1 - TechnologyAdvantage Component Integration', () => {
    it('should render TechnologyAdvantage component', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Check for the TechnologyAdvantage section heading
      const heading = screen.getByText(/The MRE Advantage/i);
      expect(heading).toBeInTheDocument();
    });

    it('should display all 4 pillars in TechnologyAdvantage section', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Check for all 4 pillar titles
      expect(screen.getByText(/Business Management Consulting/i)).toBeInTheDocument();
      expect(screen.getByText(/Tax Strategy & Accounting/i)).toBeInTheDocument();
      expect(screen.getByText(/Insurance & Risk Architecture/i)).toBeInTheDocument();
      expect(screen.getByText(/Investment & Wealth Planning/i)).toBeInTheDocument();
    });

    it('should not display removed software or creative service pillars', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);
      const text = container.textContent || '';

      expect(text).not.toMatch(/Custom Software Development/i);
      expect(text).not.toMatch(/Digital Marketing/i);
      expect(text).not.toMatch(/AI Consulting/i);
      expect(text).not.toMatch(/Automation/i);
    });

    it('should have links to service pages from each pillar', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Check for "Learn More" links (there should be 4, one for each pillar)
      const learnMoreLinks = screen.getAllByText(/Learn More/i);
      expect(learnMoreLinks.length).toBe(4);
    });

    it('should display pillar descriptions', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Check for key description text from each pillar
      expect(screen.getByText(/Strategic guidance and operational systems/i)).toBeInTheDocument();
      expect(screen.getByText(/Proactive tax planning/i)).toBeInTheDocument();
      expect(screen.getByText(/Comprehensive risk management/i)).toBeInTheDocument();
      expect(screen.getByText(/Holistic wealth management/i)).toBeInTheDocument();
    });

    it('should display features for each pillar', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Check for specific features from different pillars (using unique features)
      expect(screen.getByText(/Fractional COO Services/i)).toBeInTheDocument();
      expect(screen.getByText(/Tax Preparation/i)).toBeInTheDocument();
      expect(screen.getByText(/Cyber Coverage/i)).toBeInTheDocument();
      expect(screen.getByText(/Portfolio Management/i)).toBeInTheDocument();
    });
  });

  describe('11.2 - Component Structure Verification', () => {
    it('should render with proper section structure', () => {
      const { container } = renderWithRouter(<TechnologyAdvantage />);

      // Verify the component renders without errors
      expect(container).toBeInTheDocument();

      // Check for the main heading
      expect(screen.getByText(/The MRE Advantage/i)).toBeInTheDocument();
    });

    it('should have all required pillar elements', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Verify all 4 pillars are rendered with their titles
      const pillarTitles = [
        'Business Management Consulting',
        'Tax Strategy & Accounting',
        'Insurance & Risk Architecture',
        'Investment & Wealth Planning'
      ];

      pillarTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    it('should display the MRE Difference message', () => {
      renderWithRouter(<TechnologyAdvantage />);

      // Check for the bottom CTA message
      expect(screen.getByText(/The MRE Difference/i)).toBeInTheDocument();
      expect(screen.getByText(/One integrated partner for tax, insurance, and wealth strategy/i)).toBeInTheDocument();
    });
  });
});

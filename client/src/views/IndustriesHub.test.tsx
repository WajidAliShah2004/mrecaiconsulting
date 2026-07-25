import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi } from 'vitest';
import IndustriesHub from './IndustriesHub';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
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

describe('IndustriesHub Page - Task 13 Tests', () => {
  describe('13.1 - Universal Coverage Section', () => {
    it('should render the Universal Coverage badge', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for the Universal Coverage badge
      const badge = screen.getByText(/Universal Coverage/i);
      expect(badge).toBeInTheDocument();
    });

    it('should display "We Work With Every Industry" heading', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for the main heading
      const heading = screen.getByText(/We Work With Every Industry/i);
      expect(heading).toBeInTheDocument();
    });

    it('should display the universal coverage statement text', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for key phrases from the universal coverage statement
      expect(screen.getByText(/We work with clients across every industry/i)).toBeInTheDocument();
      expect(screen.getByText(/No matter what sector you operate in/i)).toBeInTheDocument();
      expect(screen.getByText(/our integrated services apply/i)).toBeInTheDocument();
    });

    it('should mention expertise in accounting, risk management, and technology', () => {
      renderWithRouter(<IndustriesHub />);

      // Check that the statement mentions the three core service areas
      const text = screen.getByText(/expertise in accounting, risk management, and technology/i);
      expect(text).toBeInTheDocument();
    });

    it('should state services are for businesses of all types and sizes', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check that the statement mentions serving all business types and sizes
      const text = screen.getByText(/businesses of all types and sizes/i);
      expect(text).toBeInTheDocument();
    });

    it('should appear before the industry grid section', () => {
      const { container } = renderWithRouter(<IndustriesHub />);
      
      // Get the universal coverage heading and the industry grid heading
      const universalHeading = screen.getByText(/We Work With Every Industry/i);
      const industryGridHeading = screen.getByText(/Industries We Serve/i);
      
      // Both should be in the document
      expect(universalHeading).toBeInTheDocument();
      expect(industryGridHeading).toBeInTheDocument();
      
      // The universal coverage section should appear before the industry grid
      // by checking their positions in the DOM
      const sections = container.querySelectorAll('section');
      let universalIndex = -1;
      let gridIndex = -1;
      
      sections.forEach((section, index) => {
        if (section.textContent?.includes('We Work With Every Industry')) {
          universalIndex = index;
        }
        if (section.textContent?.includes('Industries We Serve')) {
          gridIndex = index;
        }
      });
      
      expect(universalIndex).toBeGreaterThan(-1);
      expect(gridIndex).toBeGreaterThan(-1);
      expect(universalIndex).toBeLessThan(gridIndex);
    });
  });

  describe('13.2 - Page Structure Verification', () => {
    it('should render the page without errors', () => {
      const { container } = renderWithRouter(<IndustriesHub />);
      expect(container).toBeInTheDocument();
    });

    it('should have the hero section', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for hero section content
      expect(screen.getByText(/Vertical Intelligence/i)).toBeInTheDocument();
      expect(screen.getByText(/Expertise Built for Your Industry/i)).toBeInTheDocument();
    });

    it('should display the stats bar', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for stats
      expect(screen.getByText(/Specialized Industries/i)).toBeInTheDocument();
      expect(screen.getByText(/Years Combined Experience/i)).toBeInTheDocument();
      expect(screen.getByText(/Businesses Served/i)).toBeInTheDocument();
    });

    it('should render the industry grid section', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for the industry grid heading
      expect(screen.getByText(/Industries We Serve/i)).toBeInTheDocument();
    });

    it('should have CTA buttons in the hero section', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for CTA buttons
      const bookButtons = screen.getAllByText(/Book Free Strategy Call/i);
      expect(bookButtons.length).toBeGreaterThan(0);
    });

    it('should render the "Why Choose Us" section', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for the MRECAI Advantage section
      expect(screen.getByText(/The MRECAI Advantage/i)).toBeInTheDocument();
      expect(screen.getByText(/One Partner/i)).toBeInTheDocument();
      expect(screen.getByText(/Total Operational Intelligence/i)).toBeInTheDocument();
    });

    it('should have a final CTA section', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check for final CTA
      expect(screen.getByText(/Ready to Transform Your Industry/i)).toBeInTheDocument();
    });
  });

  describe('Requirement 15 Validation - All Industries Coverage', () => {
    it('should explicitly state that MRECAI serves every and all industries', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Verify the explicit statement about serving all industries
      const heading = screen.getByText(/We Work With Every Industry/i);
      expect(heading).toBeInTheDocument();
      
      // Verify the comprehensive statement
      const statement = screen.getByText(/We work with clients across every industry/i);
      expect(statement).toBeInTheDocument();
    });

    it('should clarify that highlighted industries are examples, not limitations', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check that the text clarifies the highlighted industries are just examples
      const text = screen.getByText(/While we highlight specific industries below/i);
      expect(text).toBeInTheDocument();
    });

    it('should emphasize universal applicability of services', () => {
      renderWithRouter(<IndustriesHub />);
      
      // Check that services are described as universally applicable
      const text = screen.getByText(/No matter what sector you operate in, our integrated services apply/i);
      expect(text).toBeInTheDocument();
    });
  });
});

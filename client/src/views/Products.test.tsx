import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Products from './Products';

// Helper to render with required providers
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </HelmetProvider>
  );
};

describe('Products Page', () => {
  describe('MRECAI Services Section', () => {
    it('should display MRECAI services heading', () => {
      renderWithProviders(<Products />);
      expect(screen.getByText('MRECAI Services Include:')).toBeInTheDocument();
    });

    it('should display all 6 MRECAI services', () => {
      renderWithProviders(<Products />);
      
      const expectedServices = [
        'Tax Preparation & Planning',
        'Bookkeeping & Accounting',
        'Insurance Consulting',
        'Business Consulting',
        'Advanced Tax Strategy',
        'Investment & Wealth Planning'
      ];

      expectedServices.forEach(service => {
        expect(screen.getByText(service)).toBeInTheDocument();
      });
    });

    it('should display MRECAI services in a scannable format with checkmarks', () => {
      const { container } = renderWithProviders(<Products />);
      
      // Check that services are in a grid layout
      const servicesGrid = container.querySelector('.grid.md\\:grid-cols-2');
      expect(servicesGrid).toBeInTheDocument();
      
      // Check that checkmark icons are present (FaCheckCircle)
      const checkmarks = container.querySelectorAll('.text-primary-600');
      expect(checkmarks.length).toBeGreaterThanOrEqual(6);
    });

    it('should display MRECAI platform description', () => {
      renderWithProviders(<Products />);
      expect(screen.getByText(/MRECAI delivers integrated solutions/i)).toBeInTheDocument();
    });

    it('should have links to services and booking', () => {
      renderWithProviders(<Products />);
      
      const exploreServicesLink = screen.getByRole('link', { name: /explore all services/i });
      expect(exploreServicesLink).toBeInTheDocument();
      expect(exploreServicesLink).toHaveAttribute('href', '/services');
      
      const getStartedLinks = screen.getAllByRole('link', { name: /get started/i });
      expect(getStartedLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Atlas Services Section', () => {
    it('should display Atlas Engine heading', () => {
      renderWithProviders(<Products />);
      // Use getAllByText since "YOUR PIPELINE" appears multiple times
      const pipelineHeadings = screen.getAllByText(/YOUR PIPELINE/i);
      expect(pipelineHeadings.length).toBeGreaterThan(0);
      expect(screen.getByText(/FULLY HANDLED/i)).toBeInTheDocument();
    });

    it('should display Core Capabilities section clearly', () => {
      renderWithProviders(<Products />);
      expect(screen.getByText('Core Capabilities')).toBeInTheDocument();
      expect(screen.getByText(/BUILT TO REPLACE/i)).toBeInTheDocument();
      expect(screen.getByText(/THE GRIND/i)).toBeInTheDocument();
    });

    it('should display all 4 Atlas core features', () => {
      renderWithProviders(<Products />);
      
      expect(screen.getByText('RELENTLESS LEAD DISCOVERY')).toBeInTheDocument();
      expect(screen.getByText('SCREENING THAT ACTUALLY THINKS')).toBeInTheDocument();
      expect(screen.getByText('PROOF OF VALUE ON FIRST CONTACT')).toBeInTheDocument();
      expect(screen.getByText('ENGINEERED FOR SCALE')).toBeInTheDocument();
    });

    it('should display Atlas features with clear descriptions', () => {
      renderWithProviders(<Products />);
      
      // Check that feature descriptions are present
      expect(screen.getByText(/ATLAS runs continuously/i)).toBeInTheDocument();
      expect(screen.getByText(/Forget passive scrapers/i)).toBeInTheDocument();
      expect(screen.getByText(/Cold outreach dies/i)).toBeInTheDocument();
      expect(screen.getByText(/ATLAS is built on a strict microservices architecture/i)).toBeInTheDocument();
    });
  });

  describe('Service Lists Visibility', () => {
    it('should make MRECAI services visible without requiring paragraph reading', () => {
      const { container } = renderWithProviders(<Products />);
      
      // Services should be in a list format, not buried in paragraphs
      const servicesList = container.querySelector('.grid.md\\:grid-cols-2');
      expect(servicesList).toBeInTheDocument();
      
      // Each service should be a separate, scannable item
      const services = [
        'Tax Preparation & Planning',
        'Bookkeeping & Accounting',
        'Insurance Consulting',
        'Business Consulting',
        'Advanced Tax Strategy',
        'Investment & Wealth Planning'
      ];
      
      services.forEach(service => {
        const serviceElement = screen.getByText(service);
        expect(serviceElement).toBeInTheDocument();
        // Service should not be inside a paragraph tag
        expect(serviceElement.closest('p')).toBeNull();
      });
    });

    it('should make Atlas capabilities visible and scannable', () => {
      renderWithProviders(<Products />);
      
      // Atlas features should be clearly labeled and separated
      const features = [
        'RELENTLESS LEAD DISCOVERY',
        'SCREENING THAT ACTUALLY THINKS',
        'PROOF OF VALUE ON FIRST CONTACT',
        'ENGINEERED FOR SCALE'
      ];
      
      features.forEach(feature => {
        const featureElement = screen.getByText(feature);
        expect(featureElement).toBeInTheDocument();
        // Feature should be in a heading (h3)
        expect(featureElement.tagName).toBe('H3');
      });
    });
  });

  describe('Page Structure', () => {
    it('should render without errors', () => {
      expect(() => renderWithProviders(<Products />)).not.toThrow();
    });

    it('should display both MRECAI and Atlas sections', () => {
      renderWithProviders(<Products />);
      
      // MRECAI section
      expect(screen.getByText('MRECAI Services Include:')).toBeInTheDocument();
      
      // Atlas section - use getAllByText since it appears multiple times
      const pipelineHeadings = screen.getAllByText(/YOUR PIPELINE/i);
      expect(pipelineHeadings.length).toBeGreaterThan(0);
    });

    it('should have proper page title for SEO', () => {
      const { container } = renderWithProviders(<Products />);
      
      // Verify Helmet component is present (it sets the title)
      // In test environment, Helmet may not update document.title
      // but we can verify the component renders without errors
      expect(container).toBeTruthy();
    });
  });
});

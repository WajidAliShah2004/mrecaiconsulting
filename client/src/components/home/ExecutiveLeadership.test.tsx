import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ExecutiveLeadership from './ExecutiveLeadership';

// Helper to render component with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ExecutiveLeadership', () => {
  describe('Subtitle Removal (Requirement 7.1)', () => {
    it('should not display the subtitle "Strategic guidance and technical innovation driving your success"', () => {
      renderWithRouter(<ExecutiveLeadership />);
      
      // Verify the deprecated subtitle does not appear
      expect(screen.queryByText(/strategic guidance and technical innovation driving your success/i)).not.toBeInTheDocument();
    });

    it('should display the main heading "Meet Our People"', () => {
      renderWithRouter(<ExecutiveLeadership />);
      
      // Verify the main heading is still present
      const heading = screen.getByRole('heading', { name: /meet our people/i });
      expect(heading).toBeInTheDocument();
    });

    it('should display the "Foundational Leadership" badge', () => {
      renderWithRouter(<ExecutiveLeadership />);
      
      // Verify the badge is present
      expect(screen.getByText(/foundational leadership/i)).toBeInTheDocument();
    });
  });

  describe('Team Member Ordering (Requirements 8.1, 8.2)', () => {
    it('should display Matthew R. Epstein (CEO) before Wajid Ali Shah (CTO) in DOM order', () => {
      renderWithRouter(<ExecutiveLeadership />);

      // Get all team member headings
      const teamMemberHeadings = screen.getAllByRole('heading', { level: 3 });

      // Find indices of Matthew and Wajid
      const matthewIndex = teamMemberHeadings.findIndex(heading =>
        heading.textContent?.includes('Matthew R. Epstein')
      );
      const wajidIndex = teamMemberHeadings.findIndex(heading =>
        heading.textContent?.includes('Wajid Ali Shah')
      );

      // Verify Matthew appears before Wajid
      expect(matthewIndex).toBeGreaterThanOrEqual(0);
      expect(wajidIndex).toBeGreaterThanOrEqual(0);
      expect(matthewIndex).toBeLessThan(wajidIndex);
    });

    it('should display team members in correct order: Matthew, Jessie, Wajid', () => {
      renderWithRouter(<ExecutiveLeadership />);

      // Get all team member headings
      const teamMemberHeadings = screen.getAllByRole('heading', { level: 3 });

      // Extract names from headings (MRECAI leadership only)
      const names = teamMemberHeadings
        .map(heading => heading.textContent)
        .filter(text => text?.includes('Wajid') || text?.includes('Matthew') || text?.includes('Jessie'));

      // Verify order: CEO, then CMO, then CTO
      expect(names[0]).toContain('Matthew R. Epstein');
      expect(names[1]).toContain('Jessie Gwilt');
      expect(names[2]).toContain('Wajid Ali Shah');
    });

    it('should display CEO/Founder section before CTO section in the DOM', () => {
      const { container } = renderWithRouter(<ExecutiveLeadership />);

      // Get all sections by finding elements with CEO and CTO titles (appear multiple times)
      const ceoTitles = screen.getAllByText('President & Founder');
      const ctoTitles = screen.getAllByText('Chief Technology Officer');

      // Use the first occurrence of each (main content section)
      const ceoTitle = ceoTitles[0];
      const ctoTitle = ctoTitles[0];

      // Compare positions in DOM
      const allElements = Array.from(container.querySelectorAll('*'));
      const ceoPosition = allElements.indexOf(ceoTitle as Element);
      const ctoPosition = allElements.indexOf(ctoTitle as Element);

      expect(ceoPosition).toBeLessThan(ctoPosition);
    });

    it('should display Parineet Sehgal (PSG Global) after the MRECAI leadership, labeled as a partner', () => {
      renderWithRouter(<ExecutiveLeadership />);

      // Parineet is an external accounting partner, shown after the CTO
      const teamMemberHeadings = screen.getAllByRole('heading', { level: 3 });
      const wajidIndex = teamMemberHeadings.findIndex(heading =>
        heading.textContent?.includes('Wajid Ali Shah')
      );
      const parineetIndex = teamMemberHeadings.findIndex(heading =>
        heading.textContent?.includes('Parineet Sehgal')
      );

      expect(parineetIndex).toBeGreaterThanOrEqual(0);
      expect(parineetIndex).toBeGreaterThan(wajidIndex);

      // Clearly labeled as an accounting partner, not MRECAI staff
      expect(screen.getByText(/accounting partner/i)).toBeInTheDocument();
      expect(screen.getAllByText(/strategic partner · psg global/i).length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Team Member Information Preservation (Requirement 8.3)', () => {
    describe('Wajid Ali Shah (CTO)', () => {
      it('should display Wajid Ali Shah name and title', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        // Name appears twice (h3 and profile card)
        const names = screen.getAllByText('Wajid Ali Shah');
        expect(names.length).toBeGreaterThanOrEqual(1);
        
        // Title also appears twice
        const titles = screen.getAllByText('Chief Technology Officer');
        expect(titles.length).toBeGreaterThanOrEqual(1);
      });

      it('should display Wajid\'s quote', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        expect(screen.getByText(/great tools should empower businesses, not complicate them/i)).toBeInTheDocument();
      });

      it('should display Wajid\'s bio information', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        // Bio text appears in multiple places (paragraph and highlights)
        const experienceTexts = screen.getAllByText(/15 years of systems/i);
        expect(experienceTexts.length).toBeGreaterThanOrEqual(1);
        
        const ceoTexts = screen.getAllByText(/ceo of novaedge solutions/i);
        expect(ceoTexts.length).toBeGreaterThanOrEqual(1);
      });

      it('should display Wajid\'s key highlights', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        // "CTO of MRECAI" appears in both the bio paragraph and the highlights list
        const ctoTexts = screen.getAllByText(/cto of mrecai/i);
        expect(ctoTexts.length).toBeGreaterThanOrEqual(1);
        expect(screen.getByText(/oversees the firm's internal tools and client platforms/i)).toBeInTheDocument();
        expect(screen.getByText(/specializes in streamlined, dependable operations/i)).toBeInTheDocument();
      });

      it('should display NovaEdge Solutions link', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        const novaEdgeLink = screen.getByRole('link', { name: /novaedge solutions/i });
        expect(novaEdgeLink).toBeInTheDocument();
        expect(novaEdgeLink).toHaveAttribute('href', 'https://www.upwork.com/agencies/1913615184399103598/');
      });

      it('should display Wajid\'s profile image', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        const images = screen.getAllByAltText(/wajid ali shah/i);
        expect(images.length).toBeGreaterThan(0);
      });
    });

    describe('Matthew R. Epstein (CEO)', () => {
      it('should display Matthew R. Epstein name and title', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        // Name appears twice (h3 and profile card)
        const names = screen.getAllByText('Matthew R. Epstein');
        expect(names.length).toBeGreaterThanOrEqual(1);
        
        // Title also appears twice
        const titles = screen.getAllByText('President & Founder');
        expect(titles.length).toBeGreaterThanOrEqual(1);
      });

      it('should display Matthew\'s quote', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        expect(screen.getByText(/my mission is to eliminate the 'vendor fatigue'/i)).toBeInTheDocument();
      });

      it('should display Matthew\'s key highlights', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        expect(screen.getByText(/founder of mrecai/i)).toBeInTheDocument();
        expect(screen.getByText(/expert in integrated risk and financial architecture/i)).toBeInTheDocument();
        expect(screen.getByText(/advisor to 180\+ clients/i)).toBeInTheDocument();
      });

      it('should display Matthew\'s stats', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        expect(screen.getByText('2009')).toBeInTheDocument();
        expect(screen.getByText(/began industry journey/i)).toBeInTheDocument();
        expect(screen.getByText('180+')).toBeInTheDocument();
        expect(screen.getByText(/clients advised/i)).toBeInTheDocument();
      });

      it('should display Founder\'s Story link', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        const founderLink = screen.getByRole('link', { name: /founder's story/i });
        expect(founderLink).toBeInTheDocument();
        expect(founderLink).toHaveAttribute('href', '/about/founder');
      });

      it('should display LinkedIn profile link', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        const linkedInLink = screen.getByRole('link', { name: /linkedin profile/i });
        expect(linkedInLink).toBeInTheDocument();
        expect(linkedInLink).toHaveAttribute('href', 'https://linkedin.com/in/matthewepstein');
      });

      it('should display Matthew\'s profile image', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        const images = screen.getAllByAltText(/matthew r\. epstein/i);
        expect(images.length).toBeGreaterThan(0);
      });
    });

    describe('Jessie Gwilt (CMO)', () => {
      it('should display Jessie Gwilt name and title', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        // Name appears twice (h3 and profile card)
        const names = screen.getAllByText('Jessie Gwilt');
        expect(names.length).toBeGreaterThanOrEqual(1);
        
        // Title also appears twice
        const titles = screen.getAllByText('Chief Marketing Officer');
        expect(titles.length).toBeGreaterThanOrEqual(1);
      });

      it('should display Jessie\'s quote', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        // Quote appears twice (main content and profile card)
        const quotes = screen.getAllByText(/building brands that meaningfully enhance lives/i);
        expect(quotes.length).toBeGreaterThanOrEqual(1);
      });

      it('should display Jessie\'s bio information', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        // Bio text appears in multiple places
        const bioTexts = screen.getAllByText(/degrees in advertising and political science from syracuse university/i);
        expect(bioTexts.length).toBeGreaterThanOrEqual(1);
        const experienceTexts = screen.getAllByText(/10\+ years leading high-impact initiatives/i);
        expect(experienceTexts.length).toBeGreaterThanOrEqual(1);
      });

      it('should display Jessie\'s key highlights', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        expect(screen.getByText(/known for versatility, steady leadership, and clarity in execution/i)).toBeInTheDocument();
        expect(screen.getByText(/passionate about helping brands define their voice/i)).toBeInTheDocument();
      });

      it('should display Jessie\'s stats', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        expect(screen.getByText('10+')).toBeInTheDocument();
        expect(screen.getByText(/years experience/i)).toBeInTheDocument();
        expect(screen.getByText('Multi-M$')).toBeInTheDocument();
        expect(screen.getByText(/brands grown/i)).toBeInTheDocument();
      });

      it('should display Jessie\'s profile image', () => {
        renderWithRouter(<ExecutiveLeadership />);
        
        const images = screen.getAllByAltText(/jessie gwilt/i);
        expect(images.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Component Structure', () => {
    it('should render all three team members', () => {
      renderWithRouter(<ExecutiveLeadership />);
      
      // Verify all three team members are present (names appear multiple times)
      expect(screen.getAllByText('Wajid Ali Shah').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Matthew R. Epstein').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Jessie Gwilt').length).toBeGreaterThanOrEqual(1);
    });

    it('should render without errors', () => {
      expect(() => renderWithRouter(<ExecutiveLeadership />)).not.toThrow();
    });

    it('should maintain responsive grid layout classes', () => {
      const { container } = renderWithRouter(<ExecutiveLeadership />);
      
      // Check for grid layout classes
      const gridElements = container.querySelectorAll('.grid.lg\\:grid-cols-2');
      expect(gridElements.length).toBeGreaterThan(0);
    });
  });
});

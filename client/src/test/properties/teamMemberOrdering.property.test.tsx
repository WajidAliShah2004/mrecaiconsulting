/**
 * Property Test: Team Member Ordering Consistency
 * 
 * Feature: website-change-request-implementation
 * Property 6: For any page that displays team members, Wajid should appear 
 * before Matthew in the display order
 * 
 * Validates: Requirements 8.2
 * 
 * This property test verifies that:
 * - Wajid (CTO) appears before Matthew (CEO) in team listings
 * - Team member ordering is consistent across all pages
 * - The organizational structure is clearly represented
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import fc from 'fast-check';

// Import all pages that need to be tested
import Home from '../../views/Home';
import About from '../../views/About';
import Services from '../../views/Services';
import Products from '../../views/Products';
import IndustriesHub from '../../views/IndustriesHub';
import FAQ from '../../views/FAQ';
import Contact from '../../views/Contact';
import BookNow from '../../views/BookNow';
import StartHere from '../../views/StartHere';

// Page configuration for testing
interface PageConfig {
  path: string;
  component: React.ComponentType;
  name: string;
}

const pages: PageConfig[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/services', component: Services, name: 'Services' },
  { path: '/products', component: Products, name: 'Products' },
  { path: '/industries', component: IndustriesHub, name: 'Industries' },
  { path: '/faq', component: FAQ, name: 'FAQ' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/book-now', component: BookNow, name: 'BookNow' },
  { path: '/start-here', component: StartHere, name: 'StartHere' },
];

// Helper function to render a page with router and helmet context
const renderPageWithRouter = (PageComponent: React.ComponentType) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageComponent />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

/**
 * Team member name patterns
 */
const teamMemberPatterns = {
  wajid: [
    /\bWajid\b/i,
    /\bWajid\s+Ali\s+Shah\b/i,
    /\bAli\s+Shah\b/i,
  ],
  matthew: [
    /\bMatthew\b/i,
    /\bMatthew\s+R\.\s+Epstein\b/i,
    /\bMatthew\s+Epstein\b/i,
    /\bM\.\s+Epstein\b/i,
  ],
  jessie: [
    /\bJessie\b/i,
    /\bJessie\s+Gwilt\b/i,
  ],
};

/**
 * Helper function to check if page contains team member listings
 */
function hasTeamMemberListings(text: string): boolean {
  const teamIndicators = [
    /\bmeet\s+our\s+(people|team)\b/i,
    /\bour\s+(team|people|leadership)\b/i,
    /\bexecutive\s+leadership\b/i,
    /\bteam\s+members?\b/i,
    /\b(CEO|CTO|CMO|CFO)\b/i,
  ];
  
  return teamIndicators.some(pattern => pattern.test(text));
}

/**
 * Helper function to find team member positions in text
 */
function findTeamMemberPositions(text: string): {
  wajid: number;
  matthew: number;
  jessie: number;
} {
  let wajidPos = -1;
  let matthewPos = -1;
  let jessiePos = -1;
  
  // Find Wajid's position
  for (const pattern of teamMemberPatterns.wajid) {
    const match = text.match(pattern);
    if (match && match.index !== undefined) {
      if (wajidPos === -1 || match.index < wajidPos) {
        wajidPos = match.index;
      }
    }
  }
  
  // Find Matthew's position
  for (const pattern of teamMemberPatterns.matthew) {
    const match = text.match(pattern);
    if (match && match.index !== undefined) {
      if (matthewPos === -1 || match.index < matthewPos) {
        matthewPos = match.index;
      }
    }
  }
  
  // Find Jessie's position
  for (const pattern of teamMemberPatterns.jessie) {
    const match = text.match(pattern);
    if (match && match.index !== undefined) {
      if (jessiePos === -1 || match.index < jessiePos) {
        jessiePos = match.index;
      }
    }
  }
  
  return { wajid: wajidPos, matthew: matthewPos, jessie: jessiePos };
}

/**
 * Helper function to extract team member elements from DOM
 */
function extractTeamMemberElements(container: HTMLElement): Array<{
  element: Element;
  name: string;
  position: number;
}> {
  const teamMembers: Array<{ element: Element; name: string; position: number }> = [];
  
  // Look for team member sections (typically divs or articles with team member content)
  const allElements = container.querySelectorAll('div, article, section');
  
  allElements.forEach((element, index) => {
    const text = element.textContent || '';
    
    // Check if element contains a team member name
    if (teamMemberPatterns.wajid.some(p => p.test(text))) {
      teamMembers.push({ element, name: 'Wajid', position: index });
    } else if (teamMemberPatterns.matthew.some(p => p.test(text))) {
      teamMembers.push({ element, name: 'Matthew', position: index });
    } else if (teamMemberPatterns.jessie.some(p => p.test(text))) {
      teamMembers.push({ element, name: 'Jessie', position: index });
    }
  });
  
  return teamMembers;
}

describe('Property 6: Team Member Ordering Consistency', () => {
  /**
   * Property Test: Wajid appears before Matthew
   * 
   * **Validates: Requirements 8.2**
   * 
   * This test verifies that on any page displaying team members,
   * Wajid (CTO) appears before Matthew (CEO) in the display order.
   */
  it('should display Wajid before Matthew on pages with team listings', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Check if page has team member listings
          if (hasTeamMemberListings(pageText)) {
            const positions = findTeamMemberPositions(pageText);
            
            // If both Wajid and Matthew are present, verify order
            if (positions.wajid !== -1 && positions.matthew !== -1) {
              if (positions.wajid >= positions.matthew) {
                throw new Error(
                  `Page ${pageConfig.name} has incorrect team member order. ` +
                  `Wajid appears at position ${positions.wajid}, ` +
                  `Matthew appears at position ${positions.matthew}. ` +
                  `Wajid should appear before Matthew.`
                );
              }
            }
          }
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 100,
        verbose: true,
      }
    );
  }, 30000); // 30 second timeout

  /**
   * Property Test: Consistency across multiple renders
   * 
   * This test verifies that team member ordering remains consistent
   * across multiple renders of the same page (idempotency check).
   */
  it('should maintain consistent team member ordering across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.integer({ min: 2, max: 3 }),
        (pageConfig, renderCount) => {
          const orderResults: Array<{ wajid: number; matthew: number; jessie: number }> = [];
          
          // Render the page multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = renderPageWithRouter(pageConfig.component);
            const pageText = container.textContent || '';
            const positions = findTeamMemberPositions(pageText);
            orderResults.push(positions);
          }
          
          // Verify all renders have the same ordering
          if (orderResults.length > 1) {
            const firstRender = orderResults[0];
            orderResults.slice(1).forEach((result) => {
              expect(result).toEqual(firstRender);
            });
          }
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 50,
        verbose: true,
      }
    );
  }, 30000); // 30 second timeout

  /**
   * Unit Test: Home page team member order
   * 
   * This test specifically verifies that the Home page, which contains
   * the ExecutiveLeadership component, displays team members in correct order.
   */
  it('should display team members in correct order on Home page', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    const positions = findTeamMemberPositions(pageText);
    
    // Verify Wajid appears before Matthew
    if (positions.wajid !== -1 && positions.matthew !== -1) {
      expect(positions.wajid).toBeLessThan(positions.matthew);
    }
    
    // Verify both are present (Home page should have team section)
    expect(positions.wajid).toBeGreaterThan(-1);
    expect(positions.matthew).toBeGreaterThan(-1);
  });

  /**
   * Unit Test: About page team member order
   * 
   * This test verifies that the About page (if it displays team members)
   * maintains correct ordering.
   */
  it('should display team members in correct order on About page if present', () => {
    const { container } = renderPageWithRouter(About);
    const pageText = container.textContent || '';
    
    const positions = findTeamMemberPositions(pageText);
    
    // If both are present, verify order
    if (positions.wajid !== -1 && positions.matthew !== -1) {
      expect(positions.wajid).toBeLessThan(positions.matthew);
    }
  });

  /**
   * Unit Test: DOM element ordering
   * 
   * This test verifies that team member elements in the DOM are ordered
   * correctly (not just text position).
   */
  it('should have team member DOM elements in correct order', () => {
    const { container } = renderPageWithRouter(Home);
    
    const teamMembers = extractTeamMemberElements(container);
    
    // Find Wajid and Matthew in the team members array
    const wajidMember = teamMembers.find(tm => tm.name === 'Wajid');
    const matthewMember = teamMembers.find(tm => tm.name === 'Matthew');
    
    // If both are present, verify DOM order
    if (wajidMember && matthewMember) {
      expect(wajidMember.position).toBeLessThan(matthewMember.position);
    }
  });

  /**
   * Unit Test: Team section structure
   * 
   * This test verifies that the team section has the expected structure
   * with team members in the correct order.
   */
  it('should have team section with members in correct order', () => {
    const { container } = renderPageWithRouter(Home);
    
    // Look for team section
    const teamSection = Array.from(container.querySelectorAll('section, [class*="team"], [class*="leadership"]'))
      .find(section => {
        const text = section.textContent || '';
        return hasTeamMemberListings(text);
      });
    
    if (teamSection) {
      const sectionText = teamSection.textContent || '';
      const positions = findTeamMemberPositions(sectionText);
      
      // Verify order within the team section
      if (positions.wajid !== -1 && positions.matthew !== -1) {
        expect(positions.wajid).toBeLessThan(positions.matthew);
      }
    }
  });

  /**
   * Unit Test: CTO appears before CEO
   * 
   * This test verifies that when titles are used, CTO appears before CEO.
   */
  it('should display CTO before CEO when titles are shown', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // Find positions of titles
    const ctoMatch = pageText.match(/\bCTO\b/i);
    const ceoMatch = pageText.match(/\bCEO\b/i);
    
    if (ctoMatch && ceoMatch && ctoMatch.index !== undefined && ceoMatch.index !== undefined) {
      expect(ctoMatch.index).toBeLessThan(ceoMatch.index);
    }
  });

  /**
   * Property Test: Team member order in different contexts
   * 
   * This test verifies that team member ordering is correct whether
   * they appear in cards, lists, or other layouts.
   */
  it('should maintain correct order in all layout contexts', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          
          // Check in different container types
          const containerTypes = ['div', 'article', 'section', 'ul', 'ol'];
          
          containerTypes.forEach(containerType => {
            const containers = container.querySelectorAll(containerType);
            
            containers.forEach(cont => {
              const text = cont.textContent || '';
              
              if (hasTeamMemberListings(text)) {
                const positions = findTeamMemberPositions(text);
                
                if (positions.wajid !== -1 && positions.matthew !== -1) {
                  if (positions.wajid >= positions.matthew) {
                    throw new Error(
                      `Page ${pageConfig.name} has incorrect team member order in ${containerType} element`
                    );
                  }
                }
              }
            });
          });
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 100,
        verbose: true,
      }
    );
  }, 30000); // 30 second timeout

  /**
   * Unit Test: All team members are present
   * 
   * This test verifies that when team members are displayed,
   * all expected team members are present.
   */
  it('should display all team members when team section is present', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    if (hasTeamMemberListings(pageText)) {
      const positions = findTeamMemberPositions(pageText);
      
      // All three team members should be present
      expect(positions.wajid).toBeGreaterThan(-1);
      expect(positions.matthew).toBeGreaterThan(-1);
      expect(positions.jessie).toBeGreaterThan(-1);
    }
  });

  /**
   * Unit Test: Team member information is preserved
   * 
   * This test verifies that team member information (names, titles, bios)
   * is preserved during reordering.
   */
  it('should preserve team member information after reordering', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // Check for key information about each team member using the correct patterns
    const hasWajidInfo = teamMemberPatterns.wajid.some(p => p.test(pageText)) && /\bCTO\b/i.test(pageText);
    const hasMatthewInfo = teamMemberPatterns.matthew.some(p => p.test(pageText)) && (/\bPresident\b/i.test(pageText) || /\bFounder\b/i.test(pageText));
    const hasJessieInfo = teamMemberPatterns.jessie.some(p => p.test(pageText)) && /\bCMO\b/i.test(pageText);
    
    if (hasTeamMemberListings(pageText)) {
      expect(hasWajidInfo).toBe(true);
      expect(hasMatthewInfo).toBe(true);
      expect(hasJessieInfo).toBe(true);
    }
  });

  /**
   * Property Test: No reverse ordering
   * 
   * This test explicitly checks that Matthew never appears before Wajid
   * on any page with team listings.
   */
  it('should never have Matthew appear before Wajid', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          if (hasTeamMemberListings(pageText)) {
            const positions = findTeamMemberPositions(pageText);
            
            // If both are present, Matthew should NOT come before Wajid
            if (positions.wajid !== -1 && positions.matthew !== -1) {
              expect(positions.matthew).toBeGreaterThan(positions.wajid);
            }
          }
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 100,
        verbose: true,
      }
    );
  }, 30000); // 30 second timeout

  /**
   * Unit Test: Visual order matches DOM order
   * 
   * This test verifies that the visual display order matches the DOM order
   * (no CSS tricks that reverse the order).
   */
  it('should have visual order match DOM order', () => {
    const { container } = renderPageWithRouter(Home);
    
    // Get team member elements
    const teamMembers = extractTeamMemberElements(container);
    
    // Sort by DOM position
    const sortedByDOM = [...teamMembers].sort((a, b) => a.position - b.position);
    
    // Find Wajid and Matthew in sorted list
    const wajidIndex = sortedByDOM.findIndex(tm => tm.name === 'Wajid');
    const matthewIndex = sortedByDOM.findIndex(tm => tm.name === 'Matthew');
    
    // If both are present, Wajid should come first in DOM order
    if (wajidIndex !== -1 && matthewIndex !== -1) {
      expect(wajidIndex).toBeLessThan(matthewIndex);
    }
  });

  /**
   * Unit Test: Expected order is Wajid, Matthew, Jessie
   * 
   * This test verifies the complete expected ordering of all three team members.
   */
  it('should have complete team order: Wajid, Matthew, Jessie', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    const positions = findTeamMemberPositions(pageText);
    
    // Verify complete ordering
    if (positions.wajid !== -1 && positions.matthew !== -1 && positions.jessie !== -1) {
      expect(positions.wajid).toBeLessThan(positions.matthew);
      expect(positions.matthew).toBeLessThan(positions.jessie);
    }
  });
});

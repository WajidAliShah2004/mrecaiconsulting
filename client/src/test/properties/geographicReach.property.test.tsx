/**
 * Property Test: Geographic Reach Consistency
 * 
 * Feature: website-change-request-implementation
 * Property 2: For any mention of MRECAI's geographic reach or service area, 
 * the text should explicitly state nationwide or all-50-states availability
 * 
 * Validates: Requirements 2.4
 * 
 * This property test verifies that:
 * - Geographic reach mentions explicitly state nationwide availability
 * - Service area descriptions include "all 50 states" or equivalent
 * - No ambiguous geographic limitations are implied
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
 * Helper function to check if geographic reach is mentioned in text
 */
function hasGeographicReachMention(text: string): boolean {
  const geographicPatterns = [
    /\b(serve|serving|available|work with|help|support|provide|offer)\b.*\b(in|across|throughout)\b/i,
    /\b(service area|coverage|reach|availability)\b/i,
    /\b(where|location|geographic|region|state|nationwide|national)\b/i,
  ];
  
  return geographicPatterns.some(pattern => pattern.test(text));
}

/**
 * Helper function to check if text explicitly states nationwide availability
 */
function hasNationwideStatement(text: string): boolean {
  const nationwidePatterns = [
    /\ball\s+50\s+states\b/i,
    /\ball\s+fifty\s+states\b/i,
    /\bnationwide\b/i,
    /\bacross\s+the\s+(entire\s+)?united\s+states\b/i,
    /\beverywhere\s+in\s+the\s+(united\s+states|US|USA)\b/i,
    /\bin\s+every\s+state\b/i,
    /\bthroughout\s+the\s+(united\s+states|US|USA)\b/i,
  ];
  
  return nationwidePatterns.some(pattern => pattern.test(text));
}

/**
 * Helper function to extract sentences mentioning geographic reach
 */
function extractGeographicSentences(text: string): string[] {
  const sentences = text.split(/[.!?]+/);
  return sentences.filter(sentence => hasGeographicReachMention(sentence));
}

describe('Property 2: Geographic Reach Consistency', () => {
  /**
   * Property Test: Nationwide availability in geographic mentions
   * 
   * **Validates: Requirements 2.4**
   * 
   * This test verifies that when geographic reach is mentioned on any page,
   * it explicitly states nationwide or all-50-states availability.
   */
  it('should explicitly state nationwide availability when geographic reach is mentioned', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Extract sentences that mention geographic reach
          const geographicSentences = extractGeographicSentences(pageText);
          
          // If geographic reach is mentioned, verify nationwide statement exists
          if (geographicSentences.length > 0) {
            const hasNationwide = hasNationwideStatement(pageText);
            
            if (!hasNationwide) {
              throw new Error(
                `Page ${pageConfig.name} mentions geographic reach but does not explicitly ` +
                `state nationwide or all-50-states availability. ` +
                `Geographic sentences found: ${geographicSentences.slice(0, 2).join('. ')}`
              );
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
   * This test verifies that geographic reach statements remain consistent
   * across multiple renders of the same page (idempotency check).
   */
  it('should maintain consistent geographic reach statements across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.integer({ min: 2, max: 3 }),
        (pageConfig, renderCount) => {
          const geographicStatements: string[] = [];
          
          // Render the page multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = renderPageWithRouter(pageConfig.component);
            const pageText = container.textContent || '';
            const sentences = extractGeographicSentences(pageText);
            geographicStatements.push(sentences.join(' '));
          }
          
          // Verify all renders have the same geographic statements
          if (geographicStatements.length > 1) {
            const firstRender = geographicStatements[0];
            geographicStatements.slice(1).forEach((statement, index) => {
              expect(statement).toBe(firstRender);
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
   * Unit Test: Key pages contain nationwide statement
   * 
   * This test verifies that key pages (Home, About, FAQ) explicitly
   * state nationwide or all-50-states availability.
   */
  it('should contain nationwide availability statement on key pages', () => {
    const keyPages = pages.filter(p => 
      ['Home', 'About', 'FAQ'].includes(p.name)
    );
    
    keyPages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const pageText = container.textContent || '';
      
      const hasNationwide = hasNationwideStatement(pageText);
      
      expect(hasNationwide).toBe(true);
    });
  });

  /**
   * Unit Test: Specific nationwide phrases exist
   * 
   * This test checks for the presence of specific nationwide availability
   * phrases that should appear on the website.
   */
  it('should contain "all 50 states" or "nationwide" on Home page', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    const hasAll50States = /all\s+50\s+states/i.test(pageText);
    const hasNationwide = /nationwide/i.test(pageText);
    
    expect(hasAll50States || hasNationwide).toBe(true);
  });

  /**
   * Unit Test: FAQ contains out-of-state answer
   * 
   * This test verifies that the FAQ page contains the specific answer
   * about serving clients outside of New York.
   */
  it('should contain out-of-state service information in FAQ', () => {
    const { container } = renderPageWithRouter(FAQ);
    const pageText = container.textContent || '';
    
    // Check for the specific FAQ answer about out-of-state service
    const hasOutOfStateAnswer = 
      /all\s+50\s+states/i.test(pageText) &&
      /headquartered\s+in\s+New\s+York/i.test(pageText);
    
    expect(hasOutOfStateAnswer).toBe(true);
  });

  /**
   * Unit Test: No geographic limitations implied
   * 
   * This test checks that pages don't contain language that implies
   * geographic limitations (e.g., "New York only", "local only").
   */
  it('should not contain language implying geographic limitations', () => {
    const limitingPhrases = [
      /\bNew\s+York\s+only\b/i,
      /\blocal\s+only\b/i,
      /\blimited\s+to\s+New\s+York\b/i,
      /\bNY\s+residents\s+only\b/i,
      /\bserving\s+only\s+New\s+York\b/i,
    ];
    
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const pageText = container.textContent || '';
      
      limitingPhrases.forEach(phrase => {
        expect(pageText).not.toMatch(phrase);
      });
    });
  });

  /**
   * Unit Test: "families and businesses" phrase on Home page
   * 
   * This test verifies that the Home page contains the specific phrase
   * "families and businesses in all 50 states" as required.
   */
  it('should contain "families and businesses in all 50 states" on Home page', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    const hasFamiliesAndBusinesses = 
      /families\s+and\s+businesses\s+in\s+all\s+50\s+states/i.test(pageText);
    
    expect(hasFamiliesAndBusinesses).toBe(true);
  });

  /**
   * Property Test: Geographic reach in service descriptions
   * 
   * This test verifies that when services mention their availability,
   * they don't contradict the nationwide positioning.
   */
  it('should not contradict nationwide availability in service descriptions', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // If page mentions services and geography, check for contradictions
          const mentionsServices = /\b(service|offer|provide|available)\b/i.test(pageText);
          const mentionsGeography = hasGeographicReachMention(pageText);
          
          if (mentionsServices && mentionsGeography) {
            // Check for contradictory phrases
            const contradictoryPhrases = [
              /\bonly\s+in\s+New\s+York\b/i,
              /\bNew\s+York\s+area\s+only\b/i,
              /\blocal\s+service\s+only\b/i,
            ];
            
            contradictoryPhrases.forEach(phrase => {
              if (phrase.test(pageText)) {
                throw new Error(
                  `Page ${pageConfig.name} contains contradictory geographic limitation: ${phrase}`
                );
              }
            });
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
});

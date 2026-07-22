/**
 * Property Test: Brand Name Spelling Consistency
 * 
 * Feature: website-change-request-implementation
 * Property 7: For any text content on the website, the brand name should be 
 * spelled "MRECAI" and should not contain misspellings like "Merc AI", 
 * "MercAI", or "Mre Cai"
 * 
 * Validates: Requirements 13.2, 13.3
 * 
 * This property test verifies that:
 * - The brand name "MRECAI" is spelled correctly across all pages
 * - Common misspellings do not appear anywhere on the site
 * - Brand name consistency is maintained in all contexts
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// Helper function to render a page with router context
const renderPageWithRouter = (PageComponent: React.ComponentType) => {
  return render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

describe('Property 7: Brand Name Spelling Consistency', () => {
  /**
   * Property Test: No misspellings across all pages
   * 
   * This test generates random page selections and verifies that common
   * misspellings of "MRECAI" do not appear anywhere on the rendered page.
   */
  it('should not contain brand name misspellings on any page', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Test for common misspellings
          const misspellings = [
            /merc\s+ai/i,           // "Merc AI" with space
            /mercai/i,              // "MercAI" without space
            /mre\s+cai/i,           // "Mre Cai" with space
            /mrecai(?![\s\w])/i,    // Ensure it's not part of a longer word
          ];
          
          // Check that none of the misspellings appear
          misspellings.forEach((pattern, index) => {
            const match = pageText.match(pattern);
            if (match && !isValidBrandName(match[0])) {
              throw new Error(
                `Found potential misspelling "${match[0]}" on ${pageConfig.name} page`
              );
            }
          });
          
          // If the test reaches here, no misspellings were found
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 100,
        verbose: true,
      }
    );
  });

  /**
   * Property Test: Correct spelling when brand name is mentioned
   * 
   * This test verifies that when the brand name is mentioned, it uses
   * the single approved spelling: "MRECAI"
   */
  it('should use correct brand name spelling when mentioned', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // If brand name is mentioned, verify correct spelling
          const brandMentions = pageText.match(/\bMRE\b/gi);
          
          if (brandMentions && brandMentions.length > 0) {
            // "MRECAI" is the only approved rendering of the brand
            expect(/MRECAI/i.test(pageText)).toBe(true);
          }
          
          // Test passes if no brand mentions or valid format found
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 100,
        verbose: true,
      }
    );
  });

  /**
   * Property Test: Consistency across multiple renders
   * 
   * This test verifies that brand name spelling is consistent across
   * multiple renders of the same page (idempotency check)
   */
  it('should maintain consistent brand name spelling across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.integer({ min: 2, max: 5 }),
        (pageConfig, renderCount) => {
          const renderedTexts: string[] = [];
          
          // Render the page multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = renderPageWithRouter(pageConfig.component);
            renderedTexts.push(container.textContent || '');
          }
          
          // Extract brand name occurrences from each render
          const brandOccurrences = renderedTexts.map(text => 
            extractBrandNames(text)
          );
          
          // Verify all renders have the same brand name spellings
          if (brandOccurrences.length > 1) {
            const firstRender = brandOccurrences[0];
            brandOccurrences.slice(1).forEach((occurrence, index) => {
              expect(occurrence).toEqual(firstRender);
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
  });

  /**
   * Unit Test: Specific misspelling patterns
   * 
   * This test explicitly checks for known misspelling patterns
   * that have been found or could occur
   */
  it('should not contain specific known misspellings', () => {
    const knownMisspellings = [
      'Merc AI',
      'MercAI', 
      'Mre Cai',
      'MreCai',
      'MRE CAI',
      'Merc-AI',
      'MRE-CAI',
    ];
    
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const pageText = container.textContent || '';
      
      knownMisspellings.forEach(misspelling => {
        expect(pageText).not.toContain(misspelling);
      });
    });
  });

  /**
   * Unit Test: Verify correct brand name exists
   * 
   * This test ensures that the correct brand name "MRECAI"
   * appears on key pages
   */
  it('should contain correct brand name on key pages', () => {
    const keyPages = pages.filter(p => 
      ['Home', 'About', 'Contact'].includes(p.name)
    );
    
    keyPages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const pageText = container.textContent || '';
      
      expect(/MRECAI/i.test(pageText)).toBe(true);
    });
  });
});

/**
 * Helper function to validate if a matched string is a valid brand name
 */
function isValidBrandName(text: string): boolean {
  const validPatterns = [
    /^MRECAI$/i,
  ];
  
  return validPatterns.some(pattern => pattern.test(text.trim()));
}

/**
 * Helper function to extract all brand name occurrences from text
 */
function extractBrandNames(text: string): string[] {
  const brandPattern = /\bMRECAI\b/gi;
  const matches = text.match(brandPattern);
  return matches ? matches.map(m => m.trim()) : [];
}

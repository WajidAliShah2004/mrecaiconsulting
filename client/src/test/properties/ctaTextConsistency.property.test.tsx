/**
 * Property Test: CTA Button Text Consistency
 * 
 * Feature: website-change-request-implementation
 * Property 1: For any page on the website, the rendered output should not 
 * contain the deprecated CTA text "Start Assessment", "Book Strategy Call", 
 * or "Take the Assessment"
 * 
 * Validates: Requirements 1.4
 * 
 * This property test verifies that:
 * - Deprecated CTA text does not appear on any page
 * - All CTAs use the new, inviting language
 * - Consistency is maintained across all pages
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import fc from 'fast-check';

// Import all major pages that need to be tested
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

// Deprecated CTA text patterns to check for
const deprecatedCTAPatterns = [
  { pattern: /start\s+assessment/i, text: 'Start Assessment' },
  { pattern: /book\s+strategy\s+call/i, text: 'Book Strategy Call' },
  { pattern: /take\s+the\s+assessment/i, text: 'Take the Assessment' },
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

describe('Property 1: CTA Button Text Consistency', () => {
  /**
   * Property Test: No deprecated CTA text across all pages
   * 
   * This test generates random page selections and verifies that deprecated
   * CTA text patterns do not appear anywhere on the rendered page.
   * 
   * **Validates: Requirements 1.4**
   */
  it('should not contain deprecated CTA text on any page', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Check for each deprecated CTA pattern
          deprecatedCTAPatterns.forEach(({ pattern, text }) => {
            const match = pageText.match(pattern);
            if (match) {
              throw new Error(
                `Found deprecated CTA text "${text}" on ${pageConfig.name} page. ` +
                `Matched text: "${match[0]}"`
              );
            }
          });
          
          // If the test reaches here, no deprecated CTA text was found
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
   * Property Test: Consistency across multiple renders
   * 
   * This test verifies that CTA text remains consistent across multiple
   * renders of the same page (idempotency check). No deprecated text
   * should appear in any render.
   */
  it('should maintain CTA text consistency across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.integer({ min: 2, max: 3 }),
        (pageConfig, renderCount) => {
          // Render the page multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = renderPageWithRouter(pageConfig.component);
            const pageText = container.textContent || '';
            
            // Check for deprecated CTA patterns in each render
            deprecatedCTAPatterns.forEach(({ pattern, text }) => {
              const match = pageText.match(pattern);
              if (match) {
                throw new Error(
                  `Found deprecated CTA text "${text}" on ${pageConfig.name} page ` +
                  `(render ${i + 1}/${renderCount}). Matched text: "${match[0]}"`
                );
              }
            });
          }
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 30,
        verbose: true,
      }
    );
  }, 30000); // 30 second timeout

  /**
   * Property Test: CTA buttons exist with new text
   * 
   * This test verifies that pages with CTAs use the new, approved text
   * instead of deprecated versions. It checks for the presence of new
   * CTA text on pages that should have CTAs.
   */
  it('should use new CTA text on pages with call-to-action buttons', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages.filter(p => 
          ['Home', 'Products', 'Contact'].includes(p.name)
        )),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // First, ensure no deprecated text exists
          deprecatedCTAPatterns.forEach(({ pattern, text }) => {
            expect(pageText).not.toMatch(pattern);
          });
          
          // Then verify that new CTA text patterns exist
          // (at least one of the approved CTA texts should be present)
          const hasNewCTAText = 
            /get\s+started/i.test(pageText) ||
            /book\s+consultation/i.test(pageText) ||
            /book\s+free\s+consultation/i.test(pageText) ||
            /schedule\s+free\s+consultation/i.test(pageText) ||
            /contact\s+us/i.test(pageText);
          
          expect(hasNewCTAText).toBe(true);
        }
      ),
      { 
        numRuns: 50,
        verbose: true,
      }
    );
  }, 30000); // 30 second timeout

  /**
   * Unit Test: Specific deprecated text patterns
   * 
   * This test explicitly checks each page for known deprecated CTA text
   * patterns to ensure they have been removed.
   */
  it('should not contain specific deprecated CTA patterns on any page', () => {
    const deprecatedTexts = [
      'Start Assessment',
      'start assessment',
      'START ASSESSMENT',
      'Book Strategy Call',
      'book strategy call',
      'BOOK STRATEGY CALL',
      'Take the Assessment',
      'take the assessment',
      'TAKE THE ASSESSMENT',
    ];
    
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const pageText = container.textContent || '';
      
      deprecatedTexts.forEach(deprecatedText => {
        expect(pageText).not.toContain(deprecatedText);
      });
    });
  });

  /**
   * Unit Test: Home page CTA verification
   * 
   * This test specifically verifies that the Home page, which is the most
   * critical page for CTAs, uses the new text and not the deprecated versions.
   */
  it('should use new CTA text on Home page specifically', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // Verify no deprecated text
    expect(pageText).not.toMatch(/start\s+assessment/i);
    expect(pageText).not.toMatch(/book\s+strategy\s+call/i);
    expect(pageText).not.toMatch(/take\s+the\s+assessment/i);
    
    // Verify new CTA text exists
    const hasGetStarted = /get\s+started/i.test(pageText);
    const hasBookConsultation = /book\s+consultation/i.test(pageText);
    
    expect(hasGetStarted || hasBookConsultation).toBe(true);
  });

  /**
   * Unit Test: Button elements CTA text verification
   * 
   * This test checks that actual button elements (not just text content)
   * do not contain deprecated CTA text.
   */
  it('should not have deprecated CTA text in button elements', () => {
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const buttons = container.querySelectorAll('button, a[role="button"], .btn');
      
      buttons.forEach(button => {
        const buttonText = button.textContent || '';
        
        deprecatedCTAPatterns.forEach(({ pattern, text }) => {
          if (pattern.test(buttonText)) {
            throw new Error(
              `Found deprecated CTA text "${text}" in button element on ${pageConfig.name} page. ` +
              `Button text: "${buttonText}"`
            );
          }
        });
      });
    });
  });

  /**
   * Unit Test: Link elements CTA text verification
   * 
   * This test checks that link elements (which may function as CTAs)
   * do not contain deprecated CTA text.
   */
  it('should not have deprecated CTA text in link elements', () => {
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const links = container.querySelectorAll('a');
      
      links.forEach(link => {
        const linkText = link.textContent || '';
        
        deprecatedCTAPatterns.forEach(({ pattern, text }) => {
          if (pattern.test(linkText)) {
            throw new Error(
              `Found deprecated CTA text "${text}" in link element on ${pageConfig.name} page. ` +
              `Link text: "${linkText}"`
            );
          }
        });
      });
    });
  });
});

/**
 * Helper function to extract all CTA-like text from a page
 * (for debugging and analysis purposes)
 */
function extractCTAText(container: HTMLElement): string[] {
  const ctaElements = container.querySelectorAll(
    'button, a[role="button"], .btn, a[href*="book"], a[href*="contact"], a[href*="start"]'
  );
  
  return Array.from(ctaElements).map(el => el.textContent?.trim() || '');
}

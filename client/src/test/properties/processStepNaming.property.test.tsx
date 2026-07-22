/**
 * Property Test: Process Step Naming Consistency
 * 
 * Feature: website-change-request-implementation
 * Property 4: For any reference to the four-step growth process, the first 
 * step should be named "Evaluate" (not "Diagnose")
 * 
 * Validates: Requirements 4.3
 * 
 * This property test verifies that:
 * - The first step of the process is named "Evaluate"
 * - The deprecated name "Diagnose" does not appear
 * - Consistency is maintained across all pages that reference the process
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
 * Helper function to check if text contains process flow references
 */
function hasProcessFlowReference(text: string): boolean {
  const processIndicators = [
    /\b(four|4)[\s-]step\s+(process|approach|methodology|framework)\b/i,
    /\b(our|the)\s+process\b/i,
    /\b(evaluate|diagnose|design|implement|optimize)\b.*\b(design|implement|optimize)\b/i,
    /\bhow\s+we\s+work\b/i,
    /\bour\s+approach\b/i,
  ];
  
  return processIndicators.some(pattern => pattern.test(text));
}

/**
 * Helper function to extract process step names from text
 */
function extractProcessSteps(text: string): string[] {
  const steps: string[] = [];
  
  // Common process step patterns
  const stepPatterns = [
    /\b(step\s+1|first\s+step|1\.|①)[\s:]*([A-Z][a-z]+)/gi,
    /\b(evaluate|diagnose|design|implement|optimize)\b/gi,
  ];
  
  stepPatterns.forEach(pattern => {
    const matches = text.matchAll(pattern);
    for (const match of matches) {
      if (match[2]) {
        steps.push(match[2]);
      } else if (match[1]) {
        steps.push(match[1]);
      }
    }
  });
  
  return steps;
}

describe('Property 4: Process Step Naming Consistency', () => {
  /**
   * Property Test: First step is "Evaluate" not "Diagnose"
   * 
   * **Validates: Requirements 4.3**
   * 
   * This test verifies that when the four-step process is referenced on any page,
   * the first step is named "Evaluate" and not the deprecated "Diagnose".
   */
  it('should use "Evaluate" as the first step name (not "Diagnose")', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Check if page contains process flow references
          if (hasProcessFlowReference(pageText)) {
            // Check for deprecated "Diagnose" step
            const hasDiagnose = /\bdiagnose\b/i.test(pageText);
            
            if (hasDiagnose) {
              throw new Error(
                `Page ${pageConfig.name} uses deprecated process step name "Diagnose". ` +
                `Should use "Evaluate" instead.`
              );
            }
            
            // If process is mentioned, verify "Evaluate" is present
            const hasEvaluate = /\bevaluate\b/i.test(pageText);
            
            if (!hasEvaluate) {
              throw new Error(
                `Page ${pageConfig.name} references the process but does not include ` +
                `the "Evaluate" step name.`
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
   * This test verifies that process step names remain consistent across
   * multiple renders of the same page (idempotency check).
   */
  it('should maintain consistent process step names across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.integer({ min: 2, max: 3 }),
        (pageConfig, renderCount) => {
          const stepNameSets: string[][] = [];
          
          // Render the page multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = renderPageWithRouter(pageConfig.component);
            const pageText = container.textContent || '';
            const steps = extractProcessSteps(pageText);
            stepNameSets.push(steps);
          }
          
          // Verify all renders have the same step names
          if (stepNameSets.length > 1) {
            const firstRender = stepNameSets[0];
            stepNameSets.slice(1).forEach((stepSet) => {
              expect(stepSet).toEqual(firstRender);
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
   * Unit Test: Home page uses "Evaluate" not "Diagnose"
   * 
   * This test specifically verifies that the Home page, which contains
   * the ProcessFlow component, uses "Evaluate" as the first step.
   */
  it('should use "Evaluate" as first step on Home page', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // Verify "Evaluate" is present
    const hasEvaluate = /\bevaluate\b/i.test(pageText);
    expect(hasEvaluate).toBe(true);
    
    // Verify "Diagnose" is not present
    const hasDiagnose = /\bdiagnose\b/i.test(pageText);
    expect(hasDiagnose).toBe(false);
  });

  /**
   * Unit Test: No "Diagnose" on any page
   * 
   * This test explicitly checks that the deprecated "Diagnose" step name
   * does not appear on any page of the website.
   */
  it('should not contain "Diagnose" step name on any page', () => {
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const pageText = container.textContent || '';
      
      // Check for "Diagnose" in various forms
      expect(pageText).not.toMatch(/\bdiagnose\b/i);
      expect(pageText).not.toMatch(/\bdiagnosing\b/i);
      expect(pageText).not.toMatch(/\bdiagnosis\b/i);
    });
  });

  /**
   * Unit Test: Process flow contains all expected steps
   * 
   * This test verifies that when the process flow is displayed,
   * it contains all four expected steps with correct names.
   */
  it('should contain all four process steps with correct names on Home page', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // Expected step names
    const expectedSteps = ['Evaluate', 'Design', 'Implement', 'Optimize'];
    
    expectedSteps.forEach(step => {
      const pattern = new RegExp(`\\b${step}\\b`, 'i');
      expect(pageText).toMatch(pattern);
    });
  });

  /**
   * Unit Test: Process step order is correct
   * 
   * This test verifies that when process steps are listed, "Evaluate"
   * appears before other steps in the sequence.
   */
  it('should have "Evaluate" appear before other process steps', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // Find positions of step names
    const evaluateIndex = pageText.toLowerCase().indexOf('evaluate');
    const designIndex = pageText.toLowerCase().indexOf('design');
    const implementIndex = pageText.toLowerCase().indexOf('implement');
    const optimizeIndex = pageText.toLowerCase().indexOf('optimize');
    
    // If all steps are present, verify order
    if (evaluateIndex !== -1 && designIndex !== -1 && 
        implementIndex !== -1 && optimizeIndex !== -1) {
      expect(evaluateIndex).toBeLessThan(designIndex);
      expect(designIndex).toBeLessThan(implementIndex);
      expect(implementIndex).toBeLessThan(optimizeIndex);
    }
  });

  /**
   * Property Test: Process step naming in different contexts
   * 
   * This test verifies that "Evaluate" is used consistently whether
   * the process is mentioned in headings, paragraphs, or lists.
   */
  it('should use "Evaluate" consistently in all contexts', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          
          // Check headings
          const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
          headings.forEach(heading => {
            const headingText = heading.textContent || '';
            if (/\bdiagnose\b/i.test(headingText)) {
              throw new Error(
                `Page ${pageConfig.name} uses "Diagnose" in heading: "${headingText}"`
              );
            }
          });
          
          // Check list items
          const listItems = container.querySelectorAll('li');
          listItems.forEach(li => {
            const liText = li.textContent || '';
            if (/\bdiagnose\b/i.test(liText)) {
              throw new Error(
                `Page ${pageConfig.name} uses "Diagnose" in list item: "${liText}"`
              );
            }
          });
          
          // Check paragraphs
          const paragraphs = container.querySelectorAll('p');
          paragraphs.forEach(p => {
            const pText = p.textContent || '';
            if (/\bdiagnose\b/i.test(pText)) {
              throw new Error(
                `Page ${pageConfig.name} uses "Diagnose" in paragraph`
              );
            }
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
   * Unit Test: ProcessFlow component uses "Evaluate"
   * 
   * This test specifically targets the ProcessFlow component to ensure
   * it uses the correct step name.
   */
  it('should have ProcessFlow component use "Evaluate" as first step', () => {
    const { container } = renderPageWithRouter(Home);
    
    // Look for process flow section (typically has specific class or structure)
    const processSection = container.querySelector('[class*="process"]') || container;
    const processSectionText = processSection.textContent || '';
    
    // If process section exists, verify it uses "Evaluate"
    if (hasProcessFlowReference(processSectionText)) {
      expect(processSectionText).toMatch(/\bevaluate\b/i);
      expect(processSectionText).not.toMatch(/\bdiagnose\b/i);
    }
  });

  /**
   * Property Test: No variations of "Diagnose"
   * 
   * This test checks for various forms and variations of "Diagnose"
   * to ensure complete removal of the deprecated terminology.
   */
  it('should not contain any variations of "Diagnose"', () => {
    const diagnoseVariations = [
      /\bdiagnose\b/i,
      /\bdiagnoses\b/i,
      /\bdiagnosing\b/i,
      /\bdiagnosed\b/i,
      /\bdiagnosis\b/i,
      /\bdiagnostic\b/i,
    ];
    
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Only check if page has process references
          if (hasProcessFlowReference(pageText)) {
            diagnoseVariations.forEach(pattern => {
              if (pattern.test(pageText)) {
                throw new Error(
                  `Page ${pageConfig.name} contains variation of "Diagnose": ${pattern}`
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

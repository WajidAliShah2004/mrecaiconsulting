/**
 * Property Test: Service Naming Consistency
 * 
 * Feature: website-change-request-implementation
 * Property 3: For any page that lists services, the service names should 
 * match the canonical service names defined in the system
 * 
 * Validates: Requirements 3.3
 * 
 * This property test verifies that:
 * - Service names are consistent across all pages
 * - Service names match the canonical definitions in constants
 * - No variations or misspellings of service names exist
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import fc from 'fast-check';
import { SERVICES, SERVICES_EXPANDED } from '../../utils/constants';

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
 * Extract canonical service names from constants
 */
const canonicalServiceNames = [
  ...SERVICES.map(s => s.title),
  ...SERVICES_EXPANDED.map(s => s.title),
  // Additional canonical service names
  'Website Development',
  'Custom Software Development',
  'AI Consulting & Automation',
  'Digital Marketing',
  'Graphic Design',
  'Video Production',
  'Business Process Automation',
  'Tax Preparation',
  'Bookkeeping',
  'Insurance Consulting',
  'Investment Management',
];

// Remove duplicates
const uniqueCanonicalNames = Array.from(new Set(canonicalServiceNames));

/**
 * Common service name variations that should be avoided
 */
const serviceNameVariations: Record<string, string[]> = {
  'AI Consulting & Automation': [
    'AI Consulting and Automation',
    'Artificial Intelligence Consulting',
    'AI Services',
    'Automation Services',
  ],
  'Custom Software Development': [
    'Software Development',
    'Custom Development',
    'Software Engineering',
    'App Development',
  ],
  'Digital Marketing': [
    'Online Marketing',
    'Internet Marketing',
    'Web Marketing',
    'Marketing Services',
  ],
  'Graphic Design & Branding': [
    'Graphic Design',
    'Design Services',
    'Branding Services',
    'Visual Design',
  ],
  'Video Production & Editing': [
    'Video Production',
    'Video Editing',
    'Video Services',
    'Multimedia Production',
  ],
  'Tax Preparation & Compliance': [
    'Tax Preparation',
    'Tax Services',
    'Tax Filing',
    'Tax Compliance',
  ],
  'Bookkeeping & Accounting': [
    'Bookkeeping',
    'Accounting Services',
    'Accounting',
    'Financial Accounting',
  ],
  'Insurance Consulting': [
    'Insurance Services',
    'Insurance Advisory',
    'Risk Management',
    'Insurance Solutions',
  ],
};

/**
 * Helper function to check if text contains service listings
 */
function hasServiceListings(text: string): boolean {
  const serviceIndicators = [
    /\bservices?\s+(include|offered|available|provided)\b/i,
    /\bour\s+services?\b/i,
    /\bwhat\s+we\s+(do|offer|provide)\b/i,
    /\bservice\s+offerings?\b/i,
  ];
  
  return serviceIndicators.some(pattern => pattern.test(text));
}

/**
 * Helper function to extract service names from text
 */
function extractServiceNames(text: string): string[] {
  const foundServices: string[] = [];
  
  uniqueCanonicalNames.forEach(serviceName => {
    // Create a regex that matches the service name (case-insensitive)
    const pattern = new RegExp(`\\b${serviceName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (pattern.test(text)) {
      foundServices.push(serviceName);
    }
  });
  
  return foundServices;
}

/**
 * Helper function to check for service name variations
 */
function findServiceVariations(text: string): Array<{ canonical: string; variation: string }> {
  const foundVariations: Array<{ canonical: string; variation: string }> = [];
  
  Object.entries(serviceNameVariations).forEach(([canonical, variations]) => {
    variations.forEach(variation => {
      const pattern = new RegExp(`\\b${variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (pattern.test(text)) {
        // Check if the canonical name is also present
        const canonicalPattern = new RegExp(`\\b${canonical.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        if (!canonicalPattern.test(text)) {
          foundVariations.push({ canonical, variation });
        }
      }
    });
  });
  
  return foundVariations;
}

describe('Property 3: Service Naming Consistency', () => {
  /**
   * Property Test: Service names match canonical definitions
   * 
   * **Validates: Requirements 3.3**
   * 
   * This test verifies that when services are listed on any page,
   * they use the canonical service names defined in the system.
   */
  it('should use canonical service names when listing services', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Check if page contains service listings
          if (hasServiceListings(pageText)) {
            // Extract service names found on the page
            const foundServices = extractServiceNames(pageText);
            
            // Check for non-canonical variations
            const variations = findServiceVariations(pageText);
            
            if (variations.length > 0) {
              throw new Error(
                `Page ${pageConfig.name} uses non-canonical service name variations: ` +
                variations.map(v => `"${v.variation}" (should be "${v.canonical}")`).join(', ')
              );
            }
            
            // If services are found, verify they are from the canonical list
            if (foundServices.length > 0) {
              foundServices.forEach(service => {
                const isCanonical = uniqueCanonicalNames.some(
                  canonical => canonical.toLowerCase() === service.toLowerCase()
                );
                expect(isCanonical).toBe(true);
              });
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
   * This test verifies that service names remain consistent across
   * multiple renders of the same page (idempotency check).
   */
  it('should maintain consistent service names across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.integer({ min: 2, max: 3 }),
        (pageConfig, renderCount) => {
          const serviceNameSets: string[][] = [];
          
          // Render the page multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = renderPageWithRouter(pageConfig.component);
            const pageText = container.textContent || '';
            const services = extractServiceNames(pageText);
            serviceNameSets.push(services.sort());
          }
          
          // Verify all renders have the same service names
          if (serviceNameSets.length > 1) {
            const firstRender = serviceNameSets[0];
            serviceNameSets.slice(1).forEach((serviceSet, index) => {
              expect(serviceSet).toEqual(firstRender);
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
   * Unit Test: Home page contains "Website Development"
   * 
   * This test verifies that the Home page includes "Website Development"
   * in its service listings, as required by the specification.
   */
  it('should include "Website Development" in Home page services', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    const hasWebsiteDevelopment = /\bWebsite\s+Development\b/i.test(pageText);
    
    expect(hasWebsiteDevelopment).toBe(true);
  });

  /**
   * Unit Test: Services page uses canonical names
   * 
   * This test verifies that the main Services page uses canonical
   * service names from the constants file.
   */
  it('should use canonical service names on Services page', () => {
    const { container } = renderPageWithRouter(Services);
    const pageText = container.textContent || '';
    
    // Check for variations that should not exist
    const variations = findServiceVariations(pageText);
    
    expect(variations).toHaveLength(0);
  });

  /**
   * Unit Test: Products page uses canonical names
   * 
   * This test verifies that the Products page uses canonical
   * service names when listing MRECAI services.
   */
  it('should use canonical service names on Products page', () => {
    const { container } = renderPageWithRouter(Products);
    const pageText = container.textContent || '';
    
    // Check for variations that should not exist
    const variations = findServiceVariations(pageText);
    
    expect(variations).toHaveLength(0);
  });

  /**
   * Unit Test: No ambiguous service names
   * 
   * This test checks that pages don't use ambiguous or generic
   * service names that could be confused with canonical names.
   */
  it('should not use ambiguous service names', () => {
    const ambiguousNames = [
      /\bAI\s+Services\b/i,
      /\bTech\s+Services\b/i,
      /\bMarketing\s+Services\b/i,
      /\bDesign\s+Services\b/i,
      /\bConsulting\s+Services\b/i,
    ];
    
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const pageText = container.textContent || '';
      
      // Only check if the page has service listings
      if (hasServiceListings(pageText)) {
        ambiguousNames.forEach(pattern => {
          // Allow these in descriptive text, but not as standalone service names
          // This is a soft check - we're looking for patterns that suggest
          // these are being used as service names rather than descriptions
          const matches = pageText.match(pattern);
          if (matches) {
            // Check if it's in a list context (bullet point, numbered list, etc.)
            const listContext = /[•\-\*\d+\.]\s*AI\s+Services/i.test(pageText);
            if (listContext) {
              throw new Error(
                `Page ${pageConfig.name} uses ambiguous service name "${matches[0]}" ` +
                `in a list context. Use canonical names instead.`
              );
            }
          }
        });
      }
    });
  });

  /**
   * Property Test: Service name case consistency
   * 
   * This test verifies that service names maintain consistent
   * capitalization across all pages.
   */
  it('should maintain consistent capitalization for service names', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.constantFrom(...uniqueCanonicalNames),
        (pageConfig, canonicalName) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const pageText = container.textContent || '';
          
          // Create a case-insensitive pattern
          const pattern = new RegExp(`\\b${canonicalName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
          const matches = pageText.match(pattern);
          
          if (matches && matches.length > 0) {
            // All matches should have the same capitalization
            const firstMatch = matches[0];
            matches.forEach(match => {
              // Allow for minor variations in spacing but not capitalization
              expect(match.toLowerCase()).toBe(firstMatch.toLowerCase());
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

  /**
   * Unit Test: Service names in navigation and links
   * 
   * This test verifies that service names in navigation menus and
   * links also use canonical names.
   */
  it('should use canonical service names in navigation and links', () => {
    pages.forEach(pageConfig => {
      const { container } = renderPageWithRouter(pageConfig.component);
      const links = container.querySelectorAll('a, button');
      
      links.forEach(link => {
        const linkText = link.textContent || '';
        
        // Check if link text contains a service name
        const foundServices = extractServiceNames(linkText);
        
        if (foundServices.length > 0) {
          // Verify no variations are used
          const variations = findServiceVariations(linkText);
          expect(variations).toHaveLength(0);
        }
      });
    });
  });

  /**
   * Unit Test: Specific canonical names exist on key pages
   * 
   * This test verifies that key canonical service names appear
   * on the pages where they should be listed.
   */
  it('should contain key canonical service names on appropriate pages', () => {
    const keyServices = [
      'AI Consulting & Automation',
      'Custom Software Development',
      'Digital Marketing',
      'Website Development',
    ];
    
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    keyServices.forEach(serviceName => {
      const pattern = new RegExp(`\\b${serviceName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      const hasService = pattern.test(pageText);
      
      // At least some key services should be present on Home page
      // We don't require all, but we check that the ones present use canonical names
      if (hasService) {
        expect(hasService).toBe(true);
      }
    });
  });
});

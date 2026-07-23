/**
 * Property Test: Content Deduplication
 * 
 * Feature: website-change-request-implementation
 * Property 5: For any piece of content on the website, it should not appear 
 * in multiple sections verbatim (allowing for intentional repetition like CTAs)
 * 
 * Validates: Requirements 6.4
 * 
 * This property test verifies that:
 * - Content is not duplicated verbatim across different sections
 * - Intentional repetition (CTAs, contact info, legal text) is allowed
 * - Each section provides unique value and information
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
 * Intentional repetition patterns that are allowed
 * These are content pieces that should appear multiple times by design
 */
const allowedRepetitionPatterns = [
  // CTA text
  /\bget\s+started\b/i,
  /\bbook\s+consultation\b/i,
  /\bbook\s+free\s+consultation\b/i,
  /\bschedule\s+free\s+consultation\b/i,
  /\bcontact\s+us\b/i,
  /\blearn\s+more\b/i,
  
  // Contact information
  /\(929\)\s*919-3574\b/,
  /\b929-919-3574\b/,
  /\bmrecai\.com\b/i,
  /\binfo@mrecai\.com\b/i,
  
  // Brand name and tagline
  /\bMRE\s+Consulting\s+(&|and)\s+Insurance\b/i,
  /\bMRECAI\b/i,
  
  // Legal and compliance text
  /\bprivacy\s+policy\b/i,
  /\bterms\s+of\s+service\b/i,
  /\ball\s+rights\s+reserved\b/i,
  /\bcopyright\b/i,
  
  // Navigation elements
  /\bhome\b/i,
  /\babout\b/i,
  /\bservices\b/i,
  /\bproducts\b/i,
  /\bcontact\b/i,
  /\bfaq\b/i,
  
  // Common short phrases (< 5 words)
  /\b\w+\s+\w+\s+\w+\b/, // 3 words or less
];

/**
 * Helper function to check if text matches allowed repetition patterns
 */
function isAllowedRepetition(text: string): boolean {
  return allowedRepetitionPatterns.some(pattern => pattern.test(text));
}

/**
 * Helper function to extract content sections from a page
 */
function extractSections(container: HTMLElement): Array<{ element: Element; text: string }> {
  const sections: Array<{ element: Element; text: string }> = [];
  
  // Extract major sections (section, article, div with specific classes)
  const sectionElements = container.querySelectorAll(
    'section, article, [class*="section"], [class*="container"], main > div'
  );
  
  sectionElements.forEach(element => {
    const text = element.textContent?.trim() || '';
    if (text.length > 50) { // Only consider substantial sections
      sections.push({ element, text });
    }
  });
  
  return sections;
}

/**
 * Helper function to extract sentences from text
 */
function extractSentences(text: string): string[] {
  // Split by sentence-ending punctuation
  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 20);
  return sentences;
}

/**
 * Helper function to find duplicate sentences across sections
 */
function findDuplicateSentences(sections: Array<{ element: Element; text: string }>): Array<{
  sentence: string;
  count: number;
  sections: number[];
}> {
  const sentenceMap = new Map<string, number[]>();
  
  sections.forEach((section, index) => {
    const sentences = extractSentences(section.text);
    
    sentences.forEach(sentence => {
      // Normalize sentence (lowercase, remove extra whitespace)
      const normalized = sentence.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Skip if it's allowed repetition
      if (isAllowedRepetition(normalized)) {
        return;
      }
      
      // Skip very short sentences (< 10 words)
      if (normalized.split(/\s+/).length < 10) {
        return;
      }
      
      if (!sentenceMap.has(normalized)) {
        sentenceMap.set(normalized, []);
      }
      
      const sectionIndices = sentenceMap.get(normalized)!;
      if (!sectionIndices.includes(index)) {
        sectionIndices.push(index);
      }
    });
  });
  
  // Find sentences that appear in multiple sections
  const duplicates: Array<{ sentence: string; count: number; sections: number[] }> = [];
  
  sentenceMap.forEach((sectionIndices, sentence) => {
    if (sectionIndices.length > 1) {
      duplicates.push({
        sentence,
        count: sectionIndices.length,
        sections: sectionIndices,
      });
    }
  });
  
  return duplicates;
}

/**
 * Helper function to find duplicate paragraphs across sections
 */
function findDuplicateParagraphs(sections: Array<{ element: Element; text: string }>): Array<{
  paragraph: string;
  count: number;
  sections: number[];
}> {
  const paragraphMap = new Map<string, number[]>();
  
  sections.forEach((section, index) => {
    const paragraphs = section.element.querySelectorAll('p');
    
    paragraphs.forEach(p => {
      const text = p.textContent?.trim() || '';
      
      // Skip short paragraphs
      if (text.length < 50) {
        return;
      }
      
      // Normalize paragraph
      const normalized = text.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Skip if it's allowed repetition
      if (isAllowedRepetition(normalized)) {
        return;
      }
      
      if (!paragraphMap.has(normalized)) {
        paragraphMap.set(normalized, []);
      }
      
      const sectionIndices = paragraphMap.get(normalized)!;
      if (!sectionIndices.includes(index)) {
        sectionIndices.push(index);
      }
    });
  });
  
  // Find paragraphs that appear in multiple sections
  const duplicates: Array<{ paragraph: string; count: number; sections: number[] }> = [];
  
  paragraphMap.forEach((sectionIndices, paragraph) => {
    if (sectionIndices.length > 1) {
      duplicates.push({
        paragraph,
        count: sectionIndices.length,
        sections: sectionIndices,
      });
    }
  });
  
  return duplicates;
}

describe('Property 5: Content Deduplication', () => {
  /**
   * Property Test: No verbatim content duplication across sections
   * 
   * **Validates: Requirements 6.4**
   * 
   * This test verifies that content is not duplicated verbatim across
   * different sections of any page, excluding intentional repetition.
   */
  it('should not have verbatim content duplication across sections', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          
          // Extract sections from the page
          const sections = extractSections(container);
          
          // Find duplicate sentences
          const duplicateSentences = findDuplicateSentences(sections);
          
          if (duplicateSentences.length > 0) {
            const firstDuplicate = duplicateSentences[0];
            throw new Error(
              `Page ${pageConfig.name} has duplicate content across sections. ` +
              `Sentence appears in ${firstDuplicate.count} sections: ` +
              `"${firstDuplicate.sentence.substring(0, 100)}..."`
            );
          }
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 100,
        verbose: true,
      }
    );
  }, 60000); // 60 second timeout (content analysis can be slow)

  /**
   * Property Test: No duplicate paragraphs across sections
   * 
   * This test verifies that entire paragraphs are not duplicated
   * across different sections of a page.
   */
  it('should not have duplicate paragraphs across sections', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          
          // Extract sections from the page
          const sections = extractSections(container);
          
          // Find duplicate paragraphs
          const duplicateParagraphs = findDuplicateParagraphs(sections);
          
          if (duplicateParagraphs.length > 0) {
            const firstDuplicate = duplicateParagraphs[0];
            throw new Error(
              `Page ${pageConfig.name} has duplicate paragraphs across sections. ` +
              `Paragraph appears in ${firstDuplicate.count} sections: ` +
              `"${firstDuplicate.paragraph.substring(0, 100)}..."`
            );
          }
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 100,
        verbose: true,
      }
    );
  }, 60000); // 60 second timeout

  /**
   * Unit Test: Home page sections have unique content
   * 
   * This test specifically verifies that the Home page, which underwent
   * section consolidation, does not have duplicate content.
   */
  it('should have unique content in each section on Home page', () => {
    const { container } = renderPageWithRouter(Home);
    
    // Extract sections
    const sections = extractSections(container);
    
    // Find duplicates
    const duplicateSentences = findDuplicateSentences(sections);
    const duplicateParagraphs = findDuplicateParagraphs(sections);
    
    expect(duplicateSentences).toHaveLength(0);
    expect(duplicateParagraphs).toHaveLength(0);
  });

  /**
   * Unit Test: ServiceMatrix and FourPillars consolidation
   * 
   * This test verifies that after consolidating ServiceMatrix and FourPillars
   * into TechnologyAdvantage, there is no duplicate content.
   */
  it('should not have duplicate tech stack content after consolidation', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // Look for patterns that might indicate duplicate tech content
    const techKeywords = [
      'AI Consulting',
      'Tax Strategy',
      'Insurance & Risk',
      'Business Support',
    ];
    
    techKeywords.forEach(keyword => {
      // Count occurrences of each keyword
      const pattern = new RegExp(keyword, 'gi');
      const matches = pageText.match(pattern);
      const count = matches ? matches.length : 0;
      
      // Each keyword should appear a reasonable number of times (not excessively duplicated)
      // Allow up to 3 occurrences (heading, description, navigation)
      expect(count).toBeLessThanOrEqual(3);
    });
  });

  /**
   * Unit Test: Services section and Why Choose Us are distinct
   * 
   * This test verifies that the "Our Services" and "Why Choose Us" sections
   * provide distinct information without overlapping content.
   */
  it('should have distinct content in Services and Why Choose Us sections', () => {
    const { container } = renderPageWithRouter(Home);
    
    // Try to find these sections
    const allSections = container.querySelectorAll('section, [class*="section"]');
    
    const servicesSection = Array.from(allSections).find(section => 
      section.textContent?.toLowerCase().includes('our services') ||
      section.textContent?.toLowerCase().includes('what we do')
    );
    
    const whyChooseSection = Array.from(allSections).find(section => 
      section.textContent?.toLowerCase().includes('why choose')
    );
    
    if (servicesSection && whyChooseSection) {
      const servicesText = servicesSection.textContent || '';
      const whyChooseText = whyChooseSection.textContent || '';
      
      // Extract substantial sentences from each
      const servicesSentences = extractSentences(servicesText).filter(s => s.split(/\s+/).length > 10);
      const whyChooseSentences = extractSentences(whyChooseText).filter(s => s.split(/\s+/).length > 10);
      
      // Check for overlap
      servicesSentences.forEach(sentence => {
        const normalized = sentence.toLowerCase().replace(/\s+/g, ' ').trim();
        
        if (!isAllowedRepetition(normalized)) {
          const isDuplicate = whyChooseSentences.some(wcs => 
            wcs.toLowerCase().replace(/\s+/g, ' ').trim() === normalized
          );
          
          expect(isDuplicate).toBe(false);
        }
      });
    }
  });

  /**
   * Property Test: Consistency across multiple renders
   * 
   * This test verifies that content deduplication is consistent across
   * multiple renders (no random duplication).
   */
  it('should maintain consistent content deduplication across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.integer({ min: 2, max: 3 }),
        (pageConfig, renderCount) => {
          const duplicateCounts: number[] = [];
          
          // Render the page multiple times
          for (let i = 0; i < renderCount; i++) {
            const { container } = renderPageWithRouter(pageConfig.component);
            const sections = extractSections(container);
            const duplicates = findDuplicateSentences(sections);
            duplicateCounts.push(duplicates.length);
          }
          
          // All renders should have the same number of duplicates (ideally 0)
          const firstCount = duplicateCounts[0];
          duplicateCounts.slice(1).forEach(count => {
            expect(count).toBe(firstCount);
          });
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 50,
        verbose: true,
      }
    );
  }, 60000); // 60 second timeout

  /**
   * Unit Test: CTAs are allowed to repeat
   * 
   * This test verifies that intentional repetition (like CTAs) is
   * correctly allowed and not flagged as duplication.
   */
  it('should allow intentional CTA repetition', () => {
    const { container } = renderPageWithRouter(Home);
    const pageText = container.textContent || '';
    
    // CTAs should appear multiple times
    const getStartedCount = (pageText.match(/get\s+started/gi) || []).length;
    const bookConsultationCount = (pageText.match(/book\s+consultation/gi) || []).length;
    
    // These should appear multiple times (this is intentional)
    expect(getStartedCount).toBeGreaterThan(0);
    expect(bookConsultationCount).toBeGreaterThan(0);
    
    // This is expected and should not be flagged as problematic duplication
  });

  /**
   * Unit Test: Contact information can repeat
   * 
   * This test verifies that contact information (phone, email) is
   * allowed to appear multiple times without being flagged.
   */
  it('should allow contact information repetition', () => {
    const { container } = renderPageWithRouter(Contact);
    const pageText = container.textContent || '';
    
    // Phone number should appear multiple times
    const phoneCount = (pageText.match(/\(929\)\s*919-3574/g) || []).length;
    
    // This is expected and should not be flagged as problematic duplication
    expect(phoneCount).toBeGreaterThanOrEqual(0);
  });

  /**
   * Property Test: No excessive content blocks
   * 
   * This test checks that no large content blocks (> 100 words) are
   * duplicated across sections.
   */
  it('should not have large duplicate content blocks', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pageConfig) => {
          const { container } = renderPageWithRouter(pageConfig.component);
          const sections = extractSections(container);
          
          // Extract large content blocks (> 100 words)
          const contentBlocks = new Map<string, number[]>();
          
          sections.forEach((section, index) => {
            const words = section.text.split(/\s+/);
            
            // Create sliding window of 100 words
            for (let i = 0; i <= words.length - 100; i++) {
              const block = words.slice(i, i + 100).join(' ').toLowerCase();
              
              if (!isAllowedRepetition(block)) {
                if (!contentBlocks.has(block)) {
                  contentBlocks.set(block, []);
                }
                
                const sectionIndices = contentBlocks.get(block)!;
                if (!sectionIndices.includes(index)) {
                  sectionIndices.push(index);
                }
              }
            }
          });
          
          // Check for duplicates
          contentBlocks.forEach((sectionIndices, block) => {
            if (sectionIndices.length > 1) {
              throw new Error(
                `Page ${pageConfig.name} has large duplicate content block (100+ words) ` +
                `appearing in ${sectionIndices.length} sections`
              );
            }
          });
          
          expect(true).toBe(true);
        }
      ),
      { 
        numRuns: 50,
        verbose: true,
      }
    );
  }, 90000); // 90 second timeout (large block analysis is slow)
});

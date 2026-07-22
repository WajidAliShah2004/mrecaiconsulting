# Implementation Plan: MRECAI Website Rebrand

## Overview

This implementation plan breaks down the MRECAI website rebrand into discrete, actionable tasks. The rebrand repositions MRECAI as a technology and AI consulting company first, with financial services as complementary offerings. Tasks are organized in phases to minimize risk and ensure systematic implementation across all components.

## Tasks

- [ ] 1. Phase 1: Data Layer Foundation
  - [x] 1.1 Create service helper utilities file
    - Create `src/utils/serviceHelpers.ts` with service categorization and sorting functions
    - Implement `categorizeService`, `sortServicesByCategory`, and `filterServicesByCategory` functions
    - Add TypeScript types for `ServiceCategory` and `CategorizedService`
    - _Requirements: 5.1, 5.2_
  
  - [-] 1.2 Write property test for service ordering utility
    - **Property 1: Service Ordering Consistency**
    - **Validates: Requirements 2.1, 2.5, 4.1, 4.2, 5.1, 5.2, 8.2, 9.1, 9.4**
    - Test that `sortServicesByCategory` always places Primary Services before Secondary Services for any input array
    - Use fast-check to generate random service arrays
    - Verify ordering property holds across 100+ iterations
  
  - [ ] 1.3 Update constants.ts with service categorization
    - Add `PRIMARY_SERVICE_IDS` and `SECONDARY_SERVICE_IDS` constants
    - Add `category` and `order` fields to existing service definitions in `SERVICES` array
    - Add `category` and `order` fields to `SERVICES_EXPANDED` array
    - Reorder both arrays to list Primary Services first
    - Add new service entries for Graphic Design and Video Editing if missing
    - Update service descriptions to emphasize technology capabilities
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  
  - [ ] 1.4 Write unit tests for constants updates
    - Test that `PRIMARY_SERVICE_IDS` contains expected service IDs
    - Test that `SERVICES` array is ordered correctly (Primary before Secondary)
    - Test that `SERVICES_EXPANDED` array is ordered correctly
    - Test that Graphic Design and Video Editing services exist
    - _Requirements: 5.3_

- [ ] 2. Phase 2: Homepage Components
  - [ ] 2.1 Update HomeHero component
    - Update headline to emphasize AI consulting and technology services
    - Modify subheadline to position financial services as complementary
    - Update badge text to reflect technology-first positioning
    - Update trust indicators to include technology metrics (e.g., "AI Projects Delivered", "Automation Hours Saved")
    - Reorder floating cards to prioritize AI/automation achievements
    - Maintain existing animations and responsive design
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  
  - [ ] 2.2 Write unit tests for HomeHero updates
    - Test that headline contains technology/AI keywords
    - Test that subheadline mentions financial services after technology services
    - Test that trust indicators include technology metrics
    - Test that floating cards prioritize AI/automation
    - Test that badge text reflects technology positioning
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  
  - [ ] 2.3 Update FourPillars component
    - Reorder pillars array to: AI & Automation, Technology & Software Development, Digital Marketing & Design, Financial Services & Risk Management
    - Update pillar titles and descriptions
    - Update section title to reflect technology-first positioning
    - Maintain existing visual styling and animations
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.6_
  
  - [ ] 2.4 Write unit tests for FourPillars updates
    - Test that first pillar is "AI & Automation"
    - Test that second pillar is "Technology & Software Development"
    - Test that third pillar is "Digital Marketing & Design"
    - Test that fourth pillar is "Financial Services & Risk Management"
    - Test that section title reflects new positioning
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.6_

- [ ] 3. Checkpoint - Verify homepage changes
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Phase 3: Navigation Components
  - [ ] 4.1 Create ServiceCategoryDivider component
    - Create `src/components/common/ServiceCategoryDivider.tsx`
    - Implement component with horizontal and vertical variants
    - Add optional label prop for "Additional Services" text
    - Style with Tailwind classes for visual separation
    - _Requirements: 2.3_
  
  - [ ] 4.2 Update Navbar component - Desktop navigation
    - Import and use `sortServicesByCategory` utility
    - Reorder services dropdown to show Primary Services first
    - Add ServiceCategoryDivider between Primary and Secondary services
    - Add prominent "AI & Technology Consulting" link
    - Update hover states and active indicators
    - Maintain existing animations and accessibility features
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [ ] 4.3 Update Navbar component - Mobile navigation
    - Apply same service ordering to mobile menu
    - Add ServiceCategoryDivider in mobile view
    - Ensure Primary Services appear first in mobile dropdown
    - Test responsive behavior across viewport sizes
    - _Requirements: 2.5_
  
  - [ ] 4.4 Write property test for navigation ordering consistency
    - **Property 10: Mobile Navigation Ordering Consistency**
    - **Validates: Requirements 14.2, 14.3**
    - Test that service ordering is consistent across desktop and mobile views
    - Generate random viewport sizes and verify ordering remains consistent
    - Use fast-check with 100+ iterations
  
  - [ ] 4.5 Write unit tests for Navbar updates
    - Test that Primary Services appear before Secondary Services in desktop dropdown
    - Test that "AI & Technology Consulting" link is present
    - Test that ServiceCategoryDivider is rendered
    - Test that mobile navigation maintains same ordering
    - Test keyboard navigation and accessibility
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 5. Phase 4: Footer Component
  - [ ] 5.1 Update Footer component
    - Reorder service links to show Primary Services first
    - Update company tagline to emphasize technology and AI consulting
    - Update service category groupings
    - Add quick links to key technology service pages
    - Maintain mobile responsiveness
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
  
  - [ ] 5.2 Write property test for footer ordering
    - **Property 1: Service Ordering Consistency (Footer)**
    - **Validates: Requirements 9.1, 9.4**
    - Test that footer service links maintain Primary-before-Secondary ordering
    - Test across different viewport sizes
    - Use fast-check with 100+ iterations
  
  - [ ] 5.3 Write unit tests for Footer updates
    - Test that Primary Services appear before Secondary Services
    - Test that company tagline emphasizes technology
    - Test that technology service quick links are present
    - Test mobile responsiveness
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 6. Checkpoint - Verify layout components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Phase 5: Services Page
  - [ ] 7.1 Create TechnologyHighlight component
    - Create `src/components/services/TechnologyHighlight.tsx`
    - Implement full-width section with gradient background
    - Add props for title, description, features, CTA text and link
    - Style with modern, technology-forward design
    - Make responsive for mobile devices
    - _Requirements: 4.4_
  
  - [ ] 7.2 Update Services page component
    - Import and use `sortServicesByCategory` utility
    - Reorder service grid to display Primary Services first
    - Add visual hierarchy (larger cards, prominent colors) for Primary Services
    - Add TechnologyHighlight component for AI/Technology consulting
    - Update hero section headline and description to emphasize technology
    - Maintain responsive grid layout
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [ ] 7.3 Write property test for service page ordering
    - **Property 1: Service Ordering Consistency (Services Page)**
    - **Validates: Requirements 4.1, 4.2**
    - Test that service cards are rendered with Primary Services before Secondary Services
    - Generate random service configurations
    - Use fast-check with 100+ iterations
  
  - [ ] 7.4 Write unit tests for Services page updates
    - Test that Primary Services appear in first grid positions
    - Test that Secondary Services appear after Primary Services
    - Test that TechnologyHighlight section is present
    - Test that hero section emphasizes technology
    - Test visual hierarchy (CSS classes) for Primary Services
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 8. Phase 6: CTA Components
  - [ ] 8.1 Update CTA messaging throughout site
    - Update homepage CTA section to emphasize technology consulting
    - Update generic "Learn More" CTAs to be more specific and action-oriented
    - Update service-specific CTAs to reference the specific service
    - Add technology-focused messaging to CTA buttons (e.g., "Explore AI Solutions")
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [ ] 8.2 Update booking/contact form CTAs
    - Add pre-population or suggestions for technology service interests
    - Update form labels to emphasize technology services
    - Add technology service options to interest dropdowns
    - _Requirements: 6.5_
  
  - [ ] 8.3 Write property test for CTA contextuality
    - **Property 2: CTA Messaging Contextuality**
    - **Validates: Requirements 6.3**
    - Test that service-specific pages have CTAs referencing that service category
    - Generate random service pages and verify CTA messaging
    - Use fast-check with 100+ iterations
  
  - [ ] 8.4 Write unit tests for CTA updates
    - Test that homepage CTA emphasizes technology
    - Test that generic CTAs are replaced with specific messaging
    - Test that service-specific CTAs reference the correct service
    - Test that booking forms suggest technology services
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 9. Phase 7: Executive Leadership Section
  - [ ] 9.1 Update ExecutiveLeadership component
    - Update executive bios to highlight technology and AI experience
    - Update executive titles to emphasize technology-related roles
    - Add credentials and certifications related to technology and AI
    - Update visual styling to be modern and technology-forward
    - _Requirements: 7.1, 7.2, 7.3_
  
  - [ ] 9.2 Write unit tests for ExecutiveLeadership updates
    - Test that bios contain technology/AI keywords
    - Test that titles include technology-related terms
    - Test that credentials mention technology/AI
    - _Requirements: 7.1, 7.2, 7.3_

- [ ] 10. Checkpoint - Verify content components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Phase 8: SEO and Schema Markup
  - [ ] 11.1 Update schemas.ts - Organization schema
    - Update organization description to emphasize technology consulting
    - Add `primaryService` field with "Technology Consulting"
    - Update `knowsAbout` array to prioritize technology terms
    - Reorder `hasOfferCatalog.itemListElement` to list Primary Services first
    - _Requirements: 8.2, 8.3_
  
  - [ ] 11.2 Update schemas.ts - Service schemas
    - Add `category` field to service schema items
    - Reorder service schemas to list Primary Services first
    - Update service descriptions to emphasize technology
    - _Requirements: 8.2_
  
  - [ ] 11.3 Update meta tags across pages
    - Update homepage meta tags to include "AI consulting", "technology consulting", "software development" as primary keywords
    - Update page titles to prioritize technology terminology
    - Update meta descriptions to emphasize technology services first, then financial services
    - Apply updates to all major pages (Home, Services, About, Contact)
    - _Requirements: 8.1, 8.4, 8.5_
  
  - [ ] 11.4 Write property test for meta description ordering
    - **Property 3: Meta Description Technology-First Ordering**
    - **Validates: Requirements 8.5**
    - Test that meta descriptions with both technology and financial terms place technology first
    - Generate random combinations of terms
    - Use fast-check with 100+ iterations
  
  - [ ] 11.5 Write property test for page title terminology
    - **Property 4: Page Title Technology Terminology Priority**
    - **Validates: Requirements 8.4**
    - Test that page titles with both technology and financial terms place technology first
    - Generate random title combinations
    - Use fast-check with 100+ iterations
  
  - [ ] 11.6 Write unit tests for schema updates
    - Test that organization schema includes "Technology Consulting" as primary service
    - Test that service schemas are ordered correctly
    - Test that meta tags include technology keywords
    - Test that page titles prioritize technology terminology
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 12. Phase 9: Analytics Implementation
  - [ ] 12.1 Update analytics.ts with new event types
    - Add `ServiceInteractionEvent` type and tracking function
    - Add `CrossServiceNavigationEvent` type and tracking function
    - Add `TechnologyInquiryEvent` type and tracking function
    - Implement event tracking with category labels (primary/secondary)
    - _Requirements: 15.1, 15.2, 15.3, 15.4_
  
  - [ ] 12.2 Add analytics tracking to components
    - Add service interaction tracking to service cards
    - Add cross-service navigation tracking to internal links
    - Add technology inquiry tracking to contact/booking forms
    - Implement error handling for failed tracking events
    - _Requirements: 15.1, 15.2, 15.3, 15.4_
  
  - [ ] 12.3 Write unit tests for analytics tracking
    - Test that service interactions trigger correct events
    - Test that events include correct category labels
    - Test that cross-service navigation is tracked
    - Test that technology inquiries are tracked
    - Test error handling for failed events
    - _Requirements: 15.1, 15.2, 15.3, 15.4_

- [ ] 13. Phase 10: Internal Linking and Cross-References
  - [ ] 13.1 Update internal service links
    - Audit all content pages for service links
    - Update links to prioritize Primary Services
    - Ensure link text reflects new positioning
    - Update hardcoded URLs to match any new structures
    - _Requirements: 10.1, 10.3, 10.5_
  
  - [ ] 13.2 Implement related service suggestions
    - Create utility function to generate related service suggestions
    - Prioritize Primary Services in suggestions (60%+ of suggestions)
    - Add related services section to service pages
    - _Requirements: 10.2_
  
  - [ ] 13.3 Update breadcrumb navigation
    - Ensure breadcrumbs reflect new service hierarchy
    - Update breadcrumb schema markup
    - Test breadcrumbs on all service pages
    - _Requirements: 10.4_
  
  - [ ] 13.4 Write property test for internal link priority
    - **Property 6: Internal Link Priority**
    - **Validates: Requirements 10.1, 10.2**
    - Test that content pages have at least 60% of service links pointing to Primary Services
    - Generate random content with service links
    - Use fast-check with 100+ iterations
  
  - [ ] 13.5 Write property test for breadcrumb hierarchy
    - **Property 5: Breadcrumb Hierarchy Accuracy**
    - **Validates: Requirements 10.4**
    - Test that breadcrumbs accurately reflect service categorization
    - Generate random page paths
    - Use fast-check with 100+ iterations
  
  - [ ] 13.6 Write unit tests for internal linking updates
    - Test that service links prioritize Primary Services
    - Test that related service suggestions include Primary Services
    - Test that breadcrumbs reflect correct hierarchy
    - Test that hardcoded URLs are updated
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 14. Checkpoint - Verify SEO and linking
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 15. Phase 11: Service Bundles
  - [ ] 15.1 Update ServiceBundles page
    - Reorder bundles to feature technology-focused bundles prominently
    - Update bundle names to emphasize technology
    - Update bundle descriptions to lead with technology benefits
    - Ensure bundles with Secondary Services also include Primary Services
    - Create at least three new technology-centric bundles
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ] 15.2 Write property test for bundle composition
    - **Property 7: Service Bundle Composition**
    - **Validates: Requirements 12.2**
    - Test that bundles with Secondary Services include at least one Primary Service
    - Generate random bundle configurations
    - Use fast-check with 100+ iterations
  
  - [ ] 15.3 Write property test for bundle description ordering
    - **Property 8: Bundle Description Technology-First Ordering**
    - **Validates: Requirements 12.4**
    - Test that bundle descriptions mention technology benefits before financial benefits
    - Generate random bundle descriptions
    - Use fast-check with 100+ iterations
  
  - [ ] 15.4 Write unit tests for ServiceBundles updates
    - Test that technology bundles are featured prominently
    - Test that bundle names emphasize technology
    - Test that at least three technology-centric bundles exist
    - Test that bundles with financial services include technology services
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 16. Phase 12: Content and Messaging
  - [ ] 16.1 Update homepage copy
    - Update all homepage text to use technology industry terminology
    - Emphasize innovation, automation, and digital transformation
    - Replace "financial services first" messaging with "technology services first"
    - Update testimonials section to prioritize technology implementations
    - _Requirements: 13.1, 13.2, 13.3, 13.4_
  
  - [ ] 16.2 Update service page descriptions
    - Update all service descriptions to emphasize technology capabilities
    - Ensure consistent tone across all service pages
    - Add technology-related keywords naturally
    - _Requirements: 13.2_
  
  - [ ] 16.3 Update testimonials and case studies
    - Reorder testimonials to prioritize technology-related ones
    - Add new technology implementation case studies if available
    - Update testimonial display logic to show technology testimonials first
    - _Requirements: 13.4_
  
  - [ ] 16.4 Write property test for testimonial priority
    - **Property 9: Testimonial Priority**
    - **Validates: Requirements 13.4**
    - Test that technology testimonials appear in first 50% of displayed items
    - Generate random testimonial arrays
    - Use fast-check with 100+ iterations
  
  - [ ] 16.5 Write unit tests for content updates
    - Test that homepage uses technology terminology
    - Test that "financial services first" messaging is removed
    - Test that service descriptions emphasize technology
    - Test that technology testimonials appear first
    - _Requirements: 13.1, 13.2, 13.3, 13.4_

- [ ] 17. Phase 13: Visual Design Updates
  - [ ] 17.1 Update hero section imagery
    - Replace or update hero images to use technology-themed visuals
    - Add AI visualizations, code snippets, or digital interface graphics
    - Update image alt text to reflect technology focus
    - Ensure images are optimized for performance
    - _Requirements: 11.1, 11.3_
  
  - [ ] 17.2 Update icon sets
    - Replace financial-focused icons with technology-related icons
    - Update icon library imports if needed
    - Ensure icon consistency across all pages
    - _Requirements: 11.3_
  
  - [ ] 17.3 Write unit tests for visual updates
    - Test that hero images use technology-themed sources
    - Test that icons are technology-related
    - Test that alt text reflects technology focus
    - _Requirements: 11.1, 11.3_

- [ ] 18. Phase 14: Mobile Responsiveness
  - [ ] 18.1 Test and verify mobile layouts
    - Test homepage hero section on mobile devices
    - Test navigation menu on mobile devices
    - Test Four Pillars section on mobile devices
    - Test service cards on mobile devices
    - Verify all rebranded content is legible and properly formatted
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_
  
  - [ ] 18.2 Write property test for mobile ordering consistency
    - **Property 10: Mobile Navigation Ordering Consistency (Comprehensive)**
    - **Validates: Requirements 14.2, 14.3**
    - Test that service ordering is consistent across all viewport sizes
    - Generate random viewport dimensions
    - Use fast-check with 100+ iterations
  
  - [ ] 18.3 Write unit tests for mobile responsiveness
    - Test that mobile navigation maintains correct ordering
    - Test that Four Pillars display correctly on mobile
    - Test that service cards maintain visual hierarchy on mobile
    - _Requirements: 14.2, 14.3, 14.4_

- [ ] 19. Checkpoint - Verify all components and content
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 20. Phase 15: Integration and Final Testing
  - [ ] 20.1 Run full test suite
    - Execute all unit tests
    - Execute all property-based tests
    - Verify 100% test pass rate
    - Review test coverage reports
  
  - [ ] 20.2 Perform manual QA testing
    - Test complete user flows (homepage → services → contact)
    - Test navigation across all pages
    - Test responsive behavior on multiple devices
    - Test accessibility with keyboard navigation and screen readers
    - Verify analytics events are firing correctly
  
  - [ ] 20.3 Conduct visual regression testing
    - Capture screenshots of all major pages
    - Compare with baseline screenshots
    - Verify intentional visual changes
    - Document any unexpected differences
  
  - [ ] 20.4 Performance testing
    - Measure Core Web Vitals (LCP, FID, CLS)
    - Verify no performance regression from baseline
    - Optimize any performance issues found
    - Ensure LCP < 2.5s and CLS < 0.1
  
  - [ ] 20.5 SEO validation
    - Verify meta tags on all pages
    - Validate schema markup with Google's Rich Results Test
    - Check that technology keywords are properly indexed
    - Verify breadcrumb schema is correct

- [ ] 21. Phase 16: Deployment Preparation
  - [ ] 21.1 Create deployment checklist
    - Document all changes made
    - List all files modified
    - Note any configuration changes needed
    - Prepare rollback plan
  
  - [ ] 21.2 Set up monitoring
    - Configure analytics dashboards for new events
    - Set up alerts for bounce rate and conversion rate changes
    - Prepare SEO ranking monitoring
    - Set up error tracking for new components
  
  - [ ] 21.3 Prepare stakeholder communication
    - Create summary of changes for stakeholders
    - Prepare before/after comparisons
    - Document expected impacts on metrics
    - Schedule post-launch review meeting

- [ ] 22. Final checkpoint - Ready for deployment
  - Ensure all tests pass, all QA is complete, and stakeholders are informed.

## Notes

- All tasks are required for comprehensive implementation with full test coverage
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation throughout implementation
- Property tests validate universal correctness properties with 100+ iterations
- Unit tests validate specific examples and edge cases
- The phased approach minimizes risk and allows for iterative feedback
- All changes maintain backward compatibility with existing functionality
- Feature flags can be used for gradual rollout if desired

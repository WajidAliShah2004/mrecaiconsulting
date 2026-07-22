# Implementation Plan: Website Change Request Implementation

## Overview

This implementation plan converts the design document into actionable coding tasks for updating the MRECAI website. The changes span 14 components across Home, Products, Industries, and FAQ pages, focusing on CTA updates, positioning copy changes, service additions, process flow improvements, section consolidation, team updates, FAQ additions, partner corrections, and typo fixes.

## Tasks

- [x] 1. Update CTA components with new button text
  - [x] 1.1 Update CTAButton component default text mappings
    - Modify `src/components/common/CTAButton.tsx` to change 'book' type default from "Book Free Consultation" to "Get Started"
    - Update 'call' type to maintain "Book Consultation" as secondary option
    - Ensure backward compatibility with custom children prop
    - _Requirements: 1.1, 1.2_
  
  - [x] 1.2 Update CTASection component default variant
    - Modify `src/components/common/CTASection.tsx` default variant
    - Change primaryCTA text from "Book Free Consultation" to "Get Started"
    - Change secondaryCTA text to "Book Consultation"
    - _Requirements: 1.3_
  
  - [x] 1.3 Write unit tests for CTA components
    - Test CTAButton renders correct default text for each type
    - Test CTASection renders updated default variant text
    - Test that deprecated CTA text does not appear
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 2. Update HomeHero component with new CTA buttons
  - [x] 2.1 Update primary and secondary CTA button text in HomeHero
    - Modify `src/components/home/HomeHero.tsx`
    - Change primary CTA from "Start Assessment" to "Get Started"
    - Change secondary CTA from "Book Strategy Call" to "Book Consultation"
    - _Requirements: 1.1, 1.2_
  
  - [x] 2.2 Write unit tests for HomeHero CTA buttons
    - Test that "Get Started" button renders
    - Test that "Book Consultation" button renders
    - Test that deprecated text does not appear
    - _Requirements: 1.1, 1.2_

- [x] 3. Update In60Seconds component with positioning copy and service additions
  - [x] 3.1 Update "What We Do" paragraph with nationwide positioning
    - Modify `src/components/home/In60Seconds.tsx`
    - Add "families and businesses in all 50 states" to opening paragraph
    - Remove bold styling from "businesses" if present
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [x] 3.2 Add "Website Development" to services list
    - Add Website Development entry after Custom Software Development
    - Include checkmark icon and description
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [x] 3.3 Write unit tests for In60Seconds updates
    - Test that "families and businesses in all 50 states" appears
    - Test that "Website Development" is in services list
    - Test that services are in correct order
    - _Requirements: 2.1, 3.1_

- [x] 4. Update ProcessFlow component with renamed steps
  - [x] 4.1 Rename "Diagnose" step to "Evaluate"
    - Modify `src/components/common/ProcessFlow.tsx` steps array
    - Change first step title from "Diagnose" to "Evaluate"
    - Maintain same icon and description
    - _Requirements: 4.1, 4.2, 4.3_
  
  - [x] 4.2 Generalize "Implement" step description
    - Update Implement step description to "Done-for-you setup of the strategies and systems your situation requires"
    - Remove hard-coded deliverables like "tax strategies, insurance policies, and AI automations"
    - _Requirements: 5.1, 5.2, 5.3_
  
  - [x] 4.3 Write unit tests for ProcessFlow updates
    - Test that first step is titled "Evaluate"
    - Test that "Diagnose" does not appear
    - Test that Implement description is generalized
    - _Requirements: 4.1, 5.1_

- [x] 5. Checkpoint - Verify component updates render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Create TechnologyAdvantage component (consolidate ServiceMatrix + FourPillars)
  - [x] 6.1 Create new TechnologyAdvantage component file
    - Create `src/components/home/TechnologyAdvantage.tsx`
    - Define TechPillar interface with icon, title, description, features, color, bgColor, link
    - Create pillars array with 4 pillars: AI Consulting, Custom Software, Digital Marketing, Business Support
    - Include "Website Development" in Custom Software pillar features
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [x] 6.2 Implement TechnologyAdvantage component rendering
    - Use 4-column grid layout (lg:grid-cols-4)
    - Render each pillar with icon, title, description, and feature list
    - Include hover effects and animations from original components
    - Add links to relevant service pages
    - _Requirements: 6.1, 6.2, 6.3_
  
  - [x] 6.3 Export TechnologyAdvantage from home components index
    - Add export to `src/components/home/index.ts`
    - _Requirements: 6.1_
  
  - [x] 6.4 Write unit tests for TechnologyAdvantage component
    - Test that all 4 pillars render
    - Test that each pillar has correct features
    - Test that "Website Development" appears in features
    - Test that no duplicate content from ServiceMatrix/FourPillars exists
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 7. Update ExecutiveLeadership component with team changes
  - [x] 7.1 Remove subtitle from ExecutiveLeadership
    - Modify `src/components/home/ExecutiveLeadership.tsx`
    - Remove subtitle paragraph "Strategic guidance and technical innovation driving your success"
    - Keep main heading "Meet Our People"
    - _Requirements: 7.1, 7.2_
  
  - [x] 7.2 Reorder team members (Waheed before Matthew)
    - Move CTO section (Waheed Ali Shah) to render first
    - Move CEO section (Matthew R. Epstein) to render second
    - Keep CMO section (Jessie Gwilt) in third position
    - Maintain all styling and animations
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [x] 7.3 Write unit tests for ExecutiveLeadership updates
    - Test that subtitle does not appear
    - Test that Waheed appears before Matthew in DOM order
    - Test that all team member information is preserved
    - _Requirements: 7.1, 8.1, 8.2_

- [x] 8. Update Partners component and audit for typos
  - [x] 8.1 Verify and fix any "Merc AI" typos in Partners component
    - Check `src/components/home/Partners.tsx` for brand name misspellings
    - Ensure "MRECAI" is spelled correctly
    - _Requirements: 13.1, 13.2, 13.3_
  
  - [x] 8.2 Audit entire codebase for brand name misspellings
    - Search for "Merc AI", "MercAI", "Mre Cai" variations across all files
    - Fix any misspellings found to "MRECAI"
    - _Requirements: 13.2, 13.3, 13.4_
  
  - [-] 8.3 Write property test for brand name spelling consistency
    - **Property 7: Brand Name Spelling Consistency**
    - **Validates: Requirements 13.2, 13.3**
    - Test that "MRECAI" is spelled correctly across all pages
    - Test that misspellings do not appear anywhere

- [x] 9. Add FAQ entries for out-of-state service
  - [x] 9.1 Add out-of-state FAQ to HomeFAQ component
    - Modify `src/components/home/HomeFAQ.tsx`
    - Add new FAQ entry: "What if I don't live in New York?"
    - Answer: "MRE Consulting and Insurance serves families and businesses in all 50 states. While we are headquartered in New York, you do not need to be located in New York to work with us."
    - Position after "What does MRE Consulting & Insurance do?" question
    - _Requirements: 10.1, 10.2, 10.3, 10.4_
  
  - [x] 9.2 Add out-of-state FAQ to main FAQ page
    - Modify `src/pages/FAQ.tsx`
    - Add same FAQ entry to "Location & Availability" category
    - Include proper FAQ schema markup
    - _Requirements: 10.1, 10.2, 10.3_
  
  - [x] 9.3 Write unit tests for FAQ additions
    - Test that out-of-state question appears in HomeFAQ
    - Test that out-of-state question appears in FAQ page
    - Test that answer text is correct
    - _Requirements: 10.1, 10.2_

- [x] 10. Checkpoint - Verify all component updates are complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 11. Update Home page to use TechnologyAdvantage component
  - [x] 11.1 Replace ServiceMatrix and FourPillars with TechnologyAdvantage
    - Modify `src/pages/Home.tsx`
    - Remove ServiceMatrix and FourPillars component imports and usage
    - Add TechnologyAdvantage component import and usage
    - Position TechnologyAdvantage in same location as original sections
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [x] 11.2 Write integration test for Home page updates
    - Test that TechnologyAdvantage renders on Home page
    - Test that ServiceMatrix and FourPillars do not render
    - Test that all 4 pillars are visible
    - _Requirements: 6.1, 6.4_

- [x] 12. Update Products page with service lists
  - [x] 12.1 Add MRECAI services list to Products page
    - Modify `src/pages/Products.tsx`
    - Add "MRECAI Services Include:" section with 6 services
    - Use grid layout with checkmark icons
    - Services: Tax Preparation & Planning, Bookkeeping & Accounting, Insurance Consulting, Business Consulting, AI & Technology Consulting, Digital Marketing
    - _Requirements: 14.1, 14.2, 14.3, 14.4_
  
  - [x] 12.2 Verify Atlas services section clarity
    - Check that Atlas capabilities are clearly listed
    - Ensure "Core Features" section is prominent
    - _Requirements: 14.2, 14.3_
  
  - [x] 12.3 Write unit tests for Products page updates
    - Test that MRECAI services list renders
    - Test that all 6 services appear
    - Test that services are formatted for easy scanning
    - _Requirements: 14.1, 14.3_

- [x] 13. Update Industries page with universal coverage statement
  - [x] 13.1 Add "We Work With Every Industry" section to Industries page
    - Modify `src/pages/IndustriesHub.tsx`
    - Add new section after hero, before industry grid
    - Include "Universal Coverage" badge
    - Heading: "We Work With Every Industry"
    - Text: "We work with clients across every industry. No matter what sector you operate in, our integrated services apply. While we highlight specific industries below, our expertise in finance, risk management, and technology serves businesses of all types and sizes."
    - Use motion animations for entrance
    - _Requirements: 15.1, 15.2, 15.3, 15.4_
  
  - [x] 13.2 Write unit tests for Industries page updates
    - Test that universal coverage section renders
    - Test that "We Work With Every Industry" heading appears
    - Test that coverage statement text is correct
    - _Requirements: 15.1, 15.2_

- [x] 14. Checkpoint - Verify all page updates are complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 15. Write property tests for CTA text consistency
  - [x] 15.1 Write property test for deprecated CTA text
    - **Property 1: CTA Button Text Consistency**
    - **Validates: Requirements 1.4**
    - Test that "Start Assessment", "Book Strategy Call", "Take the Assessment" do not appear on any page
    - Use fast-check to generate random page selections
    - Test across all major pages: Home, Services, About, Contact, Products, Industries, FAQ

- [x] 16. Write property tests for geographic reach and service consistency
  - [x] 16.1 Write property test for geographic reach consistency
    - **Property 2: Geographic Reach Consistency**
    - **Validates: Requirements 2.4**
    - Test that mentions of MRE's service area explicitly state nationwide or all-50-states availability
  
  - [x] 16.2 Write property test for service naming consistency
    - **Property 3: Service Naming Consistency**
    - **Validates: Requirements 3.3**
    - Test that service names match canonical names across all pages

- [ ] 17. Write property tests for process and content consistency
  - [ ] 17.1 Write property test for process step naming
    - **Property 4: Process Step Naming Consistency**
    - **Validates: Requirements 4.3**
    - Test that first step is "Evaluate" (not "Diagnose") in all process references
  
  - [ ] 17.2 Write property test for content deduplication
    - **Property 5: Content Deduplication**
    - **Validates: Requirements 6.4**
    - Test that content doesn't appear verbatim in multiple sections (excluding intentional repetition like CTAs)
  
  - [ ] 17.3 Write property test for team member ordering
    - **Property 6: Team Member Ordering Consistency**
    - **Validates: Requirements 8.2**
    - Test that Waheed appears before Matthew on any page displaying team members

- [ ] 18. Write property tests for accessibility and performance preservation
  - [ ] 18.1 Write property test for accessibility preservation
    - **Property 8: Accessibility Preservation**
    - **Validates: Requirements 16.1, 16.3, 16.4**
    - Test that updated components maintain WCAG 2.1 Level AA compliance
    - Check color contrast, keyboard navigation, ARIA labels, semantic structure
    - Use jest-axe for automated accessibility testing
  
  - [ ] 18.2 Write property test for performance preservation
    - **Property 9: Performance Preservation**
    - **Validates: Requirements 16.2**
    - Test that performance metrics don't regress by more than 10%
    - Monitor FCP, LCP, TTI metrics
  
  - [ ] 18.3 Write property test for functionality preservation
    - **Property 10: Functionality Preservation**
    - **Validates: Requirements 17.1, 17.2, 17.3, 17.4**
    - Test that navigation, forms, and animations continue to work
    - Test all interactive elements function correctly

- [ ] 19. Run accessibility audit on all updated pages
  - [ ] 19.1 Run automated accessibility tests with jest-axe
    - Test Home page for violations
    - Test Products page for violations
    - Test Industries page for violations
    - Test FAQ page for violations
    - _Requirements: 16.1, 16.3, 16.4_
  
  - [ ] 19.2 Perform manual keyboard navigation testing
    - Test all interactive elements are keyboard accessible
    - Verify focus indicators are visible
    - Check tab order is logical
    - _Requirements: 16.3_
  
  - [ ] 19.3 Verify semantic HTML and ARIA labels
    - Check heading hierarchy is correct
    - Verify ARIA labels on interactive elements
    - Ensure alt text on images
    - _Requirements: 16.4_

- [ ] 20. Perform manual testing and verification
  - [ ] 20.1 Test responsive layouts on multiple devices
    - Test on mobile (320px, 375px, 414px widths)
    - Test on tablet (768px, 1024px widths)
    - Test on desktop (1280px, 1920px widths)
    - Verify all breakpoints work correctly
    - _Requirements: 16.2_
  
  - [ ] 20.2 Test cross-browser compatibility
    - Test on Chrome (latest 2 versions)
    - Test on Firefox (latest 2 versions)
    - Test on Safari (latest 2 versions)
    - Test on Edge (latest 2 versions)
    - _Requirements: 17.1, 17.2, 17.3_
  
  - [ ] 20.3 Verify all requirements are met
    - Review each of the 17 requirements
    - Confirm acceptance criteria are satisfied
    - Document any deviations or issues
    - _Requirements: All_

- [ ] 21. Final checkpoint - Ensure all tests pass and changes are verified
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at reasonable breaks
- Property tests validate universal correctness properties across the application
- Unit tests validate specific component behavior and content
- The implementation follows the 4-phase plan from the design document: Component Updates → Page Updates → Testing → Verification
- Total estimated effort: 28-40 hours as specified in design document

# Requirements Document

## Introduction

This document specifies the requirements for implementing comprehensive website updates to mrecai.com based on the developer change request dated April 13, 2026. The changes focus on improving call-to-action (CTA) language, broadening audience positioning to include families and businesses across all 50 states, eliminating redundancy, fixing factual inaccuracies, correcting misspellings, and improving the prominence of the insurance business. The updates span the Home page, Our Products page, and Industries page.

## Glossary

- **Website**: The MRECAI website at mrecai.com
- **CTA**: Call-to-action button or link that prompts user interaction
- **Home_Page**: The main landing page of the website
- **Products_Page**: The page displaying MRECAI and Atlas product offerings
- **Industries_Page**: The page describing industry-specific solutions
- **Hero_Section**: The primary above-the-fold section of a page
- **Service_Matrix**: The section displaying technology stack and service offerings
- **Process_Flow**: The four-step growth process section
- **Partners_Section**: The section displaying strategic partners
- **FAQ_Section**: The frequently asked questions section
- **Team_Section**: The "Meet Our People" or "Executive Leadership" section
- **MRECAI**: The brand name for MRE Consulting and Insurance (correct spelling)
- **GIA**: Grober Imbey Associates, the insurance partner
- **Nova_Edge**: NovaEdge Solutions, the technology partner

## Requirements

### Requirement 1: Update Hero CTA Button Text

**User Story:** As a website visitor, I want inviting and action-oriented CTA buttons, so that I feel encouraged to engage rather than judged or evaluated.

#### Acceptance Criteria

1. WHEN the Home_Page Hero_Section is rendered, THE Website SHALL display "Get Started" instead of "Start Assessment" on the primary CTA button
2. WHEN the Home_Page Hero_Section is rendered, THE Website SHALL display "Book Consultation" instead of "Book Strategy Call" on the secondary CTA button
3. WHEN the Home_Page final CTA section is rendered, THE Website SHALL display "Get Started" instead of "Take the Assessment" on the primary CTA button
4. FOR ALL pages containing "Start Assessment" or "Book Strategy Call" buttons, THE Website SHALL update the text to the new non-clinical alternatives

### Requirement 2: Update "What We Do" Positioning Copy

**User Story:** As a potential client from any state, I want to know that MRE serves families and businesses nationwide, so that I understand the service is available to me regardless of location.

#### Acceptance Criteria

1. WHEN the "What We Do" paragraph is rendered, THE Website SHALL include the phrase "families and businesses in all 50 states"
2. WHEN the "What We Do" paragraph is rendered, THE Website SHALL NOT apply bold styling to the word "businesses"
3. THE Website SHALL describe MRE as "a technology-first business based in New York that helps families and businesses in all 50 states"
4. FOR ALL instances where MRE's geographic reach is mentioned, THE Website SHALL explicitly state nationwide availability

### Requirement 3: Add Website Development to Services

**User Story:** As a potential client seeking web development services, I want to see Website Development listed in the services section, so that I know this service is available.

#### Acceptance Criteria

1. WHEN the Our Services section on Home_Page is rendered, THE Website SHALL display "Website Development" as a listed service
2. WHEN the Service_Matrix section is rendered, THE Website SHALL include Website Development in the appropriate technology pillar
3. THE Website SHALL maintain consistent service naming across all pages where services are listed

### Requirement 4: Rename "Diagnose" Step in Process Flow

**User Story:** As a business owner reviewing the growth process, I want non-clinical terminology, so that the process feels business-appropriate rather than medical.

#### Acceptance Criteria

1. WHEN the Process_Flow section is rendered, THE Website SHALL display "Evaluate" instead of "Diagnose" as the first step title
2. THE Website SHALL maintain the same icon and description for the renamed step
3. FOR ALL references to the four-step process, THE Website SHALL use "Evaluate" consistently

### Requirement 5: Generalize "Implement" Step Description

**User Story:** As a potential client with varying needs, I want to see a flexible implementation description, so that I understand the service adapts to my specific situation.

#### Acceptance Criteria

1. WHEN the Process_Flow "Implement" step is rendered, THE Website SHALL display "Done-for-you setup of the strategies and systems your situation requires" as the description
2. THE Website SHALL NOT hard-code specific deliverables like "tax strategies, insurance policies, and AI automations" in the Implement step description
3. THE Website SHALL maintain flexibility in describing implementation scope across all process descriptions

### Requirement 6: Consolidate Tech Stack and Four-Pillar Sections

**User Story:** As a website visitor, I want to see technology capabilities presented once in a clear format, so that I don't encounter repetitive information while scrolling.

#### Acceptance Criteria

1. THE Website SHALL merge the "Tech Stack" section and "Four-Pillar Technology Advantage" section into a single unified section
2. WHEN the consolidated section is rendered, THE Website SHALL use the Four-Pillar structure as the primary framework
3. WHEN the consolidated section is rendered, THE Website SHALL incorporate relevant tech stack details within the pillar descriptions
4. THE Website SHALL eliminate duplicate content between the two original sections

### Requirement 7: Remove "Meet Our People" Subtitle

**User Story:** As a website visitor, I want section headings to be clear and direct, so that I can quickly understand what each section contains.

#### Acceptance Criteria

1. WHEN the Team_Section is rendered, THE Website SHALL display only the heading "Meet Our People" or "Executive Leadership"
2. THE Website SHALL NOT display the subtitle "Strategic guidance and technical innovation driving your success"
3. THE Website SHALL maintain all other Team_Section content unchanged

### Requirement 8: Reorder Team Members

**User Story:** As a website visitor, I want to see team members presented in the appropriate order, so that the organizational structure is clear.

#### Acceptance Criteria

1. WHEN the Team_Section is rendered, THE Website SHALL display Waheed before Matthew in the team member list
2. THE Website SHALL maintain consistent ordering across all pages where team members are displayed
3. THE Website SHALL preserve all individual team member information during reordering

### Requirement 9: Reduce Repetition Between Services Sections

**User Story:** As a website visitor, I want distinct information in each section, so that I can efficiently learn about the company without reading duplicate content.

#### Acceptance Criteria

1. THE Website SHALL streamline the "Our Services" section and "Why Choose Us" section to eliminate overlapping content
2. WHEN both sections are rendered, THE Website SHALL ensure each section provides unique value and information
3. THE Website SHALL focus "Why Choose Us" on differentiators rather than re-listing services
4. THE Website SHALL maintain all key messages while reducing redundancy

### Requirement 10: Add Out-of-State FAQ Entry

**User Story:** As a potential client outside New York, I want to know if MRE can serve me, so that I don't assume the service is New York-only.

#### Acceptance Criteria

1. WHEN the FAQ_Section is rendered, THE Website SHALL display a question "What if I don't live in New York?"
2. WHEN the FAQ_Section is rendered, THE Website SHALL display the answer "MRE Consulting and Insurance serves families and businesses in all 50 states. While we are headquartered in New York, you do not need to be located in New York to work with us."
3. THE Website SHALL include appropriate FAQ schema markup for the new entry
4. THE Website SHALL position the new FAQ entry prominently within the FAQ list

### Requirement 11: Fix Inaccurate Partner Count Claim

**User Story:** As a website visitor, I want accurate information about the company's partnerships, so that I can trust the claims made on the website.

#### Acceptance Criteria

1. THE Website SHALL remove the "50 strategic partners" claim from the Partners_Section
2. IF an accurate partner count is provided, THEN THE Website SHALL display the correct figure
3. THE Website SHALL NOT display any partner count claim unless verified as accurate
4. THE Website SHALL maintain all other Partners_Section content

### Requirement 12: Reorder Partners Section

**User Story:** As a potential insurance client, I want to see the insurance partner prominently, so that I understand insurance is a core service offering.

#### Acceptance Criteria

1. WHEN the Partners_Section is rendered, THE Website SHALL display GIA (Grober Imbey Associates) before the legal partner
2. THE Website SHALL maintain the visual design and styling of partner entries during reordering
3. THE Website SHALL ensure the insurance business prominence is improved through partner positioning

### Requirement 13: Fix "Merc AI" Typo and Audit Site

**User Story:** As a website visitor, I want to see the correct brand name consistently, so that the company appears professional and trustworthy.

#### Acceptance Criteria

1. WHEN the Nova_Edge section is rendered, THE Website SHALL display "MRECAI" instead of "Merc AI"
2. FOR ALL pages and components, THE Website SHALL display "MRECAI" as the correct brand name spelling
3. THE Website SHALL NOT display any misspellings such as "Merc AI", "MercAI", or "Mre Cai"
4. THE Website SHALL audit all text content for brand name consistency

### Requirement 14: Add Service Lists to Products Page

**User Story:** As a potential client evaluating products, I want to see clear service lists for each product, so that I immediately understand what each product offers.

#### Acceptance Criteria

1. WHEN the Products_Page MRECAI section is rendered, THE Website SHALL display a list of services offered by MRECAI
2. WHEN the Products_Page Atlas section is rendered, THE Website SHALL display a list of services and capabilities offered by Atlas
3. THE Website SHALL format service lists for easy scanning and comprehension
4. THE Website SHALL ensure service lists are visible without requiring paragraph reading

### Requirement 15: Explicitly State All Industries Coverage

**User Story:** As a business owner in any industry, I want to know that MRE serves my industry, so that I feel confident reaching out regardless of my sector.

#### Acceptance Criteria

1. WHEN the Industries_Page is rendered, THE Website SHALL prominently state that MRE serves every and all industries
2. THE Website SHALL display the statement "We work with clients across every industry. No matter what sector you operate in, our integrated services apply." near the top of the Industries_Page
3. THE Website SHALL NOT leave industry coverage implied or ambiguous
4. THE Website SHALL maintain existing industry-specific content while adding the universal coverage statement

### Requirement 16: Maintain Accessibility and Performance

**User Story:** As any website user, I want the updated website to remain accessible and performant, so that I can access information regardless of my abilities or device.

#### Acceptance Criteria

1. WHEN any content is updated, THE Website SHALL maintain WCAG 2.1 Level AA accessibility standards
2. WHEN any content is updated, THE Website SHALL preserve existing performance metrics
3. THE Website SHALL ensure all interactive elements remain keyboard accessible
4. THE Website SHALL maintain proper semantic HTML structure throughout updates

### Requirement 17: Preserve Existing Functionality

**User Story:** As a website user, I want all existing features to continue working after updates, so that my user experience is not disrupted.

#### Acceptance Criteria

1. WHEN updates are implemented, THE Website SHALL preserve all existing navigation functionality
2. WHEN updates are implemented, THE Website SHALL maintain all existing form submissions and contact methods
3. WHEN updates are implemented, THE Website SHALL preserve all existing animations and visual effects
4. THE Website SHALL ensure no regressions are introduced during the update process

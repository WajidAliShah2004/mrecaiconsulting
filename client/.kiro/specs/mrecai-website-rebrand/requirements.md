# Requirements Document

## Introduction

This document specifies the requirements for rebranding the MRECAI website to position the company as a technology and AI consulting firm first, with financial services as valuable complementary offerings. The rebrand will restructure content hierarchy, navigation, messaging, and visual emphasis to reflect this new positioning while maintaining all existing service offerings.

## Glossary

- **System**: The MRECAI website application
- **Homepage**: The main landing page at the root URL (/)
- **Hero_Section**: The primary above-the-fold content area on the homepage
- **Navigation**: The main site navigation menu (Navbar component)
- **Service_Hierarchy**: The ordering and prioritization of services throughout the site
- **Four_Pillars**: The section on the homepage that highlights the company's core value propositions
- **CTA**: Call-to-action buttons and links throughout the site
- **SEO_Metadata**: Meta tags, schema markup, and other search engine optimization elements
- **Primary_Services**: AI Consulting, Automation, Software Development, Digital Marketing, Graphic Design, Video Editing
- **Secondary_Services**: Tax Services, Insurance Services, other financial services
- **Service_Page**: Individual pages dedicated to specific service offerings
- **Constants_File**: The src/utils/constants.ts file containing service definitions and ordering
- **Schema_File**: The src/utils/schemas.ts file containing structured data markup
- **Layout_Components**: Reusable components like Footer, Navbar, and CTASection

## Requirements

### Requirement 1: Homepage Hero Section Rebrand

**User Story:** As a website visitor, I want to immediately understand that MRECAI is a technology and AI consulting company, so that I can quickly determine if their services match my needs.

#### Acceptance Criteria

1. WHEN a user visits the homepage, THE Hero_Section SHALL display a headline emphasizing AI consulting and technology services as the primary offering
2. WHEN the Hero_Section renders, THE System SHALL display a subheadline that mentions financial services as complementary offerings, not primary services
3. WHEN the Hero_Section displays trust indicators, THE System SHALL include metrics relevant to technology and AI consulting (e.g., "AI Projects Delivered", "Automation Hours Saved")
4. WHEN the Hero_Section renders floating cards, THE System SHALL prioritize displaying AI/automation achievements over tax savings
5. THE Hero_Section SHALL update the badge text to reflect technology-first positioning (e.g., "AI & Technology Consulting")

### Requirement 2: Navigation Structure Reorganization

**User Story:** As a website visitor, I want the navigation menu to prioritize technology services, so that I can easily find AI and software development offerings.

#### Acceptance Criteria

1. WHEN the Navigation renders, THE System SHALL list Primary_Services before Secondary_Services in the services dropdown
2. WHEN a user hovers over the services menu, THE System SHALL display AI Consulting, Software Development, and Digital Marketing in the first positions
3. WHEN the Navigation displays service categories, THE System SHALL visually separate Primary_Services from Secondary_Services (e.g., with a divider or grouping)
4. THE Navigation SHALL include a prominent link to an AI/Technology services overview page
5. WHEN the mobile navigation renders, THE System SHALL maintain the same Primary_Services-first ordering

### Requirement 3: Four Pillars Section Restructuring

**User Story:** As a website visitor, I want to see the company's core value propositions reflect their technology-first positioning, so that I understand their primary expertise.

#### Acceptance Criteria

1. WHEN the Four_Pillars section renders, THE System SHALL display "AI & Automation" as the first pillar
2. WHEN the Four_Pillars section renders, THE System SHALL display "Technology & Software Development" as the second pillar
3. WHEN the Four_Pillars section renders, THE System SHALL display "Digital Marketing & Design" as the third pillar
4. WHEN the Four_Pillars section renders, THE System SHALL display "Financial Services & Risk Management" as the fourth pillar
5. THE Four_Pillars section SHALL update pillar descriptions to emphasize technology capabilities
6. THE Four_Pillars section SHALL update the section title to reflect the new positioning (e.g., "Integrated Technology & Business Solutions")

### Requirement 4: Service Pages Hierarchy Update

**User Story:** As a website visitor, I want to see technology services featured prominently on the services overview page, so that I can quickly access information about AI and software offerings.

#### Acceptance Criteria

1. WHEN the Services page renders, THE System SHALL display Primary_Services in the first grid positions
2. WHEN the Services page renders, THE System SHALL display Secondary_Services after all Primary_Services
3. WHEN service cards render, THE System SHALL use visual hierarchy (size, color, prominence) to emphasize Primary_Services
4. THE Services page SHALL include a dedicated section highlighting AI and technology consulting capabilities
5. WHEN the Services page displays the hero section, THE System SHALL emphasize technology and AI services in the headline and description

### Requirement 5: Constants File Service Ordering

**User Story:** As a developer, I want the constants file to reflect the new service hierarchy, so that service ordering is consistent throughout the application.

#### Acceptance Criteria

1. WHEN the Constants_File is updated, THE System SHALL reorder the SERVICES array to list Primary_Services first
2. WHEN the Constants_File is updated, THE System SHALL reorder the SERVICES_EXPANDED array to list Primary_Services first
3. THE Constants_File SHALL add new service entries for Graphic Design and Video Editing if they don't exist
4. THE Constants_File SHALL update service descriptions to emphasize technology and AI capabilities
5. WHEN service icons are defined, THE System SHALL use technology-related icons for Primary_Services

### Requirement 6: CTA Messaging Update

**User Story:** As a website visitor, I want call-to-action buttons to reflect the company's technology focus, so that I'm encouraged to engage with their AI and software services.

#### Acceptance Criteria

1. WHEN CTA buttons render throughout the site, THE System SHALL use technology-focused messaging (e.g., "Explore AI Solutions", "Start Your Digital Transformation")
2. WHEN the homepage CTA section renders, THE System SHALL emphasize technology consulting and AI services
3. WHEN service-specific CTAs render, THE System SHALL tailor messaging to the specific technology or service offering
4. THE System SHALL update generic CTAs like "Learn More" to be more specific and action-oriented
5. WHEN CTAs link to booking or contact forms, THE System SHALL pre-populate or suggest technology service interests

### Requirement 7: Executive Leadership Section Update

**User Story:** As a website visitor, I want to see executive profiles that emphasize technology and AI expertise, so that I can trust the company's technical capabilities.

#### Acceptance Criteria

1. WHEN the Executive Leadership section renders, THE System SHALL display executive bios that highlight technology and AI experience
2. WHEN executive titles are displayed, THE System SHALL emphasize technology-related roles (e.g., "Chief Technology Officer", "AI Strategy Lead")
3. THE Executive Leadership section SHALL include credentials and certifications related to technology and AI
4. WHEN executive photos or graphics render, THE System SHALL use modern, technology-forward visual styling
5. IF new executives need to be added, THE System SHALL prioritize those with technology and AI backgrounds

### Requirement 8: SEO Metadata and Schema Markup Update

**User Story:** As a search engine, I want to understand that MRECAI is primarily a technology and AI consulting company, so that I can rank them appropriately for relevant searches.

#### Acceptance Criteria

1. WHEN the homepage meta tags are generated, THE System SHALL include "AI consulting", "technology consulting", and "software development" as primary keywords
2. WHEN schema markup is generated, THE System SHALL list Primary_Services before Secondary_Services in the service schema
3. THE Schema_File SHALL update the organization schema to reflect "Technology Consulting" as the primary business type
4. WHEN page titles are generated, THE System SHALL prioritize technology and AI terminology
5. WHEN meta descriptions are generated, THE System SHALL emphasize technology services first, then mention financial services as complementary

### Requirement 9: Footer Component Update

**User Story:** As a website visitor, I want the footer to reflect the new service hierarchy, so that I can navigate to technology services from any page.

#### Acceptance Criteria

1. WHEN the Footer renders service links, THE System SHALL list Primary_Services before Secondary_Services
2. WHEN the Footer displays the company tagline or description, THE System SHALL emphasize technology and AI consulting
3. THE Footer SHALL update any service category groupings to reflect the new hierarchy
4. WHEN the Footer renders on mobile devices, THE System SHALL maintain the Primary_Services-first ordering
5. THE Footer SHALL include quick links to key technology service pages

### Requirement 10: Internal Linking and Routing Update

**User Story:** As a website visitor, I want internal links throughout the site to reflect the new service structure, so that I can navigate seamlessly to technology offerings.

#### Acceptance Criteria

1. WHEN blog posts or content pages link to services, THE System SHALL prioritize linking to Primary_Services
2. WHEN the System generates related service suggestions, THE System SHALL recommend Primary_Services more frequently
3. THE System SHALL update all hardcoded service links to reflect any new URL structures for technology services
4. WHEN breadcrumb navigation renders, THE System SHALL accurately reflect the new service hierarchy
5. THE System SHALL ensure all service cross-references in content are updated to reflect the new positioning

### Requirement 11: Visual Design and Branding Updates

**User Story:** As a website visitor, I want the visual design to convey a modern, technology-forward brand, so that I perceive MRECAI as a cutting-edge tech company.

#### Acceptance Criteria

1. WHEN hero sections render, THE System SHALL use technology-themed imagery and graphics (e.g., AI visualizations, code snippets, digital interfaces)
2. WHEN color schemes are applied, THE System SHALL emphasize colors associated with technology and innovation
3. THE System SHALL update icon sets to use more technology-related icons throughout the site
4. WHEN animations render, THE System SHALL use modern, tech-forward animation styles
5. THE System SHALL ensure all visual elements align with a technology-first brand identity

### Requirement 12: Service Bundle Restructuring

**User Story:** As a website visitor, I want to see service bundles that emphasize technology and AI services, so that I can understand comprehensive technology solutions.

#### Acceptance Criteria

1. WHEN the Service Bundles page renders, THE System SHALL feature technology-focused bundles prominently
2. WHEN service bundles are defined, THE System SHALL create bundles that combine AI/technology services with complementary financial services
3. THE System SHALL update bundle names to emphasize technology (e.g., "Digital Transformation Package", "AI-Powered Business Suite")
4. WHEN bundle descriptions render, THE System SHALL lead with technology benefits, then mention financial service benefits
5. THE System SHALL create at least three new bundles that are technology-centric

### Requirement 13: Content Tone and Messaging Update

**User Story:** As a website visitor, I want the website copy to reflect a technology company's voice, so that the messaging feels consistent with the new positioning.

#### Acceptance Criteria

1. WHEN homepage copy renders, THE System SHALL use technology industry terminology and tone
2. WHEN service descriptions render, THE System SHALL emphasize innovation, automation, and digital transformation
3. THE System SHALL update all instances of "financial services first" messaging to "technology services first" messaging
4. WHEN testimonials or case studies are displayed, THE System SHALL prioritize those related to technology implementations
5. THE System SHALL ensure all marketing copy reflects the technology-first positioning

### Requirement 14: Mobile Responsiveness for Rebrand

**User Story:** As a mobile website visitor, I want the rebranded content to display properly on my device, so that I can access technology service information on the go.

#### Acceptance Criteria

1. WHEN the homepage renders on mobile devices, THE Hero_Section SHALL display the technology-first headline legibly
2. WHEN the Navigation renders on mobile devices, THE System SHALL maintain Primary_Services-first ordering in the mobile menu
3. WHEN the Four_Pillars section renders on mobile devices, THE System SHALL display all four pillars in the correct order
4. WHEN service cards render on mobile devices, THE System SHALL maintain visual hierarchy that emphasizes Primary_Services
5. THE System SHALL ensure all rebranded content is fully responsive across all device sizes

### Requirement 15: Analytics and Tracking Updates

**User Story:** As a business stakeholder, I want analytics to track engagement with technology services separately from financial services, so that I can measure the rebrand's effectiveness.

#### Acceptance Criteria

1. WHEN users interact with Primary_Services content, THE System SHALL track these interactions with specific event labels
2. WHEN users interact with Secondary_Services content, THE System SHALL track these interactions with different event labels
3. THE System SHALL implement conversion tracking for technology service inquiries
4. WHEN users navigate from technology content to financial services content (or vice versa), THE System SHALL track these cross-service journeys
5. THE System SHALL provide analytics data that distinguishes between technology-focused visitors and financial-services-focused visitors

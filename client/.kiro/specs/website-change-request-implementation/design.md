# Design Document: Website Change Request Implementation

## Overview

This design document specifies the technical implementation for comprehensive website updates to mrecai.com based on the requirements document. The changes span multiple components and pages, focusing on improving call-to-action language, broadening audience positioning, eliminating redundancy, fixing inaccuracies, and enhancing content clarity.

### Scope

The implementation affects the following areas:
- Home page components (Hero, In60Seconds, ProcessFlow, ExecutiveLeadership, FourPillars, ServiceMatrix, HomeFAQ)
- Common components (CTAButton, CTASection, IntegratedPartnerBanner)
- Products page
- Industries page
- FAQ page

### Technology Stack

- React 18 with TypeScript
- React Router for navigation
- Framer Motion for animations
- Tailwind CSS for styling
- React Helmet Async for SEO

## Architecture

### Component Hierarchy

```
Home.tsx
├── HomeHero (contains primary CTAs)
├── Partners (partner verification section)
├── In60Seconds (What We Do section)
├── ServiceMatrix (Tech Stack section)
├── ProcessFlow (4-step process)
├── FourPillars (4-Pillar Technology Advantage)
├── ExecutiveLeadership (Team section)
├── HomeFAQ (FAQ section)
└── CTASection (final CTA)

Products.tsx
├── Hero section
├── MRECAI section
└── Atlas section

IndustriesHub.tsx
├── Hero section
└── Industry grid

FAQ.tsx
└── FAQ accordion
```

### Data Flow

1. **Static Content Updates**: Most changes involve updating hardcoded strings in component JSX
2. **Component Reordering**: Team member data will be reordered in ExecutiveLeadership component
3. **Section Consolidation**: ServiceMatrix and FourPillars will be merged into a single unified section
4. **FAQ Addition**: New FAQ entry will be added to HomeFAQ and FAQ page arrays

## Components and Interfaces

### 1. CTAButton Component

**Location**: `src/components/common/CTAButton.tsx`

**Changes Required**:
- Update default text for 'book' type from "Book Free Consultation" to "Get Started"
- Update default text for 'call' type to maintain "Book Consultation" as secondary option

**Interface** (existing):
```typescript
interface CTAButtonProps {
  type?: CTAType;
  variant?: CTAVariant;
  size?: CTASize;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: IconType;
  children?: React.ReactNode;
  fullWidth?: boolean;
  animate?: boolean;
  reassurance?: string;
  className?: string;
}
```

**Implementation Notes**:
- The component uses a `defaultContent` object that maps types to default text
- Update the 'book' entry to use "Get Started" instead of "Book Free Consultation"
- Ensure backward compatibility by allowing custom children to override defaults

### 2. HomeHero Component

**Location**: `src/components/home/HomeHero.tsx` (imported in Home.tsx)

**Changes Required**:
- Update primary CTA button text from "Start Assessment" to "Get Started"
- Update secondary CTA button text from "Book Strategy Call" to "Book Consultation"

**Implementation**:
```typescript
// Primary CTA
<CTAButton type="custom" variant="primary" size="xl">
  Get Started
</CTAButton>

// Secondary CTA
<CTAButton type="custom" variant="secondary" size="xl">
  Book Consultation
</CTAButton>
```

### 3. In60Seconds Component

**Location**: `src/components/home/In60Seconds.tsx`

**Changes Required**:
- Update opening paragraph to include "families and businesses in all 50 states"
- Remove bold styling from "businesses"
- Add "Website Development" to the Technology & Creative Services list

**Current Text**:
```
MRE Consulting & Insurance is a technology-first business transformation firm 
based in New York that helps businesses with:
```

**New Text**:
```
MRE Consulting & Insurance is a technology-first business transformation firm 
based in New York that helps families and businesses in all 50 states with:
```

**Service Addition**:
Add after "Custom Software Development":
```tsx
<div className="flex items-start space-x-3">
  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  <span className="text-gray-700"><strong>Website Development</strong> - Professional websites and web applications</span>
</div>
```

### 4. ProcessFlow Component

**Location**: `src/components/common/ProcessFlow.tsx`

**Changes Required**:
- Rename first step from "Diagnose" to "Evaluate"
- Update "Implement" step description to be more general

**Current Steps Array**:
```typescript
const steps = [
  {
    icon: FaSearch,
    title: "Diagnose",
    description: "Comprehensive audit of your financial, risk, and technology systems to identify gaps."
  },
  // ...
  {
    icon: FaTools,
    title: "Implement",
    description: "Done-for-you setup of tax strategies, insurance policies, and AI automations."
  },
  // ...
];
```

**Updated Steps Array**:
```typescript
const steps = [
  {
    icon: FaSearch,
    title: "Evaluate",
    description: "Comprehensive audit of your financial, risk, and technology systems to identify gaps."
  },
  // ...
  {
    icon: FaTools,
    title: "Implement",
    description: "Done-for-you setup of the strategies and systems your situation requires."
  },
  // ...
];
```

### 5. Consolidated Technology Section

**Approach**: Merge ServiceMatrix and FourPillars into a single unified component

**New Component**: `src/components/home/TechnologyAdvantage.tsx`

**Structure**:
```typescript
interface TechPillar {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  link: string;
}

const pillars: TechPillar[] = [
  {
    icon: FaRobot,
    title: 'AI Consulting & Automation',
    description: 'Deploy intelligent AI systems and automation workflows that work 24/7 to scale your business without adding headcount.',
    features: ['AI Chatbots & Agents', 'Process Automation', 'Machine Learning Solutions'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    link: '/services/ai-driven-growth'
  },
  {
    icon: FaCode,
    title: 'Custom Software Development',
    description: 'Build powerful web applications, mobile apps, and custom software solutions tailored to your unique business needs.',
    features: ['Web Applications', 'Mobile Apps', 'Website Development', 'API Integration'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    link: '/services/technology'
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing & Design',
    description: 'Data-driven marketing strategies, stunning graphic design, professional video editing, and brand development that converts.',
    features: ['SEO & Digital Marketing', 'Graphic Design', 'Video Production', 'Brand Development'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    link: '/services/digital-marketing'
  },
  {
    icon: FaChartLine,
    title: 'Business Support Services',
    description: 'Strategic tax planning, comprehensive insurance, bookkeeping, and financial consulting to support your growth.',
    features: ['Tax & Accounting', 'Insurance Consulting', 'Business Consulting', 'Investment Management'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    link: '/services'
  },
];
```

**Implementation Notes**:
- Combines the visual design of FourPillars with the feature lists from ServiceMatrix
- Uses 4-column grid on large screens (lg:grid-cols-4)
- Maintains hover effects and animations from both original components
- Each pillar card includes icon, title, description, feature list, and link

### 6. ExecutiveLeadership Component

**Location**: `src/components/home/ExecutiveLeadership.tsx`

**Changes Required**:
1. Remove subtitle "Strategic guidance and technical innovation driving your success"
2. Reorder team members: Waheed (CTO) before Matthew (CEO)

**Current Structure**:
```tsx
<h2>Meet Our <span>People</span></h2>
<p>Strategic guidance and technical innovation driving your success</p>

{/* CEO Section */}
{/* CMO Section */}
{/* CTO Section */}
```

**Updated Structure**:
```tsx
<h2>Meet Our <span>People</span></h2>
{/* Remove subtitle paragraph */}

{/* CTO Section - Waheed */}
{/* CEO Section - Matthew */}
{/* CMO Section - Jessie */}
```

**Implementation**:
- Move the CTO section (Waheed Ali Shah) to render first
- Move the CEO section (Matthew R. Epstein) to render second
- Keep CMO section (Jessie Gwilt) in third position
- Maintain all styling and animations
- Adjust grid ordering classes if needed for responsive layouts

### 7. Partners Component

**Location**: `src/components/home/Partners.tsx`

**Changes Required**:
1. Remove "50 strategic partners" claim (if present)
2. Reorder partners: GIA (Grober Imbey) before legal partner
3. Fix "Merc AI" typo to "MRECAI"

**Current Structure**:
```tsx
<a href="...">
  <div>Powered By</div>
  <div>Grober Imbey</div>
</a>

<a href="...">
  <div>Technology Partner</div>
  <div>NovaEdge Solutions</div>
</a>
```

**Implementation Notes**:
- Current component only shows Grober Imbey and NovaEdge Solutions
- No legal partner is currently displayed
- No "50 partners" claim exists in current code
- Verify NovaEdge section description doesn't contain "Merc AI" typo
- Search entire codebase for "Merc AI" or "MercAI" variations

### 8. HomeFAQ Component

**Location**: `src/components/home/HomeFAQ.tsx`

**Changes Required**:
- Add new FAQ entry about out-of-state service

**New FAQ Entry**:
```typescript
{
  question: 'What if I don\'t live in New York?',
  answer: 'MRE Consulting and Insurance serves families and businesses in all 50 states. While we are headquartered in New York, you do not need to be located in New York to work with us.',
}
```

**Placement**: Insert after question about "What does MRE Consulting & Insurance do?" (position 2 in array)

### 9. FAQ Page

**Location**: `src/pages/FAQ.tsx`

**Changes Required**:
- Add same out-of-state FAQ entry to the main FAQ page

**Implementation**:
```typescript
{
  category: 'Location & Availability',
  question: 'What if I don\'t live in New York?',
  answer: 'MRE Consulting and Insurance serves families and businesses in all 50 states. While we are headquartered in New York, you do not need to be located in New York to work with us.',
}
```

**Placement**: Add to "Location & Availability" category section

### 10. Products Page

**Location**: `src/pages/Products.tsx`

**Changes Required**:
- Add explicit service lists for MRECAI product
- Add explicit service lists for Atlas product

**MRECAI Services Section** (to be added):
```tsx
<div className="mb-8">
  <h3 className="text-2xl font-bold text-navy-900 mb-4">MRECAI Services Include:</h3>
  <ul className="grid md:grid-cols-2 gap-3">
    <li className="flex items-start">
      <FaCheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
      <span>Tax Preparation & Planning</span>
    </li>
    <li className="flex items-start">
      <FaCheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
      <span>Bookkeeping & Accounting</span>
    </li>
    <li className="flex items-start">
      <FaCheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
      <span>Insurance Consulting</span>
    </li>
    <li className="flex items-start">
      <FaCheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
      <span>Business Consulting</span>
    </li>
    <li className="flex items-start">
      <FaCheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
      <span>AI & Technology Consulting</span>
    </li>
    <li className="flex items-start">
      <FaCheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
      <span>Digital Marketing</span>
    </li>
  </ul>
</div>
```

**Atlas Services Section** (already has features, ensure clarity):
- Current Products page focuses on Atlas Engine
- Verify Atlas capabilities are clearly listed
- Current implementation already shows features in "Core Features" section

### 11. Industries Page

**Location**: `src/pages/IndustriesHub.tsx`

**Changes Required**:
- Add prominent statement about serving all industries

**Implementation**:
Add after hero section, before industry grid:
```tsx
<section className="py-12 bg-white border-y border-gray-200">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
        <span className="text-primary-700 font-semibold">Universal Coverage</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
        We Work With Every Industry
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed">
        We work with clients across every industry. No matter what sector you operate in, 
        our integrated services apply. While we highlight specific industries below, 
        our expertise in accounting, risk management, and technology serves businesses 
        of all types and sizes.
      </p>
    </motion.div>
  </div>
</section>
```

### 12. CTASection Component

**Location**: `src/components/common/CTASection.tsx`

**Changes Required**:
- Update default CTA text in variant configurations

**Current Default Variant**:
```typescript
default: {
  title: 'Ready to Get Started?',
  description: 'Book a free consultation to discuss your needs...',
  primaryCTA: { text: 'Book Free Consultation', type: 'book' as const },
  secondaryCTA: { text: 'Call: (929) 919-3574', type: 'call' as const },
}
```

**Updated Default Variant**:
```typescript
default: {
  title: 'Ready to Get Started?',
  description: 'Book a free consultation to discuss your needs...',
  primaryCTA: { text: 'Get Started', type: 'book' as const },
  secondaryCTA: { text: 'Book Consultation', type: 'call' as const },
}
```

## Data Models

### FAQ Entry Model

```typescript
interface FAQItem {
  question: string;
  answer: string;
  category?: string; // Optional, used in FAQ page
}
```

### Team Member Model (Implicit)

```typescript
interface TeamMember {
  name: string;
  title: string;
  quote: string;
  bio: string[];
  highlights: string[];
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  links?: {
    type: 'linkedin' | 'website' | 'about';
    url: string;
    text: string;
  }[];
}
```

### Technology Pillar Model

```typescript
interface TechPillar {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  color: string; // Tailwind gradient classes
  bgColor: string; // Tailwind background classes
  link: string;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After analyzing all acceptance criteria, I've identified the following patterns:

**Redundancy Analysis:**

1. **Text Content Properties**: Many criteria test for specific text in specific locations (examples). These are not redundant because each tests a different location.

2. **Consistency Properties**: Several properties test consistency across pages:
   - 1.4: No old CTA text anywhere
   - 2.4: Geographic reach mentions nationwide
   - 3.3: Service naming consistency
   - 4.3: "Evaluate" used consistently
   - 8.2: Team member ordering consistency
   - 13.2 & 13.3: Brand name spelling consistency
   
   Properties 13.2 and 13.3 can be combined - they both test that MRECAI is spelled correctly everywhere and misspellings don't exist.

3. **Preservation Properties**: Several properties test that existing functionality is preserved:
   - 16.1-16.4: Accessibility, performance, keyboard access, semantic HTML
   - 17.1-17.4: Navigation, forms, animations, no regressions
   
   These are complementary rather than redundant - each tests a different aspect of preservation.

**Consolidation Decisions:**

- Combine 13.2 and 13.3 into single property: "Brand name spelling consistency"
- Keep all other properties as they test unique aspects

### Property 1: CTA Button Text Consistency

*For any* page on the website, the rendered output should not contain the deprecated CTA text "Start Assessment", "Book Strategy Call", or "Take the Assessment"

**Validates: Requirements 1.4**

### Property 2: Geographic Reach Consistency

*For any* mention of MRE's geographic reach or service area, the text should explicitly state nationwide or all-50-states availability

**Validates: Requirements 2.4**

### Property 3: Service Naming Consistency

*For any* page that lists services, the service names should match the canonical service names defined in the system

**Validates: Requirements 3.3**

### Property 4: Process Step Naming Consistency

*For any* reference to the four-step growth process, the first step should be named "Evaluate" (not "Diagnose")

**Validates: Requirements 4.3**

### Property 5: Content Deduplication

*For any* piece of content on the website, it should not appear in multiple sections verbatim (allowing for intentional repetition like CTAs)

**Validates: Requirements 6.4**

### Property 6: Team Member Ordering Consistency

*For any* page that displays team members, Waheed should appear before Matthew in the display order

**Validates: Requirements 8.2**

### Property 7: Brand Name Spelling Consistency

*For any* text content on the website, the brand name should be spelled "MRECAI" and should not contain misspellings like "Merc AI", "MercAI", or "Mre Cai"

**Validates: Requirements 13.2, 13.3**

### Property 8: Accessibility Preservation

*For any* updated component, the rendered output should maintain WCAG 2.1 Level AA compliance for color contrast, keyboard navigation, ARIA labels, and semantic structure

**Validates: Requirements 16.1, 16.3, 16.4**

### Property 9: Performance Preservation

*For any* updated page, the performance metrics (First Contentful Paint, Largest Contentful Paint, Time to Interactive) should not regress by more than 10% from baseline

**Validates: Requirements 16.2**

### Property 10: Functionality Preservation

*For any* updated page, all existing interactive elements (navigation links, form submissions, animations) should continue to function as they did before the update

**Validates: Requirements 17.1, 17.2, 17.3, 17.4**

## Error Handling

### Content Update Errors

**Scenario**: Component fails to render after text updates

**Handling**:
- Validate all JSX syntax before deployment
- Use TypeScript to catch type errors in props
- Implement error boundaries around updated components
- Log rendering errors to console in development

**Recovery**:
- Error boundary displays fallback UI
- User can still navigate to other pages
- Error is logged for debugging

### Missing Content Errors

**Scenario**: Required content (FAQ entry, service list) is not found

**Handling**:
- Use TypeScript interfaces to ensure required fields are present
- Validate data structures at build time
- Provide default fallback content for optional sections

**Recovery**:
- Display placeholder content if data is missing
- Log warning to console
- Continue rendering rest of page

### Styling Errors

**Scenario**: CSS classes are missing or incorrect after updates

**Handling**:
- Use Tailwind's JIT mode to ensure all classes are generated
- Validate class names against Tailwind config
- Test responsive breakpoints in development

**Recovery**:
- Fallback to base styles if custom classes fail
- Component remains functional even if styling is imperfect

### Accessibility Errors

**Scenario**: Updates introduce accessibility violations

**Handling**:
- Run automated accessibility tests (axe-core) in CI/CD
- Validate ARIA attributes and semantic HTML
- Test keyboard navigation manually
- Check color contrast ratios

**Recovery**:
- Block deployment if critical accessibility issues are found
- Provide warnings for minor issues
- Document accessibility requirements in component comments

### Performance Errors

**Scenario**: Updates cause performance degradation

**Handling**:
- Monitor bundle size during build
- Use React DevTools Profiler to identify slow renders
- Implement code splitting for large components
- Lazy load images and heavy content

**Recovery**:
- Optimize images and assets
- Memoize expensive computations
- Use React.memo for components that don't need frequent re-renders

## Testing Strategy

### Dual Testing Approach

This implementation requires both unit testing and property-based testing to ensure correctness:

**Unit Tests**: Verify specific examples, edge cases, and component rendering
**Property Tests**: Verify universal properties across all pages and components

Together, these approaches provide comprehensive coverage - unit tests catch concrete bugs in specific components, while property tests verify general correctness across the entire application.

### Unit Testing

**Framework**: Jest + React Testing Library

**Test Categories**:

1. **Component Rendering Tests**
   - Verify each updated component renders without errors
   - Check that specific text content appears correctly
   - Validate that elements are in correct order
   - Example: Test that HomeHero renders "Get Started" button

2. **Content Validation Tests**
   - Verify FAQ entries are added correctly
   - Check that service lists contain expected items
   - Validate team member information is preserved
   - Example: Test that HomeFAQ includes out-of-state question

3. **Integration Tests**
   - Test that consolidated sections work together
   - Verify navigation between pages works
   - Check that CTAs link to correct destinations
   - Example: Test that TechnologyAdvantage section renders all 4 pillars

4. **Accessibility Tests**
   - Use jest-axe to check for accessibility violations
   - Verify keyboard navigation works
   - Check ARIA labels and semantic HTML
   - Example: Test that all buttons are keyboard accessible

5. **Regression Tests**
   - Verify existing functionality still works
   - Check that animations still trigger
   - Validate forms still submit
   - Example: Test that contact form submission still works

**Example Unit Test**:
```typescript
describe('HomeHero', () => {
  it('should display "Get Started" as primary CTA text', () => {
    render(<HomeHero />);
    const primaryButton = screen.getByRole('button', { name: /get started/i });
    expect(primaryButton).toBeInTheDocument();
  });

  it('should display "Book Consultation" as secondary CTA text', () => {
    render(<HomeHero />);
    const secondaryButton = screen.getByRole('button', { name: /book consultation/i });
    expect(secondaryButton).toBeInTheDocument();
  });

  it('should not display deprecated CTA text', () => {
    render(<HomeHero />);
    expect(screen.queryByText(/start assessment/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/book strategy call/i)).not.toBeInTheDocument();
  });
});
```

### Property-Based Testing

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**:
- Minimum 100 iterations per property test
- Each test references its design document property
- Tag format: `Feature: website-change-request-implementation, Property {number}: {property_text}`

**Property Test Categories**:

1. **Text Consistency Properties**
   - Generate random page selections
   - Verify deprecated text doesn't appear anywhere
   - Check brand name spelling across all pages

2. **Content Structure Properties**
   - Generate random component configurations
   - Verify required elements are present
   - Check ordering constraints are maintained

3. **Accessibility Properties**
   - Generate random user interactions
   - Verify keyboard navigation works for all interactive elements
   - Check color contrast meets WCAG standards

4. **Performance Properties**
   - Generate random page loads
   - Verify performance metrics stay within bounds
   - Check bundle size doesn't exceed limits

**Example Property Test**:
```typescript
import fc from 'fast-check';

describe('Property 1: CTA Button Text Consistency', () => {
  /**
   * Feature: website-change-request-implementation
   * Property 1: For any page on the website, the rendered output should not 
   * contain the deprecated CTA text "Start Assessment", "Book Strategy Call", 
   * or "Take the Assessment"
   */
  it('should not contain deprecated CTA text on any page', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('/', '/services', '/about', '/contact', '/products', '/industries', '/faq'),
        (pagePath) => {
          const { container } = render(<App initialPath={pagePath} />);
          const pageText = container.textContent || '';
          
          expect(pageText).not.toMatch(/start assessment/i);
          expect(pageText).not.toMatch(/book strategy call/i);
          expect(pageText).not.toMatch(/take the assessment/i);
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 7: Brand Name Spelling Consistency', () => {
  /**
   * Feature: website-change-request-implementation
   * Property 7: For any text content on the website, the brand name should be 
   * spelled "MRECAI" and should not contain misspellings like "Merc AI", 
   * "MercAI", or "Mre Cai"
   */
  it('should spell brand name correctly across all pages', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('/', '/services', '/about', '/contact', '/products', '/industries', '/faq'),
        (pagePath) => {
          const { container } = render(<App initialPath={pagePath} />);
          const pageText = container.textContent || '';
          
          expect(pageText).not.toMatch(/merc\s*ai/i);
          expect(pageText).not.toMatch(/mercai/i);
          expect(pageText).not.toMatch(/mre\s*cai/i);
          
          // If brand name is mentioned, it should be spelled correctly
          if (pageText.match(/mre/i)) {
            expect(pageText).toMatch(/MRECAI|MRE Consulting/);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 8: Accessibility Preservation', () => {
  /**
   * Feature: website-change-request-implementation
   * Property 8: For any updated component, the rendered output should maintain 
   * WCAG 2.1 Level AA compliance for color contrast, keyboard navigation, 
   * ARIA labels, and semantic structure
   */
  it('should maintain accessibility standards for all interactive elements', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.constantFrom(
          <HomeHero />,
          <In60Seconds />,
          <ProcessFlow />,
          <ExecutiveLeadership />,
          <HomeFAQ />
        ),
        async (Component) => {
          const { container } = render(Component);
          const results = await axe(container);
          
          expect(results.violations).toHaveLength(0);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Test Coverage Goals

- **Unit Test Coverage**: Minimum 80% code coverage for updated components
- **Property Test Coverage**: All 10 correctness properties must have corresponding property tests
- **Integration Test Coverage**: All user flows involving updated components must be tested
- **Accessibility Test Coverage**: All interactive elements must pass automated accessibility tests

### Testing Tools

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **fast-check**: Property-based testing library
- **jest-axe**: Accessibility testing
- **@testing-library/user-event**: User interaction simulation
- **MSW (Mock Service Worker)**: API mocking for integration tests

### Continuous Integration

- Run all tests on every pull request
- Block merge if any tests fail
- Generate coverage reports
- Run accessibility audits
- Monitor bundle size changes

## Implementation Plan

### Phase 1: Component Updates (Priority: High)

1. Update CTAButton component default text
2. Update HomeHero CTA buttons
3. Update In60Seconds component text and service list
4. Update ProcessFlow step names and descriptions
5. Create TechnologyAdvantage component (merge ServiceMatrix + FourPillars)
6. Update ExecutiveLeadership component (remove subtitle, reorder team)
7. Update Partners component (verify no typos)
8. Update CTASection default variant

**Estimated Effort**: 8-12 hours

### Phase 2: Page Updates (Priority: High)

1. Update Home.tsx to use TechnologyAdvantage instead of ServiceMatrix + FourPillars
2. Add service lists to Products page
3. Add universal coverage statement to Industries page
4. Add out-of-state FAQ to HomeFAQ and FAQ page

**Estimated Effort**: 4-6 hours

### Phase 3: Testing (Priority: High)

1. Write unit tests for all updated components
2. Write property tests for all 10 correctness properties
3. Run accessibility audits
4. Perform manual testing of all updated pages
5. Test responsive layouts on multiple devices

**Estimated Effort**: 12-16 hours

### Phase 4: Documentation and Deployment (Priority: Medium)

1. Update component documentation
2. Update README with changes
3. Create deployment checklist
4. Deploy to staging environment
5. Perform final QA
6. Deploy to production

**Estimated Effort**: 4-6 hours

### Total Estimated Effort: 28-40 hours

## Deployment Considerations

### Pre-Deployment Checklist

- [ ] All unit tests pass
- [ ] All property tests pass
- [ ] Accessibility audit shows no violations
- [ ] Performance metrics meet baseline
- [ ] Manual testing completed on all updated pages
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] Cross-browser testing completed (Chrome, Firefox, Safari, Edge)
- [ ] SEO metadata verified
- [ ] Analytics tracking verified
- [ ] Error monitoring configured

### Deployment Strategy

1. **Staging Deployment**
   - Deploy to staging environment
   - Run full test suite
   - Perform manual QA
   - Get stakeholder approval

2. **Production Deployment**
   - Deploy during low-traffic period
   - Monitor error rates
   - Monitor performance metrics
   - Have rollback plan ready

3. **Post-Deployment Monitoring**
   - Monitor error logs for 24 hours
   - Check analytics for unusual patterns
   - Verify all pages load correctly
   - Monitor performance metrics

### Rollback Plan

If critical issues are discovered after deployment:

1. Immediately revert to previous version
2. Investigate root cause
3. Fix issues in development
4. Re-test thoroughly
5. Re-deploy when ready

## Success Criteria

The implementation will be considered successful when:

1. All 17 requirements are implemented correctly
2. All unit tests pass with >80% coverage
3. All 10 property tests pass with 100 iterations each
4. No accessibility violations are detected
5. Performance metrics meet or exceed baseline
6. Manual QA confirms all changes are visible and correct
7. Stakeholders approve the changes
8. Production deployment is stable with no critical errors

## Appendix A: Component File Locations

- `src/components/common/CTAButton.tsx`
- `src/components/common/CTASection.tsx`
- `src/components/common/ProcessFlow.tsx`
- `src/components/home/HomeHero.tsx`
- `src/components/home/In60Seconds.tsx`
- `src/components/home/ServiceMatrix.tsx`
- `src/components/home/FourPillars.tsx`
- `src/components/home/TechnologyAdvantage.tsx` (new)
- `src/components/home/ExecutiveLeadership.tsx`
- `src/components/home/Partners.tsx`
- `src/components/home/HomeFAQ.tsx`
- `src/pages/Home.tsx`
- `src/pages/Products.tsx`
- `src/pages/IndustriesHub.tsx`
- `src/pages/FAQ.tsx`

## Appendix B: Search Patterns for Verification

Use these patterns to verify all instances of deprecated text are removed:

```bash
# Search for deprecated CTA text
grep -r "Start Assessment" src/
grep -r "Book Strategy Call" src/
grep -r "Take the Assessment" src/

# Search for brand name misspellings
grep -ri "merc ai" src/
grep -ri "mercai" src/
grep -ri "mre cai" src/

# Search for "Diagnose" in process flow
grep -r "Diagnose" src/

# Search for hard-coded implementation deliverables
grep -r "tax strategies, insurance policies, and AI automations" src/
```

## Appendix C: Accessibility Testing Checklist

- [ ] All images have alt text
- [ ] All buttons have accessible names
- [ ] All form inputs have labels
- [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators are visible
- [ ] ARIA labels are used appropriately
- [ ] Semantic HTML is used (header, nav, main, section, article, footer)
- [ ] Headings are in logical order (h1, h2, h3, etc.)
- [ ] Links have descriptive text (not "click here")
- [ ] Tables have proper headers
- [ ] Lists use proper list markup
- [ ] Language is specified in HTML tag
- [ ] Page title is descriptive
- [ ] Skip navigation link is provided

## Appendix D: Performance Metrics Baseline

Current performance metrics (to be maintained or improved):

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Bundle Size**: < 500KB (gzipped)

## Appendix E: Browser Support Matrix

Minimum supported browser versions:

- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Edge: Last 2 versions
- Mobile Safari (iOS): Last 2 versions
- Chrome Mobile (Android): Last 2 versions

## Appendix F: Responsive Breakpoints

Tailwind CSS breakpoints used in the design:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

All updated components must be tested at each breakpoint to ensure responsive design works correctly.

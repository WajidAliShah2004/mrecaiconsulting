# Design Document

## Overview

This design document outlines the technical approach for rebranding the MRECAI website to position the company as a technology and AI consulting firm first, with financial services as complementary offerings. The rebrand involves restructuring content hierarchy, updating navigation patterns, modifying visual elements, and ensuring consistent messaging across all pages and components.

The design maintains the existing React/TypeScript architecture while implementing systematic changes to service ordering, content emphasis, and visual presentation. All changes are designed to be backward-compatible and maintain existing functionality while shifting the brand positioning.

## Architecture

### High-Level Architecture

The MRECAI website follows a standard React single-page application (SPA) architecture:

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (Client)                     │
│  ┌───────────────────────────────────────────────────┐  │
│  │           React Application (SPA)                  │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │         React Router (Navigation)            │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │      Layout Components (Navbar, Footer)      │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │         Page Components (Home, Services)     │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │    Shared Components (Hero, CTA, Cards)      │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              Constants & Configuration                   │
│  ┌───────────────────────────────────────────────────┐  │
│  │  constants.ts (Service Definitions & Ordering)    │  │
│  │  schemas.ts (SEO & Structured Data)               │  │
│  │  analytics.ts (Tracking Configuration)            │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Rebrand Architecture Strategy

The rebrand will be implemented through a layered approach:

1. **Data Layer**: Update service definitions and ordering in `constants.ts`
2. **Component Layer**: Modify component content and rendering logic
3. **Presentation Layer**: Update visual styling and emphasis
4. **SEO Layer**: Update metadata and schema markup in `schemas.ts`
5. **Analytics Layer**: Add tracking for new service categories

This layered approach ensures changes propagate consistently throughout the application.

### Service Hierarchy Model

The new service hierarchy introduces a two-tier classification:

```
Services
├── Primary Services (Technology-First)
│   ├── AI Consulting & Automation
│   ├── Software Development
│   ├── Digital Marketing
│   ├── Graphic Design
│   └── Video Editing
└── Secondary Services (Complementary)
    ├── Tax Services
    ├── Insurance Services
    └── Other Financial Services
```

This hierarchy will be enforced through:
- Array ordering in constants
- Component rendering logic
- Visual styling and emphasis
- Navigation structure
- SEO metadata

## Components and Interfaces

### Core Components to Modify

#### 1. HomeHero Component

**Location**: `src/components/home/HomeHero.tsx`

**Current State**: Emphasizes "Integrated Tax, Insurance & AI Consulting"

**Required Changes**:
- Update headline to lead with AI/Technology services
- Modify subheadline to position financial services as complementary
- Update badge text from "Next Gen Business OS" to technology-focused messaging
- Replace trust indicators to emphasize technology metrics
- Reorder floating cards to prioritize AI/automation achievements

**Interface**:
```typescript
interface HomeHeroProps {
  // No props currently, component is self-contained
}

interface TrustIndicator {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface FloatingCard {
  icon: string;
  label: string;
  value: string;
  gradient: string;
  position: 'top-right' | 'bottom-left';
}
```

**Design Decisions**:
- Maintain existing animation and visual effects
- Keep responsive design patterns
- Update only content and ordering, not structure

#### 2. FourPillars Component

**Location**: `src/components/home/FourPillars.tsx`

**Current State**: Displays Financial Clarity, Smarter Taxes, Operational & Technology Systems, Risk & Insurance Protection

**Required Changes**:
- Reorder pillars to: AI & Automation, Technology & Software Development, Digital Marketing & Design, Financial Services & Risk Management
- Update pillar descriptions to emphasize technology capabilities
- Update section title to reflect technology-first positioning
- Maintain visual styling and animation patterns

**Interface**:
```typescript
interface Pillar {
  icon: IconType;
  title: string;
  description: string;
  color: string;  // Tailwind gradient classes
  bgColor: string; // Tailwind background classes
}

interface FourPillarsProps {
  pillars?: Pillar[]; // Optional override for testing
}
```

#### 3. Navbar Component

**Location**: `src/components/layout/Navbar.tsx`

**Current State**: Services dropdown lists all services without clear hierarchy

**Required Changes**:
- Reorder services dropdown to show Primary Services first
- Add visual separator between Primary and Secondary services
- Add prominent "AI & Technology Consulting" link
- Maintain mobile navigation ordering
- Update hover states and active indicators

**Interface**:
```typescript
interface NavLink {
  name: string;
  path: string;
  shortName?: string; // For mobile/compact views
}

interface ServiceLink extends NavLink {
  category: 'primary' | 'secondary';
  icon?: IconType;
}

interface NavbarProps {
  // No props currently, uses location from react-router
}
```

**Design Decisions**:
- Use visual divider (border or spacing) to separate service categories
- Maintain existing dropdown animation and styling
- Ensure accessibility (ARIA labels, keyboard navigation)

#### 4. Footer Component

**Location**: `src/components/layout/Footer.tsx`

**Current State**: Lists services without hierarchy

**Required Changes**:
- Reorder service links to show Primary Services first
- Update company tagline to emphasize technology
- Update service category groupings
- Maintain mobile responsiveness
- Add quick links to key technology service pages

**Interface**:
```typescript
interface FooterLink {
  name: string;
  path: string;
  category?: 'primary' | 'secondary' | 'general';
}

interface FooterProps {
  // No props currently, component is self-contained
}
```

#### 5. Services Page Component

**Location**: `src/pages/Services.tsx`

**Current State**: Displays all services in mixed order

**Required Changes**:
- Reorder service grid to show Primary Services first
- Add visual hierarchy (size, color, prominence) for Primary Services
- Add dedicated AI/Technology consulting highlight section
- Update hero section to emphasize technology services
- Maintain responsive grid layout

**Interface**:
```typescript
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  link: string;
  category: 'primary' | 'secondary';
  partnerDisclosure?: string;
}

interface ServicesPageProps {
  // No props currently, uses constants
}
```

### New Components to Create

#### 1. ServiceCategoryDivider Component

**Purpose**: Visual separator between Primary and Secondary services in navigation and lists

**Interface**:
```typescript
interface ServiceCategoryDividerProps {
  label?: string; // Optional label like "Additional Services"
  variant?: 'horizontal' | 'vertical';
  className?: string;
}
```

**Implementation**:
```typescript
const ServiceCategoryDivider: React.FC<ServiceCategoryDividerProps> = ({
  label,
  variant = 'horizontal',
  className = ''
}) => {
  return (
    <div className={`service-divider ${variant} ${className}`}>
      {label && <span className="divider-label">{label}</span>}
      <div className="divider-line" />
    </div>
  );
};
```

#### 2. TechnologyHighlight Component

**Purpose**: Dedicated section on Services page to highlight AI and technology consulting

**Interface**:
```typescript
interface TechnologyHighlightProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}
```

**Implementation**: Full-width section with gradient background, feature list, and prominent CTA

### Utility Functions

#### Service Ordering Utility

**Location**: `src/utils/serviceHelpers.ts` (new file)

**Purpose**: Centralize service ordering logic

```typescript
export type ServiceCategory = 'primary' | 'secondary';

export interface CategorizedService {
  id: string;
  category: ServiceCategory;
  order: number;
  [key: string]: any;
}

export const categorizeService = (serviceId: string): ServiceCategory => {
  const primaryServices = [
    'ai-technology',
    'automation',
    'technology-services',
    'digital-marketing',
    'graphic-design',
    'video-editing'
  ];
  
  return primaryServices.includes(serviceId) ? 'primary' : 'secondary';
};

export const sortServicesByCategory = <T extends { id: string }>(
  services: T[]
): T[] => {
  return services.sort((a, b) => {
    const catA = categorizeService(a.id);
    const catB = categorizeService(b.id);
    
    if (catA === 'primary' && catB === 'secondary') return -1;
    if (catA === 'secondary' && catB === 'primary') return 1;
    return 0;
  });
};

export const filterServicesByCategory = <T extends { id: string }>(
  services: T[],
  category: ServiceCategory
): T[] => {
  return services.filter(service => categorizeService(service.id) === category);
};
```

## Data Models

### Service Definition Model

**Location**: `src/utils/constants.ts`

**Current Structure**:
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}
```

**Enhanced Structure**:
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  category: 'primary' | 'secondary';  // NEW
  order: number;                       // NEW
  keywords: string[];                  // NEW - for SEO
  relatedServices?: string[];          // NEW - for cross-linking
}
```

**Rationale**: Adding `category` and `order` fields enables systematic service hierarchy enforcement. Keywords support SEO updates, and relatedServices enables intelligent cross-linking.

### Service Ordering Constants

**New Constants to Add**:
```typescript
export const PRIMARY_SERVICE_IDS = [
  'ai-technology',
  'automation',
  'technology-services',
  'digital-marketing',
  'graphic-design',
  'video-editing'
] as const;

export const SECONDARY_SERVICE_IDS = [
  'tax-accounting',
  'insurance-services',
  'investment-management',
  'estate-consulting',
  'bookkeeping-accounting'
] as const;

export type PrimaryServiceId = typeof PRIMARY_SERVICE_IDS[number];
export type SecondaryServiceId = typeof SECONDARY_SERVICE_IDS[number];
```

### SEO Metadata Model

**Location**: `src/utils/schemas.ts`

**Current Structure**: Organization schema lists services without hierarchy

**Enhanced Structure**:
```typescript
interface ServiceSchemaItem {
  '@type': 'Offer';
  itemOffered: {
    '@type': 'Service';
    name: string;
    description: string;
    category?: 'primary' | 'secondary';  // NEW
    serviceType?: string;                 // NEW
  };
}

interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'];
  name: string;
  description: string;
  primaryService?: string;  // NEW - "Technology Consulting"
  hasOfferCatalog: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: ServiceSchemaItem[];
  };
  // ... other fields
}
```

### Analytics Event Model

**Location**: `src/utils/analytics.ts`

**New Event Types**:
```typescript
interface ServiceInteractionEvent {
  event: 'service_interaction';
  service_id: string;
  service_category: 'primary' | 'secondary';
  interaction_type: 'view' | 'click' | 'cta_click';
  page_location: string;
}

interface CrossServiceNavigationEvent {
  event: 'cross_service_navigation';
  from_service_category: 'primary' | 'secondary';
  to_service_category: 'primary' | 'secondary';
  from_page: string;
  to_page: string;
}

interface TechnologyInquiryEvent {
  event: 'technology_inquiry';
  service_type: string;
  form_location: string;
  inquiry_source: 'cta' | 'form' | 'chat' | 'phone';
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Service Ordering Consistency

*For any* component that displays a list of services (navigation, footer, service pages), Primary Services should appear before Secondary Services in the rendered DOM order.

**Validates: Requirements 2.1, 2.5, 4.1, 4.2, 5.1, 5.2, 8.2, 9.1, 9.4**

**Rationale**: This property ensures the fundamental hierarchy is maintained across all service displays, regardless of component or viewport.

### Property 2: CTA Messaging Contextuality

*For any* service-specific page, the CTA messaging should reference the specific service category (technology for Primary Services, appropriate messaging for Secondary Services).

**Validates: Requirements 6.3**

**Rationale**: CTAs should be contextually relevant to the page content, ensuring users see appropriate calls-to-action based on the service they're viewing.

### Property 3: Meta Description Technology-First Ordering

*For any* page meta description, if both technology services and financial services are mentioned, technology services should appear first in the text.

**Validates: Requirements 8.5**

**Rationale**: SEO metadata should reflect the technology-first positioning to influence search engine understanding and ranking.

### Property 4: Page Title Technology Terminology Priority

*For any* dynamically generated page title, technology-related terminology should appear before financial services terminology when both are present.

**Validates: Requirements 8.4**

**Rationale**: Page titles are critical SEO elements and should consistently prioritize technology positioning.

### Property 5: Breadcrumb Hierarchy Accuracy

*For any* page with breadcrumb navigation, the breadcrumb path should accurately reflect the new service hierarchy with Primary Services categorized appropriately.

**Validates: Requirements 10.4**

**Rationale**: Breadcrumbs provide navigational context and should reflect the correct service categorization.

### Property 6: Internal Link Priority

*For any* content page with multiple service links, Primary Service links should appear more frequently than Secondary Service links (at least 60% of service links should be to Primary Services).

**Validates: Requirements 10.1, 10.2**

**Rationale**: Internal linking patterns should reinforce the technology-first positioning by linking more frequently to Primary Services.

### Property 7: Service Bundle Composition

*For any* service bundle that includes Secondary Services (financial services), it must also include at least one Primary Service (technology service).

**Validates: Requirements 12.2**

**Rationale**: Bundles should demonstrate the integrated approach with technology services as the foundation.

### Property 8: Bundle Description Technology-First Ordering

*For any* service bundle description, technology benefits should be mentioned before financial service benefits in the text.

**Validates: Requirements 12.4**

**Rationale**: Bundle descriptions should lead with technology value propositions to align with the rebrand.

### Property 9: Testimonial Priority

*For any* testimonial display that includes both technology-related and financial-services-related testimonials, technology testimonials should appear in the first 50% of displayed items.

**Validates: Requirements 13.4**

**Rationale**: Social proof should emphasize technology success stories to build credibility in the new positioning.

### Property 10: Mobile Navigation Ordering Consistency

*For any* viewport size (desktop, tablet, mobile), the ordering of Primary Services before Secondary Services should remain consistent in navigation menus.

**Validates: Requirements 14.2, 14.3**

**Rationale**: Service hierarchy should be consistent across all device sizes to provide a uniform brand experience.

## Error Handling

### Service Ordering Fallbacks

**Scenario**: Service data is missing category or order information

**Handling**:
```typescript
const getServiceCategory = (service: Service): ServiceCategory => {
  if (service.category) {
    return service.category;
  }
  
  // Fallback: categorize by ID
  return categorizeService(service.id);
};

const getServiceOrder = (service: Service): number => {
  if (typeof service.order === 'number') {
    return service.order;
  }
  
  // Fallback: assign order based on category
  const category = getServiceCategory(service);
  return category === 'primary' ? 0 : 1000;
};
```

### Missing Service Data

**Scenario**: Required service information is missing from constants

**Handling**:
- Log warning to console in development mode
- Render placeholder content with clear indication of missing data
- Prevent application crash
- Track error in analytics for monitoring

```typescript
const renderServiceCard = (service: Service | undefined) => {
  if (!service) {
    console.warn('Service data missing');
    return <ServiceCardPlaceholder />;
  }
  
  return <ServiceCard {...service} />;
};
```

### Schema Generation Errors

**Scenario**: Schema markup generation fails due to missing data

**Handling**:
- Generate partial schema with available data
- Log error for debugging
- Ensure page still renders without schema
- Provide fallback meta tags

```typescript
const generateServiceSchema = (services: Service[]) => {
  try {
    return {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      }))
    };
  } catch (error) {
    console.error('Schema generation failed:', error);
    return null;
  }
};
```

### Analytics Tracking Failures

**Scenario**: Analytics events fail to send

**Handling**:
- Fail silently to not disrupt user experience
- Queue events for retry
- Log failures for monitoring
- Provide fallback to basic page view tracking

```typescript
const trackServiceInteraction = async (event: ServiceInteractionEvent) => {
  try {
    await analytics.track(event);
  } catch (error) {
    console.error('Analytics tracking failed:', error);
    // Queue for retry
    analyticsQueue.push(event);
  }
};
```

## Testing Strategy

### Dual Testing Approach

The rebrand will be validated through both unit tests and property-based tests:

- **Unit Tests**: Verify specific examples, edge cases, and component rendering
- **Property Tests**: Verify universal properties across all inputs and configurations

Together, these approaches provide comprehensive coverage: unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across the entire input space.

### Unit Testing Strategy

**Framework**: Jest + React Testing Library

**Test Categories**:

1. **Component Rendering Tests**
   - Verify components render without errors
   - Check for presence of required elements
   - Validate accessibility attributes

2. **Content Verification Tests**
   - Verify specific text content appears correctly
   - Check for technology-first messaging
   - Validate service descriptions

3. **Interaction Tests**
   - Test navigation dropdown interactions
   - Verify CTA button clicks
   - Test mobile menu functionality

4. **Responsive Design Tests**
   - Verify mobile layouts render correctly
   - Test viewport-specific content
   - Validate responsive navigation

**Example Unit Tests**:

```typescript
describe('HomeHero Component', () => {
  it('should display technology-first headline', () => {
    render(<HomeHero />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline.textContent).toMatch(/AI|Technology|Software/i);
  });

  it('should display financial services as complementary', () => {
    render(<HomeHero />);
    const subheadline = screen.getByText(/tax|insurance/i);
    const headline = screen.getByRole('heading', { level: 1 });
    
    // Subheadline should come after headline in DOM
    expect(subheadline.compareDocumentPosition(headline))
      .toBe(Node.DOCUMENT_POSITION_PRECEDING);
  });

  it('should display technology-related trust indicators', () => {
    render(<HomeHero />);
    expect(screen.getByText(/AI Projects|Automation|Technology/i)).toBeInTheDocument();
  });
});

describe('Navbar Component', () => {
  it('should list Primary Services before Secondary Services', () => {
    render(<Navbar />);
    const servicesDropdown = screen.getByRole('button', { name: /services/i });
    fireEvent.click(servicesDropdown);
    
    const links = screen.getAllByRole('link');
    const aiLink = links.find(link => link.textContent?.includes('AI'));
    const taxLink = links.find(link => link.textContent?.includes('Tax'));
    
    expect(aiLink).toBeDefined();
    expect(taxLink).toBeDefined();
    expect(links.indexOf(aiLink!)).toBeLessThan(links.indexOf(taxLink!));
  });
});
```

### Property-Based Testing Strategy

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**: Minimum 100 iterations per property test

**Property Test Categories**:

1. **Service Ordering Properties**
   - Verify Primary Services always appear before Secondary Services
   - Test across different service configurations

2. **Content Ordering Properties**
   - Verify technology terminology appears before financial terminology
   - Test across different content combinations

3. **Navigation Consistency Properties**
   - Verify ordering is consistent across viewport sizes
   - Test across different navigation states

**Example Property Tests**:

```typescript
import fc from 'fast-check';

/**
 * Feature: mrecai-website-rebrand, Property 1: Service Ordering Consistency
 * For any component that displays services, Primary Services appear before Secondary Services
 */
describe('Property: Service Ordering Consistency', () => {
  it('should maintain Primary Services before Secondary Services for any service list', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({
          id: fc.constantFrom(...PRIMARY_SERVICE_IDS, ...SECONDARY_SERVICE_IDS),
          title: fc.string(),
          description: fc.string()
        })),
        (services) => {
          const sorted = sortServicesByCategory(services);
          
          // Find the last Primary Service index
          const lastPrimaryIndex = sorted.findLastIndex(
            s => categorizeService(s.id) === 'primary'
          );
          
          // Find the first Secondary Service index
          const firstSecondaryIndex = sorted.findIndex(
            s => categorizeService(s.id) === 'secondary'
          );
          
          // If both exist, Primary should come before Secondary
          if (lastPrimaryIndex >= 0 && firstSecondaryIndex >= 0) {
            return lastPrimaryIndex < firstSecondaryIndex;
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: mrecai-website-rebrand, Property 3: Meta Description Technology-First Ordering
 * For any meta description with both technology and financial terms, technology appears first
 */
describe('Property: Meta Description Technology-First Ordering', () => {
  it('should place technology terms before financial terms in any meta description', () => {
    fc.assert(
      fc.property(
        fc.record({
          techTerms: fc.array(fc.constantFrom('AI', 'automation', 'software', 'technology'), { minLength: 1 }),
          finTerms: fc.array(fc.constantFrom('tax', 'insurance', 'financial'), { minLength: 1 }),
          connector: fc.constantFrom(' and ', ', ', ' with ')
        }),
        ({ techTerms, finTerms, connector }) => {
          const description = generateMetaDescription(techTerms, finTerms, connector);
          
          const firstTechIndex = Math.min(
            ...techTerms.map(term => description.toLowerCase().indexOf(term.toLowerCase()))
              .filter(i => i >= 0)
          );
          
          const firstFinIndex = Math.min(
            ...finTerms.map(term => description.toLowerCase().indexOf(term.toLowerCase()))
              .filter(i => i >= 0)
          );
          
          return firstTechIndex < firstFinIndex;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: mrecai-website-rebrand, Property 7: Service Bundle Composition
 * For any bundle with Secondary Services, it must include at least one Primary Service
 */
describe('Property: Service Bundle Composition', () => {
  it('should include Primary Services in any bundle containing Secondary Services', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({
          id: fc.constantFrom(...PRIMARY_SERVICE_IDS, ...SECONDARY_SERVICE_IDS),
          title: fc.string()
        }), { minLength: 2, maxLength: 6 }),
        (bundleServices) => {
          const hasSecondary = bundleServices.some(
            s => categorizeService(s.id) === 'secondary'
          );
          
          if (!hasSecondary) {
            return true; // Property doesn't apply
          }
          
          const hasPrimary = bundleServices.some(
            s => categorizeService(s.id) === 'primary'
          );
          
          return hasPrimary;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

**Focus Areas**:
- Navigation flow from homepage to service pages
- Cross-service linking and navigation
- Analytics event firing on user interactions
- SEO metadata generation across pages

**Tools**: Cypress or Playwright for end-to-end testing

### Visual Regression Testing

**Purpose**: Ensure visual changes are intentional and consistent

**Tools**: Percy or Chromatic

**Test Scenarios**:
- Homepage hero section
- Navigation dropdowns (desktop and mobile)
- Service cards grid
- Footer layout
- Four Pillars section

### Accessibility Testing

**Requirements**:
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast validation

**Tools**:
- axe-core for automated testing
- Manual testing with screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation testing

### Performance Testing

**Metrics to Monitor**:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

**Acceptance Criteria**:
- No performance regression from current baseline
- LCP < 2.5 seconds
- CLS < 0.1

## Implementation Notes

### Phased Rollout Strategy

The rebrand should be implemented in phases to minimize risk:

**Phase 1: Data Layer**
- Update constants.ts with new service ordering
- Add category and order fields to service definitions
- Create service helper utilities

**Phase 2: Core Components**
- Update HomeHero component
- Update FourPillars component
- Update Navbar component
- Update Footer component

**Phase 3: Service Pages**
- Update Services overview page
- Update individual service pages
- Add technology highlight section

**Phase 4: SEO & Analytics**
- Update schemas.ts with new metadata
- Implement analytics tracking
- Update meta tags across pages

**Phase 5: Content & Polish**
- Update all copy and messaging
- Refine visual styling
- Conduct final QA and testing

### Backward Compatibility

All changes should maintain backward compatibility:
- Existing URLs should continue to work
- Existing service IDs should remain valid
- Component APIs should not break
- Analytics events should be additive, not replacing

### Feature Flags

Consider using feature flags for gradual rollout:
```typescript
const FEATURE_FLAGS = {
  REBRAND_ENABLED: process.env.REACT_APP_REBRAND_ENABLED === 'true',
  REBRAND_NAVIGATION: process.env.REACT_APP_REBRAND_NAV === 'true',
  REBRAND_HOMEPAGE: process.env.REACT_APP_REBRAND_HOME === 'true'
};
```

This allows testing in production with limited exposure before full rollout.

### Monitoring & Rollback Plan

**Monitoring**:
- Track bounce rates on key pages
- Monitor conversion rates for technology services
- Track navigation patterns
- Monitor SEO rankings for key terms

**Rollback Triggers**:
- Bounce rate increase > 20%
- Conversion rate decrease > 15%
- Critical accessibility issues
- Significant performance degradation

**Rollback Process**:
- Revert feature flags
- Deploy previous version if needed
- Communicate with stakeholders
- Analyze issues before re-attempting

## Design Rationale

### Why Technology-First Positioning?

The rebrand reflects MRECAI's strategic shift to lead with technology and AI consulting services. This positioning:
- Differentiates from traditional financial services firms
- Aligns with market demand for technology solutions
- Positions financial services as value-added offerings
- Attracts technology-focused clients

### Why Maintain Financial Services?

Financial services remain valuable complementary offerings:
- Existing client relationships and revenue
- Integrated approach provides competitive advantage
- Cross-selling opportunities
- Comprehensive solution for business clients

### Why Hierarchical Service Structure?

The two-tier service hierarchy:
- Provides clear prioritization for users
- Enables systematic implementation across components
- Supports SEO and content strategy
- Allows flexible presentation while maintaining consistency

### Why Property-Based Testing?

Property-based testing is essential for this rebrand because:
- Service ordering must be consistent across all components
- Content ordering rules apply to many different pages
- Testing all combinations manually is impractical
- Properties catch edge cases that unit tests might miss

The combination of unit tests (specific examples) and property tests (universal rules) provides comprehensive validation of the rebrand requirements.

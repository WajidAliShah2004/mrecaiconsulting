/**
 * Unit Tests for Service Helper Utilities
 *
 * Tests the service categorization and sorting functions to ensure
 * consistent service ordering throughout the application.
 */

import { describe, it, expect } from 'vitest';
import {
  categorizeService,
  sortServicesByCategory,
  filterServicesByCategory,
  type ServiceCategory
} from './serviceHelpers';

describe('categorizeService', () => {
  it('should categorize business management consulting as primary service', () => {
    expect(categorizeService('business-management')).toBe('primary');
  });

  it('should categorize insurance consulting as primary service', () => {
    expect(categorizeService('insurance-consulting')).toBe('primary');
  });

  it('should categorize retired ai-technology as secondary', () => {
    expect(categorizeService('ai-technology')).toBe('secondary');
  });

  it('should categorize retired automation as secondary', () => {
    expect(categorizeService('automation')).toBe('secondary');
  });

  it('should categorize retired digital-marketing as secondary', () => {
    expect(categorizeService('digital-marketing')).toBe('secondary');
  });

  it('should categorize retired video-editing as secondary', () => {
    expect(categorizeService('video-editing')).toBe('secondary');
  });

  it('should categorize tax-accounting as secondary service', () => {
    expect(categorizeService('tax-accounting')).toBe('secondary');
  });

  it('should categorize accounting-services as secondary service', () => {
    expect(categorizeService('accounting-services')).toBe('secondary');
  });

  it('should categorize unknown services as secondary by default', () => {
    expect(categorizeService('unknown-service')).toBe('secondary');
  });

  it('should handle empty string as secondary service', () => {
    expect(categorizeService('')).toBe('secondary');
  });
});

describe('sortServicesByCategory', () => {
  it('should place primary services before secondary services', () => {
    const services = [
      { id: 'tax-accounting', title: 'Tax Services' },
      { id: 'business-management', title: 'Business Management Consulting' },
      { id: 'accounting-services', title: 'Bookkeeping & Accounting' },
      { id: 'insurance-consulting', title: 'Insurance & Risk Architecture' }
    ];

    const sorted = sortServicesByCategory(services);

    expect(sorted[0].id).toBe('business-management');
    expect(sorted[1].id).toBe('insurance-consulting');
    expect(sorted[2].id).toBe('tax-accounting');
    expect(sorted[3].id).toBe('accounting-services');
  });

  it('should maintain order within same category', () => {
    const services = [
      { id: 'insurance-consulting', title: 'Insurance & Risk Architecture' },
      { id: 'business-management', title: 'Business Management Consulting' }
    ];

    const sorted = sortServicesByCategory(services);

    // All are primary, so order should be maintained
    expect(sorted[0].id).toBe('insurance-consulting');
    expect(sorted[1].id).toBe('business-management');
  });

  it('should handle empty array', () => {
    const services: Array<{ id: string; title: string }> = [];
    const sorted = sortServicesByCategory(services);
    expect(sorted).toEqual([]);
  });

  it('should handle array with only primary services', () => {
    const services = [
      { id: 'business-management', title: 'Business Management Consulting' },
      { id: 'insurance-consulting', title: 'Insurance & Risk Architecture' }
    ];

    const sorted = sortServicesByCategory(services);
    expect(sorted).toHaveLength(2);
    expect(sorted[0].id).toBe('business-management');
    expect(sorted[1].id).toBe('insurance-consulting');
  });

  it('should handle array with only secondary services', () => {
    const services = [
      { id: 'tax-accounting', title: 'Tax Services' },
      { id: 'accounting-services', title: 'Bookkeeping & Accounting' }
    ];

    const sorted = sortServicesByCategory(services);
    expect(sorted).toHaveLength(2);
    expect(sorted[0].id).toBe('tax-accounting');
    expect(sorted[1].id).toBe('accounting-services');
  });

  it('should not mutate original array', () => {
    const services = [
      { id: 'tax-accounting', title: 'Tax Services' },
      { id: 'business-management', title: 'Business Management Consulting' }
    ];

    const original = [...services];
    sortServicesByCategory(services);

    expect(services).toEqual(original);
  });

  it('should work with services containing additional properties', () => {
    const services = [
      { id: 'tax-accounting', title: 'Tax Services', description: 'Tax help', icon: 'tax-icon' },
      { id: 'business-management', title: 'Business Management Consulting', description: 'Systems-first consulting', icon: 'briefcase-icon' }
    ];

    const sorted = sortServicesByCategory(services);

    expect(sorted[0].id).toBe('business-management');
    expect(sorted[0].description).toBe('Systems-first consulting');
    expect(sorted[1].id).toBe('tax-accounting');
    expect(sorted[1].description).toBe('Tax help');
  });
});

describe('filterServicesByCategory', () => {
  const services = [
    { id: 'business-management', title: 'Business Management Consulting' },
    { id: 'tax-accounting', title: 'Tax Services' },
    { id: 'accounting-services', title: 'Bookkeeping & Accounting' },
    { id: 'insurance-consulting', title: 'Insurance & Risk Architecture' }
  ];

  it('should filter only primary services', () => {
    const primary = filterServicesByCategory(services, 'primary');

    expect(primary).toHaveLength(2);
    expect(primary.map(s => s.id)).toEqual([
      'business-management',
      'insurance-consulting'
    ]);
  });

  it('should filter only secondary services', () => {
    const secondary = filterServicesByCategory(services, 'secondary');

    expect(secondary).toHaveLength(2);
    expect(secondary.map(s => s.id)).toEqual([
      'tax-accounting',
      'accounting-services'
    ]);
  });

  it('should return empty array when no services match category', () => {
    const onlyPrimary = [
      { id: 'business-management', title: 'Business Management Consulting' },
      { id: 'insurance-consulting', title: 'Insurance & Risk Architecture' }
    ];

    const secondary = filterServicesByCategory(onlyPrimary, 'secondary');
    expect(secondary).toEqual([]);
  });

  it('should handle empty array', () => {
    const empty: Array<{ id: string; title: string }> = [];
    const filtered = filterServicesByCategory(empty, 'primary');
    expect(filtered).toEqual([]);
  });

  it('should preserve service properties in filtered results', () => {
    const servicesWithProps = [
      { id: 'business-management', title: 'Business Management Consulting', description: 'Systems-first consulting', order: 1 },
      { id: 'tax-accounting', title: 'Tax Services', description: 'Tax help', order: 2 }
    ];

    const primary = filterServicesByCategory(servicesWithProps, 'primary');

    expect(primary[0]).toEqual({
      id: 'business-management',
      title: 'Business Management Consulting',
      description: 'Systems-first consulting',
      order: 1
    });
  });
});

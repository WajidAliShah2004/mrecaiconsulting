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
  it('should categorize AI technology as primary service', () => {
    expect(categorizeService('ai-technology')).toBe('primary');
  });

  it('should categorize automation as primary service', () => {
    expect(categorizeService('automation')).toBe('primary');
  });

  it('should categorize retired technology-services as secondary', () => {
    expect(categorizeService('technology-services')).toBe('secondary');
  });

  it('should categorize retired digital-marketing as secondary', () => {
    expect(categorizeService('digital-marketing')).toBe('secondary');
  });

  it('should categorize retired graphic-design as secondary', () => {
    expect(categorizeService('graphic-design')).toBe('secondary');
  });

  it('should categorize retired video-editing as secondary', () => {
    expect(categorizeService('video-editing')).toBe('secondary');
  });

  it('should categorize tax-accounting as secondary service', () => {
    expect(categorizeService('tax-accounting')).toBe('secondary');
  });

  it('should categorize insurance-services as secondary service', () => {
    expect(categorizeService('insurance-services')).toBe('secondary');
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
      { id: 'ai-technology', title: 'AI Consulting' },
      { id: 'insurance-services', title: 'Insurance' },
      { id: 'automation', title: 'Automation' }
    ];

    const sorted = sortServicesByCategory(services);

    expect(sorted[0].id).toBe('ai-technology');
    expect(sorted[1].id).toBe('automation');
    expect(sorted[2].id).toBe('tax-accounting');
    expect(sorted[3].id).toBe('insurance-services');
  });

  it('should maintain order within same category', () => {
    const services = [
      { id: 'automation', title: 'Automation' },
      { id: 'ai-technology', title: 'AI Consulting' }
    ];

    const sorted = sortServicesByCategory(services);

    // All are primary, so order should be maintained
    expect(sorted[0].id).toBe('automation');
    expect(sorted[1].id).toBe('ai-technology');
  });

  it('should handle empty array', () => {
    const services: Array<{ id: string; title: string }> = [];
    const sorted = sortServicesByCategory(services);
    expect(sorted).toEqual([]);
  });

  it('should handle array with only primary services', () => {
    const services = [
      { id: 'ai-technology', title: 'AI Consulting' },
      { id: 'automation', title: 'Automation' }
    ];

    const sorted = sortServicesByCategory(services);
    expect(sorted).toHaveLength(2);
    expect(sorted[0].id).toBe('ai-technology');
    expect(sorted[1].id).toBe('automation');
  });

  it('should handle array with only secondary services', () => {
    const services = [
      { id: 'tax-accounting', title: 'Tax Services' },
      { id: 'insurance-services', title: 'Insurance' }
    ];

    const sorted = sortServicesByCategory(services);
    expect(sorted).toHaveLength(2);
    expect(sorted[0].id).toBe('tax-accounting');
    expect(sorted[1].id).toBe('insurance-services');
  });

  it('should not mutate original array', () => {
    const services = [
      { id: 'tax-accounting', title: 'Tax Services' },
      { id: 'ai-technology', title: 'AI Consulting' }
    ];

    const original = [...services];
    sortServicesByCategory(services);

    expect(services).toEqual(original);
  });

  it('should work with services containing additional properties', () => {
    const services = [
      { id: 'tax-accounting', title: 'Tax Services', description: 'Tax help', icon: 'tax-icon' },
      { id: 'ai-technology', title: 'AI Consulting', description: 'AI solutions', icon: 'ai-icon' }
    ];

    const sorted = sortServicesByCategory(services);

    expect(sorted[0].id).toBe('ai-technology');
    expect(sorted[0].description).toBe('AI solutions');
    expect(sorted[1].id).toBe('tax-accounting');
    expect(sorted[1].description).toBe('Tax help');
  });
});

describe('filterServicesByCategory', () => {
  const services = [
    { id: 'ai-technology', title: 'AI Consulting' },
    { id: 'tax-accounting', title: 'Tax Services' },
    { id: 'insurance-services', title: 'Insurance' },
    { id: 'automation', title: 'Automation' }
  ];

  it('should filter only primary services', () => {
    const primary = filterServicesByCategory(services, 'primary');

    expect(primary).toHaveLength(2);
    expect(primary.map(s => s.id)).toEqual([
      'ai-technology',
      'automation'
    ]);
  });

  it('should filter only secondary services', () => {
    const secondary = filterServicesByCategory(services, 'secondary');

    expect(secondary).toHaveLength(2);
    expect(secondary.map(s => s.id)).toEqual([
      'tax-accounting',
      'insurance-services'
    ]);
  });

  it('should return empty array when no services match category', () => {
    const onlyPrimary = [
      { id: 'ai-technology', title: 'AI Consulting' },
      { id: 'automation', title: 'Automation' }
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
      { id: 'ai-technology', title: 'AI Consulting', description: 'AI solutions', order: 1 },
      { id: 'tax-accounting', title: 'Tax Services', description: 'Tax help', order: 2 }
    ];

    const primary = filterServicesByCategory(servicesWithProps, 'primary');

    expect(primary[0]).toEqual({
      id: 'ai-technology',
      title: 'AI Consulting',
      description: 'AI solutions',
      order: 1
    });
  });
});

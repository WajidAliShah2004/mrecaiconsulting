/**
 * Service Helper Utilities
 *
 * Provides utility functions for service categorization and sorting
 * to maintain consistent service ordering throughout the application.
 *
 * Primary Services (Tax, Insurance & Accounting): Business Management Consulting,
 * Insurance & Risk Architecture
 *
 * Secondary Services (Complementary): Tax Services, Bookkeeping & Accounting,
 * and other financial services
 */

/**
 * Service category type
 * - primary: Core consulting and insurance services (Business Management Consulting, Insurance & Risk Architecture)
 * - secondary: Complementary financial services (Tax, Bookkeeping, Wealth Planning, etc.)
 */
export type ServiceCategory = 'primary' | 'secondary';

/**
 * Interface for services with category information
 */
export interface CategorizedService {
  id: string;
  category: ServiceCategory;
  order: number;
  [key: string]: any;
}

/**
 * List of Primary Service IDs (Consulting & Insurance)
 */
const PRIMARY_SERVICE_IDS = [
  'business-management',
  'insurance-consulting'
] as const;

/**
 * Categorizes a service by its ID
 *
 * @param serviceId - The unique identifier of the service
 * @returns 'primary' for consulting and insurance services, 'secondary' for complementary financial services
 *
 * @example
 * categorizeService('business-management') // returns 'primary'
 * categorizeService('tax-accounting') // returns 'secondary'
 */
export const categorizeService = (serviceId: string): ServiceCategory => {
  return PRIMARY_SERVICE_IDS.includes(serviceId as any) ? 'primary' : 'secondary';
};

/**
 * Sorts an array of services by category, placing Primary Services before Secondary Services
 *
 * @param services - Array of services to sort
 * @returns Sorted array with Primary Services first, Secondary Services second
 *
 * @example
 * const services = [
 *   { id: 'tax-accounting', title: 'Tax Services' },
 *   { id: 'business-management', title: 'Business Management Consulting' }
 * ];
 * sortServicesByCategory(services);
 * // Returns: [{ id: 'business-management', ... }, { id: 'tax-accounting', ... }]
 */
export const sortServicesByCategory = <T extends { id: string }>(
  services: T[]
): T[] => {
  return [...services].sort((a, b) => {
    const catA = categorizeService(a.id);
    const catB = categorizeService(b.id);

    // Primary services come before secondary services
    if (catA === 'primary' && catB === 'secondary') return -1;
    if (catA === 'secondary' && catB === 'primary') return 1;

    // Same category, maintain original order
    return 0;
  });
};

/**
 * Filters services by category
 *
 * @param services - Array of services to filter
 * @param category - Category to filter by ('primary' or 'secondary')
 * @returns Array containing only services of the specified category
 *
 * @example
 * const services = [
 *   { id: 'business-management', title: 'Business Management Consulting' },
 *   { id: 'tax-accounting', title: 'Tax Services' }
 * ];
 * filterServicesByCategory(services, 'primary');
 * // Returns: [{ id: 'business-management', title: 'Business Management Consulting' }]
 */
export const filterServicesByCategory = <T extends { id: string }>(
  services: T[],
  category: ServiceCategory
): T[] => {
  return services.filter(service => categorizeService(service.id) === category);
};

/**
 * Vitest Environment Type Declarations
 * 
 * Extends Vitest's Assertion interface with @testing-library/jest-dom matchers
 */

import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare module 'vitest' {
  interface Assertion<T = any> extends TestingLibraryMatchers<typeof expect.stringContaining, T> {}
  interface AsymmetricMatchersContaining extends TestingLibraryMatchers<any, any> {}
}

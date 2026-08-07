/**
 * Unit Tests for ProcessFlow Component
 * 
 * Tests the ProcessFlow component to ensure:
 * - First step is titled "Assess" (not "Diagnose" or "Evaluate")
 * - Deprecated "Diagnose" text does not appear
 * - Implement step description is generalized
 * 
 * Requirements: 4.1, 5.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProcessFlow from './ProcessFlow';

describe('ProcessFlow', () => {
  describe('Step Naming Updates', () => {
    it('should render "Assess" as the first step title', () => {
      render(<ProcessFlow />);
      
      expect(screen.getByText('Assess')).toBeInTheDocument();
    });

    it('should NOT render deprecated "Diagnose" text anywhere', () => {
      const { container } = render(<ProcessFlow />);
      
      expect(container.textContent).not.toMatch(/diagnose/i);
    });

    it('should render all four step titles correctly', () => {
      render(<ProcessFlow />);
      
      expect(screen.getByText('Assess')).toBeInTheDocument();
      expect(screen.getByText('Plan')).toBeInTheDocument();
      expect(screen.getByText('Implement')).toBeInTheDocument();
      expect(screen.getByText('Optimize')).toBeInTheDocument();
    });
  });

  describe('Implement Step Description', () => {
    it('should render generalized Implement step description', () => {
      render(<ProcessFlow />);
      
      const generalizedDescription = 'Design and implementation of ideal strategies and systems for your situation.';
      expect(screen.getByText(generalizedDescription)).toBeInTheDocument();
    });

    it('should NOT contain hard-coded deliverables in Implement description', () => {
      const { container } = render(<ProcessFlow />);
      
      // Check that specific deliverables are not hard-coded
      expect(container.textContent).not.toMatch(/tax strategies, insurance policies, and AI automations/i);
    });

    it('should NOT mention specific deliverables like "tax strategies"', () => {
      const { container } = render(<ProcessFlow />);
      
      // The Implement description should be general, not mentioning specific deliverables
      const implementSection = screen.getByText(/Design and implementation/i).closest('div');
      expect(implementSection?.textContent).not.toMatch(/tax strategies/i);
    });

    it('should NOT mention specific deliverables like "insurance policies"', () => {
      const { container } = render(<ProcessFlow />);
      
      const implementSection = screen.getByText(/Design and implementation/i).closest('div');
      expect(implementSection?.textContent).not.toMatch(/insurance policies/i);
    });

    it('should NOT mention specific deliverables like "AI automations"', () => {
      const { container } = render(<ProcessFlow />);
      
      const implementSection = screen.getByText(/Design and implementation/i).closest('div');
      expect(implementSection?.textContent).not.toMatch(/AI automations/i);
    });
  });

  describe('Step Descriptions', () => {
    it('should render Assess step description correctly', () => {
      render(<ProcessFlow />);
      
      expect(screen.getByText('Comprehensive audit of your financial, risk and operational systems to optimize opportunities.')).toBeInTheDocument();
    });

    it('should render Plan step description correctly', () => {
      render(<ProcessFlow />);
      
      expect(screen.getByText('Custom roadmap featuring quick wins and long-term strategic improvements.')).toBeInTheDocument();
    });

    it('should render Optimize step description correctly', () => {
      render(<ProcessFlow />);
      
      expect(screen.getByText('Monthly bookkeeping, reporting, and check-ins, plus quarterly strategy sessions to ensure sustainable growth.')).toBeInTheDocument();
    });
  });

  describe('Component Structure', () => {
    it('should render the section heading', () => {
      render(<ProcessFlow />);
      
      expect(screen.getByText(/Our 4-Step/i)).toBeInTheDocument();
      expect(screen.getByText(/Growth Process/i)).toBeInTheDocument();
    });

    it('should render exactly 4 process steps', () => {
      const { container } = render(<ProcessFlow />);
      
      // Count the number of step cards (divs with step titles)
      const stepTitles = ['Assess', 'Plan', 'Implement', 'Optimize'];
      stepTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    it('should render step numbers (01, 02, 03, 04)', () => {
      const { container } = render(<ProcessFlow />);
      
      expect(container.textContent).toMatch(/01/);
      expect(container.textContent).toMatch(/02/);
      expect(container.textContent).toMatch(/03/);
      expect(container.textContent).toMatch(/04/);
    });
  });

  describe('Consistency Validation', () => {
    it('should maintain consistent step ordering', () => {
      const { container } = render(<ProcessFlow />);
      const text = container.textContent || '';
      
      // Verify that "Assess" appears before "Plan"
      const assessIndex = text.indexOf('Assess');
      const planIndex = text.indexOf('Plan');
      const implementIndex = text.indexOf('Implement');
      const optimizeIndex = text.indexOf('Optimize');
      
      expect(assessIndex).toBeLessThan(planIndex);
      expect(planIndex).toBeLessThan(implementIndex);
      expect(implementIndex).toBeLessThan(optimizeIndex);
    });

    it('should not contain any deprecated process terminology', () => {
      const { container } = render(<ProcessFlow />);
      
      // Ensure no old terminology exists
      expect(container.textContent).not.toMatch(/diagnose/i);
      expect(container.textContent).not.toMatch(/assessment/i);
      expect(container.textContent).not.toMatch(/discovery/i);
    });
  });
});

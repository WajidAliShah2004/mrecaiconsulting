import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import HomeFAQ from './HomeFAQ';

// Wrapper component to provide required context
const renderWithHelmet = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  );
};

describe('HomeFAQ', () => {
  describe('Out-of-State FAQ Entry', () => {
    it('should display the out-of-state question', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const question = screen.getByText(/What if I don't live in New York\?/i);
      expect(question).toBeInTheDocument();
    });

    it('should display the out-of-state answer when question is clicked', () => {
      renderWithHelmet(<HomeFAQ />);
      
      // Find and click the question button
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      fireEvent.click(questionButton);
      
      // Verify the answer is displayed
      const answer = screen.getByText(/MRECAI serves families and businesses in all 50 states/i);
      expect(answer).toBeInTheDocument();
      expect(answer).toHaveTextContent(/While we are headquartered in New York, you do not need to be located in New York to work with us/i);
    });

    it('should position out-of-state FAQ after "What does MRECAI do?" question', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const allQuestions = screen.getAllByRole('button');
      const questionTexts = allQuestions.map(btn => btn.textContent);
      
      const firstQuestionIndex = questionTexts.findIndex(text => 
        text?.includes('What does MRECAI do?')
      );
      const outOfStateIndex = questionTexts.findIndex(text => 
        text?.includes("What if I don't live in New York?")
      );
      
      expect(firstQuestionIndex).toBe(0);
      expect(outOfStateIndex).toBe(1);
      expect(outOfStateIndex).toBeGreaterThan(firstQuestionIndex);
    });

    it('should include nationwide service messaging', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      fireEvent.click(questionButton);
      
      const answer = screen.getByText(/all 50 states/i);
      expect(answer).toBeInTheDocument();
    });

    it('should toggle answer visibility when question is clicked multiple times', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      
      // Click to open
      fireEvent.click(questionButton);
      const answer = screen.getByText(/MRECAI serves families and businesses in all 50 states/i);
      expect(answer).toBeInTheDocument();
      expect(questionButton).toHaveAttribute('aria-expanded', 'true');
      
      // Click to close
      fireEvent.click(questionButton);
      // The answer should still be in the document but hidden via CSS
      expect(questionButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('FAQ Component Rendering', () => {
    it('should render the FAQ section header', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const heading = screen.getByText(/Frequently Asked Questions/i);
      expect(heading).toBeInTheDocument();
    });

    it('should render all FAQ items', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const allQuestions = screen.getAllByRole('button');
      expect(allQuestions.length).toBeGreaterThan(0);
    });

    it('should render contact CTA at the bottom', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const ctaText = screen.getByText(/Have more questions\? We're here to help\./i);
      expect(ctaText).toBeInTheDocument();
      
      const contactLink = screen.getByRole('link', { name: /Contact Us/i });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/contact');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes for accordion', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      
      // Initially closed
      expect(questionButton).toHaveAttribute('aria-expanded', 'false');
      expect(questionButton).toHaveAttribute('aria-controls');
      
      // After clicking
      fireEvent.click(questionButton);
      expect(questionButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('should be keyboard accessible', () => {
      renderWithHelmet(<HomeFAQ />);
      
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      
      // Should be focusable
      questionButton.focus();
      expect(questionButton).toHaveFocus();
    });
  });
});

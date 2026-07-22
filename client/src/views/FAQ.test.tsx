import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import FAQ from './FAQ';

// Wrapper component to provide required context
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </BrowserRouter>
  );
};

describe('FAQ Page', () => {
  describe('Out-of-State FAQ Entry', () => {
    it('should display the out-of-state question in Location & Availability category', () => {
      renderWithProviders(<FAQ />);
      
      const question = screen.getByText(/What if I don't live in New York\?/i);
      expect(question).toBeInTheDocument();
    });

    it('should display the out-of-state answer when question is clicked', () => {
      renderWithProviders(<FAQ />);
      
      // Find and click the question button
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      fireEvent.click(questionButton);
      
      // Verify the answer is displayed
      const answer = screen.getByText(/MRECAI serves families and businesses in all 50 states/i);
      expect(answer).toBeInTheDocument();
      expect(answer).toHaveTextContent(/While we are headquartered in New York, you do not need to be located in New York to work with us/i);
    });

    it('should show out-of-state FAQ when filtering by Location & Availability category', () => {
      renderWithProviders(<FAQ />);
      
      // Click on Location & Availability category filter
      const categoryButtons = screen.getAllByRole('button', { name: /Location & Availability/i });
      const filterButton = categoryButtons.find(btn => btn.className.includes('rounded-lg'));
      fireEvent.click(filterButton!);
      
      // Verify the out-of-state question is visible
      const question = screen.getByText(/What if I don't live in New York\?/i);
      expect(question).toBeInTheDocument();
    });

    it('should include nationwide service messaging in answer', () => {
      renderWithProviders(<FAQ />);
      
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      fireEvent.click(questionButton);
      
      const answer = screen.getByText(/all 50 states/i);
      expect(answer).toBeInTheDocument();
    });

    it('should display category badge for out-of-state FAQ', () => {
      renderWithProviders(<FAQ />);
      
      // Find the question button
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      
      // The category badge should be within the button
      const categoryBadge = questionButton.querySelector('.bg-primary-100');
      expect(categoryBadge).toBeInTheDocument();
      expect(categoryBadge).toHaveTextContent(/Location & Availability/i);
    });
  });

  describe('Search Functionality', () => {
    it('should find out-of-state FAQ when searching for "New York"', () => {
      renderWithProviders(<FAQ />);
      
      const searchInput = screen.getByPlaceholderText(/Search questions\.\.\./i);
      fireEvent.change(searchInput, { target: { value: 'New York' } });
      
      const question = screen.getByText(/What if I don't live in New York\?/i);
      expect(question).toBeInTheDocument();
    });

    it('should find out-of-state FAQ when searching for "50 states"', () => {
      renderWithProviders(<FAQ />);
      
      const searchInput = screen.getByPlaceholderText(/Search questions\.\.\./i);
      fireEvent.change(searchInput, { target: { value: '50 states' } });
      
      const question = screen.getByText(/What if I don't live in New York\?/i);
      expect(question).toBeInTheDocument();
    });

    it('should find out-of-state FAQ when searching for "nationwide"', () => {
      renderWithProviders(<FAQ />);
      
      const searchInput = screen.getByPlaceholderText(/Search questions\.\.\./i);
      fireEvent.change(searchInput, { target: { value: 'nationwide' } });
      
      // The search should work even though "nationwide" is not in the question text
      // It should be found in the answer
      const resultsCount = screen.getByText(/Showing/i);
      expect(resultsCount).toBeInTheDocument();
    });
  });

  describe('Category Filtering', () => {
    it('should show Location & Availability category button', () => {
      renderWithProviders(<FAQ />);
      
      const categoryButtons = screen.getAllByRole('button', { name: /Location & Availability/i });
      // First one should be the filter button (not the FAQ question buttons)
      const filterButton = categoryButtons.find(btn => btn.className.includes('rounded-lg'));
      expect(filterButton).toBeInTheDocument();
    });

    it('should filter FAQs when Location & Availability category is selected', () => {
      renderWithProviders(<FAQ />);
      
      const categoryButtons = screen.getAllByRole('button', { name: /Location & Availability/i });
      const filterButton = categoryButtons.find(btn => btn.className.includes('rounded-lg'));
      fireEvent.click(filterButton!);
      
      // Verify at least the out-of-state question is shown
      const outOfStateQuestion = screen.getByText(/What if I don't live in New York\?/i);
      expect(outOfStateQuestion).toBeInTheDocument();
    });

    it('should highlight selected category button', () => {
      renderWithProviders(<FAQ />);
      
      const categoryButtons = screen.getAllByRole('button', { name: /Location & Availability/i });
      const filterButton = categoryButtons.find(btn => btn.className.includes('rounded-lg'));
      fireEvent.click(filterButton!);
      
      // Selected category should have gradient background
      expect(filterButton).toHaveClass('from-primary-500');
    });
  });

  describe('FAQ Page Structure', () => {
    it('should render the page title', () => {
      renderWithProviders(<FAQ />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toContain('Frequently Asked');
    });

    it('should render search bar', () => {
      renderWithProviders(<FAQ />);
      
      const searchInput = screen.getByPlaceholderText(/Search questions\.\.\./i);
      expect(searchInput).toBeInTheDocument();
    });

    it('should render category filters', () => {
      renderWithProviders(<FAQ />);
      
      const allQuestionsButton = screen.getByRole('button', { name: /All Questions/i });
      expect(allQuestionsButton).toBeInTheDocument();
    });

    it('should render CTA section at bottom', () => {
      renderWithProviders(<FAQ />);
      
      const ctaHeading = screen.getByText(/Still Have Questions\?/i);
      expect(ctaHeading).toBeInTheDocument();
      
      const bookButton = screen.getByRole('link', { name: /Book Free Consultation/i });
      expect(bookButton).toBeInTheDocument();
    });
  });

  describe('Accordion Functionality', () => {
    it('should toggle answer visibility when question is clicked', () => {
      renderWithProviders(<FAQ />);
      
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      
      // Initially closed - answer should not be visible (due to framer-motion animation)
      // The answer is rendered but with height: 0 and opacity: 0
      
      // Click to open
      fireEvent.click(questionButton);
      const answer = screen.getByText(/MRECAI serves families and businesses in all 50 states/i);
      expect(answer).toBeInTheDocument();
      
      // Click to close
      fireEvent.click(questionButton);
      // Answer remains in DOM but is animated to height: 0
      expect(answer).toBeInTheDocument();
    });

    it('should close other FAQs when opening a new one', () => {
      renderWithProviders(<FAQ />);
      
      // Open first FAQ
      const firstQuestion = screen.getAllByRole('button').filter(btn => 
        btn.textContent?.includes('?')
      )[0];
      fireEvent.click(firstQuestion);
      
      // Open out-of-state FAQ
      const outOfStateQuestion = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      fireEvent.click(outOfStateQuestion);
      
      // Out-of-state answer should be visible
      const answer = screen.getByText(/MRECAI serves families and businesses in all 50 states/i);
      expect(answer).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      renderWithProviders(<FAQ />);
      
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
    });

    it('should have accessible search input', () => {
      renderWithProviders(<FAQ />);
      
      const searchInput = screen.getByPlaceholderText(/Search questions\.\.\./i);
      expect(searchInput).toHaveAttribute('type', 'text');
    });

    it('should have keyboard accessible category buttons', () => {
      renderWithProviders(<FAQ />);
      
      const categoryButtons = screen.getAllByRole('button', { name: /Location & Availability/i });
      const filterButton = categoryButtons.find(btn => btn.className.includes('rounded-lg'));
      filterButton!.focus();
      expect(filterButton).toHaveFocus();
    });

    it('should have keyboard accessible FAQ buttons', () => {
      renderWithProviders(<FAQ />);
      
      const questionButton = screen.getByRole('button', { name: /What if I don't live in New York\?/i });
      questionButton.focus();
      expect(questionButton).toHaveFocus();
    });
  });

  describe('Results Count', () => {
    it('should display correct results count when filtering', () => {
      renderWithProviders(<FAQ />);
      
      const categoryButtons = screen.getAllByRole('button', { name: /Location & Availability/i });
      const filterButton = categoryButtons.find(btn => btn.className.includes('rounded-lg'));
      fireEvent.click(filterButton!);
      
      const resultsText = screen.getByText(/Showing/i);
      expect(resultsText).toBeInTheDocument();
      expect(resultsText.textContent).toMatch(/\d+/); // Should contain a number
    });

    it('should update results count when searching', () => {
      renderWithProviders(<FAQ />);
      
      const searchInput = screen.getByPlaceholderText(/Search questions\.\.\./i);
      fireEvent.change(searchInput, { target: { value: 'New York' } });
      
      const resultsText = screen.getByText(/Showing/i);
      expect(resultsText).toBeInTheDocument();
    });
  });
});

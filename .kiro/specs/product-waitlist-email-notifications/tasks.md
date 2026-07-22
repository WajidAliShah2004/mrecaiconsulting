# Implementation Plan: Product Waitlist Email Notifications

## Overview

This implementation plan breaks down the product waitlist email notifications feature into discrete, actionable coding tasks. The feature adds email notification functionality to the A.T.L.A.S. ENGINE waitlist form, following the established patterns from the contact form implementation.

**Implementation Language:** TypeScript (React + Express)

**Key Components:**
- Backend API endpoint for waitlist submissions
- Database schema for storing waitlist entries
- Email templates for admin notifications and user confirmations
- Frontend integration with Products page
- Comprehensive testing (unit tests and property-based tests)

## Tasks

- [ ] 1. Set up database schema and configuration
  - Create Supabase migration for `waitlist` table with id, email, and created_at columns
  - Add indexes on email and created_at fields
  - Configure Row Level Security (RLS) policies for server-only access
  - Verify database connection and table creation
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 2. Implement backend email templates
  - [ ] 2.1 Add waitlistNotification email template to emailService.ts
    - Create template with admin notification subject "New A.T.L.A.S. ENGINE Waitlist Signup"
    - Include email address and timestamp fields in HTML template
    - Match existing email template styling (navy blue gradient header, white content area)
    - Include MRECAI branding and footer with contact information
    - _Requirements: 2.3, 2.4, 2.5, 2.6, 2.7, 7.1, 7.2, 7.4, 7.5, 7.6, 7.7_
  
  - [ ] 2.2 Add waitlistConfirmation email template to emailService.ts
    - Create template with user confirmation subject "You're on the A.T.L.A.S. ENGINE Waitlist!"
    - Include personalized greeting and waitlist confirmation message
    - Add "before June 1, 2026" timeline information
    - Include contact information (matthew@mrecai.com, 929-919-3574)
    - Match existing email template styling and branding
    - _Requirements: 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 7.1, 7.3, 7.4, 7.5, 7.6, 7.7_

- [ ] 3. Create backend waitlist controller
  - [ ] 3.1 Create server/src/controllers/waitlistController.ts with createWaitlistEntry function
    - Import required dependencies (express, express-validator, supabase, emailService)
    - Implement validation error handling using validationResult
    - Sanitize and normalize email (trim whitespace, convert to lowercase)
    - Insert record into Supabase waitlist table with email and timestamp
    - Handle database errors and return appropriate error responses
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 6.1, 6.5, 6.6, 6.7, 9.1, 9.2_
  
  - [ ] 3.2 Add email notification triggers to waitlistController
    - Send admin notification email to ADMIN_EMAIL or default matthew@mrecai.com
    - Send user confirmation email to submitted email address
    - Wrap email sending in try-catch to make non-blocking
    - Log email errors without failing the request
    - Return 201 success response with waitlist entry data
    - _Requirements: 1.6, 1.7, 2.1, 2.2, 2.8, 3.1, 3.9, 9.3, 10.1, 10.2_
  
  - [ ]* 3.3 Write unit tests for waitlistController
    - Test valid email returns 201 status code
    - Test missing email returns 400 status code
    - Test invalid email format returns 400 status code
    - Test database error returns 500 status code
    - Test default admin email when ADMIN_EMAIL not set
    - Test email normalization (trim and lowercase)
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 6.6, 6.7, 10.2_

- [ ] 4. Create backend waitlist routes
  - [ ] 4.1 Create server/src/routes/waitlistRoutes.ts with POST route
    - Import express, express-validator, waitlistController, and rateLimiter
    - Define POST route at '/' with formLimiter middleware (5 requests per 15 minutes)
    - Add email validation using body('email').isEmail().normalizeEmail()
    - Connect route to createWaitlistEntry controller function
    - Export router as default
    - _Requirements: 1.1, 8.1, 8.2, 8.3_
  
  - [ ] 4.2 Register waitlist routes in server/src/server.ts
    - Import waitlistRoutes from './routes/waitlistRoutes'
    - Mount routes at '/api/waitlist' using app.use()
    - Follow same pattern as existing contact, newsletter, and quote routes
    - _Requirements: 8.4, 8.5, 8.6_
  
  - [ ]* 4.3 Write property test for invalid email validation
    - **Property 1: Invalid Email Validation**
    - **Validates: Requirements 1.2, 1.3**
    - Use fast-check to generate invalid email inputs
    - Verify all invalid emails return 400 status code
    - Run 100 iterations with different invalid email formats

  - [ ]* 4.4 Write property test for valid email database storage
    - **Property 2: Valid Email Database Storage**
    - **Validates: Requirements 1.4, 1.6, 6.1**
    - Use fast-check to generate valid email addresses
    - Verify all valid emails return 201 and are saved to database
    - Run 100 iterations with randomized valid emails

- [ ] 5. Checkpoint - Backend API complete
  - Ensure all backend tests pass
  - Manually test POST /api/waitlist endpoint with valid and invalid emails
  - Verify database entries are created correctly
  - Verify admin and user emails are sent
  - Ask the user if questions arise

- [ ] 6. Implement frontend API client method
  - [ ] 6.1 Add submitWaitlist function to client/src/services/api.ts
    - Create async function that accepts { email: string } parameter
    - Make POST request to '/waitlist' endpoint
    - Return Promise<ApiResponse<any>> with response data
    - Follow same pattern as existing submitContactForm and submitQuoteRequest methods
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  
  - [ ] 6.2 Add TypeScript type for WaitlistSubmission
    - Define interface with email: string field
    - Export interface for use in components
    - _Requirements: 5.6_
  
  - [ ]* 6.3 Write unit tests for API client method
    - Test submitWaitlist makes POST request to correct endpoint
    - Test request body includes email field
    - Test function returns promise with response data
    - Mock axios to avoid actual API calls

- [ ] 7. Update Products page with API integration
  - [ ] 7.1 Add state management to Products.tsx
    - Import submitWaitlist from api.ts
    - Add loading state (useState<boolean>(false))
    - Add error state (useState<string | null>(null))
    - Keep existing email and submitted states
    - _Requirements: 4.3, 4.6_
  
  - [ ] 7.2 Update handleSubmit function to call API
    - Set loading to true at start
    - Clear any previous errors
    - Call submitWaitlist with email in try block
    - Set submitted to true on success
    - Catch errors and set error message with matthew@mrecai.com contact info
    - Set loading to false in finally block
    - _Requirements: 4.1, 4.2, 4.4, 4.5, 4.6, 4.7, 4.8_
  
  - [ ] 7.3 Add loading state to submit button
    - Disable button when loading is true
    - Show loading text or spinner when loading
    - Maintain existing button styling and animations
    - _Requirements: 4.3_
  
  - [ ] 7.4 Add error message display
    - Show error message below form when error state is not null
    - Style error message with red/warning colors
    - Include guidance to contact matthew@mrecai.com if problem persists
    - Clear error when user retries submission
    - _Requirements: 4.6, 4.7, 9.4, 9.5, 9.6_
  
  - [ ]* 7.5 Write unit tests for Products page
    - Test form submission calls submitWaitlist with email
    - Test loading state is shown during API call
    - Test success message displayed after successful submission
    - Test submitted state set to true after success
    - Test error message displayed on API failure
    - Test error message includes contact information

  - [ ]* 7.6 Write property test for request body transmission
    - **Property 3: Request Body Email Transmission**
    - **Validates: Requirements 4.2**
    - Use fast-check to generate various email strings
    - Verify frontend includes exact email value in API request body
    - Run 100 iterations with different email formats

  - [ ]* 7.7 Write property test for network error resilience
    - **Property 9: Network Error Resilience**
    - **Validates: Requirements 4.6, 4.8**
    - Simulate network errors and API failures
    - Verify frontend handles errors gracefully without crashing
    - Verify error message is displayed to user
    - Run 100 iterations with different error scenarios

- [ ] 8. Checkpoint - Frontend integration complete
  - Ensure all frontend tests pass
  - Manually test waitlist form on Products page
  - Verify loading state appears during submission
  - Verify success message appears after submission
  - Verify error handling works for invalid emails and network errors
  - Ask the user if questions arise

- [ ] 9. Implement comprehensive property-based tests
  - [ ]* 9.1 Write property test for database record completeness
    - **Property 4: Database Record Completeness**
    - **Validates: Requirements 6.2, 6.3, 6.4**
    - Verify all database records contain id, email, and created_at
    - Use fast-check to generate various valid emails
    - Run 100 iterations

  - [ ]* 9.2 Write property test for email normalization
    - **Property 5: Email Normalization**
    - **Validates: Requirements 6.6, 6.7**
    - Generate emails with whitespace and mixed case
    - Verify all emails are trimmed and lowercased before saving
    - Run 100 iterations with various whitespace and case combinations

  - [ ]* 9.3 Write property test for admin notification content
    - **Property 6: Admin Notification Content**
    - **Validates: Requirements 2.4, 2.5**
    - Verify admin notification emails contain email address and timestamp
    - Use fast-check to generate various valid emails
    - Run 100 iterations

  - [ ]* 9.4 Write property test for user confirmation delivery
    - **Property 7: User Confirmation Delivery**
    - **Validates: Requirements 3.1**
    - Verify confirmation email is sent to submitted email address
    - Use fast-check to generate various valid emails
    - Run 100 iterations

  - [ ]* 9.5 Write property test for email failure non-blocking
    - **Property 8: Email Failure Non-Blocking**
    - **Validates: Requirements 2.8, 3.9, 9.3**
    - Simulate email sending failures
    - Verify system still returns 201 success response
    - Verify error is logged but request succeeds
    - Run 100 iterations

  - [ ]* 9.6 Write property test for user-friendly error messages
    - **Property 10: User-Friendly Error Messages**
    - **Validates: Requirements 9.4, 9.5, 9.6**
    - Verify error messages are user-friendly (no technical details)
    - Verify error messages include actionable guidance
    - Test various error scenarios
    - Run 100 iterations

  - [ ]* 9.7 Write property test for validation error descriptiveness
    - **Property 11: Validation Error Descriptiveness**
    - **Validates: Requirements 9.1**
    - Verify validation errors include field-specific messages
    - Use fast-check to generate various invalid inputs
    - Run 100 iterations

- [ ] 10. Final integration and verification
  - [ ] 10.1 Run all tests and verify coverage
    - Execute npm test to run all unit and property tests
    - Verify test coverage > 80% for new code
    - Fix any failing tests
    - _Requirements: All_
  
  - [ ] 10.2 Verify environment configuration
    - Check ADMIN_EMAIL environment variable (or confirm default)
    - Verify SMTP2GO_API_KEY is configured
    - Verify SUPABASE_URL and SUPABASE_SERVICE_KEY are set
    - Test email delivery with real SMTP2GO account
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_
  
  - [ ] 10.3 End-to-end manual testing
    - Submit valid email and verify complete flow
    - Check database entry was created
    - Verify admin notification email received
    - Verify user confirmation email received
    - Test error scenarios (invalid email, network errors)
    - Verify rate limiting works (5 requests per 15 minutes)
    - _Requirements: All_

- [ ] 11. Final checkpoint - Feature complete
  - Ensure all tests pass
  - Verify all acceptance criteria met
  - Confirm email templates render correctly across email clients
  - Verify database schema is production-ready
  - Ask the user if ready for deployment

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property-based tests validate universal correctness properties across randomized inputs
- Unit tests validate specific examples, edge cases, and integration points
- Checkpoints ensure incremental validation and provide opportunities for user feedback
- Email sending is non-blocking - failures are logged but don't fail the request
- Rate limiting prevents abuse (5 requests per 15 minutes per IP)
- All email templates follow existing MRECAI branding and styling

## Testing Strategy

**Unit Tests:** Verify specific examples, edge cases, and integration points
- Controller validation and error handling
- Route registration and middleware
- API client method signatures
- UI state management

**Property-Based Tests:** Verify universal properties across randomized inputs
- Invalid email validation (Property 1)
- Valid email database storage (Property 2)
- Request body transmission (Property 3)
- Database record completeness (Property 4)
- Email normalization (Property 5)
- Admin notification content (Property 6)
- User confirmation delivery (Property 7)
- Email failure non-blocking (Property 8)
- Network error resilience (Property 9)
- User-friendly error messages (Property 10)
- Validation error descriptiveness (Property 11)

## Implementation Order

1. **Database First:** Set up schema before any code that writes to it
2. **Backend Core:** Controller and routes before frontend integration
3. **Email Templates:** Add templates before controller uses them
4. **Frontend Integration:** Connect UI after backend API is ready
5. **Testing:** Unit tests alongside implementation, property tests after core functionality
6. **Verification:** Manual testing and environment checks before deployment

## Success Criteria

- All acceptance criteria from requirements document are met
- All unit tests pass with >80% code coverage
- All 11 property-based tests pass with 100 iterations each
- Email delivery rate >95% (monitored via SMTP2GO)
- API response time <2 seconds
- Zero data loss for waitlist submissions
- Consistent email rendering across major email clients (Gmail, Outlook, Apple Mail)

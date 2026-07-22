# Requirements Document

## Introduction

This feature adds email notification functionality to the A.T.L.A.S. ENGINE waitlist form on the Products page. When users submit their email to join the waitlist, the system will send a notification to the admin and a confirmation to the user. This follows the existing pattern established by the contact form feature.

## Glossary

- **Waitlist_Form**: The email input form on the Products page (client/src/pages/Products.tsx) where users submit their email to join the A.T.L.A.S. ENGINE waitlist
- **Frontend**: The React TypeScript client application
- **Backend**: The Express TypeScript server application
- **Email_Service**: The existing email service (server/src/services/emailService.ts) that uses SMTP2GO API for sending emails
- **API_Client**: The axios-based API client (client/src/services/api.ts) used for making HTTP requests
- **Waitlist_Controller**: The backend controller that handles waitlist submission requests
- **Waitlist_Route**: The Express route that exposes the waitlist submission endpoint
- **Admin**: The recipient of waitlist notification emails (matthew@mrecai.com)
- **User**: The person submitting their email to join the waitlist
- **SMTP2GO**: The email service provider used for sending emails

## Requirements

### Requirement 1: Backend API Endpoint

**User Story:** As a developer, I want a backend API endpoint for waitlist submissions, so that the frontend can submit waitlist data and trigger email notifications.

#### Acceptance Criteria

1. THE Backend SHALL expose a POST endpoint at `/api/waitlist`
2. WHEN a POST request is received at `/api/waitlist`, THE Waitlist_Controller SHALL validate the request body contains an email field
3. WHEN the email field is missing or invalid, THE Waitlist_Controller SHALL return a 400 status code with validation error details
4. WHEN the email field is valid, THE Waitlist_Controller SHALL save the waitlist entry to the database
5. WHEN the database save succeeds, THE Waitlist_Controller SHALL trigger email notifications
6. WHEN all operations complete successfully, THE Waitlist_Controller SHALL return a 201 status code with success message
7. IF any error occurs during processing, THEN THE Waitlist_Controller SHALL return a 500 status code with error message

### Requirement 2: Admin Notification Email

**User Story:** As an admin, I want to receive an email notification when someone joins the waitlist, so that I can track interest and follow up with potential customers.

#### Acceptance Criteria

1. WHEN a valid waitlist submission is received, THE Email_Service SHALL send a notification email to the Admin
2. THE Email_Service SHALL use the admin email address from environment variable ADMIN_EMAIL or default to matthew@mrecai.com
3. THE notification email subject SHALL be "New A.T.L.A.S. ENGINE Waitlist Signup"
4. THE notification email body SHALL include the user's email address
5. THE notification email body SHALL include the submission timestamp
6. THE notification email body SHALL use HTML formatting consistent with existing contact form notification emails
7. THE notification email body SHALL include a branded header with "New Waitlist Signup" title
8. IF the notification email fails to send, THEN THE Backend SHALL log the error but not fail the request

### Requirement 3: User Confirmation Email

**User Story:** As a user, I want to receive a confirmation email after joining the waitlist, so that I know my submission was successful and what to expect next.

#### Acceptance Criteria

1. WHEN a valid waitlist submission is received, THE Email_Service SHALL send a confirmation email to the User's email address
2. THE confirmation email subject SHALL be "You're on the A.T.L.A.S. ENGINE Waitlist!"
3. THE confirmation email body SHALL include a personalized greeting
4. THE confirmation email body SHALL confirm the user is on the waitlist
5. THE confirmation email body SHALL state that MRECAI will reach out before June 1, 2026
6. THE confirmation email body SHALL include contact information for questions
7. THE confirmation email body SHALL use HTML formatting consistent with existing contact form confirmation emails
8. THE confirmation email body SHALL include a branded header with success indicator
9. IF the confirmation email fails to send, THEN THE Backend SHALL log the error but not fail the request

### Requirement 4: Frontend Integration

**User Story:** As a user, I want the waitlist form to submit my email to the backend, so that I can join the waitlist and receive confirmation.

#### Acceptance Criteria

1. WHEN the Waitlist_Form is submitted, THE Frontend SHALL call the waitlist API endpoint via the API_Client
2. THE Frontend SHALL send the email value in the request body
3. WHEN the API call is in progress, THE Frontend SHALL show a loading state on the submit button
4. WHEN the API call succeeds, THE Frontend SHALL display the existing success message
5. WHEN the API call succeeds, THE Frontend SHALL set the submitted state to true
6. WHEN the API call fails, THE Frontend SHALL display an error message to the user
7. THE error message SHALL include guidance to contact matthew@mrecai.com if the problem persists
8. THE Frontend SHALL handle network errors gracefully without crashing

### Requirement 5: API Client Method

**User Story:** As a developer, I want a dedicated API client method for waitlist submissions, so that the frontend can easily call the waitlist endpoint.

#### Acceptance Criteria

1. THE API_Client SHALL export a function named submitWaitlist
2. THE submitWaitlist function SHALL accept an object parameter with an email field
3. THE submitWaitlist function SHALL make a POST request to `/api/waitlist`
4. THE submitWaitlist function SHALL return a Promise that resolves to the API response
5. THE submitWaitlist function SHALL use the same error handling pattern as existing API methods
6. THE submitWaitlist function SHALL include proper TypeScript types for parameters and return values

### Requirement 6: Database Storage

**User Story:** As a business owner, I want waitlist submissions stored in the database, so that I can track and analyze waitlist signups over time.

#### Acceptance Criteria

1. WHEN a valid waitlist submission is received, THE Waitlist_Controller SHALL insert a record into the waitlist table
2. THE database record SHALL include the user's email address
3. THE database record SHALL include a timestamp of when the submission was created
4. THE database record SHALL include an auto-generated unique ID
5. WHEN the database insert fails, THE Waitlist_Controller SHALL return an error response
6. THE Waitlist_Controller SHALL trim whitespace from the email before saving
7. THE Waitlist_Controller SHALL convert the email to lowercase before saving

### Requirement 7: Email Template Consistency

**User Story:** As a brand manager, I want waitlist emails to match the existing email design, so that all customer communications have a consistent look and feel.

#### Acceptance Criteria

1. THE Email_Service SHALL define waitlist email templates in the emailTemplates object
2. THE waitlist notification template SHALL use the same HTML structure as contactNotification
3. THE waitlist confirmation template SHALL use the same HTML structure as contactConfirmation
4. THE email templates SHALL use the same color scheme (navy blue gradient header, white content area)
5. THE email templates SHALL include the MRECAI logo or branding in the header
6. THE email templates SHALL include footer with company contact information
7. THE email templates SHALL be mobile-responsive

### Requirement 8: Route Registration

**User Story:** As a developer, I want the waitlist route properly registered in the Express app, so that the endpoint is accessible to the frontend.

#### Acceptance Criteria

1. THE Backend SHALL create a waitlist routes file at server/src/routes/waitlistRoutes.ts
2. THE waitlist routes file SHALL define a POST route for `/` that calls the Waitlist_Controller
3. THE waitlist routes file SHALL include email validation middleware
4. THE Backend SHALL import and register the waitlist routes in server.ts
5. THE Backend SHALL mount the waitlist routes at `/api/waitlist`
6. THE route registration SHALL follow the same pattern as existing routes (contact, newsletter, etc.)

### Requirement 9: Error Handling

**User Story:** As a user, I want clear error messages when something goes wrong, so that I know what happened and what to do next.

#### Acceptance Criteria

1. WHEN validation fails, THE Backend SHALL return a descriptive error message indicating which field is invalid
2. WHEN the database operation fails, THE Backend SHALL return a generic error message without exposing internal details
3. WHEN email sending fails, THE Backend SHALL log the error but still return success to the user
4. THE Frontend SHALL display user-friendly error messages for all error scenarios
5. THE Frontend SHALL not expose technical error details to users
6. THE error messages SHALL include actionable guidance (e.g., "Please try again" or "Contact us at...")

### Requirement 10: Environment Configuration

**User Story:** As a system administrator, I want email configuration managed through environment variables, so that settings can be changed without code modifications.

#### Acceptance Criteria

1. THE Backend SHALL read the admin email address from the ADMIN_EMAIL environment variable
2. WHEN ADMIN_EMAIL is not set, THE Backend SHALL default to matthew@mrecai.com
3. THE Backend SHALL use existing SMTP2GO configuration from environment variables
4. THE Backend SHALL not hardcode any email addresses in the controller or service code
5. THE Backend SHALL log a warning if email configuration is missing or incomplete

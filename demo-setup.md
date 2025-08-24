# Demo Setup Guide

## Quick Start

1. **Install Dependencies** (already done):
   ```bash
   npm install
   ```

2. **Configure Email**:
   - Copy `env.example` to `.env`
   - Edit `.env` with your Gmail credentials:
     ```
     EMAIL_USER=your-actual-email@gmail.com
     EMAIL_PASS=your-gmail-app-password
     ```
   
   **Important**: For Gmail, you need to use an App Password, not your regular password.
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use that password in the `.env` file

3. **Start the Application**:
   ```bash
   npm run dev:full
   ```
   
   This starts both frontend (Vite) and backend (Express) servers.

4. **Test the Demo Request**:
   - Open http://localhost:5173 in your browser
   - Click any "Request a Demo" button
   - Enter an email address
   - Submit the form
   - Check that you receive a confirmation message
   - Verify that an email was sent to rajat@credifly.co

## Alternative: Frontend Only

If you want to test just the frontend without the backend:

```bash
npm run dev
```

The modal will open but email submission will fail (this is expected without the backend running).

## Troubleshooting

- **Email not sending**: Check your `.env` file and Gmail app password
- **Modal not opening**: Check browser console for JavaScript errors
- **Build errors**: Run `npm run build` to see detailed error messages

## Production Deployment

For production, you'll need to:
1. Set up a proper email service (SendGrid, AWS SES, etc.)
2. Deploy the backend to a hosting service
3. Update the frontend API calls to use the production backend URL
4. Build and deploy the frontend

## Security Notes

- Never commit `.env` files to version control
- Use environment variables in production
- Consider rate limiting for the demo request endpoint
- Validate email addresses on both frontend and backend

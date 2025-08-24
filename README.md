# Optivio Landing Page

A modern landing page for Optivio with demo request functionality.

## Features

- Responsive landing page with Tailwind CSS
- Demo request modal with email collection
- Email notifications sent to rajat@credifly.co
- Modern UI with smooth interactions

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your email configuration:
   ```bash
   cp env.example .env
   ```
   
   Then edit `.env` with your Gmail credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

   **Note:** For Gmail, you'll need to use an App Password, not your regular password. [Learn how to create one here](https://support.google.com/accounts/answer/185833).

### Running the Application

#### Development Mode (Frontend + Backend)
```bash
npm run dev:full
```

This will start both the Vite dev server (frontend) and the Express server (backend) concurrently.

#### Frontend Only
```bash
npm run dev
```

#### Backend Only
```bash
npm run server
```

### Building for Production

```bash
npm run build
```

## How It Works

1. Users click any "Request a Demo" button on the landing page
2. A modal opens asking for their email address
3. Upon submission, the email is sent to rajat@credifly.co
4. Users receive a confirmation message
5. The modal automatically closes after 3 seconds

## API Endpoints

- `POST /api/submit-demo-request` - Submits a demo request with email

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Express.js for backend API
- Nodemailer for email functionality
- CORS for cross-origin requests

## Environment Variables

- `EMAIL_USER` - Gmail address for sending emails
- `EMAIL_PASS` - Gmail app password
- `PORT` - Server port (default: 3001)

## Deployment

The application is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to Optivio.

# Deployment Guide for Optivio Landing Page

## 🚀 Quick Deploy Options

### Option 1: Render.com (Recommended - Free & Easy)

1. **Sign up** at [render.com](https://render.com)
2. **Connect your GitHub repository**
3. **Deploy Backend API**:
   - Create new Web Service
   - Connect to your repo
   - Set build command: `npm install`
   - Set start command: `node server.js`
   - Add environment variables:
     - `EMAIL_USER`: your-gmail@gmail.com
     - `EMAIL_PASS`: your-gmail-app-password
     - `PORT`: 10000
4. **Deploy Frontend**:
   - Create new Static Site
   - Connect to your repo
   - Set build command: `npm install && npm run build`
   - Set publish directory: `dist`
   - Add environment variable:
     - `VITE_API_URL`: https://your-backend-name.onrender.com

### Option 2: Vercel + Railway

1. **Frontend on Vercel**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```
2. **Backend on Railway**:
   - Sign up at [railway.app](https://railway.app)
   - Connect your repo
   - Set environment variables
   - Deploy

### Option 3: Netlify + Heroku

1. **Frontend on Netlify**:
   - Connect GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`
2. **Backend on Heroku**:
   - Create new app
   - Connect GitHub repo
   - Set environment variables
   - Deploy

## 🔧 Local Testing (Before Deployment)

1. **Set up environment**:
   ```bash
   cp env.example .env
   # Edit .env with your Gmail credentials
   ```

2. **Test locally**:
   ```bash
   npm run dev:full
   ```

3. **Verify functionality**:
   - Open http://localhost:5173
   - Click "Request a Demo"
   - Submit email
   - Check email delivery

## 📧 Email Configuration

### Gmail Setup (Required for testing)
1. Enable 2-factor authentication
2. Generate App Password:
   - Go to Google Account → Security
   - 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in your `.env` file

### Alternative Email Services
- **SendGrid**: More reliable for production
- **AWS SES**: Cost-effective for high volume
- **Mailgun**: Developer-friendly

## 🌐 Environment Variables

### Backend (.env)
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=3001
```

### Frontend (Vite)
```bash
VITE_API_URL=https://your-backend-url.com
```

## 🚨 Common Issues & Solutions

### Frontend Build Errors
```bash
npm run build
# Check for TypeScript errors
npx tsc --noEmit
```

### Backend Connection Issues
- Verify CORS settings
- Check API URL in frontend
- Ensure backend is running

### Email Not Sending
- Verify Gmail credentials
- Check app password setup
- Review server logs

## 📱 Testing After Deployment

1. **Frontend**: Visit your deployed frontend URL
2. **Modal**: Click any "Request a Demo" button
3. **Form**: Submit test email
4. **Email**: Check rajat@credifly.co inbox
5. **Response**: Verify success message

## 🔒 Security Considerations

- Never commit `.env` files
- Use environment variables in production
- Consider rate limiting
- Validate email inputs
- Use HTTPS in production

## 📊 Monitoring

- Check deployment logs
- Monitor email delivery
- Track API response times
- Set up error notifications

## 🆘 Need Help?

1. Check deployment logs
2. Verify environment variables
3. Test locally first
4. Check browser console for errors
5. Review server logs for backend issues

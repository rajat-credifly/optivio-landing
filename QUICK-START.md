# 🚀 Quick Start - Test Your Demo Request Feature

## ⚡ Immediate Testing (5 minutes)

### 1. Set up Email (Required)
```bash
# Copy environment template
cp env.example .env

# Edit .env with your Gmail credentials
# You MUST use a Gmail App Password, not your regular password
```

**Gmail App Password Setup:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled
3. Go to "App passwords" → Generate password for "Mail"
4. Use this generated password in your `.env` file

### 2. Test Locally
```bash
# Start both frontend and backend
npm run dev:full

# Open http://localhost:5173 in your browser
# Click any "Request a Demo" button
# Submit a test email
# Check rajat@credifly.co inbox
```

## 🌐 Deploy to Test Online (10 minutes)

### Option A: Render.com (Recommended)
1. **Sign up** at [render.com](https://render.com) (free)
2. **Connect your GitHub repo**
3. **Deploy Backend**:
   - New Web Service
   - Build: `npm install`
   - Start: `node server.js`
   - Add your `.env` variables
4. **Deploy Frontend**:
   - New Static Site
   - Build: `npm install && npm run build`
   - Publish: `dist`
   - Add: `VITE_API_URL=https://your-backend.onrender.com`

### Option B: Use the Deploy Script
```bash
./deploy.sh
# Follow the interactive prompts
```

## ✅ What You'll See

1. **Landing Page**: Professional Optivio page
2. **Modal**: Clean email collection form
3. **Email Delivery**: Sent to rajat@credifly.co
4. **Success Message**: User confirmation
5. **Auto-close**: Modal closes after 3 seconds

## 🔧 Troubleshooting

### Modal Not Opening
- Check browser console for errors
- Verify all dependencies installed: `npm install`

### Email Not Sending
- Verify Gmail credentials in `.env`
- Check backend logs
- Ensure Gmail App Password is correct

### Build Errors
```bash
npm run build
npx tsc --noEmit
```

## 📱 Test on Different Devices
- Desktop: Full experience
- Mobile: Responsive design
- Tablet: Touch-friendly interface

## 🎯 Next Steps
1. Test the demo request flow
2. Customize email template if needed
3. Deploy to production hosting
4. Set up monitoring and analytics

## 🆘 Need Help?
- Check `DEPLOYMENT.md` for detailed instructions
- Review `demo-setup.md` for configuration help
- Run `npm run dev:full` for local testing

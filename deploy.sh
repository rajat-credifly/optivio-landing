#!/bin/bash

echo "🚀 Optivio Landing Page Deployment Script"
echo "=========================================="

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    echo "Please create .env file with your email credentials:"
    echo "cp env.example .env"
    echo "Then edit .env with your Gmail credentials"
    exit 1
fi

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Check if render CLI is installed
if ! command -v render &> /dev/null; then
    echo "📥 Installing Render CLI..."
    curl -sL https://render.com/download.sh | sh
fi

echo ""
echo "🌐 Deployment Options:"
echo "1. Deploy to Render.com (Recommended - Free)"
echo "2. Deploy to Vercel (Frontend only)"
echo "3. Deploy to Netlify (Frontend only)"
echo "4. Manual deployment"
echo ""

read -p "Choose deployment option (1-4): " choice

case $choice in
    1)
        echo "🚀 Deploying to Render.com..."
        echo "Please follow these steps:"
        echo "1. Go to https://render.com and sign up"
        echo "2. Connect your GitHub repository"
        echo "3. Create a new Web Service for the backend:"
        echo "   - Build Command: npm install"
        echo "   - Start Command: node server.js"
        echo "   - Add environment variables from your .env file"
        echo "4. Create a new Static Site for the frontend:"
        echo "   - Build Command: npm install && npm run build"
        echo "   - Publish Directory: dist"
        echo "   - Add VITE_API_URL pointing to your backend URL"
        ;;
    2)
        echo "🚀 Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            npm install -g vercel
        fi
        vercel --prod
        ;;
    3)
        echo "🚀 Deploying to Netlify..."
        echo "Please follow these steps:"
        echo "1. Go to https://netlify.com and sign up"
        echo "2. Connect your GitHub repository"
        echo "3. Set build command: npm run build"
        echo "4. Set publish directory: dist"
        ;;
    4)
        echo "📋 Manual Deployment Instructions:"
        echo "1. Backend: Deploy server.js to any Node.js hosting service"
        echo "2. Frontend: Deploy dist/ folder to any static hosting service"
        echo "3. Update VITE_API_URL in your hosting environment"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment script completed!"
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo "🔧 For local testing, run: npm run dev:full"

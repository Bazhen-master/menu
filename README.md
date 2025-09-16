# Bar Menu Website

A modern, responsive bar menu website built with React, TypeScript, and Tailwind CSS.

## Features

- Mobile-first responsive design
- Category-based menu organization
- Search functionality
- Beautiful dark theme with amber accents
- Optimized for performance

## Deployment on Render

This project is configured for deployment on Render as a static site.

### Automatic Deployment

1. Connect your GitHub repository to Render
2. Render will automatically detect the `render.yaml` configuration
3. The site will build and deploy automatically

### Manual Setup

If you prefer manual setup:

1. Create a new Static Site on Render
2. Connect your repository
3. Set build command: `npm ci && npm run build`
4. Set publish directory: `dist`
5. Deploy

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment

- Node.js 18+
- React 18
- TypeScript
- Vite
- Tailwind CSS
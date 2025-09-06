# Components

This directory contains all the reusable React components for the ExpenseTracker Pro landing page.

## Component Structure

### Navigation Components
- **Navigation.tsx** - Main navigation bar with mobile menu and smooth scrolling

### Section Components
- **HeroSection.tsx** - Hero section with app preview and call-to-action
- **FeaturesSection.tsx** - Features showcase with animated cards
- **HowItWorksSection.tsx** - Step-by-step process explanation
- **TestimonialsSection.tsx** - User testimonials and reviews
- **DownloadSection.tsx** - Final call-to-action for app download
- **Footer.tsx** - Site footer with links and information

### Utility Components
- **ErrorBoundary.tsx** - Error boundary for graceful error handling
- **LoadingSpinner.tsx** - Reusable loading spinner component

## Usage

All components are designed to be:
- **Accessible** - WCAG compliant with proper ARIA labels
- **Responsive** - Mobile-first design with Tailwind CSS
- **Type-safe** - Full TypeScript support
- **Performant** - Optimized with React best practices

## Props

Each component accepts props with proper TypeScript interfaces defined in `/types/index.ts`.

## Styling

Components use Tailwind CSS classes and follow the design system defined in `tailwind.config.js`.

## Animation

Components use Framer Motion for smooth animations and transitions.

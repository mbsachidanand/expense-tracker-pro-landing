// App configuration
export const APP_CONFIG = {
  name: 'ExpenseTracker Pro',
  version: '1.0.0',
  description: 'Smart Expense Management for iOS',
  url: 'https://expensetrackerpro.com',
  supportEmail: 'support@expensetrackerpro.com',
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it Works' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#download', label: 'Download' },
] as const;

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/expensetrackerpro',
  instagram: 'https://instagram.com/expensetrackerpro',
  linkedin: 'https://linkedin.com/company/expensetrackerpro',
  blog: 'https://blog.expensetrackerpro.com',
} as const;

// Support links
export const SUPPORT_LINKS = {
  helpCenter: 'https://help.expensetrackerpro.com',
  contactUs: 'https://expensetrackerpro.com/contact',
  privacyPolicy: 'https://expensetrackerpro.com/privacy',
  termsOfService: 'https://expensetrackerpro.com/terms',
} as const;

// Animation durations
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

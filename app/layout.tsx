import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExpenseTracker Pro - Smart Expense Management for iOS',
  description: 'The ultimate expense management app for iOS. Track budgets, share expenses with friends, and get detailed reports. Download now for free!',
  keywords: 'expense tracker, budget management, iOS app, expense sharing, financial planning',
  authors: [{ name: 'ExpenseTracker Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'ExpenseTracker Pro - Smart Expense Management for iOS',
    description: 'The ultimate expense management app for iOS. Track budgets, share expenses with friends, and get detailed reports.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpenseTracker Pro - Smart Expense Management for iOS',
    description: 'The ultimate expense management app for iOS. Track budgets, share expenses with friends, and get detailed reports.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

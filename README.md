# ExpenseTracker Pro - Landing Page

A modern, responsive landing page for an iOS expense management app built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling navigation and hover effects
- **Performance Optimized**: Fast loading with Next.js and optimized images
- **Accessibility**: ARIA labels and semantic HTML for better accessibility
- **SEO Ready**: Meta tags, sitemap, and robots.txt included

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.7
- **Animations**: Framer Motion 11.2.4
- **Icons**: Lucide React 0.400.0
- **Linting**: ESLint 8.57.0
- **Code Formatting**: Prettier 3.3.3

## 📱 App Features Showcased

### 1. Smart Budgeting
- Set monthly or weekly budgets by category
- Use predefined categories or create custom ones
- Modify and delete budgets as needed

### 2. Expense Tracking
- Add, modify, and delete expenses by category
- Create placeholder expenses for upcoming purchases
- Real-time budget tracking and alerts

### 3. Expense Sharing
- Create events and invite friends
- Share expenses with custom proportions
- Upload bills and automatically split costs
- Track outstanding balances

### 4. Detailed Reports
- Expenses against budget by category
- Event expenses and analytics
- Comprehensive action logs
- Bill viewing and management

### 5. Usability
- Intuitive interface designed for non-tech savvy users
- Performance on par with WhatsApp, Facebook, Instagram, and Google Pay
- Secure and private data handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/expense-tracker-pro-landing.git
cd expense-tracker-pro-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main landing page
│   ├── robots.ts            # Robots.txt
│   └── sitemap.ts           # Sitemap
├── components/              # Reusable components
├── types/                   # TypeScript type definitions
├── constants/               # App constants
├── utils/                   # Utility functions
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design Features

- **Hero Section**: Eye-catching headline with iPhone mockup
- **Features Grid**: 6 feature cards with icons and descriptions
- **How It Works**: 4-step process explanation
- **Testimonials**: User reviews with star ratings
- **Download Section**: Call-to-action with App Store badge
- **Footer**: Links and company information

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large buttons and touch targets
- **Performance**: Optimized images and lazy loading

## 🔧 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue gradient (#3B82F6 to #1D4ED8)
- Secondary: Green accent (#10B981)
- Gray scale for text and backgrounds

### Content
All content is easily customizable in the `app/page.tsx` file:
- Hero section text and buttons
- Feature descriptions
- Testimonials
- Footer links

### Styling
Modify styles using Tailwind CSS classes or add custom CSS in `app/globals.css`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS Amplify**: Build command: `npm run build`, Output directory: `.next`
- **Heroku**: Add `next start` to package.json scripts

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@expensetrackerpro.com or join our Slack channel.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide React](https://lucide.dev/) for beautiful icons

---

Made with ❤️ by the ExpenseTracker Pro team
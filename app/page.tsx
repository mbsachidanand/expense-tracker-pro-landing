'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  BarChart3, 
  Shield, 
  Zap,
  Star,
  ArrowRight,
  Play,
  Download,
  Menu,
  X
} from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <DollarSign className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ExpenseTracker Pro</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavClick('features')}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                How it Works
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => handleNavClick('download')}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Download
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button 
              onClick={() => handleNavClick('features')}
              className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('how-it-works')}
              className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              How it Works
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleNavClick('download')}
              className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Smart Expense
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent block">Management</span>
              <span className="text-3xl md:text-4xl lg:text-5xl">for iOS</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Track budgets and expenses, share expenses with friends, and get detailed insights. 
              The most intuitive expense management app designed for modern iOS users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center group">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* App Store Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* iPhone Mockup */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-white border-b">
                    <span className="text-sm font-semibold">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content Preview */}
                  <div className="p-6 space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900">This Month</h2>
                      <p className="text-gray-600">$2,450.00 spent</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-primary-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                            <DollarSign className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Groceries</p>
                            <p className="text-sm text-gray-600">$450 / $500</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">90%</p>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-[90%] h-full bg-primary-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Dinner with Friends</p>
                            <p className="text-sm text-gray-600">$120 shared</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-green-600">+$40</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce">
                💰
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce" style={{ animationDelay: '1s' }}>
                📊
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Smart Budgeting",
      description: "Set monthly or weekly budgets by category. Use predefined categories or create custom ones. Modify and delete budgets as needed.",
      color: "bg-blue-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Expense Tracking",
      description: "Add, modify, and delete expenses by category. Create placeholder expenses for upcoming purchases that don't need immediate settlement.",
      color: "bg-green-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expense Sharing",
      description: "Create events, invite friends, and share expenses. Upload bills and easily apportion shared expenses across friends with custom proportions.",
      color: "bg-purple-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Detailed Reports",
      description: "View expenses against budget by category, event expenses, outstanding balances, and comprehensive action logs with bill viewing.",
      color: "bg-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Private",
      description: "Your financial data is encrypted and secure. We never share your personal information with third parties.",
      color: "bg-red-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized for iOS with smooth animations and instant responses. Better performance than WhatsApp, Facebook, and Instagram.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Expenses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal budgeting to group expense sharing, our app provides all the tools you need for comprehensive financial management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Set Your Budget",
      description: "Create monthly or weekly budgets by category. Use our smart suggestions or create custom categories that fit your lifestyle.",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Track Expenses",
      description: "Add expenses as they happen. Our smart categorization helps you stay organized and on track with your financial goals.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Share with Friends",
      description: "Create events and invite friends. Split expenses fairly with our intelligent bill scanning and proportion calculation.",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Get Insights",
      description: "View detailed reports and analytics. Understand your spending patterns and make informed financial decisions.",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our intuitive 4-step process designed for maximum ease of use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-500 shadow-lg absolute -bottom-2 -right-2">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content: "This app has completely transformed how I manage my finances. The expense sharing feature is a game-changer for group trips!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      role: "Software Engineer",
      content: "Finally, an expense tracker that's actually intuitive. The budget tracking and reports help me stay on top of my spending.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      content: "The bill scanning feature is incredible! Splitting dinner bills with friends has never been easier. Highly recommended!",
      rating: 5,
      avatar: "👩‍💼"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their financial management with ExpenseTracker Pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Download Section
const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Download ExpenseTracker Pro today and join thousands of users who have simplified their expense management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center">
              <Download className="mr-2 h-6 w-6" />
              Download for iOS
            </button>
            <div className="text-white text-sm">
              <p>Free to download • No subscription required</p>
              <p className="text-primary-200">Compatible with iOS 15.0+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <DollarSign className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">ExpenseTracker Pro</span>
            </div>
            <p className="text-gray-400">
              The ultimate expense management app for iOS users who want to take control of their finances.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Smart Budgeting</li>
              <li>Expense Tracking</li>
              <li>Expense Sharing</li>
              <li>Detailed Reports</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ExpenseTracker Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}

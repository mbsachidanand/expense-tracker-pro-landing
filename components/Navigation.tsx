'use client';

import { useState } from 'react';
import { DollarSign, Menu, X } from 'lucide-react';
import { smoothScrollTo } from '@/utils/smoothScroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (elementId: string) => {
    smoothScrollTo(elementId);
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

export default Navigation;

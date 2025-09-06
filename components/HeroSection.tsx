'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Download, ArrowRight, Play } from 'lucide-react';

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
              <span className="gradient-text block">Management</span>
              <span className="text-3xl md:text-4xl lg:text-5xl">for iOS</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Track budgets, share expenses with friends, and get detailed insights. 
              The most intuitive expense management app designed for modern iOS users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary inline-flex items-center justify-center group">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary inline-flex items-center justify-center group">
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
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl float-animation">
                💰
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg float-animation" style={{ animationDelay: '1s' }}>
                📊
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

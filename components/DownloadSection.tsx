'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

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

export default DownloadSection;

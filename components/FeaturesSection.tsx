'use client';

import { motion } from 'framer-motion';
import { DollarSign, BarChart3, Users, Shield, Zap } from 'lucide-react';

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
              className="feature-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-200"
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

export default FeaturesSection;

'use client';

import { motion } from 'framer-motion';
import { DollarSign, BarChart3, Users } from 'lucide-react';

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

export default HowItWorksSection;

import { DollarSign } from 'lucide-react';

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

export default Footer;

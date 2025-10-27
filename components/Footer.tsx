
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <a href="#" className="text-2xl font-bold text-white tracking-tight">
              Gemini<span className="text-indigo-400">Tees</span>
            </a>
            <p className="text-gray-400 text-base">
              Unique designs, premium quality. Wear your story.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Marketing</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Analytics</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Commerce</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Insights</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Guides</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">API Status</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Jobs</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Press</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Claim</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Gemini Tees, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

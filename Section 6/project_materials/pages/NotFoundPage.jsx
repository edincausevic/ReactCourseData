
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
      <div className="w-full max-w-md">
        {/* 404 Graphic */}
        <div className="text-center mb-8">
          <div className="relative mx-auto w-48 h-48 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            <div className="relative flex items-center justify-center w-48 h-48 rounded-full bg-gray-800 border border-gray-700">
              <span className="text-6xl font-bold text-white">404</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8 text-lg">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered an incorrect URL.
          </p>

          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex items-center py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors mb-6"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            Go Back Home
          </Link>

          {/* Quick Links */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/auth/login" 
                className="px-4 py-2 text-sm text-indigo-400 hover:text-indigo-300 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/auth/register" 
                className="px-4 py-2 text-sm text-indigo-400 hover:text-indigo-300 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </Link>
              <Link 
                to="/" 
                className="px-4 py-2 text-sm text-indigo-400 hover:text-indigo-300 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Homepage
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-500">
              Still having trouble?{' '}
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
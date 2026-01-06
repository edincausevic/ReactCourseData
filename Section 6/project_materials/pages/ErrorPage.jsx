
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorMessage = "Something went wrong!" }) => {
  return (
    <div className="md:w-1/2 flex items-center justify-center p-8 bg-gray-800"
    style={{ width: '100vw', height: '100vh' }}
    >
      <div className="w-full max-w-md text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-500/20">
            <svg 
              className="h-8 w-8 text-red-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-300 mb-8">
          {errorMessage}
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors inline-block"
        >
          Go Back Home
        </Link>

        {/* Additional Help */}
        <div className="mt-6">
          <p className="text-sm text-gray-400">
            Need help?{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
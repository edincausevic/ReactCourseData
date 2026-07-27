

const Dashboard = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 font-sans transition-colors duration-200">
  {/* Header */}
  <header className="bg-gray-800 dark:bg-gray-900 shadow-sm py-4 px-6 transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold">Q</span>
          </div>
          <h1 className="text-xl font-bold text-gray-300 dark:text-gray-200">Quizzy</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            className="p-2 rounded-lg bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200"
            aria-label="Toggle theme"
          >
       
              {/* // Sun icon for light mode */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {/* // Moon icon for dark mode */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button  
              className="cursor-pointer w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

      
              <div className="absolute cursor-pointer right-0 mt-2 w-48 bg-gray-700 dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                <div 
                  id='topNavLogout' 
                  className="block px-4 py-2 text-sm text-gray-300 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  Logout
                </div>
              </div>
      
          </div>
        </div>
      </div>
    </header>

  {/* Main Content */}
  <main className="flex-grow container mx-auto px-4 py-8">
    {/* Quiz Selection */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-300 mb-6">Popular Quizzes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quiz Card 1 */}
        <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-700">
          <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">GK</span>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">General Knowledge</h3>
            <p className="text-gray-400 text-sm mb-4">Test your world knowledge with 20 questions</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">15 min • 2.4k plays</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                Start
              </button>
            </div>
          </div>
        </div>

        {/* Quiz Card 2 */}
        <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-700">
          <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">SCI</span>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Science Challenge</h3>
            <p className="text-gray-400 text-sm mb-4">Physics, Chemistry & Biology questions</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">10 min • 1.8k plays</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                Start
              </button>
            </div>
          </div>
        </div>

        {/* Quiz Card 3 */}
        <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-700">
          <div className="h-40 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">TRV</span>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Travel & Geography</h3>
            <p className="text-gray-400 text-sm mb-4">Discover how well you know the world</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">12 min • 3.1k plays</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Active Quiz Section (Example) */}
    <section>
      <h2 className="text-2xl font-bold text-gray-300 mb-6">Continue Learning</h2>
      <div className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="w-24 h-24 mx-auto rounded-full bg-indigo-900 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">5/10</span>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-xl font-bold text-gray-300 mb-2">History Master</h3>
            <p className="text-gray-400 mb-4">You're halfway through! Complete the quiz to unlock the next level.</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '50%'}}></div>
            </div>
            <div className="flex space-x-4">
              <button className="flex-grow px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                Continue Quiz
              </button>
              <button className="px-4 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors">
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="bg-gray-800 border-t border-gray-700 py-6 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">Q</span>
          </div>
          <span className="text-lg font-bold text-gray-300">Quizzy</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Help</a>
        </div>
        <div className="mt-4 md:mt-0 text-xs text-gray-400">
          © 2024 Quizzy. All rights reserved.
        </div>
      </div>
    </div>

    <a
      href="https://edincausevic.github.io/course_promotions/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 20px',
        background: 'linear-gradient(135deg, #a435f0 0%, #7514d0 100%)',
        color: '#ffffff',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
        borderRadius: '50px',
        boxShadow: '0 10px 25px -5px rgba(117, 20, 208, 0.4), 0 8px 10px -6px rgba(117, 20, 208, 0.4)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 9999,
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(117, 20, 208, 0.5), 0 10px 12px -6px rgba(117, 20, 208, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(117, 20, 208, 0.4), 0 8px 10px -6px rgba(117, 20, 208, 0.4)';
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
      <span>Explore My Courses</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, opacity: 0.8 }}
      >
        <path d="M7 17l9-9" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  </footer>
</div>
  );
};

export default Dashboard;

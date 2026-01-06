const QuizResults = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
        {/* Header */}
        
        <main style={{maxWidth: '900px'}} className="flex-grow container mx-auto px-4 py-6">

          {/* Results Summary */}
          <section className="mt-30 text-center mb-12">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
              <span className="text-3xl font-bold text-white">8/10</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Great Job!</h2>
            <p className="text-gray-300 text-lg mb-8">
              You scored 80% on General Knowledge Challenge
            </p>
            
            <div className="flex justify-center space-x-6 mb-10">
              {/* <div className="bg-gray-800 p-5 rounded-xl shadow-sm text-center w-28">
                <div className="text-2xl font-bold text-blue-400 mb-2">2:34</div>
                <div className="text-sm text-gray-400">Time</div>
              </div> */}
              <div className="bg-gray-800 p-5 rounded-xl shadow-sm text-center w-28">
                <div className="text-2xl font-bold text-green-400 mb-2">8</div>
                <div className="text-sm text-gray-400">Correct</div>
              </div>
              <div className="bg-gray-800 p-5 rounded-xl shadow-sm text-center w-28">
                <div className="text-2xl font-bold text-red-400 mb-2">2</div>
                <div className="text-sm text-gray-400">Wrong</div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button className="cursor-pointer px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Try Another Quiz
              </button>
              <button className="cursor-pointer px-8 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 font-medium rounded-lg transition-colors">
                Reset This Quiz
              </button>
            </div>
          </section>

          {/* Performance Breakdown */}
          <section className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Performance Breakdown</h3>
            
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-white text-lg">Accuracy</span>
                <span className="text-sm font-medium px-3 py-1 bg-green-900 text-green-200 rounded-full">
                  Excellent
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="h-3 rounded-full bg-green-500" style={{ width: '80%' }}></div>
              </div>
              <div className="text-right mt-2 text-sm text-gray-400">80%</div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-white text-lg">Speed</span>
                <span className="text-sm font-medium px-3 py-1 bg-blue-900 text-blue-200 rounded-full">
                  Fast
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="h-3 rounded-full bg-blue-500" style={{ width: '65%' }}></div>
              </div>
              <div className="text-right mt-2 text-sm text-gray-400">65%</div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-white text-lg">Difficulty Handling</span>
                <span className="text-sm font-medium px-3 py-1 bg-purple-900 text-purple-200 rounded-full">
                  Good
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="h-3 rounded-full bg-purple-500" style={{ width: '75%' }}></div>
              </div>
              <div className="text-right mt-2 text-sm text-gray-400">75%</div>
            </div>
          </section>

        </main>

    </div>
  );
};

export default QuizResults;
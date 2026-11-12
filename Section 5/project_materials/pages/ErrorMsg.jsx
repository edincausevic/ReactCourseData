<div className="fixed inset-0  flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-xl shadow-lg p-5 max-w-sm w-full">
    <div className="text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className="fas fa-exclamation-circle text-red-500 text-2xl"></i>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Oops! Something went wrong</h3>
      <p className="text-gray-600 text-sm mb-4">We encountered an unexpected error while processing your request.</p>
      
      <div id="devError" className="hidden mb-4">
        <div className="bg-gray-100 rounded-lg p-3 text-left">
          <p className="text-xs text-gray-700 font-mono mb-1">Error: Cannot read properties of undefined</p>
          <p className="text-xs text-gray-500">at UserProfile (component.js:45)</p>
        </div>
      </div>
      
      <button  className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg transition font-medium flex items-center justify-center">
        <i className="fas fa-arrow-left mr-2"></i>
        Go Back
      </button>
      
    </div>
  </div>
</div>



const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-solid rounded-full animate-spin border-r-transparent"></div>
        
        {/* Loading Text */}
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
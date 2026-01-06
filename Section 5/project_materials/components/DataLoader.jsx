


const DataLoader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex items-center space-x-3">
        {/* Small spinner */}
        <div className="w-5 h-5 border-2 border-blue-500 border-solid rounded-full animate-spin border-r-transparent"></div>
        
        {/* Loading text */}
        <span className="text-sm text-gray-600">Loading data...</span>
      </div>
    </div>
  );
};

export default DataLoader;

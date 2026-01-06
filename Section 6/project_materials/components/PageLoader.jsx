

export default function PageLoader ({ 
  size = 'medium', 
  color = 'blue', 
  text = 'Loading...',
  showText = true,
  className
}) {
  // Size variants
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  // Color variants
  const colorClasses = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    white: 'border-white',
    red: 'border-red-500',
    green: 'border-green-500'
  };

  return (
    <div className={`${className} flex flex-col items-center justify-center space-y-4`}>
      {/* Spinner */}
      <div
        className={`
          ${sizeClasses[size]} 
          ${colorClasses[color]}
          mt-60 border-4 border-t-transparent 
          rounded-full 
          animate-spin
        `}
      />
      
      {/* Loading Text */}
      {showText && (
        <p className="text-gray-600 font-medium">{text}</p>
      )}
    </div>
  );
};

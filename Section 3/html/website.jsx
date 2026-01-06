<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Advanced Image Gallery</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  {/* <style>
    .gallery-image {
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    .gallery-image:hover {
      transform: scale(1.02);
      opacity: 0.9;
    }
    .active-thumbnail {
      border: 3px solid #3b82f6;
      opacity: 1;
    }
    .arrow {
      transition: all 0.3s ease;
      opacity: 0.7;
    }
    .arrow:hover {
      opacity: 1;
      transform: scale(1.1);
    }
    .fade-in {
      animation: fadeIn 0.5s;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal {
      transition: all 0.3s ease;
    }
  </style> */}
</head>
<body className="bg-gray-100 min-h-screen">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Image Gallery</h1>
    
    {/* Gallery Controls */}
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <input type="text" id="search" placeholder="Search images..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <select id="category-filter" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Categories</option>
            <option value="nature">Nature</option>
            <option value="animals">Animals</option>
            <option value="architecture">Architecture</option>
            <option value="people">People</option>
          </select>
        </div>
      </div>
    </div>
    
    {/* Main Gallery */}
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      {/* Big Image Display */}
      <div className="relative mb-8 overflow-hidden rounded-lg bg-gray-200" style={{height: '500px'}}>
        <div id="big-image-container" className="h-full w-full flex items-center justify-center">
          <img id="big-image" src="https://source.unsplash.com/random/800x500/?nature" 
            className="max-h-full max-w-full object-contain fade-in" alt="Main gallery image" />
        </div>
        
        {/* Navigation Arrows */}
        <button id="prev-btn" className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70">
          <i className="fas fa-chevron-left text-xl"></i>
        </button>
        <button id="next-btn" className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70">
          <i className="fas fa-chevron-right text-xl"></i>
        </button>
        
        {/* Image Info */}
        <div id="image-info" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
          <h3 id="image-title" className="text-xl font-bold">Beautiful Nature</h3>
          <p id="image-description" className="text-sm opacity-90">Scenic landscape with mountains and lake</p>
          <div className="flex items-center mt-2">
            <span id="image-index" className="text-sm bg-blue-500 px-2 py-1 rounded">1/12</span>
            <div className="ml-auto flex gap-2">
            </div>
          </div>
        </div>
      </div>
      
      {/* Thumbnail Gallery */}
      <div id="thumbnail-container" className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {/* Thumbnails will be inserted here by JavaScript */}
      </div>
    </div>
    
    {/* Image Details Modal */}
    <div id="image-modal" className="fixed inset-0 bg-black/30 bg-opacity-80 z-50 flex items-center justify-center hidden modal">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <button id="close-modal" className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 z-10 bg-white rounded-full p-2 shadow-lg">
          <i className="fas fa-times text-xl"></i>
        </button>
        <div className="p-4 flex">
          <div className="w-2/3">
            <img id="modal-image" src="" className="max-h-[70vh] w-auto mx-auto" alt="Full size image" />
          </div>
          <div className="w-1/3 p-4 border-l border-gray-200">
            <h3 id="modal-title" className="text-xl font-bold mb-2">Image Title</h3>
            <p id="modal-description" className="text-gray-700 mb-4">Image description goes here.</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Details</h4>
              <ul className="text-sm text-gray-600">
                <li className="flex justify-between py-1 border-b border-gray-100">
                  <span>Category:</span>
                  <span id="modal-category">Nature</span>
                </li>
                <li className="flex justify-between py-1 border-b border-gray-100">
                  <span>Date:</span>
                  <span id="modal-date">June 15, 2023</span>
                </li>
                <li className="flex justify-between py-1 border-b border-gray-100">
                  <span>Size:</span>
                  <span id="modal-size">1920x1080</span>
                </li>
                <li className="flex justify-between py-1 border-b border-gray-100">
                  <span>Likes:</span>
                  <span id="modal-likes">124</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 p-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                <i className="fas fa-download mr-2"></i> Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
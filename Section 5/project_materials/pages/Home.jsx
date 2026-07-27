<body>
  <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-building text-blue-500 text-2xl mr-2"></i>
          <h1 className="text-xl font-bold text-gray-800">StayFinder</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Favorites</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Popular</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Privacy and Terms</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            List your property
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-600">
            <i className="fas fa-bell"></i>
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <span>JS</span>
          </div>
        </div>
      </div>
    </header>

    {/* Main Content */}
    <main className="my-7 flex-grow container mx-auto px-4 py-6 flex flex-col md:flex-row">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-80 lg:w-96 bg-white rounded-xl shadow-sm p-6 mb-6 md:mb-0 md:mr-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button className="text-blue-500 hover:text-blue-700 text-sm">Reset all</button>
        </div>
        
        {/* Search Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="relative">
            <input type="text" placeholder="Where are you going?" 
                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>
        
        {/* Date Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Dates</label>
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-gray-300 rounded-lg p-2">
              <label className="text-xs text-gray-500">Check-in</label>
              <input type="date" className="w-full text-sm focus:outline-none" />
            </div>
            <div className="border border-gray-300 rounded-lg p-2">
              <label className="text-xs text-gray-500">Check-out</label>
              <input type="date" className="w-full text-sm focus:outline-none" />
            </div>
          </div>
        </div>
        
        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price range</label>
          <div className="mb-2">
            <input type="range" min="0" max="1000" value="300" className="range-slider" />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>
        
        {/* Property Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Property type</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">Apartment</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">House</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">Villa</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">Condo</span>
            </label>
          </div>
        </div>
        
        {/* Amenities */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">WiFi</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">Pool</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">Kitchen</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">Parking</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-gray-700">Air conditioning</span>
            </label>
          </div>
        </div>
        
        {/* Instant Book */}
        <div className="mb-6">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="custom-checkbox" />
            <span className="text-gray-700 font-medium">Instant book</span>
          </label>
          <p className="text-xs text-gray-500 mt-1">Book without waiting for host approval</p>
        </div>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition">
          Apply filters
        </button>
      </aside>
      
      {/* Apartment Listings */}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">124 apartments available</h2>

        </div>
        
        {/* Map View Toggle */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className=" cursor-pointer px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">Card view</button>
            <button className=" cursor-pointer px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300">List view</button>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">New York</span>, United States
          </div>
        </div>
        
        {/* Apartment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="apartment-list">
          <div
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md "
           
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                alt="Cozy Studio Near Central Park"
                className="w-full h-48 object-cover"
              />
              <button className="cursor-pointer absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full text-gray-800 hover:text-red-500">
                <i className="far fa-heart"></i>
              </button>

              <div className="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full">
                <span className="text-xs font-medium">Instant book</span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800">
                  Cozy Studio Near Central Park
                </h3>
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <span className="text-sm">4.85</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-2">Upper West Side, New York</p>
              <p className="text-sm text-gray-500 mb-3">1 beds · 1 baths · Studio</p>
              <p className="text-sm text-gray-600 mb-3">WiFi · Kitchen · TV</p>

              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-gray-800">$145</span>
                  <span className="text-sm text-gray-500"> / night</span>
                </div>
                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                  View details
                </button>
              </div>
            </div>
          </div>

          <div
            className="flex bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md "
            
          >
            {/* Image Section */}
            <div className="relative w-48 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                alt="Cozy Studio Near Central Park"
                className="w-full h-full object-cover"
              />
              <button className="cursor-pointer  absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full text-gray-800 hover:text-red-500">
                <i className="far fa-heart"></i>
              </button>

              <div className="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full">
                <span className="text-xs font-medium">Instant book</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-4 flex-1">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">
                    Cozy Studio Near Central Park
                  </h3>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-1"></i>
                    <span className="text-sm">4.85</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-1">
                  Upper West Side, New York
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  1 beds · 1 baths · Studio
                </p>
                <p className="text-sm text-gray-600">
                  WiFi · Kitchen · TV
                </p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div>
                  <span className="font-semibold text-gray-800">$145</span>
                  <span className="text-sm text-gray-500"> / night</span>
                </div>
                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                  View details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* No Apartments Found */}
        <div id="no-apartments" className=" text-center py-16">
            <div className="flex flex-col items-center space-y-4">
                <i className="fas fa-search text-gray-400 text-6xl"></i>
                <h3 className="text-xl font-semibold text-gray-800">No apartments found</h3>
                <p className="text-gray-500 max-w-md">
                    We couldn’t find any results that match your filters. Try adjusting your search or resetting filters.
                </p>
                {/* <button id="reset-filters" className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-5 py-2 rounded-lg transition">
                    Reset Filters
                </button> */}
            </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="cursor-pointer px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="cursor-pointer px-3 py-1 rounded-lg bg-blue-500 text-white">1</button>
            <button className="cursor-pointer px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">2</button>
            <button className="cursor-pointer px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">3</button>
            <button className="cursor-pointer px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
              <i className="fas fa-chevron-right"></i>
            </button>
          </nav>
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
      </div>
    </main>
  </div>

  <script>
    // Sample apartment data
    const apartments = [
      {
        id: 1,
        title: "Modern Loft in Downtown",
        location: "Manhattan, New York",
        price: 189,
        rating: 4.92,
        reviews: 124,
        type: "Apartment",
        beds: 2,
        baths: 1,
        amenities: ["WiFi", "Kitchen", "Air conditioning"],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        superhost: true,
        instantBook: true
      },
      {
        id: 2,
        title: "Cozy Studio Near Central Park",
        location: "Upper West Side, New York",
        price: 145,
        rating: 4.85,
        reviews: 89,
        type: "Studio",
        beds: 1,
        baths: 1,
        amenities: ["WiFi", "Kitchen", "TV"],
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        superhost: false,
        instantBook: true
      },
      {
        id: 3,
        title: "Luxury Penthouse with City View",
        location: "Midtown, New York",
        price: 350,
        rating: 4.98,
        reviews: 56,
        type: "Penthouse",
        beds: 3,
        baths: 2,
        amenities: ["WiFi", "Pool", "Kitchen", "Parking", "Air conditioning"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        superhost: true,
        instantBook: false
      },
      {
        id: 4,
        title: "Charming Brownstone Apartment",
        location: "Brooklyn, New York",
        price: 210,
        rating: 4.79,
        reviews: 102,
        type: "Apartment",
        beds: 2,
        baths: 1,
        amenities: ["WiFi", "Kitchen", "Washer"],
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        superhost: false,
        instantBook: true
      },
      {
        id: 5,
        title: "Stylish Soho Loft",
        location: "Soho, New York",
        price: 275,
        rating: 4.91,
        reviews: 78,
        type: "Loft",
        beds: 1,
        baths: 1,
        amenities: ["WiFi", "Kitchen", "Air conditioning", "Workspace"],
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80",
        superhost: true,
        instantBook: true
      },
      {
        id: 6,
        title: "Waterfront Apartment with Terrace",
        location: "Long Island City, New York",
        price: 230,
        rating: 4.87,
        reviews: 65,
        type: "Apartment",
        beds: 2,
        baths: 2,
        amenities: ["WiFi", "Kitchen", "Balcony", "Gym"],
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        superhost: false,
        instantBook: false
      }
    ];

    // Function to create apartment cards
    function createApartmentCards() {
      const container = document.getElementById('apartment-list');
      container.innerHTML = '';
      
      apartments.forEach((apartment, index) => {
        const card = document.createElement('div');
        card.className = `bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 card-animation`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Create amenities string
        const amenitiesString = apartment.amenities.slice(0, 3).join(' · ');
        
        card.innerHTML = `
          <div className="relative">
            <img src="${apartment.image}" alt="${apartment.title}" className="w-full h-48 object-cover" />
            <button className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full text-gray-800 hover:text-red-500">
              <i className="far fa-heart"></i>
            </button>
            ${apartment.superhost ? `
            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full flex items-center">
              <i className="fas fa-medal text-blue-500 mr-1"></i>
              <span className="text-xs font-medium">Superhost</span>
            </div>` : ''}
            ${apartment.instantBook ? `
            <div className="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full">
              <span className="text-xs font-medium">Instant book</span>
            </div>` : ''}
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800">${apartment.title}</h3>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400 mr-1"></i>
                <span className="text-sm">${apartment.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2">${apartment.location}</p>
            <p className="text-sm text-gray-500 mb-3">${apartment.beds} beds · ${apartment.baths} baths · ${apartment.type}</p>
            <p className="text-sm text-gray-600 mb-3">${amenitiesString}${apartment.amenities.length > 3 ? ' · more' : ''}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold text-gray-800">$${apartment.price}</span>
                <span className="text-sm text-gray-500"> / night</span>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">View details</button>
            </div>
          </div>
        `;
        
        container.appendChild(card);
      });
    }

  </script>
</body>
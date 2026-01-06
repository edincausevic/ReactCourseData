

const Apartment = () => {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Images */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" 
              className="w-full h-64 object-cover rounded-lg" 
              alt="Apartment Main" 
            />
            <img 
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" 
              className="w-full h-64 object-cover rounded-lg" 
              alt="Apartment" 
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img 
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914" 
              className="w-full h-40 object-cover rounded-lg" 
              alt="Apartment" 
            />
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" 
              className="w-full h-40 object-cover rounded-lg" 
              alt="Apartment" 
            />
            <img 
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a" 
              className="w-full h-40 object-cover rounded-lg" 
              alt="Apartment" 
            />
          </div>
        </div>

        {/* Booking Card */}
        <aside className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              $189 <span className="text-gray-500 text-base">/ night</span>
            </h2>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-star text-yellow-400 mr-1"></i> 4.92 (124 reviews)
            </div>
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-600">Check-in</label>
            <input type="date" className="w-full border rounded-lg p-2 mt-1" />
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-600">Check-out</label>
            <input type="date" className="w-full border rounded-lg p-2 mt-1" />
          </div>
          <div className="mb-6">
            <label className="text-sm text-gray-600">Guests</label>
            <select className="w-full border rounded-lg p-2 mt-1">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
            </select>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition">
            Reserve
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            You won't be charged yet
          </p>
        </aside>
      </div>

      {/* Description & Amenities */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Modern Loft in Downtown</h2>
          <p className="text-gray-600 mb-6">
            Located in the heart of Manhattan, this modern loft offers stunning city views, 2 cozy bedrooms, and a fully equipped kitchen. Perfect for couples, families, or business travelers looking for a stylish stay.
          </p>

          <h3 className="text-lg font-semibold mb-2">Amenities</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
            <p><i className="fas fa-wifi text-blue-500 mr-2"></i>WiFi</p>
            <p><i className="fas fa-snowflake text-blue-500 mr-2"></i>Air conditioning</p>
            <p><i className="fas fa-utensils text-blue-500 mr-2"></i>Kitchen</p>
            <p><i className="fas fa-car text-blue-500 mr-2"></i>Parking</p>
            <p><i className="fas fa-swimmer text-blue-500 mr-2"></i>Pool</p>
            <p><i className="fas fa-tv text-blue-500 mr-2"></i>TV</p>
          </div>

     
        </div>

        {/* Host Info */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
              MH
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Hosted by Maria</h4>
              <p className="text-sm text-gray-500">Superhost</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Maria has been hosting for 5+ years and has a 4.9-star average rating. She is known for her quick responses and local tips.
          </p>
          <button className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg font-medium transition">
            Contact host
          </button>
        </div>
      </section>
    </main>
  )
}

export default Apartment;

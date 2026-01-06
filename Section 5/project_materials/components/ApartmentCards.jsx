

export default function ApartmentCards(props) {
  const { id, title, type, favorite, rating, price, location, instantBook, image, beds, baths, amenities } = props

  if(type === 'list') return (
    <div
      className="flex mb-4 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md "
      
    >
      {/* Image Section */}
      <div className="relative w-48 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full text-gray-800 hover:text-red-500">
          <i className="far fa-heart"></i>
        </button>

        {instantBook && 
        <div className="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full">
          <span className="text-xs font-medium">Instant book</span>
        </div>}
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800">
              {title}
            </h3>
            <div className="flex items-center">
              <i className="fas fa-star text-yellow-400 mr-1"></i>
              <span className="text-sm">{rating}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-1">
            {location}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            {beds} beds · {baths} baths · Studio
          </p>
          <p className="text-sm text-gray-600">
            {amenities.join(' · ')}
          </p>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div>
            <span className="font-semibold text-gray-800">${price}</span>
            <span className="text-sm text-gray-500"> / night</span>
          </div>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            View details
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md "
      
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full text-gray-800 hover:text-red-500">
          <i className="far fa-heart"></i>
        </button>

        {instantBook && 
        <div className="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full">
          <span className="text-xs font-medium">Instant book</span>
        </div>}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800">
            {title}
          </h3>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-400 mr-1"></i>
            <span className="text-sm">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-2">{location}</p>
        <p className="text-sm text-gray-500 mb-3">{beds} beds · {baths} baths · Studio</p>
        <p className="text-sm text-gray-600 mb-3">{amenities.join(' · ')}</p>

        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold text-gray-800">${price}</span>
            <span className="text-sm text-gray-500"> / night</span>
          </div>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
            View details
          </button>
        </div>
      </div>
    </div>
  )
}

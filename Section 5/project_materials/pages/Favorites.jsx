<main className="flex-grow container mx-auto px-4 py-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold text-gray-800">My Favorites</h2>
  </div>

  <div id="favorites-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Favorite cards will be injected here --> */}
  </div>

  <div id="empty-state" className=" text-center py-20 text-gray-500">
    <i className="fas fa-heart text-5xl mb-4 text-gray-300"></i>
    <p className="text-lg">No favorites yet. Start adding some ❤️</p>
  </div>
</main>
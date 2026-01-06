<div className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-700">
  <div className={`h-40 bg-gradient-to-r ${quiz.gradient} flex items-center justify-center`}>
    <span className="text-white text-2xl font-bold">{quiz.code}</span>
  </div>
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-300 mb-2">{quiz.title}</h3>
    <p className="text-gray-400 text-sm mb-4">{quiz.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-xs text-gray-400">{quiz.duration} min • {quiz.plays}</span>
      <Link to={`/app/quiz/${quiz.id}`} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
        Start
      </Link>
    </div>
  </div>
</div>
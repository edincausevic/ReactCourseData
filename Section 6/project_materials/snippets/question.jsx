<div className="min-h-screen flex flex-col bg-[#0f172a] ">
{/* Quiz Header */}
<header className="bg-[#1e293b] shadow-sm py-4 px-6">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <Link to={"/app/dashboard"} className="cursor-pointer p-2 rounded-full hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      <div>
        <h1 className="text-lg font-bold text-white">{data.quiz.title}</h1>
        <p className="text-xs text-gray-400">Question {data.quiz.currentQuestion} of {data.quiz.totalQuestions}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      {!data.question.done && 
      <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs font-medium text-white text-bold">00:00</span>
      </div>}
      <button className="cursor-pointer p-2 rounded-full hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </button>
    </div>
  </div>
</header>

{/* Main Quiz Content */}
<main style={{maxWidth: '900px'}} className="flex-grow container mx-auto px-4 py-6">
  {/* Progress Bar */}
  <div className="mb-6">
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div className="bg-[#6366f1] h-2 rounded-full" style={{width: data.quiz.progress + "%"}}></div>
    </div>
  </div>

  {/* Question */}
  <div className="bg-[#1e293b] rounded-xl shadow-sm p-6 mb-8">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white mb-6">{data.question.text}</h2>
      <span className="text-xs text-gray-400">Difficulty: {data.question.difficulty}</span>
    </div>
    
    
    {/* Question Image */}
    <div className="mb-6 rounded-lg overflow-hidden">
      <img 
      style={{
        width: "100%",
        height: "250px",
        objectFit: "cover"
      }}    
      src={data.question.image} />
    </div>
  </div>

  {/* Answer Options */}
  <div className="space-y-3 mb-8 ">
    {questionOptions && 
      questionOptions.map(option => (
        <button 
          key={option.id} 
           className={`
            cursor-pointer w-full p-4 bg-[#1e293b] border border-gray-700 rounded-lg text-left hover:border-[#6366f1] hover:bg-[#312e81]/30 transition-colors group  
            ${option.blocked ? "question_blocked opacity-30" : ""}
            ${option.selected && option.correct ? "question_correct opacity-100" : ""} 
            ${option.selected && !option.correct ? "question_incorrect opacity-100" : ""} `}>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full border border-gray-600 mr-3 flex-shrink-0 flex items-center justify-center group-hover:border-[#6366f1]">
              <span className="text-sm font-medium text-gray-300">{option.id}</span>
            </div>
            <span className="text-gray-200">{option.text}</span>
          </div>
        </button>
      ))
    }

  </div>

  {/* Quiz Controls */}
  <div className="flex justify-between">
    <button className="cursor-pointer px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors">
      Skip Question
    </button>
    <div className="flex ">
      <button  className="mr-2 cursor-pointer px-6 py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium rounded-lg transition-colors flex items-center">
        Go Back
      </button>
      <button   className="cursor-pointer px-6 py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium rounded-lg transition-colors flex items-center">
        Next Question
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</main>

{/* Power-ups Section */}
<div className="bg-[#1e293b] border-t border-gray-700 py-3  px-6 pb-12">
  <div className="container mx-auto">
    <h3 className="text-sm font-medium text-gray-400 mb-2">POWER-UPS</h3>
    <div className="flex space-x-3">
      <button  className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm font-medium">+30 sec</span>
      </button>
      <button className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        <span className="text-sm font-medium">50:50</span>
      </button>
      <button className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span className="text-sm font-medium">Double</span>
      </button>
    </div>
  </div>
</div>
</div>
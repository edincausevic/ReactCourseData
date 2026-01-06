import { Link, useNavigate, useParams } from "react-router-dom";
import TopNav from "../components/navigations/TopNav";
import useFetch from "../hooks/useFetch"
import { useEffect } from "react";
import PageLoader from "../components/Loaders/PageLoader";

const QuizResults = () => {
  const {data, post: postResetData} = useFetch()
  const {data: results, post: getResults} = useFetch()
  const params = useParams()
  const navigate = useNavigate()

  const resetQuiz = () => {
    postResetData('/api/reset_quiz', {quizId: params.id})
  }

  useEffect(() => {
    getResults('/api/results', {quizId: params.id})
  }, [])

  useEffect(() => {
  
    if(data && data.success) {
      navigate('/app/dashboard')
    }
  }, [data])

  if(!results) return <PageLoader/>
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
        {/* Header */}
        <TopNav/>
        
        <main style={{maxWidth: '900px'}} className="flex-grow container mx-auto px-4 py-6">

          {/* Results Summary */}
          <section className="mt-30 text-center mb-12">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
              <span className="text-3xl font-bold text-white">{results.data.correctAnswers}/{results.data.totalQuestions}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Great Job!</h2>
            <p className="text-gray-300 text-lg mb-8">
              You scored {results.data.scorePercentage}% on General Knowledge Challenge
            </p>
            
            <div className="flex justify-center space-x-6 mb-10">
              {/* <div className="bg-gray-800 p-5 rounded-xl shadow-sm text-center w-28">
                <div className="text-2xl font-bold text-blue-400 mb-2">2:34</div>
                <div className="text-sm text-gray-400">Time</div>
              </div> */}
              <div className="bg-gray-800 p-5 rounded-xl shadow-sm text-center w-28">
                <div className="text-2xl font-bold text-green-400 mb-2">{results.data.correctAnswers}</div>
                <div className="text-sm text-gray-400">Correct</div>
              </div>
              <div className="bg-gray-800 p-5 rounded-xl shadow-sm text-center w-28">
                <div className="text-2xl font-bold text-red-400 mb-2">{results.data.incorrectAnswers}</div>
                <div className="text-sm text-gray-400">Wrong</div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <Link to="/app/dashboard" className="cursor-pointer px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Try Another Quiz
              </Link>
              <button onClick={resetQuiz} className="cursor-pointer px-8 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 font-medium rounded-lg transition-colors">
                Reset This Quiz
              </button>
            </div>
          </section>

          {/* Performance Breakdown */}
          <section className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Performance Breakdown</h3>
            
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-white text-lg">Accuracy</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="h-3 rounded-full bg-green-500" style={{ width: results.data.accuracy + '%' }}></div>
              </div>
              <div className="text-right mt-2 text-sm text-gray-400">{results.data.accuracy}%</div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-white text-lg">Speed</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="h-3 rounded-full bg-blue-500" style={{ width: results.data.speed + '%' }}></div>
              </div>
              <div className="text-right mt-2 text-sm text-gray-400">{results.data.speed}%</div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-white text-lg">Difficulty Handling</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="h-3 rounded-full bg-purple-500" style={{ width: results.data.difficulty + '%' }}></div>
              </div>
              <div className="text-right mt-2 text-sm text-gray-400">{results.data.difficulty}%</div>
            </div>
          </section>

        </main>

    </div>
  );
};

export default QuizResults;
export function calculateQuizResults(quizData) {
  // Get total questions from the first item
  const totalQuestions = quizData[0].quiz.totalQuestions;
  
  // Calculate correct and incorrect answers
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  
  quizData.forEach(item => {
    const selectedOption = item.question.options.find(opt => opt.selected);
    if (selectedOption) {
      if (selectedOption.correct) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    }
  });
  
  // Calculate score percentage
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Calculate accuracy (same as score percentage)
  const accuracy = scorePercentage;
  
  // Generate random speed percentage (0-100%)
  const speed = Math.floor(Math.random() * 101);
  
  // Calculate difficulty handling percentage
  const difficultyLevels = {
    'Easy': 1,
    'Medium': 2,
    'Hard': 3
  };
  
  let totalDifficultyScore = 0;
  let maxDifficultyScore = 0;
  
  quizData.forEach(item => {
    const difficultyWeight = difficultyLevels[item.question.difficulty] || 1;
    const selectedOption = item.question.options.find(opt => opt.selected);
    
    if (selectedOption && selectedOption.correct) {
      totalDifficultyScore += difficultyWeight;
    }
    maxDifficultyScore += difficultyWeight;
  });
  
  const difficulty = Math.round((totalDifficultyScore / maxDifficultyScore) * 100);
  
  return {
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    scorePercentage,
    accuracy,
    speed,
    difficulty
  };
}

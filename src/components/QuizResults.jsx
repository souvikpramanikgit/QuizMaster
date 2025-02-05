import React from 'react';

const QuizResults = ({ quiz, userAnswers, score, onRetry, onBackToQuizzes }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center text-card-foreground mb-2">Quiz Results</h2>
        <div className="text-center mb-8">
          <p className="text-2xl text-primary mb-2">
            Your Score: {score.correct} out of {score.total}
          </p>
          <p className="text-xl text-card-foreground">
            {score.percentage.toFixed(1)}%
          </p>
        </div>

        <div className="space-y-6">
          {quiz.questions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.correctAnswer;
            return (
              <div 
                key={index} 
                className={`p-6 rounded-lg border-2 ${
                  isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/10' 
                  : 'border-red-500 bg-red-50 dark:bg-red-900/10'
                }`}
              >
                <p className="text-lg font-medium text-card-foreground mb-4">
                  Question {index + 1}: {question.question}
                </p>
                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <div 
                      key={optionIndex}
                      className={`p-3 rounded ${
                        option === question.correctAnswer
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                          : option === userAnswers[index] && !isCorrect
                          ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                          : 'bg-gray-50 dark:bg-gray-800/50 text-card-foreground'
                      }`}
                    >
                      {option}
                      {option === question.correctAnswer && (
                        <span className="ml-2 text-green-600 dark:text-green-400">✓ Correct Answer</span>
                      )}
                      {option === userAnswers[index] && !isCorrect && (
                        <span className="ml-2 text-red-600 dark:text-red-400">✗ Your Answer</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onRetry}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={onBackToQuizzes}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults; 
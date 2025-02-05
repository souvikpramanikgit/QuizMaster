import React, { useState } from 'react';

const QuizTaker = ({ quiz, onSubmit, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));
  const [showSubmit, setShowSubmit] = useState(false);

  const handleAnswerChange = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSubmit(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    onSubmit(answers);
  };

  const question = quiz.questions[currentQuestion];

  return (
    <div className="pb-32"> {/* Space for fixed footer */}
      <div className="max-w-2xl mx-auto text-center text-lg text-primary font-medium mb-4">
        Question {currentQuestion + 1} of {quiz.questions.length}
      </div>

      <div className="max-w-2xl mx-auto p-8 bg-card rounded-xl shadow-lg mb-8">
        <h3 className="text-xl mb-6 text-card-foreground">{question.question}</h3>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <label 
              key={index} 
              className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors text-card-foreground"
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={answers[currentQuestion] === option}
                onChange={() => handleAnswerChange(option)}
                className="mr-4"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-8">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto flex justify-between gap-4">
        <button 
          onClick={handlePrevious} 
          className="px-6 py-3 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        
        {showSubmit ? (
          <button 
            onClick={submitQuiz} 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            disabled={answers.includes('')}
          >
            Submit Quiz
          </button>
        ) : (
          <button 
            onClick={handleNext} 
            className="px-6 py-3 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
            disabled={!answers[currentQuestion]}
          >
            Next
          </button>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card shadow-lg p-4">
        <button 
          onClick={onBack}
          className="block mx-auto px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
        >
          ← Back to Quizzes
        </button>
      </div>
    </div>
  );
};

export default QuizTaker; 
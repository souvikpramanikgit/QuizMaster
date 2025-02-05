import React, { useState } from 'react';
import QuizTopics from './components/QuizTopics';
import QuizTaker from './components/QuizTaker';
import QuizResults from './components/QuizResults';
import './App.css';
import { QUIZ_DATA } from './quizData';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setSelectedQuiz(null);
    setScore(null);
    setShowResults(false);
  };

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setScore(null);
    setShowResults(false);
    setUserAnswers([]);
  };

  const handleQuizSubmit = (answers) => {
    const quizQuestions = selectedQuiz.questions;
    const correctAnswers = answers.filter((answer, index) => 
      answer === quizQuestions[index].correctAnswer
    ).length;
    
    setScore({
      correct: correctAnswers,
      total: quizQuestions.length,
      percentage: (correctAnswers / quizQuestions.length) * 100
    });
    setUserAnswers(answers);
    setShowResults(true);
  };

  const handleRetry = () => {
    setScore(null);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>
        <Analytics />
        {!selectedTopic ? (
          <>
            <div className="text-center mb-12 p-8 bg-card rounded-2xl shadow-lg">
              <h1 className="text-4xl font-bold mb-4 text-card-foreground">🎯 Quiz Master</h1>
              <p className="text-xl text-card-foreground/80">
                Test your knowledge across different programming topics
              </p>
            </div>
            <QuizTopics topics={QUIZ_DATA} onSelectTopic={handleTopicSelect} />
          </>
        ) : (
          <div className="p-4">
            {!selectedQuiz ? (
              <>
                <button 
                  onClick={() => handleTopicSelect(null)}
                  className="mb-4 px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  ← Back to Topics
                </button>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6 text-card-foreground dark:text-blue-500">
                    {QUIZ_DATA[selectedTopic].name} Quizzes
                  </h2>
                  <div className="grid gap-4">
                    {QUIZ_DATA[selectedTopic].quizzes.map((quiz, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizSelect(quiz)}
                        className="p-4 text-lg border-2 border-primary rounded-xl bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        {quiz.title}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              showResults ? (
                <QuizResults 
                  quiz={selectedQuiz}
                  userAnswers={userAnswers}
                  score={score}
                  onRetry={handleRetry}
                  onBackToQuizzes={() => setSelectedQuiz(null)}
                />
              ) : (
                <QuizTaker 
                  quiz={selectedQuiz} 
                  onSubmit={handleQuizSubmit}
                  onBack={() => setSelectedQuiz(null)}
                />
              )
            )}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App; 
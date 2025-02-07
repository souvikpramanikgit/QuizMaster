import React, { useState, useEffect } from 'react';
import QuizTopics from './components/QuizTopics';
import QuizTaker from './components/QuizTaker';
import QuizResults from './components/QuizResults';
import History from './components/History';
import './App.css';
import { QUIZ_DATA } from './quizData';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(() => {
    return localStorage.getItem('selectedTopic') || null;
  });
  
  const [selectedQuiz, setSelectedQuiz] = useState(() => {
    const saved = localStorage.getItem('selectedQuiz');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('score');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [userAnswers, setUserAnswers] = useState(() => {
    const saved = localStorage.getItem('userAnswers');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [showResults, setShowResults] = useState(() => {
    return localStorage.getItem('showResults') === 'true';
  });
  
  const [showHistory, setShowHistory] = useState(false);
  const [page, setPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home';
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedTopic', selectedTopic || '');
    localStorage.setItem('selectedQuiz', selectedQuiz ? JSON.stringify(selectedQuiz) : '');
    localStorage.setItem('score', score ? JSON.stringify(score) : '');
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('showResults', showResults.toString());
    localStorage.setItem('currentPage', page);
  }, [selectedTopic, selectedQuiz, score, userAnswers, showResults, page]);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setSelectedQuiz(null);
    setScore(null);
    setShowResults(false);
    setUserAnswers([]);
    setPage('quiz');
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
    
    const newScore = {
      correct: correctAnswers,
      total: quizQuestions.length,
      percentage: (correctAnswers / quizQuestions.length) * 100
    };

    // Save to history
    const historyRecord = {
      topicName: QUIZ_DATA[selectedTopic].name,
      quizTitle: selectedQuiz.title,
      score: newScore,
      timestamp: new Date().toISOString(),
      answers
    };

    const existingHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    localStorage.setItem('quizHistory', JSON.stringify([historyRecord, ...existingHistory]));

    setScore(newScore);
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
        <Navbar 
          onViewHistory={() => setPage(page === 'history' ? 'home' : 'history')}
          isHistoryPage={page === 'history'}
        />
        <Analytics />
        {page === 'history' ? (
          <History />
        ) : (
          <>
            {!selectedTopic ? (
              <>
                <div className="text-center mb-12 mt-12 p-8 bg-card rounded-2xl shadow-lg">
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
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App; 
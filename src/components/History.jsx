import React from 'react';

const History = () => {
  // Get quiz history from localStorage
  const [quizHistory, setQuizHistory] = React.useState(
    JSON.parse(localStorage.getItem('quizHistory') || '[]')
  );

  const removeHistoryItem = (index) => {
    const newHistory = quizHistory.filter((_, i) => i !== index);
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
    setQuizHistory(newHistory);
  };

  const clearAllHistory = () => {
    localStorage.setItem('quizHistory', '[]');
    setQuizHistory([]);
  };

  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">Quiz History</h2>
          {quizHistory.length > 0 && (
            <button
              onClick={clearAllHistory}
              className="w-full sm:w-auto px-4 py-2 text-sm border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              Clear All History
            </button>
          )}
        </div>
        
        {quizHistory.length === 0 ? (
          <div className="text-center bg-card rounded-lg p-6 sm:p-8 shadow-lg border border-border">
            <p className="text-card-foreground text-lg mb-4">No quiz history available.</p>
            <a 
              href="/"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Take a Quiz
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {quizHistory.map((record, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-lg p-4 sm:p-6 border border-border relative group"
              >
                <button
                  onClick={() => removeHistoryItem(index)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-red-500 opacity-100 sm:opacity-0 group-hover:opacity-100 hover:bg-red-500/10 rounded-full transition-all"
                  title="Remove from history"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">
                    {record.topicName} - {record.quizTitle}
                  </h3>
                  <span className="text-xs sm:text-sm text-card-foreground/70">
                    {new Date(record.timestamp).toLocaleString()}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="w-full sm:w-auto bg-primary/10 rounded-lg px-4 py-2">
                    <p className="text-primary">
                      Score: {record.score.correct}/{record.score.total}
                    </p>
                  </div>
                  <div className="w-full sm:w-auto bg-primary/10 rounded-lg px-4 py-2">
                    <p className="text-primary">
                      Percentage: {record.score.percentage.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History; 
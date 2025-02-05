import React from 'react';

const QuizTopics = ({ topics, onSelectTopic }) => {
  return (
    <div className="quiz-topics">
      <h2 className="text-2xl font-bold mb-6 text-center text-card-foreground dark:text-blue-500">
        Select a Topic
      </h2>
      <div className="topics-grid">


        {Object.entries(topics).map(([key, topic]) => (
          <button
            key={key}
            onClick={() => onSelectTopic(key)}
            className="p-4 text-lg border-2 border-primary rounded-xl bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {topic.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizTopics; 
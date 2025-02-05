import React from 'react';

const QuizList = ({ quizzes, onSelect }) => {
  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <button onClick={() => onSelect(index)}>{quiz.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList; 
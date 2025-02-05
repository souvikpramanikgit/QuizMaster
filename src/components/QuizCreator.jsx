import React, { useState } from 'react';

const QuizCreator = ({ onSave }) => {
  const [quiz, setQuiz] = useState({ title: '', questions: [] });
  const [question, setQuestion] = useState('');

  const addQuestion = () => {
    if (question.trim()) {
      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        questions: [...prevQuiz.questions, question],
      }));
      setQuestion('');
    }
  };

  const saveQuiz = () => {
    if (quiz.title.trim() && quiz.questions.length > 0) {
      onSave(quiz);
      setQuiz({ title: '', questions: [] });
    }
  };

  return (
    <div>
      <h2>Create a Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={saveQuiz}>Save Quiz</button>
    </div>
  );
};

export default QuizCreator; 
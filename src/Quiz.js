import React from "react";

const Quiz = ({ question, questionNumber, onAnswer }) => {
  return (
    <div>
      <h1>Question {questionNumber}</h1>
      <p>{question.text}</p>
      <div className="flex flex-col space-y-4">
        {question.options.map((option) => (
          <button
            key={option.text}
            onClick={() => onAnswer(option.isCorrect)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;

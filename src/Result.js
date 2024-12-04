import React from "react";

const Result = ({ answers, onRestart }) => {
  // Calculate the score by summing the correct answers
  const score = answers.reduce((acc, answer) => acc + answer, 0);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="mt-4 text-lg">
        You scored {score} out of {answers.length}.
      </p>
      <p className="mt-2">
        {score === answers.length
          ? "Amazing! Perfect score!"
          : score > answers.length / 2
          ? "Good job! You did well."
          : "Don't worry! Practice makes perfect."}
      </p>
      <button
        onClick={onRestart}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;

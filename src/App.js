import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import questions from "./question";
import Quiz from "./Quiz";
import Welcome from "./Welcome";
import Result from "./Result";

function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(false);
  const [welcome, setWelcome] = useState(true);

  const start = () => setWelcome(false);

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setResult(false);
    setWelcome(true);
  };

  const handleAnswer = (isCorrect) => {
    const ans = [...answers, isCorrect ? 1 : 0];
    setAnswers(ans);

    if (current >= questions.length - 1) {
      setResult(true);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-white m-5 w-full max-w-xl rounded-xl p-10 shadow-lg md:m-10 md:p-10">
        {welcome && <Welcome onStart={start} />}
        {!welcome && !result && (
          <Quiz
            question={questions[current]}
            questionNumber={current + 1}
            onAnswer={handleAnswer}
          />
        )}
        {result && <Result answers={answers} onRestart={restart} />}
      </div>
    </div>
  );
}

export default App;

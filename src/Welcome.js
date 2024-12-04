import React from "react";
import reactlogo from "../src/Assets/Quiz.jpg";

const Welcome = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
      <img
        src={reactlogo}
        alt="react-logo"
        className=" w-full sm:w-[300px]"
      />
      <h1>Quiz app</h1>
      <button onClick={onStart} className="bg-black text-white rounded-md p-2">
        start
      </button>
    </div>
  );
};

export default Welcome;

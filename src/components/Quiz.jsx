import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Benguluru", "Mumbai", "Delhi", "Andhra Pradesh"],
      answer: "Delhi",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is 2+2",
      options: ["4", "22", "1", "0"],
      answer: "4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizStatus, setQuizStatus] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    if (selectedOption) {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setQuizStatus(true);
      }
      setSelectedOption("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl p-6 bg-white rounded-lg shadow-lg">
        {!quizStatus ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {questions[currentIndex].question}
            </h2>
            {questions[currentIndex].options.map((option, index) => (
              <div key={index} className="mb-4">
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <label htmlFor={option} className="text-lg">
                  {option}
                </label>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="w-full py-2 mt-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Quiz Finished!</h2>
            <p className="text-xl">
              Your score: {score} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

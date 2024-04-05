import React, { useState } from 'react';
import './QuizBox.css'; // Import your CSS file for styling

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["option1", "option2", "option3", "option4"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["option1", "option2", "option3", "option4"],
    correctAnswer: "option1"
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: ["option1", "option2", "option3", "option4"],
    correctAnswer: "option2"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["option1", "option2", "option3", "option4"],
    correctAnswer: "option3"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["option1", "option2", "option3", "option4"],
    correctAnswer: "option4"
  }
];

const QuizBox = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    
    <div className="quiz-container">
      <div className="card">      
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questionsData.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-card">
              <div className="question-text">{questionsData[currentQuestion].question}</div>
            </div>
          </div>
          <div className="answer-section">
            {questionsData[currentQuestion].options.map((option, index) => (
              <button key={index} className="option-button" onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default QuizBox;
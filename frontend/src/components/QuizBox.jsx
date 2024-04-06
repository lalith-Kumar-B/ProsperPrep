import React, { useState } from 'react';
import ScoreKeeper from './ScoreKeeper';
import { useSetRecoilState } from 'recoil';
import { globalScoreAtom } from '../store/atoms';

function QuizBox({ question, options, correctAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const setScore = useSetRecoilState(globalScoreAtom);

  const handleOptionSelect = (selectedOptionText) => {
    if (selectedOptionText === correctAnswer) {
      setScore((prevScore) => prevScore + 1); 
    }
    setShowAnswer(true); 
  };
  

  return (
    <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <div>
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <ul>
        {options.map((option) => (<li
          key={option}
    onClick={() => handleOptionSelect(option)}
    className={`cursor-pointer py-2 rounded-lg shadow-md px-2 text-black ${
      selectedOption === option ? 'bg-blue-400' : 'bg-blue-200'
    } hover:bg-blue-300 mb-2`}
  >
    {option}
  </li>
))}

        </ul>
      </div>
      {showAnswer && (
        <div className="mt-4">
          {selectedOption === correctAnswer ? (
            <div className="text-lg font-semibold">Correct Answer!</div>
          ) : (
            <div className="text-lg font-semibold">Incorrect Answer!</div>
          )}
        </div>
      )}
      <ScoreKeeper/>
    </div>
  );
}

export default QuizBox;

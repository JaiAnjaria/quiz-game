import React, { useState, useEffect } from 'react';

const Questions = ({
  questions,
  handleNextQuestion,
  currentQuestion,
  handleAnswerClick,
  timer,
  isLastq
}) => {
  const optionIds = ['A', 'B', 'C', 'D'];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Reset when moving to a new question
    setSelectedOption(null);
    setIsAnswered(false);
  }, [currentQuestion]);

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
      handleAnswerClick(option);
    }
  };

  const getOptionStyle = (option) => {
    if (!isAnswered) return { backgroundColor: 'white' };

    const isCorrect = option === questions[currentQuestion].answer;
    const isSelected = option === selectedOption;

    if (isCorrect) return { backgroundColor: 'lightgreen', border: '1px solid green' };
    if (isSelected && !isCorrect) return { backgroundColor: 'lightcoral', border: '1px solid red' };

    return { backgroundColor: 'white' };
  };

  return (
    <div className="container mt-3 bg-light">
      <div className="card-body">
	  <p
  className={`mt-2 ${timer <= 3 ? 'text-danger fw-bold' : 'text-warning'}`}
  style={{ fontSize: '1.1rem' }}
>
  Time remaining: {timer}
</p>

       
        <div className="list-group">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`list-group-item list-group-item-action mt-2`}
              onClick={() => handleOptionClick(option)}
              style={{
                ...getOptionStyle(option),
                pointerEvents: isAnswered ? 'none' : 'auto',
                transition: '0.3s ease',
              }}
            >
              {optionIds[index]} {option}
            </button>
          ))}
        </div>
        <br />
        <div className="row">
          <div className="col">
            <p className="card-title">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <div className="col">
            <button
              className="btn btn-primary btn-sm"
              onClick={handleNextQuestion}
              disabled={!isAnswered}
            >
              {isLastq ? 'Submit' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

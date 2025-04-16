// App.js

import './App.css'; // <-- This should be here


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import qBank from "./components/QuestionBank";
import Questions from './components/Questions';
import Score from './components/Score';
import './App.css'

const App = () => {
  const [questions, setQuestions] = useState([]);

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
// set time for each question
const [timer, setTimer] = useState(10); 
const [quizStarted, setQuizStarted] = useState(false);
const [isLastq, setIsLastq]=useState(false)

useEffect(() => {
	if (quizStarted) {
	const interval = setInterval(() => {
		setTimer(prevTimer => {
		if (prevTimer > 0) {
			return prevTimer - 1;
		} else {
			setCurrentQuestion(prevQuestion => prevQuestion + 1);
			// Reset timer for the next question
			return 10;
		}
		});
	}, 1000);
	
	return () => clearInterval(interval);
	}
}, [currentQuestion, quizStarted]);

const handleAnswerClick = (selectedAnswer) => {
	if (selectedAnswer === questions[currentQuestion].answer) {
			setScore(prevScore => prevScore + 1);
	}
};

const handleNextQuestion=()=>{
	if (currentQuestion + 2 === questions.length) {
		setIsLastq(true)
	}
	setCurrentQuestion(prevQuestion => prevQuestion + 1);
	setTimer(10);
}

const startQuiz = () => {
  const shuffled = [...qBank].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10); // pick first 10 random
  setQuestions(selected);
  setQuizStarted(true);
};

return (

	<div className="card container mt-2 
		d-flex justify-content-center 
		align-items-center"
		style={{ maxWidth: '600px', margin: '0 auto' }}>

	<h3 className=" mt-2">Quiz App</h3>
	<div>
	{!quizStarted ? (
  <div className="card-body text-center welcome-screen">
    <h2 className="welcome-title">Welcome to the Quiz!</h2>
    <p className="welcome-subtitle">Test your knowledge in just a few minutes.</p>
    
    <div className="instructions text-start mt-4">
      <h4>📋 Instructions:</h4>
      <ul>
        <li>You will get <strong>10 random questions</strong> from a question bank.</li>
        <li>You have <strong>10 seconds</strong> to answer each question.</li>
        <li>Click on an option to lock your answer. It cannot be changed.</li>
        <li>Correct answers will be shown in <span style={{ color: "#4caf50" }}><strong>green</strong></span>.</li>
        <li>Incorrect answers will be shown in <span style={{ color: "#f44336" }}><strong>red</strong></span>.</li>
        <li>Timer turns <strong style={{ color: "#ff5252" }}>red</strong> when less than 3 seconds remain.</li>
        <li>Your final score will be shown at the end.</li>
      </ul>
    </div>

    <button className="btn btn-primary mt-3" onClick={startQuiz}>
      Start Quiz 🚀
    </button>
  </div>
) : 
 currentQuestion < questions.length ? (
		<Questions
			questions={questions}
			handleNextQuestion={handleNextQuestion}
			currentQuestion={currentQuestion}
			handleAnswerClick={handleAnswerClick}
			timer={timer}
			isLastq={isLastq}
		/>
		) : (
		<Score
			score={score}
			setScore={setScore}
			setCurrentQuestion={setCurrentQuestion}
			setQuizStarted={setQuizStarted}
			setIsLastq={setIsLastq}
			setTimer={setTimer}		 
		/>
		)}
	</div>
</div>
);
};

export default App;

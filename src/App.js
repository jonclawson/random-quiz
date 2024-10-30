import { useState } from 'react';
import './App.css';
import Question from './Question';
import Navigation from './Navigation';
import quizItems from './quiz';
import Summary from './Summary';

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function App() {
  const [quiz, setQuiz] = useState(getRandomItems(quizItems, 10));
  const [answers, setAnswers] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const answered = answers[quizIndex] != null;
  const onAnswer = (answer) => {
    answers[quizIndex] = answer;
    setAnswers([...answers]);
  };
  const nextQuestion = (!answered || quizIndex + 1 >= quiz.length) ? null : () => {
    setQuizIndex(quizIndex + 1);
  };
  const prevQuestion = quizIndex < 1 ? null : () => {
    setQuizIndex(quizIndex - 1);
  } ;

  const reset = () => {
    setAnswers([]);
    setQuizIndex(0);
    setQuiz(getRandomItems(quizItems, 10));
  };
  
  return (
    <div key={quizIndex} className="App">
      <h1>AZ-900 Prep Exam</h1>
     <Question 
     key={quizIndex}
     item={quiz[quizIndex]}
     chosen={answers[quizIndex]}
     onAnswer={onAnswer}/>

     <Navigation prev={prevQuestion} next={nextQuestion}/>
     <Summary answers={answers} quiz={quiz} reset={reset}/>
     </div>
  );
}

export default App;

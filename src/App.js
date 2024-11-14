import { useState } from 'react';
import './App.css';
import Question from './Question';
import Navigation from './Navigation';
import TopNav from './TopNav';
import quizItemsAz900 from './quiz';
import quizItemsSc300 from './quiz-sc300';
import Summary from './Summary';

const quizData = {
  'AZ 900': quizItemsAz900,
  'SC 300': quizItemsSc300
}

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function App() {
  const [title, setTitle] = useState('AZ 900')
  const [quizItems, setQuizItems] = useState(quizItemsAz900)
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

  const chooseQuiz = (name) => {
    setTitle(name);
    setQuizItems(quizData[name]);
    reset();
  }
  
  return (
    <div key={quizIndex} className="App">
      <TopNav navigate={chooseQuiz}/>
      <h1>{title} Prep Exam</h1>
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

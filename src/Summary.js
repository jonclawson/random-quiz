const Summary = ({ answers, quiz, reset }) => {
    const correctAnswers = answers.filter((answer, index) => answer === quiz[index].answerIndex).length;
    const answeredScore = Math.round((correctAnswers / answers.length) * 100);
    const score = Math.round((correctAnswers / quiz.length) * 100);
    return (
      <div className="summary">
        <h2>Summary</h2>
        <p>
          You have {correctAnswers} correct answers out of {answers.length || 0} / {quiz.length} questions. {answeredScore || 0}% / {score}%
        </p>
        {answers.length == quiz.length && (<button onClick={reset}>Start Over</button>)}
      </div>
    );
  };
  export default Summary;
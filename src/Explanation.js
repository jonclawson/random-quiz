const Explanation = ({ explanation, correct }) => {
    return (
      <div className="explanation">
        <h3>{correct ? 'Correct' : 'Incorrect' }</h3>
        <p>{explanation}</p>
      </div>
    );
  };
  export default Explanation;
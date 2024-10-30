import React, { useState } from 'react';
import Explanation from './Explanation';

const Question = ({ item, chosen, onAnswer }) => {
  const { question, options, answerIndex } = item;
  const [selected, setSelected] = useState(chosen);

  const handleSelect = (index) => {
    setSelected(index);
    onAnswer(index);
  };

  const setClassName = (index) => {
    if (selected == null) {
      return '';
    }
    if (selected === index) {
      return index === answerIndex ? 'correct' : 'incorrect';
    }
    return index === answerIndex ? 'correct' : '';
  };

  return (
    <div className="quiz-question">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <label
            key={index}
            onClick={() => handleSelect(index)}
            className={setClassName(index)}
          >
           <input type="radio" name="q" defaultChecked={index === selected}/> {option}
          </label>
        ))}
      </div>
      {selected != null && (
        <Explanation explanation={item.explanation} correct={selected === answerIndex} />
      )}
    </div>
  );
};

export default Question;

import React, { useState } from 'react';
import './Question.css'; 

const Question = ({ question, handleAnswer, questionNumber }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (index) => {
        setSelectedOption(index);
        handleAnswer(question.id, index + 1);
    };

    return (
        <div className="question">
            <p className="question-text">
                <span className="question-number">Q{questionNumber}. </span>
                {question.questionText}
            </p>
            <div className="options">
                {question.options.map((option, index) => (
                    <div 
                        key={index} 
                        className={`option ${selectedOption === index ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(index)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;

// Survey.js

import React, { useState } from 'react';
import './Survey.css';

function Survey() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기서 응답을 처리하거나 다음 페이지로 이동할 수 있습니다.
  };

  return (
    <div className="survey-container">
      <h1>피부 진단 설문 조사</h1>
      <form onSubmit={handleSubmit}>
        <div className="survey-question">
          <label htmlFor="question1">질문 1: 어떤 피부 타입입니까?</label>
          <div>
            <input type="radio" id="dry" name="question1" value="dry" onChange={handleChange} />
            <label htmlFor="dry">건성</label>
            <input type="radio" id="oily" name="question1" value="oily" onChange={handleChange} />
            <label htmlFor="oily">지성</label>
          </div>
        </div>
        <div className="survey-question">
          <label htmlFor="question2">질문 2: 피부 상태는 어떤가요?</label>
          <div>
            <input type="radio" id="acne" name="question2" value="acne" onChange={handleChange} />
            <label htmlFor="acne">여드름</label>
            <input type="radio" id="dryness" name="question2" value="dryness" onChange={handleChange} />
            <label htmlFor="dryness">건조함</label>
          </div>
        </div>
        <div className="survey-question">
          <label htmlFor="question3">질문 3: 피부 톤은 어떤가요?</label>
          <div>
            <input type="radio" id="fair" name="question3" value="fair" onChange={handleChange} />
            <label htmlFor="fair">밝은</label>
            <input type="radio" id="medium" name="question3" value="medium" onChange={handleChange} />
            <label htmlFor="medium">중간</label>
          </div>
        </div>
        <button type="submit" className="survey-submit-button">제출</button>
      </form>
    </div>
  );
}

export default Survey;

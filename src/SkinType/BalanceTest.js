import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import './BalanceTest.css'; 

const BalanceTest = ({setResult}) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const accessToken = localStorage.getItem('accessToken'); 
  const navigate = useNavigate(); // hook to navigate to another page
  
  useEffect(() => {
    axios.get('/questions?category=balance', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the questions!", error);
      });
  }, [accessToken]);

  const handleAnswer = (id, score) => {
    setAnswers([...answers, { id, score }]);
  };

  const balanceResult = () => {
    const score = answers.reduce((total, answer) => total + answer.score, 0);
    console.log(`${score} 점수임`);

    if(score >= 16 && score <= 20){
        setResult('O') 
    }else if(score >= 11 && score <= 15){
        setResult('O')
    }else if(score >= 6 && score <= 10){
        setResult('D')
    }else if(score >= 1 && score <= 5){
        setResult('D')
    }else{
        navigate('/')    
    }
  
    navigate('/mbti-sensitiv')
  };


  return (

    <div className="container">
      <div className="title">
        <br />셀프 피부 진단
      </div>
      <div className="steps">
        <div className="step active">
          <div className="step-number">1</div>  유수분 밸런스  </div>
        <div className="step">
          <div className="step-number">2</div>
          피부 민감도
        </div>
        <div className="step">
          <div className="step-number">3</div>
          멜라닌 색소 활성도
        </div>
        <div className="step ">
          <div className="step-number">4</div>
          피부 탄력도 및 주름
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    <div className="balance-test-container"> 
      <h2 className="balance-test-title">유수분 밸런스 테스트</h2>
      {questions.map((question, index) => (
        <div key={question.id} className="question-container">
          <Question 
            question={question} 
            handleAnswer={handleAnswer} 
            questionNumber={index + 1} // 질문 번호 전달
          />
        </div>
      ))}
      <button className="submit-button" onClick={balanceResult} type='button'>제출</button> 
    </div>
    </div>
  );
};

export default BalanceTest;

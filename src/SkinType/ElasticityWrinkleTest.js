import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import './BalanceTest.css'; 
import { useNavigate } from 'react-router-dom';

const ElasticityWrinkleTest = ({result, setResult}) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        console.log(`${result} result`)
        axios.get('/questions?category=wrinkles')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the questions!", error);
            });
    }, []);

    const handleAnswer = (id, score) => {
        setAnswers([...answers, { id, score }]);
    };

    const wrinklesResult = () => {
        const score = answers.reduce((total, answer) => total + answer.score, 0);
        console.log(`${score} 점수임`);
        if(score >= 11 && score <= 20){
            result += 'W' 
        }else if(score >= 1 && score <= 10){
            result += 'T' 
        }else{
            navigate('/')    
        }

        const token=  localStorage.getItem('accessToken')
        axios.post('/mbti-result', null, {
            params: {result:result},
            headers: {Authorization:   `Bearer ${token}`}

        }).then(function(res){
            console.log(res.data)
              navigate('/mbti-result')
        }).catch((error) => {
            console.log(error)
        })

      
      };




    return (
        <div className='container'>
        <div className="title">
            <br />셀프 피부 진단
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>  유수분 밸런스  </div>
            <div className="step">
              <div className="step-number">2</div>
              피부 민감도
            </div>
            <div className="step">
              <div className="step-number">3</div>
              멜라닌 색소 활성도
            </div>
            <div className="step active">
              <div className="step-number">4</div>
              피부 탄력도 및 주름
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        <div className="balance-test-container"> 
            <h2 className="balance-test-title">피부 탄력 및 주름 테스트</h2>
            {questions.map((question, index) => (
                <div key={question.id} className="question-container">
                    <Question question={question} handleAnswer={handleAnswer}  questionNumber={index + 1}/>
                </div>
            ))}
            <button className="submit-button" onClick={wrinklesResult} >제출</button> 
        </div>
        </div>
    );
};

export default ElasticityWrinkleTest;

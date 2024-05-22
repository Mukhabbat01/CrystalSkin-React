import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import mbti from '../img/mbti_intro.svg';

function MainPage() {
  return (
    <div className="main-page">
      <div className="content">
        <h1>피부 MBTI</h1>
        <p>나의 피부타입이 궁금하다면 </p> <p>지금 바로 셀프 진단으로 확인해보세요!</p>

        <div className="links">
          <Link to="/mbti-test" className="link-button" >피부 <strong>MBTI START</strong></Link>  
        </div>
      </div>

      <div className="image-container">
        <img src={mbti} alt="MBTI Introduction" className="right-image" />
      </div>
    </div>
  );
}

export default MainPage;

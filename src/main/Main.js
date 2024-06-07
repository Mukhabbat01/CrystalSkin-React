import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import mbti from '../img/mbti_intro.svg';
import SkinTypes from '../MBTI/SkinTypes';
import ProductMain from './ProductMain';

function MainPage() {
  return (
    <div>
    <div className="main-page">
      <div className="content">
        <h1>피부 MBTI</h1>
        <p>나의 피부타입이 궁금하다면 </p> <p>지금 바로 셀프 진단으로 확인해보세요!</p>

        <div className="links">
          <Link to="/mbti-test" className="link-button" >피부 <strong>MBTI START</strong></Link>  
        </div>
      </div>
      <div className="image-container">
        <img src={mbti} alt="MBTI Introduction"/>
      </div>
      </div>

      <div></div>
      <div className='types'> 
      <h1>피부 MBTI에 대해 자세히 알아보기</h1>
      <h3 className='h3'>바우만의 16가지 피부 유형</h3>
        <SkinTypes/>
      </div>
      <div className='space'></div>
  
      <div className='prdMain'>
        <ProductMain/>
        <Link to="/products" className="prd-button" ><strong>상품 더보기</strong></Link>  
      </div>

      <div className='prdMain'>
      <h1>스킨케어 관련 팁 영상</h1>
        <Link to="/video" className="video-button" ><strong>영상 더 보기 </strong></Link>  
      </div>
    </div>
  );
}

export default MainPage;

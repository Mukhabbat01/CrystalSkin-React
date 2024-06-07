import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './main/Main';
import Signup from './SignIn/Signup';
import NavbarContainer from './navbar/Navbar';
import ProductPage from './product/ProductPage';
import Login from './SignIn/Login';
import BalanceTest from './SkinType/BalanceTest';
import ElasticityWrinkleTest from './SkinType/ElasticityWrinkleTest';
import MelaninTest from './SkinType/MelaninTest';
import SkinSensitivityTest from './SkinType/SkinSensitivityTest';
import SkinTypes from './MBTI/SkinTypes';
import ProductDetailPage from './product/ProductDetPage';
import Result from './SkinType/Result';
import UsrInfo from './MyPage/UsrInfo';
import Video from './main/Video';
import WishList from './MyPage/WishList';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        setIsAuthenticated(true);
        console.log("User is authenticated");
      } else {
        console.log("No access token found, user is not authenticated");
      }
    } catch (error) {
      console.error("Failed to retrieve access token from localStorage", error);
    }
  }, []);

  const [result, setResult] = useState('')

  return (
    <>
      <NavbarContainer isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/skin-types" element={<SkinTypes />} />
        <Route path='/video' element={<Video/>} />

        <Route path='/mbti-result' element={<Result/>} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated && (
          <>
            <Route path="/mbti-test" element={<BalanceTest setResult={setResult} />} />
            <Route path="/mbti-sensitiv" element={<SkinSensitivityTest setResult={setResult} result={result} />} />
            <Route path="/mbti-pigmentation" element={<MelaninTest setResult={setResult} result={result} />} />
            <Route path="/mbti-wrinkles" element={<ElasticityWrinkleTest result={result} setResult={setResult} />} />
            <Route path='/mbti-result' element={<Result/>} />
            <Route path='/myPage' element={<UsrInfo/>}> </Route>
            <Route path='/wishList' element={<WishList/>}/>
        


          </>
        )}
        {!isAuthenticated && <Route path="*" element={<Navigate to="/login" />} />}
      </Routes>
    </>
  );
}

export default App;

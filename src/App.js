import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Main from './main/Main'
import Signup from './SignIn/Signup';
import NavbarContainer from './navbar/Navbar';
import Survey from './SkinType/Survey';
import ProductPage from './product/ProductPage';
import Login from './SignIn/Login';
// import UsrInfo from './MyPage/UsrInfo';

function App() {
  return (
    <>
      <NavbarContainer/> 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/mbti-test' element={<Survey/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>

    </>
  );
}

export default App;

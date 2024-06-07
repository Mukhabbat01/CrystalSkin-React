import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import logoText from '/Users/mukhabbatabduzhalilova/Documents/webprogramming/src/img/logoText.png';
import './Navbar.css';
import user from '../img/user.png'
import heart from '../img/heart.png'

function NavbarContainer() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 액세스 토큰 확인
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(accessToken ? true : false);
  }, []);

  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로컬 스토리지에서 액세스 토큰 제거
    localStorage.removeItem('accessToken');

    // 로그아웃 후 로그인 페이지로 이동
    navigate('/login');
  };

  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand>
          <img
            alt="Crystal Skin"
            src={logoText}
            width="240"
            height="70"
            className="d-inline-block align-top"
            onClick={() => navigate('/')}
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => navigate('/products')}>상품페이지</Nav.Link>
            <Nav.Link onClick={() => navigate('/mbti-test')}>피부 진단 테스트</Nav.Link>

            <Nav.Link className="nav-item-container" onClick={() => navigate('/myPage')}>
              My
            <img src={user} width={24}  alt="User" />
            </Nav.Link  >
          
            <Nav.Link className="nav-item-container" onClick={() => navigate('/wishList')}>찜
            <img src={heart} width={24} alt='heart'/>
            </Nav.Link>
            {isLoggedIn ? (
              <Nav.Link className="login-link" onClick={handleLogout}>로그아웃</Nav.Link>
            ) : (
              <Nav.Link className="login-link" onClick={() => navigate('/login')}>로그인</Nav.Link>
            )}
            {/* <Nav.Link onClick={() => navigate('/signup')}>회원가입</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;

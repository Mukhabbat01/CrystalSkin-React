import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import logoText from '/Users/mukhabbatabduzhalilova/Documents/webprogramming/src/img/logoText.png';
import './Navbar.css'

function NavbarContainer() {
  let navigate = useNavigate();

  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand>
          <img alt="Crystal Skin" src={logoText} width="200" height="60"
            className="d-inline-block align-top" onClick={() => navigate('/')} />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => navigate('/products')}>상품페이지</Nav.Link>
            <Nav.Link  onClick={() => navigate('/mbti-test')}>피부 진단 테스트</Nav.Link>
            <Nav.Link  onClick={() => navigate('/login')}>로그인</Nav.Link>
            {/* <Nav.Link  onClick={() => navigate('/signup')}>회원가입</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;

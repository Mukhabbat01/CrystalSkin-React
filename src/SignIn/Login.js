import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function Login({ setIsAuthenticated }) {
  const [usrLogin, setUsrLogin] = useState({
    usrId: '',
    pass: '',
  });

  const navigate = useNavigate();

  const loginForm = (e) => {
    const { name, value } = e.target;
    setUsrLogin({
      ...usrLogin,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post('/login', null, {
        params: {
          ...usrLogin,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // 로그인 성공 시 인증 상태 업데이트 및 액세스 토큰 저장
          setIsAuthenticated(true);
          localStorage.setItem('accessToken', res.data.accessToken);
          

          navigate('/');
        } else {
          alert('로그인에 실패했습니다.');
        }
      })
      .catch((error) => {
        console.error('login error', error);
        alert('로그인 중 오류가 발생했습니다.');
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <label>
          아이디:
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            name="usrId"
            onChange={loginForm}
            value={usrLogin.usrId}
          />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="pass"
            onChange={loginForm}
            value={usrLogin.pass}
          />
        </label>
        <br />
        <button onClick={login}>로그인</button>
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

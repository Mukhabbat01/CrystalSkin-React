import { Link } from "react-router-dom";
import './Login.css';
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [usrLogin, setUsrLogin] = useState({
    usrId: '',
    pass: '',
  });

  const loginForm = (e) => {
    const { name, value } = e.target;
    setUsrLogin({
      ...usrLogin,
      [name]: value
    });
  };

  const login = () => {
    axios.post('/login', null, {
      params: {
        ...usrLogin
      }
    }).then(function (res) {
      console.log(res.data);
    }).catch(function (error) {
      console.error("login error", error);
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <label>
          아이디:
          <input
            type="text"
            placeholder="아이디를 입력해주새요"
            name="usrId"
            onChange={loginForm}
            value={usrLogin.usrId}
          />
        </label>
        <br/>
        <label>
          비밀번호:
          <input
            type="password"
            placeholder="비밀번호를 입력해주새요"
            name="pass"
            onChange={loginForm}
            value={usrLogin.pass}
          />
        </label>
        <br/>
        <button onClick={login}>login</button>
        <div>
          <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p>
        </div>
      </div>
    </div>
  );
}

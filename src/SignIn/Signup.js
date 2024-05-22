import axios from "axios";
import React, { useState } from "react";
import './Signup.css';

function Signup() {
    const [verificationCode, setVerificationCode] = useState('');
    const [showVerificationInput, setShowVerificationInput] = useState(false); // 인증 번호 input의 가시성 상태
    const [showRegisterButton, setShowRegisterButton] = useState(false); // 등록 버튼의 가시성 상태

    const [usrInfo, setUserInfo] = useState({
        usrId: '',
        usrName: '',
        email: '',
        usrBirth: '',
        gender: '',
        pass: '',
        phone: ''
    });

    const onChangeHandling = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...usrInfo,
            [name]: value
        });
    }

    function signIn(event) {
        event.preventDefault();

        axios.post('/api/userSave', {
            ...usrInfo,
            code: verificationCode
        })
        .then(function(response) {
            console.log(response.data);
            alert('회원가입이 완료되었습니다.');
        })
        .catch(function(error) {
            console.error('회원가입시 사용자 정보 에러', error);
            alert('회원가입 중 오류가 발생했습니다.');
        });
    }

    function sendVerificationCode() {
        if (!usrInfo.phone) {
            alert("전화번호를 입력해주세요");
            return;
        }

        axios.post('/send/sms', null, {
            params: { phone: usrInfo.phone }
        })
        .then(function(response) {
            console.log(response.data); 
            setShowVerificationInput(true);
            setShowRegisterButton(false); 
        })
        .catch(function(error) {
            console.error('Error sending SMS', error);
            alert('인증 번호 전송 중 오류가 발생했습니다.');
        });
    }

    function verifyCode() {
        axios.post('/verify/code', {
            phone: usrInfo.phone,
            code: verificationCode
        })
        .then(function(response) {
            console.log(response.data);
            setShowRegisterButton(true); 
            alert('인증 번호가 확인되었습니다.');
        })
        .catch(function(error) {
            console.error('Error verifying code', error);
            alert('인증 번호 확인 중 오류가 발생했습니다.');
        });
    }

    return (
        <div className="signup-container">
            <form onSubmit={signIn}> 
                <label>아이디:</label> 
                <input name="usrId" placeholder="아이디를 입력해주세요" type="text" onChange={onChangeHandling} value={usrInfo.usrId} required /><br />
                <label>이름:</label> 
                <input name="usrName" placeholder="이름을 입력해주세요" type="text" onChange={onChangeHandling} value={usrInfo.usrName} required /><br />
                <label>이메일:</label> 
                <input name="email" placeholder="이메일을 입력해주세요" type="email" onChange={onChangeHandling} value={usrInfo.email} required /><br />
                <label>생년월일:</label> 
                <input name="usrBirth" placeholder="생년월일을 입력해주세요" type="date" onChange={onChangeHandling} value={usrInfo.usrBirth} required /><br />
                <label>성별:</label> 
                <select name="gender" onChange={onChangeHandling} value={usrInfo.gender} required>
                    <option value=''>선택해주세요</option>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                </select><br />
                <label>비밀번호:</label> 
                <input name="pass" placeholder="비밀번호를 입력해주세요" type="password" onChange={onChangeHandling} value={usrInfo.pass} required /><br />
                <label>전화번호:</label> 
                <input name="phone" placeholder="전화번호를 입력해주세요" type="text" onChange={onChangeHandling} value={usrInfo.phone} required />
                <button type="button" onClick={sendVerificationCode}>인증</button><br />
                {showVerificationInput && (
                    <>
                        <label>인증 번호:</label> 
                        <input name="verificationCode" placeholder="인증 번호를 입력해주세요" type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required /><br />
                        <button type="button" onClick={verifyCode}>인증 확인</button><br />
                    </>
                )}
                {showRegisterButton && (
                    <button type="submit">등록</button>
                )}
            </form> 
        </div>
    );
}

export default Signup;

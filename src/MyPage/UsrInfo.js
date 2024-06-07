import axios from "axios";
import { useState, useEffect } from "react";
import SignOut from "../SignIn/SignOut";
import './UsrInfo.css'

function UsrInfo() {
    const [usrInfo, setUsrInfo] = useState([]);
    const accessToken = localStorage.getItem('accessToken'); 

    useEffect(() => {
        if (accessToken) {
            axios.get('/api/userView', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((res) => {
                console.log(res.data);
                setUsrInfo(res.data);
            })
            .catch((error) => {
                console.error("Error fetching user info:", error);
            });
        }
    }, [accessToken]);
    
    return (
        <div>
            {usrInfo.map((param, index) => (
                <div key={index} className="user-info">
                    <p>이름: {param.usr_name}</p>
                    
                    <p>아이디: {param.usr_id}</p>
                    <p>비밀번호: {param.pass}</p>
                    <p>이메일: {param.email}</p>
                    <p>성별: {param.gender}</p>
                    <p>전화번호: {param.phone}</p>
                    <p>생년월일: {param.usr_birth}</p>
                    <p>피부 타입: {param.skin_type}</p>
                </div>
            ))}
            <SignOut/>
        </div>
    );
}

export default UsrInfo;

import axios from "axios";
import { useState, useEffect } from "react";
import SignOut from "../SignIn/SignOut";
import './UsrInfo.css'
import Table from 'react-bootstrap/Table';

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
        <div className="user-info-container">
            <Table striped="columns" className="table-striped-columns">
                <tbody>
                    {usrInfo.map((param, index) => (
                        <div key={index} className="user-info">
                            <tr>
                                <td>이름:</td>
                                <td>{param.usr_name}</td>
                            </tr>
                            <tr>
                                <td>아이디:</td>
                                <td>{param.usr_id}</td>
                            </tr>
                            <tr>
                                <td>비밀번호:</td>
                                <td>{param.pass}</td>
                            </tr>
                            <tr>
                                <td>이메일:</td>
                                <td>{param.email}</td>
                            </tr>
                            <tr>
                                <td>성별:</td>
                                <td>{param.gender}</td>
                            </tr>
                            <tr>
                                <td>전화번호:</td>
                                <td>{param.phone}</td>
                            </tr>
                            <tr>
                                <td>생년월일:</td>
                                <td>{param.usr_birth}</td>
                            </tr>
                            <tr>
                                <td>피부 타입:</td>
                                <td>{param.skin_type}</td>
                            </tr>
                        </div>
                    ))}
                </tbody>
            </Table>
            <SignOut/>
        </div>
    );
}

export default UsrInfo;

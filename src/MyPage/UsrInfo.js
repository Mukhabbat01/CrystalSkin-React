import axios from "axios";
import { useState, useEffect } from "react";

function UsrInfo(){
    let [usrInfo, setUsrInfo] = useState([]);

    useEffect(()=>{
        axios.get('/api/userView')
        .then((res)=>{
            console.log(res)
            setUsrInfo(u => ([...u, ...res.data]))})
    },[])
    
    return (
        <div>
             {usrInfo.map((param, index) => (
                <div key={index}>
                    <p>{param.usr_name}</p>
                    <p>{param.usr_id}</p>
                    <p>{param.email}</p>
                    <p>{param.gender}</p>
                    <p>{param.pass}</p>
                    <p>{param.phone}</p>
                    <p>{param.usr_birth}</p>
                </div>
            ))} 
        </div>
    )
}

export default UsrInfo;
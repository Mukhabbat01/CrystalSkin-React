import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignOut(){
    const accessToken = localStorage.getItem('accessToken')
    const navigate = useNavigate();

    const deleteUser = () => {
    axios.post("/signOut", null, {
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
 
    }).then((res)=>{
        console.log("회원탈퇴에 성공하셨습니다!")
        alert('회원탈퇴에 성공하셨습니다!')
        navigate('/')
        localStorage.removeItem('accessToken')
    }).catch((err)=>{
        console.log(err)
    })
}
    return (
        <div>
            <button onClick={deleteUser}>회원탈퇴</button>
        </div>
    )
}
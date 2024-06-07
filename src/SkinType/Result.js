import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Result.css'

export default function Result(){
    let [resultInfo, setResultInfo] = useState([]);
    let [prdForMbti, setPrdForMbti] = useState([]);
    const accessToken = localStorage.getItem('accessToken'); 
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('/result', {
            headers: {
                Authorization: `Bearer ${accessToken}`
              }
        })
        .then((res)=>{
            console.log(res)
            setResultInfo(result => ([...result, ...res.data]))})
    },[accessToken])

    useEffect(()=>{
        axios.get('/productsForMbti', {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        }).then((res) =>{
            console.log(res.data)
            setPrdForMbti(prdForMbti => ([...prdForMbti, ...res.data]))
        })
    }, [accessToken])

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
      };

    return (
        <div className="result">
            <h1>Result</h1>
            {resultInfo.map((paramKey, indexKey) => (
                  <div key={indexKey}>
                  <p>당신의 피부 MBTI은 <strong>{paramKey.skin_type}</strong> 입니다!</p>
                    <p><strong>{paramKey.skin_type}</strong> 타입에 적합한 제품을 추 천해드려요.</p>
                    <div></div>
                  </div>
            ))}

            <div className="result-list">
                {prdForMbti.map(product => (
                    <div key={product.prd_id} className="result-item" onClick={() => handleProductClick(product.prd_id)}>
                        {product.file_id && (
                            <img 
                                src={`http://localhost:8088/uploads/${product.file_id}`} 
                                alt={product.title} 
                                className="result-image" 
                            />
                        )}
                        <h2>{product.title}</h2>
                        <p className="result-main-price">{product.price.toLocaleString()}원</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Result.css';

export default function Result() {
    const [resultInfo, setResultInfo] = useState([]);
    const [prdForMbti, setPrdForMbti] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                const [resultResponse, productsResponse] = await Promise.all([
                    axios.get('/result', {
                        headers: { Authorization: `Bearer ${accessToken}` }
                    }),
                    axios.get('/productsForMbti', {
                        headers: { Authorization: `Bearer ${accessToken}` }
                    })
                ]);
                setResultInfo(resultResponse.data);
                setPrdForMbti(productsResponse.data);
                console.log(resultResponse.data)
                console.log(productsResponse.data)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchResults();
    }, [accessToken]);

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
    };



    const groupProductsByCategory = (products) => {
        return products.reduce((acc, product) => {
            const { cat_id } = product; 
            if (!acc[cat_id]) {
                acc[cat_id] = [];
            }
            acc[cat_id].push(product);
            return acc;
        }, {});
    };

    const groupedProducts = groupProductsByCategory(prdForMbti);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div className="result">
    
            {resultInfo.map((info, index) => (
                <div key={index} className="result-info">
                    <p className="resultType">당신의 피부 MBTI은 <strong className="strong">{info.skin_type}</strong> 입니다!</p>
                   <div> {info.skin_file && (
                        <img 
                            src={`http://localhost:8088/skinFiles/${info.skin_file}`} 
                            alt={`Skin type ${info.skin_type}`}
                            className="skin-image"
                        />
                    )}
                    </div>
                    <p><strong>{info.skin_type}</strong> 타입에 적합한 제품을 추천해드려요.</p>
                </div>
            ))}

            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="category-group">
                    <h2>{category}</h2>
                    <div className="result-list">
                        {groupedProducts[category].map(product => (
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
            ))}
        </div>
    );
}

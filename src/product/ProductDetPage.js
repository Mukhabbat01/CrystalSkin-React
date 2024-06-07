import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8088/products/${id}`)
      .then(response => {
        setProduct(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error fetching the product!');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        {product.file_id && (
          <img 
            src={`http://localhost:8088/uploads/${product.file_id}`} 
            alt={product.title} 
            className="product-detail-image" 
          />
        )}
        <div className="product-detail-info">
          <h1>{product.title}</h1>

          <p>{product.des}</p>
         
          <p className="product-price">{product.price.toLocaleString()}원</p>
        </div>
        </div>
        <div   className="product-des-image" >
          {product.file_des && (
            <img 
              src={`http://localhost:8088/files/${product.file_des}`} 
              alt={product.title} 
            
            />
          )}
        </div>
  
    </div>
  );
}

export default ProductDetailPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const [productDet, setProductDet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8088/products/${id}`)
      .then(response => {
        setProductDet(response.data);
        console.log(response.data);
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

  if (!productDet) {
    return <div>No product details available</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        
        {productDet.file_id && (
          <img
            src={`http://localhost:8088/uploads/${productDet.file_id}`}
            alt={productDet.title}
            className="product-detail-image"
          />
        )}
        <div className="product-detail-info">
          <h1>{productDet.title}</h1>

          <p className="product-price">{productDet.price.toLocaleString()}원</p>
        </div>
      </div>
      <div className="product-des-image">
        {productDet.file_des && (
          <img
            src={`http://localhost:8088/files/${productDet.file_des}`}
            alt={productDet.title}
          />
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;

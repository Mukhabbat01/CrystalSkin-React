import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [wishList, setWishList] = useState(new Set());
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken'); 

  useEffect(() => {
    axios.get('http://localhost:8088/products')
      .then(response => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  useEffect(() => {
    axios.get('/viewWishList', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      const wishProductIds = response.data.map(product => product.prd_id);
      setWishList(new Set(wishProductIds));
    })
    .catch(error => {
      console.error('There was an error fetching the wishlist!', error);
    });
  }, [accessToken]);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const toggleWishList = (product) => {
    if (wishList.has(product.prd_id)) {
      axios.post('/wishRemove', {
        prdId: product.prd_id, 
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(() => {
        setWishList(prevWishList => {
          const newWishList = new Set(prevWishList);
          newWishList.delete(product.prd_id);
          return newWishList;
        });
      })
      .catch(error => {
        console.error('There was an error removing the product from the wishlist!', error);
      });
    } else {
      axios.post('/wishSave', {
        prdId: product.prd_id, 
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(() => {
        setWishList(prevWishList => new Set([...prevWishList, product.prd_id]));
      })
      .catch(error => {
        console.error('There was an error adding the product to the wishlist!', error);
      });
    }
  };

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.prd_id} className="product-item">
            {product.file_id && (
              <img 
                src={`http://localhost:8088/uploads/${product.file_id}`} 
                alt={product.title} 
                className="product-image" 
                onClick={() => handleProductClick(product.prd_id)}
              />
            )}
            <h2 className="prdTitle" onClick={() => handleProductClick(product.prd_id)}>{product.title}</h2>
            <p className="product-main-price">{product.price.toLocaleString()}원</p>
            <button 
              onClick={() => toggleWishList(product)}
              className={wishList.has(product.prd_id) ? 'wish-added' : ''}
            >
              {wishList.has(product.prd_id) ? '🩵' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './WishList.css'

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8088/viewWishList', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setWishlist(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error fetching wishlist:', error);
    });
  }, [accessToken]);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.some(item => item.prd_id === productId)) {
      axios.post('/wishRemove', { prdId: productId }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(() => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item.prd_id !== productId));
      })
      .catch(error => {
        console.error('Error removing product from wishlist:', error);
      });
    } else {
      axios.post('/wishSave', { prdId: productId }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(() => {
        setWishlist(prevWishlist => [...prevWishlist, { prd_id: productId }]);
      })
      .catch(error => {
        console.error('Error adding product to wishlist:', error);
      });
    }
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <div className="wish-list">
        {wishlist.length > 0 ? (
          wishlist.map(product => (
            <div key={product.prd_id} className="wish-item">
              <img 
                src={`http://localhost:8088/uploads/${product.file_id}`} 
                alt={product.title} 
                className="wish-image" 
                onClick={() => handleProductClick(product.prd_id)}
              />
              <h2>{product.title}</h2>
              <p className="wish-main-price">{product.price.toLocaleString()}원</p>
              <button 
                onClick={() => toggleWishlist(product.prd_id)}
                className={wishlist.some(item => item.prd_id === product.prd_id) ? 'wish-added' : ''}
              >
                {wishlist.some(item => item.prd_id === product.prd_id) ? '🩵' : '🤍'}
              </button>
            </div>
          ))
        ) : (
          <p>No items in wishlist</p>
        )}
      </div>
    </div>
  );
}

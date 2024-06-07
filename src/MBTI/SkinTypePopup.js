import React from 'react';
import './SkinTypePopup.css';

function SkinTypePopup({ skinType, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{skinType.title}</h2>
        <img src={skinType.image} alt={skinType.title} className='image'/>
        <p>{skinType.description}</p>
      </div>
    </div>
  );
}

export default SkinTypePopup;

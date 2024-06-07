import React, { useState } from 'react';
import './SkinTypes.css';
import skinTypesData from './skinTypesData';
import SkinTypePopup from './SkinTypePopup';

function SkinTypes() {
  const [selectedSkinType, setSelectedSkinType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedSkinType(skinTypesData[type]);
  };

  const closePopup = () => {
    setSelectedSkinType(null);
  };

  return (
    <div className="wrapper">
      {Object.keys(skinTypesData).map((type, index) => (
        <div key={type} className="hex" onClick={() => handleTypeClick(type)}>
          <div className='hex-inner1'>
            <div className='hex-inner2'>
              <div className={`skin-type-box ${type}`}>
              <p className={`text ${type === 'MBTI' ? 'special-text' : ''}`}>{type}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedSkinType && <SkinTypePopup skinType={selectedSkinType} onClose={closePopup} />}
    </div>
  );
}

export default SkinTypes;

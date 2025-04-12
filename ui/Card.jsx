import React, { useState } from 'react';
import './card.css'; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons"; // Import the eye icon
import Cvbutton from './Cvbutton';
import Footer from './Footer';

const Card = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="card-containers">
       <div className='reg'>
        <h1>Resume</h1>
      </div>
      <div className="card-wrappers">
     
        <div className="cardss">
          <div className="card-ints">
            <div className="hello">
              <img src="/images/cv.png" alt="Resume" />
            </div>
          </div>

          {/* Top Section */}
          <div className="top">
            <div className="camera">
              <div className="int"></div>
            </div>
            <div className="speaker"></div>
          </div>

          <div className="m">
            {/* iPad-Style Round Button */}
            <div className="round-button"></div>

            {/* Eye Icon with Shake Animation */}
            <div 
              className="eye-container" 
              onClick={toggleFullscreen} 
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <FontAwesomeIcon icon={faEye} className="eye-icon" />
            </div>
          </div>

          {/* Tooltip (Separate from Icon) */}
          {showTooltip && <div className="custom-tooltip">Click here to view</div>}
        </div>
      </div>

      {/* Full-Screen Image Popup */}
      {isFullscreen && (
        <div className="image-popup active" onClick={toggleFullscreen}>
          <img src="/images/cv.png" alt="Full-Screen Resume" />
        </div>
      )}
           <div className='edits'>
      <div className="edit"><Cvbutton /></div></div>
      <Footer/>
    </div>
  );
};

export default Card;

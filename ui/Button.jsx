import React from 'react';
import styled from 'styled-components';

const Button = () => {
  const handleHireMeClick = () => {
    const email = "parentsgod50@gmail.com"; 
    const subject = encodeURIComponent("Hire Request");
    const body = encodeURIComponent("Hi Sanjay, I am reaching out to you because...");

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Create an anchor element dynamically
    const anchor = document.createElement("a");
    anchor.href = mailtoLink;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <StyledWrapper>
      <button className="button" onClick={handleHireMeClick}>
        Hire Me
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 120px;
    height: 40px;
    background-color: #000;
    display: flex;
    align-items: center;
    color: white;
    flex-direction: column;
    justify-content: center;
    border: none;
    padding: 12px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
    gap: 12px;
    font-size:16px;
    border-radius: 8px;
    cursor: pointer;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -4px;
    top: -1px;
    margin: auto;
    width: 128px;
    height: 48px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .button::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .button:hover::after {
    filter: blur(30px);
  }

  .button:hover::before {
    transform: rotate(-180deg);
  }

  .button:active::before {
    scale: 0.7;
  }
`;

export default Button;

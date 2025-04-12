import React, { useState } from "react";
import PortfolioIntro from "../ui/PortfolioIntro";



import "./home.css";



import Button from "../ui/Button";
import Footer from "../ui/Footer";


function Home() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="home-container">
      {!showHome && <PortfolioIntro onAnimationComplete={() => setShowHome(true)} />}

      {showHome && (
        <>
         
          <section className="navbar-section">
            
          </section>

        
          <div className="s">
          <section className="content-section">
            <div className="mains">
              <h1 className="headings">
                Hi, I'm Sanjay <span className="wave">👋</span>
              </h1>

              <div className="loader">
                <p>I'm a </p>
                <div className="words">
                  <span className="word">Fullstack Web Developer.</span>
                  <span className="word">Creative Web Enthusiast.</span>
                  <span className="word">Backend Specialist.</span>
                  <span className="word">IT student.</span>
                  <span className="word">Lover of clean code.</span>
                </div>
              </div>

              <div className="button-class">
                <Button />
              </div>
            </div>
          </section>

         
          <section className="image-section">
            <div className="st">
              <img src="https://raw.githubusercontent.com/hasibul-hasan-shuvo/hasibul-hasan-shuvo/main/images/coding-boy.gif" alt="Profile" className="sanj" />
            </div>
          </section></div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;

import React from 'react'
import "./foot.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram ,faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className='dot'>
     <section className="find">
            
            <div className="find2">
            <a href="https://github.com/Sanjay112005" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="finds" />
                </a>
                <a href="https://www.linkedin.com/in/sanjay-v-095299a1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#74C0FC",}} /> </a>
  
                <a href="https://www.instagram.com/accounts/login/?next=%2Fv_sanjay_07%2F&source=omni_redirect" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{color: "#d61f8a",}} /></a>
             
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXFCLFPbVjMsQMRDWSctrLFrJvMPQCvbZZrnFKxMNCcDWXgJxDTHMdtmjtXjdCmbmDXGX" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faM} style={{color: "#ff0000",}} /></a>
                
                <a href="https://wa.me/916385517276?text=Hi%20Sanjay%2C%20I%20visited%20your%20portfolio." target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} style={{color: "#18e74c",}} /></a>
  </div>
    
            </section>
            <footer className="foot">
              <p>© 2025 Sanjay</p>
            </footer> 
    </div>
  )
}

export default Footer

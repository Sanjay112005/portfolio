import React from 'react'
import './about.css'
import {  CardHoverEffectDemo } from '../ui/CardHoverEffectDemo'
import { HoverEffect } from '../ui/HoverEffect'
import Footer from '../ui/footer'


function About() {
   
 
  return (
   
   
   <div className='mainss'>
   
   <div className='ab'>
      About Us
    </div>
   <div className='about1'>
   
      <div className='about2'>
        <h1>Know Who <span> I'M</span> </h1>
        <div className='sans'>
        <p>Hi Everyone , I am <span>Sanjay</span> from <span>Kanchipuram, India </span></p>
        <p > I am currently a 3rd-year student pursuing Information Technology at B.S.Abdur Rahman Crescent Institute of Science & Technology</p>
        <p >I have a strong passion for coding and web development, constantly exploring new technologies to enhance my skills.</p></div>
        <p className='sanss'>Apart from coding, some other activities that I love to do!</p>

          <div className='sansss'>
            <p>⫸⫸ <span>  Exploring New Technologies</span></p>
            <p>⫸⫸  <span>Playing Games</span></p>
            <p>⫸⫸  <span>Travelling</span> </p>
            <p>⫸⫸  <span> Listening Musics</span></p>
          </div>

          <div className='lang'>
            <h3>Languages Known</h3>
            <button>English</button>
            <button className='tamil'>Tamil</button>

          </div>
          <div className='quote'>
            <p>"Build not just for today, but for the future!"</p>
            <p>-Sanjay</p>
          </div>
      </div>
      <div className='imgs'>
        <img src="about.png" alt="" />
      </div>
    </div>

  

    <section>
      <div className='styles'>
        <p>Professional <span>Skillset</span></p>
      </div>
      <div className='ali'>
     <CardHoverEffectDemo />
     <HoverEffect />
    
      </div>
      </section>
      <Footer />
    </div>
  )
}

export default About

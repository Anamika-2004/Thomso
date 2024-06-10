import React from 'react';
import '../Styles/Hero.css';
import sun from '../assets/sun.png';
import Cartoon from '../assets/Cartoon.png';
import Trusted from '../assets/Trusted.png';
const Hero=()=>{
  return(
    <>
    <div className="hero">
      {/** top portion**/}
      <div className="top">
        <div className='logo'>
          <div className="star">
            <img className="sunimg" src={sun}/>
          </div>
          <span>BANQUEE</span>
        </div>
        <div className="hamburger">☰</div>
      </div>
      {/** middle portion**/}
      <div className="middle">
        <div className="middleLeft">
          <div className='mid_heading'>
            <img className="sun_mid_img" src={sun}/>
            <h1>EASY WAY TO<br/> BANKING</h1>
          </div>
          <div className="mid_para">
            We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.
          </div>
          <div className="mid_button">
            <h2>GET STARTED</h2>
            <div className="btn_icon">‣‣</div>
          </div>
        </div>
        <div className="middleRight">
          <img className="cartoon_img" src={Cartoon}/>
        </div>

      </div>

          
        

      
    </div>
          {/**bottom portion**/}
      <div className="bottom">
        <img className="trusted_img" src={Trusted}/>
        </div>
        </>)
}
export default Hero;


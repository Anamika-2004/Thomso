import React from 'react';
import '../Styles/Card_1.css';
import House from '../assets/House.png';
const Card_1=()=>{
  return(
    <div className="Card_1">
      <div className='card_1_container'>
        <div className="left_content">
          <img src={House}/>
        </div>
        <div className="right_content">
          <h1>GO DIGITAL NOW!</h1>
          <p>Our digital platform allows you to access your money from anywhere, anytime. Which our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today</p>
          <div className="mid_button">
            <h2>GET STARTED</h2>
            <div className="btn_icon">‣‣</div>
          </div>          
        </div>        
      </div>
    </div>)
}
export default Card_1;
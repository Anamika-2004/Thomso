import React from 'react';
import '../Styles/Newsletter.css';
import sun from '../assets/sun.png';
const Newsletter=()=>{
  return(
  <div className="Newsletter">
    <div className="news_card">
      <div className='top_card'>
        <h2>SUBSCRIBE TO OUR NEWSLETTER FOR A 10% BONUS ON TRANSACTIONS</h2>
        <img src={sun}/>
      </div>
      <div className="bottom_card">
        <div className="field">
        <input type="email" id="email" placeholder="Your email address"/>
        <button className="btn">SUBSCRIBE</button>
        </div>

       
      </div>
    </div>
  </div>)
}
export default Newsletter;
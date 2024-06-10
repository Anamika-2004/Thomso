import React from 'react';
import '../Styles/Mini.css';
import Minii from '../assets/Minii.png';
const Mini=()=>{
  return(
    <div className="Mini">
      <h1 className="feature_heading">
        WE TAKE BANKING PERSONALLY
      </h1>
      <div className="mini_container">
      <div className="leftMini">
        <div className="info">
          <h2>SAVE</h2>
          <p>We’re using technology to solve that by automating saving. You set an amount to save and we takes care of the rest, prompt interest payout included.</p>
        </div>
        <div className='info' id="move_right">
          <h2>SPEND</h2>
          <p>We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your account.</p>
        </div>
        <div className='info'>
          <h2>SEND</h2>
          <p>From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.</p>
        </div>
        
        
        
      </div>
      <div className='rightMini'>
        <img src={Minii}/>
      </div>        
      </div>

    </div>)
}
export default Mini;
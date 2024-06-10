import React from 'react';
import '../Styles/BlackCard.css';

const BlackCard=({src,text})=>{
  
  return(
    <div className="blackCard">
      <img src={src} className="black_card_img"/>
      <h1>{text}</h1>
      
    </div>)
}
export default BlackCard;

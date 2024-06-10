import React from 'react';
import '../Styles/OrangeCard.css';
const OrangeCard=({src,text})=>{
  return(
    <div className="orangeCard">
      <img src={src} className="O_img"/>
      <h1>{text}</h1>
    </div>)
}
export default OrangeCard;
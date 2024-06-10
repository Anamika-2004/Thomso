import React from 'react';
import '../Styles/BusineseCard.css';

const BusinessCard=({src, text,id})=>{
  
  return(
    <div className="BusinessCard" id={id}>
        <img src={src} />
        <h2>{text}</h2>
     
    </div>)
}
export default BusinessCard;
import React from 'react';
import '../Styles/PurpleCard.css'; 
const PurpleCard=({que})=>{
  return(
    <div className="PurpleCard">
      <h2>{que}</h2> 
      <span>+</span>
    </div>)
}
export default PurpleCard;
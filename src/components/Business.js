import React from 'react';
import '../Styles/Business.css';
import Cartoon_1 from '../assets/Cartoon_1.png';
import Cartoon_2 from '../assets/Cartoon_2.png';
import Cartoon_3 from '../assets/Cartoon_3.png';
import BusinessCard from './BusinessCard.js';
const Business=()=>{
  let busi=[
    {id:"hello",
    src:Cartoon_1,
    text:"FOR SMALL BUSINESSES",
  },
     { id:12,
    src:Cartoon_2,
    text:"FOR STARTUPS",
     },
         {id:13,
    src:Cartoon_3,
    text:"FOR ENTERPRISES",
  }
  
  ]
  return(
    <div className="Business">
      <div className="feature_heading">
        DESIGNED FOR BUSINESSES OF ALL SIZES
      </div>
      <div className="business_container">
        <BusinessCard  id={busi[0].id} src={busi[0].src} text={busi[0].text}/>
        <BusinessCard  id={busi[1].id} src={busi[1].src} text={busi[1].text}/>
        <BusinessCard  id={busi[2].id} src={busi[2].src} text={busi[2].text}/>        
      </div>
    </div>)
}
export default Business;
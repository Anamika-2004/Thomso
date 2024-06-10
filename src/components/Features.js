import React from 'react';
import '../Styles/Features.css';
import Ph_3 from '../assets/Ph_3.png';
import Ph_4 from '../assets/Ph_4.png';
import Ph_1 from '../assets/Ph_1.png';
import Ph_2 from '../assets/Ph_2.png';
import BlackCard from './BlackCard.js';
import OrangeCard from './OrangeCard.js';
const Features=()=>{
  let BCardInfo=[
    { id:0,
      src:Ph_3,
      text:"Card Payments Anytime",
    },
    { id:1,
      src:Ph_4,
      text:"Secure Online Banking",
    },    
    { id:2,
      src:Ph_1,
      text:"No Hidden Fees",
    },       
     { id:3,
      src:Ph_2,
      text:"Automatic Bill Payment",
    },      
    ]
  return(
    <div className="Features">
      <div className="feature_heading">ALL FEATURES YOU NEED<br/> IN ONE PLACE</div>
      {/**1**/}
      <div className="top">
        <BlackCard id={BCardInfo[1].id} src={BCardInfo[1].src} text={BCardInfo[1].text}/>
        <OrangeCard id={BCardInfo[3].id} src={BCardInfo[3].src} text={BCardInfo[3].text}/>
      </div>
       {/**2**/}
      <div className="top">

        <OrangeCard id={BCardInfo[2].id} src={BCardInfo[2].src} text={BCardInfo[2].text}/>
        <BlackCard id={BCardInfo[0].id} src={BCardInfo[0].src} text={BCardInfo[0].text}/>
      </div>     
      

    </div>)
}
export default Features;

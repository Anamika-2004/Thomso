import React from 'react';
import '../Styles/Testimonial.css';
import TestCard from './TestCard.js';
import Person_1 from '../assets/Person_1.png';
import Person_2 from '../assets/Person_2.png';
const Testimonial=()=>{
  let T_info=[
    {
      id:21,
      head:"SUPER-USER FRIENDLY",
      para:"The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.",
      src:Person_1,
      about_para:"WILLIAM TROMP",
      about_info:"CTO - Gislason and Sons",
    },
        {
      id:22,
      head:"SAVED HOURS EVERYWEEK",
      para:"I have been saved so much time on tax calculations. And it gives me reliable projections.I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.",
      src:Person_2,
      about_para:"REBECCA EMARD",
      about_info:"Founder-Conn Inc",
    },
    ]
  return(
    <div className="Testimonial">
      <h1 className="feature_heading">
        TRUSTED BY THE PEOPLE ALL OVER THE WORLD
      </h1>
      <div className="test_container">
        
        <TestCard id={T_info[0].id} head={T_info[0].head} src={T_info[0].src} para={T_info[0].para} about_para={T_info[0].about_para} about_info={T_info[0].about_info}/>
          <TestCard id={T_info[1].id} head={T_info[1].head} src={T_info[1].src} para={T_info[1].para} about_para={T_info[1].about_para} about_info={T_info[1].about_info}/>
          <div class='grey_btn'>
            <span>←</span><br/>
           <br/> <span>→</span>
          </div>
      </div>
    </div>)
}
export default Testimonial;

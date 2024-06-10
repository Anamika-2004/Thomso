import React from 'react';
import '../Styles/Faq.css';
import PurpleCard from './PurpleCard.js';
const Faq=()=>{
  const question=[
    {
      id:30,
      que:"HOW MUCH WOULD IT REQUIRE TO OPEN AN ACCOUNT ?",
    },
     {
      id:31,
      que:"IS THERE A MINIMUM OPERATIONAL COST ?",
    },
    {
      id:32,
      que:"WHERE CAN I USE MY DEBITR CARDS ?",
    },
    {
      id:33,
      que:"HOW MUCH DO I GET AS INTEREST ON SAVINGS ?",
    },    
    ]
  return(
    <div className="Faq">
      <h1 className="feature_heading">
        FREQUENTLY ASKED QUESTION
      </h1>
      <div className="Faq_card_container">
        <PurpleCard id={question[0].id} que={question[0].que}/>
      </div>
       <div className="Faq_card_container">
        <PurpleCard id={question[1].id} que={question[1].que}/>
      </div>     
       <div className="Faq_card_container">
        <PurpleCard id={question[2].id} que={question[2].que}/>
      </div>   
      <div className="Faq_card_container">
        <PurpleCard id={question[3].id} que={question[3].que}/>
      </div>      
      
      
    </div>)
}
export default Faq;
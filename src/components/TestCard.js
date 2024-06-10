import React from 'react';
import '../Styles/TestCard.css';
const TestCard=({head,para,src,about_para,about_info})=>{
  return(
    <div className='TestCard'>
      <h2>{head}</h2>
      <p className='pp'>{para}</p>
      <div className="intro">
        <img src={src}/>
        <div className="about">
          <p className="bold">{about_para}</p>
          <p>{about_info}</p>
        </div>
      </div>
    </div>)
}
export default TestCard;
import React from "react";
import puma from '../assets/images/puma.png'
import raymond from '../assets/images/raymond.png'
import cello from '../assets/images/cello.png'
import ncert from '../assets/images/ncert.png'
import slazenger from '../assets/images/slazenger.png'


export default function Partners() {
  return (
    <div className="partners-c">
      <div className="featured-h">Our Trusted Partners</div>
      <div className="tc-container">
        <div className="partner-card">
            <img className="p-img" src={puma}/>
        </div>
        <div className="partner-card">
            <img className="p-img" src={raymond}/>
        </div>
        <div className="partner-card">
            <img className="p-img" src={cello}/>
        </div>
        <div className="partner-card">
            <img className="p-img" src={ncert}/>
        </div>
        <div className="partner-card">
            <img className="p-img" src={slazenger}/>
        </div>
      </div>
    </div>
  );
}

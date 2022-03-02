import React from "react";
import featured from "../assets/images/featured.png";

export default function Featured() {
  return (
    <div className="featured-c">
      <div className="featured-h">Featured Schools</div>
      <div className="tc-container">
        <div className="featured-card">
          <div>
            <img src={featured} />
          </div>
          <div className="featured-name">DPS, Jodhpur</div>
          <div className="featured-sh">Pop, R&B</div>
        </div>

        <div className="featured-card">
          <div>
            <img src={featured} />
          </div>
          <div className="featured-name">DPS, Jodhpur</div>
          <div className="featured-sh">Pop, R&B</div>
        </div>
        <div className="featured-card">
          <div>
            <img src={featured} />
          </div>
          <div className="featured-name">DPS, Jodhpur</div>
          <div className="featured-sh">Pop, R&B</div>
        </div>
        <div className="featured-card">
          <div>
            <img src={featured} />
          </div>
          <div className="featured-name">DPS, Jodhpur</div>
          <div className="featured-sh">Pop, R&B</div>
        </div>
      </div>
      <button className="l-more">See All</button>
    </div>
  );
}

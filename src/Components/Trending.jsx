import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import trending from "../assets/images/trending.png";

export default function Trending() {
  return (
    <div className="featured-c">
      <div className="featured-h">Trending</div>
      <div className="t-sh">
        Check out our best seller products on BTC right now!
      </div>
      <div className="tc-container">
        <div className="t-card">
          <div className="row">
            <div className="s-div1">
              <button className="sale">SALE</button>
            </div>
            {/* <div className="col-lg-4"></div> */}
            <div className="s-div2">
              <AiOutlineHeart className="like" />
            </div>
          </div>
          <div className="row">
            <img src={trending} className="tc-img" />
          </div>
          <div className="row tc-r">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <span className="rating">4.9</span>
            <span className="tr-r-c">(2,401 ratings)</span>
          </div>
          <div className="tc-title">Macbook Pro M1 13 inch...</div>
          <div className="tc-p">
            <span className="tc-price">$799</span>{" "}
            <span className="tc-cancelled">$899</span>
          </div>
        </div>
       
        <div className="t-card">
          <div className="row">
            <div className="s-div1">
              <button className="sale">SALE</button>
            </div>
            {/* <div className="col-lg-4"></div> */}
            <div className="s-div2">
              <AiOutlineHeart className="like" />
            </div>
          </div>
          <div className="row">
            <img src={trending} className="tc-img" />
          </div>
          <div className="row tc-r">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <span className="rating">4.9</span>
            <span className="tr-r-c">(2,401 ratings)</span>
          </div>
          <div className="tc-title">Macbook Pro M1 13 inch...</div>
          <div className="tc-p">
            <span className="tc-price">$799</span>{" "}
            <span className="tc-cancelled">$899</span>
          </div>
        </div>
        <div className="t-card">
          <div className="row">
            <div className="s-div1">
              <button className="sale">SALE</button>
            </div>
            {/* <div className="col-lg-4"></div> */}
            <div className="s-div2">
              <AiOutlineHeart className="like" />
            </div>
          </div>
          <div className="row">
            <img src={trending} className="tc-img" />
          </div>
          <div className="row tc-r">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <span className="rating">4.9</span>
            <span className="tr-r-c">(2,401 ratings)</span>
          </div>
          <div className="tc-title">Macbook Pro M1 13 inch...</div>
          <div className="tc-p">
            <span className="tc-price">$799</span>{" "}
            <span className="tc-cancelled">$899</span>
          </div>
        </div>
        <div className="t-card">
          <div className="row">
            <div className="s-div1">
              <button className="sale">SALE</button>
            </div>
            {/* <div className="col-lg-4"></div> */}
            <div className="s-div2">
              <AiOutlineHeart className="like" />
            </div>
          </div>
          <div className="row">
            <img src={trending} className="tc-img" />
          </div>
          <div className="row tc-r">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <span className="rating">4.9</span>
            <span className="tr-r-c">(2,401 ratings)</span>
          </div>
          <div className="tc-title">Macbook Pro M1 13 inch...</div>
          <div className="tc-p">
            <span className="tc-price">$799</span>{" "}
            <span className="tc-cancelled">$899</span>
          </div>
        </div>
      </div>
        <button className="l-more">Load More</button>
    </div>
  );
}

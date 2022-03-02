import React from "react";
import im from "../assets/images/img.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

export default function Landing() {
  return (
    <div className="landing-c">
      <div className="row">
        <div className="col-lg-5">
          <img src={im} className="landing" />
          <div className="btc">BTC</div>
          <div className="one-s">
            One stop place for all your school children needs
          </div>
          <div>
            <button className="sn">
              Shop Now <AiOutlineArrowRight className="right-icon" />
            </button>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="lbox">
            <div className="row">
              <div className="col-lg-3">
                <MdLocationPin className="loc" />
                <select>
                  <option>Jodhpur</option>
                </select>
              </div>
              <div className="col-lg-9">
                <input
                  type={"text"}
                  className="search"
                  placeholder="&#x1F50E;&#xFE0E; Search..."
                />
              </div>
            </div>
          </div>
          <div className="sl">
            School not listed? <a href="#">REGISTER</a>
          </div>
          <div className="row cont">
            <div className="col-lg-3">
              2,981
              <div>Schools</div>
            </div>
            <div className="col-lg-3">
              2,981
              <div>Students</div>
            </div>
            <div className="col-lg-5">
              2,981
              <div>Total Orders Fulfilled</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

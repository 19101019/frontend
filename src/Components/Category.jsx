import React from "react";
import phone from "../assets/images/phone.png";
import tablet from "../assets/images/tablet1.png";
import accessories from "../assets/images/accessories.png";
import headphone from "../assets/images/headphone.png";
import watch from "../assets/images/watch.png";
import laptop from "../assets/images/laptop.png";

export default function Category() {
  return (
    <div className="category-c">
      <div className="category-h">Our Category</div>
      <div className="row">
        <div className="col-lg-6 m-p">
          <div className="row">
            <div id="b1">
              <div className="row c-row">
                <div className="col-lg-9">
                  <div className="c-name">Phone</div>
                  <div className="c-count">1402 Items</div>
                </div>
                <div className="col-lg-3">
                  <button>See All</button>
                </div>
              </div>
              <div>
                <img src={phone} className="b-img" />
              </div>
              <div></div>
            </div>
          </div>
          <div className="row" >
            <div className="col-lg-6">
              <div id="b2">
                <div>
                  <img src={watch} className="b2-im" />
                </div>
                <div className="c-name">Watch</div>
                <div className="c-count">349 Items</div>
                <div className="c-btn">
                  <button>See All</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div id="b3">
                <div className="c-name">Headphone</div>
                <div className="c-count">349 Items</div>
                <div className="c-btn">
                  <button>See All</button>
                  <div>
                    <img className="b3-im" src={headphone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 m-p">
          <div className="row">
            <div className="col-lg-6">
              <div id="b5">
                <div className="c-name">Tablet</div>
                <div className="c-count">593 Items</div>
                <div className="c-btn">
                  <button>See All</button>
                  <div>
                    <img className="b5-im" src={tablet} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div id="b6">
                <div>
                  <img src={laptop} className="b6-im" />
                </div>
                <div className="c-name">Laptop</div>
                <div className="c-count">492 Items</div>
                <div className="c-btn">
                  <button>See All</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div id="b4">
              <div className="row c-row">
                <div className="col-lg-9">
                  <div className="c-name">Accessories</div>
                  <div className="c-count">1402 Items</div>
                </div>
                <div className="col-lg-3">
                  <button>See All</button>
                </div>
              </div>
              <div>
                <img src={accessories} className="b-img" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

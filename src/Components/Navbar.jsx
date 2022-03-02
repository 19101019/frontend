import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link ml-3 mr-3" id="l1" href="#">
                Shop by school
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-3 mr-3" id="l1" href="#">
                Our Shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-3 mr-3" href="#">
                {" "}
                <AiOutlineUser /> Sign in
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link ml-3 mr-3" href="#">
                <AiOutlineShoppingCart /> Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

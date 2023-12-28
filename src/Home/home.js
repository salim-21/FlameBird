import React, { Fragment } from "react";
import { useState } from "react";

import "./home.css";
import a from "../img/20.png";
import b from "../img/3.jpg";
import c from "../img/22.jpg";
import d from "../img/23.jpg";
import e from "../img/24.jpg";
import f from "../img/7.jpg";
import g from "../img/8.jpg";
import h from "../img/1.jpg";

import { MdOutlineAttachEmail } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={a} alt="" id="logo" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto me-0 mb-lg-0">
          <Link to={"/"}style={{textDecoration:'none'}}> <li class="nav-item">
              HOME 
            </li>
            </Link>
            <Link to={"/Service"}style={{textDecoration:'none'}}> <li class="nav-item">
              Service
            </li>
            </Link> 

            <Link to={"/Digital"} style={{textDecoration:'none'}}> <li class="nav-item">
              Digital
            </li>
            </Link>
           
          </ul>
        </div>
      </nav>

      {/* <div className="background">
            
          <div className="animated-text">
            Digital Marketing &<br />
            Digital Agency That
            <br /> Thrives on Your Success
          </div>
        

        <form className="form1">
          <p>Contact US</p>
          <div class="mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              id="Name"
              placeholder="Enter Name"
              name="Name"
              required
            />
          </div>
          <div class="mb-3 mt-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              required
            />
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember" />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" className="sbtn">
            Submit
          </button>
        </form>
      </div> */}
    </Fragment>
  );
};
export default Home;

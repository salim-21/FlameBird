
import React from 'react'
import "./contact.css";
import Service from '../Service/service';
import Digital from '../Digital/digital';
export default function contact() {
  return (
    <>
     <div className="background">
            
            <div className="animated-text">
              Digital Marketing &<br />
              Digital Agency That
              <br /> Thrives on Your Success
            </div>
          
  {/* <svg viewBox="0 0 1320 300">
    <text>
      marketing&Property
    </text>
  </svg>  */}
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
        </div>
        <Service/>
        <Digital/>
</>
      
  )
}

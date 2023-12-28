import React from 'react'
import './footer.css';
// import { MdOutlineAttachEmail } from "react-icons/md";
// import { FcBusinessContact } from "react-icons/fc";


export function Footer() {
  return (
  
    <div className="comtainer-fluid"id="footer">
    <div className="container"id="footer2">
    
    <div className="col-4 col-xl">
    <h3>Address</h3>
    
    <p>xyz delhi </p>
    <p>phone</p>
       
    {/* <p><MdOutlineAttachEmail /> */}
    {/* info@flamebird.co.in</p> */}
    {/* <p><FcBusinessContact /> */}
    
    {/* 91+*************</p> */}
    
    </div>
    <div className="col-4 col-xl">
    <h3>Service</h3>
    <p>WebSites</p>
    <p>Google Ads</p>
    <p>Apps</p>
    <p>SEO</p>
    <p>SMO</p>

    </div>
    <div className="col-4 col-xl">
    <h3>Bussiness</h3>
    <p>Property</p>
    <p>Web Development</p>
    <p>Digital Marketing</p>
    <p>Bussiness ideas</p>
    <p>ranking</p>
    
    </div>
    
    
    
    </div>
    
    <p className='Copyright'>Copyright © 2024 FameBird - All Rights Reserved
    </p>
          </div>
  
  )
}
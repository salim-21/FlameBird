import React from "react";
import "./service.css";
import c from "../img/11.jpg";
import g from "../img/8.jpg";
import d from "../img/1.jpg";
import h from "../img/1.jpg";
import a1 from "../img/10.jpg";
import a2 from "../img/11.jpg";
import a3 from "../img/15.jpg";
import a4 from "../img/17.jpg";

function service() {
  return (
    <>
    <div className="content1">
      <h1 className="heading12">OUR SERVICES</h1>
      <div className="container"id="bd">
<div class="row">
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="200" height="200" src={d} role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <h2 class="fw-normal">Home Service</h2>
        <p>Present your property in the best possible light with our expert home staging services. We understand the art of creating an inviting and appealing atmosphere that resonates with potential buyers or tenants...</p>
      </div>
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="200" height="200" src={c} role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <h2 class="fw-normal">Property</h2>
        <p>Entrust your property to us, and let us handle the details. From tenant placement and rent collection to property maintenance, we provide comprehensive property management services that give you peace of mind.</p>
      </div>
      <div class="col-lg-4">
        <img  src={g} class="bd-placeholder-img rounded-circle" width="200" height="200" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
        <h2 class="fw-normal">Real Estate & Leasing:</h2>
        <p>Whether you're in search of your dream home or looking to sell or lease a property, our experienced team is here to guide you through the process. We specialize in matching individuals and families with homes</p>
      </div>
    </div>
</div>
      <hr class="featurette-divider" />

      <div className="container-fluid row" id="featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Public Relations
            <span class="text-body-secondary">Find Your Best Property</span>
          </h2>
          <p className="lead">
            Finding your dream home is a challenging task as its like finding a
            life partner for oneself. Choosing the perfect home for your needs
            will feel like an insurmountable task if you try and do it all in an
            afternoon— which is why we’ve broken down the process into these few
            action items. Starting with a broad online search, then narrowing
            down your criteria, and finally working with a best real estate
            company in gurgaon to see homes in person; these are the steps that
            will help you arrive at your perfect home— that is, one you can
            afford that you also happen
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="100%"
            height="100%"
            src={h}
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text
            x="50%"
            y="50%"
            fill="var(--bs-secondary-color)"
            dy=".3em"
          ></text>
        </div>
      </div>

      <div className="flex-container">
        <div className="col-3">
          <img src={a4} alt="" width="100%" height="100%" />
        </div>
        <div className="col-3">
          <img src={a3} alt="" width="100%" height="100%" />
        </div>
        <div className="col-3">
          <img src={a2} alt="" width="100%" height="100%" />
        </div>
        <div className="col-3">
          <img src={a1} alt="" width="100%" height="100%" />
        </div>
      </div>
      </div>
    </>
  );
}

export default service;

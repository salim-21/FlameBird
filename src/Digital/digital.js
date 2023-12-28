import React from "react";
import b from "../img/5.jpg";
import c from "../img/6.jpg";
import d from "../img/23.jpg";

import f from "../img/31.jpg";
import g from "../img/28.jpg";
import h from "../img/13.jpg";
import p from "../img/29.jpg";
import p2 from "../img/37.jpg";
import p3 from "../img/38.jpg";
import s from "../img/40.jpg";
import s2 from "../img/39.jpg";
import s3 from "../img/42.jpg";
import s4 from "../img/43.jpg";
import s5 from "../img/41.jpg";
import s6 from "../img/44.jpg";









import m from "../img/30.jpg";
import m1 from "../img/33.jpg";
import m2 from "../img/34.jpg";
import m3 from "../img/35.jpg";

import "./digital.css";

function digital() {
  return (
    <>
      <div class="container" id="col3">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src={d} />
              <h3>Content Writing</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Your website's content is crucial: it's the foundation of your
                SEO and the reason many people visit your site. Entrust your
                content creation with Thrive, and we'll write it with precision.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src={b} />
              <h3>Video Production</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Video marketing is powerful and engaging when done right.
                Storytelling with video has the power to take your brand to the
                next level and increase your customer engagement by leaps.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src={c} />
              <h3>Ecommerce Marketing</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                The eCommerce industry generates 23 percent YoY in revenue. Take
                advantage of a whole range of opportunities in the eCommerce
                business to promote your products and offer round the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
     <div class="card-group">
      <div class="card">
       <img src={p} class="card-img-top" alt="..."/>
       <div class="card-body">
       <h5 class="card-title">Digital Marketing</h5>
       <p class="card-text">We provide Digital marketing Services that is intended to Drive results using advanced tools and knowledge.</p>
       <p class="card-text"><small class="text-muted">Last updated 33 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">App Development</h5>
      <p class="card-text">As a leading provider of cutting-edge app development 
        services, we specialize in bringing your 
        ideas .</p>
      <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">SEO Service</h5>
      <p class="card-text">Our strategic ideas help raise your business be visible as the
       top choice when they search for your services.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

    </div>
    <div class="carousel-item">
<div class="card-group">
  <div class="card">
    <img src={s} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Social Media Marketing</h5>
      <p class="card-text">Social Media is nowdays mostly used as a search engine,
       where buyers can compare, research...</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={s2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Social & Paid Media</h5>
      <p class="card-text">Organic and paid social media management with 
      continuous, data-driven optimization for engagement ad.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={s3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Pay Per Click (PPC) Advertisement</h5>
      <p class="card-text">Get data-led PPC advertising services to increase qualified leads
       while reducing the cost per acquisition (CPA)..</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

    </div>
    <div class="carousel-item">
  

<div class="card-group">
  <div class="card">
    <img src={s4}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Business Growth</h5>
      <p class="card-text">Accelerate business growth and profit with tried and tested digital
       marketing methods, including SEO, PPC, social media.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={s5} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Website Hosting</h5>
      <p class="card-text">Reliable website hosting is key to ensuring more security for
       your website online. With our managed hosting services,</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={s6} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">YouTube Marketing</h5>
      <p class="card-text">YouTube is the second largest search engine in the world 
      and has rapidly become a powerful tool for businesses in the world.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>






      
      <div className="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {/* <div class="col">
    <div class="card">
      <img src={p}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Digital Marketing</h5>
        <p class="card-text">Welcome to [Flamebird], your trusted partner in the dynamic world of 
        digital marketing. We specialize in delivering cutting-edge solutions that propel businesses to
         new heights. Whether you're a startup aiming for rapid growth or an established 
        enterprise seeking to enhance your online presence, we have the expertise to elevate your brand.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={f} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">App Development</h5>
        <p class="card-text">As a leading provider of cutting-edge app development 
        services, we specialize in bringing your 
        ideas to life and creating impactful digital experiences for <br/>your audience..</p>
      </div>
    </div>
  </div> */}
          <div class="col">
            <div class="card">
              <img src={g} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">
                  During the development phase, our front-end developers,
                  back-end developers, and other team members will work together
                  to build your website or web application based on your vision
                  and the roadmap we have outlined.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={h} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Service</h5>
                <p class="card-text">
                  Welcome to [FlameBird], where innovation meets excellence. As
                  a full-suite digital service provider, we offer a diverse
                  range of solutions designed to elevate your brand's digital
                  presence and drive success in the online realm..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="card-container">
        <div id="card">
          <img src={m} alt="Image 1" />
          <div id="card-content">
            <h3>Google Ads</h3>
            <p>
              We have train PPC team. We are not a freelancer, but a registered
              company with in-house team of PPC experts. We will not only help
              you set up competitive pricing strategies but also help increase
              your sales.
            </p>
          </div>
        </div>

        <div id="card">
          <img src={m1} alt="Image 2" />
          <div id="card-content">
            <h3>SEO</h3>
            <p>
              If you own or run a business in this digital age, being online is
              not a choice but a necessity. Getting your business online not
              only adds value to it, but, also gives it credibility, and, helps
              you reach a wider audience.
            </p>
          </div>
        </div>

        <div id="card">
          <img src={m2} alt="Image 1" />
          <div id="card-content">
            <h3>Email Marketing</h3>
            <p>
              How many emails from businesses do you delete every day? Choose
              Thrive and let's make your email marketing campaigns stand out and
              work for your business. We create personalized email newsletters
              to keep your emails{" "}
            </p>
          </div>
        </div>

        <div id="card">
          <img src={m3} alt="Image 2" />
          <div id="card-content">
            <h3>Facebook ads</h3>
            <p>
              Facebook ads are a powerful marketing tool because they allow
              businesses to target their ads to specific demographics,
              interests, and behaviors. We have train Facebook Meta Expert team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default digital;

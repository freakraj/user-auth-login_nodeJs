// import React from 'react'
import "./SliderHomeComp.css";
import SliderImage from "../assets/slider-img.png";

export const SliderHomeComp = () => {
  return (
    <div>
      <section className="slider_section">
        
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row" style={{marginTop:"100px"}}>
                  <div className="col-md-5 offset-md-1">
                    <div className="detail-box">
                      <h1 style={{color:"black"}}>We Can Hire Freelancer Here</h1>
                      <p style={{color:"black"}}>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page
                      </p>
                      <div className="btn-box">
                        <a href="/profile" className="btn-1">
                          View Profile
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="offset-md-1 col-md-4 img-container">
                    <div className="img-box">
                      <img src={SliderImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

// import React from 'react'
// import SliderImage from "../assets/slider-img.png";
import "./AboutCompanyHome.css";
import AboutImage from "../assets/about-img.jpg";
export const AboutCompanyHome = () => {
  return (
    // <div>AboutCompanyHome</div>
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
                <div className="row">
                  <div className="col-md-10 col-lg-9 mx-auto">
                    <div className="img-box">
                      <img
                        src={AboutImage}
                        alt=""
                        style={{marginLeft:"12rem",height:"34rem" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h2 className="aboutHead">About Spering Company</h2>
                  <p className="aboutPara">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If youThere are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected
                    humour, or randomised words which do not look even slightly
                    believable. If you
                  </p>
                   <div className="" style={{textAlign:"center",margin:"16px"}}>
                        <button className="readMoreBtn">Read More</button>
                       
                      </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

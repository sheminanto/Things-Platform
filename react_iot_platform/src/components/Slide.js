import React from "react";
import p1 from "../images/11.jpg";
import p2 from "../images/22.jpg";
import p3 from "../images/33.jpg";
import "../css/welcome.css";

class Slide extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleDark"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleDark" data-slide-to="1"></li>
          <li data-target="#carouselExampleDark" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="10000">
            <img src={p1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Monitor your devices from anywhere in the world!</h5>
            </div>
          </div>
          <div className="carousel-item" data-interval="2000">
            <img src={p2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={p3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleDark"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleDark"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    );
  }
}
export default Slide;

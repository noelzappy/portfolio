import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <img src="assets/img/partners/1.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/2.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/3.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/4.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/5.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/6.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/7.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/8.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/9.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/10.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/11.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/12.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/13.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/14.png" alt="favourite tools" />
        </li>
        <li className="item">
          <img src="assets/img/partners/15.png" alt="favourite tools" />
        </li>
      </Slider>
    </ul>
  );
}

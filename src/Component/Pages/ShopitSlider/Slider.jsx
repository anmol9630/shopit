import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Book from "../images/Book.jpg";
import Jwellery from "../images/Jwellery.jpg";
import Cloth from "../images/Cloth.jpg";
import Cloths from "../images/Cloths.jpg";
import Electronics from "../images/Electronics.jpg";

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
 
  return (
    <div className="w-full h-full overflow-hidden ">
      <Slider {...settings}>
        <div className="slide">
          <img className="slide-image" src={Book} alt="Books" />
        </div>
        <div className="slide">
          <img className="slide-image" src={Jwellery} alt="Jewellery" />
        </div>
        <div className="slide">
          <img className="slide-image" src={Cloth} alt="Cloth" />
        </div>
        <div className="slide">
          <img className="slide-image" src={Cloths} alt="Clothes" />
        </div>
        <div className="slide">
          <img className="slide-image" src={Electronics} alt="Electronics" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;

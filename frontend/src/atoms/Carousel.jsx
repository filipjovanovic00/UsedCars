import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../images/car.jpg";
import '../style/style.css'

const LeftArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left" onClick={onClick}>
      &lt;
    </div>
);

const RightArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right" onClick={onClick}>
        &gt;
    </div>
);

export default function Carousel(){

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      arrows:true,
      prevArrow: <LeftArrow />,
      nextArrow: <RightArrow />
    };

    return (
      <div>
        <Slider {...settings}>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"300"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
            <div>
                <img src={require('../images/car.jpg')}  alt="..." style={{height:"510px",width:"max"}}></img>
            </div>
        </Slider>
      </div>
    );
}
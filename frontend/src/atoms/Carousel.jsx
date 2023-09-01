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

export default function Carousel(props){

    const settings = {
      dots: true,
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
            {props.car && props.car.map((item,index)=>(
                <div key={index}>
                    <img src={("data:image/jpeg;base64,"+item)}  alt="..." style={{height:"510px",width:"300"}}></img>
                </div>
            ))}
            {/*props.car[0]?<div>
                <img src={("data:image/jpeg;base64,"+props.car[0])}  alt="..." style={{height:"510px",width:"300"}}></img>
            </div>:null}
            {props.car[1]?<div>
                <img src={("data:image/jpeg;base64,"+props.car[1])}  alt="..." style={{height:"510px",width:"300"}}></img>
            </div>:null}
            {props.car[2]?<div>
                <img src={("data:image/jpeg;base64,"+props.car[2])}  alt="..." style={{height:"510px",width:"300"}}></img>
            </div>:null}
            {props.car[3]?<div>
                <img src={("data:image/jpeg;base64,"+props.car[3])}  alt="..." style={{height:"510px",width:"300"}}></img>
            </div>:null}
            {props.car[4]?<div>
                <img src={("data:image/jpeg;base64,"+props.car[4])}  alt="..." style={{height:"510px",width:"300"}}></img>
            </div>:null}
            {props.car[5]?<div>
                <img src={("data:image/jpeg;base64,"+props.car[5])}  alt="..." style={{height:"510px",width:"300"}}></img>
            </div>:null*/}
        </Slider>
      </div>
    );
}
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import styled from 'styled-components'
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'

function ImageSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Carousel {...settings}>
            <div className="wrap">
                <img src="/Assets/images/slider-badging.jpg" alt="" />
            </div>
            <div className="wrap">
                <img src="/Assets/images/slider-badag.jpg" alt="" />
            </div>    
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
    }
`
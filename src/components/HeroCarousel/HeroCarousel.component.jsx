import React from "react";
import HeroSlider from "react-slick";

// Component
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

      const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,  
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

      const images = [
          "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1632952745637-a104d96d8405?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1633085650319-b9efc57dcf07?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1633086218123-e368e0e71443?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1632952297232-0548107fdab3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         ];
    
    return (
        <>
          <div className="lg:hidden">
              <HeroSlider {...settings}>
                 {images.map((image) => (
                     <div className="w-full h-56 md:h-80 py-3">
                        <img src={image} alt="testing" className="w-full h-full" />    
                     </div>
                 ))}   
              </HeroSlider>          
          </div>  

          <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
              {images.map((image) => (
                  <div className="w-full h-96 px-2 py-3">
                    <img
                      src={image}
                      alt="testing"
                      className="w-full h-full rounded-md"
                      />    
                  </div>
              ))}
            </HeroSlider>  
          </div>
        </>
    );
};

export default HeroCarousal;
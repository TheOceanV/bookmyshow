import React from "react";
import Slider from "react-slick";

// Components
import Poster from "../Poster/Poster.component";

export const Premier = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
    ];

    return (
        <>
          <Slider {...settings}>
            {PremierImages.map((image) => (
              <Poster {...image} />
            ))}
          </Slider>
        </>
      );
    };
    
    export default Premier;
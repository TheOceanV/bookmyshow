import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousel/HeroCarousel.component";


const DefaultLayout = (props) => {
   return (
    <>
        <Navbar />
        <HeroCarousal />
        {props.children}
    </>
   );
};

export default DefaultLayout;
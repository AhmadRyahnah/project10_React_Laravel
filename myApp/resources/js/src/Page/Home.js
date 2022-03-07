import React from "react";
import Hero from "../Components/Landing Page/Hero";
import Testimonial from "../Components/Landing Page/Testimonial";
import Welcome from "../Components/Landing Page/welcome";

import Services from "./Services";
const Home = () => {
    return (
        <div className="homeContainer">
            <Hero />
            <Welcome />
            <Services />
            <Testimonial />
        </div>
    )
}
export default Home;
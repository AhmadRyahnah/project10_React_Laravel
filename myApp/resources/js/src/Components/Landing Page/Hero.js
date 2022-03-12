import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'





const Hero = () => {

// const [text,setText]=useState('Helping You On Your Journey To Become A Professional Engineer')



    return (
        <div className="heroContainer">
            <div className="heroImage">
                <div className="btnOne">
                    <h1> Booking Farms Made Easy</h1>
                    <Link to="/Services"><button className="btn btnH">Services</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Hero;

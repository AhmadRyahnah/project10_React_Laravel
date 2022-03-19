import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { ImFacebook } from "react-icons/im";
//
import { BsInstagram,BsTwitter } from "react-icons/bs";

const Footer = () => {

  return (
    <footer>
      <div className="about contact">
        <h2 style={{ letterSpacing:5 }}>Mzr3ti.com</h2>
        <p className="aboutPara">
        <strong>Mzr3ti.com </strong>
         designed to help supplier, owners of farm, owners or furnished apartment to reach the right clientele in the time time.        </p>
      </div>
      <div className="about ">
        <h2>Contact US</h2>
        <p className="contatUsPara">Amman/Jordan</p>
        <p className="contatUsPara">+96277745108/+962790327749</p>
      </div>
      <div className="about">
        <h2>Follow Us </h2>
        <p>Mzr3ti.com</p>
        <Link target={'_blank'} to="/https://www.facebook.com/"><i className="Icon"><ImFacebook/></i></Link>
        <Link to="https://www.instagram.com/"><i className="Icon"><BsInstagram/> </i></Link>
        <Link  to="https://twitter.com/?lang=ar"><i className="Icon"> <BsTwitter/></i></Link>
      </div>

    </footer>
  );
}

export default Footer;




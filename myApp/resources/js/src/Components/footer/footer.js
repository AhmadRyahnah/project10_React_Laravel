import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {

  return (
    <footer>
      <div className="about contact">
        <h2>Civil Engineering Academy</h2>
        <p className="aboutPara">
          At Civil Engineering Academy it is our mission to help aspiring Civil Engineers
          pass their exams and develop the skills to be successful in their careers and in life.
        </p>
      </div>
      <div className="about ">
        <h2>Contact US</h2>
        <p className="contatUsPara">Amman/Jordan</p>
        <p className="contatUsPara">+96277745108/+962777685139</p>
      </div>
      <div className="about">
        <h2>Follow Us </h2>
        <p>civil.academy.com</p>
        <Link to="https://www.facebook.com/"><i className="Icon fab fa-facebook"> </i></Link>
        <Link to="https://www.instagram.com/"><i className="Icon fab fa-instagram"> </i></Link>
        <Link to="https://twitter.com/?lang=ar"><i className="Icon fab fa-twitter"> </i></Link>
      </div>

    </footer>
  );
}

export default Footer;




import React from "react";
import { useState } from "react";
import "./SliderImg.css";

function Slider() {

  const [img, setImg] = useState('img/governorates/Revit.jpg');
  const [counter, setCounter] = useState(0)
  const images = [
    'img/governorates/Revit.jpg',
    'img/governorates/sap.jpg',
    'img/governorates/ETABS.jpg',
     'img/governorates/Revit.jpg',
    'img/governorates/sap.jpg',
    'img/governorates/ETABS.jpg',

  ];

  const next = () => {
    setCounter(counter + 1);
    setImg(images[counter])
    if (counter === images.length - 1) {
      setCounter(0)
    }
  };
  const back = () => {

    setCounter(counter - 1);
    setImg(images[counter])

    if (counter === 0) {

      setCounter(images.length - 1)
    }


  };
  return (

    <div className="img-slider">
      <i className="fas fa-arrow-left" onClick={back} ></i>
      <img src={img} alt="..." />

      <i className="fas fa-arrow-right" onClick={next}></i>
    </div>

  );
}

export default Slider;

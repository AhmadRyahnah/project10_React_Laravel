import React from "react";
import { useState } from "react";
import "./SliderImg.css";

function Slider() {

  const [img, setImg] = useState('img/Courses/Revit.jpg');
  const [counter, setCounter] = useState(0)
  const images = [
    'img/Courses/Revit.jpg',
    'img/Courses/sap.jpg',
    'img/Courses/ETABS.jpg',
     'img/Courses/Revit.jpg',
    'img/Courses/sap.jpg',
    'img/Courses/ETABS.jpg',

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
      <i class="fas fa-arrow-left" onClick={back} ></i>
      <img src={img} alt="..." />

      <i class="fas fa-arrow-right" onClick={next}></i>
    </div>

  );
}

export default Slider;
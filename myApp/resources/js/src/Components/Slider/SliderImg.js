import axios from "axios";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import "./SliderImg.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Slider(props) {
    console.log(props.Image);
    console.log(props.id);

    const [img, setImg] = useState(props.Image);
    const [counter, setCounter] = useState(0)
    const [images, setImages] = useState();



    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/ImageSlider/" + props.id).then((response) => {
            // setImg(response.data.imagesSlider)
            setImages(response.data.imagesSlider)
            // setImg(response.data.imagesSlider)
            console.log(response.data.imagesSlider[0].images);
        });
    }, []);
    if (images)
        console.log('ahmad' + images.length);

    //   const images = [
    //     'img/governorates/Revit.jpg',
    //     'img/governorates/sap.jpg',
    //     'img/governorates/ETABS.jpg',
    //      'img/governorates/Revit.jpg',
    //     'img/governorates/sap.jpg',
    //     'img/governorates/ETABS.jpg',

    //   ];

    const next = () => {
        setCounter(counter + 1);
        setImg('/uploads/' + images[counter].images)
        if (counter === images.length - 1) {
            setCounter(0)
        }
    };
    const back = () => {

        setCounter(counter - 1);
        setImg('/uploads/' + images[counter].images)

        if (counter === 0) {

            setCounter(images.length - 1)
        }


    };
    //   if(img)
    //   console.log(img.images);
    return (
        <Fragment>
            <div className="img-slider">
                <i onClick={back} ><AiOutlineArrowLeft /></i>

                <img src={img} alt="..." />

                <i onClick={next}><AiOutlineArrowRight /></i>
                <br />

            </div>
            <p className="numberImages"> # of images {images?images.length+1:1}</p>
        </Fragment>
    );
}

export default Slider;

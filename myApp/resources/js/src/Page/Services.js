import React, { Fragment, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Slider from '../Components/Slider/SliderImg';
import './Services.css'

const Services = () => {

    const [governorates, setgovernorates] = useState();



    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/Governorates").then((response) => {
            setgovernorates(response.data);
            console.log(response.date);
        });
    }, []);

    if (governorates)
        console.log(governorates);






    return (

        <Fragment >
            <h1 className='header'>Services</h1>

            {/* <div className='LectureAndgovernorates'>
                {governorates ? governorates.map(governorate =>
                    <div className='governorates'>
                        <Link to={'/governorates/' + governorate.id}>
                            <img src={'img/Governorate/' + governorate.Image} alt='governorates' />
                            <h2>{governorate.governorateName}</h2>
                            <button >See Farms</button>
                        </Link>
                    </div>

                ) : null}
            </div > */}
            <div className='governorates'>
                {governorates ? governorates.map(governorate =>

                    <Link to={'/governorates/' + governorate.id}>
                        <div className='imgGovernorates'>

                            <img height={225} width={320} src={'img/Governorate/' + governorate.Image} alt='governorates' />
                            <strong>{governorate.governorateName}</strong>
                            {/* <button >See Farms</button> */}
                        </div>
                    </Link>


                ) : null}
            </div >

        </Fragment>
    )
}

export default Services

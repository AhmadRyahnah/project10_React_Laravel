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

if(governorates)
console.log(governorates);



    const viewClick = (governorate) => {
        localStorage.setItem('governorate', JSON.stringify(governorate))
    }




    return (

        <Fragment >
            <h1 className='header'>Services</h1>

            <div className='LectureAndgovernorates'>
                {governorates ? governorates.map(governorate =>
                    <div className='governorates'>
                        <Link to='/governorates'>
                            <img src={'img/Governorate/' + governorate.Image} alt='governorates' />
                            {/* <div className='slider'><Slider /></div> */}
                            <h2>{governorate.governorateName}</h2>
                            {/* <h3>Starting at : 150.00 $</h3> */}
                            <button onClick={() => viewClick(governorate)}>See Farms</button>
                        </Link>
                    </div>

                ) : null}
            </div >
        </Fragment>
    )
}

export default Services

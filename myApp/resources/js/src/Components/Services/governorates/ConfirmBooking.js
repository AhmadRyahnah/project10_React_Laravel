import React, { useState, useEffect } from 'react'
import './Confirmbooking.css'
import { useParams } from "react-router-dom";

import BookingForm from '../../Calender/Calender'
import styles from './CardFarms.module.css'
const ConfirmBooking = () => {
    const { id } = useParams();

    const [Farms, setFarms] = useState();
    const [Image, setImage] = useState();

    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/showConfirmBooking/" + id).then((response) => {
            setFarms(response.data.farm);
            setImage(response.data.farm.image)
            // console.log(response.data.farm);
        });
    }, []);
    // let Course = JSON.parse(localStorage.getItem('governorates'))
    return (
        // <h1>ryahnah</h1>
        <div className='ConfirmBooking'>
            <div className='ConfirmCard' >
                {Image ?
                    <img src={require('/img/Farms/' + Image).default} alt={Farms ? Farms.farmName : null} />
                    : null}
                <h2>{Farms ? Farms.farmName : null}</h2>
                <h5>{Farms ? Farms.description : null}</h5>
                <h4>{Farms ? Farms.price : null} $</h4>
            </div>
            <div className='ConfirmCalender'>
                {/* <Calender /> */}
                <BookingForm Farms={Farms ? Farms : null} />
            </div>
        </div>
    )
}

export default ConfirmBooking

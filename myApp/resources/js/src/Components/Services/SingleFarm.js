import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import BookingForm from '../Calender/Calender'
import Comments from '../LocationFarm/Comments';
import LocationFarm from '../LocationFarm/LocationFarm';
import Slider from '../Slider/SliderImg'
import styles from './SingleFarm.module.css'
const SingleFarmPage = () => {
    const { id } = useParams();

    const [Farms, setFarms] = useState();
    const [Image, setImage] = useState();
    const [Count, setCount] = useState();
    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/showConfirmBooking/" + id).then((response) => {
            setFarms(response.data.farm);
            setImage(response.data.farm.image)
            setCount(response.data.order);
        });
    }, []);
    if (Farms)
        console.log(Farms);
    return (
        <Fragment>
            <h2 className={styles.headerH}>{Farms ? Farms.farmName : null} Farm</h2>
            <div className={styles.singleCont}>


                <div className={styles.sliderAndDetailes}>


                    <div className={styles.sliderImg}>
                        {Image ?
                            <Slider Image={'/img/Farms/' + Image} id={id} /> : null}
                    </div>
                    <div className={styles.detailesAndBooking}>
                        {/* <Stars stars={stars} reviews={reviews} /> */}
                        <p className={styles.desc}>{Farms ? Farms.description : null}</p>
                        <h5 className={styles.price}> {Farms ? Farms.price : null} JD/Day</h5>
                        <br />
                        <BookingForm Count={Count ? Count : null} Farms={Farms ? Farms : null} />



                    </div>
                </div>


                <div className={styles.LocationAndReview}>
                    <div className={styles.LocationFarm}>
                        <LocationFarm Location={Farms ? Farms.Location : null} />

                    </div>
                    <div className={styles.Reviews}>
                        <Comments idFarm={id} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}



export default SingleFarmPage

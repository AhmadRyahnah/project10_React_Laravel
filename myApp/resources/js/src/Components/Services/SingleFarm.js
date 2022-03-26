import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import BookingForm from '../Calender/Calender'
import Comments from '../LocationFarm/Comments';
import LocationFarm from '../LocationFarm/LocationFarm';
import Slider from '../Slider/SliderImg'
import './SingleFarm.css'
const SingleFarmPage = () => {
    const { id } = useParams();

    const [Farms, setFarms] = useState();
    const [Image, setImage] = useState();

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/showConfirmBooking/" + id).then((response) => {
            setFarms(response.data.farm);
            setImage(response.data.farm.image)
            // console.log(response.data.farm);
        });
    }, []);
    if (Farms)
        console.log(Farms);
    return (
        <Fragment>
            <div className='singleCont'>
                <div className='section section-center page'>
                    <h2>{Farms ? Farms.farmName : null} Farm</h2>

                    <div className=' product-center'>
                        {Image ?
                            <Slider Image={'/img/Farms/' + Image} id={id} /> : null}
                        {/* {Image ?
                    <img width={500} height={500} src={require('/img/Farms/' + Image).default} alt={Farms ? Farms.farmName : null} />
                    : null} */}
                        <section className='content'>
                            {/* <Stars stars={stars} reviews={reviews} /> */}
                            <p className='desc'>{Farms ? Farms.description : null}</p>
                            <h5 className='price'> {Farms ? Farms.price : null} JD/Day</h5>
                            <br />
                            <BookingForm Farms={Farms ? Farms : null} />

                        </section>
                    </div>
                </div>
            </div>

            <div className='LocationAndReview'>
                <div className='LocationFarm'>
                    <LocationFarm Location={Farms ? Farms.Location : null} />

                </div>
                <div className='Reviews'>
                    <Comments idFarm={id} />
                </div>
            </div>


        </Fragment>
    )
}



export default SingleFarmPage

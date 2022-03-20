import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import BookingForm from '../Calender/Calender'
import Slider from '../Slider/SliderImg'
import './SingleFarm.css'
const SingleFarmPage = () => {
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
    return (
        <Fragment>
            <div className='singleCont'>
            {/* <PageHero title={'ahmad'} product /> */}
            <div className='section section-center page'>
                <Link to='/products' className='btn'>
                    {/* <button>back to Farms</button> */}
                </Link>
                <div className=' product-center'>
                    {/* <ProductImages images={'images'} /> */}
                    {/* <img height={500} width={450} src='./img/wlc.jpg'/> */}
                    {/* <Slider /> */}
                    {Image ?
                    <img width={500} height={500} src={require('/img/Farms/' + Image).default} alt={Farms ? Farms.farmName : null} />
                    : null}
                    <section className='content'>
                    <h2>{Farms ? Farms.farmName : null} Farm</h2>
                        {/* <Stars stars={stars} reviews={reviews} /> */}
                        <h5 className='price'> {Farms ? Farms.price : null} JD/Day</h5>
                        <p className='desc'>{Farms ? Farms.description : null}</p>
                        <br />
                        <BookingForm Farms={Farms ? Farms : null} />

                    </section>
                </div>
            </div></div>
        </Fragment>
    )
}



export default SingleFarmPage

import React, { Fragment, useState, useEffect } from 'react'
import Cardgovernorates from './CardFarms'
import { useNavigate, useParams } from "react-router-dom";

// import governoratesItem from './governoratesItem'
import axios from 'axios';

import './governorates.css'
import Slider from '../../Slider/SliderImg'

const Governorates = () => {
    const { id } = useParams();



    // const governorate = JSON.parse(localStorage.getItem('governorate'));
    // const id = governorate.id
    // const name=governorate.governorateName
    const [Farms, setFarms] = useState();

    const [Governorate, setGovernorate] = useState();
    // console.log(Farms);
    let i = 1;
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/showFarm/" + id).then((response) => {
            setFarms(response.data.farm);
            setGovernorate(response.data.Governorat.governorateName)
            // console.log(response.date);
        });
    }, []);





    let FarmsItems = null;
    if (Farms)

        FarmsItems = Farms.map((CardItem) => {
            return (
                <Cardgovernorates
                    // Card={CardItem}
                    key={CardItem.id}
                    img={CardItem.image}
                    title={CardItem.farmName}
                    desc={CardItem.description}
                    price={CardItem.price}
                    alt={CardItem.farmName}
                    id={CardItem.id}
                />
            )
        })
    return (
        <Fragment>

            {/* <div className='ryahnah'>
                <div className='sidebars'>

                </div> */}
                <h1 className='header'>Farms in {Governorate?Governorate:null}</h1>
                {/* <Slider /> */}
                <div className='governorates'>
                    {FarmsItems}
                </div>

            {/* </div> */}

        </Fragment>
    )
}

export default Governorates
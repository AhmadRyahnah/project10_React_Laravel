import React, { Fragment, useState, useEffect } from 'react'
import Cardgovernorates from './CardFarms'
import { useNavigate, useParams } from "react-router-dom";

// import governoratesItem from './governoratesItem'
import axios from 'axios';
import styles from './governorates.module.css'
// import './governorates.css'
import Slider from '../../Slider/SliderImg'

const Governorates = () => {
    const { id } = useParams();

    const [IdG, setIdG] = useState(id ? id : 'all');


    // const governorate = JSON.parse(localStorage.getItem('governorate'));
    // const id = governorate.id
    // const name=governorate.governorateName
    const [Farms, setFarms] = useState();

    const [Governorate, setGovernorate] = useState();
    const [GovernoratesAll, setGovernoratesAll] = useState();
    // console.log(Farms);
    let i = 1;



    // **************************
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name)
        console.log(value);;
        setIdG(value)
        // setInputs(values => ({ ...values, [name]: value }));



    }




    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/Governorates").then((response) => {
            setGovernoratesAll(response.data);
            console.log(response.date);
        });
    }, []);
    if (GovernoratesAll)
        console.log(GovernoratesAll);
    // ***************************
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/showFarm/" + IdG).then((response) => {
            setFarms(response.data.farm);
            setGovernorate(response.data.Governorat.governorateName)
            // console.log(response.date);
        }).catch(error => {
            setGovernorate(false)
        })
    }, [IdG, Governorate]);





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

            <div className={styles.ryahnah}>
                <div className={styles.sidebars}>


                    <h1>Filter by:</h1>


                    <p>Please select your favorite Governorates:</p>
                    <input checked={IdG === 'all' ? 'checked' : null} onChange={handleChange} type="radio" id="html" name="fav_language" value={'all'} />
                    <label htmlFor="html">All</label><br />
                    {GovernoratesAll ? GovernoratesAll.map(item =>
                        <>
                            <input checked={IdG == item.id ? 'checked' : null} onChange={handleChange} type="radio" id="html" name="fav_language" value={item.id} />
                            <label htmlFor="html">{item.governorateName}</label>
                            <br />   </>

                    )

                        : null}



                </div>
                {/* <Slider /> */}

                <div className={styles.governoratesCont}>

                    <h1 className={styles.header}> {Governorate ? 'Farms in' + ' ' + Governorate : 'All Farms'}</h1>
                    <div className={styles.governorates}>
                        {FarmsItems}
                    </div>

                </div>
            </div>

        </Fragment>
    )
}

export default Governorates

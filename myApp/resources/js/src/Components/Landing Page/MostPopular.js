import React, { Fragment, useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import styles from './MostPopular.module.css'

import { MdLocationOn } from "react-icons/md";





const MostPopular = () => {


    const [Farms, setFarms] = useState();

    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/MostPopular/").then((response) => {
            setFarms(response.data);

            // console.log(response.date);
        }).catch(error => {
            setFarms(false)
        })
    }, []);


    return (
        <Fragment>
            <br /><br />
            <h1 style={{ textAlign: 'center' }}>Most Popular Farms</h1>
            <div className={styles.mostPopular}>

                {Farms ? Farms.map(farm =>
                    <Link className={styles.link} to={'/SingleFarmPage/' + farm.id}>
                        <div className={styles.governoratesContainer} >
                            <img height={190} src={require('/img/Farms/' + farm.image).default} alt={farm.farmName} />
                            <h4>{farm.price}</h4>

                            <h2>{farm.farmName}</h2>
                            <h5><MdLocationOn /> location</h5>

                        </div>
                    </Link>) : null}
            </div>
        </Fragment>
    )
}

export default MostPopular

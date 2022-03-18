import React from 'react'
import { Link } from 'react-router-dom';
// import styles from './CardFarms.module.css'
import { MdLocationOn } from "react-icons/md";

import styles from './CardFarms.module.css'
const CardFarms = (props) => {

    console.log(props);
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(props);
    //     localStorage.setItem('governorates', JSON.stringify(props))
    // }
    return (


            <Link className={styles.link} to={'/ConfirmBooking/' + props.id}>
                <div className={styles.governoratesContainer} >
                    <img height={190} src={require('/img/Farms/' + props.img).default} alt={props.alt} />
                    <h4>{props.price}</h4>
                    {/* <h5>{props.desc}</h5> */}
                    <h2>{props.title}</h2>
                    <h5><MdLocationOn /> location</h5>
                    {/* <button >Book Now</button> */}
                </div>
            </Link>

    )
}

export default CardFarms;

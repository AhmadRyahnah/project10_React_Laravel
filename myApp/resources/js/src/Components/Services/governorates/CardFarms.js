import React from 'react'
import { Link } from 'react-router-dom';
// import styles from './CardFarms.module.css'
import { MdLocationOn } from "react-icons/md";
import styles from '../../Landing Page/MostPopular.module.css'
// import styles from './CardFarms.module.css'
const CardFarms = (props) => {

    console.log(props);
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(props);
    //     localStorage.setItem('governorates', JSON.stringify(props))
    // }
    return (


            <Link className={styles.link} to={'/SingleFarmPage/' + props.id}>
                <div className={styles.governoratesContainer} >
                    <img height={190} src={require('/img/Farms/' + props.img).default} alt={props.alt} />
                    <h4>{props.title} Farm</h4>
                    <h2>{props.price} JD/Day</h2>
                    <h6><MdLocationOn />  <span>Amman-shmeasine</span></h6>
                    {/* <button >Book Now</button> */}
                </div>
            </Link>

    )
}

export default CardFarms;

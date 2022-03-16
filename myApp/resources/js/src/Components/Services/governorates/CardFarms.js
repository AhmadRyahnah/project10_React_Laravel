import React from 'react'
import { Link } from 'react-router-dom';
import './CardFarms.css'
const CardFarms = (props) => {

console.log(props);
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(props);
    //     localStorage.setItem('governorates', JSON.stringify(props))
    // }
    return (
        <div className='governoratesContainer' >
            <img  height={190}  src={require('/img/Farms/' + props.img).default} alt={props.alt} />
            <h2>{props.title}</h2>
            {/* <h5>{props.desc}</h5> */}
            <h4>{props.price} $</h4>
            <Link to={'/ConfirmBooking/' + props.id}><button >Book Now</button></Link>
        </div>
    )
}

export default CardFarms;

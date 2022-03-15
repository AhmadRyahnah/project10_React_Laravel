import React from 'react'
import { Link } from 'react-router-dom';
import './Cardgovernorates.css'
const Cardgovernorates = (props) => {


    const handleClick = (e) => {
        e.preventDefault();
        console.log(props);
        localStorage.setItem('governorates', JSON.stringify(props))
    }
    return (
        <div className='governoratesContainer' onClick={handleClick}>
            <img src={'img/'+props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <h5>{props.desc}</h5>
            <h4>{props.price} $</h4>
            <Link to='/ConfirmBooking'><button >Book Now</button></Link>
        </div>
    )
}

export default Cardgovernorates;

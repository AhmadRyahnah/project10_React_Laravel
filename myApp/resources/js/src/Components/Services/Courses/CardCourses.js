import React from 'react'
import { Link } from 'react-router-dom';
import './CardCourses.css'
const CardCourses = (props) => {


    const handleClick = (e) => {
        e.preventDefault();
        console.log(props);
        localStorage.setItem('Courses', JSON.stringify(props))
    }
    return (
        <div className='CoursesContainer' onClick={handleClick}>
            <img src={'img/'+props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <h5>{props.desc}</h5>
            <h4>{props.numUS} $</h4>
            <Link to='/ConfirmBooking'><button >Book Now</button></Link>
        </div>
    )
}

export default CardCourses;

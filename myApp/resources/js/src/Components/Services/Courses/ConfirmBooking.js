import React from 'react'
import './Confirmbooking.css'

import BookingForm from '../../Calender/Calender'
import './CardCourses.css'
const ConfirmBooking = () => {

    let Course = JSON.parse(localStorage.getItem('Courses'))
    return (
        <div className='ConfirmBooking'>
            <div className='ConfirmCard' >
                <img src={'img/'+Course.img} alt={Course.alt} />
                <h2>{Course.title}</h2>
                <h5>{Course.desc}</h5>
                <h4>{Course.price} $</h4>
            </div>
            <div className='ConfirmCalender'>
                {/* <Calender /> */}
                <BookingForm  Title={Course.title}/>
            </div>
        </div>
    )
}

export default ConfirmBooking

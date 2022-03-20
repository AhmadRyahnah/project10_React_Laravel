import React, { useState } from 'react'

import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import styled from './Calender.module.css'
const BookingForm = (props) => {

    // console.log(props.Farms);

    let bookings = props.Farms
    // const [5, ...props] = numbers;
    // console.log({...booking,...5});

    let navigate = useNavigate()
    const [User, setUser] = useState(localStorage.getItem('loggedUser')?JSON.parse(localStorage.getItem('loggedUser')) : [])
    const [date, setdate] = useState()
    const [booking, setBooking] = useState()

    // const [id, setId] = useState(0)

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = day + '-' + month + '-' + year;
    let startbook = year + '-' + month + '-' + ((new Date().getDate()) + 7);
    // let startbook = year + '-' + month + '-' + day;
    // console.log(startbook);
    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setBooking({ ...bookings, [name]: value, "user_id": User.id });

    }

    console.log(booking);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!localStorage.getItem("loggedUser")) {
            swal({
                title: "Please Login ",
                button: "ok ",
            });
            navigate('/SignInUp')
        } else {
            axios.post('http://127.0.0.1:8000/api/insertBooking', booking).then((response) => {
                // console.log(response);

            });
            swal({
                title: ` Successfully Booked ${booking.farmName} farm on ${booking.date}  `,
                text: 'Check Your Profile'
              });

        }
    }
    return (
        <div className={styled.ContainerCalender} >
            <form onSubmit={handleSubmit}><br/>
                {/* <label className={styled.today}>Today {today}</label> */}
                <label className={styled.booking}>Start Booking</label>
                <input name='date' className={styled.inputDate} type='date' required min={startbook} value={date} onChange={handleChange} />
                {/* <label className='booking'> Select Time</label> */}
                {/* <select className='inputDate' required onChange={(e) => { setTime(e.target.value) }}>
          {TimeSlot.map((item) => { return <option value={item.value}>{item.text}</option> })}
        </select> */}
                <input className={styled.btnCalender} type="submit" />
            </form>
        </div >
    )
}
export default BookingForm

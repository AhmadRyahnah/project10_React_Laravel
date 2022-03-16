import React from 'react';

import './Profile.css';
import { AiOutlineSetting } from 'react-icons/ai';
const Profile = () => {

    // fetch user's data from local
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(loggedUser);

    let bookingstable = null;
    if (localStorage.getItem('date')) {
        let bookings = JSON.parse(localStorage.getItem('date'));
        bookingstable = (
            <div className='customProfile'>
                <table >
                        <tr>
                            <th><h3>Course name</h3></th>
                            <th><h3>Start Date</h3></th>

                            <th><h3>Time</h3></th>
                        </tr>
                    {bookings.map((booking, id) => {
                        return (<>
                                <tr>

                                    <td><h5>{bookings[id].Title}</h5></td>
                                    <td> <h5>{bookings[id].date}</h5></td>
                                    <td> <h5>{bookings[id].time}</h5></td>
                                </tr>
                        </>
                        )

                    })}
                </table>
            </div>
        )
    }



    return (
        <div className='profileCont'>

            <h1 className='header'>Profile</h1>
            <AiOutlineSetting />

            <div className='profileContainer'>
                <div className="userContainer">
                    <div className="detailsUser">
                        <p> Hello {`${loggedUser.name}`}😃😃</p>
                        <p>Email: {loggedUser.email}</p>

                    </div>
                </div>
                <div className="BookingsContaiiner">
                    <div className="Bookings">
                        <h3>Your Bookings:</h3>
                    </div>
                    {bookingstable}
                </div>
            </div>
        </div>
    )
}

export default Profile

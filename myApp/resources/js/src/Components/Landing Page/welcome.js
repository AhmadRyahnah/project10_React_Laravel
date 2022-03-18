import React from 'react'
import './welcome.css'
const Welcome = () => {
    return (
        <div className='bodywelc'>
            <div className='welcomContainer'>
                <div className='paraWelcom'>
                    <h1>Welcome To<br /> Mzr3ti.com !</h1>
                    <p>
                        <strong>Mzr3ti.com </strong> is designed to help suppliers and owners of farms, owners or furnished apartments reach the right customers at the time.

                        At the same time, making it easier for customers to find all the information in one place instead of spending hours searching on the Internet.

                        If you own a farm, or if you own a furnished apartment and want to rent it, and you don't know how you are in the right place to list your product and start offering/rent.                    </p>
                </div>
                <div className='imgWelcome'>
                    <img src='img/wlc.jpg' alt='Mzr3ti.com ' />
                </div>
            </div></div>
    )
}

export default Welcome

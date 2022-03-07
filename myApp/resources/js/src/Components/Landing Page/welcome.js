import React from 'react'
import './welcome.css'
const Welcome = () => {
    return (
        <div className='bodywelc'>
            <div className='welcomContainer'>
                <div className='paraWelcom'>
                    <h1>Welcome To<br/> Civil Engineering<br/> Academy!</h1>
                    <p>
                        Our mission at CEA is to help you on your journey to becoming a professional engineer. In doing this, our main goal is to help you prepare, take, and pass the National Council of Examiners for Engineering and Surveying (NCEES) Civil FE and PE exams. We’ll even help you afterward by providing tips, tools, and resources to launch your civil engineering career!
                    </p>
                </div>
                <div className='imgWelcome'>
                    <img src='img/wlc.jpg' alt='civil Engineer' />
                </div>
            </div></div>
    )
}

export default Welcome

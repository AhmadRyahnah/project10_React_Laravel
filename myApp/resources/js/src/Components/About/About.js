import React from 'react'
import './About.css'
import img from './wlc.jpg'
const About = () => {
    return (
        <div className='About'>
            <h1>About Us</h1>
            <div className='aboutContainer'>
                <div className='textAbout'>
                    <h2>Our Mission</h2>
                    <h3>At Civil Engineering Academy it is our mission to help aspiring Civil Engineers pass their exams and develop the skills to be successful in their careers and in life. We are obsessed with helping you become a professional engineer and find a fulfilling career!
                        <br />  <br />
                        We are excited to help you by providing you with the best resources and material to ace your exams. We work hard to make sure our exams meet the current specifications and are life-like to the real exam. Our governorates were built from the ground up to give you just what you need to ace your exams, and our support is the best you can find.
                        We also provide coaching to further help you with your career including polishing up your resume, creating the perfect cover letter, or standing out with your LinkedIn profile.
                    </h3>
                </div>
                <div className='imgAbout'>
                    <img src={img} alt='civil engineer academy' />
                </div>
            </div>
        </div>
    )
}

export default About

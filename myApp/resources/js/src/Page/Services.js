import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Slider from '../Components/Slider/SliderImg';
import './Services.css'

const Services = () => {
    return (

        <Fragment >
            <h1 className='header'>Services</h1>
            <div className='LectureAndCourses'>
                <div className='Lecture'>
                    <Link to='/Lecture'>
                        <img src='img/Lecture/lecture.jpg' alt='Lecture' />
                      
                        <h2>Civil Engineering Courses</h2>
                        <h3>Starting at : 50.00 $</h3>
                        <button>See Courses</button>

                    </Link>
                </div>

                <div className='Courses'>
                    <Link to='/Courses'>
                        <img src='img/Lecture/Courses.jpg' alt='Courses' />
                        {/* <div className='slider'><Slider /></div> */}
                        <h2>Civil Engineering Software</h2>
                        <h3>Starting at : 150.00 $</h3>
                        <button>See Software</button>
                    </Link>
                </div>

            </div >
        </Fragment>
    )
}

export default Services

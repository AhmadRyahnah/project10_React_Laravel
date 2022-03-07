import React, { Fragment } from 'react'
import CardInfo from './CardInfo';
import CardUS from './CardLecture';
import './Lecture.css'


const Lecture = () => {


    const Cards = CardInfo.map((Card) => {

        return (

            <CardUS
                key={Card.id}
                desc={Card.desc}
                img={Card.img}
                alt={Card.alt}
                title={Card.title}
                price={Card.price}
                id={Card.id}
            />
        )
    });

    return (
        <Fragment>
            <h1 className='header'>Civil Engineering Courses</h1>
            <div className='Lecture'>
                {Cards}
            </div>
        </Fragment>
    )
}
export default Lecture;

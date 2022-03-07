import React from 'react';

import { useContext } from 'react/cjs/react.development';
import './Checkout.css'

import { UserContext } from '../../App';
const Checkout = (props) => {
    const { setmyLecture } = useContext(UserContext)

    const removeItem = () => {

        const myArray = localStorage.getItem('Lecture') ?
            JSON.parse(localStorage.getItem('Lecture')) : []
            let deleteArray=localStorage.getItem('fromDelete') ?
            JSON.parse(localStorage.getItem('fromDelete')) : []
        for (let i = 0; i < myArray.length; i++) {
            if (props.id === myArray[i].id) {
                myArray.splice(i, 1)
                setmyLecture(myArray.length)
                deleteArray.push(props)
                localStorage.setItem('fromDelete',JSON.stringify(deleteArray))
            }
        }
        localStorage.setItem('Lecture', JSON.stringify(myArray))

        if (myArray.length === 0) {
            localStorage.removeItem('Lecture')
        }
    }

    return (
            <div className='Card'>

                <img src={props.img} alt={props.alt} />
                <h3>{props.title}</h3>
                <h2>{props.price}.00 $</h2>
                <button onClick={removeItem} >Delete</button>
            </div>
    )
}
export default Checkout;

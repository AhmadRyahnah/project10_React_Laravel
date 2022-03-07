import React, { useContext, useState, useEffect } from 'react'
import './CardLecture.css'
import { UserContext } from '../../../App'
import { Link } from 'react-router-dom'
const CardLecture = (props) => {
    const [msg, setMsg] = useState('')
    const [click, setClick] = useState(false)

    // **********************

    useEffect(() => {
        const myLecture = (localStorage.getItem('Lecture'))
            ? JSON.parse(localStorage.getItem('Lecture')) : [];
        myLecture.forEach((element) => {
            if (element.id === Lecture.id) {
                setClick(!click)
                setMsg('This Course has been Added')
                // setmyLecture(myLecture.length)
            }
        })
    }, [])

    // **********************

    const Lecture = props
    const { setmyLecture } = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem('fromDelete')
        let myLecture = [];
        const myAllLecture = (localStorage.getItem('Lecture'))
            ? JSON.parse(localStorage.getItem('Lecture')) : [];
        myLecture = myAllLecture
        let exist = false;
        myLecture.forEach((element) => {
            if (element.id === Lecture.id) {
                exist = true;

            }
        })
        if (!exist) {
            myLecture.push(Lecture)
            setmyLecture(myLecture.length)

        }
        localStorage.setItem('Lecture', JSON.stringify(myLecture))
        setClick(!click)
        setMsg('This Course has been Added')
    }

    return (

        <div className='cardContainer' >
            <img src={props.img} alt={props.alt} key={props.id} />
            <h2>{props.title}</h2>
            <h5>{props.desc}</h5>
            <h4>{props.price} $</h4>
            {click ? <p>{msg}</p> : <p></p>}
            {click ? <Link to="/Checkout" ><button className='CartBtn' >Go to Cart</button></Link> : <button className='AddBtn' onClick={handleClick}  >Add to cart</button>}
        </div>

    )
}
export default CardLecture;

import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.development'
import Checkout from './Checkout'
import './Checkout.css'
import Payment from './Payment'
const ItemCart = () => {

    const myArray = localStorage.getItem('Lecture') ? JSON.parse(localStorage.getItem('Lecture')) : []


    const Carts = myArray.map((cart, id) => {
        return (
            <Checkout
                key={cart.id}
                img={cart.img}
                alt={cart.alt}
                title={cart.title}
                price={cart.price}
                id={cart.id}
            />
        )
    })


    return (
        <Fragment>
            <h1 className='header'>Cart Items</h1>
            <div className='formAndLecture'>
                {localStorage.getItem('Lecture') ?
                    <div className='CheckoutContainer'>
                        <div className='checkoutCard'>
                            <>{Carts}</> 
                        </div>
                        <div className='formChecout'>
                            <Payment />
                        </div>
                    </div> : <h1>Your Cart Is Empty <Link to='/Services'> <button>Go Services</button></Link></h1>}
            </div>

        </Fragment>
    )
}

export default ItemCart

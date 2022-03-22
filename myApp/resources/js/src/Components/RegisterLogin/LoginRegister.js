import React, { Fragment, useState, useEffect } from 'react'
import Login from './Login'
// import Login from './Login'
import './LoginRegister.css'
import Register from './Register'

const LoginRegister = () => {





    const [click, setClick] = useState(false)
    const handleClick = () => {

        click ? setClick(false) : setClick(true);
    }


    useEffect(() => {

    }, [click])

    return (
        <Fragment>
            <div className="wrapper">
                <div className="title-text">
                    {!click ?
                        <div className="title signup">
                            Login Form
                        </div> :
                        <div className="title signup">
                            Signup Form
                        </div>}
                </div>
                <div className="form-container">
                    <div className="slide-controls">

                        {!click ?
                            <>
                                <input style={{ display: 'none' }} type="radio" name="slide" id="login" checked />

                                <input style={{ display: 'none' }} onClick={() => handleClick()} type="radio" name="slide" id="signup" />
                            </> : <>
                                <input style={{ display: 'none' }} onClick={() => handleClick()} type="radio" name="slide" id="login" />

                                <input style={{ display: 'none' }} type="radio" name="slide" id="signup" checked /></>}

                        <label for="login" className="slide login">Login</label>
                        <label for="signup" className="slide signup">Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    {!click ?

                        <Login />

                        :

                        <Register />

                    }

                </div>
            </div>
            {/* </div> */}

        </Fragment>
    )
}

export default LoginRegister

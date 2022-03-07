import React from "react";
import './Sign-In-Up.css'
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
const SignInUp = () => {
    return (
        <div className="signInUp">
            <div className="register">
                <Register />
            </div>
            <div className="login">
                <Login />
            </div>
        </div>
    )
}
export default SignInUp;
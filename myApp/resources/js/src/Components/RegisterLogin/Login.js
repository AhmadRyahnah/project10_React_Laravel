
import React, { useState, useContext } from "react";
import './LoginRegister.css'

import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App'

import swal from 'sweetalert';
import user from '../Models/user'
const Login = () => {


    const { User, setUser } = useContext(UserContext)
    let navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrormsg] = useState();


    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        // for (let i = 0; i <= localStorage.length; i++) {
        //     const user = JSON.parse(localStorage.getItem('User'));

        //     if (user[i].email ===email && user[i].password === password) {
        //         localStorage.setItem('loggedUser', JSON.stringify(user))
        //         // alert('Successful Login');

        //     } else {
        //         setErrormsg('The Email or Password incorrect')
        //     }
        // }
        axios.post('http://127.0.0.1:8000/api/login', inputs).then(response => {
            console.log(response.data);
            if (response.data[0] === 'Not Matched') {
                swal({

                    title: "You entered the wrong email or password",
                    text: "Welcome!",
                    icon: "error",
                    button: "ok ",
                });
            } else {
                setUser(response.data.user)
                localStorage.setItem('loggedUser', JSON.stringify(response.data.user))
                response.data.user.role !== 0 ? navigate('/Orders') : navigate('/Farms')

            }
        }).catch(error=> {
            console.log("registration error", error);
            swal({

                title: "You entered the wrong email or password",
                text: "please try again!",
                icon: "error",
                button: "ok ",
            });
        });



    }





    return (
        <div className="form-inner">

            <form onSubmit={handleSubmit} className="signup">
                <div className="field">
                    <input name="email" type="text" placeholder="Email Address" value={email} onChange={handleChange} required />
                </div>
                <div className="field">
                    <input name="password" type="password" placeholder="Password" value={password} onChange={handleChange} required />
                </div>
                <div className="pass-link">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="field btn">
                    <div className="btn-layer"></div>
                    <button className='btnSign'>Login</button>
                </div>
                <div className="signup-link">
                    Not a member? <a href="">Signup now</a>
                </div>
            </form>
        </div>
    )
}

export default Login
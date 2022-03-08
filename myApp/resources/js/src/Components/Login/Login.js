import React, { useState, useContext } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App'

import swal from 'sweetalert';





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

                    title: "You Have an Account ",
                    text: "Welcome!",
                    icon: "error",
                    button: "ok ",
                });
            } else {
                setUser(response.data.user.role)
                localStorage.setItem('loggedUser', JSON.stringify(response.data.user))
                response.data.user.role !== 0 ? navigate('/') : navigate('/Services')

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
        <div className="loginContainer" onSubmit={handleSubmit}>

            <form className="loginForm">
                <h2>Sign In</h2>
                <input name="email" className="email" type='Email' value={email} onChange={handleChange} required placeholder='Email' />
                <input name="password" className="password" type='password' value={password} onChange={handleChange} required placeholder='Password' />
                <p>{errorMsg}</p>
                <button >Sign In</button>
            </form>
        </div>
    )
}
export default Login;

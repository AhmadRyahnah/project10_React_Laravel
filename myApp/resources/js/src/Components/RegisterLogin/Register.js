import React, { useState, useContext  } from "react";

import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { login } from "../Auth/Auth";
import axios from "axios";
import { UserContext } from '../../App'

const Register = () => {

    const { User, setUser } = useContext(UserContext)


    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/register', inputs).then( response =>{
            console.log(response.data);
            localStorage.setItem('loggedUser', JSON.stringify(response.data.user))
            setUser(response.data.user)



            if (response.data.status == "created") {
                login()
                swal({

                    title: "You are Register in Successfully ",
                    text: "Welcome!",
                    icon: "success",
                    button: "ok ",
                });
                setTimeout(() => {
                    navigate('/Farms')
                }, 3000);

            } else {
                swal({

                    title: "You Have an Account ",
                    text: "Welcome!",
                    icon: "error",
                    button: "ok ",
                });
            }




        }).catch(error=> {
            console.log("registration error", error);
            swal({

                title: "You Have an Account ",
                text: "Welcome!",
                icon: "error",
                button: "ok ",
            });
        });

    }
  return (
    <div className="form-inner">
    <form  onSubmit={handleSubmit} className="signup">
        <div className="field">
            <input name="name" type="text" placeholder="User Name" onChange={handleChange} required />
        </div>
        <div className="field">
            <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
        </div>
        <div className="field">
            <input name="password" type="password" placeholder="password" onChange={handleChange} required />
        </div>
        <div className="field btn">
            <div className="btn-layer"></div>
            {/* <input type="submit" value="Signup" /> */}
            <button className='btnSign'>Sign Up</button>
        </div>
    </form>
</div>
  )
}

export default Register

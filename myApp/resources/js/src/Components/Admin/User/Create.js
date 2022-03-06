import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import './User.css'

const CreateUser = () => {






    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {

        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/createUser/', inputs);
        navigate('/Users')
    }


    return (
        <div>
            <h1>Create User</h1>
            <div className="container">

                <form onSubmit={handleSubmit} >
                    <label htmlFor="fname">Name</label>
                    <input onChange={handleChange} type="text" id="fname" name="name" placeholder="Your name.." />

                    <label htmlFor="lname">Email</label>
                    <input onChange={handleChange} type="text" id="lname" name="email" placeholder="Your last name.." />

                    <label htmlFor="lname">Password</label>
                    <input onChange={handleChange} type="text" id="lname" name="password" placeholder="Your last name.." />

                    <label htmlFor="country">Phone</label>
                    <input onChange={handleChange} type="text" id="lname" name="phone" placeholder="Your last name.." />

                    <label htmlFor="country">Role</label>

                    <select id="country" name="role" onChange={handleChange}>
                        <option value={0}>User</option>
                        <option value={1}>Admin</option>
                    </select>



                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )

}
export default CreateUser;

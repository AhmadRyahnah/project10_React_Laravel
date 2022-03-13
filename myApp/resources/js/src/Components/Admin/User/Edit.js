import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';
import './User.css'
const EditUser = () => {

    const { id } = useParams();


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('editUser')));

    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({ ...values, [name]: value }));
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {

        event.preventDefault();
        axios.put('http://127.0.0.1:8000/api/editUser/' + id, user);
        navigate('/Users')
    }


    return (
        <div>
            <h1>Edit User</h1>
            <div className="container">

                <form onSubmit={handleSubmit} >
                    <label htmlFor="fname">Name</label>
                    <input value={user.name} onChange={handleChange} type="text" id="fname" name="name" placeholder="Your name.." />

                    <label htmlFor="lname">Email</label>
                    <input value={user.email} onChange={handleChange} type="text" id="lname" name="email" placeholder="Your last name.." />

                    <label htmlFor="country">Phone</label>
                    <input value={user.phone} onChange={handleChange} type="text" id="lname" name="phone" placeholder="Your last name.." />

                    <label htmlFor="country">Role</label>

                    <select id="country" name="role" onChange={handleChange}>
                        <option value={user.role !== 0 ? '1' : '0'}>{user.role !== 0 ? 'Admin' : 'User'}</option>
                        <option value={user.role === 0 ? '1' : '0'}>{user.role === 0 ? 'Admin' : 'User'}</option>

                    </select>



                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )

}
export default EditUser;

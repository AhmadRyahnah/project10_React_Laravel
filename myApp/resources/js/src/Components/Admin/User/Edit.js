import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';
import './User.css'
const EditUser = () => {

    const { id } = useParams();


    const [user, setUser] = useState();

    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/editShowUser/" + id).then((response) => {
            console.log(response.data);
            setUser(response.data.user)

        });
    }, []);

if(user)
console.log(user);

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
                    <input value={user?user.name:null} onChange={handleChange} type="text" id="fname" name="name" placeholder="Your name.." />

                    <label htmlFor="lname">Email</label>
                    <input value={user?user.email:null} onChange={handleChange} type="text" id="lname" name="email" placeholder="Your last name.." />

                    <label htmlFor="country">Phone</label>
                    <input value={user?user.phone:null} onChange={handleChange} type="text" id="lname" name="phone" placeholder="Your last name.." />

                    <label htmlFor="country">Role</label>

                    <select id="country" name="role" onChange={handleChange}>
                        <option value={user?user.role !== 0 ? '1' : '0':null}>{user?user.role !== 0 ? 'Admin' : 'User':null}</option>
                        <option value={user?user.role === 0 ? '1' : '0':null}>{user?user.role === 0 ? 'Admin' : 'User':null}</option>

                    </select>



                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )

}
export default EditUser;

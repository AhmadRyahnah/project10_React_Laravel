import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
const User = () => {

    const [Users, setUsers] = useState('');
    const [deleted, setDeleted] = useState(0);


    let i = 1;
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/users").then((response) => {
            setUsers(response.data);

        });
    }, [deleted]);



    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/deleteusers/${id}`);
        setDeleted(deleted + 1)
    }


    const EditClick = (user) => {
        // e.preventDefault();
        // console.log(props);
        localStorage.setItem('editUser', JSON.stringify(user))
    }
    // console.log(user);
    return (
        <div >
            <h1>Users Details</h1>
            <Link to="/createUser">
            <div className='addUser'>
            <button >Add User</button>
            </div>
            </Link>
            <br/><br/>
            <table id="customers" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {Users ? Users.map(user =>


                    <tbody>
                        <tr>
                            <td>{i++}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.role !== 0 ? 'Admin' : 'User'}</td>

                            <td><Link to='/editUser'>
                                <button variant="danger" onClick={() => EditClick(user)}>
                                    Edit
                                </button></Link></td>
                            {user.role === 0 ? <>
                                <td> <button variant="danger" onClick={() => deleteProduct(user.id)}>
                                    Delete
                                </button></td>

                            </> : <><td></td></>}

                        </tr>
                    </tbody>) : null}

            </table>
        </div>
    )

}
export default User;
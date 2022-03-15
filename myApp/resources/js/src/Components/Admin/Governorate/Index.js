import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import './Farm.css'
const Governorate = () => {

    const [governorates, setgovernorates] = useState();
    const [deleted, setDeleted] = useState(0);

    // console.log(Farms);
    let i = 1;
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/Governorates").then((response) => {
            setgovernorates(response.data);
            console.log(response.date);
        });
    }, [deleted]);



    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/deleteGovernorate/${id}`);
        setDeleted(deleted + 1)
    }


    // const EditClick = (governorate) => {
    //     // e.preventDefault();
    //     // console.log(props);
    //     localStorage.setItem('editGovernorate', JSON.stringify(governorate))
    // }
    // console.log(user);


    // const viewClick = (governorate) => {
    //     localStorage.setItem('governorate', JSON.stringify(governorate))
    // }
    return (
        <div >
            <h1>Farms Details</h1>
            <Link to="/createGovernorate">
                <div className='addUser'>
                    <button class="btn btn-success" >Add Governorate</button>
                </div>
            </Link>
            <br /><br />
            <table id="customers" >
                <thead>
                    <tr>
                        <th>#</th>

                        <th>Governorate</th>


                        <th>Image</th>
                        <th>Action</th>
                        {/* <th>view Farms</th>
                        <th>Edit</th>
                        <th>Delete</th> */}
                    </tr>
                </thead>
                {governorates ? governorates.map(governorate =>


                    <tbody>
                        <tr>
                            <td>{i++}</td>

                            <td>{governorate.governorateName}</td>

                            <td><img src={'img/Governorate/' + governorate.Image} width='100' /></td>

                            <td>
                                <Link to={`/viewFarms/${governorate.id}`}>
                                    <button class="btn btn-info" variant="danger" >
                                        view
                                    </button>
                                </Link>
                                {/* </td>
                            <td> */}
                                <Link to={`/editGovernorate/${governorate.id}`}>
                                    <button class="btn btn-primary" variant="danger">
                                        Edit
                                    </button></Link>
                                {/* </td>

                            <td> */}
                                <button class="btn btn-danger" variant="danger" onClick={() => deleteProduct(governorate.id)}>
                                    Delete
                                </button></td>



                        </tr>
                    </tbody>) : null}

            </table>
        </div>
    )

}
export default Governorate;

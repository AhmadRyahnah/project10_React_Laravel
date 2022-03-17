import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import './Farm.css'


const ViewFarm = () => {
    const { id } = useParams();

    // console.log(id);


    // const governorate = JSON.parse(localStorage.getItem('governorate'));
    // const id=governorate.id
    // const name = governorate.governorateName
    const [Farms, setFarms] = useState();
    const [deleted, setDeleted] = useState(0);

    // console.log(Farms);
    let i = 1;
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/showFarm/" + id).then((response) => {
            setFarms(response.data);
            // console.log(response.date);
        });
    }, [deleted]);



    const deleteProduct = async (idD) => {
        await axios.delete(`http://127.0.0.1:8000/api/deleteFarm/${idD}`);
        setDeleted(deleted + 1)
    }


    // const EditClick = (Farm) => {
    //     // e.preventDefault();
    //     // console.log(props);
    //     localStorage.setItem('editFarm', JSON.stringify(Farm))
    // }
    // console.log(user);
    return (
        <div >
            <h1>Farms Details</h1>
            <Link to="/createFarm">
                <div className='addUser'>
                    <button >Add Farm</button>
                </div>
            </Link>
            <br /><br />
            <table id="customers" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Governorate</th>
                        <th>Description</th>
                        <th>Phone</th>
                        <th>price</th>
                        <th>Image</th>
                        <th>Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {Farms ? Farms.map(Farm =>


                    <tbody>
                        <tr>
                            <td>{i++}</td>
                            <td>{Farm.farmName}</td>
                            <td>
                                {/* {name} */}
                            </td>
                            <td>{Farm.description}</td>
                            <td>{Farm.phone}</td>
                            <td>{Farm.price}</td>
                            <td><img src={'img/' + Farm.image} width='100' /></td>
                            <td>{Farm.Time}</td>

                            <td><Link to='/editFarm'>
                                <button variant="danger" >
                                    Edit
                                </button></Link></td>

                            <td> <button variant="danger" onClick={() => deleteProduct(Farm.id)}>
                                Delete
                            </button></td>



                        </tr>
                    </tbody>) : null}

            </table>
        </div>
    )

}
export default ViewFarm;

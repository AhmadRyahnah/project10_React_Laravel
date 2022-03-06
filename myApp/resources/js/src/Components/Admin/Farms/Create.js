import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import '../User/User.css'

const CreateFarm = () => {


    const [Governorate, setGovernorate] = useState('');

    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/createFarm").then((response) => {
            setGovernorate(response.data);

        });
    }, []);

    // console.log(Governorate);


    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));



    }
    const handleSubmit = (event) => {

        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/insertFarm', inputs);
        navigate('/Farms')
    }


    return (
        <div>
            <h1>Create Farm</h1>
            <div className="container">

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <label htmlFor="fname">Farm Name</label>
                    <input onChange={handleChange} type="text" name="farmName" placeholder="Your name.." required />

                    <label htmlFor="lname">Governorate Name</label>
                    <select name='governorateID' onChange={handleChange} required>
                        <option value={''}>select</option>
                        {Governorate ? Governorate.map(item => <option value={item.id}>{item.governorateName}</option>) : null}
                    </select>
                    <label htmlFor="lname">Phone</label>
                    <input onChange={handleChange} type="text" name="phone" placeholder="Your last name.." required />

                    <label htmlFor="country">Price</label>
                    <input onChange={handleChange} type="text" name="price" placeholder="Your last name.." required />

                    <label htmlFor="country">Time</label>
                    <select name="Time" onChange={handleChange} required>
                        <option value={''} >Select</option>
                        <option value={'available'} >Available</option>
                        <option value={'unavailable'}>Un Available</option>
                    </select>
                    <label htmlFor="country">Description</label>
                    {/* <input onChange={handleChange} type="text" id="lname" name="description" placeholder="Your last name.." /> */}
                    <textarea onChange={handleChange} name="description" cols="30" rows="4" placeholder="Add description" required />
                    <label htmlFor="country">Image</label><br /><br />
                    <input accept='image/*' onChange={handleChange} type="file" id="lname" name="image" placeholder="Your last name.." required />

                    <br /><br /><img src={Image} /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )

}
export default CreateFarm;

import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import '../User/User.css'

const CreateGovernorate = () => {
    const [Image, setImage] = useState('img/noimg.png')





    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));

        if (event.target.name == 'image') {
            setImage('img/Governorate/' + event.target.files[0].name);

            let dataImg = new FormData()
            dataImg.append('image', event.target.files[0])
            // console.log(fileImg);
            axios.post('http://127.0.0.1:8000/api/insertImgGover', dataImg).then((response) => {
                // console.log(response);

            });
        }

    }


    const handleSubmit = (event) => {

        event.preventDefault();

        axios.post('http://127.0.0.1:8000/api/insertGovernorate', inputs).then((response) => {
            // console.log(response);

        });
        navigate('/Governorates')
    }





    return (
        <div>
            <h1>Create Governorate</h1>
            <div className="container">

                <form onSubmit={handleSubmit} encType="multipart/form-data" >

                    <label htmlFor="fname">Farm Name</label>
                    <input onChange={handleChange} type="text" name="governorateName" placeholder="Your name.." required />


                    <label htmlFor="country">Image</label><br /><br />
                    <input accept='image/*' onChange={handleChange} type="file" id="fileinput" name="image" placeholder="Your last name.." required />

                    {/* <br /><br /><img width={200} src={Image} /><br /><br /> */}


                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )

}
export default CreateGovernorate;

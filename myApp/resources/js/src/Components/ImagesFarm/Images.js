import React, { useState, useEffect } from 'react'

import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
const Images = () => {

    const { id } = useParams();
    const [Image, setImage] = useState('')

    let navigate = useNavigate()






    const [inputs, setInputs] = useState([]);

    // const handleChange = (event) => {


    //     if (event.target.name == 'image') {


    //         let dataImg = new FormData()
    //         dataImg.append('image', event.target.files[0])
    //         // console.log(fileImg);
    //         axios.post('http://127.0.0.1:8000/api/insertImg', dataImg).then((response) => {
    //             // console.log(response);

    //         });
    //     }
    // }
    console.log(inputs);


    const handleSubmit = (event) => {

        event.preventDefault();





        // console.log(fileImg);

        for (let i = 0; i < inputs.length; i++) {
            let dataImg = new FormData()
            dataImg.append("images", inputs[i])
            axios.post('http://127.0.0.1:8000/api/insertMultiImage/'+id, dataImg).then((response) => {
                console.log(response.data);

            });
        }

        navigate('/Farms')
    }

    return (
        <div className="container">

            <form onSubmit={handleSubmit} encType="multipart/form-data" >

                <label htmlFor="country">Image</label><br /><br />


                <input multiple accept='image/*' onChange={(e) => setInputs(e.target.files)} type="file" id="fileinput" name="images" placeholder="Your last name.." required />




                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Images

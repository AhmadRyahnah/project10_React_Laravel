import React, { useState, useEffect, Fragment } from 'react'
import { useNavigate , useParams} from "react-router-dom";
import swal from 'sweetalert';
import '../User/User.css'

const EditFarm = () => {
    const { id } = useParams();



    const [Farm, setFarm] = useState(localStorage.getItem('editFarm') ? JSON.parse(localStorage.getItem('editFarm')) : []);

    const [Image, setImage] = useState('img/Farms/' + Farm.image)

    const [Governorate, setGovernorate] = useState('');

    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/createFarm").then((response) => {
            setGovernorate(response.data);

        });
    }, []);

    // console.log(Governorate);


    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);
    // if(inputs){
    //    let img=inputs.image
    // console.log(img);
    // }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        setInputs(values => ({ ...values, [name]: value }));
        setFarm(values => ({ ...values, [name]: value }));
        // if (event.target.name == 'image') {
        //     setImage('img/' + event.target.files[0].name);
        // }
        if (event.target.name == 'image') {
            setImage('img/Farms/' + event.target.files[0].name);
            // setfileImg(event.target.files[0])
            let dataImg = new FormData()
            dataImg.append('image', event.target.files[0])
            // console.log(fileImg);
            axios.post('http://127.0.0.1:8000/api/insertImg', dataImg).then((response) => {
                // console.log(response);

            });
        }

    }
    const handleSubmit = (event) => {

        event.preventDefault();
        axios.put('http://127.0.0.1:8000/api/editFarm/' + id, Farm);
        navigate('/Farms')
    }






    return (
        <Fragment key={Farm.id}>

            <h1>Edit Farm</h1>
            <div className="container">

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <label htmlFor="fname">Farm Name</label>
                    <input value={Farm.farmName} onChange={handleChange} type="text" name="farmName" placeholder="Your name.." required />

                    <label htmlFor="lname">Governorate Name</label>
                    <select name='governorate_id' onChange={handleChange} required>
                        <option value={Farm.governorate_id}>{Farm.governorateName}</option>
                        {Governorate ? Governorate.map(item =>
                            <option value={item.id}>{item.governorateName}</option>) : null}
                    </select>
                    <label htmlFor="lname">Phone</label>
                    <input value={Farm.phone} onChange={handleChange} type="text" name="phone" placeholder="Your last name.." required />

                    <label htmlFor="country">Price</label>
                    <input value={Farm.price} onChange={handleChange} type="text" name="price" placeholder="Your last name.." required />

                    <label htmlFor="country">Time</label>
                    <select name="Time" onChange={handleChange} required>

                        <option value={Farm.Time === 'available' ? 'available' : 'unavailable'} >{Farm.Time === 'available' ? 'Available' : 'Unavailable'}</option>
                        <option value={Farm.Time !== 'available' ? 'available' : 'unavailable'} >{Farm.Time !== 'available' ? 'Available' : 'Unavailable'}</option>

                    </select>
                    <label htmlFor="country">Description</label>
                    {/* <input onChange={handleChange} type="text" id="lname" name="description" placeholder="Your last name.." /> */}
                    <textarea value={Farm.description} onChange={handleChange} name="description" cols="30" rows="4" placeholder="Add description" required />
                    <label htmlFor="country">Image</label><br /><br />

                    {/* <input accept='image/*' onChange={handleChange} type="text" id="fileinput" name="image"  required /> */}

                    <input accept='image/*' onChange={handleChange} type="file" id="fileinput" name="image"  />

                    <br /><br /><img width={200} src={Image} /><br /><br />


                    <input onClick={() => moveFile()} type="submit" value="Submit" />
                </form>
            </div>
        </Fragment>
    )

}
export default EditFarm;

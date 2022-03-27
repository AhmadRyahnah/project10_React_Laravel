import React, { useState, useEffect, Fragment } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../User/User.css'

const EditFarm = () => {
    const { id } = useParams();

    // http://127.0.0.1:8000/api/editShow/1

    const [Farm, setFarm] = useState();


    const [Governorate, setGovernorate] = useState();


    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/editShow/" + id).then((response) => {
            console.log(response.data);
            setFarm(response.data.farm)
            setImage(response.data.farm.image)
            setGovernorate(response.data.Governorat)
        });
    }, []);
    const [Image, setImage] = useState(Image?Image:null)
    // if (Farm)
    //     console.log(Farm.farmName);

    // useEffect(async () => {

    //     await axios.get("http://127.0.0.1:8000/api/createFarm").then((response) => {
    //         setGovernorate(response.data);

    //     });
    // }, []);

    // console.log(Governorate);


    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);
    if (inputs) {
        let img = inputs.image
        console.log(img);
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        setInputs(values => ({ ...values, [name]: value }));
        setFarm(values => ({ ...values, [name]: value }));
        // if (event.target.name == 'image') {
        //     setImage('img/' + event.target.files[0].name);
        // }
        if (event.target.name == 'image') {
            setImage(event.target.files[0].name);
            // setfileImg(event.target.files[0])
            let dataImg = new FormData()
            dataImg.append('image', event.target.files[0])
            // console.log(fileImg);
            axios.post('http://127.0.0.1:8000/api/insertImg', dataImg).then((response) => {
                // console.log(response);

            });


            console.log(Farm);
        }

    }
    const handleSubmit = (event) => {

        event.preventDefault();
        axios.put('http://127.0.0.1:8000/api/editFarm/' + id, Farm);
        navigate('/Farms')
    }






    return (


        // <h1>ryahnah</h1>
        <Fragment >

            <h1>Edit Farm</h1>
            <div className="container">

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <label htmlFor="fname">Farm Name</label>
                    <input value={Farm ? Farm.farmName : 0} onChange={handleChange} type="text" name="farmName" placeholder="Your name.." required />

                    <label htmlFor="lname">Governorate Name</label>
                    <select name='governorate_id' onChange={handleChange} required>
                        <option value={Farm ? Farm.governorate_id : 0}>

                            {Farm && Governorate ?
                                Governorate.map(element => {
                                    if (element.id === Farm.governorate_id) {
                                        return element.governorateName
                                    }
                                })

                                : 0}


                        </option>
                        {Governorate ? Governorate.map(item =>
                            <option value={item.id}>{item.governorateName}</option>) : null}
                    </select>
                    <label htmlFor="lname">Phone</label>
                    <input value={Farm ? Farm.phone : 0} onChange={handleChange} type="text" name="phone" placeholder="Your last name.." required />

                    <label htmlFor="country">Price</label>
                    <input value={Farm ? Farm.price : 0} onChange={handleChange} type="text" name="price" placeholder="Your last name.." required />


                    <label htmlFor="country">Location</label>

                    <input value={Farm ? Farm.Location : 0}  onChange={handleChange} type="text" name="Location" placeholder="Location" required />






                    {/* <label htmlFor="country">Time</label>
                    <select name="Time" onChange={handleChange} required>

                        <option value={Farm ? Farm.Time === 'available' ? 'available' : 'unavailable' : 0} >{Farm ? Farm.Time === 'available' ? 'Available' : 'Unavailable' : 0}</option>
                        <option value={Farm ? Farm.Time !== 'available' ? 'available' : 'unavailable' : 0} >{Farm ? Farm.Time !== 'available' ? 'Available' : 'Unavailable' : 0}</option>

                    </select> */}
                    <label htmlFor="country">Description</label>
                    {/* <input onChange={handleChange} type="text" id="lname" name="description" placeholder="Your last name.." /> */}
                    <textarea value={Farm ? Farm.description : 0} onChange={handleChange} name="description" cols="30" rows="4" placeholder="Add description" required />
                    <label htmlFor="country">Image</label><br /><br />

                    {/* <input accept='image/*' onChange={handleChange} type="text" id="fileinput" name="image"  required /> */}

                    <input accept='image/*' onChange={handleChange} type="file" id="fileinput" name="image" />

                    <br /><br />{Image?<img width={200} src={require('/img/Farms/'+Image).default} />:null}<br /><br />


                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Fragment>
    )

}
export default EditFarm;

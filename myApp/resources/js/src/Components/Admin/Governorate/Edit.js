import React, { useState, Fragment } from 'react'
import { useNavigate , useParams} from "react-router-dom";
import swal from 'sweetalert';
import '../User/User.css'

const EditGovernorate = () => {


    const { id } = useParams();



    const [Governorate, setGovernorate] = useState(localStorage.getItem('editGovernorate') ? JSON.parse(localStorage.getItem('editGovernorate')) : []);
    const [Image, setImage] = useState('img/Governorate/' + Governorate.Image)


    // useEffect(async () => {

    //     await axios.get("http://127.0.0.1:8000/api/createFarm").then((response) => {
    //         setGovernorate(response.data);

    //     });
    // }, []);

    // console.log(Governorate);


    let navigate = useNavigate()
    // const [inputs, setInputs] = useState([]);
    // if(inputs){
    //    let img=inputs.image
    // console.log(img);
    // }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        // setInputs(values => ({ ...values, [name]: value }));
        setGovernorate(values => ({ ...values, [name]: value }));
        // if (event.target.name == 'image') {
        //     setImage('img/' + event.target.files[0].name);
        // }
        if (event.target.name == 'image') {
            setImage('img/Governorate/' + event.target.files[0].name);
            // setfileImg(event.target.files[0])
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
        axios.put('http://127.0.0.1:8000/api/editGovernorate/' + id, Governorate);
        navigate('/Governorates')
    }






    return (
        <Fragment key={Governorate.id}>

            <h1>Edit Governorate</h1>
            <div className="container">

                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <label htmlFor="fname">Governorate Name</label>
                    <input value={Governorate.governorateName} onChange={handleChange} type="text" name="governorateName" placeholder="Your name.." required />



                    <input accept='image/*' onChange={handleChange} type="file" id="fileinput" name="image"  />

                    <br /><br /><img width={200} src={Image} /><br /><br />


                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Fragment>
    )

}
export default EditGovernorate;

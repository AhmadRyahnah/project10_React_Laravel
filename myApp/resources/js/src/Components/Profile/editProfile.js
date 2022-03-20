import React, { useState, useEffect,useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../Admin/User/User.css'
import { UserContext } from '../../App'

const EditProfile = (props) => {

    const { User, setUser } = useContext(UserContext)





    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/editShowUser/" + User.id).then((response) => {
            console.log(response.data);
            setUser(response.data.user)

        });
    }, []);



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
        axios.put('http://127.0.0.1:8000/api/editUser/' + User.id, User);
        props.setClick(false)
        setUser(User)
        localStorage.setItem('loggedUser', JSON.stringify(User))
        // setUser(localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : [])
        navigate('/Profile')
        swal({
            title: ` Your Information has been Successfully Updated! `,
            text: 'Thank You'
          });

    }


    return (
        <div >



            <form onSubmit={handleSubmit} >
                <label htmlFor="fname">Name</label>
                <input value={User ? User.name : null} onChange={handleChange} type="text" id="fname" name="name" placeholder="Your name.." />

                <label htmlFor="lname">Email</label>
                <input value={User ? User.email : null} onChange={handleChange} type="text" id="lname" name="email" placeholder="Your last name.." />

                <label htmlFor="country">Phone</label>
                <input value={User ? User.phone : null} onChange={handleChange} type="text" id="lname" name="phone" placeholder="Your last name.." />

                {/* <label htmlFor="country">Role</label>

                    <select id="country" name="role" onChange={handleChange}>
                        <option value={user ? user.role !== 0 ? '1' : '0' : null}>{user ? user.role !== 0 ? 'Admin' : 'User' : null}</option>
                        <optin value={user ? user.role === 0 ? '1' : '0' : null}>{user ? user.role === 0 ? 'Admin' : 'User' : null}</option>

                    </select> */}



                <input type="submit" value="Submit" />
            </form>

        </div>

    )

}
export default EditProfile;

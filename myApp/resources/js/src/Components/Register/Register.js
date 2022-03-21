import React, { useState, useContext  } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { login } from "../Auth/Auth";
import axios from "axios";
import { UserContext } from '../../App'


const Register = () => {
    const { User, setUser } = useContext(UserContext)


    let navigate = useNavigate()
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/register', inputs).then( response =>{
            console.log(response.data);
            localStorage.setItem('loggedUser', JSON.stringify(response.data.user))
            setUser(response.data.user)



            if (response.data.status == "created") {
                login()
                swal({

                    title: "You are Register in Successfully ",
                    text: "Welcome!",
                    icon: "success",
                    button: "ok ",
                });
                setTimeout(() => {
                    navigate('/Farms')
                }, 3000);

            } else {
                swal({

                    title: "You Have an Account ",
                    text: "Welcome!",
                    icon: "error",
                    button: "ok ",
                });
            }




        }).catch(error=> {
            console.log("registration error", error);
            swal({

                title: "You Have an Account ",
                text: "Welcome!",
                icon: "error",
                button: "ok ",
            });
        });

    }

    // const [username, setUsername] = useState();
    // const [errname, setErrname] = useState();
    // const [email, setEmail] = useState();
    // const [erremnail, setErremail] = useState();
    // const [password, setPassword] = useState();
    // const [errpassword, setErrpassword] = useState();
    // const [confirmpassword, setConfirmpassword] = useState();
    // const [errconfirmpassword, setErrconfirmpassword] = useState();

    // let count = 0;
    // const handleSubnmit = (e) => {
    //     e.preventDefault();
    //     count = 0;


    //     if (username == '') {
    //         setErrname('Please Enter your Name.')
    //             (count++)
    //     } else {
    //         setErrname('')
    //     }

    //     if (email.includes('@')) {
    //         setErremail('')
    //     } else {
    //         setErremail('The Email is not valid.')
    //             (count++)
    //     }
    //     if (password.length < 6) {
    //         setErrpassword('The Password Should be more than 6 ')
    //             (count++)
    //     } else {
    //         setErrpassword('')
    //     }

    //     if (password.length !== confirmpassword.length) {
    //         setErrconfirmpassword('Password not Mathed')
    //             (count++)
    //     } else {
    //         setErrconfirmpassword('')
    //     }


    //     if (count === 0) {
    //         let userInformation = {
    //             email: email, username: username, password: password
    //         }
    //         // localStorage.setItem('User', JSON.stringify(userInformation))
    //         let userInfo=[];
    //         const AllUser=localStorage.getItem('User')?JSON.parse(localStorage.getItem('User')):[];
    //         userInfo=AllUser
    //         userInfo.push(userInformation)
    //         localStorage.setItem('User',JSON.stringify(userInfo))
    //     } else {
    //         console.log('ahmad');
    //     }
    //     swal({

    //         title: "You are Register in Successfully ",
    //         text: "Welcome!",
    //         icon: "success",
    //         button: "ok ",
    //     });
    // }



    return (




        <div className="registerContainer">

        <form className="registerForm" onSubmit={handleSubmit}>
            <h2>Create an Account</h2>

            <input className="regInputs" type='text' name="name" onChange={handleChange} placeholder='User Name' />
            <input className="regInputs" type='text' name="email" onChange={handleChange} placeholder='Email' />
            <input className="regInputs" type='password' name="password" onChange={handleChange} placeholder='Password' />
            {/* <input type='password'  onChange={handleChange}placeholder='Confirm Password' /> */}
            <button >Sign Up</button>




            {/* <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='User Name' />
            <p>{errname}</p>
            <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
            <p>{erremnail}</p>
            <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
            <p>{errpassword}</p>
            <input type='password' value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} placeholder='Confirm Password' />
            <p>{errconfirmpassword}</p>
            <button onClick={handleSubnmit}>Sign Up</button> */}
        </form>
    </div>
        // <div className="registerContainer">

        //     <form className="registerForm" >
        //         <h2>Create an Account</h2>
        //         <input className="regInputs" type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='User Name' />
        //         <p>{errname}</p>
        //         <input className="regInputs" type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
        //         <p>{erremnail}</p>
        //         <input className="regInputs" type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
        //         <p>{errpassword}</p>
        //         <input className="regInputs" type='password' value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} placeholder='Confirm Password' />
        //         <p>{errconfirmpassword}</p>
        //         <button onClick={handleSubnmit}>Sign Up</button>
        //     </form>
        // </div>
    )
}
export default Register;

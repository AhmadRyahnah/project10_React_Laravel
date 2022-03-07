import React, { useState } from "react";
import './Register.css';
// import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';




const Register = () => {
    const [username, setUsername] = useState();
    const [errname, setErrname] = useState();
    const [email, setEmail] = useState();
    const [erremnail, setErremail] = useState();
    const [password, setPassword] = useState();
    const [errpassword, setErrpassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [errconfirmpassword, setErrconfirmpassword] = useState();

    let count = 0;
    const handleSubnmit = (e) => {
        e.preventDefault();
        count = 0;


        if (username == '') {
            setErrname('Please Enter your Name.')
                (count++)
        } else {
            setErrname('')
        }

        if (email.includes('@')) {
            setErremail('')
        } else {
            setErremail('The Email is not valid.')
                (count++)
        }
        if (password.length < 6) {
            setErrpassword('The Password Should be more than 6 ')
                (count++)
        } else {
            setErrpassword('')
        }

        if (password.length !== confirmpassword.length) {
            setErrconfirmpassword('Password not Mathed')
                (count++)
        } else {
            setErrconfirmpassword('')
        }


        if (count === 0) {
            let userInformation = {
                email: email, username: username, password: password
            }
            // localStorage.setItem('User', JSON.stringify(userInformation))
            let userInfo=[];
            const AllUser=localStorage.getItem('User')?JSON.parse(localStorage.getItem('User')):[];
            userInfo=AllUser
            userInfo.push(userInformation)
            localStorage.setItem('User',JSON.stringify(userInfo))
        } else {
            console.log('ahmad');
        }
        swal({

            title: "You are Register in Successfully ",
            text: "Welcome!",
            icon: "success",
            button: "ok ",
        });
    }



    return (
        <div className="registerContainer">

            <form className="registerForm" >
                <h2>Create an Account</h2>
                <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='User Name' />
                <p>{errname}</p>
                <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                <p>{erremnail}</p>
                <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                <p>{errpassword}</p>
                <input type='password' value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} placeholder='Confirm Password' />
                <p>{errconfirmpassword}</p>
                <button onClick={handleSubnmit}>Sign Up</button>
            </form>
        </div>
    )
}
export default Register;

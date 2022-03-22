import React, { useState, useContext } from "react";
import "./NavBar.css";
import logo from './logo.png'
import { Link, useNavigate } from "react-router-dom";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { UserContext } from '../../App'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
// GiHamburgerMenu
export default function Navpath() {
    const navigate = useNavigate();
    const handleUseNavigate = () => {
        localStorage.getItem('loggedUser') ? navigate('/Services') : navigate('/LoginRegister');
    };
    return <NavBar handleUseNavigate={handleUseNavigate} />
}


const NavBar = (props) => {

    //   const { myLecture ,setmyLecture } = useContext(UserContext)

    let isLoggedIn = localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : 0;
    // const logout = () => {
    //     localStorage.removeItem('loggedUser')
    //     localStorage.removeItem('Lecture')
    //     localStorage.removeItem('date')
    //     localStorage.removeItem('fromDelete')
    //     localStorage.removeItem('governorates')

    //     // setmyLecture(0)
    //     props.handleUseNavigate()
    // }

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click)
    // const[cart,setcart]=useState(myLecture.length)


    return (

        <div className="navbarContainer">

            <div className="logo" >
                <Link to="/" onClick={handleClick}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={click ? "nav-list active" : "nav-list"}>
                <ul >
                    <li><Link to="/" onClick={handleClick}>Home</Link></li>
                    <li><Link to="/Farms" onClick={handleClick}>Farms</Link></li>
                    {isLoggedIn ? <li><Link to="/Profile" onClick={handleClick}>Profile</Link></li> : null}
                    <li><Link to="/About" onClick={handleClick}>About us</Link></li>

                </ul>
            </div>
            <div className={click ? "shoppingIcon active" : "shoppingIcon"}>
                <ul >
                    <li>
                        {/* <Link to="/Checkout" onClick={handleClick}><ShoppingIcon /></Link> */}
                        {/* <Link to="/Checkout" onClick={handleClick} className="shoppingIcon"><span>{myLecture}</span></Link> */}
                    </li>
                </ul>
            </div>
            <div className={click ? "login_logout active" : "login_logout"}>
                <ul >
                    <li>

                        {isLoggedIn ?
                            null
                            // <p> welcome ,{isLoggedIn.name}</p>
                            // <Link to="/LoginRegister" onClick={handleClick}>
                            //     <button onClick={logout}>
                            //         Log out</button></Link>

                            :
                            <Link to="/LoginRegister" onClick={handleClick}>
                                <button>Log In
                                </button></Link>
                        }


                    </li>
                </ul>
            </div>
            <div className="nav-icon" onClick={handleClick}>
                {click ? <GiHamburgerMenu /> : <FaTimes />}
                {/* <i className={!click ? <GiHamburgerMenu/> : 'fas fa-bars'}></i> */}
            </div>


        </div>

    );
}



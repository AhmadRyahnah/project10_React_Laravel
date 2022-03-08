import React, { useState, useContext } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { UserContext } from '../../App'

export default function Navpath() {
  const navigate = useNavigate();
  const handleUseNavigate = () => {
    localStorage.getItem('loggedUser') ? navigate('/Services') : navigate('/SignInUp');
  };
  return <NavBar handleUseNavigate={handleUseNavigate} />
}


const NavBar = (props) => {

//   const { myLecture ,setmyLecture } = useContext(UserContext)

  let isLoggedIn = localStorage.getItem('loggedUser');
  const logout = () => {
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('Lecture')
    localStorage.removeItem('date')
    localStorage.removeItem('fromDelete')
    localStorage.removeItem('Courses')

    // setmyLecture(0)
    props.handleUseNavigate()
  }

  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click)
  // const[cart,setcart]=useState(myLecture.length)


  return (

      <div className="navbarContainer">
        <div className="logo" onClick={handleClick}>
          <img src='./img/logo.png' alt="logo" />
        </div>
        <div className={click ? "nav-list active" : "nav-list"}>
          <ul >
            <li><Link to="/" onClick={handleClick}>Home</Link></li>
            <li><Link to="/Services" onClick={handleClick}>Services</Link></li>
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


              <button style={{backgroundColor:"#FB6767" }} onClick={logout}><Link to="/SignInUp" onClick={handleClick}>Log out</Link></button>
                :
                <button><Link to="/SignInUp" onClick={handleClick}>Log In</Link></button>}

            </li>
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className={!click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>


      </div>

  );
}



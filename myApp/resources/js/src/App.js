
import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/footer/footer";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Page/Home";
import Services from "./Page/Services";
import SignInUp from './Page/Sign-In-Up'
import Lecture from '../src/Components/Services/Lecture/Lecture'
import Courses from "./Components/Services/Courses/Courses";
import ConfirmBooking from "./Components/Services/Courses/ConfirmBooking";
import Profile from './Components/Profile/Profile'
import About from "./Components/About/About";
import ItemCart from "./Components/Checkout/ItemCart";
import HomeAdmin from "./Components/Admin/Home";
import ErrorPage from './Components/404/404';

export const UserContext = createContext();
const App = () => {

    const [User, setUser] = useState(0)


    // const [myLecture, setmyLecture] = useState(0);
    useEffect(() => {
        const myUser = (localStorage.getItem('loggedUser'))
        ? JSON.parse(localStorage.getItem('loggedUser')) : [];
        setUser(myUser.role)
    })

    // <Route path="adminDashboard" element={<HomeAdmin />} />

    return (
        // <BrowserRouter>
        <UserContext.Provider value={{ User, setUser }} >
        {/* <UserContext.Provider  > */}

            {User ? <HomeAdmin /> :
                <> <NavBar />
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path='SignInUp' element={<SignInUp />} />
                        <Route path='Checkout' element={<ItemCart />} />
                        <Route path='Services' element={<Services />} />
                        <Route path='Lecture' element={<  Lecture />} />
                        <Route path='Courses' element={<Courses />} />
                        <Route path='ConfirmBooking' element={<ConfirmBooking />} />
                        <Route path='Profile' element={<Profile />} />
                        <Route path='About' element={<About />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                    <Footer />
                </>}
        </UserContext.Provider>
        // </BrowserRouter>
    )
};
export default App;
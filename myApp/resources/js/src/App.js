
import React, { createContext, useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import './App.css'

import Footer from "./Components/footer/footer";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Page/Home";
import Services from "./Page/Services";
import SignInUp from './Page/Sign-In-Up'

import Governorates from "./Components/Services/governorates/governorates";
import ConfirmBooking from "./Components/Services/governorates/ConfirmBooking";
import Profile from './Components/Profile/Profile'
import About from "./Components/About/About";
import HomeAdmin from "./Components/Admin/Home";
import ErrorPage from './Components/404/404';
// import LoginRegister from "./Components/RegisterLogin/LoginRegister";

export const UserContext = createContext();
const App = () => {

    const [User, setUser] = useState(0)



    useEffect(() => {
        const myUser = (localStorage.getItem('loggedUser'))
            ? JSON.parse(localStorage.getItem('loggedUser')) : [];
        setUser(myUser.role)
    })

    // <Route path="adminDashboard" element={<HomeAdmin />} />

    return (

        <UserContext.Provider value={{ User, setUser }} >


            {User ? <HomeAdmin /> :
                <> <NavBar />
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path='SignInUp' element={<SignInUp />} />
                        <Route path='Services' element={<Services />} />
                        <Route path='governorates/:id' element={<Governorates />} />
                        <Route path='Farms' element={<Governorates />} />
                        <Route path='ConfirmBooking/:id' element={<ConfirmBooking />} />
                        <Route path='Profile' element={<Profile />} />
                        <Route path='About' element={<About />} />
                        {/* <Route path='LoginRegister' element={<LoginRegister />} /> */}
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                    <Footer />
                </>}
        </UserContext.Provider>

    )
};
export default App;

import React, { useState, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './Home.css'

import User from './User/Index'
import Farm from "./Farms/Index";
import EditUser from "./User/edit";
import CreateUser from "./User/Create";
import CreateFarm from "./Farms/Create";
import EditFarm from "./Farms/Edit";
import Governorate from "./Governorate/Index";
import CreateGovernorate from "./Governorate/Create";
import EditGovernorate from "./Governorate/Edit";
import ViewFarm from "./Governorate/ViewFarms";
import ErrorPage from "../404/404";
import { UserContext } from '../../App'
import Admin from "./Admin";
import { useNavigate } from "react-router-dom";
import Orders from "./Orders";
import { BiLogOut } from "react-icons/bi";
import Images from "../ImagesFarm/Images";
import Comments from "./Comments/Comments";



const HomeAdmin = () => {

    let navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const logout = () => {
        localStorage.removeItem('loggedUser')
        localStorage.removeItem('Lecture')
        localStorage.removeItem('date')
        localStorage.removeItem('fromDelete')
        localStorage.removeItem('governorates')
        setUser([])

        navigate('/')
    }

    return (

        <div className="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fas fa-bars"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <Link to='Orders'>Mzr3ti.com</Link>
                        <div onClick={logout} id="close-sidebar">
                            <BiLogOut />
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    {/* sidebar-search   */}
                    <div className="sidebar-menu">
                        <ul>
                            <li className="header-menu">
                                <span>General</span>
                            </li>
                            <li className="sidebar-dropdown">
                                <Link to="Orders">
                                    <i className="fa fa-tachometer-alt"></i>
                                    <span>Orders Dashboard</span>

                                </Link>
                            </li>
                            <li className="sidebar-dropdown">
                                <Link to="Users">
                                    <i className="fa fa-tachometer-alt"></i>
                                    <span>Users Dashboard</span>

                                </Link>
                            </li>
                            <li className="sidebar-dropdown">
                                <Link to="Farms">
                                    <i className="fa fa-tachometer-alt"></i>
                                    <span>Farms Dashboard</span>

                                </Link>
                            </li>
                            <li className="sidebar-dropdown">
                                <Link to="Governorates">
                                    <i className="fa fa-tachometer-alt"></i>
                                    <span>Governorates Dashboard</span>

                                </Link>
                            </li>
                            <li className="sidebar-dropdown">
                                <Link to="Comments">
                                    <i className="fa fa-tachometer-alt"></i>
                                    <span>Comments Dashboard</span>

                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* sidebar-menu  */}
                </div>
                {/* sidebar-content  */}

            </nav>
            {/* sidebar-wrapper   */}
            <main className="page-content">
                <div className="container-fluid" >
                    {/* <h1>ryahnah</h1> */}
                    {/* editUser */}
                    <Routes>
                        <Route path='/Admin' element={<Admin />} />
                        {/* users */}

                        <Route path='Users' element={<User />} />
                        <Route path='createUser' element={<CreateUser />} />
                        <Route path='editUser/:id' element={<EditUser />} />

                        {/* farms */}
                        <Route path='Farms' element={<Farm />} />
                        <Route path='createFarm' element={<CreateFarm />} />
                        <Route path='editFarm/:id' element={<EditFarm />} />

                        {/* Governorate */}
                        <Route path='Governorates' element={<Governorate />} />
                        <Route path='createGovernorate' element={<CreateGovernorate />} />
                        <Route path='editGovernorate/:id' element={<EditGovernorate />} />
                        <Route path='viewFarms/:id' element={<ViewFarm />} />
                        <Route path="AddImages/:id" element={<Images />} />
                        <Route path='Orders' element={<Orders />} />


                        <Route path='Comments' element={<Comments />} />-
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </div>
            </main>

        </div>

    )
}
export default HomeAdmin;

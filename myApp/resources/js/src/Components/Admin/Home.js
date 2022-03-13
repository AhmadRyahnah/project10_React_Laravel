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


const HomeAdmin = () => {

    const { setUser } = useContext(UserContext)
const logout = () => {
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('Lecture')
    localStorage.removeItem('date')
    localStorage.removeItem('fromDelete')
    localStorage.removeItem('Courses')
    setUser(false)

  }

    return (

        <div className="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fas fa-bars"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a href="#">pro sidebar</a>
                        <div onClick={logout} id="close-sidebar">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="sidebar-header">
                        <div className="user-pic">
                            <img
                                className="img-responsive img-rounded"
                                src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                alt="User picture"
                            />
                        </div>
                        <div className="user-info">
                            <span className="user-name"
                            >Jhon
                                <strong>Smith</strong>
                            </span>
                            <span className="user-role">Administrator</span>
                            <span className="user-status">
                                <i className="fa fa-circle"></i>
                                <span>Online</span>
                            </span>
                        </div>
                    </div>

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
                        </ul>
                    </div>
                    {/* sidebar-menu  */}
                </div>
                {/* sidebar-content  */}

            </nav>
            {/* sidebar-wrapper   */}
            <main className="page-content">
                <div className="container-fluid">
                    {/* <h1>ryahnah</h1> */}
                    {/* editUser */}
                    <Routes>

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


                        <Route path='*' element={<ErrorPage />}/>
                    </Routes>
                </div>
            </main>

        </div>

    )
}
export default HomeAdmin;

import React, { useState, useEffect, useContext } from 'react';

import styles from './Profile.module.css'
import { AiOutlineSetting, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import EditProfile from './editProfile'
import { UserContext } from '../../App'

const Profile = () => {
    let i = 1;
    const { User, setUser } = useContext(UserContext)

    const [Order, setOrder] = useState([])
    const [Governorates, setGovernorates] = useState()
    const [click, setClick] = useState(false)
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/profileOrder/" + User.id).then((response) => {
            setOrder(response.data.order);
            setGovernorates(response.data.governorates);
        });
    }, []);

    const Settings = () => {
        setClick(true)
    }
    const logout = () => {
        localStorage.removeItem('loggedUser')

        localStorage.removeItem('date')



    }

    return (

        <div className={styles.profileContianer}><br /><br />
            <div className={styles.profileHeader}>
                <h1>My Profile</h1>
                <ul className={styles.listButton}>
                    <li><button className={styles.btnSetting} onClick={Settings} >Settings<i><AiOutlineSetting /></i> </button></li>
                    <li><Link to="/LoginRegister" ><button onClick={logout} className={styles.btnLogout}>Logout</button></Link></li>
                </ul>
            </div><br /> {!click ? <>
                <div className={styles.information}>
                    {/* <h1>My Information</h1> */}
                    <div className={styles.detailes}>
                        <Avatar round="50%" name={User ? User.name : null} />
                        <h4><AiOutlineUser /> {User ? User.name : null}</h4>
                        <h4><i className={styles.icon} >< AiOutlineMail /></i>{User ? User.email : null}</h4>
                        <h4><i className={styles.icon} >< BsTelephone /></i> {User ? User.phone : null}</h4>
                    </div>
                </div>
                <br />

                <div className={styles.booking}>
                    <div className={styles.BookingsContaiiner}>
                        <div className={styles.Bookings}>
                            <h3>Your Bookings:</h3>
                        </div>
                        <div className={styles.customProfile}>
                            <table >
                                <tr>
                                    <th><h3>#</h3></th>
                                    <th><h3>Farm Name</h3></th>
                                    <th><h3>Governorate Name</h3></th>
                                    <th><h3>Price</h3></th>
                                    <th><h3>Booking Date</h3></th>
                                    <th><h3>Status</h3></th>
                                </tr>

                                {Order ? Order.map(item => <tr>

                                    <td><h4>{i++}</h4></td>
                                    <td><h4>{item.farmName}</h4></td>
                                    <td><h4>

                                        {Order && Governorates ?
                                            Governorates.map(element => {
                                                if (element.id === item.governorate_id) {
                                                   return element.governorateName
                                                }
                                            })

                                            : 0}



                                    </h4></td>
                                    <td><h4>{item.price}</h4></td>
                                    <td><h4>{item.date}</h4></td>
                                    <td>
                                        {item.status==='pending'?<h4 style={{ color:'red' }}>{item.status}</h4>:
                                        <h4 style={{ color:'green' }}>{item.status}</h4>}

                                        </td>
                                </tr>) : <h2>No Order Yet</h2>}

                            </table>
                        </div>
                    </div>
                </div>

            </> : <div className={styles.booking}>


                <EditProfile setClick={setClick} setUser={setUser} /></div>}
        </div>

    )
}

export default Profile

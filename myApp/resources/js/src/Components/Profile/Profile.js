import React from 'react';

import styles from './Profile.module.css'
import { AiOutlineSetting, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
const Profile = () => {
    const logout = () => {
        localStorage.removeItem('loggedUser')

        localStorage.removeItem('date')



    }

    return (
        <div className={styles.profileContianer}><br /><br />
            <div className={styles.profileHeader}>
                <h1>My Profile</h1>
                <ul className={styles.listButton}>
                    <li><button className={styles.btnSetting}>Settings<i><AiOutlineSetting /></i> </button></li>
                    <li><Link to="/SignInUp" ><button onClick={logout} className={styles.btnLogout}>Logout</button></Link></li>
                </ul>
            </div><br />
            <div className={styles.information}>
                {/* <h1>My Information</h1> */}
                <div className={styles.detailes}>
                    <Avatar round="50%" name="Ahmad Ryahnah" />
                    <h4><AiOutlineUser /> ahmad</h4>
                    <h4><i className={styles.icon} >< AiOutlineMail /></i> ahmad@gmail.com</h4>
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
                                <th><h3>name</h3></th>
                                <th><h3>name</h3></th>
                                <th><h3>name</h3></th>
                                <th><h3>name</h3></th>
                                <th><h3>name</h3></th>
                            </tr>

                            <tr>

                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                            </tr>
                            <tr>

                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                            </tr>
                            <tr>

                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                                <td><h5>ahmad</h5></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile

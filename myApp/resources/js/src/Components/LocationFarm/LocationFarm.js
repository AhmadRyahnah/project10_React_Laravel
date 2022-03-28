import React from 'react'

import styles from "./Location.module.css";

const LocationFarm = (props) => {

    // const loc="32.53378819133625, 35.862708200183135"
    return (



        <div className={styles.mapouter} >
            <div className={styles.gmap_canvas} >
                <iframe className={styles.iframeLocation}  id="gmap_canvas" src={`https://maps.google.com/maps?q=${props.Location}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                </iframe>
                <a href="https://123movies-to.org"></a>
                <br />

                {/* <a href="https://www.embedgooglemap.net">google maps plugin html</a> */}

            </div>
        </div>

    );
}

export default LocationFarm


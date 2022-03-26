import React from 'react'


const LocationFarm = (props) => {

    // const loc="32.53378819133625, 35.862708200183135"
    return (



        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="500" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${props.Location}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                </iframe>
                <a href="https://123movies-to.org"></a>
                <br />

                {/* <a href="https://www.embedgooglemap.net">google maps plugin html</a> */}

            </div>
        </div>

    );
}

export default LocationFarm


import React, { Fragment, useState, useEffect } from 'react'
import Cardgovernorates from './CardFarms'
import { useNavigate, useParams } from "react-router-dom";

// import governoratesItem from './governoratesItem'
import axios from 'axios';
import styles from './governorates.module.css'
// import './governorates.css'
import Slider from '../../Slider/SliderImg'

const Governorates = () => {
    const { id } = useParams();

    const [IdG, setIdG] = useState(id ? id : 'all');

    const [Farms, setFarms] = useState();
    const [Price, setPrice] = useState('')
    const [Governorate, setGovernorate] = useState();
    const [GovernoratesAll, setGovernoratesAll] = useState();

    let i = 1;



    // **************************
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name)
        // console.log(value);;
        setIdG(value)
        // setInputs(values => ({ ...values, [name]: value }));



    }




    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/Governorates").then((response) => {
            setGovernoratesAll(response.data);
            // console.log(response.date);
        });
    }, []);

    // ***************************
    useEffect(async () => {

        await axios.get("http://127.0.0.1:8000/api/showFarm/" + IdG).then((response) => {
            setFarms(response.data.farm);
            setGovernorate(response.data.Governorat.governorateName)
            // console.log(response.date);
        }).catch(error => {
            setGovernorate(false)
        })
    }, [IdG]);

    useEffect(() => {

        if (Price == 'Ascending') {
            setFarms(Farms ? Farms.sort((a, b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0)) : null)

        } else if (Price == 'Descending') {
            setFarms(Farms ? Farms.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)) : null)

        }


    }, [Price]);

    let FarmsItems = null;


    if (Farms)
        FarmsItems = Farms.map((CardItem) => {
            return (
                <Cardgovernorates
                    // Card={CardItem}
                    key={CardItem.id}
                    img={CardItem.image}
                    title={CardItem.farmName}
                    desc={CardItem.description}
                    price={CardItem.price}
                    alt={CardItem.farmName}
                    id={CardItem.id}
                />
            )
        })




    return (
        <Fragment>

            <div className={styles.ryahnah}>
                {/* <div className={styles.sidebars}>
                    <h1>Filter by:</h1>
                    <div className={styles.customSideBackground}>
                        <p>Price:</p>
                        <form>
                            <input checked={Price == 'Descending' ? 'checked' : null} onChange={(e) => { setPrice(e.target.value) }} type="radio" id="price" name="fav_language" value={'Descending'} />
                            <label htmlFor="price">Price Descending</label><br />
                            <input checked={Price !== 'Descending' ? 'checked' : null} onChange={(e) => { setPrice(e.target.value) }} type="radio" id="price" name="fav_language" value={'Ascending'} />
                            <label htmlFor="price">Price Ascending</label><br />
                        </form>
                    </div>
                    <br /><br />
                    <div className={styles.customSideBackground}>
                        <p>Trending Neighbourhoods</p>
                        <input checked={IdG === 'all' ? 'checked' : null} onChange={handleChange} type="radio" id="html" name="fav_language" value={'all'} />
                        <label htmlFor="html">All</label><br />
                        {GovernoratesAll ? GovernoratesAll.map(item =>
                            <>
                                <input checked={IdG == item.id ? 'checked' : null} onChange={handleChange} type="radio" id="html" name="fav_language" value={item.id} />
                                <label htmlFor="html">{item.governorateName}</label>
                                <br />   </>

                        )

                            : null}
                    </div>


                </div> */}


                {/* <Slider /> */}

                <div className={styles.governoratesCont}>

                    <h1 className={styles.header}> {Governorate ? 'Farms in' + ' ' + Governorate : 'All Farms'}</h1>
                    <div className={styles.navMobile}>
                        <div className={styles.selectGove}>
                            {/* <label>Trending Neighbourhoods</> */}



                            <select onChange={handleChange} name="fav_language">
                                {/* <option value={'all'} >Trending Neighbourhoods</option> */}
                                <option className={styles.selectGove} value={'all'} >All </option>
                                {GovernoratesAll ? GovernoratesAll.map(item =>
                                    <>

                                        <option value={item.id} >{item.governorateName}</option>




                                    </>

                                )

                                    : null}
                            </select>
                            {/* </div> */}
                        </div>

                    </div>
                    <div className={styles.governorates}>
                        {FarmsItems}
                    </div>

                </div>
            </div>

        </Fragment>
    )
}

export default Governorates

import React from "react";
import { useState, useEffect } from "react";
import "./Tesimonial.css";
import styles from './MostPopular.module.css'

const Testimonial = () => {
    let imgNum = 0;
    let imgAlt = 0;
    let nameNum = 0;
    const [img, setImg] = useState({
        src: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        alt: "I recently moved to Amman from the US, and rented an apartment through mzr3ti for the first month of my stay. Hamza from mzr3ti was extremely helpful and responsive and found me an apartment that contained everything I was looking for.",
        name: 'christian buehner'
    });
    const images = [
        'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        'https://images.unsplash.com/photo-1585807515950-bc46d934c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

    ];
    const alt = [
        "I recently moved to Amman from the US, and rented an apartment through mzr3ti for the first month of my stay. Hamza from mzr3ti was extremely helpful and responsive and found me an apartment that contained everything I was looking for.",
        "As a newcomer to Amman with an urgent need for good  high-quality accommodation the mzr3ti team especially came in handy with their prompt  rapid responses and thoughtful suggestions of good places to rent everything I was looking for",
        "Great service for new residents to Jordan, friendly team who curate a variety of housing options and help clients find their ideal home. Good awareness of different neighborhoods and housing styles. Would definitely recommend to others!",

    ];



    const name = [
        "christian buehner",
        "Robert Godwin",
        "Vinicius Wiesehofer",

    ];

    useEffect(() => {
        setInterval(next, 6000);
    }, []);

    const next = () => {
        imgNum++;
        imgAlt++;
        nameNum++;
        if (imgNum > images.length - 1 && imgAlt > alt.length - 1 && nameNum > name.length - 1) {
            imgNum = 0;
            imgAlt = 0;
            nameNum = 0;

        }
        setImg({ src: images[imgNum], alt: alt[imgAlt], name: name[nameNum] });
    };
    return (
        <div className="background">

            <div className="TestimonialContainer">
                <h1 className={styles.headerM}>Check Out What Others are Saying</h1>

                <div className="Testimonial">
                    <img src={img.src} alt={img.alt} />
                    <div className="paraAndName">
                        <h3>{img.alt} </h3>
                        <h1>{img.name}</h1>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Testimonial;

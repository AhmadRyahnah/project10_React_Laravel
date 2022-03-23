import React from "react";
import { useState, useEffect } from "react";
import "./Tesimonial.css";
import styles from './MostPopular.module.css'

const Testimonial = () => {
    let imgNum = 0;
    let imgAlt = 0;
    let nameNum = 0;
    const [img, setImg] = useState({
        src: 'https://civilengineeringacademy.com/wp-content/uploads/2020/08/Victor-Torres.jpg',
        alt: "After 8 years out of school, I took the test back then and I did terrible(I honestly did not study) This time with the help of this course I finally got it done! Thank you!!",
        name: 'Victor Guzman, PE'
    });
    const images = [
        'https://civilengineeringacademy.com/wp-content/uploads/2020/08/Victor-Torres.jpg',
        'https://civilengineeringacademy.com/wp-content/uploads/2021/02/Makenzie-Allen.jpg',
        'https://civilengineeringacademy.com/wp-content/uploads/2021/02/St-Pierre-Jason.jpg',

    ];
    const alt = [
        "After 8 years out of school, I took the test back then and I did terrible(I honestly did not study) This time with the help of this course I finally got it done! Thank you!!",
        "I passed!! Second attempt taking the PE and first time with this review course! The video lectures, example problems, and practice exams definitely helped! Thank you so much everyone!",
        "CEA is an excellent place to strengthen your breadth portion and the depth exam can complement your breadth studies. Very thankful for the course! This course is worth every penny!",

    ];
    const name = [
        "Victor Guzman, PE",
        "Makenzie Allen",
        "St Pierre Jason",

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

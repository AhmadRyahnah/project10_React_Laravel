import React from 'react'
import ScrollToTop from "react-scroll-up";
import { FaArrowUp } from "react-icons/fa";
import styles from './ScrollUp.module.css'
const ScrollUp = () => {
    return (
        <div className={styles.ScrollUp}>

            <ScrollToTop showUnder={500}>
                <FaArrowUp />
            </ScrollToTop>
        </div>
    )
}

export default ScrollUp

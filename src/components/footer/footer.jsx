import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    const numPeople = 10;
    return (
        <div className={styles.box}>
            <p className={styles.stn}>{numPeople} people is online</p>
            <p className={styles.stn}>UBCO Bamboo since 2022</p>
            <p className={styles.stn}>Go to the top</p>
        </div>

    )
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menubar.module.css';

const Menubar = (props) => {

    return (
        <div className={styles.box}>
            <div className={styles.item}>
                <Link className={styles.link} to="/profile">Profile</Link>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post">All</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=popular_post">Popular Posts</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=history">History</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=bookmark">Book Mark</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=confession">Confession</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=sex">Sex</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=notification">Notification</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=information">Information</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=humor">Humor</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/post?c=gibberish">gibberish</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menubar;
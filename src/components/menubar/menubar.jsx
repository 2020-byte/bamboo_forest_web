import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './menubar.module.css';

const Menubar = ({toggle, closeMenubar}) => {

    const handleClickMenubar = () => {
        closeMenubar();
    }


    const [display, setDisplay] = useState('block')

    

    const [username, setUsername] = useState('user1__student');

    return (
        <div className={styles.box} style={{display}}>
            <div className={styles.item} onClick={handleClickMenubar}>
                <Link className={styles.link} to="/post_view_settings">🌿{username}</Link>
            </div>
            <div className={styles.item} onClick={handleClickMenubar}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=all">All</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=popular_posts">Popular Posts</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.item} onClick={handleClickMenubar}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=history">History</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=bookmark">Book Mark</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.item} onClick={handleClickMenubar}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=confession">Confession</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=sex">Sex</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.item} onClick={handleClickMenubar}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=notification">Notification</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=information">Information</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=humor">Humor</Link>
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.listItem}>
                        <Link className={styles.link} to="/posts?c=gibberish">gibberish</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menubar;
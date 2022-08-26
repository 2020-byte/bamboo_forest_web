import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './headbar.module.css';


const Headbar = ({categoryName}) => {
    
    return (
        <section className={styles.headbar}>
                <div>
                <NavDropdown 
                    title={categoryName} 
                    id="navbarScrollingDropdown"
                >
                <NavDropdown.Item as="div">
                    <Link to="/posts?c=all" className={styles.link}>
                        All
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                    <Link to="/posts?c=popular_posts" className={styles.link}>
                        Popular Posts
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                    <Link to="/posts?c=history" className={styles.link}>
                        History
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                    <Link to="/posts?c=bookmark" className={styles.link}>
                        Book Mark
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div">
                    <Link to="/posts?c=notificiation" className={styles.link}>
                        Notification
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div">
                    <Link to="/post_view_settings" className={styles.link}>Post view settings</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                    <Link to="/edit_my_information" className={styles.link}>Edit My Information</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                    <Link to='/report' className={styles.link}>
                        Report
                    </Link>
                </NavDropdown.Item>
                </NavDropdown>
                </div>
                <Link to="/write" className={styles.writeButton}>
                    <i className="fa-solid fa-pencil"></i>
                    <span>Post</span>
                </Link>
            </section>
    )
}

export default Headbar;